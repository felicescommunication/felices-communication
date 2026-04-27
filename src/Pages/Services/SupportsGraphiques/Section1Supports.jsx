import Container from "../../../components/UI/Container"
import supportsgraphiques from "../../../assets/supports-graphiques1.webp"

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

export default function SupportsGraphiquesSection() {
  useScrollAnimation()
  useHighlightAnimation()

  return (
    <section
      className="bg-[#F4EFC9] mt-30 lg:mt-40 mb-22 lg:mb-40 animate-section scroll-mt-32"
    >
      <Container>
        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] lg:gap-16 items-center">

            {/* texte */}
            <div className="text-center lg:text-left max-w-[800px] mx-auto lg:mx-0">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[34px] mb-8 lg:mb-12">
                Des supports graphiques à votre image
              </h3>

              {/* Image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={supportsgraphiques}
                  alt="Exemple de supports graphiques print et digital"
                  className="w-[240px] h-[180px] sm:w-[320px] sm:h-[260px] object-cover rounded-3xl"
                />
              </div>

              <div className="text-[#031E39] space-y-4 lg:space-y-10">

                <p className="text-base md:text-[21px] leading-relaxed">
                  Une communication efficace passe aussi par des supports visuels soignés, lisibles, <span className="highlight">adaptés à vos besoins et accessibles à tous.</span> 
                </p>

                <p className="text-[18px] md:text-xl lg:text-[24px] font-semibold leading-relaxed">
                  Les supports graphiques jouent un rôle essentiel : ils <span className="highlight">donnent vie à vos messages</span>, <span className="highlight">renforcent votre crédibilité</span> et créent <span className="highlight">une impression durable auprès de votre public.</span>
                </p>

                <p className="text-base md:text-[21px] leading-relaxed">
                  Nous concevons des créations pensées pour <span className="highlight">vous représenter avec justesse</span> (documents imprimés ou support destinés au digital) et vous permettre de <span className="highlight">communiquer avec clarté et impact.</span>
                </p>

              </div>

            </div>

            {/* Image desktop */}
            <div className="hidden lg:flex justify-end">
              <img
                src={supportsgraphiques}
                alt="Supports graphiques professionnels"
                className="w-[350px] h-[420px] object-cover rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              />
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}