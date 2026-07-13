import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "ogorstephen485@gmail.com";

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2 7.5h11M8 2.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:" + EMAIL;
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="site-container">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-content">
            <p className="section-kicker">Let&apos;s work together</p>
            <h2 className="display-title">
              Have a problem worth<br /><em>untangling?</em>
            </h2>
            <p className="body-copy">
              I&apos;m open to thoughtful collaborations, product builds, and the kind of ambitious brief that needs both clear thinking and clean execution.
            </p>

            <a className="email-link" href={"mailto:" + EMAIL}>
              <span>{EMAIL}</span>
              <ArrowIcon />
            </a>

            <div className="contact-actions">
              <a className="button-primary" href={"mailto:" + EMAIL}>Send an email <ArrowIcon /></a>
              <button className="button-secondary" type="button" onClick={copyEmail}>
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>

            <div className="contact-socials">
              <a href="#projects">View selected work</a>
              <a href="#home">Back to top</a>
              <a href={"mailto:" + EMAIL}>Email directly</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
