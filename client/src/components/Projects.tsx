import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projectImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  ];

  return (
    <section id="projects" className="min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
            My Portfolio
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {personalInfo.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="clean-card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={projectImages[index]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      {(project.backendCode || project.sourceCode) && (
                        <a
                          href={project.backendCode || project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-gray-600 text-sm flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-minimal text-center"
                    >
                      View Project
                    </a>
                    {(project.backendCode || project.sourceCode) && (
                      <a
                        href={project.backendCode || project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="clean-card p-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Interested in seeing more?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always working on new projects and exploring cutting-edge
                technologies. Check out my GitHub for the latest updates and
                contributions.
              </p>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-minimal inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
