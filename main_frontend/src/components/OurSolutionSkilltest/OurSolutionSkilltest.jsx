import React from 'react';
import './OurSolutionSkilltest.css';

/**
 * PUBLIC_INTERFACE
 * OurSolutionSkilltest
 * A presentational component rendering the "Our solution: skilltest" screen based on the provided Figma export.
 * Images are served from the public /assets folder. Ensure the assets are copied from assets/figmaimages to public/assets.
 */
const OurSolutionSkilltest = () => {
  return (
    <section className="skilltest-wrapper" aria-labelledby="skilltest-title">
      <div className="skilltest-hero">
        <div className="skilltest-hero-content">
          <h1 id="skilltest-title" className="skilltest-title">Our solution: skilltest</h1>
          <p className="skilltest-subtitle">
            Evaluate candidates and teams with realistic, hands‑on assessments tailored to real work.
          </p>
          <div className="skilltest-cta-group">
            <a className="btn-primary" href="#get-started">Get started</a>
            <a className="btn-secondary" href="#learn-more">Learn more</a>
          </div>
        </div>
        <div className="skilltest-hero-art">
          <img
            src="/assets/figma_image_2218_5203.png"
            alt="Illustration of assessment workflow"
            className="hero-art-img"
          />
        </div>
      </div>

      <div className="skilltest-features">
        <div className="feature-card">
          <img src="/assets/figma_image_2218_5332.png" alt="" aria-hidden="true" className="feature-icon" />
          <h3 className="feature-title">Real‑world tasks</h3>
          <p className="feature-desc">
            Assess practical skills with tasks that mirror on‑the‑job scenarios instead of trivia.
          </p>
        </div>
        <div className="feature-card">
          <img src="/assets/figma_image_2218_5346.png" alt="" aria-hidden="true" className="feature-icon" />
          <h3 className="feature-title">Auto‑scored insights</h3>
          <p className="feature-desc">
            Instant, unbiased scoring with detailed breakdowns and signal on strengths and gaps.
          </p>
        </div>
        <div className="feature-card">
          <img src="/assets/figma_image_2218_5353.png" alt="" aria-hidden="true" className="feature-icon" />
          <h3 className="feature-title">Flexible templates</h3>
          <p className="feature-desc">
            Start from curated templates or bring your own tasks to match your context and stack.
          </p>
        </div>
      </div>

      <div className="skilltest-sample">
        <div className="sample-media">
          <img
            src="/assets/figma_image_2218_5405.png"
            alt="Sample skill test interface preview"
            className="sample-img"
          />
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
          <a className="btn-primary" href="#view-demo">View demo</a>
        </div>
      </div>

      <div className="skilltest-logos">
        <img src="/assets/figma_image_2218_5285.png" alt="Logo 1" />
        <img src="/assets/figma_image_2218_5339.png" alt="Logo 2" />
        <img src="/assets/figma_image_2218_5342.png" alt="Logo 3" />
        <img src="/assets/figma_image_2218_5343.png" alt="Logo 4" />
        <img src="/assets/figma_image_2218_5344.png" alt="Logo 5" />
      </div>

      <div className="skilltest-footer-cta">
        <h2 className="footer-title">Ready to try skilltest?</h2>
        <p className="footer-desc">Create your first assessment in minutes with guided templates.</p>
        <a className="btn-primary btn-large" href="#get-started">Get started</a>
      </div>
    </section>
  );
};

export default OurSolutionSkilltest;
