export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-warm-white text-charcoal">
      <h1 className="text-6xl font-serif mb-4 text-deep-olive">404</h1>
      <h2 className="text-2xl mb-4 text-ash-gray">Page Not Found</h2>
      <p className="text-base text-light-ash mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-charcoal text-warm-white no-underline rounded-lg font-medium hover:bg-ash-gray transition-colors duration-300"
      >
        Go Home
      </a>
    </div>
  );
}
