import { useEffect, useState, lazy, Suspense } from "react"
const ColorBends = lazy(() => import("../../components/UI/ColorBends"))
const ShinyText = lazy(() => import("../../components/UI/ShinyText"))
import arrowDown from "../../assets/arrow-down.svg"

// Fréquence de base calibrée sur un écran large de référence (16:9, type desktop)
const BASE_FREQUENCY = 0.9
const REFERENCE_ASPECT = 16 / 9

export default function Hero() {
  const endings = [
    "votre stratégie",
    "votre identité visuelle",
    "vos réseaux sociaux..."
  ]
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState(endings[0])
  const [fadeState, setFadeState] = useState("fade-in")
  const [mounted, setMounted] = useState(false)
  const [frequency, setFrequency] = useState(BASE_FREQUENCY)

  useEffect(() => {
    setMounted(true)

    // Calcule la fréquence nécessaire pour reproduire la même densité de vagues
    // que sur un écran large, quel que soit le ratio largeur/hauteur réel de l'écran.
    const aspect = window.innerWidth / window.innerHeight
    const computedFrequency = BASE_FREQUENCY * (REFERENCE_ASPECT / aspect)
    setFrequency(computedFrequency)

    const interval = setInterval(() => {
      setFadeState("fade-out")
      setTimeout(() => {
        setIndex((prev) => {
          const next = (prev + 1) % endings.length
          setDisplayText(endings[next])
          return next
        })
        setFadeState("fade-in")
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Précharge le chunk JS de ColorBends tôt, sans l'exécuter immédiatement
  useEffect(() => {
    const preload = () => import("../../components/UI/ColorBends")
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preload, { timeout: 3000 })
    } else {
      setTimeout(preload, 100)
    }
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-[#F4EFC9] mb-24 lg:mb-32 overflow-hidden">
      {mounted && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <ColorBends
              rotation={30}
              speed={0.1}
              colors={["#55001a", "#ffd5fb", "#55001a"]}
              transparent
              autoRotate={0.05}
              scale={1.2}
              frequency={frequency}
              warpStrength={1.1}
              mouseInfluence={5}
              parallax={3}
              noise={0.0}
            />
          </Suspense>
        </div>
      )}

      {/* H1 */}
      <div className="relative z-20 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="
          font-['Titan_One'] text-[#021d36] leading-[1.2]
          text-[clamp(2.6rem,8vw,4.5rem)]
          md:text-[clamp(3rem,7vw,8rem)]
          lg:text-[clamp(5rem,7vw,11rem)]
          xl:text-[clamp(6rem,6vw,13rem)]
          2xl:text-[clamp(7rem,5vw,15rem)]
        ">
          {/* Ligne 1 */}
          {mounted ? (
            <Suspense fallback={"L'agence qui s'occupe de"}>
              <ShinyText
                text="L'agence qui s'occupe de"
                speed={2.5}
                color="#021d36"
                shineColor="#00427c"
                spread={130}
              />
            </Suspense>
          ) : (
            "L'agence qui s'occupe de"
          )}
          <br />
          {/* Ligne 2 */}
          <span className="fade-wrapper block min-h-[2.4em] md:min-h-0">
            <span className={`fade ${fadeState} block`}>
              {mounted ? (
                <Suspense fallback={endings[index]}>
                  <ShinyText
                    text={displayText}
                    speed={2.5}
                    color="#021d36"
                    shineColor="#00427c"
                    spread={130}
                  />
                </Suspense>
              ) : (
                endings[index]
              )}
            </span>
          </span>
        </h1>
      </div>

      {/* Flèche */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <img
          src={arrowDown}
          alt="scroll"
          className="w-4 md:w-5 animate-bounce"
        />
      </button>
    </section>
  )
}
