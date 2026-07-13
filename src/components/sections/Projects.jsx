import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, CATEGORIES_LIST } from "../../data/projects";

const FILTERS = ["All"].concat(CATEGORIES_LIST);

const PROJECT_BACKGROUNDS = {
  "01": "linear-gradient(135deg, #443b5d, #1b202d)",
  "02": "linear-gradient(135deg, #26485a, #1d2634)",
  "03": "linear-gradient(135deg, #4a373d, #25212b)",
  "04": "linear-gradient(135deg, #5a4d2f, #262935)",
  "05": "linear-gradient(135deg, #304b42, #1d2630)",
  "06": "linear-gradient(135deg, #49405d, #20232f)",
};

function hasWorkingLink(url) {
  return Boolean(url) && url !== "https://github.com" && !url.includes("example.com");
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12 12 2M7 2h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.84c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.54 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const codeLink = hasWorkingLink(project.github) ? project.github : null;
  const liveLink = hasWorkingLink(project.live) ? project.live : null;

  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-visual" style={{ background: PROJECT_BACKGROUNDS[project.id] }}>
        {project.image && (
          <img
            className="project-image"
            src={project.image}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}
        <span className="project-index">{project.id}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-body">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-detail">
          <div className="project-stack">
            {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          {(codeLink || liveLink) && (
            <div className="project-links">
              {codeLink && (
                <a href={codeLink} target="_blank" rel="noreferrer">
                  <GitHubIcon /> Code
                </a>
              )}
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <ExternalIcon /> Live site
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.tags.includes(activeFilter));

  return (
    <section className="section" id="projects">
      <div className="site-container">
        <div className="projects-header">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="display-title" style={{ marginTop: "25px" }}>
              A few things I&apos;ve<br /><em>made useful.</em>
            </h2>
          </div>
          <p className="body-copy">
            Web products, AI experiments, and automation tools designed to turn a messy task into a clearer experience.
          </p>
        </div>

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((filter) => (
            <button
              className={"filter-button" + (activeFilter === filter ? " is-active" : "")}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "All" ? "All work" : filter}
            </button>
          ))}
        </div>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <div className="projects-empty">No projects in this category yet.</div>
        )}
      </div>
    </section>
  );
}
