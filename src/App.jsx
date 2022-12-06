import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Footer />
    </div>
  );
}

export default App;
