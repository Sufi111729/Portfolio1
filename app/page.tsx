import Hero from "@/components/Hero";
// import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main>
      {/* SEO hidden content for better search ranking */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <h1>Sufi Portfolio - MD Sufi - Muhammad Sufiyan</h1>
        <p>
          SufiWeb MDSufiWeb Sufi Portfolio MD Sufi Web Sufi Developer Sufiyan
          Portfolio
        </p>
        <p>
          Full Stack Java Developer Spring Boot React MySQL Bangalore Developer
        </p>
        <p>Sufi Programming Sufi Coding Portfolio Sufi Web Development</p>
      </div>

      <ThemeToggle />
      <AIChatbot />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      {/* <Contact /> */}

      {/* Handcrafted Footer */}
      <footer className="footer-signature">
        <div style={{ marginBottom: "var(--space-sm)" }}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            style={{
              margin: "0 auto var(--space-sm) auto",
              opacity: 0.6,
              display: "block",
            }}
          >
            <circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <text
              x="30"
              y="35"
              textAnchor="middle"
              style={{ fontSize: "0.75rem", fill: "currentColor" }}
            >
              MS
            </text>
          </svg>
        </div>

        <p className="signature-mark">
          Built line-by-line with passion by Muhammad Sufiyan
        </p>
        <p className="signature-year">
          © 2025 • Crafted with care in Bangalore, India
        </p>

        <div
          style={{
            marginTop: "var(--space-md)",
            paddingTop: "var(--space-md)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontStyle: "italic",
              opacity: 0.8,
            }}
          >
            &ldquo;Every pixel placed with purpose, every interaction designed
            with intention&rdquo;
          </p>
        </div>
      </footer>
    </main>
  );
}
