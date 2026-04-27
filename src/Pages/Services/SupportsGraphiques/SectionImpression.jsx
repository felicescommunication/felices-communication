import Container from "../../../components/UI/Container"
import ScrollVelocity from "../../../components/UI/ScrollVelocity"
import Button from "../../../components/UI/Button"

import { Link } from "react-router-dom"

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

export default function SupportsGraphiquesConsulting() {
  useScrollAnimation()
  useHighlightAnimation()

  const impressionText = ["Impression ou digital"]

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

      {/* Texte scroll */}
      <ScrollVelocity
        texts={impressionText}
        velocity={50}
        className="font-['TitanOne'] text-[16vw] lg:text-[17vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap mb-4"
      />

      <Container>
        <div className="max-w-[1400px] mx-auto text-center lg:text-left">

          <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-6">
            Une cohérence à chaque support
          </h3>

          <p className="text-[18px] md:text-xl lg:text-[24px] leading-relaxed">
            Chaque support est pensé pour être beau mais surtout <span className="highlight font-semibold">utile et pertinent.</span>
            <br /><br />
            <span className="highlight">Nous veillons à ce que votre univers graphique se retrouve dans chaque création</span>, afin d’assurer <span className="highlight font-semibold">une communication fluide et reconnaissable.</span>
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link to="/contact">
              <Button className="w-fit bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-10">
                Parlons de votre projet
              </Button>
            </Link>
          </div>

        </div>
      </Container>

    </section>
  )
}