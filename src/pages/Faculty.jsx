// pages/Faculty.jsx
// Faculty listing page with department filter

import { useState } from "react";
import facultyData from "../data/faculty.js";
import SectionHeader from "../components/SectionHeader";

const DEPARTMENTS = ["All", "Computer Science", "Business Administration", "Commerce & Finance", "Computer Applications"];

// Initials-based avatar color mapping
const AVATAR_COLORS = [
  "bg-blue-700",
  "bg-indigo-600",
  "bg-violet-600",
  "bg-teal-600",
  "bg-emerald-600",
  "bg-orange-600",
];

const FacultyCard = ({ member, colorIndex }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
    {/* Avatar */}
    <div className="flex items-center gap-4 mb-4">
      <div
        className={`w-16 h-16 ${AVATAR_COLORS[colorIndex % AVATAR_COLORS.length]} rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}
      >
        {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
        <p className="text-blue-700 text-xs font-medium">{member.designation}</p>
        <p className="text-gray-400 text-xs">{member.department}</p>
      </div>
    </div>

    {/* Details */}
    <div className="space-y-2 text-xs">
      <div className="flex items-start gap-2">
        <span className="text-gray-400 w-20 flex-shrink-0">Qualification</span>
        <span className="text-gray-700 font-medium">{member.qualification}</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-gray-400 w-20 flex-shrink-0">Experience</span>
        <span className="text-gray-700 font-medium">{member.experience}</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-gray-400 w-20 flex-shrink-0">Specialization</span>
        <span className="text-gray-700 font-medium">{member.specialization}</span>
      </div>
    </div>

    {/* Email */}
    <div className="mt-4 pt-4 border-t border-gray-100">
      <a
        href={`mailto:${member.email}`}
        className="text-xs text-blue-600 hover:underline flex items-center gap-1"
      >
        ✉️ {member.email}
      </a>
    </div>
  </div>
);

const Faculty = () => {
  const [dept, setDept] = useState("All");

  const filtered =
    dept === "All"
      ? facultyData
      : facultyData.filter((f) => f.department === dept);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-200 bg-blue-600 px-3 py-1.5 rounded-full">
            Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Our Expert Faculty
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            Learn from experienced professors and industry experts committed to your academic and professional growth.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Faculty", value: "200+" },
              { label: "PhD Holders", value: "120+" },
              { label: "Avg. Experience", value: "15 Years" },
              { label: "Research Papers", value: "1,200+" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="text-2xl font-extrabold text-blue-700">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <SectionHeader
            badge="Department Filter"
            title="Meet Our Faculty"
            subtitle="Award-winning educators and industry leaders guiding the next generation."
          />

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  dept === d
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member, i) => (
              <FacultyCard key={member.id} member={member} colorIndex={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No faculty members found for this department.
            </div>
          )}
        </div>
      </section>

      {/* Join us section */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Interested in Joining Our Faculty?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We are always looking for passionate educators and researchers to join our academic team.
          </p>
          <a
            href="mailto:careers@ganeshuniversity.edu.in"
            className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm"
          >
            Apply for Faculty Position
          </a>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

