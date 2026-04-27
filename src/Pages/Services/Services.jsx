import { useRef, lazy, Suspense } from "react"

import FloatingContactButton from "../../components/UI/FloatingContactButton"
import ScrollVelocity from "../../components/UI/ScrollVelocity"
import useHighlightAnimation from "../../components/UI/useHighlightAnimation"

import HeroServices from "./ServicesSections/HeroServices"
const ServicesConseils = lazy(() => import("./ServicesSections/ServicesConseils"))
const ServicesIdentite = lazy(() => import("./ServicesSections/ServicesIdentite"))
const ServicesSupports = lazy(() => import("./ServicesSections/ServicesSupports"))
const ServicesSite = lazy(() => import("./ServicesSections/ServicesSite"))
const ServicesReseaux = lazy(() => import("./ServicesSections/ServicesReseaux"))

function SectionFallback() {
  return (
    <section className="h-screen bg-[#F4EFC9]" />
  )
}

export default function Services() {
  const sectionRef = useRef(null)

useHighlightAnimation()

  return (
    <>
      <main>

        {/* HERO */}
          <HeroServices sectionRef={sectionRef} />

        {/* SECTIONS */}
        <Suspense fallback={<SectionFallback />}>
  <ServicesConseils sectionRef={sectionRef} />
  <ServicesIdentite />
  <ServicesSupports />
  <ServicesSite />
  <ServicesReseaux />
</Suspense>
        

      </main>

      {/* texte géant */}
                <div className="pt-8 pb-3 overflow-hidden">
                  <ScrollVelocity
                    texts={["Expertise"]}
                    velocity={60}
                    className="font-['TitanOne'] text-[22vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap"
                  />
                </div>

      <FloatingContactButton />
    </>
  )
}