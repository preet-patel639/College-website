// components/SectionHeader.jsx
// Reusable section heading with optional subtitle and badge

const SectionHeader = ({ badge, title, subtitle, center = true }) => {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

