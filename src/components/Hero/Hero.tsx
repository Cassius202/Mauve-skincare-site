import { assets } from "../../assets/assets";
// import LazyImage from "../LazyImage";
import LazyImage from "../LazyImage";
import BackgroundImg from "./BackgroundImg";
import { useTranslation } from "react-i18next";

const Hero = () => {

  const {t} = useTranslation();

  return (
    <section
      id="home"
      className="w-full h-screen overflow-hidden relative isolate md:grid grid-cols-[55%_55%] lg:flex gap-x-5"
    >
      <BackgroundImg />

        <LazyImage alt='for small backgrounds' src={assets.productImage} className="absolute h-screen w-screen opacity-20 sm:hidden blur-xs -z-10" />
      
      <div className="container max-md:mx-auto w-full h-full flex md:items-start pt-15 items-center justify-center pb-18">
     <div className="flex flex-col items-center overflow-y-hidden lg:h-full md:items-start max-md:w-full px-4">
          <h1 className="text-center md:text-left flex flex-col font-bold tracking-wide text-6xl md:text-7xl font-lora text-slate-900 hover:text-transparent max-md:leading-20 bg-linear-to-br from-blue-500 to-slate-700 bg-clip-text transition-colors">
            <span>{t('heroTitleProtect')}.</span>
            <span>{t('heroTitleRepair')}.</span>
            <span>{t('heroTitleRevitalize')}.</span>
          </h1>
          <h3 className="max-w-lg md:text-start mt-6">
            {t('heroSubtitle')}
          </h3>
          
          <button className="bg-blue-500 w-max p-2 px-6 rounded-lg text-white mt-6 md:text-lg hover:bg-blue-600 transition-colors">
            {t('shopNow')}
          </button>
          <div className="mt-4 rounded-full p-2 pr-4 flex gap-2 items-center bg-blue-400/10 mt-14 lg:mt-4 border-blue-400 border max-sm:hidden">
            <div className="h-7 overflow-hidden">
              <LazyImage src={assets.salesNumImage} className="h-7" alt='products' />
            </div>
            <span className="text-lg text-gray-700 font-medium">
              1000+{" "}<span>{t('sales')}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mask lg:hidden max-md:hidden overflow-hidden">
        <LazyImage src={assets.productImage} className='w-full mt-15 scale-110 overflow-hidden max-sm:hidden lg:hidden h-full sticky inset-0' alt="product" />
      </div>
    </section>
  );
};

export default Hero;