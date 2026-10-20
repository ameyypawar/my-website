// The project cards now live in the single resume data source. This module
// re-exports them so existing imports keep working.
export type { Project, ProjectStatus } from "./resume";
export { projects as featuredProjects } from "./resume";
