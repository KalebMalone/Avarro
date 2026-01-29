import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
        <Link
          to="/"
          className="text-3xl font-extrabold text-primary tracking-wide no-underline"
        >
          Avarro
        </Link>

        <div className="flex space-x-8 font-semibold text-gray-700 mt-2 md:mt-0">
          {["/", "/services", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Services", "About", "Contact"];
            return (
              <Link
                key={path}
                to={path}
                className="hover:text-primary transition border-b-2 border-transparent hover:border-primary py-1 no-underline"
              >
                {labels[i]}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
