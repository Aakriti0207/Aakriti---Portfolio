import SectionLabel from "./SectionLabel";
import useInView from "../hooks/useInView";

const ACHIEVEMENTS = [
  ["👩‍💻", "350+ LeetCode", "Consistent DSA practice across platforms"],
  ["🏆", "Junior Council- Anveshan", "Mentored 6+ juniors,taking initiative in executing technical events."],
  ["⚔️", "Smart India Hackathon", "Qualified internal rounds twice"],
  ["🎖️", "NCC B-Certificate", "Completed CATC-1 residential camp"],
  ["📸", "Social Media Head- Drishti", "Manage a 20+ member team"]
]
export default function About() {
  const [ref, visible] = useInView(0.15);

  return (
    <section id="about" style={{ padding: "100px clamp(20px, 5vw, 80px)" }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Bio */}
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s ease",
          }}
        >
          <SectionLabel label="About" sub="My story" noMargin />

          <p style={{ color: "#777", lineHeight: 1.9, fontSize: 15, marginBottom: 20, marginTop: 40 }}>
            I'm a Computer Science student at BPIT (2024–28), specialising in
            frontend development and software engineering. Currently maintaining
            a CGPA of 9.28 with a minor in Data Science.
          </p>
          <p style={{ color: "#777", lineHeight: 1.9, fontSize: 15, marginBottom: 20 }}>
            My projects range from AI-powered debate platforms to canvas editors,
            solving real problems with clean, purposeful code. I enjoy the
            challenge of turning complex ideas into intuitive UIs.
          </p>
          <p style={{ color: "#777", lineHeight: 1.9, fontSize: 15 }}>
            Beyond code, I mentor juniors through Anveshan BPIT, lead digital
            campaigns as Joint Social Media Head for Rotaract Club – Drishti,
            and hold an NCC B-Certificate. I believe great engineers are shaped
            by community, discipline, and curiosity.
          </p>
        </div>

        {/* Achievement cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {ACHIEVEMENTS.map(([icon, title, desc]) => (
            <div
              key={title}
              style={{
                background: "#0d0d0f",
                border: "1px solid #1a1a1e",
                borderRadius: 10,
                padding: "16px 20px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 20 }}>{icon}</span>
              <div>
                <div
                  style={{ color: "#e0e0e0", fontSize: 14, fontWeight: 600, marginBottom: 2 }}
                >
                  {title}
                </div>
                <div style={{ color: "#666", fontSize: 12 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
