import { useState, useEffect, useRef } from "react";

/**
 * LivePreview
 * Loads the project's deployed URL inside a scaled-down browser frame.
 * Falls back gracefully if the site blocks iframe embedding.
 */
export default function LivePreview({ project }) {
  const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "blocked"
  const iframeRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    setStatus("loading");
    // Treat no onLoad after 6 s as "blocked by CSP / X-Frame-Options"
    timerRef.current = setTimeout(() => setStatus("blocked"), 6000);
    return () => clearTimeout(timerRef.current);
  }, [project.liveUrl]);

  const handleLoad = () => {
    clearTimeout(timerRef.current);
    setStatus("loaded");
  };

  const handleError = () => {
    clearTimeout(timerRef.current);
    setStatus("blocked");
  };

  return (
    <div
      style={{
        background: "#0d0d0f",
        border: "1px solid #222",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: `0 0 60px ${project.color}22`,
        height: 340,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Browser chrome ── */}
      <div
        style={{
          background: "#161618",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderBottom: "1px solid #222",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />

        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: "#222",
            borderRadius: 6,
            height: 20,
            margin: "0 8px",
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
            gap: 4,
          }}
        >
          {/* Status dot */}
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              flexShrink: 0,
              background:
                status === "loaded"
                  ? "#27c93f"
                  : status === "blocked"
                  ? "#ff5f56"
                  : "#ffbd2e",
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: "#555",
              fontFamily: "monospace",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.liveUrl}
          </span>
        </div>

        {/* Open in new tab */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#555", fontSize: 10, textDecoration: "none", flexShrink: 0 }}
          title="Open in new tab"
        >
          ↗
        </a>
      </div>

      {/* ── Content area ── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>

        {/* Loading spinner */}
        {status === "loading" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#0d0d0f",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                border: `2px solid ${project.color}33`,
                borderTop: `2px solid ${project.color}`,
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <span style={{ fontSize: 11, color: "#444", fontFamily: "monospace" }}>
              Loading preview…
            </span>
          </div>
        )}

        {/* Blocked fallback */}
        {status === "blocked" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#0d0d0f",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              padding: 24,
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: 28 }}>{project.emoji}</div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{ fontSize: 12, color: "#e0e0e0", fontWeight: 600, marginBottom: 6 }}
              >
                {project.title}
              </div>
              <div
                style={{ fontSize: 11, color: "#555", lineHeight: 1.6, marginBottom: 16 }}
              >
                This site restricts iframe embedding.
                <br />
                Open it directly for the full experience.
              </div>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                background: project.color,
                color: "#fff",
                textDecoration: "none",
                borderRadius: 8,
                padding: "9px 20px",
                fontSize: 12,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Open Live Site ↗
            </a>
          </div>
        )}

        {/*
         * The iframe is always mounted so onLoad fires.
         * Scale trick: render at 200% width/height then scale(0.5)
         * so the full desktop layout fits neatly inside the frame.
         */}
        <iframe
          ref={iframeRef}
          src={project.liveUrl}
          title={`${project.title} live preview`}
          onLoad={handleLoad}
          onError={handleError}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          style={{
            width: "200%",
            height: "200%",
            border: "none",
            transform: "scale(0.5)",
            transformOrigin: "0 0",
            opacity: status === "loaded" ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: status === "loaded" ? "auto" : "none",
          }}
        />
      </div>
    </div>
  );
}
