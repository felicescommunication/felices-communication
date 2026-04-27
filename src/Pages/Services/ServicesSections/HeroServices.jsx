import { Link } from "react-router-dom"
import { useRef } from "react"
import { motion } from "framer-motion"

import ScrollVelocity from "../../../components/UI/ScrollVelocity"
import ImageParallax from "../../../components/UI/ImageParallax"
import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import Container from "../../../components/UI/Container"

import arrowDown from "../../../assets/arrow-down.svg"

export default function HeroServices({ sectionRef }) {
  useHighlightAnimation()

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
 {/* HERO */}
        <div className="slide slide-0 relative isolate h-screen lg:min-h-screen pt-28 pb-50 lg:pb-4 z-10 mb-25">

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

              {/* gauche */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center">

                <p className="text-sm md:text-base text-[#031E39] mb-4">
                  <Link to="/" className="breadcrumb-link transition-colors duration-200">
                    Accueil
                  </Link>{" "}
                  – <strong>Nos services</strong>
                </p>

                <h1 className="font-['TitanOne'] text-[50px] md:text-7xl lg:text-[70px] text-[#54001A] leading-none mb-8">
                  Nos <span className="hidden lg:block"></span>services
                </h1>

                {/* image mobile */}
<div className="lg:hidden relative w-[320px] h-[310px]">
  <img
  src="/images/services/point.webp"
  alt=""
  loading="eager"
    decoding="async"
  fetchpriority="high"
/>

  <img
    src="/images/services/services-layer1.webp"
    alt=""
    loading="lazy"
      decoding="async"
    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
   style={{ animationDelay: "0.2s" }}
  />

  <img
    src="/images/services/services-layer2.webp"
    alt=""
    loading="lazy"
      decoding="async"
    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
    style={{ animationDelay: "0.2s" }}
  />

  <img
    src="/images/services/services-layer3.webp"
    alt=""
    loading="lazy"
      decoding="async"
    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
    style={{ animationDelay: "0.2s" }}
  />
</div> 

                <p className="text-lg md:text-xl text-[#021d36] mt-10 lg:mt-0">
                  Création, stratégie, performance.
                </p>
              </div>

               {/* image desktop */}
                                              <div className="hidden lg:flex justify-end items-center">
                                              <ImageParallax
                                               width={460}
                                                height={370}
                                                 layers={[
                                               { src: "/images/services/point.webp", speed: 1 },
                                               { src: "/images/services/services-layer1.webp", speed: 2 },
                                               { src: "/images/services/services-layer2.webp", speed: 3 },
                                               { src: "/images/services/services-layer3.webp", speed: 4 },
                                               ]}
                                                />                                            
                                                 </div>

            </div>
          </Container>

          {/* arrow */}
          <motion.div
            onClick={scrollToSection}
            className="absolute -bottom-20 sm:bottom-28 md:bottom-32 lg:bottom-[20px] left-1/2 -translate-x-1/2 z-30 cursor-pointer flex flex-col items-center"
          >
            <img
  src={arrowDown}
  className="w-3 animate-bounce"
/>
          </motion.div>

          {/* texte géant */}
          <div className="absolute -bottom-2 left-0 w-full overflow-hidden pointer-events-none">
            <ScrollVelocity
              texts={["Nos services"]}
              velocity={60}
              className="font-['TitanOne'] text-[22vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap"
            />
          </div>

        </div>
 </>
        )
}