import { useState, useEffect } from "react";

const LINKS = ["home", "projects", "skills", "about", "contact"];

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(8,8,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1e" : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(20px, 5vw, 80px)",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          AA<span style={{ color: "#6366f1" }}>.</span>
        </button>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex", gap: 36 }}>
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === link ? "#6366f1" : "#888",
                fontSize: 13,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.target.style.color = active === link ? "#6366f1" : "#888")
              }
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: 20,
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#0d0d0f",
            borderTop: "1px solid #1a1a1e",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#aaa",
                fontSize: 14,
                textAlign: "left",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
