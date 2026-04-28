import { useRef, lazy, Suspense } from "react";

import FloatingContactButton from "../../components/UI/FloatingContactButton";
import useHighlightAnimation from "../../components/UI/useHighlightAnimation";

import HeroReseaux from "./Reseaux/HeroReseaux";

const Section1Reseaux = lazy(() => import("./Reseaux/Section1Reseaux"));
const Section2Reseaux = lazy(() => import("./Reseaux/Section2Reseaux"));
const SectionEngagement = lazy(() => import("./Reseaux/SectionEngagement"));
const RealisationsReseaux = lazy(() => import("./Reseaux/RealisationsReseaux"));
const CTAReseaux = lazy(() => import("./Reseaux/CTAReseaux"));

import { Helmet } from "react-helmet"

function SectionFallback() {
  return <section className="h-screen bg-[#F4EFC9]" />;
}

export default function Reseaux() {
  const sectionRef = useRef(null);

  useHighlightAnimation();

  return (
    <>
      <main>
<Helmet>
      <title>Gestion des réseaux sociaux & stratégie digitale | Felices Communication</title>
      <meta
        name="description"
        content="Gestion de vos réseaux sociaux : création de contenus, stratégie et publication pour développer votre visibilité et engager votre audience."
      />
    </Helmet>
        {/* HERO */}
        <HeroReseaux sectionRef={sectionRef} />

        {/* SECTIONS */}
        <Suspense fallback={<SectionFallback />}>
          <Section1Reseaux sectionRef={sectionRef} />
          <Section2Reseaux />
          <SectionEngagement />
          <RealisationsReseaux />
          <CTAReseaux />
        </Suspense>

      </main>

      <FloatingContactButton />
    </>
  );
}