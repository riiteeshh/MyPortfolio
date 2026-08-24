export interface Achievement {
  title: string;
  org: string;
  year: string;
  body: string;
  url?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Best Project Award",
    org: "KEC Project Exhibition",
    year: "2023",
    body: "Awarded for the Mobile Anti-Theft System: real-time security monitoring, encrypted alerting, location tracking, and privacy-preserving location sharing.",
  },
  {
    title: "Conference Publication",
    org: "International Conference on Engineering and Technology",
    year: "2023",
    body: "Co-authored \"Offline Wallet Secured with AES Encryption,\" an SMS-based digital transaction system for low-connectivity environments, with Sushan Shrestha, Saurav Rajbhandari, and Shashwat Gautam.",
    url: "https://www.researchgate.net/publication/377116808_Offline_Wallet_Secured_With_AES_Encryption",
  },
  {
    title: "Employee Recognition Award",
    org: "Ycotek Nepal",
    year: "2025",
    body: "Recognized as \"Accountable for Customer Success\" on the conversational AI product I work on.",
  },
];
