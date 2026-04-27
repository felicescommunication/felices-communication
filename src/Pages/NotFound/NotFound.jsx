import { useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Button from "../../components/UI/Button"
import Container from "../../components/UI/Container"
import ColorBends from "../../components/UI/ColorBends"
import ShinyText from "../../components/UI/ShinyText"

export default function NotFound({ setVariant }) {

  const navigate = useNavigate()

  const goHome = useCallback(() => {
    navigate("/")
  }, [navigate])

  useEffect(() => {
    setVariant("transparent")
    return () => setVariant("default")
  }, [setVariant])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-[#F4EFC9] overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ColorBends
          rotation={-80}
          speed={0.1}
          colors={["#55001a", "#ffd5fb", "#55001a"]}
          transparent
          autoRotate={0.05}
          scale={1.2}
          frequency={0.9}
          warpStrength={1.1}
          mouseInfluence={5}
          parallax={3}
          noise={0}
        />
      </div>

      {/* contenu */}
      <Container>
        <div className="relative z-20 flex flex-col items-center text-center">

          <motion.h1
            className="font-['TitanOne'] text-[#021d36] mb-6 text-[clamp(2.5rem,6vw,6rem)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShinyText
              text="Cette page n'existe pas"
              speed={2.5}
              color="#54001A"
              shineColor="#a10033"
              spread={130}
            />
          </motion.h1>

          <motion.p
            className="text-[#021d36] text-lg md:text-xl mb-15"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Vous vous êtes trompés ?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={goHome}
              className="!bg-[#031E39] text-[#FFCFF5] px-6 py-3 md:px-10 md:py-4 rounded-full font-['TitanOne'] text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:!bg-[#54001A] hover:text-[#F4EFC9] hover:scale-105"
            >
              Page d'accueil
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}