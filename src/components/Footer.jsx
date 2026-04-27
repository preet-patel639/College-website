// components/Footer.jsx
// Site footer with links, contact info, and social media

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  Ganesh University
                </div>
                <div className="text-blue-300 text-xs">Excellence in Education</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Empowering students with quality education since 1998. UGC Approved & NAAC A+ Accredited.
            </p>
            <div className="flex gap-3">
              {["FB", "TW", "LI", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-xs font-bold text-blue-300 hover:bg-blue-600 cursor-pointer transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Courses", path: "/courses" },
                { label: "Admissions", path: "/admissions" },
                { label: "Faculty", path: "/faculty" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Programs
            </h3>
            <ul className="space-y-2">
              {["BCA", "B.Tech CS", "MCA", "MBA", "B.Com", "BBA"].map((c) => (
                <li key={c}>
                  <Link
                    to="/courses"
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    → {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex gap-2">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span>123 University Road, Ahmedabad, Gujarat 380001</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400">📞</span>
                <span>+91-79-2630-4400</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400">✉️</span>
                <span>admissions@ganeshuniversity.edu.in</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400">🕒</span>
                <span>Mon–Sat: 9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <span>© 2024 Ganesh University. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

