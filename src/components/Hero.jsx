import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";
 
function useTypingLoop(words, speed = 180, pauseAfterWord = 1000) {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
 
  useEffect(() => {
    if (charIdx < words[wordIdx].length) {
      const t = setTimeout(() => {
        setDisplayed(words[wordIdx].slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const isLast = wordIdx === words.length - 1;
      const t = setTimeout(() => {
        setWordIdx(isLast ? 0 : (w) => w + 1);
        setCharIdx(0);
        setDisplayed("");
      }, pauseAfterWord);
      return () => clearTimeout(t);
    }
  }, [charIdx, wordIdx]);
 
  return { displayed, currentWord: wordIdx };
}
 
function TypingLine({ hook, targetWord, wordText }) {
  const { displayed, currentWord } = hook;
  const isMyTurn = currentWord === targetWord;
  const isDone = currentWord > targetWord;
  const text = isMyTurn ? displayed : isDone ? wordText : "";
 
  return (
    <>
      {text}
      {isMyTurn && (
        <span style={{ opacity: 0.6, animation: "blink 0.7s step-end infinite" }}>|</span>
      )}
    </>
  );
}
 
export default function Hero() {
  const [ref, visible] = useInView(0.1);
  const typingHook = useTypingLoop(["Aakriti", "Arya"], 180, 800);
 
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(20px, 5vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "60%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #6366f115 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "20%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #ec489910 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
 
      {/* Content wrapper */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* LEFT: text block */}
        <div
          ref={ref}
          style={{
            maxWidth: 600,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#6366f1",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            &gt; Hello, world
          </div>
 
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 7vw, 80px)",
              fontWeight: 700,
              color: "#f0f0f0",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            <TypingLine hook={typingHook} targetWord={0} wordText="Aakriti" />
            <br />
            <span style={{ color: "#6366f1" }}>
              <TypingLine hook={typingHook} targetWord={1} wordText="Arya" />
            </span>
          </h1>
 
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 14,
              color: "#888",
              letterSpacing: 1,
              marginBottom: 24,
            }}
          >
            Computer Science Student&nbsp;/&nbsp;Frontend Developer&nbsp;/&nbsp;Aspiring SWE
          </p>
 
          <p
            style={{
              fontSize: 16,
              color: "#777",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 540,
            }}
          >
            I build clean, functional interfaces and enjoy solving problems through
            code. Currently pursuing B.Tech in Computer Science (Minor: Data Science) at BPIT
            with a CGPA of 9.28.
          </p>
 
          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "#6366f1",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "13px 28px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 0.5,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#4f46e5";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#6366f1";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View Projects
            </button>
 
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "transparent",
                color: "#aaa",
                border: "1px solid #333",
                borderRadius: 8,
                padding: "13px 28px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 0.5,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#6366f1";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#333";
                e.target.style.color = "#aaa";
              }}
            >
              Contact Me
            </button>
          </div>
 
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/12JsmFUkBEXjdTZ1J_Vd9haDEnd0QwdCt/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 24,
              padding: "14px 32px",
              background: "transparent",
              border: "1.5px solid #6366f1",
              borderRadius: 8,
              color: "#fff",
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: 1,
              textDecoration: "none",
              fontFamily: "serif",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px #6366f155";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* <span style={{ fontSize: 16 }}>📄</span> */}
            View Resume
            <span style={{ fontSize: 12, opacity: 0.7 }}>↗</span>
          </a>
        </div>
 
        {/* RIGHT: cartoon avatar */}
        <div
          className="hero-avatar"
          style={{
            flexShrink: 0,
            width: "clamp(300px, 40vw, 550px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(.16,1,.3,1) 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "stretch",
          }}
        >
          <img
            src="/Aakriti-Avatar.png"
            alt="Aakriti cartoon avatar"
            style={{
              //width: "100%",
              maxWidth: 1000,
              objectFit: "contain",
              filter: "drop-shadow(0 0 40px #6366f133)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}