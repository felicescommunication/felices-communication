import { useEffect } from "react"

export default function useHighlightAnimation() {
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.4,
      }
    )

    const observeHighlights = () => {
      const highlights = document.querySelectorAll(".highlight")

      highlights.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el)
        }
      })
    }

    observeHighlights()

    const mutationObserver = new MutationObserver(() => {
      observeHighlights()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }

  }, [])
}