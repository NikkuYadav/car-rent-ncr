import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Top from './components/Top';
import Loader from "./components/Loader";
import Bottom from "./components/Bottom";

const App = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Show loader
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 sec
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <Loader />}
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Bottom />
    </div>
  )
}

export default App