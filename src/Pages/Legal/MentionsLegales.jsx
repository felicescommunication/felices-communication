import Container from "../../components/UI/Container"

export default function MentionsLegales() {
  return (
    <section className="mb-24 lg:mb-32 pt-40">
      <Container>

        <div className="max-w-[1400px] text-left mb-24 lg:mb-32">

          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 text-[#54001A] whitespace-nowrap">
            Mentions légales
          </h2>

          {/* Identification */}
          <Section title="Identification">
            Dénomination sociale : Felices Communication<br />
            Forme juridique : Entreprise Individuelle<br />
            Adresse : 40 rue Jean Girard Madoux 73000 Chambéry<br />
            Dirigeant : Othilie LEFEBVRE
          </Section>

          {/* Propriété intellectuelle */}
          <Section title="Propriété intellectuelle">
            Propriété intellectuelle des images, illustrations, photographies : Felices Communication<br />
            Propriété intellectuelle du contenu textuel : Felices Communication
          </Section>

          {/* Création du site */}
          <Section title="Création du site" className="break-words">
            Créateur : Felices Communication<br />
            Adresse de courrier électronique : othilielefebvre.pro@gmail.com<br />
            Numéro de téléphone : (+33) 06 26 64 10 66
          </Section>

          {/* Hébergeur */}
          <Section title="Hébergeur">
            Raison sociale :<br />
            Adresse :<br />
            Numéro de téléphone :
          </Section>

        </div>

      </Container>
    </section>
  )
}

function Section({ title, children, className = "" }) {
  return (
    <>
      <h3 className="text-lg sm:text-xl mt-6 mb-2">
        {title}
      </h3>
      <p className={`mb-4 text-sm sm:text-base leading-relaxed ${className}`}>
        {children}
      </p>
    </>
  )
}