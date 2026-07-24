import { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { events } from '../data/eventsData';
import type { Event } from '../types';

export const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="white-canvas">
      <SEOHead title="Events" description="Upcoming flagship hackathons, workshops, and coding competitions at ACM IILM Student Chapter." />

      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="section-container text-center">
          <span className="section-eyebrow">CHAPTER INITIATIVES</span>
          <h1 className="page-main-heading">
            Events & <span className="blue-accent">Hackathons</span>
          </h1>
          <p className="page-sub-heading">
            AI Product Sprints, Agent Hackathons & Technical Masterclasses
          </p>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="events-control-section">
        <div className="section-container">
          {/* Events Grid */}
          <div className="events-grid-display">
            {events.map((evt) => (
              <div key={evt.id} className="white-card event-display-card">
                <div className="event-card-img-container">
                  <img src={evt.image} alt={evt.title} className="event-card-img" />
                  <span className={`status-tag ${evt.status}`}>
                    {evt.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>

                <div className="event-card-body">
                  <span className="event-type-label">{evt.type}</span>
                  <h3 className="event-title-text">{evt.title}</h3>
                  <p className="event-date-text">📅 {evt.date}</p>
                  <p className="event-summary">{evt.description}</p>

                  <a
                    href={evt.registrationLink || 'https://forms.google.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-accent full-width-btn text-center"
                  >
                    Register Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup for Event Details */}
      {selectedEvent && (
        <div className="modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="modal-card white-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedEvent(null)}>✕</button>
            <div className="modal-header">
              <span className={`status-tag ${selectedEvent.status}`}>
                {selectedEvent.status === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
              </span>
              <h2 className="modal-title">{selectedEvent.title}</h2>
              <p className="modal-meta">📅 {selectedEvent.date} {selectedEvent.time ? `• ${selectedEvent.time}` : ''}</p>
              {selectedEvent.venue && <p className="modal-venue">📍 Venue: {selectedEvent.venue}</p>}
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedEvent.fullDescription || selectedEvent.description}</p>
              {selectedEvent.status === 'upcoming' && (
                <div className="modal-cta-box text-center">
                  <a 
                    href={selectedEvent.registrationLink || 'https://forms.google.com'} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary-accent modal-cta-btn"
                  >
                    Register Now →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
