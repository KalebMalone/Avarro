export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="text-2xl font-black text-primary tracking-tighter no-underline uppercase">
                    Avarro<span className="text-secondary">.</span>
                </Link>

                <div className="hidden md:flex space-x-10 font-medium text-gray-600">
                    {["Home", "Services", "About", "Contact"].map((label) => (
                        <Link
                            key={label}
                            to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                            className="hover:text-secondary transition-colors duration-300 no-underline"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
                
                {/* Mobile Button - Just a placeholder for visual spacing */}
                <div className="md:hidden text-primary font-bold">Menu</div>
            </div>
        </nav>
    );
}