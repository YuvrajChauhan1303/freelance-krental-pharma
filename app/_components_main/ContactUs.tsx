"use client";
import { useState } from "react";

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
    <div className="max-w-xl mx-auto mt-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {response && <p className="mt-2 text-sm text-gray-700">{response}</p>}
      </form>
    </div>
  );
}
