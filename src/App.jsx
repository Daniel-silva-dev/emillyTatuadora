import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Tattos from "./sections/Tattos";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/tattos" element={<Tattos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;