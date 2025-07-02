import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="min-h-screen bg-white flex items-center">
      <div className="max-w-4xl mx-auto px-8 lg:px-16 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
            Education
          </h2>

          {/* Academic Background */}
          <div className="mb-16">
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-gray-600" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="clean-card p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit mt-2 lg:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-gray-600" />
              Professional Certifications
            </h3>

            <div className="space-y-8">
              {personalInfo.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="clean-card p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-700 font-medium">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit mt-2 lg:mt-0">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">
                      Technologies Covered
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 text-gray-600" />
              Languages
            </h3>

            <div className="clean-card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-medium text-gray-900 mb-1">
                      {lang.name}
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        lang.level === "Native"
                          ? "bg-green-100 text-green-800"
                          : lang.level === "Professional"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
