import { useEffect, lazy, Suspense } from "react"

import Hero from "./Hero"
import FloatingContactButton from "../../components/UI/FloatingContactButton"

const Intro = lazy(() => import("./Intro"))
const Solutions = lazy(() => import("./Solutions"))
const Realisations = lazy(() => import("./RealisationsHome"))
const ContactHome = lazy(() => import("./ContactHome"))

import useHighlightAnimation from "../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../components/UI/useScrollAnimation"

import ScrollVelocity from "../../components/UI/ScrollVelocity"

import { Helmet } from "react-helmet"


function SectionFallback() {
  useEffect(() => {
  const timeout = setTimeout(() => {
    useScrollAnimation()
  }, 100)

  return () => clearTimeout(timeout)
}, [])
  return (
    <section className="mb-24 lg:mb-32 min-h-[60vh] bg-[#F4EFC9]" />
  )
}

function Home() {

  useHighlightAnimation()
  useScrollAnimation()

  useEffect(() => {

    const handleResize = () => {

      const sections = document.querySelectorAll("section")
      const middle = window.innerHeight / 2

      sections.forEach((section) => {

        const rect = section.getBoundingClientRect()

        if (rect.top <= middle && rect.bottom >= middle) {

          section.scrollIntoView({
            block: "center",
            behavior: "instant"
          })

        }

      })

    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  return (
    <>
    <Helmet>
<title>Felices Communication agence de communication digitale | Logo, identité visuelle, site web & réseaux sociaux</title>
      <meta
        name="description"
        content="Felices Communication agence de communication digitale sur chambéry vous accompagne dans la création de votre identité visuelle, de vos supports graphiques, de votre site internet ainsi que dans la gestion de vos réseaux sociaux."
      />
    </Helmet>

      <FloatingContactButton />

      <Hero />

      <main>

        <Suspense fallback={<SectionFallback />}>
          <Intro />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Solutions />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Realisations />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactHome />
        </Suspense>

      </main>

      <div className="bg-[#F4EFC9] overflow-hidden mt-10 animate-section">
        <ScrollVelocity
          texts={["Communication"]}
          velocity={60}
          className="font-['TitanOne'] text-[18vw] text-[#54001A] leading-none opacity-10 whitespace-nowrap"
        />
      </div>

    </>
  )
}

export default Home