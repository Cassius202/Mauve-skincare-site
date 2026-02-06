import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const productLinks = [
    { name: t("serum") || "Serum", id: "products" },
    { name: t("lotion") || "Lotion", id: "products" },
    { name: t("face-cream") || "Face Cream", id: "products" },
    { name: t("body-lotion") || "Body Lotion", id: "products" },
  ];

  const quickLinks = [
    { name: t("nav.about") || "About", id: "about" },
    { name: t("nav.products") || "Products", id: "products" },
    { name: t("nav.reviews") || "Reviews", id: "reviews" },
    { name: t("nav.contact") || "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubscribe = () => {
    toast.dismissAll();
    toast.success('Thanks for Subscribing!')
  }

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-18">
      {/* Main Footer Content */}
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-25 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-screen-xl mx-auto">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={assets.logo} 
                alt="Beneath Your Mask Logo" 
                className="w-10 h-10 object-contain invert brightness-5"
              />
              <h3 className="text-2xl font-bold text-blue-400 font-lora">Mauve {t('cosmetics')}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("footer-description") || "Experience the power of natural skincare products infused with premium ingredients. Transform your skin with our carefully crafted formulas."}
            </p>
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400 uppercase tracking-wide">
              {t("nav.products") || "Products"}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Menu Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400 uppercase tracking-wide">
              {t("quick-menu") || "Quick Menu"}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400 uppercase tracking-wide">
              {t("join-newsletter") || "Join Our Newsletter"}
            </h4>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t("your-email") || "Your Email"}
                className="w-full px-4 py-2.5 rounded-md bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-sm"
              />
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-md font-medium transition-all duration-300 text-sm"
              onClick={handleSubscribe}
              >
                {t("subscribe") || "Subscribe"}
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-25 py-6">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            
            {/* Copyright */}
            <p className="text-gray-400">
              Copyright @ <span className="text-blue-400 font-semibold">cassius.dev</span>
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" size={14} />
                <span className="text-xs">5519 Penn St, South Gate, CA 90280</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" size={14} />
                <a 
                  href="mailto:iybskincare@gmail.com" 
                  className="text-xs hover:text-blue-400 transition-colors"
                >
                  cassiusejekwu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-400" size={14} />
                <a 
                  href="tel:+13472991191" 
                  className="text-xs hover:text-blue-400 transition-colors"
                >
                  +1(347)299-1191
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;