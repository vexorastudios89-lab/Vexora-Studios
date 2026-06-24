/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Storing the icon name to resolve it dynamically
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveUrl?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  features: string[];
  delivery: string;
  ctaText: string;
}
