import { navLinks } from "../../assets/assets"

const Navigation = () => {
  return (
    <menu className="flex gap-x-5 font-medium text-sm items-center">
      {navLinks.map((item) => {
        return <li key={item.id} className="group relative">
          <a href={`#${item.path}`} className="group-hover:text-blue-400" >
            {item.id}
          </a>
          <span className="bg-blue-400 absolute w-full h-1 right-0 top-[105%] rounded-2xl scale-0 transition-transform group-hover:scale-100 origin-left">
            
          </span>
        </li>
      })}
    </menu>
  )
}

export default Navigation