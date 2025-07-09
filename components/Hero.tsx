import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-sanctuary">
      <div className="hero-content">
        <div className="hero-portrait">
          <div className="portrait-frame">
            <div className="portrait-image">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F927889b468f04c9192f0e10274abd178%2F5b0866dfdcaf44d2a669ee2a22caacc4?format=webp&width=800"
                alt="Muhammad Sufiyan - Full Stack Java Developer"
                width={160}
                height={160}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                priority
              />
            </div>
          </div>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginBottom: "var(--space-md)",
            }}
          >
            📍 Bangalore, India (Open to relocation)
          </p>
          <div className="hero-links">
            <a
              href="mailto:muhammadsufiyandev01@gmail.com"
              className="hero-link primary"
            >
              💌 Say Hello
            </a>
            <a
              href="https://github.com/Sufi111729"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              👨‍💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sufiyan2k1"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              🌐 LinkedIn
            </a>
            <a
              href="/pdf/sufi.pdf"
              download
              target="_blank"
              className="hero-link"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        <div className="hero-introduction">
          <p className="greeting-text">Hello.</p>
          <h1 className="name-signature">
            I&apos;m <span className="name-highlight">Sufiyan</span> (MD Sufi)
          </h1>

          <p className="tagline-verse">
            Sufi Portfolio - I write code that breathes life into ideas.
          </p>

          <div className="hero-divider"></div>

          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: "var(--line-height-loose)",
              marginBottom: "var(--space-md)",
            }}
          >
            <strong>Sufi</strong> - Full Stack Java Developer crafting solutions
            with
            <strong> Spring Boot</strong>, <strong> React</strong>, and{" "}
            <strong> MySQL</strong>. Welcome to <strong>SufiWeb</strong> - my
            professional portfolio.
          </p>

          <p
            style={{
              color: "var(--text-light)",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            MD Sufi - Ready for Graduate Engineer opportunities in Bangalore.
          </p>
        </div>
      </div>
    </section>
  );
}
