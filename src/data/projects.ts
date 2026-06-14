export type ProjectStatus = "live" | "open-source";

export type Project = {
  name: string;
  tagline: string;
  url: string;
  repo?: string;
  status: ProjectStatus;
};

export const featuredProjects: Project[] = [
  {
    name: "gfix",
    tagline:
      "Resolve git merge conflicts with semantic understanding instead of line-based diffing.",
    url: "https://gfix.space",
    repo: "https://github.com/ameyypawar/gfix-docs",
    status: "live",
  },
  {
    name: "gitfix",
    tagline:
      "A VS Code extension that resolves merge conflicts the way a teammate would — understands intent, not just text diffs.",
    url: "https://gitfix.pro",
    repo: "https://github.com/ameyypawar/gitfix",
    status: "live",
  },
  {
    name: "tubio",
    tagline:
      "A Chrome extension that turns YouTube into a focused workspace — clean transcripts, distraction controls, and an AI chat that knows the video you're watching.",
    url: "https://tubio.pro",
    repo: "https://github.com/ameyypawar/tubio-docs",
    status: "live",
  },
  {
    name: "Pluck",
    tagline:
      "MIT Chrome MV3 extension that auto-detects listed items on any page and exports to CSV — deterministic, no AI, no tracking.",
    url: "https://github.com/ameyypawar/pluck",
    status: "open-source",
  },
];
