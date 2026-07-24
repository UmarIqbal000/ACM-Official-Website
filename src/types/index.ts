export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  icon: 'globe' | 'workshop' | 'speaker' | 'career' | 'code' | 'award';
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  number: number;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  venue?: string;
  type: string;
  category: 'competition' | 'workshop' | 'techtalk' | 'hackathon';
  description: string;
  fullDescription?: string;
  status: 'upcoming' | 'past';
  image?: string;
  registrationLink?: string;
}

export interface FlagshipEvent {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge?: string;
}

export interface FacultyCoordinator {
  name: string;
  title: string;
  department?: string;
  image?: string;
  specialization?: string;
  linkedin?: string;
  googleScholar?: string;
}

export interface StudentLeader {
  name: string;
  role: string;
  level: 'chair' | 'president' | 'vp' | 'secretary' | 'joint-secretary';
  image?: string;
  linkedin?: string;
  github?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Hackathons' | 'Workshops' | 'Speaker Sessions' | 'Campus Life';
  date: string;
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface Sponsor {
  name: string;
  type: string;
  logo: string;
  website?: string;
}
