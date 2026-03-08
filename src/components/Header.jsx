import Logo from "../assets/Logo.png";
export default function Header() {
  const navLinks = ["Projects", "Tech Stack", "Resume", "Contact"];
  return (
    <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap');
      .nav-link { transition: background 0.15s ease; }
      .nav-link:hover { background: #000; color: #E0E0E0; }
      .nav-border { border-left: 3px solid black; }
      @media (min-width: 1024px) { .nav-border { border-left-width: 5px; } }
      `}</style>
      <header style={{ width: "100%", display: "flex", alignItems: "center" }}>
      {/* Logo */}
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
      <img
      src={Logo}
      alt="Header Logo"
      style={{ width: "clamp(36px, 4vw, 56px)", height: "clamp(36px, 4vw, 56px)", display: "block", objectFit: "cover" }}
      />
      </div>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "stretch", marginLeft: "auto" }}>
      {navLinks.map((link, i) => (
        <button
        key={link}
        onClick={() => { const el = document.getElementById(link.toLowerCase().replace(" ", "-")); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
        className={i !== 0 ? "nav-link nav-border" : "nav-link"}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.6rem, 0.85vw, 0.8rem)",
                                  padding: "0 clamp(0.75rem, 1.5vw, 1.5rem)",
                                  height: "clamp(36px, 4vw, 56px)",
                                  fontWeight: 500,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.1em",
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "black",
        }}
        >
        {link}
        </button>
      ))}
      </nav>
      </header>
      </>
  );
}
