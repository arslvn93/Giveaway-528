// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg", // Raptors game action image
  "https://images.unsplash.com/photo-1594007650927-1e5de3ad6c3c?q=80&w=500", // Excited fans at a game
  "https://images.unsplash.com/photo-1587202372775-e6cfb4fc0d86?q=80&w=500", // Arena atmosphere
];

export const prizeContent = {
  title: "Toronto Raptors Game Tickets Giveaway",
  description:
    "Win two lower bowl tickets to see the Toronto Raptors live on Friday, March 28th! Enjoy premium seating and experience the thrill of live basketball in one of North America's most exciting cities.",
  features: [
    "Lower bowl seating for an up-close view of the action",
    "Experience the energy of live NBA basketball",
    "Tickets valued between $300 and $400",
    "Perfect for an unforgettable date night or family outing",
    "No purchase necessary—just enter for your chance to win!",
  ],
  value: "$300 - $400",
};

// Header section
export const headerContent = {
  title: "Win Two Lower Bowl Raptors Tickets!",
  description:
    "Experience the thrill of live basketball! Enter for your chance to win premium Raptors tickets valued at $300-$400. No purchase necessary.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description:
    "Entering is easy! Follow these simple steps to secure your chance for an unforgettable Raptors game experience.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description:
        "Enter your full name and email address in the form to submit your entry.",
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description:
        "Share the giveaway on social media to earn additional entries and boost your chances.",
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description:
        "Check your email to confirm your entry and you’ll be in the game!",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Quick & Easy",
      desc: "Takes less than a minute to enter",
    },
    {
      icon: "Trophy",
      title: "Multiple Entries",
      desc: "Share for extra chances to win",
    },
    {
      icon: "Gift",
      title: "Premium Prize",
      desc: "Tickets valued at $300-$400",
    },
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText:
      "By entering, you agree to our Terms & Conditions and Privacy Policy.",
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry and secure your spot.",
  },
  currentEntries: 150,
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description:
    "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer:
        "Anyone 18 years or older is welcome to enter this giveaway. Open to all basketball fans ready for an unforgettable night out!",
    },
    {
      question: "How long does the giveaway run?",
      answer:
        "The giveaway runs from March 3, 2025 until March 21, 2025, as indicated by the countdown timer.",
    },
    {
      question: "How will the winner be selected?",
      answer:
        "The winner will be selected randomly from all valid entries using a certified random selection tool to ensure fairness.",
    },
    {
      question: "When and how will the winner be notified?",
      answer:
        "The winner will be notified via email within 48 hours after the giveaway ends. They must respond within 72 hours to claim their prize.",
    },
    {
      question: "How many times can I enter?",
      answer:
        "Each person may submit one entry directly. Additional entries can be earned through sharing the giveaway on social media (up to 3 additional entries).",
    },
    {
      question: "Is my information secure?",
      answer:
        "Absolutely. Your information will only be used for this giveaway and will not be shared with any third parties.",
    },
  ],
  imageUrl:
    "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Set a reminder for the draw date on March 21, 2025",
  ],
  importantNotice:
    "All winners will be contacted via the email provided. Please check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF",
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  brokerage: {
    name: "The Real Brokerage, Inc.",
    address: "133 Richmond Street West Suite 302",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy",
};

// Countdown
export const countdownContent = {
  endDate: new Date("March 21, 2025"),
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: "amber-600",
    light: "amber-400",
    dark: "amber-800",
    gradient: "from-amber-500 to-amber-700",
    text: "amber-700",
    textLight: "amber-500",
    textDark: "amber-900",
    hover: "amber-700",
    border: "amber-200",
    background: "amber-50",
    accent: "amber-100",
    accentDark: "amber-300",
  },
  secondary: {
    main: "white",
    text: "gray-700",
    textLight: "gray-600",
    textDark: "gray-800",
    border: "gray-200",
    background: "white",
    accent: "gray-100",
  },
  utility: {
    success: "green-600",
    successLight: "green-100",
    error: "red-600",
    errorLight: "red-100",
    warning: "yellow-600",
    warningLight: "yellow-100",
    info: "blue-600",
    infoLight: "blue-100",
  },
  gradients: {
    header: "from-amber-100/70 via-amber-50/40 to-transparent",
    countdownBg: "from-amber-800 to-amber-950",
    countdownText: "from-amber-200 to-amber-400",
    prizeTitle: "from-amber-700 to-amber-500",
    button: "from-amber-500 to-amber-600",
    buttonHover: "from-amber-600 to-amber-700",
  },
  shadows: {
    small: "shadow-md",
    medium: "shadow-lg",
    large: "shadow-xl",
    extraLarge: "shadow-2xl",
    glow: "shadow-[0_0_15px_rgba(251,191,36,0.3)]",
  },
  animations: {
    float: "animate-float",
    pulseSlow: "animate-pulse-slow",
    bounceSlow: "animate-bounce-slow",
  },
};