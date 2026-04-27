import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"

import consultingImg from "../../assets/consulting-et-stratégie.webp"
import identiteImg from "../../assets/identité-visuelle.webp"
import supportsImg from "../../assets/cartes-de-visite.webp"
import siteImg from "../../assets/site-web.webp"
import reseauxImg from "../../assets/réseaux-sociaux.webp"

export default function Activites() {

  const sliderRefMobile = useRef(null)
  const sliderRefDesktop = useRef(null)

  const [mobileScroll, setMobileScroll] = useState({
    start: true,
    end: false
  })

  const [desktopScroll, setDesktopScroll] = useState({
    start: true,
    end: false
  })

  const handleScroll = (ref, setState) => {

    const el = ref.current
    if(!el) return

    const start = el.scrollLeft <= 5
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
    const hasOverflow = el.scrollWidth > el.clientWidth

    setState({
      start: start || !hasOverflow,
      end: !hasOverflow || end
    })
  }

  useEffect(() => {
    setTimeout(() => {
      handleScroll(sliderRefMobile, setMobileScroll)
      handleScroll(sliderRefDesktop, setDesktopScroll)
    }, 50)
  }, [])

  const activites = [
    { id:1, title:"Consulting et stratégie", image: consultingImg, link:"/services/conseil" },
    { id:2, title:"Identité visuelle", image: identiteImg, link:"/services/identite" },
    { id:3, title:"Supports graphiques", image: supportsImg, link:"/services/supports-graphiques" },
    { id:4, title:"Site web", image: siteImg, link:"/services/site-web" },
    { id:5, title:"Réseaux sociaux", image: reseauxImg, link:"/services/reseaux" }
  ]

  return (

    <section className="mb-24 lg:mb-32 bg-[#F4EFC9] animate-section">

      <Container>

        <div className="text-center mb-16 lg:mb-20">

          <h2 className="text-4xl md:text-5xl lg:text-[60px] text-[#54001A] mb-8 lg:mb-10">
            Découvrez <br/> nos activités
          </h2>

        </div>

        {/* mobile */}
        <div className="lg:hidden">

          <div className="relative w-full mt-4">

            <div
              ref={sliderRefMobile}
              onScroll={() => handleScroll(sliderRefMobile, setMobileScroll)}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth"
              style={{
                WebkitMaskImage: mobileScroll.start && !mobileScroll.end
                  ? "linear-gradient(to left, transparent, black 40px)"
                  : mobileScroll.end && !mobileScroll.start
                  ? "linear-gradient(to right, transparent, black 40px)"
                  : "none",
                maskImage: mobileScroll.start && !mobileScroll.end
                  ? "linear-gradient(to left, transparent, black 40px)"
                  : mobileScroll.end && !mobileScroll.start
                  ? "linear-gradient(to right, transparent, black 40px)"
                  : "none"
              }}
            >

              {activites.map((item)=>(

                <div
                  key={item.id}
                  className="snap-center shrink-0 w-[75vw] max-w-[280px]"
                >

                  <Link to={item.link} className="block">

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
                      style={{ backgroundImage: `url(${item.image})` }}
                    >

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <p className="relative z-10 text-[#FFCFF5] text-lg font-semibold text-center px-4">
                        {item.title}
                      </p>

                    </div>

                  </Link>

                </div>

              ))}

            </div>

          </div>

          {/* flèches */}
          <div className="flex justify-between px-6 mt-4">

            <button
              onClick={() => sliderRefMobile.current.scrollBy({ left: -300, behavior: "smooth" })}
              className={`arrow arrow-left-hint transition-opacity ${
                mobileScroll.start ? "opacity-0 pointer-events-none" : "opacity-40"
              }`}
            >
              <img src={arrowLeft} alt="Précédent"/>
            </button>

            <button
              onClick={() => sliderRefMobile.current.scrollBy({ left: 300, behavior: "smooth" })}
              className={`arrow arrow-right-hint transition-opacity ${
                mobileScroll.end ? "opacity-0 pointer-events-none" : "opacity-40"
              }`}
            >
              <img src={arrowRight} alt="Suivant"/>
            </button>

          </div>

        </div>

        {/* desktop */}
        <div className="hidden lg:block">

          <div className="relative w-full">

            {desktopScroll.start && !desktopScroll.end && (
              <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F4EFC9] to-transparent pointer-events-none z-10"/>
            )}

            {desktopScroll.end && !desktopScroll.start && (
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F4EFC9] to-transparent pointer-events-none z-10"/>
            )}

            <div
              ref={sliderRefDesktop}
              onScroll={() => handleScroll(sliderRefDesktop, setDesktopScroll)}
              className="flex overflow-x-auto snap-x snap-mandatory gap-12 pl-6 pr-6 pt-6 pb-4 scroll-smooth"
            >

              {activites.map((item)=>(

                <div
                  key={item.id}
                  className="snap-center shrink-0 w-[85vw] max-w-[360px] lg:w-[42%] lg:max-w-none"
                >

                  <Link to={item.link} className="block">

                    <div
                      className="
                      relative
                      flex items-end justify-center
                      pb-6
                      h-[200px]
                      lg:h-[280px]
                      bg-cover bg-center
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-out
                      origin-center
                      hover:scale-[1.08]
                      hover:z-10
                      "
                      style={{ backgroundImage: `url(${item.image})` }}
                    >

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <p className="relative z-10 text-[#FFCFF5] text-lg lg:text-2xl text-center px-4">
                        {item.title}
                      </p>

                    </div>

                  </Link>

                </div>

              ))}

            </div>

            <div className="flex justify-between px-6 mt-4">

              <button
                onClick={() => sliderRefDesktop.current.scrollBy({ left: -400, behavior: "smooth" })}
                className={`arrow arrow-left-hint transition-opacity ${
                  desktopScroll.start ? "opacity-0 pointer-events-none" : "opacity-40"
                }`}
              >
                <img src={arrowLeft} alt="Précédent"/>
              </button>

              <button
                onClick={() => sliderRefDesktop.current.scrollBy({ left: 400, behavior: "smooth" })}
                className={`arrow arrow-right-hint transition-opacity ${
                  desktopScroll.end ? "opacity-0 pointer-events-none" : "opacity-40"
                }`}
              >
                <img src={arrowRight} alt="Suivant"/>
              </button>

            </div>

          </div>

        </div>

        {/* bouton */}
        <div className="flex justify-center">

          <Link to="/services">

            <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-8">

              En savoir +

            </Button>

          </Link>

        </div>

      </Container>

    </section>
  )
}