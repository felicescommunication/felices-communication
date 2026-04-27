import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";
import CurvedLoop from "../../../components/UI/CurvedLoop";

import { Link } from "react-router-dom";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

export default function CTAConseil() {
  useScrollAnimation();
  useHighlightAnimation();

  return (
    <>
      {/* CTA */}
      <section className="mb-22 lg:mb-30 animate-section">
        <Container>

          <div className="text-center flex flex-col items-center gap-6">

            <h2 className="text-4xl md:text-5xl lg:text-[80px] text-[#54001A]">
              Un site à créer ? <br />
        Concevons-le.
            </h2>

            <p className="text-[18px] md:text-xl lg:text-[26px]">
             Du design à la création, <br />
        <span className="highlight font-semibold">nous developpons votre site sur mesure.</span> </p>

            <Link to="/contact">
              <Button className="mt-6">
                Contactez-nous
              </Button>
            </Link>

          </div>

        </Container>

        <CurvedLoop
          marqueeText="Communication - Stratégie Digitale - Design Graphique - Identité Visuelle - Storytelling -"
          speed={2}
          curveAmount={250}
          direction="left"
          className="text-[70px] font-['TitanOne'] opacity-20"
        />
      </section>
    </>
  );
}