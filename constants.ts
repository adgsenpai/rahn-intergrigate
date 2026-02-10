import { 
  Shield, Building2, ScanFace, BookUser, 
  FileCheck, Eye, Search, AlertTriangle, 
  Coins, Zap, Lock, UserCheck, 
  Briefcase, ShoppingCart, Gavel, 
  Landmark, UserPlus
} from 'lucide-react';
import { NavItem, StatItem, ServiceItem, PricingTier, ComplianceItem, FeatureItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Solutions', 
    href: '/solutions', 
    dropdown: [
      { label: 'KYC / Identity', href: '/solutions/kyc' }, 
      { label: 'AML Screening', href: '/solutions/aml' }, 
      { label: 'Biometrics', href: '/solutions/biometrics' }
    ] 
  },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'API Docs', href: '/docs' },
  { 
    label: 'Resources', 
    href: '/resources', 
    dropdown: [
      { label: 'Blog', href: '/resources/blog' }, 
      { label: 'Case Studies', href: '/resources/case-studies' }
    ] 
  },
  { 
    label: 'Company', 
    href: '/company', 
    dropdown: [
      { label: 'About Us', href: '/company/about' }, 
      { label: 'Contact', href: '/company/contact' }
    ] 
  },
];

export const STATS: StatItem[] = [
  { value: '50,000+', label: 'Verifications Processed' },
  { value: '99.8%', label: 'Accuracy Rate' },
  { value: '<2sec', label: 'Response Time' },
  { value: '24/7', label: 'Support' },
];

export const SERVICES: ServiceItem[] = [
  { name: 'CIPC Director Verification', description: 'Confirm director details directly with CIPC.', price: 'R6.70', icon: Shield, color: 'text-red-600' },
  { name: 'CIPC Enterprise Check', description: 'Validate business registration status.', price: 'R6.70', icon: Building2, color: 'text-red-600' },
  { name: 'Facial Biometric Liveness', description: 'Prevent spoofing with 3D liveness checks.', price: 'R1.30', icon: ScanFace, color: 'text-orange-500' },
  { name: 'Passport Validation', description: 'Verify international travel documents.', price: 'R11.20', icon: BookUser, color: 'text-red-500' },
  { name: 'RSAID Document + Face', description: 'Match ID photos with selfie scans.', price: 'R11.20', icon: FileCheck, color: 'text-red-700' },
  { name: 'RSAID + Face + Liveness', description: 'Full stack identity assurance.', price: 'R12.60', icon: Eye, color: 'text-red-600' },
  { name: 'RSAID Document Legacy', description: 'Standard ID book verification.', price: 'R11.20', icon: FileCheck, color: 'text-gray-500' },
  { name: 'RSA ID Verification (Cache)', description: 'High-speed cached identity checks.', price: 'R1.50', icon: Zap, color: 'text-yellow-600' },
  { name: 'RSA ID Verification (Live)', description: 'Real-time database lookup.', price: 'R13.40', icon: Search, color: 'text-red-800' },
  { name: 'Sanctions + PEPs', description: 'Global AML and watchlist screening.', price: 'R2.90', icon: AlertTriangle, color: 'text-orange-600' },
  { name: 'Platform Processing', description: 'Base platform utility fee.', price: 'R0.50', icon: Coins, color: 'text-gray-400' },
];

export const PRICING: PricingTier[] = [
  {
    name: 'Starter',
    price: 'From R0.50 / check',
    audience: 'Small businesses & startups',
    features: ['All 11 verification types', 'API Access', 'Webhook notifications', 'Email support', 'No setup fees'],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Business',
    price: 'Volume Discounts',
    audience: 'Growing companies',
    features: ['Everything in Starter', 'Priority support', 'Dedicated account manager', 'Custom integrations', '10% bulk discount'],
    cta: 'Contact Sales',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    audience: 'Large organizations',
    features: ['Everything in Business', 'White-label solutions', 'SLA guarantees', 'Dedicated infrastructure', 'Custom compliance workflows'],
    cta: 'Schedule Demo',
    highlight: false
  }
];

export const COMPLIANCE: ComplianceItem[] = [
  { title: 'POPIA Compliant', description: 'Fully compliant with Protection of Personal Information Act.', icon: Shield },
  { title: 'Data Encryption', description: 'AES-256 encryption at rest and in transit.', icon: Lock },
  { title: 'Fraud Prevention', description: 'Advanced algorithms to detect synthetic identities.', icon: ScanFace },
  { title: 'Real-time Audits', description: 'Complete audit trails for every verification.', icon: FileCheck },
  { title: 'Secure Infrastructure', description: 'Hosted on enterprise-grade secure servers.', icon: UserCheck },
  { title: 'Privacy First', description: 'Data minimization principles applied by default.', icon: Search },
];

export const FEATURES_DEEP_DIVE: FeatureItem[] = [
  {
    title: "Automate Status Updates & Reminders",
    description: "Set conditions and rules to automatically progress clients through onboarding stages. Send WhatsApp/email reminders for pending documents.",
    bullets: ["Conditional logic engine", "Multi-channel notifications", "Custom approval workflows"],
    cta: "Explore Automation",
    imageAlt: "Workflow Automation Dashboard",
    reverse: false
  },
  {
    title: "Manual Tools for Edge Cases",
    description: "When automated checks need human oversight, use our intuitive dashboard for spot-checks and complex verifications.",
    bullets: ["Credit-based pricing per check", "Real-time balance tracking", "Verification history with filters"],
    cta: "See Manual Tools",
    imageAlt: "Manual Verification Dashboard",
    reverse: true
  },
  {
    title: "Branded Self-Service Onboarding",
    description: "Generate custom onboarding links with your logo, colors, and domain. Clients complete KYC at their own pace.",
    bullets: ["Fully customizable templates", "Multi-step progress tracking", "Mobile-responsive design"],
    cta: "Try Link Builder",
    imageAlt: "Onboarding Link Mobile View",
    reverse: false
  },
  {
    title: "Comprehensive Compliance Reports",
    description: "Generate PDF reports with verification results, risk scores, and audit trails. Exportable for record-keeping.",
    bullets: ["AML, KYC, KYB reports", "Historical data retention", "One-click regeneration"],
    cta: "View Sample Report",
    imageAlt: "Compliance Report PDF",
    reverse: true
  }
];

export const USE_CASES = [
  { icon: Landmark, title: 'Financial Services', desc: 'KYC compliance for banks, fintechs, and insurance.' },
  { icon: Gavel, title: 'Legal & Compliance', desc: 'AML screening for law firms and corporate compliance.' },
  { icon: UserPlus, title: 'Human Resources', desc: 'Employment verification and background checks.' },
  { icon: Building2, title: 'Real Estate', desc: 'Tenant screening and property buyer verification.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Seller verification and fraud prevention.' },
  { icon: Briefcase, title: 'Gig Economy', desc: 'Driver/worker verification at scale.' }
];

export const FAQS = [
  { q: 'How quickly can I integrate?', a: 'Most developers complete integration in under 2 hours using our SDKs.' },
  { q: 'Do I need a monthly subscription?', a: 'No, our starter plan is purely pay-as-you-go. You only pay for what you verify.' },
  { q: 'Is my data secure and POPIA compliant?', a: 'Yes, we are fully POPIA compliant and ensure data privacy.' },
  { q: 'What happens if a verification fails?', a: 'You receive detailed error codes explaining why (e.g., mismatching ID number).' },
];