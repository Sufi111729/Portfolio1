import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Muhammad Sufiyan - Full Stack Java Developer | Spring Boot & React Expert",
  description = "Muhammad Sufiyan is a skilled Full Stack Java Developer specializing in Spring Boot, React, and modern web technologies. Available for immediate hiring and relocation. Expert in building scalable web applications with clean code practices.",
  keywords = "Muhammad Sufiyan, Full Stack Java Developer, Spring Boot Developer, React Developer, Java Expert, Web Developer, Sufi, SufiWeb, SufiPortfolio, Portfolio, Software Engineer, Backend Developer, Frontend Developer, REST API, MySQL, JavaScript, TypeScript, Hibernate, JPA, Maven, Git, Bangalore Developer, Java Professional, Enterprise Applications",
  image = "https://raw.githubusercontent.com/Sufi111729/Portfolio/refs/heads/main/attached_assets/image.png",
  url = "https://sufiweb.netlify.app",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        if (isProperty) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Muhammad Sufiyan");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph meta tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Muhammad Sufiyan Portfolio", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:creator", "@sufiyan_dev");
    updateMetaTag("twitter:site", "@sufiyan_dev");

    // Additional SEO meta tags
    updateMetaTag("theme-color", "#8B5CF6");
    updateMetaTag("msapplication-TileColor", "#8B5CF6");
    updateMetaTag("application-name", "Muhammad Sufiyan Portfolio");
    updateMetaTag("apple-mobile-web-app-title", "Sufi Portfolio");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("mobile-web-app-capable", "yes");

    // Structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Sufiyan",
      alternateName: ["Sufi", "Muhammad Sufiyan Dev"],
      jobTitle: "Full Stack Java Developer",
      description: description,
      url: url,
      image: image,
      sameAs: [
        "https://linkedin.com/in/sufiyan2k1",
        "https://github.com/Sufi111729",
        "https://sufiweb.netlify.app",
      ],
      knowsAbout: [
        "Java",
        "Spring Boot",
        "React",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "REST API",
        "Full Stack Development",
        "Web Development",
        "Software Engineering",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
      email: "muhammadsufiyandev01@gmail.com",
      telephone: "+91-8574774647",
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector(
      "#structured-data",
    ) as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.id = "structured-data";
      structuredDataScript.type = "application/ld+json";
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Update canonical URL
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
  }, [title, description, keywords, image, url, type]);

  return null;
}
