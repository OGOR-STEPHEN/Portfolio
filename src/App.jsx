import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function AppInner() {
  const { isDark } = useTheme();

  const themeTokens = isDark
    ? {
        "--bg": "#111216",
        "--surface": "#181a20",
        "--surface-raised": "#20232b",
        "--text": "#f7f5f1",
        "--muted": "#a6a5ae",
        "--quiet": "#70717b",
        "--line": "rgba(247,245,241,0.11)",
        "--line-strong": "rgba(247,245,241,0.2)",
        "--accent": "#ff765d",
        "--accent-soft": "rgba(255,118,93,0.13)",
        "--accent-ink": "#1a1615",
        "--violet": "#b9b1ff",
        "--glow": "rgba(185,177,255,0.15)",
      }
    : {
        "--bg": "#f6f3ed",
        "--surface": "#ece8e1",
        "--surface-raised": "#ffffff",
        "--text": "#19191d",
        "--muted": "#696970",
        "--quiet": "#929198",
        "--line": "rgba(25,25,29,0.12)",
        "--line-strong": "rgba(25,25,29,0.22)",
        "--accent": "#e85d43",
        "--accent-soft": "rgba(232,93,67,0.12)",
        "--accent-ink": "#fffaf5",
        "--violet": "#635ccc",
        "--glow": "rgba(99,92,204,0.12)",
      };

  return (
    <div className="site-shell" data-theme={isDark ? "dark" : "light"} style={themeTokens}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
