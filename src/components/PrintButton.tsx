"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print or save resume as PDF"
      data-print-hide
      className="group inline-flex items-center gap-2 rounded-md-sm border border-outline/60 px-5 py-2.5 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <Printer
        size={16}
        aria-hidden="true"
        className="transition-transform group-hover:-translate-y-0.5"
      />
      Print / Save as PDF
    </button>
  );
}
