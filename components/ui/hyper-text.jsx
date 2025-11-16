"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className = "",
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
}) {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);
  const elementRef = useRef(null);

  const triggerAnimation = () => {
    if (isAnimating) return;
    
    iterations.current = 0;
    setIsAnimating(true);
    const interval = setInterval(() => {
      if (iterations.current < children.length) {
        setDisplayText((prevText) =>
          prevText
            .split("")
            .map((char, index) => {
              if (index < iterations.current) {
                return children[index];
              }
              if (char === " ") {
                return " ";
              }
              return alphabets[getRandomInt(26)];
            })
            .join("")
        );
        iterations.current = iterations.current + 0.1;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, duration / (children.length * 10));

    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (startOnView && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && isFirstRender.current) {
            setTimeout(() => {
              triggerAnimation();
              isFirstRender.current = false;
            }, delay);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(elementRef.current);

      return () => observer.disconnect();
    }
  }, [startOnView, delay]);

  return (
    <Component
      ref={elementRef}
      className={className}
      onMouseEnter={animateOnHover ? triggerAnimation : undefined}
    >
      <AnimatePresence mode="wait">
        {displayText.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </Component>
  );
}
