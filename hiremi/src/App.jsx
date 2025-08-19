import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

<<<<<<< HEAD

import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Careers from './component/Careers'
import Footer from './component/Footer'
=======
>>>>>>> kk
function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Home />
      <Careers />
      <Footer />
      
      
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
>>>>>>> kk
    </>
  );
}

export default App;
