import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navbar />

            {/* pt-36: Enough space for the stacked mobile navbar 
            md:pt-20: Matches the desktop navbar height (h-20)
            */}
            <main className="pt-36 md:pt-20 min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}