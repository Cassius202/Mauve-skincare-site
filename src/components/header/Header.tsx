import { assets } from "../../assets/assets";
import LanguageSelector from "./LanguageSelector";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="fixed z-40 w-screen justify-between h-16 px-4 sm:px-6 md:px-8 lg:px-14 flex items-center bg-stone-50/70 backdrop-blur-lg lg:bg-[#fefefe]/70">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="h-11 flex p-2 aspect-square justify-center max-sm:h-10 items-center bg-blue-500 rounded-full">
        <img src={assets.logo} alt="logo" className="h-full object-contain invert brightness-10" />
      </div>
      <span className="font-bold ml-2 text-2xl text-blue-500 max-sm:hidden">
        Mauve
      </span>
      </div>

      {/* Center Navigation */}
      <nav className="hidden md:flex items-center">
        <Navigation />
      </nav>

      <div>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Header;