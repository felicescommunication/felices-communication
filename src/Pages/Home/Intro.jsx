import { useNavigate } from "react-router-dom"
import Button from "../../components/UI/Button"
import Container from "../../components/UI/Container"
import dentDuChat from "../../assets/dent du chat coté.svg"

export default function Intro() {
  const navigate = useNavigate()

  return (
    <section className="mb-24 lg:mb-32 animate-section">

      <Container> 
        <div className="max-w-[1400px] text-center flex flex-col items-center">

          <h2 className="font-['TitanOne'] text-[clamp(2.1rem,6vw,110px)] leading-[0.9] text-[#54001A] mb-10">
            La communication qui fait parler de vous
          </h2>

          <p className="text-[clamp(0.9rem,1.5vw,1.25rem)] max-w-6xl leading-[1.6] mb-10">
            De la stratégie à la création,
            <span className="highlight font-bold"> Felices Communication s’occupe de tout.</span> <br /><br />
            Notre mission ? Vous faire connaître en construisant une identité de marque forte, en boostant votre visibilité et en accompagnant 
            <span className="highlight font-bold"> votre entreprise dans son développement.</span>
          </p>

          <img
            src={dentDuChat}
            alt="Illustration de la Dent du Chat en Savoie"
            className="w-[clamp(220px,25vw,300px)]"
          />

          <h3 className="font-['TitanOne'] text-[clamp(1rem,2.2vw,2.8rem)] mb-12">
            Votre agence de communication basée sur Chambéry
          </h3>

           <Button
    onClick={() => navigate("/agence")}
    className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 -mt-5">
      En savoir +</Button>


        </div>
      </Container> 

    </section>
  )
}