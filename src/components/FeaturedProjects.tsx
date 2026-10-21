import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/resume";

export default function FeaturedProjects() {
  return (
    <Section id="projects" title="Featured work">
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.name}
            className="border-b border-dashed border-outline sm:odd:border-r"
          >
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
