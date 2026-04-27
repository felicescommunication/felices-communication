import ScrollVelocity from "../../../components/UI/ScrollVelocity";
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

import { Link } from "react-router-dom";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

export default function SectionBrandingIdentite() {
  useScrollAnimation();
  useHighlightAnimation();

  return (
    <>
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

      <ScrollVelocity
        texts={["Branding"]}
        velocity={50}
        className="font-['TitanOne']
        text-[16vw] lg:text-[20vw]
        text-[#54001A]
        leading-[1.1]
        opacity-10
        whitespace-nowrap 
        mb-4"
      />

      <Container>
        <div className="max-w-[1400px] mx-auto">

          <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-6">
            Créer, développer, moderniser l’image de marque
          </h3>

          <p className="text-[18px] md:text-xl lg:text-[24px] leading-relaxed">
            Que vous soyez à la recherche d’un univers visuel, que vous souhaitiez moderniser votre identité ou harmoniser vos supports, 
            <span className="highlight"> nous nous adaptons à vos besoins.</span>
            <br /><br />
            <strong>
              <span className="highlight">Une image de marque forte</span>, pensée pour 
              <span className="highlight"> durer et évoluer avec vous.</span>
            </strong>
          </p>

          <Link to="/contact">
            <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-10">
              Parlons de votre projet
            </Button>
          </Link>

        </div>
      </Container>

    </section>
    </>
  );
}