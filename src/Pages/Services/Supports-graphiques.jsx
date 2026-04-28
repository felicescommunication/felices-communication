import { useRef, lazy, Suspense } from "react"

import FloatingContactButton from "../../components/UI/FloatingContactButton"
import useHighlightAnimation from "../../components/UI/useHighlightAnimation"

import HeroSupports from "./SupportsGraphiques/HeroSupports"

const Section1Supports = lazy(() => import("./SupportsGraphiques/Section1Supports"))
const Section2Supports = lazy(() => import("./SupportsGraphiques/Section2Supports"))
const SectionImpression = lazy(() => import("./SupportsGraphiques/SectionImpression"))
const RealisationsSupports = lazy(() => import("./SupportsGraphiques/RealisationsSupports"))
const CTASupports = lazy(() => import("./SupportsGraphiques/CTASupports"))

import { Helmet } from "react-helmet"


function SectionFallback() {
  return <section className="h-screen bg-[#F4EFC9]" />
}

export default function Identite() {
  useHighlightAnimation()

  const sectionRef = useRef(null)

  return (
    <>
    <Helmet>
      <title>Création de supports graphiques | Felices Communication</title>
      <meta
        name="description"
        content="Création de supports graphiques : flyers, affiches, cartes de visite et visuels de communication pour développer votre visibilité."
      />
    </Helmet>
      <main>

        {/* HERO */}
        <HeroSupports sectionRef={sectionRef} />

        <Suspense fallback={<SectionFallback />}>
          <Section1Supports sectionRef={sectionRef} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Section2Supports />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <SectionImpression />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <RealisationsSupports />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CTASupports />
        </Suspense>

      </main>

      <FloatingContactButton />
    </>
  )
}