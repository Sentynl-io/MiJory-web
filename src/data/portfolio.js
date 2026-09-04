export const COMPANY_TABS = ['trakpath', 'rxpath', 'sentynl', 'biotide'];

export const INVESTOR_DECK_URL = 'https://sentynl-io.github.io/mijory-deck/index.html';

export const MIJORY_LINKEDIN = 'https://www.linkedin.com/company/mijory';

export const portfolio = {
  trakpath: {
    id: 'trakpath',
    name: 'TrakPath',
    tagline: 'Core Verification & Provenance Engine',
    icon: 'qrcode',
    logo: '/brand/trakpath.png',
    logoCard: false,
    banner: '/product/banner-trakpath.jpg',
    productShot: '/product/trakpath-home.jpg',
    productShotAlt: '/product/trakpath-mobile.jpg',
    linkedin: 'https://www.linkedin.com/company/trakpath-llc',
    link: {
      url: 'https://trakpath.io',
      text: 'Visit TrakPath',
      type: 'billboard',
    },
    description:
      'TrakPath is MiJory’s cryptographic provenance rail—locking certificates of analysis to an immutable audit trail with Base L2 hashing and immuDB verification. Pure SaaS / per-scan economics that keep the label fixed, the product state live, and the custody chain defensible.',
    synergy:
      'Underwrites BioTide USA wholesale volume and RxPath clinical workflows with end-to-end chain-of-custody. Every scan creates a verified touchpoint—proving provenance, GMP status, and eliminating redundant retesting waste across the stack.',
    advantages: [
      'Eliminates $15K–$50K/month in redundant retesting waste',
      'Base L2 cryptographic hashing + immuDB COA lock',
      'SaaS seats, per-scan verification fees, and LIMS modules',
    ],
    traction:
      'In market validation with hemp partners advancing to commercial SaaS; provisional IP filed and multiple partners in pre-v1 beta.',
    tam: 'High-margin SaaS / per-scan tollbooth within MiJory’s $65B SAM',
    forecast:
      'Become the required provenance standard for regulated high-value commerce—driving 85%+ gross margin expansion across the unified ecosystem.',
    theme: {
      primaryText: 'text-mj-accent',
      titleText: 'text-mj-text',
      mutedText: 'text-mj-muted',
      borderMain: 'border-mj',
      borderAccent: 'border-mj-strong',
      iconBox: 'bg-mj-elevated border-mj text-mj-accent',
      tabColor: 'bg-mj-accent/15 text-mj-accent border-mj-accent/30',
      panel: 'mj-panel-soft',
    },
    infographic: {
      edgeTitle: 'Retesting & Audit Overhead',
      edgeMetrics: [
        { label: 'TrakPath verification', value: 10, display: 'Near-Zero Waste' },
        { label: 'Legacy retesting', value: 85, display: '$15K–$50K/mo' },
      ],
      marketTitle: 'Margin Expansion',
      marketMetrics: [
        { label: 'Target Gross Margin', value: '85%+', height: '100%' },
        { label: 'MiJory SAM', value: '$65.0B', height: '70%' },
      ],
    },
  },
  rxpath: {
    id: 'rxpath',
    name: 'RxPath',
    tagline: 'Core Clinical & Telehealth Engine',
    icon: 'activity',
    logo: '/brand/rxpath.jpg',
    logoCard: true,
    banner: '/product/banner-rxpath.jpg',
    productShot: '/product/rxpath-home.jpg',
    linkedin: 'https://www.linkedin.com/company/rxpathai',
    link: {
      url: 'https://rxpath.ai',
      text: 'Visit RxPath',
      type: 'billboard',
    },
    description:
      'RxPath is MiJory’s mandatory baseline care architecture—a telehealth routing layer connecting clinicians, clinics, and 503A/503B pharmacy networks. Baseline diagnostic biomarker testing and active physician oversight are required before therapy is prescribed.',
    synergy:
      'Feeds Sentynl with clinical telemetry while routing scripts through BioTide USA supply and TrakPath-verified fulfillment—turning compliant care into recurring biomarker and Rx revenue.',
    advantages: [
      '300+ clinicians on a 50-state telehealth routing layer',
      'Mandatory PlexusDx baseline biomarker testing',
      'E-script capabilities & 503A/503B pharmacy routing',
      'Recurring visit, onboarding, and clinician SaaS fees',
    ],
    traction:
      '300+ clinicians live today with e-script capabilities and pharmacy routing across the clinical network.',
    tam: 'Clinical lab & telehealth slice of MiJory’s $65B SAM',
    forecast:
      'Scale from peptide-focused care into specialty protocols (HRT, TRT, GLP-1, anti-aging) and become the preferred telehealth commerce layer in the longevity stack.',
    theme: {
      primaryText: 'text-mj-accent',
      titleText: 'text-mj-text',
      mutedText: 'text-mj-muted',
      borderMain: 'border-mj',
      borderAccent: 'border-mj-strong',
      iconBox: 'bg-mj-elevated border-mj text-mj-accent',
      tabColor: 'bg-mj-accent/15 text-mj-accent border-mj-accent/30',
      panel: 'mj-panel-soft',
    },
    infographic: {
      edgeTitle: 'Care Architecture',
      edgeMetrics: [
        { label: 'RxPath + baseline labs', value: 95, display: 'Compliant' },
        { label: 'Unsupervised gray market', value: 20, display: 'High Risk' },
      ],
      marketTitle: 'Clinical Network',
      marketMetrics: [
        { label: 'Live Clinicians', value: '300+', height: '55%' },
        { label: 'Clinical Lab Market', value: '$308B', height: '100%' },
      ],
    },
  },
  sentynl: {
    id: 'sentynl',
    name: 'Sentynl',
    tagline: 'Core Intelligence & Data Engine · Trust Graph™',
    icon: 'shield',
    logo: '/brand/sentynl.jpg',
    logoCard: true,
    banner: null,
    productShot: '/product/sentynl-home.jpg',
    description:
      'Sentynl aggregates anonymized telemetry across B2B nodes—supply, clinical, and verification events—into a compounding Trust Graph™. The result is enterprise-grade real-world evidence (RWE) with licensing upside for pharma, insurers, and health systems.',
    synergy:
      'Ingests exhaust from TrakPath scans, BioTide USA commerce, and RxPath clinical outcomes—turning every ecosystem transaction into a durable data moat and high-margin ARR layer.',
    advantages: [
      'Multi-node streaming: supply chain, clinical outcomes & market exhaust',
      'Trust Graph™ for underwriting, fraud detection & population health',
      'Dual-stream licensing path for pharma R&D and insurers',
    ],
    traction:
      'Live data ingestion across supply-chain, clinical, and verification nodes as the stack scales—positioned for warehouse enrichment and early AI underwriting pilots.',
    tam: 'RWE / data-licensing upside within MiJory’s $65B SAM',
    forecast:
      'Enterprise RWE licensing at platform scale—recurring software/data ARR for pharma R&D, trial recruitment, and health-system risk scoring.',
    theme: {
      primaryText: 'text-mj-accent',
      titleText: 'text-mj-text',
      mutedText: 'text-mj-muted',
      borderMain: 'border-mj',
      borderAccent: 'border-mj-strong',
      iconBox: 'bg-mj-elevated border-mj text-mj-accent',
      tabColor: 'bg-mj-accent/15 text-mj-accent border-mj-accent/30',
      panel: 'mj-panel-soft',
    },
    infographic: {
      edgeTitle: 'Data Moat Quality',
      edgeMetrics: [
        { label: 'Sentynl Trust Graph™', value: 95, display: 'Network RWE' },
        { label: 'Siloed clinic data', value: 30, display: 'Fragmented' },
      ],
      marketTitle: 'Margin Expansion',
      marketMetrics: [
        { label: 'Target Gross Margin', value: '85%+', height: '100%' },
        { label: 'MiJory SAM', value: '$65.0B', height: '70%' },
      ],
    },
  },
  biotide: {
    id: 'biotide',
    name: 'BioTide USA',
    tagline: 'Core Commerce & Supply Engine',
    icon: 'dna',
    logo: '/brand/biotide.png',
    logoCard: false,
    banner: '/product/banner-biotide.jpg',
    productShot: '/product/biotide-home.jpg',
    linkedin: 'https://www.linkedin.com/company/biotide-usa',
    link: {
      url: 'https://wholesale.biotideusa.com',
      text: 'Visit BioTide USA',
      type: 'billboard',
    },
    description:
      'BioTide USA is MiJory’s high-velocity wholesale commerce layer—routing peptide, cosmetic, supplement, and longevity compounds through a zero-inventory, partner-fulfilled model. Network volume is verified on TrakPath without MiJory carrying manufacturing CapEx or spoilage risk.',
    synergy:
      '200+ reps and 511+ network entities push wholesale volume through TrakPath verification and into RxPath-connected clinical channels—funding the ecosystem while partners own physical fulfillment.',
    advantages: [
      '511+ network entities and 200+ reps live nationally',
      '~$600K/mo gross path without inventory or spoilage risk',
      'Catalog spanning peptides, cosmetics, supplements & longevity compounds',
      'Exclusive 503A/503B partner fulfillment',
    ],
    traction:
      '511+ network entities (and growing) with 200+ reps on national wholesale volume—~$600K/mo gross path live today.',
    tam: '$299B Peptide Therapeutics · MiJory SAM $65.0B',
    forecast:
      'Scale cross-border RUO wholesale and multi-category catalog growth while remaining the commerce foundation of the MiJory flywheel.',
    theme: {
      primaryText: 'text-mj-accent',
      titleText: 'text-mj-text',
      mutedText: 'text-mj-muted',
      borderMain: 'border-mj',
      borderAccent: 'border-mj-strong',
      iconBox: 'bg-mj-elevated border-mj text-mj-accent',
      tabColor: 'bg-mj-accent/15 text-mj-accent border-mj-accent/30',
      panel: 'mj-panel-soft',
    },
    infographic: {
      edgeTitle: 'Commerce Model',
      edgeMetrics: [
        { label: 'BioTide USA tollbooth', value: 90, display: 'Zero Inventory' },
        { label: 'Legacy manufacturing', value: 35, display: 'CapEx Heavy' },
      ],
      marketTitle: 'Market Context',
      marketMetrics: [
        { label: 'MiJory SAM', value: '$65.0B', height: '45%' },
        { label: 'Peptide Therapeutics', value: '$299B', height: '100%' },
      ],
    },
  },
};

export const portfolioList = Object.values(portfolio);
