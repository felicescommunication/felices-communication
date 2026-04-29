import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MenuOverlay from "../../Pages/Menu/Menu"
import { Link, useLocation } from "react-router-dom"

import closeIcon from "../../assets/ferme.png"
import burgerIcon from "../../assets/menu-burger.svg"
import logoDefault from "../../assets/felices.svg"
import logoBeige from "../../assets/felices-beige.png"

export default function Navbar({ variant = "default", setMenuOpen: setGlobalMenuOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuHover, setMenuHover] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const location = useLocation()

  const isHome = location.pathname === "/"
  const isTransparent = variant === "transparent" || isHome

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) setMenuHover(null)
  }, [menuOpen])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroHeight = window.innerHeight || 1
          const scrollY = window.scrollY
          const progress = Math.min(scrollY / heroHeight, 1)

          setScrollProgress(progress)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const safeScale = Math.max(0.8, 1 - scrollProgress * 0.3)

  const headerStyle = {
    backgroundColor: menuOpen
      ? "transparent"
      : isTransparent
      ? `rgba(244,239,201,${scrollProgress})`
      : "#F4EFC9",

    backdropFilter:
      menuOpen
        ? "none"
        : isTransparent && scrollProgress > 0.15
        ? "blur(6px)"
        : "none",
  }

  const containerStyle = {
    paddingTop: `${24 - scrollProgress * 22}px`,
    paddingBottom: `${24 - scrollProgress * 22}px`,
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-10"
        style={headerStyle}
      >
        <motion.div
          className="relative flex items-center justify-center"
          style={containerStyle}
        >
          {/* menu burger */}
          <motion.button
            className="absolute left-0 flex items-center justify-center z-50 p-2"
            onClick={() => {
              setMenuOpen(prev => {
                const newState = !prev
                setGlobalMenuOpen(newState) // ✅ synchro avec App
                return newState
              })
            }}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ scale: safeScale }}
          >
            <motion.img
              key={menuOpen ? "close" : "burger"}
              src={menuOpen ? closeIcon : burgerIcon}
              alt="Menu"
              className="w-10 md:w-12 cursor-pointer select-none"
              initial={{ opacity: 0, rotate: -90 }} 
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.25 }}
              draggable={false}
            />
          </motion.button>

          {/* logo */}
          <Link to="/" onClick={() => {
            setMenuOpen(false)
            setGlobalMenuOpen(false) // ✅ synchro fermeture
          }}>
            <motion.img
              src={
                menuHover === "services-active"
                  ? logoBeige
                  : logoDefault
              }
              alt="Felices"
              className={`w-44 md:w-56 cursor-pointer ${
                menuOpen ? "hidden md:block" : "block"
              }`}
              style={{ scale: safeScale }}
              whileHover={{ scale: 0.9 }}
              draggable={false}
            />
          </Link>
        </motion.div>
      </motion.header>

      {/* menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <MenuOverlay
            onClose={() => {
              setMenuOpen(false)
              setGlobalMenuOpen(false) // ✅ synchro fermeture
            }}
            setMenuHover={setMenuHover}
          />
        )}
      </AnimatePresence>
    </>
  )
}