import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { flagshipEvents } from '../data/eventsData';
import { sponsors } from '../data/sponsorsData';
import { faqList } from '../data/faqData';
import type { Stat } from '../types';

const stats: Stat[] = [
  { label: 'Active Members', value: '15+', number: 15 },
  { label: 'Tech Events', value: '2+', number: 2 },
  { label: 'Hands-on Workshops', value: '2+', number: 2 },
  { label: 'Hackathons Held', value: '1+', number: 1 },
];

export const HomePage = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  return (
    <div className="white-canvas">
      <SEOHead title="Home" description="ACM Student Chapter at IILM University, Greater Noida - Empowering technology leaders through AI Product Sprint 2026, AI Agent Forge 2026, workshops, and innovation." />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-light-grid" />
        <div className="hero-content-wrapper">
          <div className="badge-pill">
            <span className="pulse-blue-dot" />
            <span>ACM Students Chapter - IILM University, Greater Noida</span>
          </div>

          <h1 className="hero-title-main">
            <span className="blue-gradient-text">Build.</span>{' '}
            <span className="dark-title">Innovate.</span>{' '}
            <span className="blue-gradient-text">Lead.</span>
          </h1>

          <p className="hero-subtext">
            Official ACM Student Chapter of IILM University, Greater Noida.
            <br />
            Empowering students to engineer future AI products and autonomous agents through product thinking and technical competitions.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary-accent shadow-hover">
              Join Our Chapter <span className="arrow-icon">→</span>
            </Link>
            <Link to="/events" className="btn-secondary-white">
              Explore Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid-wrapper">
            {stats.map((stat) => (
              <div key={stat.label} className="white-card stat-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Events Spotlight Grid */}
      <section className="spotlight-section">
        <div className="section-container">
          <div className="section-header-text text-center mb-8">
            <span className="section-eyebrow">UPCOMING FLAGSHIP EVENTS</span>
            <h2 className="section-heading-dark">Build & Engineer <span className="blue-accent">With AI</span></h2>
            <p className="section-sub-dark">Two major upcoming hackathons testing product thinking and autonomous agent creation.</p>
          </div>

          <div className="dual-spotlight-grid">
            {/* Spotlight 1: AI Product Sprint 2026 */}
            <div className="spotlight-card white-card">
              <div className="spotlight-badge">PRODUCT SPRINT</div>
              <h2 className="spotlight-title">AI Product Sprint 2026</h2>
              <p className="spotlight-date">📅 April 15, 2026 • SVH Reading Area</p>
              <p className="spotlight-desc">
                Build an AI Startup Prototype in Just 4 Hours! Work in teams of 3–4 to solve real-world Track statements (Campus Navigation, Mental Health, Hostel Complaints, Placement Prep) with product thinking, UI, prompt engineering, and MVP prototypes.
              </p>
              <div className="spotlight-actions">
                <a href="https://forms.google.com" target="_blank" rel="noreferrer" className="btn-primary-accent spot-btn">
                  Register Now →
                </a>
              </div>
            </div>

            {/* Spotlight 2: AI Agent Forge 2026 */}
            <div className="spotlight-card white-card">
              <div className="spotlight-badge">AI HACKATHON</div>
              <h2 className="spotlight-title">AI Agent Forge 2026</h2>
              <p className="spotlight-date">📅 April 25, 2026 • SVH Reading Area</p>
              <p className="spotlight-desc">
                "Don't build another chatbot. Build an AI teammate." Engineer an autonomous AI agent capable of multi-step task execution. Tracks: Student Productivity, Campus Automation, Career Assistant, Research Assistant, Personal Finance.
              </p>
              <div className="spotlight-actions">
                <a href="https://forms.google.com" target="_blank" rel="noreferrer" className="btn-primary-accent spot-btn">
                  Register Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Events Preview */}
      <section className="signature-events-section">
        <div className="section-container">
          <div className="section-header-text text-center">
            <span className="section-eyebrow">WHAT WE DO</span>
            <h2 className="section-heading-dark">Our <span className="blue-accent">Signature Programs</span></h2>
            <p className="section-sub-dark">Transforming technical learning through immersive real-world experiences.</p>
          </div>

          <div className="signature-grid">
            {flagshipEvents.map((evt) => (
              <div key={evt.id} className="white-card flagship-item-card">
                <div className="card-badge">{evt.badge}</div>
                <h3 className="card-title-dark">{evt.name}</h3>
                <p className="card-desc-dark">{evt.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/events" className="btn-secondary-white">View Full Event Schedule →</Link>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners Section */}
      <section className="partners-section">
        <div className="section-container">
          <div className="section-header-text text-center">
            <span className="section-eyebrow">OUR SUPPORTERS</span>
            <h2 className="section-heading-dark">Institutional <span className="blue-accent">Partners</span></h2>
          </div>

          <div className="sponsors-flex">
            {sponsors.map((s) => (
              <div key={s.name} className="white-card sponsor-card-item text-center">
                <div className="sponsor-logo-box">
                  <img src={s.logo} alt={s.name} className="sponsor-img" />
                </div>
                <h4 className="sponsor-name">{s.name}</h4>
                <span className="sponsor-type-tag">{s.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header-text text-center">
            <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-heading-dark">Everything You Need <span className="blue-accent">To Know</span></h2>
          </div>

          <div className="faq-accordion-wrapper">
            {faqList.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className={`white-card faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
