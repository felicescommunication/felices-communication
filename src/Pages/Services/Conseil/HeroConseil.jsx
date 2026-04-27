import { lazy, Suspense } from "react";
const ImageParallax = lazy(() => import("../../../components/UI/ImageParallax"));

import ScrollVelocity from "../../../components/UI/ScrollVelocity";
import Container from "../../../components/UI/Container";

import { Link } from "react-router-dom";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import arrowDown from "../../../assets/arrow-down.svg";

import { motion } from "framer-motion";

export default function HeroConseil({ sectionRef }) {
  useScrollAnimation();
  useHighlightAnimation();


  return (
    <>
      <div className="relative isolate min-h-[70vh] lg:min-h-screen pt-28 pb-32 lg:pb-4 z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

              <p className="text-sm md:text-base text-[#031E39] mb-4">
                <Link to="/" className="breadcrumb-link">Accueil</Link> –{" "}
                <Link to="/services" className="breadcrumb-link">Nos services</Link> –{" "}
                <strong>Conseil et stratégie</strong>
              </p>

              <h2 className="font-['TitanOne'] text-[50px] md:text-7xl lg:text-[70px] text-[#54001A] leading-none mb-8">
                Conseil et stratégie
              </h2>

              {/* mobile */}
              <div className="lg:hidden relative w-[320px] h-[280px]">
                {[
                  { src: "/images/conseil/point.webp", delay: "0.1s" },
                  { src: "/images/conseil/conseil-layer1.webp", delay: "0.2s" },
                  { src: "/images/conseil/conseil-layer2.webp", delay: "0.3s" },
                  { src: "/images/conseil/conseil-layer3.webp", delay: "0.4s" }
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                    style={{
                      animationDelay: img.delay,
                      willChange: "transform, opacity"
                    }}
                  />
                ))}
              </div>

              <p className="text-lg md:text-xl text-[#021d36] mt-10 lg:mt-0">
                Construire une stratégie claire.
              </p>
            </div>

            {/* desktop */}
            <div className="hidden lg:flex justify-end items-center">
              <Suspense fallback={<div style={{ width: 460, height: 370 }} />}>
                <ImageParallax
                  width={460}
                  height={370}
                  layers={[
                    { src: "/images/conseil/point.webp", speed: 1 },
                    { src: "/images/conseil/conseil-layer1.webp", speed: 2 },
                    { src: "/images/conseil/conseil-layer2.webp", speed: 3 },
                    { src: "/images/conseil/conseil-layer3.webp", speed: 4 }
                  ]}
                />
              </Suspense>
            </div>

          </div>
        </Container>

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

        <div className="absolute bottom-0 lg:-bottom-12 left-0 w-full pointer-events-none z-10">
          <ScrollVelocity
            texts={["Conseil et stratégie"]}
            velocity={60}
            className="font-['TitanOne'] text-[22vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap"
          />
        </div>
      </div>
    </>
  );
}