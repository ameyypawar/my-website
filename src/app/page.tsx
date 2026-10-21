import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import PlayBreakout from "@/components/PlayBreakout";
import { education, openSource, profile } from "@/data/resume";

// Structured data for search engines. Every fact here is also visible on the
// page, since LLM fetchers do not read JSON-LD.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${profile.site}/#website`,
      url: profile.site,
      name: profile.name,
    },
    {
      "@type": "ProfilePage",
      "@id": `${profile.site}/#profile`,
      url: profile.site,
      mainEntity: {
        "@type": "Person",
        "@id": `${profile.site}/#person`,
        name: profile.name,
        jobTitle: "Software Engineer",
        description: `${profile.headline}. ${openSource.merged} merged open-source PRs.`,
        url: profile.site,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressCountry: "IN",
        },
        alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
        knowsAbout: [
          "Rust",
          "TypeScript",
          "Observability",
          "PromQL",
          "OpenTelemetry",
          "Git internals",
        ],
        sameAs: [profile.github, profile.linkedin, profile.x],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex-1">
        <Hero />
        <Experience />
        <OpenSource />
        <FeaturedProjects />
        <Skills />
      </main>
      <PlayBreakout />
    </>
  );
}
