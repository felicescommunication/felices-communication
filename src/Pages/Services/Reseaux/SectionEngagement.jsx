import ScrollVelocity from "../../../components/UI/ScrollVelocity";
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

import { Link } from "react-router-dom";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

export default function SectionEngagement() {
  useScrollAnimation();
  useHighlightAnimation();

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

      <ScrollVelocity
        texts={["Engagement"]}
        velocity={50}
        className="font-['TitanOne']
        text-[16vw] lg:text-[17vw]
        text-[#54001A]
        leading-[1.1]
        opacity-10
        whitespace-nowrap 
        mb-4"
      />

      <Container>

        <div className="max-w-[1400px] mx-auto">

          <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-6">
            Conversion et engagement
          </h3>

          <p className="text-[18px] md:text-xl lg:text-[24px] font-medium leading-relaxed">
            Nous voyons les réseaux sociaux comme 
            <span className="highlight"> un lieu où votre marque peut exister et devenir visible</span>.
            <br />
            <span className="highlight font-semibold">
              Un lieu de partage, de rencontre et d’échange avec votre audience.
            </span>
            <br /><br />
            Vos réseaux sociaux deviennent 
            <span className="highlight font-semibold"> un outil stratégique</span>, capable de créer du lien, de renforcer votre crédibilité et de soutenir durablement votre croissance.
          </p>

          <Link to="/contact">
            <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-10">
              Parlons de votre projet
            </Button>
          </Link>

        </div>

      </Container>

    </section>
  );
}