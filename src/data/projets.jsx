const projets = [
  {
    id: 1,
    title: "Grand Blanc",

    categories: ["Identité visuelle", "Supports graphiques"],

    slug: "grand-blanc",
    date: "2026-03-16",

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