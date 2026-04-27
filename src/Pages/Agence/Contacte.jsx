import { useMemo } from "react"
import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import { Link } from "react-router-dom"
import ScrollVelocity from "../../components/UI/ScrollVelocity"

export default function Contacte() {

  const topText = useMemo(() => ["Construire"], [])
  const bottomText = useMemo(() => ["Ensemble"], [])

  return (
    <section className="relative mb-24 lg:mb-32 bg-[#F4EFC9] animate-section">

      {/* texte haut */}
      <ScrollText texts={topText} size="text-[17vw]" />

      <Container>

        <div className="max-w-[1400px] mx-auto text-right">

          <p className="text-[18px] md:text-xl lg:text-[22px] font-medium leading-relaxed">

            <span className="highlight font-bold">
              Construisons ensemble votre histoire.
            </span>

            <br /><br />

            Nous vous accompagnons à chaque étape, avec la conviction que les meilleures idées naissent lorsque l’on travaille ensemble, dans un climat de confiance et d’échange.

            <br /><br />

            <span className="highlight font-bold">Nous, c’est vous.</span>

          </p>

          <div className="flex justify-end mt-6 md:mt-8">

            <Link to="/contact">
              <Button className="w-fit bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105">
                Contactez-nous
              </Button>
            </Link>

          </div>

        </div>

      </Container>

      {/* texte bas */}
      <ScrollText texts={bottomText} size="text-[18vw]" />

    </section>
  )
}

function ScrollText({ texts, size }) {
  return (
    <div className="w-full overflow-hidden">
      <ScrollVelocity
        texts={texts}
        velocity={50}
        className={`font-['TitanOne'] ${size} text-[#54001A] leading-none opacity-10`}
      />
    </div>
  )
}