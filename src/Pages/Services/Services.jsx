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

import { Helmet } from "react-helmet"

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
   <Helmet>
      <title>Stratégie, identité visuelle, supports graphiques, site web & réseaux sociaux | Felices Communication</title>
      <meta
        name="description"
        content="Felices Communication vous accompagne dans votre stratégie digitale, dans votre création d’identité visuelle, de supports graphiques, de site web et dans la gestion des réseaux sociaux. Parlons de votre projet."
      />
    </Helmet>
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