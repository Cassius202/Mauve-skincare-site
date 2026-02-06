import About from "./components/about/About"
import BestSellingProducts from "./components/best selling/BestSellingProducts"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/Hero/Hero"
import Numbers from "./components/numbers/Numbers"

const App = () => {

  return (
    <div className="w-screen max-w-screen overflow-x-hidden flex flex-col">
      <Header />
      <Hero />
      {/* <Numbers /> */}
      <About />
      <BestSellingProducts />
      
      <Footer />
    </div>
  )
}

export default App