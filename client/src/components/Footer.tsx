import { personalInfo, socialLinks } from "@/lib/constants";
import { Heart, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "wouter";

export default function Footer() {
  const { theme } = useTheme();
  const [, setLocation] = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3
              className={`text-xl font-bold transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {personalInfo.name}
            </h3>
            <p
              className={`text-sm leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Java Developer passionate about creating modern web
              applications.
            </p>
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-4 h-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              />
              <span
                className={`text-sm transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className={`font-semibold transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => setLocation(link.path)}
                  className={`text-sm text-left transition-colors duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4
              className={`font-semibold transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center gap-3 text-sm transition-colors duration-300 hover:scale-105 ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className={`flex items-center gap-3 text-sm transition-colors duration-300 hover:scale-105 ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  <i className={`${link.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`text-sm transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {currentYear} Muhammad Sufiyan. Made with
            </span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          </div>

          <button
            onClick={scrollToTop}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
