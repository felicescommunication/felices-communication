import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/UI/Button"
import Container from "../../components/UI/Container"

import defaultImg from "../../assets/default.webp"
import consultingImg from "../../assets/consulting-et-stratégie.webp"
import identiteImg from "../../assets/identité-visuelle.webp"
import supportsImg from "../../assets/cartes-de-visite.webp"
import siteImg from "../../assets/site-web.webp"
import reseauxImg from "../../assets/réseaux-sociaux.webp"

import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"

export default function Solutions() {

  const navigate = useNavigate()
  const sliderRef = useRef(null)

  const defaultSolution = {
    id: 0,
    text: (
      <>
         Felices Communication mobilise toute
        son expertise pour atteindre vos objectifs et vous offrir
        <span className="highlight">des solutions sur-mesure.</span>
      </>
    ),
    image: defaultImg
  }

  const solutions = [
    {
      id: 1,
      title: "Consulting et stratégie",
      text: (
        <>
           Nous vous accompagnons dans <span className="highlight">la définition de votre stratégie de marque</span> pour structurer votre image, 
          cibler les bons publics et déployer une communication utile et mesurable.
        </>
      ),
      image: consultingImg,
      link: "/services/conseil"
    },
    {
      id: 2,
      title: "Identité visuelle",
      text: (
        <>
         Nous analysons votre marque, vos valeurs et vos ambitions pour <span className="highlight">créer une identité visuelle cohérente, reconnaissable et adaptée à votre positionnement.</span>
        </>
      ),
      image: identiteImg,
      link: "/services/identite"
    },
    {
      id: 3,
      title: "Supports graphiques",
      text: (
        <>
          Nous créons des <span className="highlight">supports de communication adaptés à vos besoins</span>: brochures, flyers, affiches, supports événementiels ou digitaux… pensés pour donner plus de force à vos messages.
        </>
      ),
      image: supportsImg,
      link: "/services/supports-graphiques"
    },
    {
      id: 4,
      title: "Site web",
      text: (
        <>
           Nous réalisons des <span className="highlight">sites web fonctionnels et efficaces, pensés pour tous les écrans</span>, afin de garantir une navigation fluide.
        </>
      ),
      image: siteImg,
      link: "/services/site-web"
    },
    {
      id: 5,
      title: "Réseaux sociaux",
      text: (
        <> 
          Nous gérons et optimisons vos réseaux sociaux à travers des contenus <span className="highlight">pertinents et réguliers, pensés pour attirer, fidéliser et renforcer votre image.</span>
        </>
      ),
      image: reseauxImg,
      link: "/services/reseaux"
    }
  ]

  const [activeSolution, setActiveSolution] = useState(defaultSolution)

  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollState, setScrollState] = useState({
    start: true,
    end: false
  })

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return

    const scrollLeft = el.scrollLeft
    const clientWidth = el.clientWidth
    const scrollWidth = el.scrollWidth

    const cardWidth = el.offsetWidth * 0.75
    if (!cardWidth) return 

    const index = Math.round(scrollLeft / cardWidth)

    const start = scrollLeft <= 5
    const end = scrollLeft + clientWidth >= scrollWidth - 5

    setScrollState({ start, end })

    if (solutions[index]) {
      setActiveIndex(index)
    }
  }

  const currentSolution = solutions[activeIndex]

 return (
  <section className="mb-24 lg:mb-32 animate-section">
    <Container>
      <div className="max-w-[1400px] w-full flex flex-col gap-[clamp(24px,4vw,60px)]">

        {/* mobile */}
        <div className="lg:hidden flex flex-col gap-6">

          <h2 className="font-['TitanOne'] text-4xl text-[#031E39]">
            Nos <br /> solutions
          </h2>

          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-[1px] h-full bg-[var(--bordeaux)]" />
            <p className="text-sm leading-[1.6]">
              {currentSolution.text}
            </p>
          </div>

          <Button 
            onClick={() => navigate("/services")}
            className="mt-1 mb-1"
          >
            + d'infos
          </Button>

          {/* slider */}
          <div className="relative mt-4">

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth"
              style={{
                WebkitMaskImage: scrollState.start && !scrollState.end
                  ? "linear-gradient(to left, transparent, black 40px)"
                  : scrollState.end && !scrollState.start
                  ? "linear-gradient(to right, transparent, black 40px)"
                  : "none",
                maskImage: scrollState.start && !scrollState.end
                  ? "linear-gradient(to left, transparent, black 40px)"
                  : scrollState.end && !scrollState.start
                  ? "linear-gradient(to right, transparent, black 40px)"
                  : "none"
              }}
            >

              {solutions.map((solution) => (

                <div
                  key={solution.id}
                  className="snap-center shrink-0 w-[75vw] max-w-[280px]"
                  onClick={() => navigate(solution.link)}
                >

                  <div
                    className="
                      relative
                      flex items-end justify-center
                      pb-6
                      h-[180px]
                      bg-cover bg-center
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-out
                      origin-center
                    "
                    style={{ backgroundImage: `url(${solution.image})` }}
                  >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <p className="relative z-10 text-[#FFCFF5] text-lg font-semibold text-center px-4">
                      {solution.title}
                    </p>

                  </div>

                  {/* NUMÉRO */}
                  <div className="mt-3 flex flex-col items-center">
                    <span className="font-['TitanOne'] text-5xl text-[var(--bordeaux)] leading-none">
                      {solution.id}.
                    </span>
                  </div>

                </div>

              ))}

            </div>

            {/* flèches */}
            <div className="flex justify-between px-6 mt-4">

              <button
                type="button"
                onClick={() => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })}
                className={`arrow arrow-left-hint transition-opacity ${
                  scrollState.start ? "opacity-0 pointer-events-none" : "opacity-40"
                }`}
              >
                <img src={arrowLeft} alt="Précédent"/>
              </button>

              <button
                type="button"
                onClick={() => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })}
                className={`arrow arrow-right-hint transition-opacity ${
                  scrollState.end ? "opacity-0 pointer-events-none" : "opacity-40"
                }`}
              >
                <img src={arrowRight} alt="Suivant"/>
              </button>

            </div>

          </div>

        </div>

        {/* desktop */}
        <div className="hidden lg:block">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(24px,4vw,60px)] w-full">

            <div className="text-left">
              <h2 className="font-['TitanOne'] text-[clamp(2.3rem,6vw,110px)] leading-[0.9] text-[#031E39] mb-10">
                Nos <br /> solutions
              </h2>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-[1px] h-full bg-[var(--bordeaux)]" />

                <p className="text-[clamp(0.9rem,1.5vw,1.25rem)] max-w-6xl leading-[1.6]">
                  {activeSolution.text}
                </p>
              </div>
            </div>

            <div className="relative w-full h-[clamp(220px,28vw,420px)] bg-[var(--bleu)] rounded-[30px] overflow-hidden">
              {[defaultSolution, ...solutions].map(solution => (
                <div
                  key={solution.id}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-200 ${
                    activeSolution.id === solution.id ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${solution.image})` }}
                />
              ))}
            </div>

          </div>

          <Button
            onClick={() => navigate("/services")}
            className="self-start mt-1 lg:-mt-24 lg:mb-10"
          >
            + d'infos
          </Button>

          <div className="flex justify-between items-start gap-[clamp(10px,2vw,40px)] max-[900px]:justify-center max-[900px]:gap-[30px]">

            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="relative flex-1 text-center group"
                onMouseEnter={() => setActiveSolution(solution)}
                onMouseLeave={() => setActiveSolution(defaultSolution)}
                onClick={() => navigate(solution.link)}
              >

                <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <span className="font-['TitanOne'] text-[clamp(36px,6vw,80px)] text-[var(--bordeaux)] leading-none transition-all duration-300 group-hover:text-[var(--rose)]">
                    {solution.id}.
                  </span>

                  <span className="font-['Comfortaa'] text-[clamp(11px,1.4vw,15px)] text-[var(--bordeaux)] mt-2 inline leading-[1.3] px-1 bg-[linear-gradient(#FFCFF5_0_0)] bg-left-bottom bg-no-repeat bg-[length:0%_100%] transition-[background-size] duration-400 ease-[cubic-bezier(.77,0,.18,1)] group-hover:bg-[length:100%_100%]">
                    {solution.title}
                  </span>
                </div>

                {index < solutions.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 translate-x-[calc(50%+clamp(5px,1vw,20px))] w-[1px] h-[100px] bg-[var(--bordeaux)]" />
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </Container>
  </section>
)
}