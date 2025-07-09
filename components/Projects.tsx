export default function Projects() {
  const projects = [
    {
      title: "Golden Photo Studio – Booking Platform",
      tech: "React, TailwindCSS, Framer Motion, Spring Boot, MySQL",
      links: [
        {
          label: "Frontend",
          url: "https://github.com/Sufi111729/Golden-photo-Studio-",
        },
        {
          label: "Backend",
          url: "https://github.com/Sufi111729/Golden-photo-Studio-backend",
        },
        { label: "Live Demo", url: "https://goldenphotostudio.netlify.app/" },
      ],
    },
    {
      title: "Employee Management System",
      tech: "Spring Boot, React, MySQL",
      links: [
        {
          label: "Frontend",
          url: "https://github.com/Sufi111729/Ems-front-end",
        },
        { label: "Backend", url: "https://github.com/Sufi111729/Ems-back-end" },
        { label: "Live Demo", url: "https://emsdb.netlify.app" },
      ],
    },
    {
      title: "Personal Portfolio",
      tech: "HTML5, CSS3, JavaScript",
      links: [
        { label: "Code", url: "https://github.com/Sufi111729/Portfolio" },
        { label: "Live Demo", url: "https://sufiweb.netlify.app" },
      ],
    },
    {
      title: "RESTful Web Services",
      tech: "Spring Boot, Maven, Postman",
      links: [{ label: "GitHub", url: "https://github.com/Sufi111729" }],
    },
  ];

  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "var(--bg-accent)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontFamily: "var(--font-heading)",
          color: "var(--text-primary)",
          marginBottom: "1rem",
        }}
      >
        Projects
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--text-muted)",
          marginBottom: "3rem",
          maxWidth: "600px",
          margin: "0 auto 3rem auto",
        }}
      >
        Some projects I&apos;ve built
      </p>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              marginBottom: "2rem",
              padding: "1.5rem",
              background: "var(--bg-secondary)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              {project.tech}
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-charcoal)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}
                >
                  🔗 {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://github.com/Sufi111729"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--color-charcoal)",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          🌟 View More on GitHub
        </a>
      </div>
    </section>
  );
}
