import { useEffect, useState } from "react";

export default function useCookieConsent() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    // afficher si pas encore choisi
    if (!localStorage.getItem("cookieChoice")) {
      setVisible(true);
    }

    const handleScroll = () => {
      setCompact(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieChoice", "accepted");
    setVisible(false);

    // 👉 ici tu peux lancer tes scripts (analytics etc.)
  };

  const refuse = () => {
    localStorage.setItem("cookieChoice", "refused");
    setVisible(false);
  };

  return {
    visible,
    compact,
    accept,
    refuse,
  };
}