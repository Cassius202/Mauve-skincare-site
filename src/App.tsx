import { Toaster } from "react-hot-toast";
import About from "./components/about/About";
import BestSellingProducts from "./components/best selling/BestSellingProducts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import SideBar from "./components/sidebar/SideBar";
// import Numbers from "./components/numbers/Numbers"

const App = () => {
  return (
    <div className="w-screen max-w-screen overflow-x-hidden flex flex-col">
      <SideBar />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#3b82f6", // blue-500
              secondary: "#ffffff", // white
            },
            // style: {
            //   border: "1px solid gold",
            // },
          },
        }}
      />
      <Header />
      <Hero />
      {/* <Numbers /> */}
      <About />
      <BestSellingProducts />

      <Footer />
    </div>
  );
};

export default App;
