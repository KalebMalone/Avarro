import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-[100] flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
                <Link to="/" className="text-xl sm:text-2xl font-extrabold text-[#1a4332] no-underline">
                    Avarro
                </Link>

                {/* space-x-2 for small phones, space-x-8 for computers */}
                <div className="flex space-x-3 sm:space-x-8 font-semibold text-gray-700 text-sm sm:text-base">
                    <Link to="/services" className="no-underline hover:text-[#1a4332]">Services</Link>
                    <Link to="/about" className="no-underline hover:text-[#1a4332]">About</Link>
                    <Link to="/contact" className="no-underline hover:text-[#1a4332]">Contact</Link>
                </div>
            </div>
        </nav>
    );
}