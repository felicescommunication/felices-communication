import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import Button from "../../components/UI/Button"
import closeIcon from "../../assets/ferme.png"
import { Helmet } from "react-helmet"

export default function Contact() {

  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(false)
  const [invalidFields, setInvalidFields] = useState([])

  const formRef = useRef(null)
  const navigate = useNavigate()

  const thankYouText = "Merci de nous avoir contacté !"

  const handleInputChange = useCallback(() => {
    setError(false)
    setInvalidFields([])
  }, [])

  const handlePhoneChange = useCallback((e) => {
    handleInputChange()

    let value = e.target.value.replace(/\D/g, "").slice(0, 10)
    const parts = value.match(/.{1,2}/g)
    e.target.value = parts ? parts.join(" ") : value
  }, [handleInputChange])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    const inputs = form.querySelectorAll("input, textarea")

    const invalid = []

    inputs.forEach((input) => {
      if (input.name === "telephone" && !input.value.trim()) return

      // ✅ AJOUT checkbox
      if (input.type === "checkbox" && !input.checked) {
        invalid.push(input.name)
      } else if (!input.checkValidity()) {
        invalid.push(input.name)
      }
    })

    if (invalid.length) {
      setInvalidFields(invalid)
      setError(true)
      return
    }

    setInvalidFields([])
    setError(false)

    try {
      const res = await fetch("https://formspree.io/f/mzdjrzyg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })

      if (!res.ok) throw new Error("Erreur envoi")

      setIsSent(true)
      form.reset()

    } catch (err) {
      console.error(err)
      setError(true)
    }
  }

  useEffect(() => {
    if (!isSent) return

    const timer = setTimeout(() => navigate("/"), 3000)
    return () => clearTimeout(timer)

  }, [isSent, navigate])

  const shake = { x: [0, -4, 4, -4, 4, 0] }

  const getInputClass = (name) =>
    `input-contact py-4 focus:outline-none focus:ring-2 ${
      invalidFields.includes(name)
        ? "ring-2 ring-[#FFCFF5]"
        : "focus:ring-[#FFCFF5]/40"
    }`

  return (
<>
<Helmet>
      <title>Contact agence communication digitale | Felices Communication</title>
      <meta
        name="description"
        content="Un projet digital ? Contactez Felices Communication pour la création de votre logo, identité visuelle, site web et la gestion de vos réseaux sociaux. Réponse rapide et accompagnement sur mesure."
      />
    </Helmet>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#102847] relative px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-12 text-[#F4EFC9]"
    >

      <AnimatePresence>
        {isSent && (
          <motion.div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <motion.div className="bg-[#F4EFC9] w-full max-w-[600px] rounded-3xl p-8 md:p-12 relative text-center">

              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setIsSent(false)}
                className="absolute -top-6 -right-6 w-12 h-12"
              >
                <img src={closeIcon} alt="" className="w-full h-full object-contain" />
              </button>

              <motion.h3
                className="font-['TitanOne'] text-2xl text-[#102847] mb-6"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
              >
                {thankYouText.split("").map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    {char}
                  </motion.span>
                ))}
              </motion.h3>

              <p className="text-[#102847] mb-2">
                Votre demande est prise en compte !
              </p>
              <p className="text-[#102847]">
                Nous vous contacterons dans les meilleurs délais.
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* bouton fermé */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute top-2 right-6 w-9 h-9 md:w-16 md:h-16 flex items-center justify-center"
      >
        <img src={closeIcon} alt="Fermer" className="w-full h-full object-contain" />
      </motion.button>

      {/* titre */}
      <div className="text-center mb-10">
        <h2 className="font-['TitanOne'] text-[clamp(2rem,6vw,110px)] leading-[0.9] text-[#FFCFF5]">
          Parlons ensemble
        </h2>
        <h3 className="font-['TitanOne'] text-[clamp(20px,4vw,40px)] text-[#FFCFF5]">
          de vos projets, dès maintenant
        </h3>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 relative items-center">

        <div className="hidden lg:block absolute left-[40%] top-0 h-full w-[1.5px] bg-[#FFCFF5] -translate-x-1/2" />

        {/* form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="order-1 lg:order-2 flex flex-col gap-4 lg:pl-10"
        >

          <input type="text" name="_gotcha" className="hidden" />

          {/* inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["prenom", "nom"].map((name) => (
              <motion.input
                key={name}
                name={name}
                required
                placeholder={`${name.charAt(0).toUpperCase() + name.slice(1)} *`}
                onChange={handleInputChange}
                animate={invalidFields.includes(name) ? shake : {}}
                className={getInputClass(name)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.input
              name="email"
              type="email"
              required
              placeholder="Votre email *"
              onChange={handleInputChange}
              animate={invalidFields.includes("email") ? shake : {}}
              className={getInputClass("email")}
            />

            <motion.input
              name="telephone"
              placeholder="Votre numéro"
              onChange={handlePhoneChange}
              animate={invalidFields.includes("telephone") ? shake : {}}
              className={getInputClass("telephone")}
            />
          </div>

          <motion.input
            name="entreprise"
            required
            placeholder="Votre entreprise *"
            onChange={handleInputChange}
            animate={invalidFields.includes("entreprise") ? shake : {}}
            className={getInputClass("entreprise")}
          />

          <motion.textarea
            name="projet"
            required
            placeholder="Votre projet *"
            onChange={handleInputChange}
            animate={invalidFields.includes("projet") ? shake : {}}
            className={`input-contact h-28 resize-none focus:outline-none focus:ring-2 ${
              invalidFields.includes("projet")
                ? "ring-2 ring-[#FFCFF5]"
                : "focus:ring-[#FFCFF5]/40"
            }`}
          />

          {/* ✅ CHECKBOX RGPD AJOUTÉE */}
          <motion.label
  className="flex items-start gap-2 text-[11px] lg:text-[12px] leading-tight mt-2 max-w-[90%]"
  animate={invalidFields.includes("consent") ? shake : {}}
>
  <input
    type="checkbox"
    name="consent"
    required
    onChange={handleInputChange}
    className="mt-[3px] accent-[#FFCFF5] scale-90"
  />
  <span>
    J’ai lu et j’accepte la{" "}
    <a href="/politique-confidentialite" className="underline">
      politique de confidentialité
    </a>. Je consens à ce que les données soient collectées et stockées pour traiter ma demande.
  </span>
</motion.label>

          {error && (
            <p className="text-[#FFCFF5] text-center">
              * Remplissez les champs obligatoires et acceptez la politique de confidentialité
            </p>
          )}

          <Button
            type="submit"
            className="mt-1 mx-auto block bg-[#FFCFF5] !text-[#031E39] px-10 py-3 rounded-full transition-all duration-300 hover:bg-[#F4EFC9] hover:!text-[#54001A] hover:scale-110"
          >
            Envoyer
          </Button>

        </form>

        {/* Contact */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center lg:pr-6">
          <h3 className="font-['TitanOne'] text-2xl mb-6">
            Vous pouvez aussi nous <br /> contacter ici
          </h3>

          <div className="flex flex-col gap-6">
            <a href="contact@felices-communication.com" className="hover:text-[#FFCFF5] hover:translate-x-2 transition">
              contact@felices-communication.com
            </a>
            <a href="tel:+33626641066" className="hover:text-[#FFCFF5] hover:translate-x-2 transition">
              +33(0)6 26 64 10 66
            </a>
          </div>
        </div>

      </div>
    </motion.div>
    </>
  )
}