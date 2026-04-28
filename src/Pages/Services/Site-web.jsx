import { useRef, lazy, Suspense } from "react";

import FloatingContactButton from "../../components/UI/FloatingContactButton";
import useHighlightAnimation from "../../components/UI/useHighlightAnimation";

import HeroSite from "./SiteWeb/HeroSite";

const Section1Site = lazy(() => import("./SiteWeb/Section1Site"));
const Section2Site = lazy(() => import("./SiteWeb/Section2Site"));
const SectionReferencement = lazy(() => import("./SiteWeb/SectionReferencement"));
const RealisationsSite = lazy(() => import("./SiteWeb/RealisationsSite"));
const CTASite = lazy(() => import("./SiteWeb/CTASite"));

import { Helmet } from "react-helmet"

function SectionFallback() {
  return <section className="h-screen bg-[#F4EFC9]" />;
}

export default function Reseaux() {
  const sectionRef = useRef(null);

  useHighlightAnimation();

  return (
    <>
    <Helmet>
      <title>Création de sites web sur mesure | Felices Communication</title>
      <meta
        name="description"
        content="Création de sites internet sur mesure, modernes et performants pour développer votre visibilité en ligne et attirer de nouveaux clients."
      />
    </Helmet>
      <main>

        {/* HERO */}
        <HeroSite sectionRef={sectionRef} />

        {/* SECTIONS */}
        <Suspense fallback={<SectionFallback />}>
          <Section1Site sectionRef={sectionRef} />
          <Section2Site />
          <SectionReferencement />
          <RealisationsSite />
          <CTASite />
        </Suspense>

      </main>

      <FloatingContactButton />
    </>
  );
}