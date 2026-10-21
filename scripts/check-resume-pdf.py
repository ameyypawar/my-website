"""Check that resume parsers read the generated PDF the way people see it.

Runs pdftotext and pdfminer.six with its default layout analysis (the one many
Python resume parsers use, and the one that misread the old Word PDF). Fails on
anything a parser would trip over: the name not being the first line, sections
out of order, more than one page, fonts without a text mapping, replacement or
private-use characters, or screen-only text leaking into the PDF.

Usage: python scripts/check-resume-pdf.py path/to/resume.pdf
"""

import subprocess
import sys

from pdfminer.high_level import extract_text

NAME = "Amey Pawar"

# In page order. Matched case-insensitively, each after the previous one.
EXPECTED_ORDER = [
    NAME,
    "Software Engineer",
    "Mumbai, India",
    "May 2027",
    "ameypawar1237@gmail.com",
    "Experience",
    "OpenObserve",
    "gitoxide",
    "Projects",
    "Education",
    "University of Mumbai",
    "Skills",
]

# Screen-only text that must not print.
FORBIDDEN = ["Print / Save as PDF", "Download PDF", "Play Breakout", "Get in touch"]


def run(*cmd: str) -> str:
    return subprocess.run(cmd, check=True, capture_output=True, text=True).stdout


def check_text(source: str, text: str, errors: list[str]) -> None:
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    if not lines or lines[0] != NAME:
        first = lines[0] if lines else "nothing"
        errors.append(f"{source}: first line is {first!r}, not {NAME!r}")

    lowered = text.lower()
    pos = 0
    for needle in EXPECTED_ORDER:
        found = lowered.find(needle.lower(), pos)
        if found < 0:
            errors.append(f"{source}: {needle!r} is missing or out of order")
        else:
            pos = found + len(needle)

    bad = sorted({c for c in text if c == "�" or 0xE000 <= ord(c) <= 0xF8FF})
    if bad:
        errors.append(f"{source}: unreadable characters {[hex(ord(c)) for c in bad]}")

    for needle in FORBIDDEN:
        if needle.lower() in lowered:
            errors.append(f"{source}: screen-only text {needle!r} is in the PDF")


def main(path: str) -> int:
    errors: list[str] = []

    for line in run("pdfinfo", path).splitlines():
        if line.startswith("Pages:") and int(line.split()[1]) != 1:
            errors.append(f"the PDF has {line.split()[1]} pages, not 1")

    # pdffonts rows end with: emb sub uni object-number generation
    for row in run("pdffonts", path).splitlines()[2:]:
        cols = row.split()
        emb, uni = cols[-5], cols[-3]
        if emb != "yes" or uni != "yes":
            errors.append(f"font {cols[0]} has emb={emb}, uni={uni}")

    check_text("pdftotext", run("pdftotext", path, "-"), errors)
    check_text("pdfminer", extract_text(path), errors)

    for error in errors:
        print(f"FAIL: {error}")
    if errors:
        return 1
    print("Resume PDF OK: one page, fonts embedded with text maps, reading order as expected.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1]))
