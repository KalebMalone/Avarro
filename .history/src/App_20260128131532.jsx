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
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                
                {/* Use pt-24 to ensure it's lower than the 20 height navbar */}
                <main className="flex-grow pt-24">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}