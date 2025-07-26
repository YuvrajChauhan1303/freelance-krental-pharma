"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.success) {
        setResponse("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponse("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setResponse("An error occurred.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center mt-16">
      <h1 className="text-3xl font-bold mb-10 text-center w-full">Contact Us</h1>
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto overflow-hidden">
        {/* Left: Form */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#018578]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#018578]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#018578]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#018578]"
            />
            <button
              type="submit"
              className="bg-[#018578] text-white px-6 py-3 rounded font-semibold hover:bg-[#01695f] transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {response && (
              <p className="mt-2 text-sm text-gray-700">{response}</p>
            )}
          </form>
        </div>
        {/* Right: Image */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-[#f6faf9]">
          <Image
            src="/images/contact/contact-illustration.png"
            alt="Contact Illustration"
            width={400}
            height={400}
            className="object-contain max-h-[350px] w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
