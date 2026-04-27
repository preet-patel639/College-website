// pages/Contact.jsx
// Contact us page with form and contact information

import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const CONTACT_INFO = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123 University Road", "Ahmedabad, Gujarat 380001", "India"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91-79-2630-4400", "+91-79-2630-4401", "Mon–Sat: 9AM – 5PM"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["admissions@ganeshuniversity.edu.in", "info@ganeshuniversity.edu.in"],
  },
  {
    icon: "🕒",
    title: "Office Hours",
    lines: ["Monday – Friday: 9:00 AM – 5:00 PM", "Saturday: 9:00 AM – 1:00 PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-200 bg-blue-600 px-3 py-1.5 rounded-full">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            Have questions about admissions, courses, or campus life? Our team is here to help you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_INFO.map((info) => (
              <div key={info.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-xs leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <SectionHeader
                badge="Message Us"
                title="Send Us a Message"
                subtitle="Fill the form and we'll get back to you within 24 hours."
                center={false}
              />

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Thank you, <strong>{form.name}</strong>! We'll respond to your query within 24 hours at {form.email}.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", subject: "", message: "" }); }}
                    className="mt-5 px-6 py-2.5 bg-blue-700 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.name ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={form.mobile}
                        onChange={(e) => handleChange("mobile", e.target.value)}
                        placeholder="10-digit number"
                        maxLength={10}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.email ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="What is your query about?"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      placeholder="Write your message here..."
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-sm shadow-sm"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder + Departments */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-blue-50 rounded-2xl h-56 flex items-center justify-center border border-blue-100">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-blue-700 font-semibold text-sm">Ganesh University Campus</p>
                  <p className="text-gray-500 text-xs">123 University Road, Ahmedabad, Gujarat</p>
                </div>
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-base">Department Contacts</h3>
                <div className="space-y-3">
                  {[
                    { dept: "Admissions Office", email: "admissions@ganeshuniversity.edu.in", phone: "+91-79-2630-4400" },
                    { dept: "Computer Science Dept.", email: "cs@ganeshuniversity.edu.in", phone: "+91-79-2630-4401" },
                    { dept: "Business Administration", email: "mba@ganeshuniversity.edu.in", phone: "+91-79-2630-4402" },
                    { dept: "Placement Cell", email: "placements@ganeshuniversity.edu.in", phone: "+91-79-2630-4403" },
                  ].map((d) => (
                    <div key={d.dept} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="font-semibold text-gray-900 text-sm mb-1">{d.dept}</div>
                      <div className="text-gray-500 text-xs">{d.email}</div>
                      <div className="text-gray-500 text-xs">{d.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

