import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_xxoqx6m', 'template_vzcvfnc', form.current, 'D0V8ORrzpKUX8B70_')
            .then((result) => {
                setIsSubmitted(true);
                setLoading(false);
            }, (error) => {
                alert("Something went wrong. Please try again or call us!");
                setLoading(false);
            });
    };

    if (isSubmitted) {
        return (
            <div className="pt-40 pb-24 px-6 text-center bg-white min-h-[80vh] flex flex-col items-center justify-center">
                <div className="bg-[#94a84a]/10 p-6 rounded-full text-5xl mb-6">✅</div>
                <h1 className="text-4xl font-extrabold text-[#1a4332] mb-4">Application Sent!</h1>
                <p className="text-gray-600 max-w-md mx-auto mb-10 text-lg">
                    Thanks for reaching out! I'll personally review your property and get back to you with a quote within 24 hours.
                </p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#1a4332] text-white px-8 py-3 rounded-full font-bold transition-all hover:bg-[#94a84a]"
                >
                    Back to Form
                </button>
            </div>
        );
    }
    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-[#1a4332] text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get a Free Estimate</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto px-6">
                    Ready to lock in your 2026 lawn care? Fill out the application below.
                </p>
            </section>
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a4332] mb-4">Contact Avarro</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We're currently booking our 2026 weekly routes. If you have questions about custom debris removal or specific property needs, reach out directly.
                            </p>
                        </div>
                        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-6 hover:shadow-md transition-all">
                            <div className="bg-[#94a84a] text-white p-4 rounded-xl text-2xl group-hover:scale-110 transition-transform">
                                📞
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold">Call or Text</h4>
                                <p className="text-xl font-bold text-[#1a4332]">(555) 123-4444</p>
                            </div>
                        </div>
                        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-6 hover:shadow-md transition-all">
                            <div className="bg-[#1a4332] text-white p-4 rounded-xl text-2xl group-hover:scale-110 transition-transform">
                                ✉️
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold">Email Us</h4>
                                <p className="text-xl font-bold text-[#1a4332]">avarolandscape@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-[#94a84a]/10 p-8 rounded-2xl border-l-4 border-[#94a84a]">
                            <h4 className="font-bold text-[#1a4332] mb-2 flex items-center">
                                <span className="mr-2">🚀</span> 2026 Route Notice
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our weekly routes are filled on a first-come, first-served basis. Apply early to guarantee your preferred service day.
                            </p>
                        </div>
                    </div>
                    {/* The Form Side */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input name="user_name" required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#94a84a] transition-all bg-gray-50 focus:bg-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                                    <input name="user_phone" required type="tel" placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#94a84a] transition-all bg-gray-50 focus:bg-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Address</label>
                                <input name="user_address" required type="text" placeholder="123 Lawn St, City" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#94a84a] transition-all bg-gray-50 focus:bg-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
                                <select name="service_type" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-gray-50 focus:bg-white cursor-pointer">
                                    <option>Weekly Mowing & Edging</option>
                                    <option>Debris Removal</option>
                                    <option>Weed Control</option>
                                    <option>Custom Request</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                                <textarea name="message" rows="4" placeholder="Any pets, locked gates, or specific needs?" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#94a84a] transition-all bg-gray-50 focus:bg-white"></textarea>
                            </div>
                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1a4332] hover:bg-[#94a84a] text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Submit Application"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}