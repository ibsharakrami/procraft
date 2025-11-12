'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to determine theme (dark/light) at different viewport zones
 * based on which section is currently occupying that zone.
 *
 * Zones:
 * - topTheme: For elements at top (phone number, brand name)
 * - middleTheme: For elements at center (hamburger menu)
 * - bottomTheme: For elements at bottom (scroll indicator)
 *
 * @returns {Object} { topTheme, middleTheme, bottomTheme }
 */
export function useNavigationTheme() {
  const [topTheme, setTopTheme] = useState('dark');
  const [middleTheme, setMiddleTheme] = useState('dark');
  const [bottomTheme, setBottomTheme] = useState('dark');

  const detectThemeAtPosition = useCallback((yPosition) => {
    // Get all sections with data-theme attribute
    const sections = document.querySelectorAll('section[data-theme]');

    // Find which section contains this Y position
    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      // Check if yPosition is within this section's bounds
      if (rect.top <= yPosition && rect.bottom >= yPosition) {
        return section.getAttribute('data-theme');
      }
    }

    // Default to dark if no section found
    return 'dark';
  }, []);

  const updateThemes = useCallback(() => {
    const viewportHeight = window.innerHeight;

    // Define zone positions
    const topZoneY = 100; // Top 100px (for phone, brand, top of hamburger)
    const middleZoneY = viewportHeight / 2; // Center of viewport (for hamburger)
    const bottomZoneY = viewportHeight - 100; // Bottom 100px (for scroll indicator)

    // Detect theme at each position
    const newTopTheme = detectThemeAtPosition(topZoneY);
    const newMiddleTheme = detectThemeAtPosition(middleZoneY);
    const newBottomTheme = detectThemeAtPosition(bottomZoneY);

    // Update states
    setTopTheme(newTopTheme);
    setMiddleTheme(newMiddleTheme);
    setBottomTheme(newBottomTheme);
  }, [detectThemeAtPosition]);

  useEffect(() => {
    // Initial detection
    updateThemes();

    // Update on scroll with debouncing for performance
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        updateThemes();
      }, 50); // 50ms debounce
    };

    // Update on resize
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        updateThemes();
      }, 100); // 100ms debounce for resize
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Also update when sections load (images, etc.)
    const observer = new MutationObserver(() => {
      updateThemes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [updateThemes]);

  return { topTheme, middleTheme, bottomTheme };
}
