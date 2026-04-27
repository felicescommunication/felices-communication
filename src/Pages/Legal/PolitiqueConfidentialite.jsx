import Container from "../../components/UI/Container"
import { useEffect, useState } from "react"

export default function MentionsLegales() {

  const [active, setActive] = useState("proprietaire")
  const sections = [
    "proprietaire",
    "formulaires",
    "cookies",
    "contenus",
    "destinataires",
    "securite",
    "droits",
    "responsable"
  ]

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollY) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, []) 

  return (
    <section className="mb-24 lg:mb-32 pt-40">
      <Container>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          <div className="w-full lg:flex-1 flex justify-center">
            <div className="max-w-xl text-left">

              <h2 className="text-2xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 text-[#54001A] whitespace-nowrap">
                Politique de <br />confidentialité
              </h2>

              <h3 id="proprietaire" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Propriétaire et Responsable du traitement
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Felices Communication<br />
                Courriel de contact : othilielefebvre.pro@gmail.com
              </p>

              <h3 id="formulaires" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Formulaires de contact
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Lorsque vous utilisez un formulaire de contact ou de recrutement sur notre site, certaines informations personnelles peuvent être demandées (nom, prénom, adresse e-mail, téléphone, entreprise, message…).<br /><br />
                Ces données sont collectées afin de répondre à vos demandes ou d’étudier votre candidature. Elles sont traitées uniquement en interne et ne font l’objet d’aucune cession à des tiers.<br /><br />
                La base légale de ce traitement repose sur votre consentement et/ou l’intérêt légitime de répondre à vos sollicitations.<br /><br />
                Les données sont conservées pour une durée maximale de 12 mois à compter du dernier échange, puis supprimées.
              </p>

              <h3 id="cookies" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Cookies
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Lors de votre navigation sur le site https://www.felices-communication.fr, des cookies peuvent être déposés sur votre appareil, sous réserve de votre consentement.<br /><br />
                Un cookie est un fichier permettant d’enregistrer certaines informations relatives à votre navigation (pages consultées, durée de visite, etc.) dans le but d’améliorer votre expérience utilisateur et d’analyser la fréquentation du site.<br /><br />
                Vous pouvez accepter, refuser ou paramétrer les cookies à tout moment via votre navigateur ou le bandeau prévu à cet effet.<br /><br />
                Les cookies sont conservés pour une durée maximale de 12 mois.<br /><br />
                Nous utilisons notamment le service Google Analytics, proposé par Google LLC, afin de mesurer l’audience et mieux comprendre l’utilisation de notre site.<br /><br />
                Les informations collectées incluent notamment :<br />
                • les pages consultées,<br />
                • le temps passé sur le site,<br />
                • l’origine de votre visite (moteur de recherche, réseaux sociaux, etc.),<br />
                • les interactions réalisées sur le site.<br /><br />
                Ces données sont anonymisées et ne permettent pas de vous identifier directement. Elles sont utilisées uniquement à des fins statistiques et d’amélioration de nos services.<br /><br />
                Le traitement de ces données peut impliquer un transfert vers les États-Unis, encadré par les clauses contractuelles types approuvées par la Commission européenne.<br /><br />
                Vous pouvez désactiver le suivi Google Analytics à tout moment.
              </p>

              <h3 id="contenus" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Contenus intégrés
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Certaines pages de notre site peuvent intégrer des contenus provenant de sites tiers (vidéos, images, publications…).<br /><br />
                L’affichage de ces contenus implique une interaction directe avec ces services externes, qui peuvent collecter des données vous concernant, déposer des cookies ou suivre votre activité, notamment si vous êtes connecté à leurs plateformes.<br /><br />
                Nous vous invitons à consulter leurs politiques de confidentialité pour en savoir plus.
              </p>

              <h3 id="destinataires" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Destinataires des données
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Les données collectées sont exclusivement destinées à notre société et à ses services internes.<br />
                Elles ne sont ni vendues, ni louées, ni partagées à des fins commerciales avec des tiers.
              </p>

              <h3 id="securite" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Sécurité des données
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité de vos données personnelles, et d’éviter tout accès non autorisé, perte, altération ou divulgation.
              </p>

              <h3 id="droits" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Vos droits
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :<br />
                • droit d’accès à vos données,<br />
                • droit de rectification,<br />
                • droit à l’effacement,<br />
                • droit à la limitation du traitement,<br />
                • droit d’opposition,<br />
                • droit à la portabilité de vos données.<br /><br />
                Vous pouvez exercer ces droits à tout moment en nous contactant via les coordonnées indiquées sur le site.
              </p>

              <h3 id="responsable" className="text-xl sm:text-2xl mt-12 mb-4 scroll-mt-30">
                Responsable du traitement
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed">
                Le responsable du traitement des données personnelles est la société éditrice du site https://www.felices-communication.fr.<br /><br />
                Pour toute question relative à la protection de vos données, vous pouvez nous contacter via les informations disponibles sur le site.
              </p>

            </div>
          </div>

         {/* sommaire */}
          <div className="hidden lg:flex lg:flex-1 justify-center">
            <div className="sticky top-0 h-[70vh] flex items-center">

              <div className="flex gap-6">

                <div className="w-[2px] bg-gray-300 relative">
                  <div
                    className="absolute left-0 w-[2px] bg-[#54001A] transition-all duration-300"
                    style={{
                      top:
                        active === "proprietaire" ? "0%" :
                        active === "formulaires" ? "12.5%" :
                        active === "cookies" ? "25%" :
                        active === "contenus" ? "37.5%" :
                        active === "destinataires" ? "50%" :
                        active === "securite" ? "62.5%" :
                        active === "droits" ? "75%" :
                        "87.5%",
                      height: "12.5%"
                    }}
                  />
                </div>

                <div className="text-left">
                  <p className="mb-6 text-xl text-[#54001A] font-['TitanOne']">
                    Sommaire
                  </p>

                  <ul className="space-y-5 text-lg">
                    {sections.map((id, index) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`transition ${
                            active === id
                              ? "text-[#54001A]"
                              : "text-gray-700 hover:text-[#54001A]"
                          }`}
                        >
                          {
                            [
                              "Propriétaire",
                              "Formulaires",
                              "Cookies",
                              "Contenus",
                              "Destinataires",
                              "Sécurité",
                              "Vos droits",
                              "Responsable"
                            ][index]
                          }
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  )
}