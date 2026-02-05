import { useTranslation } from "react-i18next";
import Header from "./components/header/Header"
import Hero from "./components/Hero/Hero"

const App = () => {
  const {t} = useTranslation();

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col">
      <Header />
      <Hero />
    </div>
  )
}

export default App