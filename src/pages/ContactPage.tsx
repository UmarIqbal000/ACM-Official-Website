import { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    year: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', course: '', year: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('acm@iilm.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="white-canvas">
      <SEOHead title="Contact & Join Us" description="Get in touch with ACM Student Chapter at IILM University or apply for membership." />

      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="section-container text-center">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h1 className="page-main-heading">
            Join Our <span className="blue-accent">Chapter</span>
          </h1>
          <p className="page-sub-heading">
            Connect with us for collaborations, sponsorships, or student membership.
          </p>
        </div>
      </section>

      {/* Form & Contact Info Section */}
      <section className="contact-main-section">
        <div className="section-container">
          <div className="contact-grid-two-col">
            {/* Contact Details Column */}
            <div className="contact-info-col">
              <span className="section-eyebrow">CONNECT WITH US</span>
              <h2 className="section-heading-dark">Let's Build <span className="blue-accent">Together</span></h2>
              <p className="contact-lead-desc">
                Have questions about chapter initiatives, upcoming workshops, or how to become a student leader? We would love to hear from you!
              </p>

              <div className="contact-cards-stack">
                <div className="white-card contact-detail-card">
                  <div className="contact-icon-box">✉️</div>
                  <div className="contact-card-text">
                    <h4>Official Email</h4>
                    <p>acm@iilm.edu</p>
                    <button className="copy-btn" onClick={handleCopyEmail}>
                      {copied ? '✓ Copied!' : 'Copy Email'}
                    </button>
                  </div>
                </div>

                <div className="white-card contact-detail-card">
                  <div className="contact-icon-box">📍</div>
                  <div className="contact-card-text">
                    <h4>Campus Location</h4>
                    <p>School of Computer Science & Engineering</p>
                    <p className="sub-addr">IILM University, Plot 16-18, Knowledge Park II, Greater Noida, UP 201306</p>
                  </div>
                </div>

                <div className="white-card contact-detail-card">
                  <div className="contact-icon-box">🌐</div>
                  <div className="contact-card-text">
                    <h4>Parent Organization</h4>
                    <p>ACM Association for Computing Machinery</p>
                    <a href="https://acm.org" target="_blank" rel="noreferrer" className="external-link">
                      Visit Global ACM Portal →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form Column */}
            <div className="contact-form-col">
              <div className="white-card form-wrapper-card">
                <h3 className="form-card-title">Membership Application</h3>
                <p className="form-card-subtitle">Fill in your details to apply for student membership.</p>

                {submitted ? (
                  <div className="success-banner text-center">
                    <div className="success-icon-large">🎉</div>
                    <h3>Application Submitted!</h3>
                    <p>Thank you for reaching out. Our student team will contact you shortly with chapter onboarding details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="membership-form">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Aarav Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. student@iilm.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-row-two">
                      <div className="form-group">
                        <label>Course *</label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          required
                          className="form-select"
                        >
                          <option value="">Select Degree</option>
                          <option value="btech">B.Tech (CSE/IT/AI)</option>
                          <option value="mtech">M.Tech</option>
                          <option value="bca">BCA</option>
                          <option value="mca">MCA</option>
                          <option value="other">Other Degree</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Year of Study *</label>
                        <select
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          required
                          className="form-select"
                        >
                          <option value="">Select Year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Why do you want to join ACM? (Optional)</label>
                      <textarea
                        placeholder="Share your technical interests, coding background, or project ideas..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn-primary-accent full-width-btn">
                      Submit Application →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
