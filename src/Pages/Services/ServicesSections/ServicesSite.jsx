import { Link } from "react-router-dom"
import useHighlightAnimation from "../../../components/UI/useHighlightAnimation"
import Button from "../../../components/UI/Button"
import Container from "../../../components/UI/Container"

import siteImg from "../../../assets/site-web.webp"

export default function ServicesSite() {
  useHighlightAnimation()

  return (
    <section className="slide slide-4 bg-[#F4EFC9] h-screen flex items-center mb-20 lg:-mb-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* TEXTE */}
          <div className="order-1 text-center lg:text-left">

            <h2 className="text-4xl md:text-5xl lg:text-[60px] text-[#54001A] mb-6">
              Site web
            </h2>

            {/* IMAGE MOBILE */}
            <div className="lg:hidden mb-8 flex justify-center">
              <div
                className="w-[240px] h-[160px] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${siteImg})` }}
              />
            </div>

            <p className="text-sm md:text-base lg:text-lg text-[#54001A] font-medium mb-6">
              Un site web à l’image de votre marque,<br />
              optimisé pour augmenter votre taux de conversion
            </p>

            <p className="text-sm md:text-base lg:text-[17px] leading-relaxed text-[#031E39] mt-6">
              Nous concevons des expériences utilisateurs et des interfaces utilisateurs (UX/UI) en collaboration avec un partenaire développeur de site web.

              <br /><br />
              Tous nos sites sont dits <span className="highlight font-bold">responsives</span> c’est-à-dire qu’ils <span className="highlight font-bold">s’adaptent parfaitement à tous les écrans</span> pour un confort de consultation.

              Ils sont <span className="highlight font-bold">optimisés pour le référencement naturel (SEO)</span> maximisant votre visibilité en ligne.

              <br /><br />
              Nous réalisons également des <span className="highlight font-bold">refontes de sites existants</span> pour moderniser votre image, améliorer l’expérience utilisateur et booster votre taux de conversion.
            </p>

            <Link to="/services/site-web">
              <Button className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-8">
                En savoir +
              </Button>
            </Link>
          </div>

          {/* IMAGE DESKTOP */}
         <div className="order-3 lg:order-2 hidden lg:flex justify-end">
  <div
    className="w-[500px] h-[400px] rounded-3xl bg-cover bg-center transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    style={{ backgroundImage: `url(${siteImg})` }}
  />
</div>

        </div>
      </Container>
    </section>
  )
}