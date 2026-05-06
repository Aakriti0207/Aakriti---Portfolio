import useInView from "../hooks/useInView";
import LivePreview from "./LivePreview";

export default function ProjectCard({ project, reversed }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="project-card-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s cubic-bezier(.16,1,.3,1)",
        direction: reversed ? "rtl" : "ltr",
      }}
    >
      {/* ── Info side ── */}
      <div style={{ direction: "ltr" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: project.color,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {project.emoji} {project.subtitle}
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            color: "#f0f0f0",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: "#777", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                background: `${project.color}18`,
                color: project.color,
                border: `1px solid ${project.color}33`,
                borderRadius: 6,
                padding: "3px 10px",
                fontSize: 11,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          {[
            ["GitHub", project.github, false],
            ["Live →", project.live, true],
          ].map(([label, url, isPrimary]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                background: isPrimary ? project.color : "transparent",
                color: isPrimary ? "#fff" : "#aaa",
                border: `1px solid ${isPrimary ? project.color : "#333"}`,
                borderRadius: 7,
                padding: "9px 20px",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Preview side ── */}
      <div style={{ direction: "ltr" }}>
        <LivePreview project={project} />
      </div>
    </div>
  );
}
