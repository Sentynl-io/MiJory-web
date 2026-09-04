export const brand = {
  mijory: '/brand/mijory.png',
  portfolioWall: '/brand/portfolio-wall.jpg',
  favicon: '/favicon.png',
};

export const companyLogos = {
  trakpath: '/brand/trakpath.png',
  rxpath: '/brand/rxpath.jpg',
  sentynl: '/brand/sentynl.jpg',
  biotide: '/brand/biotide.png',
};

/** true = logo has baked background art — show full-bleed in frame, no white plate */
export const logoIsCard = {
  trakpath: false,
  rxpath: true,
  sentynl: true,
  biotide: false,
};

export const productShots = {
  hero: '/product/hero-vial.jpg',
  trakpath: '/product/trakpath-home.jpg',
  trakpathMobile: '/product/trakpath-mobile.jpg',
  rxpath: '/product/rxpath-home.jpg',
  sentynl: '/product/sentynl-home.jpg',
  biotide: '/product/biotide-home.jpg',
  samGraph: '/product/sam-graph.png',
};

export const companyBanners = {
  trakpath: '/product/banner-trakpath.jpg',
  rxpath: '/product/banner-rxpath.jpg',
  biotide: '/product/banner-biotide.jpg',
  sentynl: null,
};

export const strategicPartners = [
  {
    id: 'clickbank',
    name: 'ClickBank',
    role: 'Global e-commerce & affiliate marketplace',
    logo: '/partners/clickbank.png',
    url: 'https://www.clickbank.com',
  },
  {
    id: 'plexusdx',
    name: 'PlexusDx',
    role: 'Clinical diagnostics & biomarker analysis',
    logo: '/partners/plexusdx.png',
    url: 'https://plexusdx.com',
  },
  {
    id: 'manufacturer',
    name: '503A / 503B Manufacturing',
    role: 'Exclusive cGMP compliant fulfillment partner',
    logo: '/partners/manufacturer.png',
    url: null,
  },
];
