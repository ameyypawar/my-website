// Editable config for the /projects page.
//
// HIDE: repo names that should NOT appear on /projects.
//   Moving a repo between "shown" and "hidden" is a one-line edit here.
// DESCRIPTION_OVERRIDES: user-facing one-liners used when a repo's GitHub
//   description is blank or unhelpful. Overrides take priority over the
//   GitHub description, so you can fix copy without touching GitHub.

export const HIDE: string[] = [
  // Throwaway / coursework / experiments — kept off the public list.
  "ascii-art",
  "brute-force-testing-",
  "kali-linux-burp-suit",
  "guitar-tuner", // GitHub desc was "ss project" — junk; hidden.
  "Travel-Booking-Website", // GitHub desc was "project" — junk; hidden.
  "reddit-bot-amey-3-channel-version",
  "reddit-goodcaps-devdatta-diddy",
  "content-machine-comfyUI",
  "YT-snitch-LTX",
  "automaton-Sovereign-AI",
];

// Best-guess descriptions inferred from repo names. REVIEW AND REPLACE these
// with accurate copy — they intentionally claim nothing beyond what the name
// implies.
export const DESCRIPTION_OVERRIDES: Record<string, string> = {
  "insect-detection-and-fuzzy-Mamdani-FIS-vs-ANFIS":
    "Insect detection comparing a Mamdani fuzzy inference system against ANFIS.",
  "data-clean-room-lite":
    "A lightweight data clean room for privacy-preserving data collaboration.",
  "Lane-detection-And-finding-steering-angle":
    "Lane detection and steering-angle estimation from road imagery.",
  "stock-price-prediction":
    "Experiments in predicting stock prices from historical market data.",
  "virtual-lab": "A browser-based virtual lab for interactive experiments.",
  "MSrealty-project-landing-page":
    "Landing page for the MS Realty real-estate project.",
  "Fake-news-detection--headlines-":
    "Classifying news headlines as real or fake.",
  "content-machine": "Tooling for automating content creation pipelines.",
};
