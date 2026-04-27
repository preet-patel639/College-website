// components/CourseCard.jsx
// Reusable card component to display course overview

import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col">
      {/* Icon & Category */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
          {course.icon}
        </div>
        <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Course Name */}
      <h3 className="font-bold text-gray-900 text-base mb-1">{course.short_name}</h3>
      <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">{course.course_name}</p>

      {/* Key Info */}
      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
        <div className="bg-gray-50 rounded-lg p-2">
          <div className="text-gray-400 mb-0.5">Duration</div>
          <div className="font-semibold text-gray-700">{course.duration}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <div className="text-gray-400 mb-0.5">Semesters</div>
          <div className="font-semibold text-gray-700">{course.total_semesters}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 col-span-2">
          <div className="text-gray-400 mb-0.5">Annual Fees</div>
          <div className="font-semibold text-blue-700">{course.fees}</div>
        </div>
      </div>

      {/* Eligibility */}
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        <span className="font-medium text-gray-600">Eligibility: </span>
        {course.eligibility}
      </p>

      {/* Career Tags */}
      <div className="flex flex-wrap gap-1 mb-5">
        {course.career_opportunities.slice(0, 3).map((c) => (
          <span key={c} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
            {c}
          </span>
        ))}
        {course.career_opportunities.length > 3 && (
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
            +{course.career_opportunities.length - 3} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        <Link
          to={`/courses#${course.id}`}
          className="flex-1 text-center text-sm py-2.5 border border-blue-600 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors font-medium"
        >
          View Details
        </Link>
        <Link
          to="/admissions"
          className="flex-1 text-center text-sm py-2.5 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors font-medium"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;


