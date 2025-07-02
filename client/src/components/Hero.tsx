import { personalInfo } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "wouter";

export default function Hero() {
  const { theme } = useTheme();
  const [, setLocation] = useLocation();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative h-screen w-full flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/qLp4ynkC/image.png"
          alt="Muhammad Sufiyan - Professional Portrait"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://raw.githubusercontent.com/Sufi111729/Portfolio/refs/heads/main/attached_assets/image.png";
          }}
        />
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "bg-black/40" : "bg-black/30"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-white"
          }`}
        >
          {personalInfo.name}
        </h1>

        <p
          className={`text-xl md:text-2xl mb-8 ${
            theme === "dark" ? "text-gray-200" : "text-gray-100"
          }`}
        >
          Full Stack Developer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setLocation("/about")}
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:border-white/50"
          >
            About Me
          </button>

          <button
            onClick={() => setLocation("/contact")}
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === "dark" ? "border-white" : "border-white"
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
              theme === "dark" ? "bg-white" : "bg-white"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
