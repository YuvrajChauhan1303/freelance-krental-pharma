"use client";

import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactUs() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setSent(true);
      setForm(initialState);
    } catch (err: unknown) {
      setError("Something went wrong." + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto my-16 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left: Form */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded hover:bg-primary/90 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && (
            <div className="text-green-600 font-medium mt-2">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="text-red-600 font-medium mt-2">{error}</div>
          )}
        </form>
      </div>
      {/* Right: Image Placeholder */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        {/* <img src="/contact-image.jpg" alt="Contact Us" className="object-cover w-full h-full" /> */}
        <div className="text-3xl text-gray-400 font-bold">IMAGE</div>
      </div>
    </div>
  );
}
