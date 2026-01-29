import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-xl z-[100] flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <Link
                    to="/"
                    className="text-3xl font-extrabold text-[#1a4332] tracking-wide no-underline"
                >
                    Avarro
                </Link>

                <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
                    {["/", "/services", "/about", "/contact"].map((path, i) => {
                        const labels = ["Home", "Services", "About", "Contact"];
                        return (
                            <Link
                                key={path}
                                to={path}
                                className="hover:text-[#1a4332] transition border-b-2 border-transparent hover:border-[#1a4332] py-1 no-underline"
                            >
                                {labels[i]}
                            </Link>
                        );
                    })}
                </div>
                
                {/* Mobile placeholder - we can add a toggle later */}
                <div className="md:hidden text-[#1a4332] font-bold">Menu</div>
            </div>
        </nav>
    );
}