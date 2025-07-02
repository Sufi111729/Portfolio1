import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-8 md:p-12 backdrop-blur-sm border transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700/50"
              : "bg-white/80 border-gray-200/50 shadow-2xl"
          }`}
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-16 text-center transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Textual Information */}
            <div className="space-y-8">
              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Hi, I'm{" "}
                <span
                  className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {personalInfo.name}
                </span>
                , a passionate Full Stack Java Developer based in{" "}
                {personalInfo.location}. I build modern, scalable web
                applications using <strong>Spring Boot</strong>,{" "}
                <strong>React</strong>, and <strong>MySQL</strong>.
              </p>

              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {personalInfo.objective}
              </p>

              <motion.div
                className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-700/50 border-gray-600/50"
                    : "bg-blue-50/80 border-blue-200/50"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Current Availability
                </h3>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {personalInfo.availability}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <motion.div
                  className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-700/30 border-gray-600/30"
                      : "bg-white/70 border-gray-200/50"
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    2+
                  </div>
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Years Experience
                  </p>
                </motion.div>
                <motion.div
                  className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-700/30 border-gray-600/30"
                      : "bg-white/70 border-gray-200/50"
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    5+
                  </div>
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Projects Completed
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 ${
                  theme === "dark"
                    ? "ring-2 ring-gray-700"
                    : "ring-2 ring-gray-200"
                }`}
              >
                <img
                  src="/image.png"
                  alt="Muhammad Sufiyan - Professional Portrait"
                  className="w-full max-w-md mx-auto object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://i.ibb.co/qLp4ynkC/image.png";
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300`}
                />
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl transition-colors duration-300 ${
                  theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"
                }`}
              />
              <div
                className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl transition-colors duration-300 ${
                  theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"
                }`}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
