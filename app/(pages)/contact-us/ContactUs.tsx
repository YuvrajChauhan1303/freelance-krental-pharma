"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react"; // for icons

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
    } catch {
      setResponse("An error occurred.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full flex justify-center items-center mt-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg overflow-hidden">
        
        <div className="bg-[#008577] text-white p-8 flex flex-col gap-8 md:w-1/2">
          
          <div>
            <Mail className="w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold">Drop us a line</h3>
            <p className="text-sm opacity-90">
              Reach out to our team for expert assistance.
            </p>
            <p className="mt-2 font-medium">Krenitalpharma@gmail.com</p>
          </div>

          <hr className="border-white/30" />

          {/* Address */}
          <div>
            <MapPin className="w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold">Our Headquarters</h3>
            <p className="text-sm opacity-90">
              18-A, Parth Agriculture
              <br />
              Nr. Vankar Samaj Hostel, Hansapur Patan
            </p>
          </div>

          <hr className="border-white/30" />

          {/* Phone */}
          <div>
            <Phone className="w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold">Call our Experts</h3>
            <p className="text-sm opacity-90">Mon-Fri, 9:00 AM to 5:00 PM</p>
            <p className="mt-2 font-medium">+91 84012 95461</p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white p-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-[#008577] mb-6">
            SEND US A MESSAGE
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-1/2 border px-3 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-1/2 border px-3 py-2"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-1/2 border px-3 py-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="+91 00000 00000"
                value={form.phone}
                onChange={handleChange}
                className="w-1/2 border px-3 py-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Leave a message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 h-28 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full border-2 border-[#008577] text-[#008577] py-2 hover:bg-[#008577] hover:text-white transition"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>

            {response && (
              <p className="text-sm mt-2 text-gray-700">{response}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
