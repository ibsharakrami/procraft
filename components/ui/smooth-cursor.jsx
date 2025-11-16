'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function SmoothCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Smooth cursor position with spring physics
  const cursorX = useSpring(0, { damping: 45, stiffness: 400, mass: 1 });
  const cursorY = useSpring(0, { damping: 45, stiffness: 400, mass: 1 });

  // Rotation based on movement
  const [rotation, setRotation] = useState(0);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsVisible(false);
      return;
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update cursor position
      cursorX.set(x);
      cursorY.set(y);

      // Calculate rotation based on movement direction
      const deltaX = x - lastPosition.current.x;
      const deltaY = y - lastPosition.current.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        setRotation(angle);
      }

      lastPosition.current = { x, y };

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.dataset.cursor === 'hover' ||
        target.closest('[data-cursor="hover"]');

      setIsHovering(!!isInteractive);

      // Check if hovering over drag element
      const isDragElement = 
        target.classList.contains('cursor-grab') ||
        target.closest('.cursor-grab');
      
      setIsDragging(!!isDragElement);
    };

    // Mouse down/up handlers
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Mouse leave handler
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Determine cursor scale based on state
  const scale = isClicking ? 0.8 : isHovering ? 1.5 : 1;
  const innerScale = isClicking ? 0.5 : isHovering ? 1.3 : 1;
  const ringSize = isHovering ? 50 : 40;
  const dotSize = isHovering ? 10 : 8;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale,
            rotate: rotation * 0.1,
          }}
          transition={{
            scale: { duration: 0.2, ease: 'easeOut' },
            rotate: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          {/* Outer ring with blur effect */}
          <motion.div
            className="absolute rounded-full border-2 transition-all duration-200"
            style={{
              width: `${ringSize}px`,
              height: `${ringSize}px`,
              borderColor: isDragging ? '#10367D' : isHovering ? '#74B4D9' : 'rgba(116, 180, 217, 0.6)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: isHovering ? '0 0 20px rgba(116, 180, 217, 0.3)' : 'none',
            }}
            animate={{
              width: `${ringSize}px`,
              height: `${ringSize}px`,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="absolute rounded-full transition-all duration-200"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: isDragging ? '#10367D' : isHovering ? '#74B4D9' : '#10367D',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: isHovering ? '0 0 10px rgba(116, 180, 217, 0.5)' : 'none',
            }}
            animate={{
              scale: innerScale,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          />

          {/* Drag indicator */}
          {isDragging && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute text-lg font-bold"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                color: '#74B4D9',
              }}
            >
              ⇄
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
