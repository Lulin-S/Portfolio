export default function Hero() {
  return (
    <section id="about" className="section hero-section">
      <div className="shell">
        <div className="hero-content">
          <div className="eyebrow-row">
            <span>00 / LULIN SHEN</span>
            <span>GOTHENBURG, SWEDEN</span>
          </div>

          <div className="hero-main">
            <h1 className="hero-title">
              I build thoughtful software products at the intersection of{" "}
              <em>engineering, AI, and learning.</em>
            </h1>
            <figure className="hero-portrait">
              <img src="/hero.JPG" alt="Portrait of Lulin Shen" />
            </figure>
          </div>

          <div className="hero-bottom">
            <p className="hero-copy">
              Software engineer with a background in production frontend
              development, now building end-to-end products shaped by AI,
              product thinking, and learning science.
            </p>
            <div className="hero-links">
              <a href="#work">Selected work ↓</a>
              <a
                href="https://github.com/Lulin-S"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/lulin-shen"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="/Lulin_Shen_2026_CV.pdf" target="_blank">
                Résumé ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
