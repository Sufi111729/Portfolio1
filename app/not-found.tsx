export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-body)",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontFamily: "var(--font-heading)",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: "var(--text-secondary)",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "var(--text-muted)",
          marginBottom: "2rem",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          background: "var(--color-charcoal)",
          color: "var(--color-off-white)",
          textDecoration: "none",
          borderRadius: "var(--radius-lg)",
          fontWeight: "500",
          transition: "all var(--timing-medium) var(--easing-gentle)",
        }}
      >
        Go Home
      </a>
    </div>
  );
}
