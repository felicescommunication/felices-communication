import { useState, useEffect, useMemo } from "react"
import Container from "../../components/UI/Container"

import img1 from "../../assets/engagement1.webp"
import img2 from "../../assets/engagement2.webp"
import img3 from "../../assets/engagement3.webp"

export default function Engagement() {

  const images = useMemo(() => [img1, img2, img3], [])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="bg-[#F4EFC9] mb-24 lg:mb-32 animate-section">

      <Container>

        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">

            {/* texte */}
            <div className="text-center lg:text-left max-w-[700px] mx-auto lg:mx-0">

              <h3 className="font-['TitanOne'] text-[#54001A] text-[40px] lg:text-[60px] mb-8 leading-[1.1]">
                Notre engagement
              </h3>

              {/* image mobile */}
              <SliderCard images={images} currentIndex={currentIndex} className="lg:hidden" />

              <div className="text-[#031E39] max-w-[600px] mx-auto lg:mx-0 space-y-8">

                <p className="text-base md:text-lg leading-relaxed">
                  Nous nous engageons pleinement dans votre communication,
                  en vous <span className="highlight">accompagnant avec créativité et cohérence <strong>à chaque étape de votre développement.</strong></span>
                </p>

                <p className="text-[18px] md:text-xl lg:text-[24px] font-medium leading-relaxed">
                  Notre savoir-faire : la création de stratégies digitales de communication,
                  d’identités visuelles fortes, de supports graphiques impactants,
                  de développement de sites web clairs, modernes et efficaces,
                  de postes réguliers pour vos réseaux sociaux.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Chaque projet est abordé comme une
                  <span className="highlight"><strong> véritable collaboration</strong></span>,
                  pensé pour renforcer
                  <span className="highlight"> votre image, votre visibilité et votre capacité à toucher votre public.</span>
                </p>

              </div>

            </div>

            {/* image desktop */}
            <div className="hidden lg:flex justify-end">
              <SliderCard images={images} currentIndex={currentIndex} />
            </div>

          </div>

        </div>

      </Container>

    </section>
  )
}

function SliderCard({ images, currentIndex, className = "" }) {
  return (
    <div className={`flex justify-center mb-6 ${className}`}>
      <a href="/realisations" className="card-link" aria-label="Voir nos réalisations">

        <div className="card card-right mt-4 w-[240px] h-[160px] sm:w-[280px] sm:h-[200px] md:w-[340px] md:h-[240px] lg:w-[420px] lg:h-[520px] relative overflow-hidden">

          {images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-[700ms] ease-in-out"
              style={{
                backgroundImage: `url(${img})`,
                opacity: index === currentIndex ? 1 : 0,
              }}
            />
          ))}

        </div>

      </a>
    </div>
  )
}