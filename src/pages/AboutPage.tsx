import { SEOHead } from '../components/common/SEOHead';
import { founderProfile } from '../data/teamData';
import type { Feature } from '../types';

const pillars: Feature[] = [
  { icon: 'globe', title: 'Global Tech Network', description: 'Access international computing research, digital library resources, and standard setting bodies.' },
  { icon: 'workshop', title: 'Workshops & Hackathons', description: 'Hands-on learning experience building high-performance software with industry mentors.' },
  { icon: 'speaker', title: 'Keynotes & Fireside Chats', description: 'Interact directly with researchers, CTOs, and domain pioneers from top tech giants.' },
  { icon: 'career', title: 'Career Acceleration', description: 'Resume mentorship, mock interview prep, and priority networking opportunities.' },
];

export const AboutPage = () => {
  return (
    <div className="white-canvas">
      <SEOHead title="About Us" description="Learn about the ACM Student Chapter at IILM University, founded by Dr. Ajay Kumar Patwa to bridge academia and industry." />

      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="section-container text-center">
          <span className="section-eyebrow">ABOUT OUR CHAPTER</span>
          <h1 className="page-main-heading">
            Empowering Tech <span className="blue-accent">Innovators</span>
          </h1>
          <p className="page-sub-heading">
            ACM Students Chapter — IILM University, Greater Noida
          </p>
        </div>
      </section>

      {/* About & Leadership 2-Column Section */}
      <section className="about-split-section">
        <div className="section-container">
          <div className="about-grid-two-col">
            {/* Left Column: About Club & Visionary Leadership */}
            <div className="about-text-column">
              <div className="about-club-block">
                <span className="section-eyebrow">OUR MISSION & PURPOSE</span>
                <h2 className="section-heading-dark">Driving Innovation in <span className="blue-accent">Computing</span></h2>
                <p className="about-lead-desc">
                  The Association for Computing Machinery (ACM) Student Chapter at IILM University, Greater Noida, is a premier technical community dedicated to advancing computing as a science and profession. We bridge the gap between academic theory and industry demands through hands-on hackathons, AI product sprints, technical bootcamps, and research mentorship.
                </p>
              </div>

              {/* Visionary Leadership Block (Inline Credentials) */}
              <div className="leadership-inline-block">
                <span className="section-eyebrow">FACULTY FOUNDER & ADVISOR</span>
                <h3 className="leadership-title">Visionary Leadership</h3>
                
                <div className="founder-mini-header">
                  <h4 className="founder-name-highlight">{founderProfile.name}</h4>
                  <p className="founder-role-sub">{founderProfile.role} • {founderProfile.designation}</p>
                </div>

                <p className="founder-bio-text">{founderProfile.bio}</p>

                {/* Inline Credentials List */}
                <div className="credentials-inline-wrapper">
                  <h5 className="inline-cred-heading">Academic & Professional Credentials:</h5>
                  <ul className="inline-cred-list">
                    {founderProfile.credentials.map((cred, idx) => (
                      <li key={idx} className="inline-cred-item">
                        <span className="blue-check">✓</span>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Student Chapter Inauguration Photo */}
            <div className="about-image-column">
              <div className="white-card inauguration-card-frame">
                <div className="inauguration-photo-wrapper">
                  <img 
                    src="/About Section Picture.JPG" 
                    alt="ACM Student Chapter Inauguration Team at IILM University" 
                    className="inauguration-photo" 
                  />
                </div>
                <div className="inauguration-caption text-center">
                  <span className="caption-badge">CHAPTER INAUGURATION</span>
                  <h4 className="caption-title">ACM Student Chapter Team</h4>
                  <p className="caption-sub">IILM University, Greater Noida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="pillars-section">
        <div className="section-container">
          <div className="section-header-text text-center">
            <span className="section-eyebrow">WHY JOIN ACM IILM?</span>
            <h2 className="section-heading-dark">Four Pillars of <span className="blue-accent">Excellence</span></h2>
            <p className="section-sub-dark">We cultivate technical mastery and strategic problem solving.</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="white-card pillar-card text-center">
                <div className="pillar-icon-box">✦</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
