import Container from "../../../components/UI/Container";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import cgDebrouille from "../../../assets/identité-visuelle-la-D.webp";

export default function Section1Identite({ sectionRef }) {
  useScrollAnimation();
  useHighlightAnimation();

  return (
      <>
    <section
      ref={sectionRef}
      className="bg-[#F4EFC9] mt-30 lg:mt-40 mb-22 lg:mb-40 animate-section scroll-mt-32"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] lg:gap-16 items-center">

          {/* image desktop */}
          <div className="hidden lg:flex">
            <img
              src={cgDebrouille}
              alt=""
              loading="lazy"
              className="w-[350px] h-[420px]
              object-cover
              rounded-3xl
              transition-all duration-500
              hover:scale-105 hover:-translate-y-2"
            />
          </div>

          {/* texte */}
          <div className="text-center lg:text-left">

            <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] lg:text-[35px] mb-8">
              Votre image, votre singularité
            </h3>

            {/* image mobile */}
            <div className="flex justify-center lg:hidden mb-8">
              <img
                src={cgDebrouille}
                alt=""
                loading="lazy"
                className="w-[240px] h-[180px] rounded-3xl object-cover"
              />
            </div>

            <p className="text-[18px] md:text-xl lg:text-[24px] leading-relaxed">
              Nous prenons le temps de comprendre votre parcours, vos valeurs et vos ambitions pour 
              <span className="highlight"> construire un univers graphique cohérent</span>, 
              <span className="highlight"> distinctif</span> et 
              <span className="highlight"> parfaitement aligné sur ce que vous souhaitez transmettre.</span>
              <br /><br />
              <strong>
                Votre identité visuelle n’est pas simplement un ensemble de couleurs ou de formes : 
                c’est <span className="highlight">la manière dont vous vous présentez</span> 
                et dont vous êtes perçu par votre public.
              </strong>
            </p>

          </div>

        </div>
      </Container>
    </section>
    </>
  );
}