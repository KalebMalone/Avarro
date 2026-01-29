import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#1a4332] text-white pt-20 pb-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-bold mb-4 italic">AVARRO</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Redefining local lawn maintenance through precision, reliability, and a focus on the details that matter.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-[#94a84a]">Service Areas</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>📍 Redmond, OR</li>
                        <li>📍 Bend, OR</li>
                        <li>📍 Sunriver, OR</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-[#94a84a]">Quick Links</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>
                            <Link to="/services" className="hover:text-white transition no-underline">Our Services</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition no-underline">The Avarro Story</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition no-underline">Apply for 2026 Season</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-[#94a84a]">Get in Touch</h4>
                    <p className="text-gray-400 text-sm mb-2">Questions? Text us anytime.</p>
                    <p className="text-xl font-bold">(555) 123-4567</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                <p>© 2026 Avarro Landscaping. All Rights Reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <span>Licensed & Insured</span>
                    <span>Redmond, Oregon</span>
                </div>
            </div>
        </footer>
    );
}