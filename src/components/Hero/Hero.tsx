import { assets } from "../../assets/assets";
import LazyImage from "../LazyImage";
import BackgroundImg from "./BackgroundImg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="w-full min-h-screen overflow-x-hidden overflow-y-auto relative isolate md:grid md:grid-cols-[55%_45%] lg:flex gap-x-5"
    >
      <BackgroundImg />

      <LazyImage 
        alt='for small backgrounds' 
        src={assets.productImage} 
        className="absolute h-screen w-screen opacity-20 sm:hidden blur-xs -z-10 object-cover" 
      />
      
      <div 
        id='hero-text' 
        className="container max-md:mx-auto w-full min-h-screen h-full flex md:items-start pt-20 md:pt-24 items-center justify-center pb-20 md:pb-24 overflow-x-hidden"
      >
        <div className="flex flex-col items-center lg:h-full lg:pt-8 md:items-start max-md:w-full px-4 sm:px-6 md:px-8 max-w-full">
          <h1 className="text-center md:text-left flex flex-col font-bold tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lora text-slate-900 hover:text-transparent leading-tight md:leading-tight lg:leading-tight bg-linear-to-br from-blue-500 to-slate-700 bg-clip-text transition-colors wrap-break-word max-w-full">
            <span className="wrap-break-word">{t('heroTitleProtect')}.</span>
            <span className="wrap-break-word">{t('heroTitleRepair')}.</span>
            <span className="wrap-break-word">{t('heroTitleRevitalize')}.</span>
          </h1>
          
          <h3 className="max-w-lg md:text-start mt-6 text-base sm:text-lg wrap-break-word">
            {t('heroSubtitle')}
          </h3>
          
          <button className="bg-blue-500 w-max p-2 px-6 rounded-lg text-white mt-6 md:text-lg hover:bg-blue-600 transition-all hover:scale-105 duration-300 whitespace-nowrap">
            {t('shopNow')}
          </button>
        </div>
      </div>

      <div className="mask lg:hidden max-md:hidden overflow-hidden w-full">
        <LazyImage 
          src={assets.productImage} 
          className='w-full h-full mt-20 md:mt-24 scale-110 object-cover max-sm:hidden lg:hidden' 
          alt="product" 
        />
      </div>
    </section>
  );
};

export default Hero;