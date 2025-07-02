import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: personalInfo.skills.languages,
      type: "progress",
    },
    {
      title: "Frameworks & Libraries",
      skills: personalInfo.skills.frameworks,
      type: "list",
    },
    {
      title: "Databases",
      skills: personalInfo.skills.databases,
      type: "list",
    },
    {
      title: "Development Tools",
      skills: personalInfo.skills.tools,
      type: "list",
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
            My Skills
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="clean-card p-8"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-6">
                  {category.title}
                </h3>

                {category.type === "progress" ? (
                  <div className="space-y-4">
                    {(category.skills as any[]).map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gray-900 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {(category.skills as string[]).map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className="bg-gray-100 px-3 py-2 rounded text-gray-700 text-sm text-center"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="clean-card p-8"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Networking Knowledge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.skills.networking}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="clean-card p-8"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.skills.softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 px-3 py-2 rounded text-gray-700 text-sm text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
