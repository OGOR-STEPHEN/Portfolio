/**
 * OgorStephenLogo.jsx
 *
 * SVG logo for OGOR STEPHEN — developer portfolio.
 * Concept: <OS/> in monospace code style.
 *
 * Props:
 *   isDark  — boolean, toggles fill colors for dark/light mode
 *   height  — number, controls rendered height (width scales automatically)
 */
export default function OgorStephenLogo({ isDark = true, height = 32 }) {
  // Aspect ratio of the viewBox: 120 × 32
  const width = height * (120 / 32);

  const bracket = "#e8ff47";                        // accent — same in both modes
  const text    = isDark ? "#f0f0f0" : "#0a0a0a";  // primary text
  const slash   = isDark ? "#e8ff47" : "#e8ff47";   // forward-slash stays accent

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ogor Stephen — OS"
      role="img"
    >
      {/*
        Layout (monospace grid, ~7px per char):
          <   — x: 0–9
          O   — x: 12–22
          S   — x: 24–34
          /   — x: 37–44
          >   — x: 47–56

        All glyphs sit on a 32px cap-height baseline.
        Stroke-only: crisp on any background, scales without blur.
      */}

      {/* ── Opening bracket  < ───────────────────────────── */}
      <polyline
        points="11,6 3,16 11,26"
        stroke={bracket}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── O ────────────────────────────────────────────── */}
      {/*
        Slightly squarish rect with large radius — feels modern/geometric
        rather than a plain ellipse.
      */}
      <rect
        x="16"
        y="6"
        width="14"
        height="20"
        rx="4"
        stroke={text}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── S ────────────────────────────────────────────── */}
      {/*
        Custom S path: top horizontal → curve → middle → curve → bottom horizontal.
        Hand-tuned for optical balance at small sizes.
      */}
      <path
        d="M45 8 C45 8 43 6 39 6 C35 6 33 9 33 12 C33 15 35 16 39 16 C43 16 45 17.5 45 21 C45 24.5 43 26 39 26 C35 26 33 24 33 24"
        stroke={text}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Forward slash  / ─────────────────────────────── */}
      <line
        x1="51"
        y1="26"
        x2="57"
        y2="6"
        stroke={slash}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* ── Closing bracket  > ───────────────────────────── */}
      <polyline
        points="62,6 70,16 62,26"
        stroke={bracket}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Blinking cursor _ ────────────────────────────── */}
      {/*
        A subtle underscore after the closing bracket.
        Styled as a short baseline stroke in accent color — dev aesthetic.
      */}
      <line
        x1="74"
        y1="26"
        x2="84"
        y2="26"
        stroke={bracket}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
