import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useState, lazy, Suspense } from "react"

import ScrollToTop from "./components/Layout/ScrollToTop"
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"
import Contact from "./Pages/Contact/Contact"
import CookiesSidebar from "./components/Cookies/CookiesSidebar"

const Home = lazy(() => import("./Pages/Home/Home"))
const Menu = lazy(() => import("./Pages/Menu/Menu"))
const Agence = lazy(() => import("./Pages/Agence/Agence"))
const Services = lazy(() => import("./Pages/Services/Services"))

const Conseil = lazy(() => import("./Pages/Services/Conseil"))
const Identite = lazy(() => import("./Pages/Services/Identite"))
const Supports = lazy(() => import("./Pages/Services/Supports-graphiques"))
const SiteWeb = lazy(() => import("./Pages/Services/Site-web"))
const Reseaux = lazy(() => import("./Pages/Services/Reseaux"))

const Realisations = lazy(() => import("./Pages/Realisations/Realisations"))
const RealisationPage = lazy(() => import("./Pages/Realisations/RealisationPage"))

const MentionsLegales = lazy(() => import("./Pages/Legal/MentionsLegales"))
const PolitiqueConfidentialite = lazy(() => import("./Pages/Legal/PolitiqueConfidentialite"))

const NotFound = lazy(() => import("./Pages/NotFound/NotFound"))

import "./App.css"


function AppContent() {

  const location = useLocation()

  
  const [variant, setVariant] = useState("default")


  const hideNavbar =
    location.pathname === "/contact" ||
    location.pathname === "/menu"

  const hideFooter =
    location.pathname === "/contact"

  return (
    <>
      <ScrollToTop />


      {!hideNavbar && <Navbar variant={variant} />}
<CookiesSidebar />

      <Suspense fallback={
  <div className="h-screen flex items-center justify-center bg-[#F4EFC9]">
    <p className="text-[#021d36]">Chargement...</p>
  </div>
}>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/realisations" element={<Realisations />} />
        <Route path="/realisations/:slug" element={<RealisationPage />} />

        <Route path="/services" element={<Services />} />
        <Route path="/agence" element={<Agence />} />

        <Route path="/services/conseil" element={<Conseil />} />
        <Route path="/services/identite" element={<Identite />} />
        <Route path="/services/supports-graphiques" element={<Supports />} />
        <Route path="/services/site-web" element={<SiteWeb />} />
        <Route path="/services/reseaux" element={<Reseaux />} />

        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

        
        <Route path="*" element={<NotFound setVariant={setVariant} />} />
        </Routes>
</Suspense>

      {!hideFooter && <Footer />}
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App