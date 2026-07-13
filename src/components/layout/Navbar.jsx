import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/animations";
import DarkModeToggle from "../ui/DarkModeToggle";
import { useTheme } from "../../context/ThemeContext";
import OgorStephenLogo from "../ui/OgorStephenLogo";

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

const overlayVariants = {
  hidden:  { x: "100%", transition: { duration: 0.45, ease: [0.77, 0, 0.18, 1] } },
  visible: { x: "0%",   transition: { duration: 0.45, ease: [0.77, 0, 0.18, 1] } },
};

const mobLinkVariants = {
  hidden:  { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 },
  }),
};

export default function Navbar() {
  const { isDark } = useTheme();
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Theme tokens ───────────────────────────────────────── */
  const bg = isDark
    ? (scrolled ? "rgba(10,10,10,0.92)"    : "transparent")
    : (scrolled ? "rgba(248,248,245,0.94)" : "transparent");
  const borderColor = scrolled
    ? isDark ? "rgba(232,255,71,0.08)" : "rgba(0,0,0,0.09)"
    : "transparent";
  const logoColor  = isDark ? "#f0f0f0" : "#0a0a0a";
  const linkColor  = isDark ? "#888"    : "#666";
  const linkHover  = isDark ? "#f0f0f0" : "#0a0a0a";
  const barColor   = isDark ? "#e8e8e8" : "#1a1a1a";
  const mobOverlay = isDark ? "#0f0f0f" : "#f5f5f0";
  const mobText    = isDark ? "#f0f0f0" : "#1a1a1a";
  const mobMeta    = isDark ? "#444"    : "#bbb";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        .nav-root  { font-family: 'DM Mono', monospace; }
        .logo-link  { display: inline-flex; align-items: center; text-decoration: none; }
        .nav-link   { position: relative; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; }
        .mob-link  { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2rem, 7vw, 3.5rem); letter-spacing: -0.02em; text-decoration: none; line-height: 1.1; }
        .mob-index { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.12em; margin-right: 1rem; user-select: none; }
        .bar { display: block; width: 22px; height: 1.5px; transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease; transform-origin: center; }
        .bar-top.open { transform: translateY(5.75px) rotate(45deg); }
        .bar-mid.open { opacity: 0; width: 0; }
        .bar-bot.open { transform: translateY(-5.75px) rotate(-45deg); }
        .mob-socials a { font-family: 'DM Mono', monospace; font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: color 0.2s; }
      `}</style>

      <motion.header
        className="nav-root fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          background: bg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: `1px solid ${borderColor}`,
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>

          {/* Logo */}
          <motion.a
            href="#home"
            className="logo-link"
            onClick={(e) => handleNav(e, "#home")}
            aria-label="Ogor Stephen — home"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ flexShrink: 0 }}
          >
            <OgorStephenLogo isDark={isDark} height={28} />
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: "2.5rem", alignItems: "center", flex: 1, justifyContent: "center" }}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <motion.a key={href} href={href} className="nav-link"
                  onClick={(e) => handleNav(e, href)}
                  style={{ color: isActive ? "#e8ff47" : linkColor }}
                  whileHover={{ color: linkHover }}
                  transition={{ duration: 0.15 }}
                >
                  {label}
                  {isActive && (
                    <motion.span layoutId="nav-underline"
                      style={{ position: "absolute", left: 0, bottom: "-2px", height: "1.5px", width: "100%", background: "#e8ff47" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop right cluster */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "1rem", flexShrink: 0 }}>
            <DarkModeToggle />
            <motion.a href="#contact" onClick={(e) => handleNav(e, "#contact")}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0a0a0a", background: "#e8ff47", padding: "0.5rem 1.2rem", borderRadius: "2px", textDecoration: "none" }}
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 6px 20px rgba(232,255,71,0.3)" }}
              whileTap={{ scale: 0.97 }} transition={{ duration: 0.18 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile right cluster */}
          <div className="flex md:hidden" style={{ alignItems: "center", gap: "0.75rem" }}>
            <DarkModeToggle />
            <button
              className="flex flex-col gap-[4.25px] p-2 -mr-2 focus:outline-none"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", zIndex: 60 }}
            >
              <span className={`bar bar-top${menuOpen ? " open" : ""}`} style={{ background: barColor }} />
              <span className={`bar bar-mid${menuOpen ? " open" : ""}`} style={{ background: barColor }} />
              <span className={`bar bar-bot${menuOpen ? " open" : ""}`} style={{ background: barColor }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div key="mobile-menu"
            variants={overlayVariants} initial="hidden" animate="visible" exit="hidden"
            style={{ position: "fixed", inset: 0, zIndex: 40, background: mobOverlay, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 10vw", transition: "background 0.35s ease" }}
          >
            <div style={{ position: "absolute", top: "24px", left: "1.5rem", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: mobMeta }}>
              Menu
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div key={href} custom={i} variants={mobLinkVariants} initial="hidden" animate="visible"
                  style={{ display: "flex", alignItems: "baseline" }}
                >
                  <span className="mob-index" style={{ color: mobMeta }}>0{i + 1}</span>
                  <motion.a href={href} className="mob-link"
                    onClick={(e) => handleNav(e, href)}
                    style={{ color: activeSection === href.replace("#", "") ? "#e8ff47" : mobText }}
                    whileHover={{ x: 8, color: "#e8ff47" }} transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.a>
                </motion.div>
              ))}
            </nav>

            <div className="mob-socials" style={{ position: "absolute", bottom: "2.5rem", left: "10vw", display: "flex", gap: "2rem" }}>
              {[
                { label: "GitHub",   href: "https://github.com/OGOR-STEPHEN"        },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/stephen-ogor-8960643a4/"      },
                { label: "Email",    href: "mailto:ogorstephen485@gmail.com"  },
              ].map(({ label, href }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ color: mobMeta }}
                  whileHover={{ color: mobText }} transition={{ duration: 0.15 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "absolute", right: 0, top: "10%", width: "3px", height: "30%", background: "#e8ff47", borderRadius: "2px 0 0 2px", transformOrigin: "top" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
