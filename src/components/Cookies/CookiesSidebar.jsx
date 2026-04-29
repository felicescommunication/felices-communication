import { useEffect, useState } from "react";

import fermeIcon from "../../assets/ferme2.png";

function loadGA() {
  if (window.gtag) return;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-LNVCYC50SF";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-LNVCYC50SF');
}

export default function CookieSidebar() {
  const [visible, setVisible] = useState(
    !localStorage.getItem("cookieChoice")
  );
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookieChoice");

    if (choice === "accepted") {
      loadGA();
    }

    const handleScroll = () => {
      setCompact(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieChoice", "accepted");
    loadGA();
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookieChoice", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      
      left-1/2 -translate-x-1/2 bottom-4 w-[90%] max-w-sm
      sm:left-6 sm:translate-x-0 sm:w-auto
      
   ${compact ? "p-4 sm:p-6" : "p-5 "}
      
      rounded-2xl border border-[#031E39]/10 
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      bg-[#F4EFC9]/40 backdrop-blur-xl text-[#031E39]`}
    >

      <button
  onClick={accept}
  className={`absolute transition opacity-50 hover:opacity-100
  ${compact ? "-top-1 -right-1" : "top-0 right-0"}`}
>
  <img src={fermeIcon} className="w-6 h-8" />
</button>

      {/* TITRE */}
      <h3 className="text-sm mb-2 tracking-tight">
        Gérer le consentement
      </h3>

      {/* TEXTE */}
      {!compact && (
        <p className="text-xs leading-relaxed mb-4 opacity-70">
          Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.
        </p>
      )}

      {/* BOUTONS */}
      <div className="flex flex-col gap-2">

        {/* ACCEPTER */}
        <button
          onClick={accept}
          className="bg-[#54001A] text-[#F4EFC9] font-semibold py-2 rounded-lg
          transition-all duration-300 hover:scale-[1.03] hover:shadow-md
          hover:bg-[#FFCFF5] hover:text-[#031E39]"
        >
          Accepter
        </button>

        {/* REFUSER */}
        <button
          onClick={refuse}
          className="bg-[#031E39]/10 text-[#031E39] py-2 rounded-lg
          transition-all duration-300 hover:bg-[#031E39]/20"
        >
          Refuser
        </button>

        {/* PRÉFÉRENCES */}
        {!compact && (
          <button
            className="bg-[#54001A]/10 text-[#54001A] py-2 rounded-lg
            border border-[#54001A]/20
            transition-all duration-300
            hover:bg-[#54001A]/20"
          >
            Préférences
          </button>
        )}
      </div>
    </div>
  );
}