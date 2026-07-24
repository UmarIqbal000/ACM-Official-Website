import type { Event, FlagshipEvent } from '../types';

export const flagshipEvents: FlagshipEvent[] = [
  { id: 'ai-product-sprint', name: 'AI Product Sprint 2026', icon: 'pitch', description: 'Build an AI Startup Prototype in 4 Hours! Focus on product thinking, AI tools, prompt engineering & MVP design.', badge: 'Upcoming Flagship' },
  { id: 'ai-agent-forge', name: 'AI Agent Forge 2026', icon: 'hackathon', description: '"Don\'t build another chatbot. Build an AI teammate." Build autonomous AI agents for real-world automation.', badge: 'AI Hackathon' },
];

export const events: Event[] = [
  {
    id: 1,
    title: 'AI Product Sprint 2026',
    date: 'April 15, 2026',
    time: '10:00 AM - 03:45 PM IST',
    venue: 'SVH Reading Area, IILM University, Greater Noida',
    type: 'Product Sprint',
    category: 'competition',
    description: 'Build an AI Startup Prototype in 4 Hours! Solve real-world track challenges with product thinking, prompt engineering, UI, and MVP prototypes.',
    fullDescription: 'AI Product Sprint 2026 is an intense product sprint organized by ACM Student Chapter - IILM University. Teams of 3–4 students receive one real-world problem statement (Campus Navigation, Mental Health, Hostel Complaints, Attendance, College Marketplace, Placement Prep) and build an AI Product Idea, UI, Workflow, Prompt Engineering, and MVP Prototype using tools like ChatGPT, Claude, Gemini, Cursor, Bolt, Lovable, v0, and Figma. Coding is optional—the focus is product thinking, AI tools, and presentation skills!',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    registrationLink: 'https://forms.google.com'
  },
  {
    id: 2,
    title: 'AI Agent Forge 2026',
    date: 'April 25, 2026',
    time: '10:00 AM - 04:00 PM IST',
    venue: 'SVH Reading Area, IILM University, Greater Noida',
    type: 'AI Hackathon',
    category: 'hackathon',
    description: '"Don\'t build another chatbot. Build an AI teammate." Engineer autonomous AI agents for real-world workflow automation.',
    fullDescription: 'AI Agent Forge 2026 challenges teams of 3–4 students to build an AI agent that can complete multi-step tasks autonomously using LLMs, APIs, tools, or no-code AI platforms. Tracks include Student Productivity, Campus Automation, Career Assistant, Research Assistant, and Personal Finance. Deliverables include Project Architecture Diagram, Demo Link, GitHub Repo, and 6-Slide Presentation!',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    registrationLink: 'https://forms.google.com'
  }
];
