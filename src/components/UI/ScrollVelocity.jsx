import { useRef, useLayoutEffect, useState, useEffect } from "react"
import React from "react"
import {
  motion,
  useScroll,
  useMotionValue,
  useAnimationFrame,
  useInView
} from "motion/react"

import "./ScrollVelocity.css"

function useElementWidth(ref) {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)

    return () => window.removeEventListener("resize", updateWidth)
  }, [ref])

  return width
}

export const ScrollVelocity = ({
  texts = [],
  velocity = 100,
  className = "",
  numCopies = 6,
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
}) => {

  function VelocityText({
    children,
    baseVelocity,
    className,
    numCopies,
  }) {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, {
      margin: "-20% 0px -20% 0px"
    })

    const baseX = useMotionValue(0)

    const copyRef = useRef(null)
    const copyWidth = useElementWidth(copyRef)

    const directionFactor = useRef(1)
    const dynamicSpeed = useRef(0)
    const hasStarted = useRef(false)

    useEffect(() => {

      const handleWheel = (e) => {
        dynamicSpeed.current += e.deltaY * 1.5
        hasStarted.current = true
      }

      window.addEventListener("wheel", handleWheel, { passive: true })

      return () => window.removeEventListener("wheel", handleWheel)

    }, [])

    function wrap(min, max, v) {
      const range = max - min
      const mod = (((v - min) % range) + range) % range
      return mod + min
    }

    const x = useMotionValue(0)

    useAnimationFrame((t, delta) => {

      if (!isInView) return
if (!hasStarted.current) return

      const autoSpeed =
        directionFactor.current *
        baseVelocity *
        2 *
        (delta / 1000)

      const boost =
        dynamicSpeed.current *
        0.03 *
        (delta / 16)

      dynamicSpeed.current *= 0.85

      if (Math.abs(dynamicSpeed.current) > 1) {
        directionFactor.current =
          dynamicSpeed.current > 0 ? 1 : -1
      }

      const newX = baseX.get() + autoSpeed + boost

      if (copyWidth) {
        baseX.set(wrap(-copyWidth, 0, newX))
      } else {
        baseX.set(newX)
      }

    })

    return (
      <div ref={containerRef} className={parallaxClassName}>
        <motion.div
          className={scrollerClassName}
          style={{ x: baseX }}
        >
          {Array.from({ length: numCopies }).map((_, i) => (
            <span
              key={i}
              ref={i === 0 ? copyRef : null}
              className={className}
            >
              {children}&nbsp;
            </span>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden">
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={-Math.abs(velocity)}
          className={className}
          numCopies={numCopies}
        >
          {text}
        </VelocityText>
      ))}
    </div>
  )
}

export default React.memo(ScrollVelocity)