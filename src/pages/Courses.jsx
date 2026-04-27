// pages/Courses.jsx
// Full courses listing with expandable semester details

import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import SectionHeader from "../components/SectionHeader";

// Semester accordion component
const SemesterAccordion = ({ semester }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800 text-sm">
          Semester {semester.semester}
        </span>
        <span className={`text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-white">
          <ul className="space-y-1.5">
            {semester.subjects.map((sub) => (
              <li key={sub} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                {sub}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Full course detail card
const CourseDetail = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={course.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            {course.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-blue-200 text-xs mb-1">{course.category}</div>
            <h3 className="font-bold text-lg leading-tight">{course.course_name}</h3>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-b border-gray-100">
        {[
          { label: "Duration", value: course.duration },
          { label: "Semesters", value: course.total_semesters },
          { label: "Annual Fees", value: course.fees },
          { label: "Eligibility", value: course.eligibility.split(" with")[0] },
        ].map((item, i) => (
          <div key={item.label} className={`p-4 ${i < 3 ? "border-r border-gray-100" : ""}`}>
            <div className="text-xs text-gray-400 mb-1">{item.label}</div>
            <div className="font-semibold text-gray-800 text-sm">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="p-6">
        {/* Eligibility full */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Full Eligibility
          </h4>
          <p className="text-sm text-gray-600">{course.eligibility}</p>
        </div>

        {/* Career Opportunities */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Career Opportunities
          </h4>
          <div className="flex flex-wrap gap-2">
            {course.career_opportunities.map((c) => (
              <span key={c} className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Semesters */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-3"
            onClick={() => setExpanded(!expanded)}
          >
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Semester-wise Subjects
            </h4>
            <button className="text-xs text-blue-700 font-medium hover:underline">
              {expanded ? "Hide ▲" : "Show All ▼"}
            </button>
          </div>

          {expanded && (
            <div className="space-y-2">
              {course.semesters.map((sem) => (
                <SemesterAccordion key={sem.semester} semester={sem} />
              ))}
            </div>
          )}
          {!expanded && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.semesters.slice(0, 2).map((sem) => (
                <div key={sem.semester} className="bg-gray-50 rounded-xl p-3">
                  <div className="text-xs font-semibold text-blue-700 mb-2">
                    Semester {sem.semester}
                  </div>
                  <div className="text-xs text-gray-600">
                    {sem.subjects.slice(0, 2).join(", ")}
                    {sem.subjects.length > 2 && ` +${sem.subjects.length - 2} more`}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="mt-6 flex gap-3">
          <Link
            to="/admissions"
            className="flex-1 text-center py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm"
          >
            Apply for {course.short_name}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [filter, setFilter] = useState("All");
  const location = useLocation();

  // Scroll to specific course from hash
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const categories = ["All", "Undergraduate", "Postgraduate"];
  const filtered =
    filter === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === filter);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-200 bg-blue-600 px-3 py-1.5 rounded-full">
            Programs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Academic Programs
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            Explore our UGC-approved undergraduate and postgraduate programs designed for today's competitive job market.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat === "All" ? coursesData.length : coursesData.filter((c) => c.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((course) => (
              <CourseDetail key={course.id} course={course} />
            ))}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              No courses found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Not sure which course is right for you?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Chat with our AI Admission Assistant or contact our counseling team for personalized guidance.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
          >
            Talk to a Counselor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;

