export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Spring Boot",
    "Hibernate/JPA",
    "REST API Design",
    "Microservices",
    "React",
    "HTML/CSS",
    "Responsive Design",
    "Git",
    "VS Code",
    "Postman",
    "Docker",
    "MySQL",
  ];

  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "var(--bg-secondary)",
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
        Technical Skills
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--text-muted)",
          marginBottom: "2rem",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
        }}
      >
        Technologies and tools I work with
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              padding: "0.5rem 1rem",
              background: "var(--bg-accent)",
              color: "var(--text-primary)",
              borderRadius: "var(--radius-lg)",
              fontSize: "0.9rem",
              boxShadow: "var(--shadow-soft)",
              border: "1px solid var(--color-light-gray)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
