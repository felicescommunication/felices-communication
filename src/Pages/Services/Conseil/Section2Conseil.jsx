import Container from "../../../components/UI/Container";
import { useRef } from "react";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import consultingImg from "../../../assets/consulting-et-stratégie.webp";

export default function Section2Conseil() {
  useScrollAnimation();
  useHighlightAnimation();

  const sectionRef = useRef(null);

  return (
    <>
      {/* Section 2 */}
      <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] lg:gap-16 items-center">

              {/* Image desktop */}
              <div className="hidden lg:flex justify-start">
                <img
                  src={consultingImg}
                  alt="Consulting et audit stratégique"
                  loading="lazy"
                  className="w-[350px] h-[420px]
                  object-cover
                  rounded-3xl
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-2"
                />
              </div>

              {/* Texte */}
              <div className="text-center lg:text-left">

                <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-8 lg:mb-12">
                  Consulting et audit
                </h3>

                {/* image mobile */}
                <div className="flex justify-center lg:hidden mb-8">
                  <img
                    src={consultingImg}
                    alt="Consulting et audit stratégique"
                    loading="lazy"
                    className="w-[260px] h-[200px]
                    sm:w-[320px] sm:h-[260px]
                    object-cover
                    rounded-3xl"
                  />
                </div>

                <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                  <p className="text-[15px] md:text-lg lg:text-[18px] leading-relaxed">
                    Chaque projet commence par une <span className="highlight">compréhension profonde de votre identité</span>, de vos enjeux et des attentes de votre public.
                  </p>

                  <p className="text-[17.5px] md:text-xl lg:text-[22px] font-semibold leading-relaxed">
                    Nous analysons votre positionnement, votre marché, vos forces et vos axes d’amélioration, afin de concevoir <span className="highlight">une stratégie parfaitement alignée sur vos objectifs.</span>
                    <br /><br />
                    Cette étape peut inclure <span className="highlight">un audit complet de votre communication</span>, de vos supports, de votre présence digitale et de l’expérience utilisateurs offerte à vos publics.
                  </p>

                  <p className="text-[15px] md:text-lg lg:text-[18px] leading-relaxed">
                    L’audit permet <span className="highlight">d’identifier ce qui fonctionne</span>, <span className="highlight">ce qui freine votre visibilité</span> et <span className="highlight">ce qui mérite d’être renforcé</span>, afin d'avoir une base solide avant d’agir.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}