import SectionLabel from "./SectionLabel";
import useInView from "../hooks/useInView";

const LINKS = [
  { label: "Email", href: "mailto:aakritiarya2005@gmail.com", val: "aakritiarya2005@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aakriti-arya", val: "/in/AakritiArya" },
  { label: "GitHub", href: "https://github.com/Aakriti0207", val: "github.com/Aakriti" },
  { label: "Resume", href: "https://drive.google.com/file/d/12JsmFUkBEXjdTZ1J_Vd9haDEnd0QwdCt/view?usp=sharing", val: "Resume- AakritiArya"}
];

export default function Contact() {
  const [ref, visible] = useInView(0.15);

  return (
    <section
      id="contact"
      style={{ padding: "100px clamp(20px, 5vw, 80px)", borderTop: "1px solid #111" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <SectionLabel label="Contact" sub="Let's connect" centered />

          <p
            style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}
          >
            Open to internships, collaborations, and interesting conversations.
            Drop me a message!
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#0d0d0f",
                  border: "1px solid #1a1a1e",
                  borderRadius: 10,
                  padding: "16px 24px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: 180,
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6366f1";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1a1a1e";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: "#6366f1",
                    letterSpacing: 2,
                    fontFamily: "'DM Mono', monospace",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </span>
                <span style={{ color: "#bbb", fontSize: 12 }}>{link.val}</span>
              </a>
            ))}
          </div>

          <div
            style={{
              color: "#333",
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Designed & built by Aakriti Arya · 2026
          </div>
        </div>
      </div>
    </section>
  );
}