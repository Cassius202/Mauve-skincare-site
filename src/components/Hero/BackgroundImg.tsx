import { assets } from "../../assets/assets"

const BackgroundImg = () => {
  return (
    <div className="absolute -z-10 overflow-hidden inset-0 max-lg:hidden">
      <div className="h-screen w-screen overflow-hidden">
        <img 
          src={assets.HeroImg} 
          alt="Hero" 
          className="h-full w-full object-cover object-[100%_50%]" 
        />
      </div>
    </div>
  )
}

export default BackgroundImg