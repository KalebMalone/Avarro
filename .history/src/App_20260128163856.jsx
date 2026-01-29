import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
That’s exactly what the ScrollToTop component is designed to fix. In React, because the page doesn't actually "refresh" when you click a link, the browser remembers your scroll position from the last page.

By adding the logic below, you’re telling React: "Every time the URL changes, snap the view back to the top."

1. The Scroll Reset Component
Create this file at src/components/ScrollToTop.jsx.

JavaScript

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This line forces the browser to the top-left (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the path changes

  return null;
}
2. Put it in your App.jsx
You have to place this component inside your <Router> but above your <Routes>. This allows it to "listen" to the navigation and act before the new page renders.

JavaScript

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50 gap-0">
                <Navbar />
                <main className="flex-grow pt-32 md:pt-20">
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