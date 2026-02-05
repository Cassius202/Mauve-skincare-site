import { assets } from "../../assets/assets";
// import LazyImage from "../LazyImage";
import LazyImage from "../LazyImage";
import BackgroundImg from "./BackgroundImg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen overflow-x-hidden relative isolate md:grid grid-cols-[45%_55%] gap-x-5"
    >
      <BackgroundImg />

        <LazyImage alt='for small backgrounds' src={assets.productImage} className="absolute h-screen w-screen opacity-20 sm:hidden  -z-10" />
      
      <div className="container max-md:mx-auto w-full h-full flex md:items-start pt-24 items-center justify-center pb-18">
     <div className="flex flex-col items-center md:items-start max-md:w-full px-4">
          <h1 className="text-center md:text-left flex flex-col font-bold tracking-wide text-6xl md:text-7xl xl:text-9xl font-lora max-md:leading-20">
            <span>Protect.</span>
            <span>Repair.</span>
            <span>Revitalize.</span>
          </h1>
          
          <button className="bg-blue-500 w-max p-2 px-6 rounded-lg text-white mt-6 md:text-lg hover:bg-blue-600 transition-colors">
            shop now
          </button>
        </div>
      </div>

      <div className="mask lg:hidden overflow-hidden">
        <LazyImage src={assets.productImage} className='w-full mt-15 scale-110 overflow-hidden max-sm:hidden lg:hidden h-full sticky inset-0' alt="product" />
      </div>
    </section>
  );
};

export default Hero;