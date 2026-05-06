export default function SectionLabel({ label, sub, centered = false, noMargin = false }) {
  return (
    <div
      style={{
        marginBottom: noMargin ? 0 : 56,
        textAlign: centered ? "center" : "left",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "#6366f1",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 4vw, 44px)",
          color: "#f0f0f0",
          margin: 0,
        }}
      >
        {sub}
      </h2>
    </div>
  );
}
