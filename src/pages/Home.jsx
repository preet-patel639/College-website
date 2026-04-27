// pages/Home.jsx
// Main landing page with hero, stats, features, courses preview

import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";

// Stats displayed in hero section
const STATS = [
  { label: "Students Enrolled", value: "15,000+" },
  { label: "Years of Excellence", value: "26+" },
  { label: "Expert Faculty", value: "200+" },
  { label: "Placement Rate", value: "92%" },
];

// Feature highlights
const FEATURES = [
  {
    icon: "🎓",
    title: "NAAC A+ Accredited",
    desc: "Top quality education recognized by national accreditation boards.",
  },
  {
    icon: "💼",
    title: "100% Placement Support",
    desc: "Dedicated placement cell with 500+ company tie-ups.",
  },
  {
    icon: "🏆",
    title: "Award Winning Faculty",
    desc: "Learn from industry experts and PhD-qualified professors.",
  },
  {
    icon: "🌐",
    title: "Modern Infrastructure",
    desc: "Smart classrooms, high-speed labs, and a fully equipped campus.",
  },
  {
    icon: "🤝",
    title: "Industry Collaborations",
    desc: "Internship & live project opportunities with leading companies.",
  },
  {
    icon: "📜",
    title: "UGC Approved",
    desc: "All programs are UGC approved and nationally recognized.",
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    name: "Rahul Verma",
    course: "B.Tech CS, 2023",
    text: "Ganesh University gave me the perfect platform. The faculty is excellent and the placement support helped me land my dream job at a top MNC.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    course: "MBA, 2022",
    text: "The curriculum is industry-relevant and the professors bring real-world experience. I got placed at a Fortune 500 company during campus recruitment.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    course: "BCA, 2023",
    text: "The AI and programming courses are world-class. The hands-on projects gave me practical skills that employers value. Highly recommended!",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 border border-blue-500 px-4 py-1.5 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-blue-100">Admissions Open 2024-25</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Shape Your Future at{" "}
              <span className="text-blue-300">Ganesh University</span>
            </h1>
            <p className="text-blue-100 text-base md:text-xl leading-relaxed mb-8 max-w-2xl">
              Join 15,000+ students experiencing world-class education. UGC Approved, NAAC A+ Accredited, with 26+ years of academic excellence in Gujarat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg text-base"
              >
                Apply for Admission →
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-2 border-blue-400 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-base"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-blue-950 border-t border-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-blue-300 text-xs md:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            title="Why Students Choose Ganesh University"
            subtitle="Discover the advantages that make us the preferred choice for thousands of students across Gujarat."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Programs"
            title="Popular Courses at Ganesh University"
            subtitle="From undergraduate to postgraduate, choose from a wide range of industry-aligned programs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-sm"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Student Reviews"
            title="What Our Students Say"
            subtitle="Real experiences from students who built their careers with Ganesh University."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 md:py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-200 text-base md:text-lg mb-8">
            Admissions for 2024-25 are open. Apply today or chat with our AI assistant for instant help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

