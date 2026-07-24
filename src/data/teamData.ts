import type { FacultyCoordinator, StudentLeader } from '../types';

export const founderProfile = {
  name: 'Dr. Ajay Kumar Patwa',
  role: 'Faculty Founder & Advisor',
  designation: 'Associate Professor, School of Computer Science & Engineering',
  institution: 'IILM University, Greater Noida',
  credentials: [
    'Ph.D. in Computer Science & Engineering',
    'Senior Member, IEEE',
    'Professional Member, ACM',
    '18+ Years of Academic & Industry Experience',
    '32+ Research Publications & Multiple Patents'
  ],
  bio: 'Dr. Ajay Kumar Patwa is an accomplished academician, researcher, and technology mentor. He founded the ACM Student Chapter at IILM University, Greater Noida, with a vision to build a dynamic tech community focused on collaboration, hands-on learning, and emerging technologies. With international academic experience across India, China, and Malaysia, his research spans Machine Learning, Deep Learning, NLP, Computer Vision, and Health Informatics.',
  image: '/About Section Picture.JPG'
};

export const facultyCoordinators: FacultyCoordinator[] = [
  { name: 'Dr. Ajay Kumar Patwa', title: 'Faculty Founder & Advisor', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' },
  { name: 'Urvashi Shukla', title: 'Faculty Coordinator', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' },
  { name: 'Neha Jain', title: 'Faculty Coordinator', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' },
  { name: 'Mudita Uppal', title: 'Faculty Coordinator', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' },
  { name: 'Gunjan Mittal Roy', title: 'Faculty Coordinator', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' },
  { name: 'Kirti Shukla', title: 'Faculty Coordinator', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' },
  { name: 'Avadhesh Kumar Gupta', title: 'Faculty Coordinator', department: 'School of CSE', linkedin: 'https://linkedin.com', googleScholar: 'https://scholar.google.com' }
];

export const studentLeaders: StudentLeader[] = [
  // Chair & Vice Chair
  { name: 'Vaibhav Bajaj', role: 'Student Chair', level: 'chair', linkedin: 'https://linkedin.com' },
  { name: 'Vineet Raj', role: 'Student Vice Chair', level: 'chair', linkedin: 'https://linkedin.com' },

  // President
  { name: 'Charvi Gupta', role: 'President', level: 'president', linkedin: 'https://linkedin.com' },

  // Vice President
  { name: 'Umar Iqbal', role: 'Vice President', level: 'vp', linkedin: 'https://linkedin.com' },
  { name: 'Shivam Kumar', role: 'Vice President', level: 'vp', linkedin: 'https://linkedin.com' },

  // Secretary
  { name: 'Priyanshu Shrivastav', role: 'Secretary', level: 'secretary', linkedin: 'https://linkedin.com' },

  // Joint Secretary
  { name: 'Sanjeev', role: 'Joint Secretary', level: 'joint-secretary', linkedin: 'https://linkedin.com' },
  { name: 'Rishabh Chauhan', role: 'Joint Secretary', level: 'joint-secretary', linkedin: 'https://linkedin.com' },
  { name: 'Sneha Singh', role: 'Joint Secretary', level: 'joint-secretary', linkedin: 'https://linkedin.com' },
  { name: 'Shreya Singh', role: 'Joint Secretary', level: 'joint-secretary', linkedin: 'https://linkedin.com' }
];
