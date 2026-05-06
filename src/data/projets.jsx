const projets = [
  {
    id: 1,
    title: "La Débrouille",

    categories: ["Identité visuelle", "Supports graphiques"],

    slug: "la-débrouille",
    date: "2026-03-16",

    cover: "/images/projets/la-debrouille/la-d.webp",

    hero: {
      type: "image", // "image" ou "video"
      src: "/images/projets/la-debrouille/logo-la-debrouille.webp"
    },

    intro:
      "Identité visuelle | Supports graphiques",

    // ✅ GALLERY AVEC TYPES
    gallery: [
  { type: "video", src: "/images/projets/la-debrouille/demo.MOV" }
],

    bottomGallery: [
      { type: "image", src: "/images/projets/la-debrouille/identite-la-d.webp" },
      { type: "image", src: "/images/projets/la-debrouille/banderole-la-d.webp" }
    ],

    bottomTitle:
      "Un identité portée par des valeurs d’entraide et de proximité.",

    sections: [
      {
        text1:
          "Felices Communication a accompagné [l’association La Débrouille], située à Chambéry, dans la [refonte de son logo] ainsi que dans [la création complète de son identité visuelle]. Cette nouvelle direction graphique a été pensée pour refléter les valeurs d’[entraide], de [confiance] et d’[engagement] portées par l’association.",
        text2:
          "En parallèle, nous avons développé une [identité visuelle globale], afin d’apporter une [cohérence forte à l’ensemble de sa communication]. Cette identité a ensuite été déclinée sur différents [supports graphiques] : flyers, brochure, banderole…",

        images: [
          { type: "image", src: "/images/projets/la-debrouille/carte-de-visite-la-D.webp" },
          { type: "image", src: "/images/projets/la-debrouille/flyer-la-D.webp" },
          { type: "image", src: "/images/projets/la-debrouille/flyer-la-d2.webp" }
        ]
      },
      {
        text1:
          "La refonte du logo avait pour objectif d’affirmer [une identité forte] en cohérence avec les valeurs de l’association. Tout en préservant la dimension humaine et accessible qui la caractérise. Le logo a ainsi été pensé comme [un symbole de proximité, de confiance et d’engagement collectif].",
        text2:
          "L’identité visuelle repose sur une palette de couleurs inspirée des différents [axes de l’association] : [la précarité], [l’environnement], [la sensibilisation] ainsi que [la mise en réseau et les projets collectifs]. Le beige, vert, rose saumon et blanc, associés à des choix typographiques affirmés, permettent de créer un univers pensé pour [créer du lien].",

        images: [
          { type: "image", src: "/images/projets/la-debrouille/collier-la-d.webp" },
          { type: "image", src: "/images/projets/la-debrouille/coque-la-d.webp" },
          { type: "image", src: "/images/projets/la-debrouille/sticker-la-d.webp" }
        ]
      }
    ]
  },

  {
    id: 2,
    title: "Grand Blanc",

    categories: ["Identité visuelle", "Supports graphiques"],

    slug: "grand-blanc",
    date: "2026-05-06",

    cover: "/images/projets/grand-blanc/grand-blanc.webp",

    // ✅ HERO INDÉPENDANT
    hero: {
      type: "image", // "image" ou "video"
      src: "/images/projets/grand-blanc/Logo-grand-blanc.webp"
    },

    intro:
      "Identité visuelle | Supports graphiques",

    // ✅ GALLERY AVEC TYPES
    gallery: [
  { type: "video", src: "/images/projets/grand-blanc/demo.mp4" }
],

    bottomGallery: [
      { type: "image", src: "/images/projets/grand-blanc/machine.webp" },
      { type: "image", src: "/images/projets/grand-blanc/chiffon.webp" },
      { type: "image", src: "/images/projets/grand-blanc/porte-cles.webp" }
    ],

    bottomTitle:
      "Une identité de marque pensée pour être déployée sur l’ensemble des supports de communication.",

    sections: [
      {
        text1:
          "Felices Communication a accompagné [Grand Blanc], [entreprise de nettoyage] située sur le bassin chambérien, dans la [création de son identité visuelle], de sa [stratégie de marque] ainsi que dans la [conception de ses supports graphiques].",
        text2:
          "L’objectif était de concevoir une identité distinctive, capable de se démarquer des autres entreprises de nettoyage, tout en reflétant l’ancrage local et la proximité avec ses clients. Cette démarche s’inscrit dans la volonté de créer [une identité à la fois épurée et intemporelle].",

        images: [
          { type: "image", src: "/images/projets/grand-blanc/Photo-logo.webp" },
          { type: "image", src: "/images/projets/grand-blanc/carte-visite-grand-blanc.webp" },
          { type: "image", src: "/images/projets/grand-blanc/depliant-grand-blanc.webp" }
        ]
      },
      {
        text1:
          "Le logo associe [modernité et héritage], notamment à travers l’intégration de deux montagnes emblématiques de la Savoie : la Dent du Chat et le Granier.",
        text2:
          "La direction artistique repose sur [une palette de couleurs évoquant la propreté et la confiance] — bleu clair, bleu foncé, noir et blanc. Les typographies sélectionnées renforcent cet équilibre entre [modernité et singularité].",

        images: [
          { type: "image", src: "/images/projets/grand-blanc/granier.webp" },
          { type: "image", src: "/images/projets/grand-blanc/camion.webp" },
          { type: "image", src: "/images/projets/grand-blanc/réseaux-sociaux.webp" }
        ]
      }
    ]
  }

]

export default projets