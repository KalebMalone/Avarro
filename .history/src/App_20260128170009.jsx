import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // Import here
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add here */}
      <Navbar />
      
      {/* GLOBAL FIXED INFINITE BANNER */}
      <div className="fixed top-[64px] left-0 w-full z-[999] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
        <div className="animate-marquee-custom">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-sm md:text-base font-bold px-4 tracking-wider">
              🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
            </span>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;