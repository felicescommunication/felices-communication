import Container from "../../../components/UI/Container"
import ImageSlider from "../../../components/UI/ImageSlider"

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

import img1 from "../../../assets/flyer-la-D.webp"
import img2 from "../../../assets/carte-de-visite-la-D.webp"
import img3 from "../../../assets/carte-visite-grand-blanc.webp"
import img4 from "../../../assets/depliant-bch.webp"
import img5 from "../../../assets/felices-bouteilles.webp"
import img6 from "../../../assets/sticker-la-D.webp"
import img7 from "../../../assets/depliant-grand-blanc.webp"
import img8 from "../../../assets/cartes-de-visite.webp"
import img9 from "../../../assets/carte-de-visite-BCH.webp"

export default function SupportsGraphiquesSectionTwo() {
  useScrollAnimation()
  useHighlightAnimation()

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
  ]

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">
      <Container>

        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] lg:gap-16 items-center">

            {/* Image desktop */}
            <div className="hidden lg:flex justify-start">
              <div className="w-[350px] h-[420px] rounded-3xl relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <ImageSlider images={images} />
              </div>
            </div>

            {/* texte */}
            <div className="text-center lg:text-left max-w-[800px] mx-auto lg:mx-0">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-8 lg:mb-12">
                Des visuels qui parlent pour vous
              </h3>

              {/* Image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <div className="w-[260px] h-[200px] sm:w-[320px] sm:h-[260px] rounded-3xl relative overflow-hidden">
                  <ImageSlider images={images} />
                </div>
              </div>

              <div className="text-[#031E39] space-y-4 lg:space-y-10">

                <p className="text-[17.5px] md:text-xl lg:text-[24px] font-semibold leading-relaxed">
                  Affiches, brochures, cartes de visite, catalogues, flyers, présentations professionnelles, éléments de signalétique, supports événementiels, contenus digitaux… quels que soient vos besoins, <span className="highlight">nous imaginons des solutions graphiques qui valorisent votre message et servent vos objectifs.</span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}