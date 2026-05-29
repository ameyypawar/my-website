export type Project = {
  name: string;
  tagline: string;
  url: string;
  status: "live";
  wide?: boolean;
};

export const featuredProjects: Project[] = [
  {
    name: "gfix",
    tagline:
      "Resolve git merge conflicts with semantic understanding instead of line-based diffing.",
    url: "https://gfix.space",
    status: "live",
    wide: true,
  },
  {
    name: "gitfix",
    tagline:
      "A VS Code extension that resolves merge conflicts the way a teammate would — understands intent, not just text diffs.",
    url: "https://gitfix.pro",
    status: "live",
  },
  {
    name: "tubio",
    tagline:
      "A Chrome extension that turns YouTube into a focused workspace — clean transcripts, distraction controls, and an AI chat that knows the video you're watching.",
    url: "https://tubio.pro",
    status: "live",
  },
];
