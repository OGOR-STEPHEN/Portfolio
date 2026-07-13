/* ─────────────────────────────────────────────────────────────────
   animations.js — Shared Framer Motion variants for the portfolio
   Import what you need in each component.
───────────────────────────────────────────────────────────────── */

/* Fade up — standard section reveal */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

/* Fade in — no vertical movement */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

/* Fade in from left */
export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* Fade in from right */
export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* Stagger container — auto-staggers direct children */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/* Stagger item — used as child of staggerContainer */
export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Hero name — large dramatic reveal */
export const heroName = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

/* Scale up — for badges, chips */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ── Hover/tap variants (use with whileHover / whileTap) ──────── */

/* Primary button */
export const buttonPrimary = {
  rest:  { scale: 1,    y: 0,  boxShadow: "0 0px 0px rgba(232,255,71,0)"   },
  hover: { scale: 1.03, y: -2, boxShadow: "0 8px 28px rgba(232,255,71,0.3)" },
  tap:   { scale: 0.97, y: 0  },
};

/* Ghost button */
export const buttonGhost = {
  rest:  { scale: 1,    y: 0  },
  hover: { scale: 1.03, y: -2 },
  tap:   { scale: 0.97, y: 0  },
};

/* Card lift */
export const cardHover = {
  rest:  { y: 0,  borderColor: "rgba(255,255,255,0.06)" },
  hover: { y: -4, borderColor: "rgba(232,255,71,0.22)"  },
};

/* Underline link slide */
export const linkArrow = {
  rest:  { x: 0 },
  hover: { x: 5 },
};

/* Scroll indicator bounce */
export const scrollBounce = {
  animate: {
    y: [0, 8, 0],
    opacity: [0.4, 1, 0.4],
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
  },
};

/* Navbar pill / underline */
export const navUnderline = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

/* Progress bar fill */
export const progressBar = (level, delay = 0) => ({
  hidden: { width: "0%" },
  visible: {
    width: `${level}%`,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      delay: delay + 0.2,
    },
  },
});

/* Marquee (CSS animation — exported as a style string helper) */
export const marqueeStyle = {
  display: "flex",
  gap: "0.6rem",
  width: "max-content",
  animation: "marquee 28s linear infinite",
};
