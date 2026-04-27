// pages/Admissions.jsx
// Admissions page with process steps, requirements, and application form

import { useState } from "react";
import coursesData from "../data/courses.json";
import SectionHeader from "../components/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Fill Online Application",
    desc: "Complete the online application form with your personal and academic details.",
  },
  {
    step: "02",
    title: "Submit Documents",
    desc: "Upload required documents: marksheets, ID proof, passport photo, and certificates.",
  },
  {
    step: "03",
    title: "Entrance / Merit",
    desc: "Admission based on merit / entrance score for applicable programs.",
  },
  {
    step: "04",
    title: "Counseling Session",
    desc: "Attend online or in-person counseling to finalize your course and seat.",
  },
  {
    step: "05",
    title: "Fee Payment",
    desc: "Pay the first-year fee online or at the university fee counter.",
  },
  {
    step: "06",
    title: "Enrollment Confirmed!",
    desc: "Receive your admission confirmation letter and join orientation day.",
  },
];

const DOCUMENTS = [
  "10th Marksheet (Original + 2 copies)",
  "12th Marksheet (Original + 2 copies)",
  "Transfer Certificate from previous institution",
  "Aadhaar Card / Passport / Voter ID (any one)",
  "4 Recent Passport-sized Photographs",
  "Caste Certificate (if applicable)",
  "Entrance Exam Scorecard (if applicable)",
  "Medical Fitness Certificate",
];

const AdmissionsPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.mobile.match(/^[6-9]\d{9}$/)) errs.mobile = "Valid 10-digit mobile number required";
    if (!form.course) errs.course = "Please select a course";
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
            Admissions 2024–25
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Admissions Open
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            Begin your journey to excellence. Applications for the academic year 2024–25 are now open for all programs.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-10 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Application Start", date: "1 April 2024" },
              { label: "Application Deadline", date: "30 June 2024" },
              { label: "Merit List", date: "10 July 2024" },
              { label: "Classes Begin", date: "1 August 2024" },
            ].map((d) => (
              <div key={d.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
                <div className="text-blue-700 font-bold text-base">{d.date}</div>
                <div className="text-gray-500 text-xs mt-1">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How to Apply"
            title="Simple Admission Process"
            subtitle="Follow these 6 easy steps to secure your seat at Ganesh University."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow">
                  {s.step}
                </div>
                <div className="pt-3">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Documents"
            title="Required Documents"
            subtitle="Keep these documents ready before filling the application form."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DOCUMENTS.map((doc) => (
              <div key={doc} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <span className="text-green-500 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Apply Online"
            title="Submit Your Application"
            subtitle="Fill in the form below and our admissions team will contact you within 24 hours."
          />

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 text-sm mb-1">
                Thank you, <strong>{form.name}</strong>! Your application for{" "}
                <strong>{form.course}</strong> has been received.
              </p>
              <p className="text-gray-500 text-xs">
                Our admissions team will contact you on <strong>{form.mobile}</strong> within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", course: "", city: "", message: "" }); }}
                className="mt-6 px-6 py-2.5 bg-blue-700 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all ${errors.name ? "border-red-400" : "border-gray-200"}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all ${errors.email ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all ${errors.mobile ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
              </div>

              {/* Course & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Interested Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all bg-white ${errors.course ? "border-red-400" : "border-gray-200"}`}
                  >
                    <option value="">Select a course</option>
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.short_name}>
                        {c.short_name} – {c.duration}
                      </option>
                    ))}
                  </select>
                  {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City / State
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="Your city"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message / Query (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={3}
                  placeholder="Any specific queries or information you'd like to know?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-sm text-sm"
              >
                Submit Application →
              </button>
              <p className="text-xs text-gray-400 text-center">
                Your information is secure and will only be used for admission purposes.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;

