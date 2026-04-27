import Container from "../../../components/UI/Container"
import siteweb from "../../../assets/site-web.webp"

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

export default function SectionTwo() {
  useScrollAnimation()
  useHighlightAnimation()

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">
      <Container>
        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] lg:gap-16 items-center">

            {/* texte */}
            <div className="text-center lg:text-left max-w-[800px] mx-auto lg:mx-0">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[34px] mb-8 lg:mb-12">
                Performance, visibilité et optimisation
              </h3>

              {/* image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={siteweb}
                  alt="Optimisation et performance web"
                  className="w-[240px] h-[180px] sm:w-[320px] sm:h-[260px] object-cover rounded-3xl"
                />
              </div>

              <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                <p className="text-[18px] md:text-xl lg:text-[24px] leading-relaxed">
                  <strong>Nous accordons une attention particulière à l’adaptabilité et à la performance. Tous nos sites sont dits <span className="highlight">responsives</span>, <span className="highlight">ils offrent une expérience optimale sur ordinateurs, tablettes et smartphones.</span></strong>
                  <br /><br />
                  Nous intégrons également les bonnes pratiques de <span className="highlight font-semibold">référencement naturel (SEO) pour maximiser votre visibilité</span> et vous aider à atteindre votre audience cible de manière efficace et durable.
                </p>

              </div>

            </div>

            {/* image desktop */}
            <div className="hidden lg:flex justify-end">
              <img
                src={siteweb}
                alt="Optimisation et performance web"
                className="w-[350px] h-[420px] object-cover rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              />
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}