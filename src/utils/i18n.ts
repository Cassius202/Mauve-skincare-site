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
      'about-title': 'About Us',
      'about-subtitle': "Where nature's palette meets modern skincare",
      'best-seller-marker': 'Top Picks',
      'best sellers': "Best Sellers",
      'best-sellers-subtitle': 'Products They Keep Coming Back For',
      'buy-now': "Buy Now",
      'verified-sales': 'verified sales',
      'sales': 'sales',
      
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
      'about-title': 'À Propos de Nous',
      'about-subtitle': "Où la palette de la nature rencontre les soins modernes",
      'best-seller-marker': 'Choix Populaires',
      'best sellers': "Meilleures Ventes",
      'best-sellers-subtitle': 'Produits Que Nos Clients Adorent',
      'buy-now': "Acheter Maintenant",
      'verified-sales': 'ventes vérifiées',
      
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
      'about-title': 'Sobre Nosotros',
      'about-subtitle': "Donde la paleta de la naturaleza se encuentra con el cuidado moderno",
      'best-seller-marker': 'Favoritos',
      'best sellers': "Más Vendidos",
      'best-sellers-subtitle': 'Productos Que Nuestros Clientes Aman',
      'buy-now': "Comprar Ahora",
      'verified-sales': 'ventas verificadas',
      
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