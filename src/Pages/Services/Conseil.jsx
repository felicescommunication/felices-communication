import { useRef, lazy, Suspense } from "react"

import FloatingContactButton from "../../components/UI/FloatingContactButton"
import useHighlightAnimation from "../../components/UI/useHighlightAnimation"

import HeroConseil from "./Conseil/HeroConseil"

const Section1Conseil = lazy(() => import("./Conseil/Section1Conseil"))
const Section2Conseil = lazy(() => import("./Conseil//Section2Conseil"))
const SectionConsulting = lazy(() => import("./Conseil//SectionConsulting"))
const RealisationsConseil = lazy(() => import("./Conseil//RealisationsConseil"))
const CTAConseil = lazy(() => import("./Conseil/CTAConseil"))

import { Helmet } from "react-helmet"

function SectionFallback() {
  return <section className="h-screen bg-[#F4EFC9]" />
}

export default function Conseil() {
  const sectionRef = useRef(null)

  useHighlightAnimation()

  return (
    <>
     <Helmet>
      <title>Conseil & stratégie digitale sur mesure | Felices Communication</title>
      <meta
        name="description"
        content="Conseil et stratégie digitale pour structurer votre communication, définir vos objectifs et développer efficacement votre présence en ligne."
      />
    </Helmet>
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