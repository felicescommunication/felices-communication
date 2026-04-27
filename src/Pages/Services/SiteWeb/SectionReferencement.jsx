import Container from "../../../components/UI/Container"
import ScrollVelocity from "../../../components/UI/ScrollVelocity"
import Button from "../../../components/UI/Button"

import { Link } from "react-router-dom"

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

export default function SiteWebConsulting() {
  useScrollAnimation()
  useHighlightAnimation()

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

      <ScrollVelocity
        texts={["Référencement"]}
        velocity={50}
        className="font-['TitanOne'] text-[16vw] lg:text-[17vw] text-[#54001A] leading-[1.1] opacity-10 whitespace-nowrap -mb-2"
      />

      <Container>

        <div className="max-w-[1400px] mx-auto">

          <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-6">
            Conversion et engagement
          </h3>

          <p className="text-[18px] md:text-xl lg:text-[22px] leading-relaxed">
            Vous désirez lancer un nouveau site ou en moderniser un, nous prenons en charge <span className="highlight font-semibold">la conception graphique</span>, <span className="highlight font-semibold">l’architecture de l’information</span>, <span className="highlight font-semibold">le développement</span> et <span className="highlight font-semibold">la mise en ligne.</span>
            <br />
            Nous travaillons en collaboration avec des partenaires techniques pour garantir des sites <span className="highlight">sécurisés</span>, <span className="highlight">rapides</span> et <span className="highlight">faciles à administrer</span>, tout en respectant votre identité visuelle.
            <br /><br />
            Nous créons des sites web qui dépassent le simple esthétisme pour devenir un véritable outil stratégique. Un site qui attire et engage vos visiteurs, tout en reflétant fidèlement votre marque. Avec nous, <span className="highlight font-semibold">votre présence en ligne devient un levier concret pour votre développement</span>, capable de <span className="highlight font-semibold">renforcer votre image</span> et <span className="highlight font-semibold">de soutenir votre croissance.</span>
          </p>

          <div className="flex justify-center">
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