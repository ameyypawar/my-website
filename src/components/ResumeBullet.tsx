import { Fragment } from "react";
import type { Bullet } from "@/data/resume";

// A resume bullet followed by its PR links, e.g. "… (#14010, #14085)".
export default function ResumeBullet({ bullet }: { bullet: Bullet }) {
  return (
    <>
      {bullet.text}
      {bullet.prs && bullet.prs.length > 0 && (
        <>
          {" ("}
          {bullet.prs.map((pr, i) => (
            <Fragment key={pr.url}>
              {i > 0 && ", "}
              <a
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {pr.label}
              </a>
            </Fragment>
          ))}
          {")"}
        </>
      )}
    </>
  );
}
