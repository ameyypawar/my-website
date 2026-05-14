export type Project = { name: string; tagline: string; url: string; status: "live" };
export const featuredProjects: Project[] = [
  { name: "tubio", tagline: "A Chrome extension that turns YouTube into a focused workspace — clean transcripts, distraction controls, and an AI chat that knows the video you're watching.", url: "https://tubio.pro", status: "live" },
  { name: "gitfix", tagline: "A VS Code extension that resolves merge conflicts the way a teammate would — understands intent, not just text diffs.", url: "https://gitfix.pro", status: "live" },
];
