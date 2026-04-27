// pages/About.jsx
// About college page with history, vision, mission, accreditations

import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const MILESTONES = [
  { year: "1998", event: "Ganesh University established in Ahmedabad, Gujarat" },
  { year: "2003", event: "Received first NAAC accreditation (Grade B)" },
  { year: "2008", event: "Launched B.Tech and MBA programs" },
  { year: "2012", event: "New campus with state-of-the-art facilities inaugurated" },
  { year: "2018", event: "Upgraded to NAAC A grade – 5,000+ students enrolled" },
  { year: "2022", event: "Achieved NAAC A+ Accreditation – 15,000+ students" },
  { year: "2024", event: "Launched AI-powered student support system" },
];

const VALUES = [
  { icon: "🎯", title: "Excellence", desc: "We strive for the highest standards in education, research, and student support." },
  { icon: "🤝", title: "Integrity", desc: "Transparency, honesty, and ethical conduct in all our academic endeavors." },
  { icon: "💡", title: "Innovation", desc: "Encouraging creative thinking and embracing modern technology in learning." },
  { icon: "🌱", title: "Inclusivity", desc: "Creating an equal opportunity environment for all students regardless of background." },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-200 bg-blue-600 px-3 py-1.5 rounded-full">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              About Ganesh University
            </h1>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed">
              26 years of empowering students with quality education, innovation, and character-building.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Building Future-Ready Professionals Since 1998
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Ganesh University was founded in 1998 with a vision to provide world-class education in the heart of Gujarat. Starting with just two departments and 500 students, we have grown into a comprehensive institution serving over 15,000 students across multiple disciplines.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our university is UGC approved and holds the prestigious NAAC A+ accreditation — a testament to our unwavering commitment to educational excellence, infrastructure, faculty quality, and student outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "1998" },
                  { label: "Accreditation", value: "NAAC A+" },
                  { label: "Students", value: "15,000+" },
                  { label: "Faculty", value: "200+" },
                ].map((item) => (
                  <div key={item.label} className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-blue-700">{item.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration / Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🏛️", title: "Modern Campus", desc: "35-acre campus with smart classrooms, labs, library, and sports facilities." },
                { icon: "🔬", title: "Research Centers", desc: "Dedicated research labs for AI, Data Science, Finance, and Management." },
                { icon: "🌍", title: "Industry Connect", desc: "500+ companies for placements & internships including top MNCs." },
                { icon: "📚", title: "Digital Library", desc: "Access to 50,000+ books and international journals online and offline." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Vision & Mission" title="Our Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a globally recognized institution that empowers students with knowledge, skills, and values to become ethical leaders and innovators who contribute meaningfully to society and the economy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide high-quality, industry-relevant education through exceptional faculty, modern infrastructure, and a student-centric approach — fostering academic excellence, research innovation, and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Core Values" title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Journey" title="Milestones & Achievements" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`relative flex gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white shadow-sm z-10" />
                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="text-blue-700 font-bold text-sm mb-1">{m.year}</div>
                      <p className="text-gray-600 text-sm">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Become Part of Our Legacy
          </h2>
          <p className="text-blue-200 mb-8">
            Join Ganesh University and be part of a community that shapes leaders and innovators.
          </p>
          <Link
            to="/admissions"
            className="inline-block px-8 py-3.5 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Apply for Admission →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

