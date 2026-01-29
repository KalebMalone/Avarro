import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm('service_xxoqx6m', 'template_vzcvfnc', form.current, 'D0V8ORrzpKUX8B70_')
            .then(() => {
                alert("Quote request sent! We will get back to you soon.");
                form.current.reset();
                setIsSending(false);
            }, (error) => {
                alert("Failed to send: " + error.text);
                setIsSending(false);
            });
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-10 text-[#1a4332]">Request a Quote</h2>
                
                <form ref={form} onSubmit={sendEmail} className="grid gap-6 p-8 bg-white rounded-xl shadow-2xl">
                    <input name="user_name" placeholder="Full Name" className="border p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#1a4332] text-lg" required />
                    <input name="user_phone" placeholder="Phone Number" className="border p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#1a4332] text-lg" required />
                    <input name="user_email" type="email" placeholder="Email Address" className="border p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#1a4332] text-lg" required />
                    <textarea name="message" rows="5" placeholder="Tell us about your yard project..." className="border p-4 rounded-lg outline-none resize-none focus:ring-2 focus:ring-[#1a4332] text-lg" required />
                    
                    <button 
                        type="submit" 
                        disabled={isSending}
                        className={`${isSending ? 'bg-gray-400' : 'bg-[#94a84a] hover:bg-[#1a4332]'} text-white py-5 rounded-xl font-bold text-xl transition shadow-lg active:scale-95`}
                    >
                        {isSending ? "Sending..." : "Submit Request"}
                    </button>
                </form>
            </div>
        </section>
    );
}