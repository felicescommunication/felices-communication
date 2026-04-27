import Container from "../../../components/UI/Container";
import ImageSlider from "../../../components/UI/ImageSlider";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import img1 from "../../../assets/la-debrouille.webp";
import img2 from "../../../assets/clean_peinture.webp";
import img3 from "../../../assets/bulan.webp";
import img4 from "../../../assets/grand-blanc.webp";
import img5 from "../../../assets/clothilie.webp";
import img6 from "../../../assets/felices.webp";

export default function Section2Identite() {
  useScrollAnimation();
  useHighlightAnimation();

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <>
    <section className="bg-[#F4EFC9] mb-22 lg:mb-20 animate-section">
      <Container>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] lg:gap-16 items-center">

            {/* texte */}
            <div className="text-center lg:text-left max-w-[800px] mx-auto lg:mx-0">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[32px] mb-8 lg:mb-12">
                Une identité visuelle pensée dans le détail
              </h3>

              {/* image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <div className="w-[260px] h-[200px] sm:w-[320px] sm:h-[260px] rounded-3xl relative overflow-hidden">
                  <ImageSlider images={images} />
                </div>
              </div>

              <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                <p className="text-[14.5px] md:text-[19px] leading-relaxed">
                  La création d’<span className="highlight">un langage visuel</span>, pensé pour 
                  <span className="highlight"> renforcer votre crédibilité</span> et 
                  <span className="highlight"> affirmer votre présence</span> sur tous vos supports s’organise de la manière suivante :
                  <br /><br />
                  Nous concevons votre logo et élaborons votre charte graphique, l’image de marque qui en découlera, 
                  <span className="highlight"> traduira la personnalité de votre entreprise</span> et vous différenciera durablement.
                </p>

                <p className="text-[15.5px] md:text-xl lg:text-[22px] font-semibold leading-relaxed">
                  Nous travaillons formes, couleurs, typographies et ton graphique pour que chaque élément visuel serve votre message, capte l’attention et facilite la 
                  <span className="highlight"> reconnaissance de votre marque</span>. 
                  Notre approche repose sur la compréhension précise de 
                  <span className="highlight"> ce qui fait votre originalité.</span>
                </p>

                <p className="text-[14.5px] md:text-[19px] leading-relaxed">
                  Une identité visuelle efficace ne doit pas seulement être esthétique, elle doit également être 
                  <span className="highlight"> porteuse de sens.</span>
                </p>

              </div>
            </div>

            {/* image desktop */}
            <div className="hidden lg:flex justify-end">
              <div className="w-[350px] h-[420px] rounded-3xl relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <ImageSlider images={images} />
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
    </>
  );
}