import { useState, useMemo } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { galleryItems } from '../data/galleryData';
import Masonry, { type MasonryItem } from '../components/common/Masonry';
import type { GalleryItem } from '../types';

export const GalleryPage = () => {
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  // Map gallery items to MasonryItem format with varied heights for a true masonry feel
  const masonryItems = useMemo<MasonryItem[]>(() => {
    const heights = [320, 260, 380, 280, 340, 300];
    return galleryItems.map((item, index) => ({
      id: item.id.toString(),
      img: item.imageUrl,
      url: '#',
      height: heights[index % heights.length],
      title: item.title,
      category: item.category,
      date: item.date,
      description: item.description
    }));
  }, []);

  const handleItemClick = (masonryItem: MasonryItem) => {
    const original = galleryItems.find(g => g.id.toString() === masonryItem.id);
    if (original) {
      setActiveLightbox(original);
    }
  };

  return (
    <div className="white-canvas">
      <SEOHead title="Gallery" description="Explore moments and memories captured from ACM IILM workshops, hackathons, and campus activities." />

      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="section-container text-center">
          <span className="section-eyebrow">PHOTO ARCHIVES</span>
          <h1 className="page-main-heading">
            Captured <span className="blue-accent">Moments</span>
          </h1>
          <p className="page-sub-heading">
            Highlights from workshops, hackathons, speaker sessions, and campus life.
          </p>
        </div>
      </section>

      {/* React Bits Masonry Gallery Grid */}
      <section className="gallery-section">
        <div className="section-container">
          <div className="w-full">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Expanded View */}
      {activeLightbox && (
        <div className="modal-backdrop" onClick={() => setActiveLightbox(null)}>
          <div className="lightbox-modal-card white-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveLightbox(null)}>✕</button>
            <img src={activeLightbox.imageUrl} alt={activeLightbox.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="gallery-cat-tag">{activeLightbox.category}</span>
              <h2>{activeLightbox.title}</h2>
              <p className="lightbox-date">📅 {activeLightbox.date}</p>
              <p className="lightbox-desc">{activeLightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
