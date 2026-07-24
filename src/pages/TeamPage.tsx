import { SEOHead } from '../components/common/SEOHead';
import { facultyCoordinators, studentLeaders } from '../data/teamData';

export const TeamPage = () => {
  return (
    <div className="white-canvas">
      <SEOHead title="Team & Hierarchy" description="Meet the faculty coordinators and student executive leadership of ACM IILM Student Chapter." />

      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="section-container text-center">
          <span className="section-eyebrow">ORGANIZATIONAL STRUCTURE</span>
          <h1 className="page-main-heading">
            Meet Our <span className="blue-accent">Leadership</span>
          </h1>
          <p className="page-sub-heading">
            Faculty Mentors & Student Executives Driving Chapter Initiatives
          </p>
        </div>
      </section>

      {/* Faculty Coordinators Level */}
      <section className="hierarchy-section">
        <div className="section-container">
          <div className="section-header-text text-center">
            <span className="section-eyebrow">FACULTY ADVISORS & MENTORS</span>
            <h2 className="section-heading-dark">Faculty <span className="blue-accent">Coordinators</span></h2>
          </div>

          <div className="faculty-grid">
            {facultyCoordinators.map((faculty) => (
              <div key={faculty.name} className="white-card faculty-member-card">
                <div className="avatar-circle">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=2563EB&color=ffffff&size=100`} 
                    alt={faculty.name} 
                  />
                </div>
                <h3 className="member-name">{faculty.name}</h3>
                <span className="faculty-title-tag">{faculty.title}</span>
                <span className="dept-tag">{faculty.department}</span>

                <div className="faculty-links-flex">
                  {faculty.linkedin && (
                    <a 
                      href={faculty.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="faculty-social-btn linkedin-btn" 
                      title="LinkedIn Profile" 
                      aria-label={`${faculty.name} LinkedIn Profile`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {faculty.googleScholar && (
                    <a 
                      href={faculty.googleScholar} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="faculty-social-btn scholar-btn" 
                      title="Google Scholar Profile" 
                      aria-label={`${faculty.name} Google Scholar Profile`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                      <span>Scholar</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Executive Board Level */}
      <section className="hierarchy-section bg-slate-surface">
        <div className="section-container">
          <div className="section-header-text text-center">
            <span className="section-eyebrow">STUDENT EXECUTIVE BOARD</span>
            <h2 className="section-heading-dark">Student <span className="blue-accent">Leaders</span></h2>
          </div>

          <div className="student-hierarchy-tree">
            {/* Level 1: Chair & Vice Chair */}
            <div className="tree-tier">
              <h4 className="tier-label">Student Chair & Vice Chair</h4>
              <div className="tier-flex">
                {studentLeaders.filter(m => m.level === 'chair').map(m => (
                  <div key={m.name} className="white-card leader-card chair-card">
                    <div className="avatar-circle">
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=2563EB&color=ffffff&size=100`} alt={m.name} />
                    </div>
                    <h3 className="member-name">{m.name}</h3>
                    <span className="role-pill chair-pill">{m.role}</span>
                    {m.linkedin && (
                      <div className="faculty-links-flex">
                        <a 
                          href={m.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="faculty-social-btn linkedin-btn" 
                          title="LinkedIn Profile" 
                          aria-label={`${m.name} LinkedIn Profile`}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Level 2: President */}
            <div className="tree-tier">
              <h4 className="tier-label">President</h4>
              <div className="tier-flex">
                {studentLeaders.filter(m => m.level === 'president').map(m => (
                  <div key={m.name} className="white-card leader-card pres-card">
                    <div className="avatar-circle">
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=0EA5E9&color=ffffff&size=100`} alt={m.name} />
                    </div>
                    <h3 className="member-name">{m.name}</h3>
                    <span className="role-pill pres-pill">{m.role}</span>
                    {m.linkedin && (
                      <div className="faculty-links-flex">
                        <a 
                          href={m.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="faculty-social-btn linkedin-btn" 
                          title="LinkedIn Profile" 
                          aria-label={`${m.name} LinkedIn Profile`}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Level 3: Vice Presidents */}
            <div className="tree-tier">
              <h4 className="tier-label">Vice Presidents</h4>
              <div className="tier-flex">
                {studentLeaders.filter(m => m.level === 'vp').map(m => (
                  <div key={m.name} className="white-card leader-card vp-card">
                    <div className="avatar-circle">
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=2563EB&color=ffffff&size=100`} alt={m.name} />
                    </div>
                    <h3 className="member-name">{m.name}</h3>
                    <span className="role-pill vp-pill">{m.role}</span>
                    {m.linkedin && (
                      <div className="faculty-links-flex">
                        <a 
                          href={m.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="faculty-social-btn linkedin-btn" 
                          title="LinkedIn Profile" 
                          aria-label={`${m.name} LinkedIn Profile`}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Level 4: Secretary & Joint Secretaries */}
            <div className="tree-tier">
              <h4 className="tier-label">Secretariat</h4>
              <div className="tier-flex">
                {studentLeaders.filter(m => m.level === 'secretary' || m.level === 'joint-secretary').map(m => (
                  <div key={m.name} className="white-card leader-card sec-card">
                    <div className="avatar-circle">
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=475569&color=ffffff&size=100`} alt={m.name} />
                    </div>
                    <h3 className="member-name">{m.name}</h3>
                    <span className="role-pill sec-pill">{m.role}</span>
                    {m.linkedin && (
                      <div className="faculty-links-flex">
                        <a 
                          href={m.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="faculty-social-btn linkedin-btn" 
                          title="LinkedIn Profile" 
                          aria-label={`${m.name} LinkedIn Profile`}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
