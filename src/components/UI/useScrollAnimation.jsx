import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

export default function useScrollAnimation() {

  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {

    let lastScrollY = window.scrollY

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          const currentScrollY = window.scrollY
          const isScrollingDown = currentScrollY > lastScrollY

          if (entry.isIntersecting && isScrollingDown) {
            entry.target.classList.add("in-view")
            observer.unobserve(entry.target)
          }

          lastScrollY = currentScrollY

        })
      },
      { threshold: 0.3 }
    )

    const observeSections = () => {
      const sections = document.querySelectorAll(".animate-section")

      sections.forEach((section) => {
        if (!section.classList.contains("in-view")) {
          observer.observe(section)
        }
      })
    }

    observeSections()

    const mutationObserver = new MutationObserver(() => {
      observeSections()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    if (navigationType === "POP") {
      const sections = document.querySelectorAll(".animate-section")
      sections.forEach(section => {
        section.classList.add("in-view")
      })
    }

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }

  }, [location.pathname, navigationType])

}