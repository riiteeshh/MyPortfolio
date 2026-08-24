export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  inProgress?: boolean;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Claude Certified Solution Architect",
    issuer: "Anthropic",
    date: "In progress",
    inProgress: true,
  },
  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "Dec 2023",
    url: "https://www.hackerrank.com/certificates/7315257e649d",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Dec 2023",
    url: "https://www.hackerrank.com/certificates/f011a6be63d6",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM",
    date: "Jul 2024",
    url: "https://courses.cognitiveclass.ai/certificates/63e7e243798e4a998e1a4b7a5bf83926",
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "Aug 2022",
    url: "https://www.credly.com/badges/accc3ae6-fd27-4a0c-9a0e-aa79b2ec9411/linked_in_profile",
  },
  {
    name: "Postman API Fundamentals, Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    date: "Nov 2025",
    url: "https://badges.parchment.com/public/assertions/CRpdg3GaSFu_R6HxUYf7Bg",
  },
  {
    name: "Flutter",
    issuer: "Great Learning",
    date: "Online",
    url: "https://www.mygreatlearning.com/certificate/IAPCTVNG",
  },
];
