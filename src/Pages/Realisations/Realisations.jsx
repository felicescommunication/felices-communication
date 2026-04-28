import { Link } from "react-router-dom"
import FloatingContactButton from "../../components/UI/FloatingContactButton"
import ScrollVelocity from "../../components/UI/ScrollVelocity"
import CurvedLoop from "../../components/UI/CurvedLoop"
import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import { lazy, Suspense, useMemo } from "react"

import projets from "../../data/projets"

import { useState, useEffect, useRef } from "react"
import useHighlightAnimation from "../../components/UI/useHighlightAnimation"

import { motion } from "framer-motion"

import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"
import arrowDown from "../../assets/arrow-down.svg"

import { Helmet } from "react-helmet"

const ImageParallax = lazy(() => import("../../components/UI/ImageParallax"))

export default function Realisations() {
  useHighlightAnimation()

  const sectionRef = useRef(null)

  // ✅ Observer optimisé
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section")
    let lastScrollY = window.scrollY

    const observer = new IntersectionObserver((entries) => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY

      entries.forEach((entry) => {
        if (entry.isIntersecting && isScrollingDown) {
          entry.target.classList.add("in-view")
        }
      })

      lastScrollY = currentScrollY
    }, { threshold: 0.3 })

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const [filter, setFilter] = useState(null)
  const [page, setPage] = useState(1)
  
  const categories = useMemo(() => [
    "Identité visuelle",
    "Supports graphiques",
    "Site web",
    "Réseaux sociaux"
  ], [])

  const sorted = useMemo(() => (
    [...projets].sort((a, b) => new Date(b.date) - new Date(a.date))
  ), [])

  const filtered = useMemo(() => (
    filter ? sorted.filter((p) => p.categories?.includes(filter)) : sorted
  ), [filter, sorted])

  const PER_PAGE = 8

  const current = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return filtered.slice(start, start + PER_PAGE)
  }, [filtered, page])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const toggleFilter = (category) => {
    setFilter((prev) => (prev === category ? null : category))
    setPage(1)
  }

  const parallaxLayers = useMemo(() => [
    { src: "/images/realisations/point.webp", speed: 1 },
    { src: "/images/realisations/realisations-layer1.webp", speed: 2 },
    { src: "/images/realisations/realisations-layer2.webp", speed: 3 },
    { src: "/images/realisations/realisations-layer3.webp", speed: 4 },
  ], [])

  const scrollText = useMemo(() => ["Nos réalisations"], [])

  return (
    <>
    <Helmet>
      <title>Réalisations : identité visuelle, logo, site web... | Felices Communication</title>
      <meta
        name="description"
        content="Découvrez les réalisations de Felices Communication : identité visuelle, supports graphiques, sites web, et réseaux sociaux. Donnez vie à votre projet !"
      />
    </Helmet>
      {/* HERO */}
      <div className="relative isolate min-h-[70vh] lg:min-h-screen pt-28 pb-32 lg:pb-4 z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* texte */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              
              <p className="text-sm md:text-base text-[#031E39] mb-4">
                <Link to="/" className="breadcrumb-link transition-colors duration-200">
                  Accueil
                </Link>
                {" – "}
                <strong>Nos réalisations</strong>
              </p>

              <h2 className="font-['TitanOne'] text-[50px] md:text-7xl lg:text-[70px] text-[#54001A] leading-none mb-8">
                Nos réalisations
              </h2>

              {/* image mobile */}
              <div className="lg:hidden relative w-[320px] h-[280px]">
                {["point", "realisations-layer1", "realisations-layer2", "realisations-layer3"].map((img, i) => (
                  <img
                    key={img}
                    src={`/images/realisations/${img}.webp`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  />
                ))}
              </div>  

              <p className="text-lg md:text-xl lg:text-lg mt-10 lg:mt-0 text-[#021d36]">
                Nous accompagnons nos clients avec engagement et
                les aidons à évoluer. Découvrez quelques-unes de nos réalisations
              </p>
            </div>

            {/* image desktop */}
            <div className="hidden lg:flex justify-end items-center">
              <Suspense fallback={<div style={{ width: 460, height: 370 }} />}>
                <ImageParallax
                  width={460}
                  height={370}
                  layers={parallaxLayers}
                />
              </Suspense>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          onClick={scrollToSection}
          className="absolute -bottom-5 sm:bottom-28 md:bottom-32 lg:bottom-[20px] left-1/2 -translate-x-1/2 z-30 cursor-pointer flex flex-col items-center"
        >
          <motion.img
            src={arrowDown}
            alt="scroll vers le contenu"
            className="w-2 md:w-3"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Texte géant */}
        <div className="absolute bottom-0 lg:-bottom-15 left-0 w-full pointer-events-none z-10">
          <ScrollVelocity
            texts={scrollText}
            velocity={60}
            className="font-['TitanOne'] text-[22vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap"
          />
        </div>
      </div>

      {/* Grid */}
      <section ref={sectionRef} className="py-16 animate-section">
        <Container>

          <div className="mb-12">

  {/* MOBILE (dropdown) */}
  <div className="block lg:hidden">
    <select
      value={filter || ""}
      onChange={(e) => {
        const value = e.target.value
        setFilter(value || null)
        setPage(1)
      }}
      className="w-full max-w-[300px] mx-auto block px-4 py-3 rounded-full border-2 border-[#54001A] text-[#54001A] font-['Comfortaa'] text-center"
    >
      <option value="">Tous les projets</option>

      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>

  {/* DESKTOP (boutons) */}
  <div className="hidden lg:flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => toggleFilter(cat)}
        className={`px-6 md:px-8 lg:px-7 py-3 md:py-4 lg:py-4 rounded-full text-base md:text-lg lg:text-xl font-['Comfortaa'] border-2 transition-all duration-300 ${
          filter === cat
            ? "bg-[#54001A] text-[#F4EFC9] border-[#54001A]"
            : "bg-transparent text-[#54001A] border-[#54001A] hover:bg-[#54001A] hover:text-[#F4EFC9]"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

</div>

          {/* cards */}
          <div className="max-w-[1000px] mx-auto mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-y-[50px] md:gap-x-[110px]">

              {current.map((projet, index) => (
                <Link
                  key={projet.id}
                  to={`/realisations/${projet.slug}`}
                  className={`block group ${index % 2 === 1 ? "sm:mt-[60px]" : ""}`}
                >
                  <div className="relative w-[88%] max-w-[400px] mx-auto sm:w-full sm:max-w-none h-[310px] sm:h-[280px] lg:h-[400px] rounded-[24px] overflow-hidden bg-[#021d36] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">

                    <img
                      src={projet.cover}
                      alt={projet.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                    />

                    <div className="absolute bottom-5 left-0 w-full text-center opacity-0 transition duration-400 text-[#FFCFF5] z-10 group-hover:opacity-100">
                      <h3 className="font-['TitanOne'] text-[30px] md:text-[40px] px-4 md:px-6">
                        {projet.title}
                      </h3>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-6 mt-12">

            <button
              onClick={() => {
                setPage((p) => p - 1)
                scrollToSection()
              }}
              disabled={page === 1}
            >
              <img src={arrowLeft} alt="page précédente" className="w-8 md:w-10" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPage(i + 1)
                    scrollToSection()
                  }}
                  className={`w-2.5 h-2.5 rounded-full ${
                    page === i + 1 ? "bg-[#54001A]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setPage((p) => p + 1)
                scrollToSection()
              }}
              disabled={page === totalPages}
            >
              <img src={arrowRight} alt="page suivante" className="w-8 md:w-10" />
            </button>

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 text-center animate-section">
        <Container>

          <h2 className="text-3xl md:text-5xl lg:text-7xl text-[#54001A] mb-6">
            Un projet en tête ? <br /> Parlons-en.
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl">
            Nous sommes là pour <br />
            <span className="highlight font-semibold">
              penser, créer et façonner votre communication.
            </span>
          </p>

          <Link to="/contact">
            <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-8">
              Contactez-nous
            </Button>
          </Link>

        </Container>

        <div className="max-w-[1400px] mx-auto mt-10">
          <CurvedLoop
            marqueeText="Branding - Logo - Charte Graphique - Identité Visuelle - Direction Artistique -"
            speed={2}
            curveAmount={250}
            direction="left"
            interactive
            className="text-[70px] font-['TitanOne'] opacity-20"
          />
        </div>
      </section>

      <FloatingContactButton />
    </>
  )
}