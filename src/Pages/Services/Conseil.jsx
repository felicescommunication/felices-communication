import { useRef, lazy, Suspense } from "react"

import FloatingContactButton from "../../components/UI/FloatingContactButton"
import useHighlightAnimation from "../../components/UI/useHighlightAnimation"

import HeroConseil from "./Conseil/HeroConseil"

const Section1Conseil = lazy(() => import("./Conseil/Section1Conseil"))
const Section2Conseil = lazy(() => import("./Conseil//Section2Conseil"))
const SectionConsulting = lazy(() => import("./Conseil//SectionConsulting"))
const RealisationsConseil = lazy(() => import("./Conseil//RealisationsConseil"))
const CTAConseil = lazy(() => import("./Conseil/CTAConseil"))

function SectionFallback() {
  return <section className="h-screen bg-[#F4EFC9]" />
}

export default function Conseil() {
  const sectionRef = useRef(null)

  useHighlightAnimation()

  return (
    <>
      <main>

        {/* HERO */}
        <HeroConseil sectionRef={sectionRef} />

        {/* SECTIONS */}
        <Suspense fallback={<SectionFallback />}>
           <Section1Conseil sectionRef={sectionRef} />
          <Section2Conseil />
          <SectionConsulting />
          <RealisationsConseil />
          <CTAConseil />
        </Suspense>

      </main>

      <FloatingContactButton />
    </>
  )
}