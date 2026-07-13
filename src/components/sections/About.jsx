import { motion } from "framer-motion";

const METHODS = [
  {
    title: "Start with the signal",
    description: "I look for the real problem underneath the feature request, then give the product a clear job to do.",
  },
  {
    title: "Make complexity legible",
    description: "The best interface does not show every possibility. It makes the important next step feel obvious.",
  },
  {
    title: "Ship, learn, improve",
    description: "I value thoughtful momentum: a useful first version, honest feedback, and focused refinement.",
  },
];

const FIGURES = [
  { value: "20+", label: "Projects brought to life" },
  { value: "3+", label: "Years of hands-on building" },
  { value: "1", label: "Goal: make it useful" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="site-container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-kicker">A little about me</p>
            <h2 className="display-title" style={{ marginTop: "25px" }}>
              Build with intent,<br />
              then make it feel <em>inevitable.</em>
            </h2>
            <div className="about-copy">
              <p className="body-copy">
                I&apos;m drawn to work where thoughtful technology can remove friction. That might mean a polished interface, an AI-assisted workflow, or an automation that gives people their time back.
              </p>
              <p className="body-copy" style={{ marginTop: "17px" }}>
                My sweet spot is the overlap of <strong>product thinking, front-end craft, and practical engineering</strong> — moving from a rough idea to something people can actually use.
              </p>
            </div>
            <div className="about-meta">
              <span className="pill">Web applications</span>
              <span className="pill">AI workflows</span>
              <span className="pill">Automation systems</span>
            </div>
          </motion.div>

          <motion.div
            className="about-method"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {METHODS.map((method, index) => (
              <article className="method-row" key={method.title}>
                <span className="method-number">0{index + 1}</span>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
                <span className="method-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-figures"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          {FIGURES.map((figure) => (
            <div className="figure" key={figure.label}>
              <span className="figure-value">{figure.value}</span>
              <span className="figure-label">{figure.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
