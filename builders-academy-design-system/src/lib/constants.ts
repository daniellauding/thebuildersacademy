// Design tokens reference for The Builders Academy
// These mirror the CSS custom properties defined in globals.css

export const BRAND_COLORS = {
  primary: "#1F396D",
  secondary: "#16A34A",
  background: "#FFFFFF",
  foreground: "#334155",
  muted: "#F8FAFC",
  mutedForeground: "#475569",
  accent: "#E1F1EA",
  border: "#E2E8F0",
} as const

export const SEMANTIC_COLORS = {
  success: "#16A34A",
  warning: "#F59E0B",
  error: "#DC2626",
  info: "#3B82F6",
} as const

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  wide: 1280,
} as const

export const LAYOUT = {
  maxPageWidth: 1280,
  maxContentWidth: 960,
  horizontalPaddingDesktop: 40,
  horizontalPaddingMobile: 16,
} as const

export const TRUST_BADGES = {
  cpd: { label: "CPD Accredited", shortLabel: "CPD" },
  citb: { label: "CITB Approved", shortLabel: "CITB" },
  iosh: { label: "IOSH Certified", shortLabel: "IOSH" },
  trustpilot: { label: "Trustpilot", shortLabel: "Trustpilot" },
} as const

export const CATEGORIES = [
  { id: "cscs", title: "I need a CSCS Card", subtitle: "Green, Blue, Gold & more", priceFrom: 30 },
  { id: "safety", title: "I need Safety Training", subtitle: "Health & Safety courses", priceFrom: 25 },
  { id: "employer", title: "For My Business", subtitle: "Bulk training & dashboard", cta: "Request Quote" },
] as const

export const POPULAR_COURSES = [
  { id: "cscs-green", title: "CSCS Green Card Test", price: 35, rating: 4.9, reviewCount: 1240, duration: "45 min", badges: ["cpd", "citb"] as const },
  { id: "working-at-height", title: "Working at Height", price: 25, rating: 4.8, reviewCount: 890, duration: "1 hour", badges: ["cpd"] as const },
  { id: "first-aid", title: "First Aid at Work", price: 40, rating: 4.9, reviewCount: 1560, duration: "2 hours", badges: ["cpd", "citb"] as const },
  { id: "fire-safety", title: "Fire Safety Awareness", price: 20, rating: 4.7, reviewCount: 720, duration: "30 min", badges: ["cpd"] as const },
  { id: "manual-handling", title: "Manual Handling", price: 22, rating: 4.8, reviewCount: 950, duration: "45 min", badges: ["cpd"] as const },
  { id: "asbestos-awareness", title: "Asbestos Awareness", price: 25, rating: 4.9, reviewCount: 680, duration: "1 hour", badges: ["cpd", "citb"] as const },
] as const

export const EMPLOYER_LOGOS = [
  "Skanska",
  "Kier",
  "G4S",
  "BBC Studios",
  "Balfour Beatty",
] as const

export const EMPLOYER_PACKAGES = [
  { id: "site-worker", title: "Site Worker Essentials", courses: 4, pricePerPerson: 90, savings: "25%", description: "Core safety training for all site workers" },
  { id: "supervisor", title: "Supervisor Package", courses: 5, pricePerPerson: 140, savings: "20%", description: "Advanced training for site supervisors" },
  { id: "custom", title: "Custom Package", courses: 50, pricePerPerson: null, savings: null, description: "Build your own from 50+ courses" },
] as const
