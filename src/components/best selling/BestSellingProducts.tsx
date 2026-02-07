import { useTranslation } from "react-i18next";
import { bestSelling } from "../../assets/assets";
import { formatCurrency } from "../../utils/formatCurrency";
import { FaStar } from "react-icons/fa6";

const BestSellingProducts = () => {
  const { t, i18n } = useTranslation();

  // Type-safe language handling
  const currentLang = i18n.language;
  const lang =
    currentLang === "fr" || currentLang === "es" ? currentLang : "en";

  // Get products for current language
  const products = bestSelling[lang];

  // Calculate discount percentage
  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section
      id="products"
      className="min-h-screen w-full flex flex-col items-center bg-white pt-20 px-3 sm:px-10 md:px-16 lg:px-25"
    >
      <div className="w-full flex justify-center mb-3">
        <span className="p-2 px-4 bg-amber-100 rounded-full border border-amber-400">
          {t("best-seller-marker")} ✨
        </span>
      </div>
      <div className="title-container">
        <h2> {t("best sellers")} </h2>
        <h3>{t("best-sellers-subtitle")}</h3>
      </div>
      {/* main-content  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-240 mt-18 gap-2 md:gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[45%_50%] gap-2 grid-rows-1 w-full h-auto sm:h-80 bg-slate-100 rounded-xl overflow-hidden p-2.5 border border-transparent hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
          >
            {/* Image container - full width on mobile, left side on larger screens */}
            <div className="overflow-hidden relative w-full h-64 sm:h-full rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-full w-full"
              />
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                -{calculateDiscount(product.price, product.currentPrice)}%
              </div>
            </div>
            
            {/* Content container - stacks below image on mobile */}
            <div className="grid grid-rows-[auto_auto] sm:grid-rows-[45%_55%] gap-3 sm:gap-0 px-3 py-1">
              <div>
                <div className="name text-lg sm:text-lg mb-2 font-medium">
                  {product.name}
                </div>
                <span className="mt-2 text-gray-600 text-sm sm:text-base">
                  {product.description}
                </span>
              </div>

              {/* price and rating  */}
              <div className="flex flex-col h-full pb-2 sm:pb-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <p className="text-2xl sm:text-3xl font-semibold text-slate-900">
                    {formatCurrency(product.currentPrice)}
                  </p>
                  <span className="line-through text-red-400 text-lg sm:text-xl font-medium">
                    {formatCurrency(product.price)}
                  </span>
                </div>
                <span className="flex gap-2 mt-2 text-slate-700 items-center">
                  <FaStar className="text-amber-500" size={18} /> 
                  {product.rating} {t('rating') || 'rating'}
                </span>
                <button className="w-max my-1.5 px-4 py-2 hover:bg-blue-800 rounded-lg bg-blue-900 text-slate-50">
                  {t('buy-now')}
                </button>

                <span className="mt-auto text-slate-500 text-sm">
                  <span>
                    {product.orderCount} {t('verified-sales')}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;