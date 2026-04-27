import Container from "../../components/UI/Container"
import dentDuChat from "../../assets/dent du chat face.svg"
import lacBourget from "../../assets/lac du bourget.svg"

export default function NousVous() {
  return (
    <section className="bg-[#F4EFC9] mt-40 mb-24 lg:mb-32 animate-section">
      <Container>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* colonne nous */}
          <div className="flex flex-col items-center text-center gap-10">

            <img
              src={dentDuChat}
              alt="Vue de la Dent du Chat en Savoie"
              loading="lazy"
              decoding="async"
              className="w-full max-w-[400px] lg:max-w-[450px] mx-auto"
            />

            <div className="max-w-[600px]">

               <h3 className="font-['TitanOne'] text-[#031E39] text-[40px] lg:text-[60px] mb-8">
                Nous
              </h3>

              <p className="text-[#54001A] mb-6">
                Felices Communication, agence de proximité, <strong>située à Chambéry.</strong>
              </p>

              <p className="p-default">
                <span className="highlight">Basée à Chambéry</span>, au cœur de la Savoie,
                <br />Felices Communication est née d’une envie simple :
                <br />mettre en lumière
                <span className="highlight">
                  <strong> les acteurs qui façonnent notre territoire.</strong>
                </span>

                <br /><br />

                <strong>
                  Entreprises, collectivités, associations ou structures émergentes
                </strong> : nous accompagnons celles et ceux qui veulent communiquer avec justesse, impact et authenticité.

                <br /><br />

                Felices Communication crée des
                <span className="highlight"> stratégies sur mesure</span>, imaginées pour
                <span className="highlight"> refléter votre identité et vos valeurs.</span>
              </p>

            </div>
          </div>

          {/* colonne vous */}
          <div className="flex flex-col items-center text-center gap-10">

            <div className="order-2 lg:order-1 max-w-[500px]">

              <h3 className="font-['TitanOne'] text-[#031E39] text-[40px] lg:text-[60px] mb-8">
                Vous
              </h3>

              <p className="text-[#54001A] mb-6">
                L’expertise au service de tous les acteurs
              </p>

              <p className="p-default">
                Nous accompagnons les entreprises, les collectivités, les associations, les indépendants et tous ceux
                <br />
                qui
                <span className="highlight">
                  <strong> souhaitent renforcer leur visibilité </strong>
                </span>
                <br />
                ou
                <span className="highlight">
                  <strong> moderniser leur image. </strong>
                </span>

                <br /><br />

                Chaque mission est conçue sur mesure, avec une stratégie adaptée à vos objectifs, votre public et vos moyens.
              </p>

            </div>

            <img
              src={lacBourget}
              alt="Vue du lac du Bourget en Savoie"
              loading="lazy"
              decoding="async"
              className="order-1 lg:order-3 w-full max-w-[500px] lg:max-w-[550px] mx-auto"
            />

          </div>

        </div>
      </Container>
    </section>
  )
}