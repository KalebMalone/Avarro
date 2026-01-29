import { useState } from "react";

export default function Contact() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-32 pb-12 bg-[#1a4332] text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get a Free Estimate</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto px-6">
                    Ready to lock in your 2026 lawn care? Fill out the form below and we'll reach out within 24 hours.
                </p>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Left Side: Contact Info & Trust */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a4332] mb-6">Contact Avarro</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Have questions about a custom project or debris removal? 
                                Give us a shout directly or use the form.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-[#94a84a]/10 p-3 rounded-lg mr-4 text-2xl">📞</div>
                                <div>
                                    <h4 className="font-bold text-[#1a4332]">Phone</h4>
                                    <p className="text-gray-600">(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#94a84a]/10 p-3 rounded-lg mr-4 text-2xl">📧</div>
                                <div>
                                    <h4 className="font-bold text-[#1a4332]">Email</h4>
                                    <p className="text-gray-600">contact@avarro.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Apply Early Box */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-[#1a4332] mb-2">2026 Season Note:</h4>
                            <p className="text-gray-600 text-sm">
                                We are currently prioritizing weekly route applications. 
                                Secure your spot now to ensure consistent service starting this spring.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#94a84a] outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#94a84a] outline-none transition" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Address</label>
                                <input type="text" placeholder="123 Lawn Street, City, State" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#94a84a] outline-none transition" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Service Needed</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#94a84a] outline-none transition appearance-none bg-white">
                                    <option>Weekly Mowing & Edging</option>
                                    <option>Debris Removal</option>
                                    <option>One-Time Cleanup</option>
                                    <option>Custom Project / Weed Control</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                                <textarea rows="4" placeholder="Tell us about your yard (pets, locked gates, specific weeds, etc.)" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#94a84a] outline-none transition"></textarea>
                            </div>

                            <button className="w-full bg-[#1a4332] hover:bg-[#94a84a] text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                                Send Application
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}