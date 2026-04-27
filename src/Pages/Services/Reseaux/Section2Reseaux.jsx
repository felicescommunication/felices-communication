import Container from "../../../components/UI/Container";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import RS1 from "../../../assets/réseaux-sociaux.webp";

export default function Section2Reseaux() {
  useScrollAnimation();
  useHighlightAnimation();

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

      <Container>

        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] lg:gap-16 items-center">

            {/* image desktop */}
            <div className="hidden lg:flex justify-start">
              <img
                src={RS1}
                alt="Gestion des réseaux sociaux"
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

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-8 lg:mb-12">
                Community management, gestion de vos contenus
              </h3>

              {/* image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={RS1}
                  alt="Gestion des réseaux sociaux"
                  loading="lazy"
                  className="w-[240px] h-[180px]
                  sm:w-[320px] sm:h-[260px]
                  object-cover
                  rounded-3xl"
                />
              </div>

              <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                <p className="text-[14px] md:text-[18px] leading-relaxed">
                  Nous réalisons des contenus pour vos réseaux sociaux tels que des visuels, vidéos, stories, photos... 
                  chaque publication est pensée pour 
                  <span className="highlight"> capter et engager votre audience.</span>
                  <br /><br />
                  Nous veillons à ce que vos comptes soient animés et alignés sur votre 
                  <span className="highlight"> univers graphique</span> ainsi qu’à 
                  <span className="highlight"> vos valeurs</span>, afin de créer une bonne expérience pour vos abonnés.
                </p>

                <p className="text-[16px] md:text-xl lg:text-[20px] font-semibold leading-relaxed">
                  Nous vous accompagnons également dans 
                  <span className="highlight"> la gestion quotidienne de vos réseaux sociaux</span> : programmation des publications, suivi des performances, animation de la communauté et campagnes publicitaires sponsorisées ciblées.
                  <br /><br />
                  L’objectif est de 
                  <span className="highlight"> maximiser votre visibilité et d’accroître l’interaction avec vos abonnés.</span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}