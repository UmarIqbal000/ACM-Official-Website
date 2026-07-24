import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="enhanced-site-footer centralized-footer">
      {/* Pre-Footer Newsletter Callout (Centralized) */}
      <div className="pre-footer-banner">
        <div className="footer-top-container">
          <div className="newsletter-card white-card centered-newsletter">
            <div className="newsletter-text text-center">
              <span className="section-eyebrow">STAY INFORMED</span>
              <h3 className="newsletter-title">Subscribe to Chapter Updates & Hackathons</h3>
              <p className="newsletter-sub">Get direct invitations for upcoming workshops, coding competitions, and guest keynotes.</p>
            </div>

            <div className="newsletter-form-wrapper centered-form">
              {subscribed ? (
                <div className="subscribed-success-badge">
                  <span>✓ You're subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your university email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="btn-primary-accent newsletter-btn">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Centralized Footer Content */}
      <div className="footer-main-content">
        <div className="footer-top-container">
          {/* Centered Brand Header Block */}
          <div className="centralized-brand-header">
            <Link to="/" className="footer-brand-logo centered-logo-flex">
              <img 
                src="/ChatGPT Image Jul 25, 2026, 01_21_53 AM.png" 
                alt="ACM IILM Logo" 
                className="enhanced-footer-logo centered-img" 
              />
              <div className="footer-brand-titles text-center">
                <span className="footer-chapter-name">ACM Students Chapter</span>
                <span className="footer-univ-name"><span className="blue-accent">IILM University</span>, Greater Noida</span>
              </div>
            </Link>

            <p className="footer-bio-text text-center centered-bio">
              The official Association for Computing Machinery (ACM) Student Chapter at IILM University, Greater Noida. Dedicated to advancing computing as a science & profession.
            </p>

            <div className="footer-status-pill centered-pill">
              <span className="live-status-dot" />
              <span>Chapter Roster Active • Knowledge Park II</span>
            </div>
          </div>

          {/* Centered Navigation Columns Grid */}
          <div className="centralized-footer-grid">
            {/* Column 1: Quick Navigation */}
            <div className="footer-nav-column text-center">
              <h4 className="footer-column-heading">Navigation</h4>
              <ul className="footer-nav-list centered-list">
                <li><Link to="/">Home Overview</Link></li>
                <li><Link to="/about">About & Leadership</Link></li>
                <li><Link to="/events">Events & Hackathons</Link></li>
                <li><Link to="/team">Organizational Hierarchy</Link></li>
                <li><Link to="/gallery">Photo Gallery Archives</Link></li>
                <li><Link to="/contact">Join ACM Chapter</Link></li>
              </ul>
            </div>

            {/* Column 2: Key Programs */}
            <div className="footer-nav-column text-center">
              <h4 className="footer-column-heading">Key Programs</h4>
              <ul className="footer-nav-list centered-list">
                <li><Link to="/events">AI Product Sprint 2026</Link></li>
                <li><Link to="/events">AI Agent Forge 2026</Link></li>
                <li><Link to="/events">AI & ML Masterclasses</Link></li>
                <li><Link to="/events">DevOps Bootcamps</Link></li>
                <li><Link to="/about">Research Mentorship</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="footer-nav-column text-center">
              <h4 className="footer-column-heading">Reach Us</h4>
              <div className="footer-contact-block centered-contact">
                <div className="contact-detail-row centered-row">
                  <span className="row-icon">📍</span>
                  <div>
                    <strong>Campus Office:</strong>
                    <p>School of CSE, Plot 16-18, Knowledge Park II, Greater Noida, UP</p>
                  </div>
                </div>
                <div className="contact-detail-row centered-row">
                  <span className="row-icon">✉️</span>
                  <div>
                    <strong>Official Email:</strong>
                    <p><a href="mailto:acm@iilm.edu" className="footer-email-link">acm@iilm.edu</a></p>
                  </div>
                </div>
                <div className="contact-detail-row centered-row">
                  <span className="row-icon">🌐</span>
                  <div>
                    <strong>Parent Body:</strong>
                    <p><a href="https://acm.org" target="_blank" rel="noreferrer" className="footer-external-link">ACM International (acm.org)</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Connect Row (Fully Centered) */}
          <div className="footer-social-bar centralized-social-section text-center">
            <span className="social-bar-label">Connect with ACM IILM Social Channels:</span>
            <div className="social-buttons-grid centered-social-flex">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-pill-btn" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar (Centrally Focused Motto & Copyright) */}
      <div className="enhanced-footer-bottom">
        <div className="footer-top-container bottom-flex-wrapper centered-bottom">
          <div className="motto-tag-centered text-center">
            Build, Innovate, and Lead
          </div>
          <div className="copyright-text text-center">
            © 2026 ACM Student Chapter — IILM University, Greater Noida. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
