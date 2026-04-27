import { useEffect, useRef, useState } from "react"

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)
  const isPaused = useRef(false)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex(prev => (prev + 1) % images.length)
      }
    }, 2000)

    return () => clearInterval(intervalRef.current)
  }, [images.length])

  return (
    <div
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
      onTouchStart={() => (isPaused.current = true)}
      onTouchEnd={() => (isPaused.current = false)}
      className="w-full h-full rounded-3xl relative overflow-hidden"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="
            absolute inset-0
            bg-cover
            bg-center
            transition-all duration-[1000ms]
          "
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentIndex ? 1 : 0,
            transform: "scale(1)" 
          }}
        />
      ))}
    </div>
  )
}