import ScrollVelocity from "../../../components/UI/ScrollVelocity";
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

import { Link } from "react-router-dom";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

export default function SectionConsulting() {
  useScrollAnimation();
  useHighlightAnimation();

  return (
    <>
      {/* section consulting */}
      <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

        <ScrollVelocity
          texts={["Consulting"]}
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
              Un accompagnement stratégique sur mesure
            </h3>

            <p className="text-[18px] md:text-xl lg:text-[24px] font-medium leading-relaxed">
              Vous voulez clarifier votre positionnement, structurer votre présence digitale, imaginer un nouveau discours de marque, repenser votre communication ou réaliser un audit, nous <span className="highlight font-semibold">vous accompagnons pas à pas dans vos démarches.</span> 
              <br /><br />
              Notre but est de <span className="highlight font-semibold">vous offrir un accompagnement unique et efficace, avec des résultats <br />concrets et mesurables.</span>
            </p>

            <Link to="/contact">
              <Button
                className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-10"
              >
                Parlons de votre projet
              </Button>
            </Link>

          </div>
        </Container>

      </section>
    </>
  );
}