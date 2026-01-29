import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./components/Services";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <div className="fixed top-[64px] left-0 w-full z-[999] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
                <div className="animate-marquee-custom">
                    {[1, 2, 3].map((i) => (
                        <span key={i} className="text-sm md:text-base font-bold px-4 tracking-wider whitespace-nowrap">
                            🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL —
                        </span>
                    ))}
                </div>
            </div>

            <Routes
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* --- PERMANENT BOTTOM SECTION --- */}
            <Footer />
        </Router>
    );
}

export default App;