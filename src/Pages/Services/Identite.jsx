import { useRef, lazy, Suspense } from "react";

import FloatingContactButton from "../../components/UI/FloatingContactButton";
import useHighlightAnimation from "../../components/UI/useHighlightAnimation";

import HeroIdentite from "./Identite/HeroIdentite";

const Section1Identite = lazy(() => import("./Identite/Section1Identite"));
const Section2Identite = lazy(() => import("./Identite/Section2Identite"));
const SectionBranding = lazy(() => import("./Identite/SectionBranding"));
const RealisationsIdentite = lazy(() => import("./Identite/RealisationsIdentite"));
const CTAIdentite = lazy(() => import("./Identite/CTAIdentite"));

import { Helmet } from "react-helmet"

function SectionFallback() {
  return <section className="h-screen bg-[#F4EFC9]" />;
}

export default function Identite() {
  const sectionRef = useRef(null);

  useHighlightAnimation();

  return (
    <>
    <Helmet>
      <title>Création d’identité visuelle & logo | Felices Communication</title>
      <meta
        name="description"
        content="Création d’identité visuelle, de logo et de charte graphique sur mesure pour construire une image de marque forte, cohérente et professionnelle."
      />
    </Helmet>
      <main>

        {/* HERO */}
        <HeroIdentite sectionRef={sectionRef} />

        {/* SECTIONS */}
        <Suspense fallback={<SectionFallback />}>
          <Section1Identite sectionRef={sectionRef} />
          <Section2Identite />
          <SectionBranding />
          <RealisationsIdentite />
          <CTAIdentite />
        </Suspense>

      </main>

      <FloatingContactButton />
    </>
  );
}