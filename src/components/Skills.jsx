import SKILLS from "../data/skills";
import SectionLabel from "./SectionLabel";
import useInView from "../hooks/useInView";

export default function Skills() {
  const [ref, visible] = useInView(0.1);

  return (
    <section
      id="skills"
      style={{
        padding: "100px clamp(20px, 5vw, 80px)",
        background: "#05050780",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel label="Skills" sub="Technologies I work with" />

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              style={{
                background: "#0d0d0f",
                border: "1px solid #1a1a1e",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "#6366f1",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {category}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((skill) => (
                  <div
                    key={skill}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#6366f1",
                      }}
                    />
                    <span style={{ color: "#ccc", fontSize: 13 }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
