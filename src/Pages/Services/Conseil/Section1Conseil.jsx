import Container from "../../../components/UI/Container";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import auditImg from "../../../assets/audit.webp";


export default function Section1Conseil({ sectionRef }) {
  useScrollAnimation();
  useHighlightAnimation();


  return (
    <>
      {/* section1 */}
      <section
        ref={sectionRef}
        className="bg-[#F4EFC9] mt-30 lg:mt-40 mb-22 lg:mb-40 animate-section scroll-mt-32"
      >
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] lg:gap-16 items-center">

              {/* Texte */}
              <div className="text-center lg:text-left max-w-[800px] mx-auto lg:mx-0">

                <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-8 lg:mb-12">
                  Donner une vraie direction<br />
                  à votre communication
                </h3>

                {/* Image mobile */}
                <div className="flex justify-center lg:hidden mb-8">
                  <img
                    src={auditImg}
                    alt="Audit de stratégie"
                    loading="lazy"
                    className="w-[260px] h-[200px]
                    sm:w-[320px] sm:h-[260px]
                    object-cover
                    rounded-3xl"
                  />
                </div>

                <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                  <p className="text-base md:text-[21px] leading-relaxed">
                    Avant d’imaginer des visuels, des messages ou des campagnes, il est essentiel de savoir où
                    <span className="highlight"> vous souhaitez aller. </span>
                  </p>

                  <p className="text-[18px] md:text-xl lg:text-[24px] font-semibold leading-relaxed">
                    La stratégie,
                    <span className="highlight"> c’est ce moment où l’on pose les choses à plat</span>,
                    où l’on comprend votre marque, vos envies, vos doutes et <span className="highlight">les objectifs que vous visez.</span> 
                    <br /><br />
                    Ce n’est pas un exercice technique réservé aux experts : c’est un échange clair, sincère et utile, pensé pour <span className="highlight">vous offrir une vision stable et cohérente.</span>
                  </p>

                </div>
              </div>

              {/* Image desktop */}
              <div className="hidden lg:flex justify-end">
                <img
                  src={auditImg}
                  alt="Audit de stratégie"
                  loading="lazy"
                  className="w-[350px] h-[420px]
                  object-cover
                  rounded-3xl
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-2"
                />
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}