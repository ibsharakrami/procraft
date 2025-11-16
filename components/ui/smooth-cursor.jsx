"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SmoothCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  
  // Faster spring response with increased stiffness
  const sx = useSpring(x, { damping: 25, stiffness: 300, mass: 0.4 });
  const sy = useSpring(y, { damping: 25, stiffness: 300, mass: 0.4 });

  const last = useRef({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    // disable on touch devices
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    function onMove(e) {
      const cx = e.clientX;
      const cy = e.clientY;
      x.set(cx);
      y.set(cy);

      const dx = cx - last.current.x;
      const dy = cy - last.current.y;
      // Only update angle if there's significant movement
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        const a = Math.atan2(dy, dx) * (180 / Math.PI);
        setAngle(a + 90);
      }
      last.current = { x: cx, y: cy };

      // detect interactive targets
      const t = e.target;
      const interactive =
        t.closest && (t.closest("a") || t.closest("button") || t.closest("[role=button]") || t.classList.contains("cursor-pointer") || t.dataset.cursor === "hover");
      setHovering(!!interactive);
    }

    function onDown() {
      setPressed(true);
    }
    function onUp() {
      setPressed(false);
    }
    function onLeave() {
      setVisible(false);
    }
    function onEnter() {
      setVisible(true);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y]);

  if (!visible) return null;

  // Subtle scale changes
  const scale = pressed ? 0.9 : hovering ? 1.1 : 1;
  
  // Brand color for stroke/outline
  const brandStroke = pressed ? "#10367D" : hovering ? "#74B4D9" : "#74B4D9";
  
  // Brand-themed glow effects around the black cursor
  const brandGlow = pressed 
    ? "drop-shadow(0 0 6px rgba(16, 54, 125, 0.8)) drop-shadow(0 0 12px rgba(16, 54, 125, 0.4))" 
    : hovering 
    ? "drop-shadow(0 0 8px rgba(116, 180, 217, 0.9)) drop-shadow(0 0 16px rgba(116, 180, 217, 0.5))"
    : "drop-shadow(0 0 4px rgba(116, 180, 217, 0.6)) drop-shadow(0 0 8px rgba(116, 180, 217, 0.3))";

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ 
        x: sx, 
        y: sy, 
        translateX: "-50%", 
        translateY: "-50%"
      }}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: angle }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          filter: brandGlow
        }}
      >
        {/* Black cursor with brand color stroke/outline */}
        <path 
          d="M10 0 C10 0, 10.5 0.5, 11 1 L19 18 C19.5 19, 19 20, 18 20 L11 17 C10.5 16.8, 10 16.8, 9.5 17 L2 20 C1 20, 0.5 19, 1 18 L9 1 C9.5 0.5, 10 0, 10 0 Z" 
          fill="black"
          stroke={brandStroke}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
