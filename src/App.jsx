import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Navbar/Hero";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <div className=" min-w-md mx-auto ">
      <div className=" min-h-[524px] bg-hero-pattern bg-no-repeat bg-center px-4 py-12 rounded-bl-[90px]  ">
        <Nav />
        <Hero />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
