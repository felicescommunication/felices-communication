import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import CurvedLoop from "../../components/UI/CurvedLoop"
import { Link } from "react-router-dom"

export default function CTA() {

  return (

    <section className="mb-24 lg:mb-32 animate-section">

      <Container>

        <div className="max-w-[1400px] text-center flex flex-col items-center gap-6">

          <h2 className="text-4xl md:text-5xl lg:text-[80px] text-[#54001A] mb-8 lg:mb-10">
            Un projet en tête ? <br /> Parlons-en.
          </h2>

          <p className="text-[18px] md:text-xl lg:text-[26px] leading-relaxed">

            Nous sommes là pour  

            <span className="highlight font-bold"> penser, <br />
              créer et façonner votre communication.
            </span>

          </p>

          <Link to="/contact">
            <Button className="w-fit bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-12 mb-10 lg:mb-0">
              Contactez-nous
            </Button>
          </Link>

        </div>

      </Container>

      {/* Loop texte */}
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

  )
}