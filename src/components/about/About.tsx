import { useTranslation } from "react-i18next";
import LazyImage from "../LazyImage"; // assuming you have this component
import { assets } from "../../assets/assets";
// import { assets } from "../../assets/assets"; // if you want to use local images

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-20 pb-16 md:pb-24 px-4 sm:px-10 md:px-16 lg:px-25 bg-gray-50">
      <div className="">
        {/* Hero / Title Block */}
        <div className="title-container mb-15">
          <h2 className="white-space">
            {t("about-title") || "Discover Mauve Cosmetics"}
          </h2>
          <h3 className="">
            {t("about-subtitle") ||
              "Where nature’s ripest fruits meet radiant, healthy skin."}
          </h3>
        </div>

        {/* Our Story / Introduction */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              {t("our-story-title") || "Born from Nature, Crafted for You"}
            </h3>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                {t("our-story-1") ||
                  "At Mauve Cosmetics, we believe true beauty begins with what nature generously provides. Inspired by the lush, nutrient-rich fruits that have nourished skin for generations, we created a line of clean, effective skincare specially for women who want to feel confident and radiant — naturally."}
              </p>
              <p>
                {t("our-story-2") ||
                  "Our hero? The creamy, powerful avocado — packed with vitamins E & C, healthy fats, antioxidants, and biotin. Combined with other fruit treasures like mango, papaya, pomegranate, and berries, every formula delivers deep hydration, soothing care, improved elasticity, and a healthy glow without harsh chemicals."}
              </p>
              <p>
                {t("our-story-3") ||
                  "We’re proudly clean, cruelty-free, vegan-friendly, and made with thoughtful, sustainably sourced ingredients — because glowing skin should never come at the cost of your health or the planet."}
              </p>
            </div>
          </div>

          {/* Visual – you can replace with real product/fruit image */}
          <div className="order-1 md:order-2 flex flex-col gap-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-md:hidden xl:hidden">
              <LazyImage
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Fresh avocado and tropical fruits for natural skincare"
              className="w-full h-auto object-cover aspect-[4/5] md:aspect-square"
            />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <LazyImage
              src={assets.aboutImg}
              alt="Fresh avocado and tropical fruits for natural skincare"
              className="w-full h-auto object-cover aspect-[6/5] md:aspect-square"
            />
            </div>
            
           
          </div>
        </div>

        {/* Why Fruit-Powered? / Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
            {t("why-fruit-title") || "Why Fruit-Powered Skincare?"}
          </h3>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

            <div className="text-center bg-green-200/80 px-3 py-6 rounded-lg">
              <div className="text-5xl mb-4">🥑</div>
              <h4 className="text-xl font-semibold mb-3">
                {t("benefit-deep-hydration") || "Deep, Lasting Hydration"}
              </h4>
              <p className="text-gray-600">
                {t("benefit-hydration-desc") ||
                  "Avocado’s natural oils and oleic acid lock in moisture and repair the skin barrier — goodbye dryness, hello plump, supple skin."}
              </p>
            </div>

            <div className="text-center bg-amber-100 px-3 py-6 rounded-lg">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-semibold mb-3">
                {t("benefit-glow-elasticity") || "Glow + Elasticity"}
              </h4>
              <p className="text-gray-600">
                {t("benefit-elasticity-desc") ||
                  "Rich in antioxidants and healthy fats — proven to improve firmness and reduce signs of fatigue for youthful, bouncy skin."}
              </p>
            </div>

            <div className="text-center bg-lime-200/80 px-3 py-6 rounded-lg">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-xl font-semibold mb-3">
                {t("benefit-soothe-protect") || "Soothe & Protect"}
              </h4>
              <p className="text-gray-600">
                {t("benefit-soothe-desc") ||
                  "Anti-inflammatory fruit extracts calm irritation, redness, and sensitivity — perfect for everyday comfort and glow."}
              </p>
            </div>
          </div>
        </div>

        {/* Closing / Mission */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            {t("our-promise-title") || "Our Promise to You"}
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            {t("our-promise") ||
              "Mauve Cosmetics is more than skincare — it’s a celebration of natural beauty, self-care, and the simple joy of feeling good in your skin. We craft every product with love, integrity, and respect for nature so you can glow confidently, every single day."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;