/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Review, FAQ, PricingTier } from "./types";

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Establish absolute authority with a custom-crafted website detailing your services, team, and unique business values. Designed for lead generation.",
    iconName: "Briefcase"
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Showcase your artistic, developer, design, or professional work with immersive visual grids and polished fluid gallery setups.",
    iconName: "FolderGit"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-conversion landing pages built for marketing campaigns. Crafted with crisp typography, magnetic CTA buttons, and fast-loading setups.",
    iconName: "Rocket"
  },
  {
    id: "blog-websites",
    title: "Blog Websites",
    description: "Engage your readers with lightning-fast blog sites featuring pristine reading typography, tags, categorization, and easy sharing options.",
    iconName: "FileText"
  },
  {
    id: "contact-form",
    title: "Contact Form Integration",
    description: "Never miss a lead with robust form capture using Formspree or EmailJS, direct WhatsApp instant message routing, and auto-response setup.",
    iconName: "Mail"
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting Setup",
    description: "End-to-end assistance setting up your custom domain (e.g. .in, .com) and deploying on fast servers (Netlify, Vercel, Hostinger) with free SSL certificates.",
    iconName: "Server"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Revamp your dated or slow legacy website into a modern, fast, and high-converting glassmorphism masterwork that visitors love.",
    iconName: "RefreshCw"
  },
  {
    id: "seo-setup",
    title: "Basic SEO Setup",
    description: "Rank higher on Google searches with optimized meta-tags, structured descriptions, fast loading performance indices, and sitemap registration.",
    iconName: "TrendingUp"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "The Chai Club",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    description: "A gorgeous premium landing page for an elite artisan chai brand in Delhi. Features ambient smoke animations and elegant storytelling grids.",
    tech: ["React", "Tailwind CSS", "Motion"]
  },
  {
    id: "proj-2",
    title: "Aura Wellness",
    category: "Business Website",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
    description: "An elegant, zen-inspired website with dynamic service menus and interactive appointment scheduling guidelines for a luxury yoga studio in Mumbai.",
    tech: ["Vite", "Tailwind CSS", "Lucide Icons"]
  },
  {
    id: "proj-3",
    title: "Kiran's Portfolio",
    category: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    description: "A dark-themed premium visual portfolio for a high-end fashion photographer and director. Immersive galleries and custom page transitions.",
    tech: ["React", "Motion", "Tailwind CSS"]
  },
  {
    id: "proj-4",
    title: "Fintech Bharat",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    description: "A clean modern website for a financial advisory startup. Highlighting responsive charts, custom credit calculator UI, and high CTA click rates.",
    tech: ["React", "Recharts", "Tailwind CSS"]
  },
  {
    id: "proj-5",
    title: "Saffron Travel",
    category: "Blog & Directory",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    description: "Boutique exploration travel website detailing offbeat destinations in India. Equipped with filters, interactive travel maps, and fluid layout panels.",
    tech: ["Vite", "Tailwind CSS", "Motion"]
  },
  {
    id: "proj-6",
    title: "Nexa Real Estate",
    category: "Business Website",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
    description: "A luxurious property showcase website for modern flats. Features beautiful filterable catalog lists, interactive glassmorphic forms, and dynamic galleries.",
    tech: ["React", "Tailwind CSS", "Lucide Icons"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rohit Sharma",
    location: "Delhi",
    text: "Arman's work is incredibly professional and the delivery is extremely fast. The website loaded instantly and our clients loved the design. Highly recommended!",
    rating: 5
  },
  {
    id: "rev-2",
    name: "Priya Verma",
    location: "Mumbai",
    text: "Vexora Studios built an absolutely beautiful website for my skincare brand. Communication was flawless and they incorporated every feedback with utmost care.",
    rating: 5
  },
  {
    id: "rev-3",
    name: "Aman Gupta",
    location: "Chandigarh",
    text: "Finding premium quality designs at such an affordable price in India is almost impossible. Vexora Studios made the entire process easy. Super impressed!",
    rating: 5
  },
  {
    id: "rev-4",
    name: "Neha Kapoor",
    location: "Jaipur",
    text: "Our boutique look and feel went up by 10x after launching the redesign. The booking and contact flow works smoothly, bringing us daily leads.",
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I make the payment and what is the process?",
    answer: "We keep it secure and transparent. We work with a 50% advance to initiate the project design and setup. The remaining 50% is due only after you approve the final live preview of your website. We accept UPI, GPay, PhonePe, and Direct Bank Transfers."
  },
  {
    id: "faq-2",
    question: "Will my website look good and function properly on mobile devices?",
    answer: "Absolutely. 100% of our projects are designed using mobile-first response frameworks. Your website will adapt flawlessly to screens of all sizes, from smart mobiles and tablets to large widescreen desktop monitors, preserving premium glassmorphic overlays."
  },
  {
    id: "faq-3",
    question: "What details or assets do I need to provide to start?",
    answer: "To start, we need your basic business details: your company logo (if any), text content (about your business, services lists), high-quality images of your work/products, and any preferred color schemes. If you don't have these, Arman will guide you through creating them!"
  },
  {
    id: "faq-4",
    question: "Is domain registration and server hosting cost included?",
    answer: "Our direct design fee covers implementation and hosting setup. We provide complete setup assistance on high-speed platforms like Vercel or Netlify, which offer free secure hosting (SSL). Custom domain purchase costs (approx ₹400-₹800/yr) are paid directly to registrars, which we will help you configure for free!"
  },
  {
    id: "faq-5",
    question: "Can I easily update or edit the website content myself later?",
    answer: "Yes. All of our code is beautifully commented and structured. For Standard and Premium packages, we design modules using highly-manageable React parameters or connect simple Markdown files so you can write blog posts, add portfolio items, or swap texts effortlessly."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "basic",
    name: "BASIC WEBSITE",
    price: "₹1,200",
    originalPrice: "₹2,500",
    popular: false,
    features: [
      "1-3 Premium Pages",
      "Fully Mobile Responsive",
      "Interactive Contact Form",
      "Formspree Direct Email Setup",
      "Instant WhatsApp Chat Integration",
      "Basic On-Page SEO",
      "Secure SSL Certificate Setup"
    ],
    delivery: "2-3 Days",
    ctaText: "Order Basic Plan"
  },
  {
    id: "standard",
    name: "STANDARD WEBSITE",
    price: "₹1,500",
    originalPrice: "₹3,500",
    popular: true,
    features: [
      "Everything in BASIC plan",
      "Up to 5 Premium Pages",
      "Custom Graphic Design Layouts",
      "Fluid Filterable Gallery Section",
      "Client Testimonials Panel",
      "Google Maps Live Integration",
      "Improved Local Schema SEO",
      "Interactive FAQ Accordions"
    ],
    delivery: "3-5 Days",
    ctaText: "Order Standard Plan"
  },
  {
    id: "premium",
    name: "PREMIUM WEBSITE",
    price: "₹2,000",
    originalPrice: "₹5,000",
    popular: false,
    features: [
      "Everything in STANDARD plan",
      "Up to 10 Premium Pages",
      "Bespoke Micro-Animations (Motion)",
      "Simple Admin/Markdown System",
      "Complete Blog/Content System",
      "Advanced Multi-step Forms",
      "Full Domain & Hosting Migration",
      "Priority 24/7 Support for 1 Year"
    ],
    delivery: "5-7 Days",
    ctaText: "Order Premium Plan"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Affordable Pricing",
    description: "Premium website assets structured beautifully at price points that actually make sense for startups, local stores, and growing Indian creators.",
    iconName: "ShieldCheck"
  },
  {
    title: "Fast Delivery",
    description: "We ship clean production-ready code in days, not months. Our structured pipelines ensure you go live within the set timeframe.",
    iconName: "Zap"
  },
  {
    title: "Mobile Friendly",
    description: "Over 75% of your clients browse on mobile. We craft highly fluid, responsive setups optimized for speed and precise touch interaction.",
    iconName: "Smartphone"
  },
  {
    title: "Modern Design",
    description: "No generic templates. We build custom-curated, dark premium aesthetics featuring glassmorphic cards, smooth transitions, and elegant fonts.",
    iconName: "Palette"
  },
  {
    title: "SEO Ready",
    description: "Optimized indexing files, metadata integration, fast asset compression, and clean tag structures to rank high on search engines.",
    iconName: "SearchCheck"
  },
  {
    title: "Free Support",
    description: "Friendly guidance directly from founder Arman. We offer free configuration assistance to guide you as you deploy and grow online.",
    iconName: "LifeBuoy"
  }
];
