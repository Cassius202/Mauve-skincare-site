import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to React and React-i18next",
      heroTitleProtect: "Protect",
      heroTitleRepair: "Repair",
      heroTitleRevitalize: "Revitalize",
      heroSubtitle: "Experience the power of avocado-infused skincare",
      shopNow: "Shop Now",
      nav: {
        about: 'About',
        products: 'Products',
        reviews: 'Reviews',
        contact: 'Contact'
      },
      'about-title': 'Discover Mauve Cosmetics',
      'about-subtitle': "Where nature’s ripest fruits meet radiant, healthy skin",
      'our-story-title': "Born from Nature, Crafted for You",
      'our-story-1': "At Mauve Cosmetics, we believe true beauty begins with what nature generously provides. Inspired by the lush, nutrient-rich fruits that have nourished skin for generations, we created a line of clean, effective skincare specially for women who want to feel confident and radiant — naturally.",
      'our-story-2': "Our hero? The creamy, powerful avocado — packed with vitamins E & C, healthy fats, antioxidants, and biotin. Combined with other fruit treasures like mango, papaya, pomegranate, and berries, every formula delivers deep hydration, soothing care, improved elasticity, and a healthy glow without harsh chemicals.",
      'our-story-3': "We’re proudly clean, cruelty-free, vegan-friendly, and made with thoughtful, sustainably sourced ingredients — because glowing skin should never come at the cost of your health or the planet.",
      'why-fruit-title': "Why Fruit-Powered Skincare?",
      'benefit-deep-hydration': "Deep, Lasting Hydration",
      'benefit-hydration-desc': "Avocado’s natural oils and oleic acid lock in moisture and repair the skin barrier — goodbye dryness, hello plump, supple skin.",
      'benefit-glow-elasticity': "Glow + Elasticity",
      'benefit-elasticity-desc': "Rich in antioxidants and healthy fats — proven to improve firmness and reduce signs of fatigue for youthful, bouncy skin.",
      'benefit-soothe-protect': "Soothe & Protect",
      'benefit-soothe-desc': "Anti-inflammatory fruit extracts calm irritation, redness, and sensitivity — perfect for everyday comfort and glow.",
      'our-promise-title': "Our Promise to You",
      'our-promise': "Mauve Cosmetics is more than skincare — it’s a celebration of natural beauty, self-care, and the simple joy of feeling good in your skin. We craft every product with love, integrity, and respect for nature so you can glow confidently, every single day.",
      'mauve-signature': "Glow naturally. Shine boldly. — Mauve Cosmetics",
      'best-seller-marker': 'Top Picks',
      'best sellers': "Best Sellers",
      'best-sellers-subtitle': 'Products They Keep Coming Back For',
      'buy-now': "Buy Now",
      'verified-sales': 'verified sales',
      'sales': 'sales',
      'rating': "rating",
      // Footer translations
      'footer-description': "Experience the power of natural skincare products infused with premium ingredients. Transform your skin with our carefully crafted formulas.",
      'quick-menu': "Quick Menu",
      'join-newsletter': "Join Our Newsletter",
      'your-email': "Your Email",
      'subscribe': "Subscribe",
      'serum': "Serum",
      'lotion': "Lotion",
      'face-cream': "Face Cream",
      'body-lotion': "Body Lotion",
      'cosmetics': 'Cosmetics'
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue à React et React-i18next",
      heroTitleProtect: "Protéger",
      heroTitleRepair: "Réparer",
      heroTitleRevitalize: "Revitaliser",
      heroSubtitle: "Découvrez la puissance des soins à l'avocat",
      shopNow: "Acheter Maintenant",
      nav: {
        about: 'À Propos',
        products: 'Produits',
        reviews: 'Avis',
        contact: 'Contact'
      },
      'about-title': 'Découvrez Mauve Cosmetics',
      'about-subtitle': "Là où les fruits les plus mûrs de la nature rencontrent une peau rayonnante et saine",
      'our-story-title': "Née de la Nature, Créée pour Vous",
      'our-story-1': "Chez Mauve Cosmetics, nous croyons que la vraie beauté commence par ce que la nature offre généreusement. Inspirés par les fruits luxuriants et riches en nutriments qui nourrissent la peau depuis des générations, nous avons créé une gamme de soins propres et efficaces spécialement pour les femmes qui veulent se sentir confiantes et rayonnantes — naturellement.",
      'our-story-2': "Notre héros ? L'avocat crémeux et puissant — riche en vitamines E et C, acides gras sains, antioxydants et biotine. Associé à d'autres trésors fruités comme la mangue, la papaye, la grenade et les baies, chaque formule offre une hydratation profonde, un soin apaisant, une élasticité améliorée et un éclat sain sans produits chimiques agressifs.",
      'our-story-3': "Nous sommes fiers d'être clean, cruelty-free, vegan-friendly et fabriqués avec des ingrédients réfléchis et sourcés de manière durable — car une peau éclatante ne doit jamais se faire au détriment de votre santé ou de la planète.",
      'why-fruit-title': "Pourquoi des Soins à Base de Fruits ?",
      'benefit-deep-hydration': "Hydratation Profonde et Durable",
      'benefit-hydration-desc': "Les huiles naturelles et l'acide oléique de l'avocat retiennent l'humidité et réparent la barrière cutanée — adieu la sécheresse, bonjour une peau repulpée et souple.",
      'benefit-glow-elasticity': "Éclat + Élasticité",
      'benefit-elasticity-desc': "Riche en antioxydants et acides gras sains — prouvé pour améliorer la fermeté et réduire les signes de fatigue pour une peau jeune et rebondie.",
      'benefit-soothe-protect': "Apaiser & Protéger",
      'benefit-soothe-desc': "Les extraits de fruits anti-inflammatoires calment les irritations, rougeurs et sensibilités — parfait pour un confort quotidien et un éclat naturel.",
      'our-promise-title': "Notre Promesse envers Vous",
      'our-promise': "Mauve Cosmetics est plus qu'une marque de soins — c'est une célébration de la beauté naturelle, du self-care et de la simple joie de se sentir bien dans sa peau. Nous créons chaque produit avec amour, intégrité et respect de la nature pour que vous puissiez rayonner en toute confiance, chaque jour.",
      'mauve-signature': "Rayonnez naturellement. Brillez avec audace. — Mauve Cosmetics",
      'best-seller-marker': 'Choix Populaires',
      'best sellers': "Meilleures Ventes",
      'best-sellers-subtitle': 'Produits Que Nos Clients Adorent',
      'buy-now': "Acheter Maintenant",
      'verified-sales': 'ventes vérifiées',
      'sales': 'ventes',
      'rating': "note",
      // Footer translations
      'footer-description': "Découvrez la puissance des produits de soin naturels infusés d'ingrédients premium. Transformez votre peau avec nos formules soigneusement élaborées.",
      'quick-menu': "Menu Rapide",
      'join-newsletter': "Rejoignez Notre Newsletter",
      'your-email': "Votre Email",
      'subscribe': "S'abonner",
      'serum': "Sérum",
      'lotion': "Lotion",
      'face-cream': "Crème Visage",
      'body-lotion': "Lotion Corporelle",
      'cosmetics': 'Cosmétiques'
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a React y React-i18next",
      heroTitleProtect: "Proteger",
      heroTitleRepair: "Reparar",
      heroTitleRevitalize: "Revitalizar",
      heroSubtitle: "Experimenta el poder de los cuidados con aguacate",
      shopNow: "Comprar Ahora",
      nav: {
        about: 'Sobre Nosotros',
        products: 'Productos',
        reviews: 'Reseñas',
        contact: 'Contacto'
      },
      'about-title': 'Descubre Mauve Cosmetics',
      'about-subtitle': "Donde los frutos más maduros de la naturaleza se encuentran con una piel radiante y saludable",
      'our-story-title': "Nacida de la Naturaleza, Creada para Ti",
      'our-story-1': "En Mauve Cosmetics creemos que la verdadera belleza comienza con lo que la naturaleza ofrece generosamente. Inspirados por las frutas exuberantes y ricas en nutrientes que han nutrido la piel durante generaciones, creamos una línea de cuidado limpio y efectivo especialmente para mujeres que desean sentirse confiadas y radiantes — de forma natural.",
      'our-story-2': "Nuestra estrella: el cremoso y poderoso aguacate — cargado de vitaminas E y C, grasas saludables, antioxidantes y biotina. Combinado con otros tesoros frutales como mango, papaya, granada y bayas, cada fórmula brinda hidratación profunda, cuidado calmante, elasticidad mejorada y un brillo saludable sin químicos agresivos.",
      'our-story-3': "Estamos orgullosos de ser clean, cruelty-free, aptos para veganos y elaborados con ingredientes pensados y obtenidos de forma sostenible — porque una piel radiante nunca debe costar tu salud ni la del planeta.",
      'why-fruit-title': "¿Por Qué el Cuidado con Frutas?",
      'benefit-deep-hydration': "Hidratación Profunda y Duradera",
      'benefit-hydration-desc': "Los aceites naturales y el ácido oleico del aguacate retienen la humedad y reparan la barrera cutánea — adiós a la sequedad, hola a una piel rellena y suave.",
      'benefit-glow-elasticity': "Brillo + Elasticidad",
      'benefit-elasticity-desc': "Rico en antioxidantes y grasas saludables — probado para mejorar la firmeza y reducir signos de fatiga, logrando una piel joven y elástica.",
      'benefit-soothe-protect': "Calmar y Proteger",
      'benefit-soothe-desc': "Extractos de frutas antiinflamatorios calman irritaciones, enrojecimiento y sensibilidad — ideal para confort diario y un brillo natural.",
      'our-promise-title': "Nuestra Promesa para Ti",
      'our-promise': "Mauve Cosmetics es más que cuidado de la piel — es una celebración de la belleza natural, el autocuidado y la simple alegría de sentirse bien en tu piel. Creamos cada producto con amor, integridad y respeto por la naturaleza para que puedas brillar con confianza todos los días.",
      'mauve-signature': "Brilla naturalmente. Resplandece con audacia. — Mauve Cosmetics",
      'best-seller-marker': 'Favoritos',
      'best sellers': "Más Vendidos",
      'best-sellers-subtitle': 'Productos Que Nuestros Clientes Aman',
      'buy-now': "Comprar Ahora",
      'verified-sales': 'ventas verificadas',
      'sales': 'ventas',
      'rating': "puntuación",
      // Footer translations
      'footer-description': "Experimenta el poder de los productos de cuidado natural infundidos con ingredientes premium. Transforma tu piel con nuestras fórmulas cuidadosamente elaboradas.",
      'quick-menu': "Menú Rápido",
      'join-newsletter': "Únete a Nuestro Boletín",
      'your-email': "Tu Correo",
      'subscribe': "Suscribirse",
      'serum': "Sérum",
      'lotion': "Loción",
      'face-cream': "Crema Facial",
      'body-lotion': "Loción Corporal",
      'cosmetics': 'Cosméticos'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;