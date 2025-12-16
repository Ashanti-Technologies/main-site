export interface Feature {
  id: string;
  name: string;
  description: string;
  devDays: number; // Base developer days required
}

export interface FeatureCategory {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  features: Feature[];
}

export interface Platform {
  id: "web" | "ios" | "android";
  name: string;
  description: string;
  multiplier: number; // Cost multiplier for this platform
}

// Placeholder daily rate (can be configured)
export const DAILY_RATE = 500; // USD per day

// Design time as percentage of development time
export const DESIGN_PERCENTAGE = 0.25; // 25%

export const platforms: Platform[] = [
  {
    id: "web",
    name: "Web App",
    description: "Web application or backend",
    multiplier: 1.0,
  },
  {
    id: "ios",
    name: "iOS App",
    description: "Native iPhone & iPad app",
    multiplier: 1.2,
  },
  {
    id: "android",
    name: "Android App",
    description: "Native Android app",
    multiplier: 1.2,
  },
];

export const featureCategories: FeatureCategory[] = [
  {
    id: "users",
    name: "Users & Accounts",
    icon: "Users",
    features: [
      {
        id: "email-auth",
        name: "Email & Password Login",
        description: "Standard email/password authentication",
        devDays: 3,
      },
      {
        id: "social-login",
        name: "Social Login",
        description: "Login with Google, Facebook, etc.",
        devDays: 2,
      },
      {
        id: "user-profiles",
        name: "User Profiles",
        description: "Editable user profiles with avatars",
        devDays: 4,
      },
      {
        id: "user-roles",
        name: "User Roles & Permissions",
        description: "Role-based access control",
        devDays: 5,
      },
    ],
  },
  {
    id: "content",
    name: "User Content",
    icon: "FileText",
    features: [
      {
        id: "file-upload",
        name: "File Uploads",
        description: "Upload images, documents, or media",
        devDays: 4,
      },
      {
        id: "ratings",
        name: "Ratings & Reviews",
        description: "User ratings and review system",
        devDays: 3,
      },
      {
        id: "comments",
        name: "Comments & Discussions",
        description: "Commenting system on content",
        devDays: 3,
      },
    ],
  },
  {
    id: "dates-locations",
    name: "Dates & Locations",
    icon: "MapPin",
    features: [
      {
        id: "calendar",
        name: "Calendar Integration",
        description: "Event scheduling and calendars",
        devDays: 5,
      },
      {
        id: "maps",
        name: "Maps & Location Display",
        description: "Interactive maps and markers",
        devDays: 4,
      },
      {
        id: "location-search",
        name: "Location-based Search",
        description: "Search by proximity or area",
        devDays: 5,
      },
    ],
  },
  {
    id: "social",
    name: "Social & Engagement",
    icon: "MessageCircle",
    features: [
      {
        id: "messaging",
        name: "User Messaging",
        description: "Direct messaging between users",
        devDays: 6,
      },
      {
        id: "push-notifications",
        name: "Push Notifications",
        description: "Mobile and web push notifications",
        devDays: 4,
      },
      {
        id: "social-sharing",
        name: "Social Sharing",
        description: "Share content to social media",
        devDays: 2,
      },
    ],
  },
  {
    id: "billing",
    name: "Billing & eCommerce",
    icon: "CreditCard",
    features: [
      {
        id: "shopping-cart",
        name: "Shopping Cart",
        description: "Product cart functionality",
        devDays: 5,
      },
      {
        id: "payments",
        name: "Payment Processing",
        description: "Credit card and payment gateway",
        devDays: 6,
      },
      {
        id: "subscriptions",
        name: "Subscriptions",
        description: "Recurring billing and plans",
        devDays: 7,
      },
    ],
  },
  {
    id: "admin",
    name: "Admin & Analytics",
    icon: "LayoutDashboard",
    features: [
      {
        id: "dashboard",
        name: "Admin Dashboard",
        description: "Administrative control panel",
        devDays: 8,
      },
      {
        id: "analytics",
        name: "Analytics & Reporting",
        description: "Usage statistics and reports",
        devDays: 5,
      },
      {
        id: "user-management",
        name: "User Management",
        description: "Admin user CRUD operations",
        devDays: 4,
      },
    ],
  },
  {
    id: "integrations",
    name: "Integrations",
    icon: "Plug",
    features: [
      {
        id: "third-party-api",
        name: "Third-party API",
        description: "Connect to external services",
        devDays: 4,
      },
      {
        id: "email-service",
        name: "Email Service",
        description: "Transactional emails",
        devDays: 3,
      },
    ],
  },
  {
    id: "security",
    name: "Security",
    icon: "Shield",
    features: [
      {
        id: "2fa",
        name: "Two-Factor Authentication",
        description: "SMS or app-based 2FA",
        devDays: 4,
      },
      {
        id: "encryption",
        name: "Data Encryption",
        description: "End-to-end data encryption",
        devDays: 5,
      },
    ],
  },
];

// Helper function to calculate total for selected features and platforms
export function calculateEstimate(
  selectedFeatures: Set<string>,
  selectedPlatforms: Set<string>
): {
  totalDevDays: number;
  totalDesignDays: number;
  totalCost: number;
  platformBreakdown: { platform: Platform; cost: number; devDays: number }[];
} {
  // Calculate base development days from selected features
  const baseDevDays = featureCategories.reduce((total, category) => {
    return (
      total +
      category.features
        .filter((f) => selectedFeatures.has(f.id))
        .reduce((sum, f) => sum + f.devDays, 0)
    );
  }, 0);

  // Calculate for each selected platform
  const platformBreakdown = platforms
    .filter((p) => selectedPlatforms.has(p.id))
    .map((platform) => {
      const devDays = Math.ceil(baseDevDays * platform.multiplier);
      const cost = devDays * DAILY_RATE;
      return { platform, cost, devDays };
    });

  const totalDevDays = platformBreakdown.reduce((sum, p) => sum + p.devDays, 0);
  const totalDesignDays = Math.ceil(totalDevDays * DESIGN_PERCENTAGE);
  const designCost = totalDesignDays * DAILY_RATE;
  const devCost = platformBreakdown.reduce((sum, p) => sum + p.cost, 0);
  const totalCost = devCost + designCost;

  return {
    totalDevDays,
    totalDesignDays,
    totalCost,
    platformBreakdown,
  };
}
