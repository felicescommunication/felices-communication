import Container from "../../../components/UI/Container";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import RS from "../../../assets/default.webp";

export default function Section1Reseaux({ sectionRef }) {
  useScrollAnimation();
  useHighlightAnimation();

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4EFC9] mt-30 lg:mt-40 mb-22 lg:mb-40 animate-section scroll-mt-32"
    >
      <Container>

        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] lg:gap-16 items-center">

            {/* texte */}
            <div className="text-center lg:text-left max-w-[800px] mx-auto lg:mx-0">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[34px] mb-8 lg:mb-12">
                Définir votre stratégie éditoriale
              </h3>

              {/* image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={RS}
                  alt="Stratégie réseaux sociaux"
                  loading="lazy"
                  className="w-[240px] h-[180px]
                  sm:w-[320px] sm:h-[260px]
                  object-cover
                  rounded-3xl"
                />
              </div>

              <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                <p className="text-[17px] md:text-xl lg:text-[23px] font-medium leading-relaxed">
                  Les réseaux sociaux sont de véritables espaces d’échange où l’on peut dialoguer, séduire et fidéliser son audience. 
                  <strong>
                    <br />
                    Nous vous aidons à saisir l’opportunité qu’offre ces plateformes pour 
                    <span className="highlight"> créer une présence en ligne forte</span>, capable de renforcer votre image et de 
                    <span className="highlight"> générer de l’engagement.</span>
                  </strong>
                </p>

                <p className="text-[15px] md:text-[20px] leading-relaxed">
                  La première étape consiste à analyser votre marque, vos objectifs et votre public. 
                  Nous définissons ensemble une 
                  <span className="highlight font-semibold"> stratégie éditoriale claire, adaptée à vos besoins,</span> 
                  pour que chaque publication ait un réel impact et contribue à votre croissance.
                  <br /><br />
                  Notre approche allie 
                  <span className="highlight font-semibold"> planification, créativité et pertinence</span> 
                  pour que vos messages trouvent leur public.
                </p>

              </div>

            </div>

            {/* image desktop */}
            <div className="hidden lg:flex justify-end">
              <img
                src={RS}
                alt="Stratégie réseaux sociaux"
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
  );
}