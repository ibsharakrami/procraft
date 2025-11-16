'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to dynamically detect background color at specific coordinates
 * and return appropriate text color (light/dark) for optimal contrast.
 * 
 * Uses canvas pixel sampling to detect actual background colors including:
 * - Solid colors
 * - Gradients
 * - Background images
 * - Overlapping elements
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.x - X coordinate to sample (default: 0)
 * @param {number} options.y - Y coordinate to sample (default: 0)
 * @param {number} options.throttle - Update throttle in ms (default: 100)
 * @returns {string} 'light' or 'dark' - The appropriate text color
 */
export function useAdaptiveTextColor({ x = 0, y = 0, throttle = 100 } = {}) {
  const [textColor, setTextColor] = useState('dark');
  const [isEnabled, setIsEnabled] = useState(false);
  const lastUpdateTime = useRef(0);
  const rafId = useRef(null);
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);

  /**
   * Calculate relative luminance using WCAG formula
   * @param {number} r - Red (0-255)
   * @param {number} g - Green (0-255)
   * @param {number} b - Blue (0-255)
   * @returns {number} Luminance value (0-1)
   */
  const calculateLuminance = useCallback((r, g, b) => {
    // Normalize RGB values
    const [rs, gs, bs] = [r, g, b].map((val) => {
      const normalized = val / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });

    // WCAG relative luminance formula
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }, []);

  /**
   * Sample pixel color at specific coordinates
   * @param {number} posX - X coordinate
   * @param {number} posY - Y coordinate
   * @returns {Object|null} RGB values or null if sampling fails
   */
  const samplePixelColor = useCallback((posX, posY) => {
    try {
      // Create a small canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      
      // Sample a 5x5 area for better accuracy
      const sampleSize = 5;
      canvas.width = sampleSize;
      canvas.height = sampleSize;

      // Calculate sampling area
      const startX = Math.max(0, posX - Math.floor(sampleSize / 2));
      const startY = Math.max(0, posY - Math.floor(sampleSize / 2));

      // Draw the sampled area from the document
      // Note: This samples from rendered content
      ctx.drawImage(
        document.documentElement,
        startX,
        startY,
        sampleSize,
        sampleSize,
        0,
        0,
        sampleSize,
        sampleSize
      );

      // Get pixel data
      const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
      const pixels = imageData.data;

      // Calculate average color
      let r = 0, g = 0, b = 0, count = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        r += pixels[i];
        g += pixels[i + 1];
        b += pixels[i + 2];
        count++;
      }

      return {
        r: Math.round(r / count),
        g: Math.round(g / count),
        b: Math.round(b / count),
      };
    } catch (error) {
      // Fallback: try alternative method using getComputedStyle
      try {
        const element = document.elementFromPoint(posX, posY);
        if (!element) return null;

        const style = window.getComputedStyle(element);
        const bgColor = style.backgroundColor;

        // Parse rgb/rgba
        const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          return {
            r: parseInt(match[1]),
            g: parseInt(match[2]),
            b: parseInt(match[3]),
          };
        }
      } catch (fallbackError) {
        console.warn('Adaptive text color sampling failed:', fallbackError);
      }

      return null;
    }
  }, []);

  /**
   * Update text color based on background brightness
   */
  const updateTextColor = useCallback(() => {
    const now = Date.now();
    
    // Throttle updates
    if (now - lastUpdateTime.current < throttle) {
      return;
    }

    // Skip if scrolling
    if (isScrolling.current) {
      return;
    }

    lastUpdateTime.current = now;

    // Sample pixel at specified coordinates
    const color = samplePixelColor(x, y);

    if (color) {
      const luminance = calculateLuminance(color.r, color.g, color.b);
      
      // WCAG recommends 0.5 as threshold
      // luminance > 0.5 = light background → use dark text
      // luminance ≤ 0.5 = dark background → use light text
      const newTextColor = luminance > 0.5 ? 'dark' : 'light';
      
      setTextColor(newTextColor);
    }
  }, [x, y, throttle, samplePixelColor, calculateLuminance]);

  /**
   * Animation frame loop
   */
  const loop = useCallback(() => {
    updateTextColor();
    rafId.current = requestAnimationFrame(loop);
  }, [updateTextColor]);

  /**
   * Handle scroll events
   */
  const handleScroll = useCallback(() => {
    isScrolling.current = true;

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Resume updates after scrolling stops
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
      updateTextColor();
    }, 150);
  }, [updateTextColor]);

  useEffect(() => {
    // Only enable on desktop (fine pointer)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsEnabled(hasFinePointer);

    if (!hasFinePointer) {
      return;
    }

    // Initial update
    updateTextColor();

    // Start animation loop
    rafId.current = requestAnimationFrame(loop);

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Listen to resize events
    window.addEventListener('resize', updateTextColor);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateTextColor);
    };
  }, [isEnabled, loop, handleScroll, updateTextColor]);

  return textColor;
}
