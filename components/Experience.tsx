export default function Experience() {
  const projects = [
    {
      title: "Employee Management System",
      period: "Dec 2022 – Jan 2023",
      tech: "Spring Boot, REST APIs, MySQL",
      description:
        "Developed a full-stack Employee Management System enabling CRUD operations using Java, Spring Boot, and MySQL.",
      highlights: [
        "Built robust RESTful API backend with structured endpoints and error handling",
        "Connected React + TypeScript frontend with backend using Axios",
        "Designed database schema with JPA/Hibernate ORM mapping",
        "Integrated Maven for project management and Postman for testing",
        "Emphasized clean code practices and modular design",
      ],
      links: {
        backend: "https://github.com/Sufi111729/Ems-back-end",
        frontend: "https://github.com/Sufi111729/Ems-front-end",
        demo: "https://emsdb.netlify.app",
      },
    },
    {
      title: "Portfolio Website",
      period: "Nov 2022 – Present",
      tech: "HTML5, CSS3, JavaScript, GitHub API",
      description:
        "Designed and developed a personal portfolio website to highlight technical projects and professional background.",
      highlights: [
        "Implemented fully responsive design with cross-device compatibility",
        "Created dynamic components with GitHub repository fetcher using REST API",
        "Added animations and styling for better user engagement",
        "Hosted on Netlify with continuous deployment via GitHub",
        "Followed SEO best practices for improved visibility",
      ],
      links: {
        github: "https://github.com/Sufi111729/Portfolio",
        demo: "https://sufiweb.netlify.app",
      },
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Experience & Projects</span>
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.title}>
              <div className="glass-effect p-8 rounded-3xl">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-blue-400">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm border border-purple-500/30">
                        {project.period}
                      </span>
                    </div>

                    <p className="text-green-400 font-medium mb-4">
                      🛠️ {project.tech}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-yellow-400 mt-1">▶</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(project.links).map(([type, link]) => (
                      <a
                        key={type}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full p-3 glass-effect rounded-xl text-center hover:bg-white/20"
                      >
                        <span className="capitalize">
                          {type === "demo"
                            ? "🌐 Live Demo"
                            : type === "backend"
                              ? "⚙️ Backend"
                              : type === "frontend"
                                ? "🎨 Frontend"
                                : "🔗 GitHub"}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
