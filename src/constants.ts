import { Laptop, Megaphone, Search, Share2, Users } from 'lucide-react';

export const BRAND_NAME = "INFOZ DIGITAL SOLUTIONS";
export const CONTACT_EMAIL = "infozdigitalsolutions@gmail.com";
export const CONTACT_PHONE = "909330688";
export const WHATSAPP_NUMBER = "909330688";
export const GOOGLE_FORM_URL = "https://forms.gle/1uUG6h8Jp6LuK5hN8";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  slug: string;
  icon: any;
  problem: string;
  solution: string;
  benefits: string[];
  process: string[];
  results: string[];
}

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    slug: "web-development",
    icon: Laptop,
    description: "High-performance, premium websites tailored for conversion.",
    longDescription: "We build more than just websites; we build digital growth engines. Our websites are designed to capture leads and represent your brand with premium quality.",
    problem: "Most websites are slow, outdated, and fail to turn visitors into customers. They are digital brochures, not business tools.",
    solution: "We create high-speed, mobile-optimized, and conversion-focused websites that provide a seamless user experience and force your competition to play catch-up.",
    benefits: [
      "Lightning fast loading speeds",
      "Mobile-first responsive design",
      "SEO-ready architecture",
      "Lead conversion optimization",
      "Premium, modern UI/UX"
    ],
    process: [
      "Discovery & Strategy",
      "UI/UX Design Mockups",
      "Modern Web Development",
      "Optimization & Testing",
      "Launch & Support"
    ],
    results: [
      "2x Higher conversion rates",
      "Reduced bounce rates",
      "Premium brand perception",
      "Scalable digital infrastructure"
    ]
  },
  {
    id: "google-ads",
    title: "Google Ads",
    slug: "google-ads",
    icon: Megaphone,
    description: "High-ROI PPC campaigns that get your business in front of buyers.",
    longDescription: "Stop wasting money on clicks that don't convert. Our Google Ads strategy focuses on high-intent keywords that drive immediate leads.",
    problem: "Businesses often burn their budget on broad clicks and poor targeting, leading to zero ROI and frustration.",
    solution: "We build laser-targeted PPC campaigns that only trigger for people actively searching for what you sell, ensuring every cent works for you.",
    benefits: [
      "Instant top-of-page visibility",
      "Highly targeted lead generation",
      "Detailed ROI tracking",
      "Continuous bid optimization",
      "Competitor keyword targeting"
    ],
    process: [
      "Keyword Research",
      "Ad Copy Creation",
      "Landing Page Optimization",
      "Campaign Launch",
      "Data-Driven Refinement"
    ],
    results: [
      "Lower Cost-Per-Acquisition",
      "Immediate traffic surge",
      "Predictable lead volume",
      "Maximum budget efficiency"
    ]
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: Share2,
    description: "Viral-ready campaigns that build massive brand awareness.",
    longDescription: "Scale your reach with powerful social media strategies that engage your audience and drive viral growth.",
    problem: "Social media is crowded. Without a strategy, your brand is invisible and your posts are just noise.",
    solution: "We create data-backed social campaigns that stop the scroll, engage your ideal customer, and build a community around your brand.",
    benefits: [
      "Massive brand visibility",
      "Highly targeted demographics",
      "Community building",
      "Increase in brand loyalty",
      "Effective retargeting ads"
    ],
    process: [
      "Brand Voice Definition",
      "Campaign Strategy",
      "Creative Production",
      "Ad Management",
      "Performance Reporting"
    ],
    results: [
      "Higher brand engagement",
      "Explosive follower growth",
      "Effective brand storytelling",
      "Sustainable customer base"
    ]
  },
  {
    id: "sm-mgmt",
    title: "Social Media Management",
    slug: "social-media-management",
    icon: Users,
    description: "Daily management of your brand's voice and growth across platforms.",
    longDescription: "Let us handle the daily grind of posting, engaging, and growing your social presence while you focus on your business.",
    problem: "Consistent posting and community engagement take hours every day—time that business owners don't have.",
    solution: "We provide end-to-end management, from content calendars to community engagement, ensuring your brand stays active and professional 24/7.",
    benefits: [
      "Consistent brand presence",
      "Professional content creation",
      "Active community engagement",
      "Reputation management",
      "Strategic growth planning"
    ],
    process: [
      "Account Audit",
      "Monthly Content Calendar",
      "Daily Posting & Monitoring",
      "Community Engagement",
      "Growth Analytics"
    ],
    results: [
      "Worry-free social presence",
      "Polished brand image",
      "Increased organic reach",
      "Consistent audience touchpoints"
    ]
  },
  {
    id: "seo",
    title: "SEO",
    slug: "seo",
    icon: Search,
    description: "Dominate search results and get organic traffic that keeps growing.",
    longDescription: "Build long-term digital authority with SEO that puts you at the top of Google for the long haul.",
    problem: "If you're not on Page 1, you're invisible. Depending solely on paid ads is expensive and unsustainable.",
    solution: "We optimize your site's technical structure and content to earn Google's trust, driving free lead-generating traffic forever.",
    benefits: [
      "Sustainable organic traffic",
      "Long-term ROI",
      "Search visibility for niche keywords",
      "Enhanced site credibility",
      "Better user experience"
    ],
    process: [
      "Technical Site Audit",
      "Keyword Strategy",
      "On-Page Optimization",
      "Backlink Acquisition",
      "Content Marketing"
    ],
    results: [
      "Page 1 rankings",
      "Dominance over competitors",
      "Compounding traffic growth",
      "Zero per-click costs"
    ]
  }
];
