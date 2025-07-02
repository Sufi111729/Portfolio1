import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 flex items-center"
    >
      <div className="max-w-4xl mx-auto px-8 lg:px-16 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
            Experience
          </h2>

          <div className="space-y-12">
            {personalInfo.workExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="clean-card p-8"
              >
                {/* Experience Header */}
                <div className="border-b border-gray-100 pb-6 mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-medium text-gray-900">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                      {experience.type}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-2">
                    {experience.company}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {experience.description}
                </p>

                {/* Responsibilities & Achievements */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {experience.responsibilities
                        .slice(0, 4)
                        .map((responsibility, respIndex) => (
                          <li
                            key={respIndex}
                            className="text-gray-600 text-sm flex items-start gap-3"
                          >
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-600 text-sm flex items-start gap-3"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current Status */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="clean-card p-8 bg-gray-900 text-white">
              <h3 className="text-xl font-medium mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm actively seeking a Graduate Engineer Trainee role where I
                can apply my technical skills and passion for innovation to
                create impactful solutions.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-white font-medium text-sm">
                      Available Immediately
                    </div>
                    <div className="text-gray-400 text-xs">Ready to start</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-white font-medium text-sm">
                      Open to Relocation
                    </div>
                    <div className="text-gray-400 text-xs">
                      Flexible location
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-medium text-sm">
                      Remote Ready
                    </div>
                    <div className="text-gray-400 text-xs">Hybrid friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
