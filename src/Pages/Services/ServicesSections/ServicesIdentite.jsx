import { Link } from "react-router-dom"
import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import Button from "../../../components/UI/Button"
import Container from "../../../components/UI/Container"

import identiteImg from "../../../assets/identité-visuelle.webp"

export default function ServicesIdentite() {
  useHighlightAnimation()

  return (
    <section className="slide slide-2 bg-[#F4EFC9] h-screen flex items-center mb-20 lg:-mb-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* TEXTE */}
          <div className="order-1 text-center lg:text-left">

            <h2 className="text-4xl md:text-5xl lg:text-[60px] text-[#54001A] mb-6">
              Identité visuelle*
            </h2>

            {/* IMAGE MOBILE */}
            <div className="lg:hidden mb-8 flex justify-center">
                          <div
                            className="w-[240px] h-[160px] rounded-2xl bg-cover bg-center"
                            style={{ backgroundImage: `url(${identiteImg})` }}
                          />
                        </div>

            <p className="text-sm md:text-base lg:text-lg text-[#54001A] mb-6">
              <strong>Le branding* qui fait parler votre marque</strong>
            </p>

            <p className="text-sm md:text-base lg:text-[17px] leading-relaxed text-[#031E39] mt-6">
              Chaque marque a une histoire, nous sommes là pour la laisser s’exprimer ; nous l’analysons, tout comme vos valeurs et vos ambitions pour construire <span className="highlight font-bold">un univers graphique cohérent et distinctif.</span>

              <br /><br />
              De la conception du logo à l’élaboration de votre charte graphique, nous concevons une identité visuelle capable de transmettre <span className="highlight font-bold">la personnalité de votre entreprise, d’installer votre crédibilité et de vous différencier.</span>

              <br /><br />
              Notre objectif : donner à votre marque une <span className="highlight font-bold">image visuelle authentique, forte et représentative.</span>
            </p>

            <Link to="/services/identite">
              <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-8">
                En savoir +
              </Button>
            </Link>
          </div>

          {/* IMAGE DESKTOP */}
         <div className="order-3 lg:order-2 hidden lg:flex justify-end">
           <div
             className="w-[500px] h-[400px] rounded-3xl bg-cover bg-center transition-all duration-500 hover:scale-105 hover:-translate-y-2"
             style={{ backgroundImage: `url(${identiteImg})` }}
           />
         </div>

        </div>
      </Container>
    </section>
  )
}