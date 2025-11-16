"use client"

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"
import { useRef, useState } from "react"

/**
 * ScrollVelocityContainer - Wrapper component for scroll-velocity based animations
 * Provides context for child ScrollVelocityRow components
 */
export function ScrollVelocityContainer({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

/**
 * Wrap value to create infinite loop effect
 * When content scrolls past -50%, reset to 0%
 */
function wrap(min, max, value) {
  const range = max - min
  return ((((value - min) % range) + range) % range) + min
}

/**
 * ScrollVelocityRow - Horizontal scrolling row that responds to scroll
 * Uses direction multiplier to create opposite movement between rows
 *
 * @param {number} baseVelocity - Base speed when not scrolling (default 1)
 * @param {number} direction - Direction multiplier: 1 or -1 (default 1)
 * @param {React.ReactNode} children - Content to scroll (will be duplicated for infinite effect)
 * @param {string} className - Additional CSS classes
 */
export function ScrollVelocityRow({
  baseVelocity = 1,
  direction = 1,
  children,
  className = "",
}) {
  const baseX = useRef(0)
  const lastScrollDirection = useRef(1) // Track persistent scroll direction
  const [isHovered, setIsHovered] = useState(false) // Track hover state for pause
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  /**
   * Create a motion value for the x position
   * Using useMotionValue prevents hydration errors
   */
  const x = useMotionValue(0)

  /**
   * Update position on every frame with STICKY direction
   * The last scroll direction persists even after scrolling stops
   * Pauses when row is hovered
   * - direction=1: Scroll DOWN→RIGHT (sticky), Scroll UP→LEFT (sticky)
   * - direction=-1: Scroll DOWN→LEFT (sticky), Scroll UP→RIGHT (sticky)
   */
  useAnimationFrame((t, delta) => {
    // Pause animation when hovered
    if (isHovered) return

    // Get current scroll velocity (with sign)
    const currentVelocity = smoothVelocity.get()

    // Update sticky direction when actively scrolling
    // Only update if velocity is significant (avoid noise near zero)
    if (Math.abs(currentVelocity) > 10) {
      lastScrollDirection.current = Math.sign(currentVelocity)
    }

    // Calculate effective direction (combines row direction + sticky scroll direction)
    const effectiveDirection = direction * lastScrollDirection.current

    // Calculate scroll-based speed (magnitude only, direction is separate)
    const scrollSpeed = Math.abs(currentVelocity) * (delta / 1000) * 0.01

    // Base continuous movement
    const baseSpeed = baseVelocity * (delta / 1000)

    // Combine speeds, then apply effective direction
    // This ensures everything moves in the sticky direction
    const moveBy = effectiveDirection * (scrollSpeed + baseSpeed)

    // Update the base position
    baseX.current = baseX.current + moveBy

    // Wrap around for infinite loop (handles both directions)
    if (baseX.current < -50) {
      baseX.current = wrap(-50, 0, baseX.current)
    } else if (baseX.current > 0) {
      baseX.current = wrap(-50, 0, baseX.current)
    }

    // Update the motion value (this triggers the animation)
    x.set(baseX.current + "%")
  })

  return (
    <div
      className={`flex flex-nowrap ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        style={{ x }}
      >
        {/* Render children twice for infinite scroll effect */}
        <div className="flex flex-nowrap">{children}</div>
        <div className="flex flex-nowrap">{children}</div>
      </motion.div>
    </div>
  )
}
