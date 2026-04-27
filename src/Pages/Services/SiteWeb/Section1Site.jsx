import Container from "../../../components/UI/Container"
import siteweb2 from "../../../assets/site-web2.webp"

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import useScrollAnimation from "../../../components/UI/useScrollAnimation"

export default function Section1Site({ sectionRef }) {
  useScrollAnimation()
  useHighlightAnimation()

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4EFC9] mt-30 lg:mt-40 mb-22 lg:mb-40 animate-section scroll-mt-32"
    >
      <Container>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] lg:gap-16 items-center">

            {/* image desktop */}
            <div className="hidden lg:flex justify-start">
              <img
                src={siteweb2}
                alt="Création de site web"
                className="w-[350px] h-[420px] object-cover rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              />
            </div>

            {/* texte */}
            <div className="text-center lg:text-left">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[25px] sm:text-[30px] lg:text-[35px] mb-8 lg:mb-12">
                Un site web pensé pour vos visiteurs
              </h3>

              {/* image mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={siteweb2}
                  alt="Création de site web"
                  className="w-[240px] h-[180px] sm:w-[320px] sm:h-[260px] object-cover rounded-3xl"
                />
              </div>

              <div className="text-[#031E39] max-w-[800px] mx-auto lg:mx-0 space-y-4 lg:space-y-10">

                <p className="text-[14.5px] md:text-[20px] leading-relaxed">
                  Votre site web est le cœur de votre présence digitale. Il ne se contente pas de présenter vos services ou produits : il <span className="highlight">raconte votre histoire</span>, <span className="highlight">reflète votre identité</span> et <span className="highlight font-semibold">crée un premier contact avec vos visiteurs.</span>
                  <br /><br />
                  Nous concevons des expériences digitales avec des <span className="highlight">interfaces intuitives et esthétiques</span>, pensées pour faciliter la navigation et susciter l’engagement des internautes.
                </p>

                <p className="text-[16px] md:text-xl lg:text-[22px] font-medium leading-relaxed">
                  Chaque projet commence par <span className="highlight font-semibold">une réflexion approfondie sur vos objectifs et vos cibles</span>. Nous analysons vos besoins, votre secteur et vos concurrents afin de définir la structure et les fonctionnalités qui auront le plus d’impact. Cette étape stratégique nous permet de créer <span className="highlight font-semibold">un site clair et logique</span>, où <span className="highlight font-semibold">chaque page et chaque élément servent votre message.</span>
                </p>

              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}