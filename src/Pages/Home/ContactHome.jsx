import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Container from "../../components/UI/Container"
import Button from "../../components/UI/Button"
import closeIcon from "../../assets/ferme.png" 

export default function ContactHome() {

  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(false)
  const [invalidFields, setInvalidFields] = useState([])

  const formRef = useRef(null)

  const navigate = useNavigate()

  const handleInputChange = () => {
    setError(false)
    setInvalidFields([]) 
  }

  const handlePhoneChange = (e) => {

    handleInputChange()

    let value = e.target.value.replace(/\D/g, "") 

    value = value.substring(0, 10) 

    const parts = value.match(/.{1,2}/g)

    if (parts) {
      e.target.value = parts.join(" ")
    } else {
      e.target.value = value
    }

  }

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isSent])

  const thankYouText = "Merci de nous avoir contacté !"

  const inputStyle =
    "bg-[#031E39] text-[#F4EFC9] rounded-full px-6 py-4 placeholder-[#F4EFC9]/60 focus:outline-none focus:ring-2"

  const handleSubmit = async (e) => {

    e.preventDefault()

    const form = formRef.current
    const formData = new FormData(form)

    const inputs = form.querySelectorAll("input:not([type='hidden']), textarea")

    const invalid = []

    inputs.forEach((input) => {

      if (input.name === "telephone" && input.value.trim() === "") {
        return
      }

      if (!input.checkValidity()) {
        invalid.push(input.name)
      }

    })

    if (invalid.length > 0) {
      setInvalidFields(invalid)
      setError(true)
      return
    }

    setInvalidFields([])
    setError(false)

    try {

      await fetch("https://formspree.io/f/mzdjrzyg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })

      setIsSent(true)
      form.reset()

    } catch (err) {

      console.error("Erreur envoi formulaire", err)

    }

  }

  return (
    <section className="mb-24 lg:mb-40 animate-section"> 

      <Container>

        <AnimatePresence>
          {isSent && (
            <motion.div
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >

              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 14
                }}
                className="bg-[#F4EFC9] w-[90%] max-w-[600px] rounded-3xl p-12 relative text-center"
              >

                <button
                  type="button" 
                  aria-label="Fermer la fenêtre"
                  onClick={() => setIsSent(false)}
                  className="absolute -top-6 -right-6 w-12 h-12"
                >
                  <img
                    src={closeIcon}
                    alt="Fermer"
                    className="w-full h-full object-contain"
                  />
                </button>

                <motion.h3
                  className="font-['TitanOne'] text-2xl text-[#102847] mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.03 }
                    }
                  }}
                >
                  {thankYouText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
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

     <div className="max-w-[1400px] text-center flex flex-col items-center gap-4">
 
     <h2 className="font-['TitanOne'] text-[clamp(2.3rem,6vw,110px)] leading-[0.9] text-[#54001A]">
Parlons de vous,</h2>

       <h3 className="font-['TitanOne'] text-[clamp(20px,4vw,40px)] leading-[0.9] text-[#54001A]">
  de votre marque, de vos projets
</h3>

       <div className="grid lg:grid-cols-[420px_auto_1fr] gap-10 lg:gap-20 mt-1 lg:mt-10 items-center w-full">

<div className="flex flex-col items-center text-center gap-4">

<div className="hidden lg:flex flex-col items-center text-center gap-8">

<h3 className="font-['TitanOne'] text-4xl text-[#031E39]">
Nous contacter
</h3>

<a
href="mailto:contact@felices-communication.com"
className="text-[clamp(14px,2.5vw,18px)] text-[#031E39] breadcrumb-link transition hover:translate-x-2"
>
contact@felices-communication.com
</a>

<a
href="tel:+33626641066"
className="text-[clamp(14px,2.5vw,18px)] text-[#031E39] breadcrumb-link transition hover:translate-x-2"
>
+33 (0)6 26 64 10 66
</a>


 <Button
               className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-1"
              onClick={() => navigate("/contact")}
            >
             Contactez-nous
            </Button>
</div>
          </div>

          <div className="hidden lg:block w-[1.2px] h-full bg-[#54001A]"></div>

   <form
ref={formRef}
onSubmit={handleSubmit}
noValidate
className="flex flex-col gap-4 w-full"
>
<input type="text" name="_gotcha" className="hidden" />
            <div className="grid grid-cols-2 gap-4">
<motion.input
name="prenom"
required
placeholder="Prénom *"
onChange={handleInputChange}
initial={false}
animate={invalidFields.includes("prenom") ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
transition={{ duration: 0.35 }}
className={`${inputStyle} ${
invalidFields.includes("prenom")
? "ring-2 ring-[#FFCFF5] placeholder-[#FFCFF5]"
: "focus:ring-[#F4EFC9]/40"
}`}
/>

<motion.input
name="nom"
required
placeholder="Nom *"
onChange={handleInputChange}
initial={false}
animate={invalidFields.includes("nom") ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
transition={{ duration: 0.35 }}
className={`${inputStyle} ${
invalidFields.includes("nom")
? "ring-2 ring-[#FFCFF5] placeholder-[#FFCFF5]"
: "focus:ring-[#F4EFC9]/40"
}`}
/>
</div>

           <div className="grid grid-cols-2 gap-4">
<motion.input
name="email"
type="email"
required
placeholder="Votre email *"
onChange={handleInputChange}
initial={false}
animate={invalidFields.includes("email") ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
transition={{ duration: 0.35 }}
className={`${inputStyle} ${
invalidFields.includes("email")
? "ring-2 ring-[#FFCFF5] placeholder-[#FFCFF5]"
: "focus:ring-[#F4EFC9]/40"
}`}
/>
<motion.input
name="telephone"
type="tel"
placeholder="Votre numéro"
inputMode="numeric"
onChange={handlePhoneChange}
initial={false}
animate={invalidFields.includes("telephone") ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
transition={{ duration: 0.35 }}
className={`${inputStyle} ${
invalidFields.includes("telephone")
? "ring-2 ring-[#FFCFF5] placeholder-[#FFCFF5]"
: "focus:ring-[#F4EFC9]/40"
}`}
/>
</div>

           <motion.input
           name="entreprise"
required
placeholder="Votre entreprise / organisation *"
onChange={handleInputChange}
initial={false}
animate={invalidFields.includes("entreprise") ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
transition={{ duration: 0.35 }}
className={`${inputStyle} w-full ${
invalidFields.includes("entreprise")
? "ring-2 ring-[#FFCFF5] placeholder-[#FFCFF5]"
: "focus:ring-[#F4EFC9]/40"
}`}
/>

            <motion.textarea
            name="projet"
required
placeholder="Parlez-nous de votre projet *"
onChange={handleInputChange}
initial={false}
animate={invalidFields.includes("projet") ? { x: [0, -4, 4, -4, 4, 0] } : { x: 0 }}
transition={{ duration: 0.35 }}
className={`bg-[#031E39] text-[#F4EFC9] rounded-3xl px-6 py-4 min-h-[110px] lg:min-h-[130px] resize-none placeholder-[#F4EFC9]/60 focus:outline-none focus:ring-2 ${
invalidFields.includes("projet")
? "ring-2 ring-[#FFCFF5] placeholder-[#FFCFF5]"
: "focus:ring-[#F4EFC9]/40"
}`}
/>

           <p className="text-[6px] lg:text-[7px] leading-snug text-[#031E39]/70 max-w-[640px] text-left">
              Les informations obtenues via ce formulaire seront utilisées uniquement pour répondre à votre demande et seront conservées au maximum deux années. Conformément à la loi du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant. 
<br />Ce site est protégé par reCAPTCHA et Google :
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}politique de confidentialité
              </a>
              {" "}et les
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}conditions d'utilisation
              </a>
              {" "}s'appliquent.
            </p>
{error && (
  <p className="text-[#54001A] text-sm text-center">
    <span className="highlight is-visible font-bold">*Remplissez les champs obligatoires</span>
  </p>
)}
<motion.div
animate={error ? { x: [0, -6, 6, -6, 6, 0] } : {}}
transition={{ duration: 0.4 }}
>
<Button
type="submit"
className="w-fit mx-auto bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 mt-1"
>
Envoyer
</Button>
</motion.div>

          </form>

        </div>
      </div>
       </Container> 
    </section>
  )
}