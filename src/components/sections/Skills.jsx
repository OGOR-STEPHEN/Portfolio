import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    index: "01",
    title: "Front-end systems",
    description: "Responsive interfaces that are fast, accessible, and precise enough to make a product feel trustworthy.",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    index: "02",
    title: "Product engineering",
    description: "The connective work between an idea, a usable flow, a dependable API, and a production-ready release.",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Git", "Vercel"],
  },
  {
    index: "03",
    title: "AI & automation",
    description: "Practical tools and workflows that reduce repetitive work while keeping people in control of the outcome.",
    skills: ["OpenAI", "Python", "Playwright", "Webhooks", "Integrations"],
  },
];

const TOOLBELT = [
  "Figma", "GitHub", "VS Code", "npm", "JSON", "Markdown", "Responsive design", "UI/UX", "CI/CD",
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="site-container">
        <div className="skills-heading">
          <div>
            <p className="section-kicker">Toolkit</p>
            <h2 className="display-title" style={{ marginTop: "25px" }}>
              From first idea<br />to <em>working system.</em>
            </h2>
          </div>
          <p className="body-copy">
            A flexible toolkit for building products that look considered and work hard behind the scenes.
          </p>
        </div>

        <div className="skill-list">
          {CAPABILITIES.map((capability, index) => (
            <motion.article
              className="skill-row"
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="skill-title"><span className="skill-index">{capability.index}</span>{capability.title}</h3>
              <p className="skill-description">{capability.description}</p>
              <div className="skill-tags">
                {capability.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="toolbelt" aria-label="Additional tools">
          {TOOLBELT.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </section>
  );
}
