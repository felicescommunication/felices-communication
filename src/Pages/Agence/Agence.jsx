import { lazy, Suspense, useRef } from "react"

import FloatingContactButton from "../../components/UI/FloatingContactButton"

import HeroAgence from "./HeroAgence"

const NousVous = lazy(() => import("./NousVous"))
const Engagement = lazy(() => import("./Engagement"))
const Activites = lazy(() => import("./Activites"))
const Contacte = lazy(() => import("./Contacte"))
const Realisations = lazy(() => import("./Realisations"))
const CTA = lazy(() => import("./CTA"))

import useHighlightAnimation from "../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../components/UI/useScrollAnimation"

function SectionFallback() {
  return (
    <section className="mb-24 lg:mb-32 min-h-[60vh] bg-[#F4EFC9]" />
  )
}

export default function Agence() {

  useHighlightAnimation()
  useScrollAnimation()

  const sectionRef = useRef(null)

  return (
    <>
      <HeroAgence
        onScrollClick={() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }}
      />

      <div ref={sectionRef} className="scroll-mt-32">
        <Suspense fallback={<SectionFallback />}>
          <NousVous />
        </Suspense>
      </div>

      <Suspense fallback={<SectionFallback />}>
        <Engagement />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Activites />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Contacte />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Realisations />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTA />
      </Suspense>

      <FloatingContactButton />
    </>
  )
}