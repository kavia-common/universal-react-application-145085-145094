import React from 'react';
import './OurSolutionSkilltest.css';

/**
 * PUBLIC_INTERFACE
 * OurSolutionSkilltest
 * A presentational component rendering the "Our solution: skilltest" screen based on the provided Figma export.
 * Ocean Professional theme: blue primary, amber accents, minimalist clean UI, subtle gradients/shadows, rounded corners.
 * Images are served from the public /assets folder. Ensure the assets are copied from assets/figmaimages to public/assets.
 */
const OurSolutionSkilltest = () => {
  return (
    <section className="skilltest-wrapper" aria-labelledby="skilltest-title">
      {/* Decorative gradient background accent */}
      <div className="skilltest-backdrop" aria-hidden="true" />

      {/* Hero */}
      <div className="skilltest-hero">
        <div className="skilltest-hero-content">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" /> Assessment platform
          </div>
          <h1 id="skilltest-title" className="skilltest-title">
            Our solution: <span className="title-accent">skilltest</span>
          </h1>
          <p className="skilltest-subtitle">
            Evaluate candidates and teams with realistic, hands‑on assessments tailored to real work.
          </p>
          <div className="skilltest-cta-group">
            <a className="btn-primary btn-large" href="#get-started">
              Get started
              <span className="btn-glow" aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#learn-more" aria-label="Learn more about skilltest">
              Learn more
            </a>
          </div>
          <ul className="hero-highlights" aria-label="Key highlights">
            <li>Browser‑based, secure workspace</li>
            <li>Language‑aware scoring</li>
            <li>Playback & diffs for review</li>
          </ul>
        </div>
        <div className="skilltest-hero-art">
          <figure className="hero-figure">
            <img
              src="/assets/figma_image_2218_5203.png"
              alt="Illustration of assessment workflow"
              className="hero-art-img"
              loading="eager"
            />
            <figcaption className="sr-only">Visual overview of the skilltest assessment workflow</figcaption>
          </figure>
        </div>
      </div>

      {/* Features */}
      <div className="skilltest-section-header">
        <h2 className="section-title">Why teams choose skilltest</h2>
        <p className="section-subtitle">Practical, fair, and scalable assessments that reflect how work really happens.</p>
      </div>

      <div className="skilltest-features">
        <article className="feature-card">
          <div className="feature-badge" aria-hidden="true">1</div>
          <img src="/assets/figma_image_2218_5332.png" alt="" aria-hidden="true" className="feature-icon" />
          <h3 className="feature-title">Real‑world tasks</h3>
          <p className="feature-desc">
            Assess practical skills with tasks that mirror on‑the‑job scenarios instead of trivia.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-badge" aria-hidden="true">2</div>
          <img src="/assets/figma_image_2218_5346.png" alt="" aria-hidden="true" className="feature-icon" />
          <h3 className="feature-title">Auto‑scored insights</h3>
          <p className="feature-desc">
            Instant, unbiased scoring with detailed breakdowns and signal on strengths and gaps.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-badge" aria-hidden="true">3</div>
          <img src="/assets/figma_image_2218_5353.png" alt="" aria-hidden="true" className="feature-icon" />
          <h3 className="feature-title">Flexible templates</h3>
          <p className="feature-desc">
            Start from curated templates or bring your own tasks to match your context and stack.
          </p>
        </article>
      </div>

      {/* Sample */}
      <div className="skilltest-sample">
        <div className="sample-media">
          <div className="media-frame">
            <img
              src="/assets/figma_image_2218_5405.png"
              alt="Sample skill test interface preview"
              className="sample-img"
              loading="lazy"
            />
            <div className="media-shimmer" aria-hidden="true" />
          </div>
        </div>
        <div className="sample-content">
          <h2 className="sample-title">See how it works</h2>
          <p className="sample-desc">
            Candidates complete realistic exercises in a secure, browser‑based environment.
            You get structured results, code diffs, and playback to understand decision‑making.
          </p>
          <ul className="sample-list">
            <li>Works in the browser, no local setup required</li>
            <li>Language/framework aware scoring and linting</li>
            <li>Review submissions with timelines and diffs</li>
          </ul>
          <a className="btn-primary" href="#view-demo" aria-label="View demo of skilltest">
            View demo
            <span className="btn-glow" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Logos */}
      <div className="skilltest-logos" aria-label="Trusted by">
        <img src="/assets/figma_image_2218_5285.png" alt="Logo 1" loading="lazy" />
        <img src="/assets/figma_image_2218_5339.png" alt="Logo 2" loading="lazy" />
        <img src="/assets/figma_image_2218_5342.png" alt="Logo 3" loading="lazy" />
        <img src="/assets/figma_image_2218_5343.png" alt="Logo 4" loading="lazy" />
        <img src="/assets/figma_image_2218_5344.png" alt="Logo 5" loading="lazy" />
      </div>

      {/* Footer CTA */}
      <div className="skilltest-footer-cta">
        <h2 className="footer-title">Ready to try skilltest?</h2>
        <p className="footer-desc">Create your first assessment in minutes with guided templates.</p>
        <a className="btn-primary btn-large" href="#get-started">
          Get started
          <span className="btn-glow" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default OurSolutionSkilltest;
