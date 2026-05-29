import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <Reveal>
      <section id="projects" aria-labelledby="projects-heading" className="mt-16">
        <h2 id="projects-heading" className="text-headline-lg font-semibold">
          Featured work
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <div key={p.name} className={p.wide ? "md:col-span-2" : undefined}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
