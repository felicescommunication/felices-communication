import { motion, AnimatePresence } from "framer-motion"
import { useState, useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"

export default function MenuOverlay({ onClose, setMenuHover }) {
  const navigate = useNavigate()

  const [hovered, setHovered] = useState(null)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = useMemo(() => ([
    { label: "Conseil et stratégie", path: "/services/conseil" },
    { label: "Identité visuelle", path: "/services/identite" },
    { label: "Supports graphiques", path: "/services/supports-graphiques" },
    { label: "Site web", path: "/services/site-web" },
    { label: "Réseaux sociaux", path: "/services/reseaux" },
  ]), [])

  const goTo = useCallback((path) => {
    onClose()
    navigate(path)
  }, [navigate, onClose])

  const handleHover = useCallback((value) => {
    setHovered(value)
  }, [])

  const isServicesActive = hovered === "services" || servicesOpen

  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      {/* =========================
         REALISATIONS
      ========================= */}
      <div
        className={`flex-1 flex items-center justify-center cursor-pointer transition-colors duration-300
        ${hovered === "realisations" ? "bg-[#FFCFF5]" : "bg-[#021d36]"}`}
        onClick={() => goTo("/realisations")}
        onMouseEnter={() => handleHover("realisations")}
        onMouseLeave={() => handleHover(null)}
      >
        <h4 className={`text-3xl md:text-4xl transition-all ${
          hovered === "realisations"
            ? "text-[#021d36] font-['TitanOne']"
            : "text-[#F4EFC9] font-['Comfortaa']"
        }`}>
          Nos réalisations
        </h4>
      </div>

      {/* =========================
         SERVICES
      ========================= */}
      <div
        className={`
          flex flex-col items-center justify-center cursor-pointer relative transition-all duration-300
          ${servicesOpen ? "flex-none py-10 md:flex-1 md:py-0" : "flex-1"}
          ${isServicesActive ? "bg-[#54001A]" : "bg-[#F4EFC9]"}
        `}
        onMouseEnter={() => {
          handleHover("services")
          if (!servicesOpen) setMenuHover("services-active")
        }}
        onMouseLeave={() => {
          handleHover(null)
          if (!servicesOpen) setMenuHover(null)
        }}
        onClick={() => {
          if (servicesOpen) return goTo("/services")
          setServicesOpen(true)
          setMenuHover("services-active")
        }}
      >

        <h4 className={`text-3xl md:text-4xl transition-all ${
          isServicesActive
            ? "text-[#F4EFC9] font-['TitanOne']"
            : "text-[#021d36] font-['Comfortaa']"
        }`}>
          <span
            className={`inline-block transition-all duration-200
              ${
                servicesOpen && hovered === "services-active"
                  ? "translate-x-[6px] text-[#FFCFF5]"
                  : servicesOpen
                  ? "text-[#F4EFC9]"
                  : ""
              }`}
            onMouseEnter={() => servicesOpen && handleHover("services-active")}
            onMouseLeave={() => servicesOpen && handleHover(null)}
          >
            Nos services
          </span>
        </h4>

        {/* dropdown */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              className="flex flex-col items-center gap-6 md:gap-10 mt-8 md:mt-10 text-xl md:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {services.map(({ label, path }) => (
                <div
                  key={path}
                  onClick={() => goTo(path)}
                  className="text-[#F4EFC9] font-['Comfortaa'] cursor-pointer transition-all duration-300 hover:text-[#FFCFF5] hover:translate-x-[6px]"
                >
                  {label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* =========================
         AGENCE
      ========================= */}
      <div
        className={`flex-1 flex items-center justify-center cursor-pointer transition-colors duration-300
        ${hovered === "agence" ? "bg-[#FFCFF5]" : "bg-[#021d36]"}`}
        onClick={() => goTo("/agence")}
        onMouseEnter={() => handleHover("agence")}
        onMouseLeave={() => handleHover(null)}
      >
        <h4 className={`text-3xl md:text-4xl transition-all ${
          hovered === "agence"
            ? "text-[#021d36] font-['TitanOne']"
            : "text-[#F4EFC9] font-['Comfortaa']"
        }`}>
          L'agence
        </h4>
      </div>

    </motion.div>
  )
}