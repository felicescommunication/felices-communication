import { useParams, Link } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"

import FloatingContactButton from "../../components/UI/FloatingContactButton"
import ScrollVelocity from "../../components/UI/ScrollVelocity"
import CurvedLoop from "../../components/UI/CurvedLoop"
import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import useHighlightAnimation from "../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../components/UI/useScrollAnimation"

import projets from "../../data/projets"

import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"

function HighlightText({ text = "", className = "" }) {
  const parts = useMemo(() => text.split(/(\[.*?\])/g), [text])

  return (
    <p className={className}>
      {parts.map((part, index) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={index} className="highlight">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        )
      )}
    </p>
  )
}

function ImageCarousel({ images = [], className = "", wrapperClass = "" }) {
  const [current, setCurrent] = useState(0)

  const length = images.length
  const hasMultiple = length > 1

  useEffect(() => {
    if (!hasMultiple) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [length, hasMultiple])

  const next = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
  const prev = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))

  const currentItem = images[current]

  return (
    <div className={`relative overflow-hidden ${wrapperClass}`}>
      {currentItem?.type === "video" ? (
        <video
          src={currentItem.src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full object-cover object-center rounded-3xl ${className}`}
        />
      ) : (
        <img
          src={currentItem?.src}
          alt=""
          loading="lazy"
          className={`w-full object-cover object-center rounded-3xl ${className}`}
        />
      )}

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full"
          >
            <img src={arrowLeft} alt="précédent" className="w-5 md:w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full"
          >
            <img src={arrowRight} alt="suivant" className="w-5 md:w-6" />
          </button>

          <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  current === index ? "bg-[#54001A]" : "bg-[#54001A]/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function RealisationPage() {
  useHighlightAnimation()
  useScrollAnimation()

  const { slug } = useParams()

  const projet = useMemo(
    () => projets.find((p) => p.slug === slug),
    [slug]
  )

  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.2 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  if (!projet) return <div>Projet introuvable</div>

  const hero = projet.hero

  return (
    <>
      <main>

        {/* hero */}
        <div className="bg-[#F4EFC9] pt-28 pb-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="text-sm md:text-base text-[#031E39] mb-4">
                  <Link to="/" className="breadcrumb-link">Accueil</Link> –{" "}
                  <Link to="/realisations" className="breadcrumb-link">Nos réalisations</Link> –{" "}
                  <strong>{projet.title}</strong>
                </p>

                <h2 className="font-['TitanOne'] text-[40px] md:text-7xl lg:text-[70px] text-[#54001A] leading-none mb-8">
                  {projet.title}
                </h2>

                <p className="text-lg md:text-xl max-w-[800px]">
                  {projet.intro}
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                {hero?.type === "video" ? (
                  <video
                    src={hero.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-3xl"
                  />
                ) : (
                  <img
                    src={hero?.src}
                    alt={projet.title}
                    loading="lazy"
                    className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[304px] object-cover rounded-3xl"
                  />
                )}
              </div>

            </div>
          </div>

          <div className="w-full overflow-hidden">
            <ScrollVelocity
              texts={[projet.title]}
              velocity={60}
              className="font-['TitanOne'] text-[18vw] lg:text-[22vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap"
            />
          </div>
        </div>

        {/* carousel */}
{projet.gallery?.length > 0 && (
  <section className="bg-[#F4EFC9] mb-22 lg:mb-40 animate-section">
    <Container>
      <div className="max-w-[1400px] mx-auto">
        <ImageCarousel
          images={projet.gallery}
          className="h-[300px] sm:h-[300px] md:h-[400px] lg:h-[650px]"
          wrapperClass="w-full max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto"
        />
      </div>
    </Container>
  </section>
)}

        {/* Sections */}
        {projet.sections?.map((section, index) => {
          const isReverse = index % 2 !== 0

          if (section.type === "text") {
            return (
              <section key={index} className="bg-[#F4EFC9] mb-22 lg:mb-40 animate-section text-center">
                <Container>
                  <div className="max-w-[900px] mx-auto px-6 md:px-12">
                    <h3 className="font-['TitanOne'] text-[#54001A] text-[26px] sm:text-[30px] lg:text-[35px] mb-6">
                      {section.title}
                    </h3>

                    <HighlightText text={section.text1} className="mb-4 text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-relaxed" />
                    <HighlightText text={section.text2} className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-relaxed" />
                  </div>
                </Container>
              </section>
            )
          }

          return (
            <section key={index} className="bg-[#F4EFC9] mb-22 lg:mb-40 animate-section">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                  <div className={isReverse ? "lg:order-2" : ""}>
                    <h3 className="font-['TitanOne'] text-[#54001A] text-[26px] sm:text-[30px] lg:text-[35px] mb-6">
                      {section.title}
                    </h3>

                    <HighlightText text={section.text1} className="mb-4 text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-relaxed" />
                    <HighlightText text={section.text2} className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-relaxed" />
                  </div>

                  <div className={isReverse ? "lg:order-1" : ""}>
                    <ImageCarousel
                      images={section.images}
                      className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                      wrapperClass="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] mx-auto"
                    />
                  </div>

                </div>
              </Container>
            </section>
          )
        })}

        {/* Bottom gallery */}
{projet.bottomGallery?.length > 0 && (
  <section className="bg-[#F4EFC9] mb-22 lg:mb-40 animate-section">
    <Container>
      <div className="max-w-[1400px] mx-auto">

        <ImageCarousel
          images={projet.bottomGallery}
          className="h-[300px] sm:h-[300px] md:h-[400px] lg:h-[480px]"
          wrapperClass="w-full max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto"
        />

        {projet.bottomTitle && (
          <h3 className="font-['TitanOne'] text-[#021d36] text-[26px] sm:text-[30px] lg:text-[35px] mt-10 mb-6 text-center">
            {projet.bottomTitle}
          </h3>
        )}

      </div>
    </Container>
  </section>
)}

        {/* CTA */}
        <section className="mb-22 lg:mb-30 animate-section">
          <Container>
            <div className="max-w-[1400px] text-center flex flex-col items-center gap-6">

              <h2 className="text-4xl md:text-5xl lg:text-[80px] text-[#54001A] mb-8 lg:mb-10">
                Un projet en tête ? <br /> Parlons-en.
              </h2>

              <p className="text-[18px] md:text-xl lg:text-[26px] font-semibold leading-relaxed">
                <span className="highlight">On répond à vos besoins</span>
              </p>

              <Link to="/contact">
                <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-12 mb-10 lg:mb-0">
                  Contactez-nous
                </Button>
              </Link>

            </div>
          </Container>

          <div className="max-w-[1400px] mx-auto">
            <CurvedLoop
              marqueeText="Communication - Stratégie Digitale - Design Graphique - Identité Visuelle - Storytelling -"
              speed={2}
              curveAmount={250}
              direction="left"
              interactive
              className="text-[70px] font-['TitanOne'] opacity-20"
            />
          </div>
        </section>

      </main>

      <FloatingContactButton />
    </>
  )
}