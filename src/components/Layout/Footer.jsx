import { Link } from "react-router-dom"
import logo from "../../assets/felices-beige.png"

const linkStyle =
  "font-['TitanOne'] text-xl md:text-2xl hover:text-[#FFCFF5] transition hover:translate-x-1"

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#031E39] text-[#F4EFC9] px-6 md:px-16 lg:px-15 py-12 w-full flex flex-col justify-center"
    >
      <div className="max-w-[1400px] mx-auto flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 lg:gap-32 text-center">

          {/* colonne 1 */}
          <div className="flex flex-col items-center gap-5">
            <Link to="/">
              <img
                src={logo}
                alt="Felices"
                className="w-[220px] md:w-[260px] lg:w-[300px] cursor-pointer"
              />
            </Link>

            <h4 className="font-['TitanOne'] text-2xl md:text-3xl">
              Contact
            </h4>

            <a
              href="mailto:contact@felices-communication.com"
              className="text-base md:text-lg hover:text-[#FFCFF5] transition hover:translate-x-1"
            >
              contact@felices-communication.com
            </a>

            <a
              href="tel:+33626641066"
              className="text-base md:text-lg hover:text-[#FFCFF5] transition hover:translate-x-1"
            >
              +33 (0)6 26 64 10 66
            </a>
          </div>

         {/* colonne 2 */}
<div className="flex flex-col items-center gap-6 md:justify-between md:h-[232px]">
  <p className="opacity-70">Nous</p>

  <Link to="/services" className={linkStyle}>
    Nos services
  </Link>

  <Link to="/realisations" className={linkStyle}>
    Nos réalisations
  </Link>

  <Link to="/agence" className={linkStyle}>
    L’agence
  </Link>
</div>

{/* colonne 3 */}
<div className="flex flex-col items-center gap-6 md:justify-between md:h-[232px]">
  <p className="opacity-70">Réseaux sociaux</p>

  <a href="https://www.instagram.com/felices.communication?igsh=MWxtemd5eDczbDc3Yg%3D%3D&utm_source=qr" className={linkStyle}>
    Instagram
  </a>

  <a href="#" className={linkStyle}>
    LinkedIn
  </a>

  <a href="https://www.tiktok.com/@felices.communication?_r=1&_t=ZN-95tLOYlA3fy" className={linkStyle}>
    TikTok
  </a>
</div>

        </div>
      </div>

      {/* bas */}
<div className="mt-12 flex justify-center">
  <div className="flex flex-col md:flex-row items-center gap-6 text-sm opacity-80 text-center">
    
    <Link to="/mentions-legales" className="hover:opacity-100 transition">
      Mentions légales
    </Link>

    <Link to="/politique-confidentialite" className="hover:opacity-100 transition">
      Politique de confidentialité
    </Link>

  </div>
</div>
    </footer>
  )
}