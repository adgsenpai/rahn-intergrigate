import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price: string;
  icon: LucideIcon;
  color: string;
}

export interface PricingTier {
  name: string;
  price: string;
  audience: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface ComplianceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  imageAlt: string;
  reverse?: boolean;
}