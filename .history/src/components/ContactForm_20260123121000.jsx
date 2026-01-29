export default function ContactForm() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Request a Quote
        </h2>

        <form className="grid gap-6 p-8 bg-white rounded-xl shadow-2xl">
          {["Full Name", "Phone Number", "Email Address"].map((p) => (
            <input
              key={p}
              placeholder={p}
              className="border p-4 rounded-lg focus:ring-4 focus:ring-primary/20 outline-none"
            />
          ))}

          <textarea
            rows="5"
            placeholder="Describe the job..."
            className="border p-4 rounded-lg focus:ring-4 focus:ring-primary/20 outline-none resize-none"
          />

          <button className="bg-secondary hover:bg-red-700 text-white py-4 rounded-xl font-bold text-xl transition">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
