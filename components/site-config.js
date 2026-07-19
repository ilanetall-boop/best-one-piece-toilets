/**
 * site-config.js — Best One Piece Toilets
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Shower Doors",
  domain: "best-one-piece-toilets.com",
  tagline: "Expert reviews of elongated, dual-flush & comfort-height one-piece toilets",
  logo: "images/one-piece-toilets-logo.svg?v=1",
  newsletterUrl: "",
  affiliateTag: "bestonepiecetoil-20",
  gaId: "G-PCF190GJD9",
  colors: {
    primary: "#37556B",
    primaryLight: "#5A7994",
    primaryDark: "#233647",
    accent: "#C08A4E",
    accentDark: "#9E6E38"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "articles" },
    { label: "Comparisons", href: "comparisons" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ],
  footer: {
    description: "Your trusted source for one-piece toilet reviews, comparisons, and buying guides. From compact dual-flush models to comfort-height elongated designs, we help you choose the toilet that fits your bathroom and budget.",
    quickLinks: [
      { label: "All Articles", href: "articles" },
      { label: "Comparisons", href: "comparisons" },
      { label: "How We Research", href: "how-we-research" },
      { label: "About Us", href: "about" }
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
      { label: "Affiliate Disclosure", href: "disclosure" }
    ],
    network: [
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" },
      { label: "Best Shower Curtains", href: "https://www.best-shower-curtains.com" },
      { label: "Best Toilet Seats", href: "https://www.besttoiletseats.com" },
      { label: "Best Bathroom Vanities", href: "https://www.bestbathroomvanities.com" },
      { label: "Best Shower Heads", href: "https://www.best-shower-heads.com" },
      { label: "Best Soap Dispensers", href: "https://www.best-soap-dispensers.com" },
      { label: "Best Bathroom Mirrors", href: "https://www.bestbathroommirrors.com" },
      { label: "Best Bath Towels", href: "https://www.best-bath-towels.com" },
      { label: "Best Towel Warmers", href: "https://www.best-towel-warmers.com" },
      { label: "Best Bathroom Faucets", href: "https://www.best-bathroom-faucets.com" },
      { label: "Best Bathroom Storage", href: "https://bestbathroomstorage.com" },
      { label: "Best Freestanding Bathtubs", href: "https://best-freestanding-bathtubs.com" },
      { label: "Best Shower Doors", href: "https://best-shower-doors.com" }
    ]
  },
  networkBanners: [
    {
      id: "best-freestanding-bathtubs",
      domain: "best-freestanding-bathtubs.com",
      headline: "Pairing a Freestanding Tub?",
      description: "Planning the whole bathroom? Our sister site compares the best freestanding bathtubs, from compact acrylic soakers to cast-iron clawfoots.",
      ctaText: "Browse Bathtubs",
      active: true
    },
    {
      id: "best-shower-heads",
      domain: "best-shower-heads.com",
      headline: "Looking for the Perfect Shower Head?",
      description: "Expert reviews of the best shower heads — from rainfall to high-pressure to filtered designs.",
      ctaText: "Browse Shower Heads",
      active: true
    },
    {
      id: "best-bathroom-faucets",
      domain: "best-bathroom-faucets.com",
      headline: "Upgrading Your Bathroom Faucet?",
      description: "Expert reviews of the best bathroom faucets — matte black to brushed nickel, modern to classic.",
      ctaText: "Browse Faucets",
      active: true
    }
  ]
};

// Set CSS variables immediately
(function () {
  var c = window.SITE_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary', c.primary);
  r.setProperty('--primary-light', c.primaryLight);
  r.setProperty('--primary-dark', c.primaryDark);
  r.setProperty('--accent', c.accent);
  r.setProperty('--accent-dark', c.accentDark);

  // Reserve header space to prevent CLS (layout shift)
  var s = document.createElement('style');
  s.textContent = '#site-header{min-height:89px;background:#fff;border-bottom:1px solid #e5e5e5;position:sticky;top:0;z-index:50}';
  document.head.appendChild(s);
})();
