const EMAIL = "ogorstephen485@gmail.com";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-layout">
        <p className="footer-copy">© {new Date().getFullYear()} Ogor Stephen</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Work</a>
          <a href={"mailto:" + EMAIL}>Email</a>
        </div>
        <p className="footer-note">Designed with care / Built with React</p>
      </div>
    </footer>
  );
}
