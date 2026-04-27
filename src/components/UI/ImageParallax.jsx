import { useRef, useState, useEffect } from "react"

export default function ImageParallax({ width = 400, height = 300, layers = [] }) {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef(null)
  const layerRefs = useRef([])
  const frameRef = useRef(null)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = (x - centerX) / 20
    const moveY = (y - centerY) / 20


    if (frameRef.current) cancelAnimationFrame(frameRef.current)

    frameRef.current = requestAnimationFrame(() => {
      layerRefs.current.forEach((layer) => {
        if (!layer) return
        const speed = layer.dataset.speed
        layer.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    })
  }

  const handleMouseLeave = () => {
    layerRefs.current.forEach((layer) => {
      if (!layer) return
      layer.style.transform = "translate(0px, 0px)"
    })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{ width, height }}
    >
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
          style={{
            transitionDelay: `${index * 120}ms`
          }}
        >
          <img
            ref={(el) => (layerRefs.current[index] = el)}
            src={layer.src}
            data-speed={layer.speed}
            alt=""
            loading="lazy"
            className="w-full h-full object-contain will-change-transform"
          />
        </div>
      ))}
    </div>
  )
}