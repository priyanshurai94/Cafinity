import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // WhatsApp Number
  const whatsappNumber = "919304257312";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>

        <p className="text-gray-600">
          Need help? Send us a message or contact directly
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-4">
            We are here to help you with all online services.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Kusumahi, Ara, Bihar</p>
            <p>📞 +91 9304257312</p>
            <p>✉️ raipriyanshu94@gmail.com</p>
          </div>

          <div className="mt-6">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send via WhatsApp
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;