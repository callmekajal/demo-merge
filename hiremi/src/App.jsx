import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Careers from "./component/Careers";
import Footer from "./component/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Navbar />

      

      <Routes>
        <Route path="/" element={<><Home /><Careers /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />

    </>
  );
}

export default App;
