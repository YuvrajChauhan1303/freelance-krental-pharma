"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
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
      <div className="flex flex-col md:flex-row bg-white w-full max-w-6xl mx-auto overflow-hidden">
        {/* Left: Form */}
        <div className="flex-[1.3] p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-10 text-left w-full">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* First row: First Name & Last Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#018578] focus:outline-none focus:ring-2 focus:ring-[#018578] rounded-md"
                  autoComplete="given-name"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#018578] focus:outline-none focus:ring-2 focus:ring-[#018578] rounded-md"
                  autoComplete="family-name"
                />
              </div>
            </div>
            {/* Second row: Email & Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#018578] focus:outline-none focus:ring-2 focus:ring-[#018578] rounded-md"
                  autoComplete="email"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#018578] focus:outline-none focus:ring-2 focus:ring-[#018578] rounded-md"
                  autoComplete="tel"
                />
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave a Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#018578] h-32 focus:outline-none focus:ring-2 focus:ring-[#018578] resize-none rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[#018578] px-6 py-3 font-semibold hover:bg-[#018578] hover:text-white transition disabled:opacity-60 border-2 border-[#018578] rounded-md"
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
