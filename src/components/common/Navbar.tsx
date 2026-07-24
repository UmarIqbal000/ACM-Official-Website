import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavLink } from '../../types';

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-master-wrapper">
      {/* Floating Curved Glassmorphic Navbar Container */}
      <div className={`floating-nav-outer ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="floating-nav-inner">
          {/* Logo & Brand Identity */}
          <Link to="/" className="nav-brand-group">
            <div className="brand-logo-ring">
              <img 
                src="/ChatGPT Image Jul 25, 2026, 01_21_53 AM.png" 
                alt="ACM IILM Student Chapter Logo" 
                className="nav-brand-img"
              />
            </div>
            <div className="brand-label-stack">
              <div className="brand-primary-name">
                ACM Students Chapter
              </div>
              <div className="brand-secondary-name">
                <span className="live-status-dot-sm" />
                <span className="univ-highlight">IILM University</span>, Greater Noida
              </div>
            </div>
          </Link>

          {/* Desktop Nav Pill Dock */}
          <nav className="desktop-pill-dock">
            <div className="pill-links-container">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className={`nav-pill-item ${isActive ? 'pill-active' : ''}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Glowing CTA Button */}
            <Link to="/contact" className="electric-cta-btn">
              <span>Join Us</span>
              <span className="btn-arrow-svg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-hamburger-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Glass Drawer */}
        {isOpen && (
          <div className="mobile-glass-drawer">
            <div className="mobile-drawer-links-stack">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`mobile-link-pill ${location.pathname === link.href ? 'mobile-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="electric-cta-btn mobile-full-cta"
                onClick={() => setIsOpen(false)}
              >
                <span>Join ACM Chapter</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
