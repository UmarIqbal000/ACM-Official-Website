import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// ==================== TYPES ====================
interface NavLink {
  name: string;
  href: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
  number: number;
}

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
  description: string;
  status: 'upcoming' | 'past';
}

// ==================== DATA ====================
const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const features: Feature[] = [
  { icon: 'globe', title: 'Global Tech Community', description: 'Connect with millions of computing professionals and students worldwide.' },
  { icon: 'workshop', title: 'Workshops & Hackathons', description: 'Hands-on learning experiences with cutting-edge technologies.' },
  { icon: 'speaker', title: 'Speaker Sessions', description: 'Learn from industry experts and tech leaders.' },
  { icon: 'career', title: 'Career Growth', description: 'Networking opportunities and professional development resources.' },
];

const FeatureIcon = ({ type }: { type: string }) => {
  const iconStyle = { width: 32, height: 32, color: '#2563EB' };
  switch (type) {
    case 'globe':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'workshop':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'speaker':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      );
    case 'career':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
          <polyline points="18 4 22 8" />
          <polyline points="18 4 14 8" />
        </svg>
      );
    default:
      return null;
  }
};

const stats: Stat[] = [
  { label: 'Members', value: '15+', number: 15 },
  { label: 'Events', value: '2+', number: 2 },
  { label: 'Workshops', value: '2+', number: 2 },
  { label: 'Hackathons', value: '1+', number: 1 },
];

const events: Event[] = [
  { id: 1, title: 'Pitch & Perish 2026', date: 'April 15, 2026', type: 'Competition', description: 'Annual startup pitch competition with industry mentors.', status: 'upcoming' },
];

const flagshipEvents = [
  { name: 'Pitch & Perish', icon: 'pitch', description: 'Annual startup pitch competition' },
  { name: 'Hackathons', icon: 'hackathon', description: '24-hour coding marathons' },
  { name: 'Tech Talks', icon: 'techtalk', description: 'Industry expert sessions' },
  { name: 'Coding Competitions', icon: 'coding', description: 'Competitive programming contests' },
];

const FlagshipIcon = ({ type }: { type: string }) => {
  const iconStyle = { width: 48, height: 48, color: '#2563EB' };
  switch (type) {
    case 'pitch':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'hackathon':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 'techtalk':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      );
    case 'coding':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    default:
      return null;
  }
};

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', alt: 'Tech Event' },
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400', alt: 'Workshop' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', alt: 'Team Collaboration' },
  { src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400', alt: 'Hackathon' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400', alt: 'Conference' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400', alt: 'Presentation' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400', alt: 'Networking' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400', alt: 'Coding Session' },
];

const sponsors = [
  { name: 'IILM University, Greater Noida', logo: '/IILM UNIVERSITY LOGO 02.png' },
  { name: 'ACM Association for Computing Machinery', logo: '/ACM LOGO 01.png' },
];

// ==================== HOOKS ====================
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ==================== COMPONENTS ====================

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <div className="logo-wrapper">
            <img src="/ACM X IILM LOGO 03.png" alt="ACM IILM Logo" className="logo-image" />
            <div className="logo-text-wrapper">
              <span className="logo-text">ACM Students Chapter</span>
              <span className="logo-text-sub"><span className="gradient">IILM University</span>, Greater Noida</span>
            </div>
          </div>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">Join Us</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="mobile-link" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="animated-grid" />
      <div className="gradient-orb cyan" />
      <div className="gradient-orb purple" />

      <div className="hero-content">
        <div className="badge">
          <span className="pulse-dot" />
          <span>Welcome to ACM Students Chapter - IILM University, Greater Noida</span>
        </div>

        <h1 className="hero-title">
          <span className="gradient-text">Build.</span>{' '}
          <span>Innovate.</span>{' '}
          <span className="gradient-text">Lead.</span>
        </h1>

        <p className="hero-subtitle">
          Official ACM Student Chapter of IILM University, Greater Noida.
          <br />
          Empowering students through technology and innovation.
        </p>

        <div className="hero-cta">
          <Link to="/contact" className="btn-primary">
            Join Us <span className="arrow">→</span>
          </Link>
          <Link to="/events" className="btn-secondary">
            Explore Events
          </Link>
        </div>
      </div>
    </section>
  );
};

// Stats Component
const StatsCounter = ({ stat, inView }: { stat: Stat; inView: boolean }) => {
  const count = useCountUp(stat.number, 2000, inView);
  return (
    <div className="stat-card">
      <span className="stat-value">{count}+</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section chapter">
      <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <span className="section-label">OUR CHAPTER</span>
        <h2 className="section-title">
          ACM at <span className="gradient-text">IILM University</span>
        </h2>
        <p className="section-description">
          The ACM Student Chapter at IILM University empowers students through
          innovation, collaboration, and real-world tech exposure.
        </p>

        <div className="stats-grid">
          {stats.map((stat) => (
            <StatsCounter key={stat.label} stat={stat} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Flagship Events Preview
const FlagshipPreview = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section flagship">
      <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <span className="section-label">FLAGSHIP EVENTS</span>
        <h2 className="section-title">
          Our <span className="gradient-text">Signature Events</span>
        </h2>

        <div className="flagship-grid">
          {flagshipEvents.map((event, index) => (
            <div key={event.name} className="flagship-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <FlagshipIcon type={event.icon} />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/events" className="btn-secondary">View All Events →</Link>
        </div>
      </div>
    </section>
  );
};

// Sponsors Component
const Sponsors = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section sponsors">
      <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <span className="section-label">PARTNERS & SPONSORS</span>
        <h2 className="section-title">
          Our <span className="gradient-text">Supporters</span>
        </h2>

        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
              <span className="sponsor-name">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-wrapper">
                <img src="/ACM X IILM LOGO 03.png" alt="ACM IILM Logo" className="logo-image" />
                <div className="logo-text-wrapper">
                  <span className="logo-text">ACM Students Chapter</span>
                  <span className="logo-text-sub"><span className="gradient">IILM University</span>, Greater Noida</span>
                </div>
              </div>
            </Link>
            <p>Empowering students through technology and innovation.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Join Us</Link>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Learning Resources</a>
            <a href="#">Tech Articles</a>
            <a href="#">Tutorials</a>
          </div>

          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ACM IILM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ==================== PAGE COMPONENTS ====================

// Home Page
const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <FlagshipPreview />
      <Sponsors />
    </>
  );
};

// About Page
const AboutPage = () => {
  const { ref, isInView } = useInView();

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1 className="page-title">About <span className="gradient-text">ACM Students Chapter</span></h1>
        <p className="page-subtitle">IILM University, Greater Noida</p>
      </div>

      <section className="section about">
        <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
          <div className="about-content">
            <div className="about-text">
              <h2>What is ACM Students Chapter - IILM University, Greater Noida?</h2>
              <p>
                Founded by <strong>Dr. Ajay Kumar Patwa</strong>, an accomplished academician, researcher, and technology mentor with over 18 years of experience in academia and industry. He currently serves as an Associate Professor in the School of Computer Science and Engineering at IILM University, Greater Noida, where he promotes innovation, research excellence, and industry-oriented learning.
              </p>
              <p>
                He founded the ACM Student Chapter at IILM University, Greater Noida, with a vision to build a dynamic tech community focused on collaboration, hands-on learning, and emerging technologies.
              </p>
              <p>
                Dr. Kumar holds a Ph.D. in Computer Science & Engineering and has international academic experience across India, China, and Malaysia. His research areas include Machine Learning, Deep Learning, NLP, Computer Vision, and Health Informatics.
              </p>
              <p>
                With 32+ research publications and multiple patents, he actively contributes to advancements in data science and AI. He is a Senior Member of IEEE and a professional member of ACM.
              </p>
              <p>
                He is passionate about bridging academia and industry through mentorship, research, and collaborations with leading organizations, inspiring the next generation of innovators.
              </p>
            </div>
            <div className="about-image">
              <img src="/About Section Picture.JPG" alt="ACM IILM Chapter" />
            </div>
          </div>

          <div className="features-grid" style={{ marginTop: '4rem' }}>
            {features.map((feature, index) => (
              <div key={feature.title} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon"><FeatureIcon type={feature.icon} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section chapter">
        <div className="container">
          <h2 className="section-title">
            ACM at <span className="gradient-text">IILM University</span>
          </h2>
          <p className="section-description">
            The ACM Student Chapter at IILM University empowers students through
            innovation, collaboration, and real-world tech exposure. We organize
            workshops, hackathons, tech talks, and networking events.
          </p>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Events Page
const EventsPage = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const { ref, isInView } = useInView();

  const filteredEvents = events.filter(
    (event) => filter === 'all' || event.status === filter
  );

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1 className="page-title">Our <span className="gradient-text">Events</span></h1>
        <p className="page-subtitle">Workshops, Hackathons, Tech Talks & More</p>
      </div>

      <section className="section flagship">
        <div className="container">
          <span className="section-label">FLAGSHIP EVENTS</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Signature Events</span>
          </h2>

          <div className="flagship-grid">
            {flagshipEvents.map((event, index) => (
              <div key={event.name} className="flagship-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <FlagshipIcon type={event.icon} />
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section events">
        <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
          <span className="section-label">ALL EVENTS</span>
          <h2 className="section-title">
            Upcoming & Past <span className="gradient-text">Events</span>
          </h2>

          <div className="filter-tabs">
            {(['all', 'upcoming', 'past'] as const).map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className={`event-card ${event.status}`}>
                <span className="event-type">{event.type}</span>
                <h3>{event.title}</h3>
                <p className="event-date">📅 {event.date}</p>
                <p className="event-description">{event.description}</p>
                <button className="btn-secondary event-btn">
                  {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Team Page
const TeamPage = () => {
  const { ref, isInView } = useInView();

  return (
    <div className="page-wrapper">

      <section className="section team">
        <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
          <span className="section-label">ORGANIZATIONAL STRUCTURE</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Hierarchy</span>
          </h2>
          <p className="section-description">
            Our dedicated team works tirelessly to bring you the best tech experiences,
            events, and opportunities for growth.
          </p>

          <div className="hierarchy-tree">
            {/* Level 1: Faculty Coordinators */}
            <div className="tree-level">
              <div className="tree-role-label">Faculty Coordinators</div>
              <div className="tree-connector-down" />
              <div className="tree-members-row">
                {['Dr. Ajay Kumar', 'Urvashi Shukla', 'Neha Jain', 'Mudita Uppal', 'Gunjan Mittal Roy', 'Kirti Shukla', 'Avadhesh Kumar Gupta'].map(name => (
                  <div key={name} className="tree-member-card faculty">
                    <div className="tree-avatar">
                      <img src={`https://ui-avatars.com/api/?name=${name.replace(/ /g, '+')}&background=2563EB&color=ffffff&size=80`} alt={name} />
                    </div>
                    <span className="tree-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tree-vertical-line" />

            {/* Level 2: Chair & Vice Chair */}
            <div className="tree-level">
              <div className="tree-role-label">Student Chair & Vice Chair</div>
              <div className="tree-connector-down" />
              <div className="tree-members-row">
                <div className="tree-member-card chair">
                  <div className="tree-avatar">
                    <img src="https://ui-avatars.com/api/?name=Vaibhav+Bajaj&background=2563EB&color=ffffff&size=80" alt="Vaibhav Bajaj" />
                  </div>
                  <span className="tree-name">Vaibhav Bajaj</span>
                  <span className="tree-role">Chair</span>
                </div>
                <div className="tree-member-card chair">
                  <div className="tree-avatar">
                    <img src="https://ui-avatars.com/api/?name=Vineet+Raj&background=0EA5E9&color=ffffff&size=80" alt="Vineet Raj" />
                  </div>
                  <span className="tree-name">Vineet Raj</span>
                  <span className="tree-role">Vice Chair</span>
                </div>
              </div>
            </div>

            <div className="tree-vertical-line" />

            {/* Level 3: President */}
            <div className="tree-level">
              <div className="tree-role-label">President</div>
              <div className="tree-connector-down" />
              <div className="tree-members-row">
                <div className="tree-member-card president">
                  <div className="tree-avatar">
                    <img src="https://ui-avatars.com/api/?name=Charvi+Gupta&background=2563EB&color=ffffff&size=80" alt="Charvi Gupta" />
                  </div>
                  <span className="tree-name">Charvi Gupta</span>
                </div>
              </div>
            </div>

            <div className="tree-vertical-line" />

            {/* Level 4: Vice President */}
            <div className="tree-level">
              <div className="tree-role-label">Vice President</div>
              <div className="tree-connector-down" />
              <div className="tree-members-row">
                <div className="tree-member-card vp">
                  <div className="tree-avatar">
                    <img src="https://ui-avatars.com/api/?name=Umar+Iqbal&background=0EA5E9&color=ffffff&size=80" alt="Umar Iqbal" />
                  </div>
                  <span className="tree-name">Umar Iqbal</span>
                </div>
                <div className="tree-member-card vp">
                  <div className="tree-avatar">
                    <img src="https://ui-avatars.com/api/?name=Shivam+Kumar&background=0EA5E9&color=ffffff&size=80" alt="Shivam Kumar" />
                  </div>
                  <span className="tree-name">Shivam Kumar</span>
                </div>
              </div>
            </div>

            <div className="tree-vertical-line" />

            {/* Level 5: Secretary */}
            <div className="tree-level">
              <div className="tree-role-label">Secretary</div>
              <div className="tree-connector-down" />
              <div className="tree-members-row">
                <div className="tree-member-card secretary">
                  <div className="tree-avatar">
                    <img src="https://ui-avatars.com/api/?name=Priyanshu+Shrivastav&background=2563EB&color=ffffff&size=80" alt="Priyanshu Shrivastav" />
                  </div>
                  <span className="tree-name">Priyanshu Shrivastav</span>
                </div>
              </div>
            </div>

            <div className="tree-vertical-line" />

            {/* Level 6: Joint Secretary */}
            <div className="tree-level">
              <div className="tree-role-label">Joint Secretary</div>
              <div className="tree-connector-down" />
              <div className="tree-members-row">
                {['Sanjeev', 'Rishabh Chauhan', 'Sneha Singh', 'Shreya Singh'].map(name => (
                  <div key={name} className="tree-member-card joint-sec">
                    <div className="tree-avatar">
                      <img src={`https://ui-avatars.com/api/?name=${name.replace(/ /g, '+')}&background=0EA5E9&color=ffffff&size=80`} alt={name} />
                    </div>
                    <span className="tree-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section join-team">
        <div className="container text-center">
          <h2 className="section-title">
            Want to <span className="gradient-text">Join Our Team?</span>
          </h2>
          <p className="section-description">
            We're always looking for passionate individuals to join our chapter.
            Whether you're into development, design, or management - there's a place for you!
          </p>
          <Link to="/contact" className="btn-primary">Apply Now →</Link>
        </div>
      </section>
    </div>
  );
};

// Gallery Page
const GalleryPage = () => {
  const { ref, isInView } = useInView();

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1 className="page-title">Our <span className="gradient-text">Gallery</span></h1>
        <p className="page-subtitle">Moments Captured from Our Journey</p>
      </div>

      <section className="section gallery">
        <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
          <span className="section-label">MEMORIES</span>
          <h2 className="section-title">
            Captured <span className="gradient-text">Moments</span>
          </h2>
          <p className="section-description">
            From workshops to hackathons, tech talks to team outings - 
            here's a glimpse of our amazing journey.
          </p>

          <div className="gallery-grid large">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page (Join Us)
const ContactPage = () => {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    year: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', course: '', year: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1 className="page-title">Contact <span className="gradient-text">Us</span></h1>
        <p className="page-subtitle">Get in Touch or Join Our Chapter</p>
      </div>

      <section className="section contact">
        <div ref={ref} className={`container fade-up ${isInView ? 'visible' : ''}`}>
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's <span className="gradient-text">Connect</span></h2>
              <p>
                Have questions about ACM IILM? Want to collaborate or join our chapter?
                We'd love to hear from you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>acm@iilm.edu</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>IILM University, Greater Noida</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <div>
                    <h4>Social</h4>
                    <div className="social-icons small">
                      <a href="#" className="social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3>Join Our Chapter</h3>
              {submitted ? (
                <div className="success-message">
                  <span>✅</span>
                  <p>Thank you! We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="btech">B.Tech</option>
                        <option value="mtech">M.Tech</option>
                        <option value="bca">BCA</option>
                        <option value="mca">MCA</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        required
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
                    <textarea
                      placeholder="Why do you want to join ACM? (Optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn-primary submit-btn">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==================== MAIN APP ====================
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
