import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "Projects shaped" },
  { value: "3+", label: "Years building" },
  { value: "∞", label: "Curiosity for systems" },
];

const STEPS = [
  "Frame the real problem",
  "Design the useful path",
  "Build and refine",
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="site-container hero-layout">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-eyebrow">
            <span className="pill"><span className="live-dot" /> Available for select work</span>
            <span>Product engineer / 2026</span>
          </div>

          <h1 className="hero-title">
            I make digital<br />
            work feel <span className="accent-word">simple.</span>
          </h1>

          <p className="hero-intro">
            I&apos;m <strong>Ogor Stephen</strong>, a product-minded developer who turns ambitious ideas into clear, useful web experiences and automations.
          </p>

          <div className="hero-cta-row">
            <a className="button-primary" href="#projects">
              Explore my work
              <ArrowIcon />
            </a>
            <a className="button-secondary" href="#contact">
              Let&apos;s collaborate
            </a>
          </div>

          <div className="hero-footnotes">
            {STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="hero-visual"
          aria-label="How I approach product work"
          initial={{ opacity: 0, y: 34, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.86, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="signal-card">
            <div className="signal-topbar">
              <div className="signal-dots"><span /><span /><span /></div>
              <span className="signal-filename">build-flow.js</span>
            </div>
            <div className="signal-main">
              <div className="signal-status">
                <span>Current mode</span>
                <strong>Make it matter.</strong>
              </div>
              <div className="signal-steps">
                {STEPS.map((step, index) => (
                  <div className={"signal-step" + (index === 2 ? " is-current" : "")} key={step}>
                    <span className="signal-step-number">0{index + 1}</span>
                    <span>{step}</span>
                    <span className="signal-step-line" />
                  </div>
                ))}
              </div>
              <div className="signal-key"><b>↳</b> Build with care, not clutter.</div>
            </div>
          </div>
        </motion.aside>
      </div>

      <span className="hero-scroll">Scroll to explore</span>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1.5 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
