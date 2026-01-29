import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-[60vh] pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-10 text-center">
                <h1 className="text-5xl font-extrabold text-[#1a4332] mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600">Let's get your project started.</p>
            </div>
            <ContactForm />
        </div>
    );
}