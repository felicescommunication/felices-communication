import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function FloatingContactButton() {
  const [scrolledDown, setScrolledDown] = useState(false)
  const [isInHero, setIsInHero] = useState(true)
  const [hovered, setHovered] = useState(false)

  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight

      setIsInHero(currentScrollY < heroHeight * 0.9)

      if (currentScrollY > lastScrollY.current) {
        setScrolledDown(true)
      } else {
        setScrolledDown(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isSmall = !isInHero && scrolledDown

  const currentImage =
    hovered || !isSmall
      ? "/src/assets/bouton contacte.svg"  
      : "/src/assets/bouton contacte2.svg"  

  const computedScale = hovered
    ? 1.1
    : isSmall
    ? 0.7
    : 1

  return (
   <motion.a
  href="/contact"
  className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-4 z-50"
  style={{ transformOrigin: "bottom right" }}
  animate={{ scale: computedScale }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 20
  }}
  onHoverStart={() => setHovered(true)}
  onHoverEnd={() => setHovered(false)}
>
      <motion.img
  key={currentImage}
  src={currentImage}
  alt="Contact"
  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.25 }}
/>
    </motion.a>
  )
}
