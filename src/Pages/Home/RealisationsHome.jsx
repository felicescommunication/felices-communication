import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import projets from "../../data/projets"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"

export default function Realisations() {

  const navigate = useNavigate()

  const autoplayRef = useRef(null)
  const sliderRef = useRef(null)

  const [scrollState, setScrollState] = useState({
    start: true,
    end: false
  })

  const realisations = [...projets]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8)
    .map(p => ({
      id: p.id,
      slug: p.slug,
      cover: p.cover,
      title: p.title 
    }))

  const realisationPages = []
  for (let i = 0; i < realisations.length; i += 2) {
    realisationPages.push(realisations.slice(i, i + 2))
  }

  const [currentRealisationPage, setCurrentRealisationPage] = useState(0)

  const prevRealisationPage = () => {
    setCurrentRealisationPage(prev =>
      prev === 0 ? realisationPages.length - 1 : prev - 1
    )
  }

  const nextRealisationPage = () => {
    setCurrentRealisationPage(prev =>
      prev === realisationPages.length - 1 ? 0 : prev + 1
    )
  }

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentRealisationPage(prev =>
        prev === realisationPages.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(autoplayRef.current)
  }, [realisationPages.length])

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return

    const start = el.scrollLeft <= 5
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5

    setScrollState({ start, end })
  }

  return (

    <section className="bg-[#F4EFC9] mb-24 lg:mb-32 animate-section">

      <Container>

        {/* header */}
        <div className="max-w-[1000px] w-full lg:ml-auto text-right flex flex-col gap-6">

          <h2 className="font-['TitanOne'] text-[clamp(2.3rem,6vw,110px)] leading-[0.9] text-[#031E39]">
            Nos <br /> réalisations
          </h2>

          <p className="text-[clamp(0.9rem,1.5vw,1.25rem)] leading-[1.6]">
            Nous travaillons avec des entreprises de tous horizons.
            <br />
            Et nous construisons pour elles
            <span className="highlight">
              {" "}une communication digitale solide et cohérente.
            </span>
          </p>

          <Button
            onClick={() => navigate("/realisations")}
            className="ml-auto mt-1"
          >
            Voir +
          </Button>

        </div>

       {/* mobile */}
       <div className="lg:hidden flex flex-col gap-6">
       
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
       
             {realisations.map((item) => (
       
               <div
                 key={item.id}
                 className="snap-center shrink-0 w-[75vw] max-w-[280px]"
               >
       
                 <Link to={`/realisations/${item.slug}`}>
       
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
                     style={{ backgroundImage: `url(${item.cover})` }}
                   >
       
                   </div>
       
                 </Link>
       
               </div>
       
             ))}
       
           </div>
       
           {/* flèches */}
           <div className="flex justify-between px-6 mt-4">
       
             <button
               onClick={() => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })}
               className={`arrow arrow-left-hint transition-opacity ${
                 scrollState.start ? "opacity-0 pointer-events-none" : "opacity-40"
               }`}
             >
               <img src={arrowLeft} alt="prev" />
             </button>
       
             <button
               onClick={() => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })}
               className={`arrow arrow-right-hint transition-opacity ${
                 scrollState.end ? "opacity-0 pointer-events-none" : "opacity-40"
               }`}
             >
               <img src={arrowRight} alt="next" />
             </button>
       
           </div>
       
         </div>
       
       </div>
       

        {/* desktop */}
        <div
          className="hidden lg:flex justify-center items-center gap-24 mt-6 transition-all duration-500 w-full"
          onMouseEnter={() => clearInterval(autoplayRef.current)}
          onMouseLeave={() => {
            autoplayRef.current = setInterval(() => {
              setCurrentRealisationPage(prev =>
                prev === realisationPages.length - 1 ? 0 : prev + 1
              )
            }, 3000)
          }}
        >

          {realisationPages[currentRealisationPage]?.map((item, index) => (

            <Link
              key={item.id}
              to={`/realisations/${item.slug}`}
              className="card-link"
            >

              <div
                className={`card group relative
                  w-[430px]
                  h-[250px]
                  ${index === 0 ? "card-left" : "card-right"}
                `}
                style={{
                  backgroundImage: `url(${item.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

                <div className="absolute bottom-5 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                  <h3 className="font-['TitanOne'] text-[#FFCFF5] text-[28px] px-4">
                    {item.title}
                  </h3>
                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* points */}
        <div className="hidden lg:flex items-center justify-center gap-5 mt-12">

          <button type="button" className="arrow arrow-left" onClick={prevRealisationPage}>
            <img src={arrowLeft} alt="Précédent" />
          </button>

          <div className="flex gap-2">
            {realisationPages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentRealisationPage ? "active" : ""}`}
                onClick={() => setCurrentRealisationPage(index)}
              />
            ))}
          </div>

          <button type="button" className="arrow arrow-right" onClick={nextRealisationPage}>
            <img src={arrowRight} alt="Suivant" />
          </button>

        </div>

      </Container>

    </section>
  )
}