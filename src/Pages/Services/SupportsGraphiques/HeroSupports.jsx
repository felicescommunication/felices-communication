import { lazy, Suspense, useRef } from "react"
import { Link } from "react-router-dom"

import Container from "../../../components/UI/Container"
import ScrollVelocity from "../../../components/UI/ScrollVelocity"
import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

import { motion } from "framer-motion"
import arrowDown from "../../../assets/arrow-down.svg"

const ImageParallax = lazy(() => import("../../../components/UI/ImageParallax"))

export default function SupportsGraphiquesHero() {
  useScrollAnimation()
  useHighlightAnimation()

  const sectionRef = useRef(null)

  const heroText = ["Supports graphiques"]

  return (
    <div className="relative isolate min-h-[70vh] lg:min-h-screen pt-28 pb-32 lg:pb-4 z-10">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <p className="text-sm md:text-base text-[#031E39] mb-4">
              <Link to="/" className="breadcrumb-link">Accueil</Link> –{" "}
              <Link to="/services" className="breadcrumb-link">Nos services</Link> –{" "}
              <strong>Supports graphiques</strong>
            </p>

            <h2 className="font-['TitanOne'] text-[50px] md:text-7xl lg:text-[70px] text-[#54001A] leading-none mb-8">
              Supports graphiques
            </h2>

            {/* image mobile */}
            <div className="lg:hidden relative w-[320px] h-[310px]">
              <img src="/images/supports/point.png" alt="" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: "0.1s", willChange: "transform, opacity" }}
              />
              <img src="/images/supports/supports-layer1.png" alt="" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: "0.2s", willChange: "transform, opacity" }}
              />
              <img src="/images/supports/supports-layer2.png" alt="" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: "0.3s", willChange: "transform, opacity" }}
              />
              <img src="/images/supports/supports-layer3.png" alt="" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: "0.4s", willChange: "transform, opacity" }}
              />
            </div>

            <p className="text-lg md:text-xl text-[#021d36] mt-10 lg:mt-0">
              Des supports qui captent l’attention
            </p>

          </div>

          {/* image desktop */}
          <div className="hidden lg:flex justify-end items-center">
            <Suspense fallback={<div style={{ width: 460, height: 370 }} />}>
              <ImageParallax
                width={460}
                height={370}
                layers={[
                  { src: "/images/supports/point.png", speed: 1 },
                  { src: "/images/supports/supports-layer1.png", speed: 2 },
                  { src: "/images/supports/supports-layer2.png", speed: 3 },
                  { src: "/images/supports/supports-layer3.png", speed: 4 },
                ]}
              />
            </Suspense>
          </div>

        </div>

      </Container>

      {/* scroll indicator */}
      <motion.div
        onClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })}
        className="absolute -bottom-20 sm:bottom-28 md:bottom-32 lg:bottom-[20px] left-1/2 -translate-x-1/2 z-30 cursor-pointer flex flex-col items-center"
      >
        <motion.img
          src={arrowDown}
          alt="scroll"
          className="w-2 md:w-3"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* background scrolling text */}
      <div className="absolute bottom-0 lg:-bottom-12 left-0 w-full pointer-events-none z-10">
        <ScrollVelocity
          texts={heroText}
          velocity={60}
          className="font-['TitanOne'] text-[22vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap"
        />
      </div>

    </div>
  )
}