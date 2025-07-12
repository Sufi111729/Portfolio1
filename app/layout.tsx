import "./globals.css";

export const metadata = {
  title:
    "Sufi Portfolio | MD Sufi | Muhammad Sufiyan - Full Stack Java Developer",
  description:
    "Sufi Portfolio - MD Sufi (Muhammad Sufiyan) Full Stack Java Developer from Bangalore. Expert in Spring Boot, React, MySQL. SufiWeb - Professional portfolio showcasing projects and skills. Sufi developer portfolio.",
  keywords:
    "sufi portfolio, md sufi, sufi web, sufiweb, mdsufiweb, sufi, muhammad sufiyan, sufiyan portfolio, full stack java developer, spring boot developer, react developer, mysql expert, bangalore developer, sufi developer, portfolio sufi, java developer portfolio, sufi programming, sufi coding",
  author: "Muhammad Sufiyan (MD Sufi)",
  creator: "MD Sufi",
  publisher: "Sufi Portfolio",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "googleb440a7717957c1fa",
  },
  alternates: {
    canonical: "https://sufiweb.dev",
  },
  openGraph: {
    title: "Sufi Portfolio | MD Sufi - Full Stack Java Developer",
    description:
      "SufiWeb - MD Sufi (Muhammad Sufiyan) Portfolio. Full Stack Java Developer expert in Spring Boot, React, MySQL from Bangalore, India.",
    type: "website",
    locale: "en_US",
    url: "https://sufiweb.dev",
    siteName: "Sufi Portfolio - MD Sufi Web",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F927889b468f04c9192f0e10274abd178%2F5b0866dfdcaf44d2a669ee2a22caacc4?format=webp&width=800",
        width: 800,
        height: 600,
        alt: "MD Sufi - Muhammad Sufiyan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sufi Portfolio | MD Sufi - Full Stack Java Developer",
    description:
      "SufiWeb - MD Sufi Portfolio. Full Stack Java Developer from Bangalore specializing in Spring Boot, React, MySQL.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F927889b468f04c9192f0e10274abd178%2F5b0866dfdcaf44d2a669ee2a22caacc4?format=webp&width=800",
    ],
  },
  other: {
    "theme-color": "#556b2f",
    "msapplication-TileColor": "#556b2f",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Dark mode initialization
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Sufiyan",
              alternateName: ["MD Sufi", "Sufi", "Sufiyan", "Muhammad Sufiyan" , "SufiWeb", "MDSufiWeb", "Sufi Portfolio", "Sufi Developer", "Sufi Java Developer", "Sufi Full Stack Developer",],
              description:
                "Full Stack Java Developer specializing in Spring Boot, React, and MySQL from Bangalore, India",
              url: "https://sufiweb.dev",
              image:
                "https://cdn.builder.io/api/v1/image/assets%2F927889b468f04c9192f0e10274abd178%2F5b0866dfdcaf44d2a669ee2a22caacc4?format=webp&width=800",
              sameAs: [
                "https://github.com/Sufi111729",
                "https://www.linkedin.com/in/sufiyan2k1",
              ],
              jobTitle: "Full Stack Java Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "India",
              },
              email: "muhammadsufiyandev01@gmail.com",
              knowsAbout: [
                "Java",
                "Spring Boot",
                "React",
                "MySQL",
                "Full Stack Development",
                "REST APIs",
                "Database Design",
                "Web Development",
              ],
              seeks: {
                "@type": "JobPosting",
                title: "Graduate Engineer Trainee",
                industry: "Software Development",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sufi Portfolio - MD Sufi Web",
              alternateName: ["SufiWeb", "MDSufiWeb", "Sufi Portfolio"],
              description:
                "MD Sufi (Muhammad Sufiyan) Portfolio - Full Stack Java Developer from Bangalore",
              url: "https://sufiweb.dev",
              author: {
                "@type": "Person",
                name: "Muhammad Sufiyan",
                alternateName: "MD Sufi",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sufiweb.dev/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="subject"
          content="Sufi Portfolio - Full Stack Java Developer"
        />
        <meta
          name="summary"
          content="MD Sufi (Muhammad Sufiyan) - Professional portfolio showcasing Full Stack Java development skills"
        />
        <meta
          name="topic"
          content="Full Stack Development, Java, Spring Boot, React, MySQL"
        />
        <meta name="identifier-URL" content="https://sufiweb.dev" />
        <meta name="directory" content="submission" />
        <meta
          name="category"
          content="Technology, Software Development, Portfolio"
        />
        <link rel="canonical" href="https://sufiweb.dev" />
        <link rel="alternate" hrefLang="en" href="https://sufiweb.dev" />
      </head>
      <body>{children}</body>
    </html>
  );
}
