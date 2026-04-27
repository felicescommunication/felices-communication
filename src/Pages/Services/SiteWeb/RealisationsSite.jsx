import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

import useHighlightAnimation from "../../../components/UI/useHighlightAnimation";
import useScrollAnimation from "../../../components/UI/useScrollAnimation";

import projets from "../../../data/projets";

import arrowLeft from "../../../assets/arrow-left.svg";
import arrowRight from "../../../assets/arrow-right.svg";

export default function RealisationsSite() {
  useScrollAnimation();
  useHighlightAnimation();

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [scrollState, setScrollState] = useState({ start: true, end: false });
  const [currentRealisationPage, setCurrentRealisationPage] = useState(0);

  const realisations = useMemo(() => {
    return [...projets]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 8)
      .map(p => ({
        id: p.id,
        slug: p.slug,
        cover: p.cover,
        title: p.title
      }));
  }, []);

  const realisationPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < realisations.length; i += 2) {
      pages.push(realisations.slice(i, i + 2));
    }
    return pages;
  }, [realisations]);


  const nextRealisationPage = useCallback(() => {
    setCurrentRealisationPage(prev =>
      prev === realisationPages.length - 1 ? 0 : prev + 1
    );
  }, [realisationPages.length]);

  const prevRealisationPage = useCallback(() => {
    setCurrentRealisationPage(prev =>
      prev === 0 ? realisationPages.length - 1 : prev - 1
    );
  }, [realisationPages.length]);

  useEffect(() => {
    if (!realisationPages.length) return;

    const interval = setInterval(nextRealisationPage, 3000);
    return () => clearInterval(interval);
  }, [nextRealisationPage, realisationPages.length]);

  const handleScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    setScrollState({
      start: scrollLeft <= 5,
      end: scrollLeft >= maxScroll - 5
    });
  }, []);

  return (
    <section className="bg-[#F4EFC9] mb-22 lg:mb-30 animate-section">

      <Container>

        {/* header */}
        <div className="max-w-[1400px] text-center flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[60px] text-[#54001A] mb-8 lg:mb-10">
            Quelques <br /> réalisations
          </h2>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative w-full">

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth"
            style={{
              WebkitMaskImage:
                scrollState.start && !scrollState.end
                  ? "linear-gradient(to left, transparent, black 40px)"
                  : scrollState.end && !scrollState.start
                  ? "linear-gradient(to right, transparent, black 40px)"
                  : "none",
              maskImage:
                scrollState.start && !scrollState.end
                  ? "linear-gradient(to left, transparent, black 40px)"
                  : scrollState.end && !scrollState.start
                  ? "linear-gradient(to right, transparent, black 40px)"
                  : "none"
            }}
          >
            {realisations.map(item => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[75vw] max-w-[280px]"
              >
                <Link
                  to={`/realisations/${item.slug}`}
                  className="card-link"
                >
                  <div
                    className="
                      card
                      relative
                      flex items-end justify-center
                      pb-6
                      h-[180px]
                      bg-cover bg-center
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-out
                      origin-center
                    "
                    style={{ backgroundImage: `url(${item.cover})` }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* flèches */}
          <div className="flex justify-between px-6 mt-4">
            <button
              onClick={() => sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
              className={`arrow arrow-left-hint transition-opacity ${
                scrollState.start ? "opacity-0 pointer-events-none" : "opacity-40"
              }`}
            >
              <img src={arrowLeft} alt="prev" />
            </button>

            <button
              onClick={() => sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
              className={`arrow arrow-right-hint transition-opacity ${
                scrollState.end ? "opacity-0 pointer-events-none" : "opacity-40"
              }`}
            >
              <img src={arrowRight} alt="next" />
            </button>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex justify-center items-center gap-24 mt-6 transition-all duration-500 w-full">

          {realisationPages[currentRealisationPage]?.map((item, index) => (

            <Link
              key={item.id}
              to={`/realisations/${item.slug}`}
              className="card-link"
            >
              <div
                className={`card group relative w-[430px] h-[250px]
                  ${index === 0 ? "card-left" : "card-right"}
                `}
                style={{
                  backgroundImage: `url(${item.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

                {/* texte */}
                <div className="absolute bottom-5 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                  <h3 className="font-['TitanOne'] text-[#FFCFF5] text-[28px] px-4">
                    {item.title}
                  </h3>
                </div>

              </div>
            </Link>

          ))}

        </div>

        {/* bouton */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/realisations")}
            className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-6 md:mt-8 lg:mt-16"
          >
            Voir +
          </Button>
        </div>

        {/* pagination */}
        <div className="hidden lg:flex items-center justify-center gap-5 mt-12">

          <button className="arrow arrow-left" onClick={prevRealisationPage}>
            <img src={arrowLeft} alt="prev" />
          </button>

          <div className="flex gap-2">
            {realisationPages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentRealisationPage ? "active" : ""}`}
                onClick={() => setCurrentRealisationPage(index)}
              />
            ))}
          </div>

          <button className="arrow arrow-right" onClick={nextRealisationPage}>
            <img src={arrowRight} alt="next" />
          </button>

        </div>

      </Container>

    </section>
  );
}