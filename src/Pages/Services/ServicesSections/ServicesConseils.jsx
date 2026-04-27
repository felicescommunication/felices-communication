import { Link } from "react-router-dom"
import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import Button from "../../../components/UI/Button"
import Container from "../../../components/UI/Container"

import consultingImg from "../../../assets/consulting-et-stratégie.webp"

export default function ServicesConseils({ sectionRef }) {
  useHighlightAnimation()

  return (
    <section
      ref={sectionRef}
      className="slide slide-1 bg-[#F4EFC9] h-screen flex items-center mb-20 lg:-mb-10"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* TEXTE */}
          <div className="order-1 text-center lg:text-left">

            <h2 className="text-4xl md:text-5xl lg:text-[60px] text-[#54001A] mb-6">
              Conseil et stratégie
            </h2>

            {/* IMAGE MOBILE */}
            <div className="lg:hidden mb-8 flex justify-center">
                                      <div
                                        className="w-[240px] h-[160px] rounded-2xl bg-cover bg-center"
                                        style={{ backgroundImage: `url(${consultingImg})` }}
                                      />
                                    </div>

            <p className="text-sm md:text-base lg:text-lg text-[#54001A] font-medium mb-6">
              Des solutions sur mesure, qui répondent à vos besoins
            </p>

            <p className="text-sm md:text-base lg:text-[17px] leading-relaxed text-[#031E39] mt-6">
              Chaque projet commence par <span className="highlight font-medium">une compréhension profonde de votre marque, de vos enjeux et de vos objectifs.</span>

              Nous analysons votre positionnement, votre marché et vos audiences afin de concevoir une <span className="highlight font-bold">stratégie parfaitement adaptée à vos objectifs.</span>

              <br /><br />À travers <span className="highlight font-bold">une approche personnalisée</span>, nous élaborons des solutions qui renforcent votre image, optimisent votre communication et développent votre croissance.

              <br /><br />
              <strong>Notre mission</strong> : vous offrir <span className="highlight font-bold">un accompagnement unique et efficace</span>, capable de transformer vos idées en résultats.
            </p>

            <Link to="/services/conseil">
              <Button
                className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-8"
              >
                En savoir +
              </Button>
            </Link>
          </div>

          {/* IMAGE DESKTOP */}
          <div className="order-3 lg:order-2 hidden lg:flex justify-end">
            <div
              className="w-[500px] h-[400px] rounded-3xl bg-cover bg-center transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ backgroundImage: `url(${consultingImg})` }}
            />
          </div>

        </div>
      </Container>
    </section>
  )
}