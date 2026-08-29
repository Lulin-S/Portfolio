"use client";
import Image from "next/image";
const Reveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export default function Projects() {
  return (
    <>
      <section id="work" className="section project-section">
        <div className="shell">
          <div className="section-label">
            <span>01 / SELECTED WORK</span>
            <span>FLAGSHIP PRODUCT</span>
          </div>
          <Reveal>
            <div className="project-head">
              <div>
                <h2>PolyReader</h2>
                <p className="project-kicker">
                  From authentic text to an active learning system.
                </p>
              </div>
              <div className="project-meta">
                NEXT.JS / TYPESCRIPT / PYTHON
                <br />
                LEXICAL DATA / GENERATIVE AI
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="project-intro">
              PolyReader turns real-world language content into a continuous
              learning workflow — helping learners read, inspect, understand,
              save, and actively recall what they encounter.
            </p>
          </Reveal>
          <Reveal>
            <div className="project-actions">
              <a href="https://minnen.app/" target="_blank" rel="noreferrer">
                LIVE PRODUCT ↗
              </a>
              <span>SWEDISH LANGUAGE LEARNING · ACTIVE DEVELOPMENT</span>
            </div>
          </Reveal>
          <Reveal className="hero-shot">
            <Image
              src="/polyreader-word-guide.png"
              alt="PolyReader reader with contextual Swedish word guide"
              width={1536}
              height={1024}
            />
          </Reveal>
          <div className="workflow">
            <span>IMPORT</span>
            <b>→</b>
            <span>READ</span>
            <b>→</b>
            <span>INSPECT</span>
            <b>→</b>
            <span>UNDERSTAND</span>
            <b>→</b>
            <span>SAVE</span>
            <b>→</b>
            <span>REVIEW</span>
          </div>
          <div className="shot-grid">
            <Reveal>
              <div className="detail-shot sentence-detail">
                <Image
                  src="/polyreader-sentence-notes.png"
                  alt="PolyReader sentence notes in Chinese"
                  width={1280}
                  height={1180}
                />
              </div>
              <p className="caption">
                <b>UNDERSTAND IN CONTEXT</b> · Sentence-level translation,
                grammar and vocabulary guidance.
              </p>
            </Reveal>
            <Reveal>
              <div className="detail-shot recall-detail">
                <Image
                  src="/polyreader-recall.png"
                  alt="PolyReader Quick Recall"
                  width={760}
                  height={850}
                />
              </div>
              <p className="caption">
                <b>CONTINUE AFTER READING</b> · Saved material becomes retrieval
                practice.
              </p>
            </Reveal>
          </div>

          <div className="system-block">
            <div className="section-label inverse">
              <span>THE SYSTEM</span>
              <span>SURFACE → SYSTEM</span>
            </div>
            <h3>The interface is only half the system.</h3>
            <div className="architecture">
              <div className="arch-top">
                NEXT.JS
                <br />
                <small>Reader · Library · Review</small>
              </div>
              <div className="arch-line">↓</div>
              <div className="arch-top">PYTHON API</div>
              <div className="arch-line">↓</div>
              <div className="arch-cols">
                <div>
                  DOCUMENT PIPELINE
                  <small>
                    Language detection
                    <br />
                    Sentence splitting
                    <br />
                    Lexical analysis
                  </small>
                </div>
                <div>
                  LEXICAL DATA
                  <small>
                    310,030 lexical rows
                    <br />
                    Lemma lookup
                    <br />
                    Compound recovery
                  </small>
                </div>
                <div>
                  GENERATIVE ENRICHMENT
                  <small>
                    Translation
                    <br />
                    Context · Examples
                    <br />
                    Learning notes
                  </small>
                </div>
              </div>
              <div className="arch-line">↓</div>
              <div className="arch-top">LEARNING ARTIFACTS → REVIEW</div>
              <p className="arch-note">
                READABLE FIRST · HEAVIER TRANSLATION AND LEARNING ENRICHMENT
                CONTINUE ASYNCHRONOUSLY
              </p>
            </div>
          </div>

          <div className="change-story">
            <div className="section-label">
              <span>WHAT CHANGED</span>
              <span>STATE → PROVENANCE</span>
            </div>
            <Reveal>
              <div className="change-grid">
                <h3>The current setting stopped being enough.</h3>
                <div>
                  <p>
                    Early versions could treat the learner&apos;s current
                    support language as sufficient context. That assumption
                    broke once translations, saved learning items and review
                    material began surviving across sessions.
                  </p>
                  <p>
                    A learner could generate material in Chinese, switch their
                    support language to English, and still have historical
                    Chinese content available to a new session. The fix was not
                    another UI condition — the language had to become part of
                    the artifact itself.
                  </p>
                  <p className="change-result">
                    Document, saved-item and review data now carry their own
                    language provenance, so reuse is based on how content was
                    actually generated rather than what the user happens to
                    prefer now.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="decisions">
            <div className="section-label">
              <span>ENGINEERING DECISIONS</span>
              <span>04</span>
            </div>
            {[
              {
                n: "01",
                t: "Dictionary before generation",
                d: "Not every language question needs an LLM. PolyReader resolves Swedish vocabulary against a local database of 310,030 lexical rows first, including lemma lookup and compound recovery, then uses generative models where structured data stops being enough.",
              },
              {
                n: "02",
                t: "14.39s → 47ms",
                d: "A ~300-word lexical-analysis benchmark exposed an indexing problem rather than an inherently expensive language pipeline. SQLite NOCASE queries and the lexical indexes used incompatible collations, forcing expensive scans. Aligning the index collation moved the same analysis from 14.39 seconds to 47 milliseconds.",
                metric: "~300 WORDS · 14.39s → 47ms",
                note: "Measured lexical-analysis latency — not end-to-end import time.",
              },
              {
                n: "03",
                t: "Language belongs to the artifact",
                d: "A current preference does not describe historical data. Documents, saved items and review material preserve the language in which they were generated, preventing incompatible content from leaking across support-language changes.",
              },
              {
                n: "04",
                t: "Reading is not the end state",
                d: "Understanding a sentence once is not the same as learning it. Saved words and sentences continue into Quick Recall, connecting authentic reading with retrieval practice.",
              },
            ].map(({ n, t, d, metric, note }) => (
              <Reveal key={n} className="decision">
                <span className="decision-num">{n}</span>
                <h4>{t}</h4>
                <div className="decision-body">
                  <p>{d}</p>
                  {metric && (
                    <div className="decision-metric">
                      <strong>{metric}</strong>
                      <small>{note}</small>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section">
        <div className="shell">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <span>PRODUCT EXPERIMENT</span>
          </div>
          <Reveal>
            <div className="project-head">
              <div>
                <h2>InnerView</h2>
                <p className="project-kicker">
                  Seeing the patterns a single moment can&apos;t reveal.
                </p>
              </div>
              <div className="project-meta">
                LONGITUDINAL AI MEMORY
                <br />
                PRODUCT / INTERACTION DESIGN
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="project-intro">
              Most reflection tools understand one entry at a time. InnerView
              explores a different question:{" "}
              <em>
                what becomes possible when reflection has memory across weeks
                and months?
              </em>
            </p>
          </Reveal>
          <Reveal>
            <div className="project-actions inner-actions">
              <a
                href="https://www.innerview.one/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW MVP ↗
              </a>
              <span>LONGITUDINAL REFLECTION · PRODUCT EXPERIMENT</span>
            </div>
          </Reveal>
          <div className="inner-images">
            <Reveal>
              <Image
                src="/innerview-insights.png"
                alt="InnerView insights and recurring patterns"
                width={1680}
                height={930}
              />
            </Reveal>
            <Reveal>
              <Image
                src="/innerview-reflect.png"
                alt="InnerView guided reflection"
                width={1340}
                height={1140}
              />
            </Reveal>
          </div>
          <div className="pattern-demo">
            <div className="moments">
              <div>
                <b>MOMENT 01</b>
                <p>
                  No reply → “Maybe I don&apos;t matter” → unease → reassurance
                  seeking
                </p>
              </div>
              <div>
                <b>MOMENT 02</b>
                <p>
                  Short feedback → “Maybe I&apos;m not good enough” → anxiety →
                  overchecking
                </p>
              </div>
              <div>
                <b>MOMENT 03</b>
                <p>
                  Cancelled plan → “Maybe they don&apos;t want me there” → hurt
                  → withdrawal
                </p>
              </div>
            </div>
            <div className="pattern-arrow">→</div>
            <div className="possible">
              <span>POSSIBLE PATTERN</span>
              <p>
                Ambiguous signal
                <br />↓<br />
                Negative self-interpretation
                <br />↓<br />
                Emotional distress
                <br />↓<br />
                Reassurance / withdrawal
              </p>
            </div>
          </div>
          <Reveal>
            <blockquote>
              The AI proposes the pattern.
              <br />
              <em>The user decides whether it is true.</em>
            </blockquote>
          </Reveal>
          <div className="memory-flow">
            <span>
              NATURAL
              <br />
              CONVERSATION
            </span>
            <b>→</b>
            <span>
              STRUCTURED
              <br />
              MOMENT
            </span>
            <b>→</b>
            <span>
              CROSS-EVENT
              <br />
              COMPARISON
            </span>
            <b>→</b>
            <span>
              TENTATIVE
              <br />
              PATTERN
            </span>
            <b>→</b>
            <span>
              CONFIRM / CORRECT
              <br />/ REJECT
            </span>
            <b>→</b>
            <span>
              LONGITUDINAL
              <br />
              PROFILE
            </span>
          </div>
          <div className="product-decision">
            <div className="section-label">
              <span>PRODUCT DECISION</span>
              <span>THREE MODES → TWO</span>
            </div>
            <Reveal>
              <div className="change-grid">
                <h3>
                  Users shouldn&apos;t have to understand the system before they
                  can use it.
                </h3>
                <div>
                  <p>
                    Earlier versions separated Standard, Deep and Guided Log
                    interactions. The distinction added conceptual overhead at
                    exactly the moment the product was supposed to make
                    reflection feel easier.
                  </p>
                  <p>
                    The interaction model was reduced to two surfaces:{" "}
                    <strong>Chat</strong> for open, low-pressure conversation
                    and <strong>Reflect</strong> for a bounded, structured
                    reflection flow.
                  </p>
                  <p className="change-result">
                    <strong>Chat expands; Reflect condenses.</strong>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="inner-note">
              InnerView does not try to build a fixed psychological identity for
              the user. It maintains a revisable map of recurring patterns,
              supporting moments, confidence and change over time.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
