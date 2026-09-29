export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'women' | 'men' | 'outerwear' | 'shirts' | 'trousers' | 'dresses' | 'accessories';
  gender: 'women' | 'men' | 'unisex';
  price: number; // in INR ₹
  originalPrice?: number;
  badge?: 'NEW' | 'LIMITED' | 'BESTSELLER' | 'ARCHIVE';
  images: string[];
  colors: ProductColor[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL')[];
  description: string;
  details: string[];
  composition: string;
  careInstructions: string[];
  fit: string;
  collection: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'th-01',
    slug: 'structured-overshirt-wine',
    name: 'Structured Overshirt in Wine Wool',
    tagline: 'Architectural boxy cut with concealed mother-of-pearl placket',
    category: 'outerwear',
    gender: 'unisex',
    price: 6499,
    originalPrice: 7999,
    badge: 'NEW',
    images: [
      '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
      '/src/assets/images/tehri_hero_campaign_1790685959459.jpg',
      '/src/assets/images/tehri_collection_men_1790686025637.jpg'
    ],
    colors: [
      { name: 'Tehri Burgundy', hex: '#98323F' },
      { name: 'Deep Charcoal', hex: '#151515' },
      { name: 'Warm Ivory', hex: '#F8F5EF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A signature TEHRI silhouette cut from 380gsm high-twist virgin wool. Designed to drape with structural weight while allowing fluid arm movement. Features internal bound seams and hidden horn closures.',
    details: [
      'Concealed double-layer placket',
      'Dropped shoulder with tailored gusset',
      'Side seam vents with reinforcement bartacks',
      'Dual interior welt pockets',
      'Crafted in limited small-batch editions'
    ],
    composition: '100% Fine Merino Virgin Wool (Certified RWS)',
    careInstructions: [
      'Dry clean only with eco-friendly solvents',
      'Steam gently from 15cm distance',
      'Store on wide-shoulder cedar hangers'
    ],
    fit: 'Relaxed tailored drape. Take your standard size for editorial drape, or size down for structured contour.',
    collection: 'Collection 01: Between Form & Flow',
    isNewArrival: true,
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'th-02',
    slug: 'flowing-cashmere-cocoon-coat',
    name: 'Sculptural Cashmere Cocoon Coat',
    tagline: 'Sweeping floor-length overcoat draped in signature deep wine wool',
    category: 'outerwear',
    gender: 'women',
    price: 18499,
    badge: 'LIMITED',
    images: [
      '/src/assets/images/tehri_hero_campaign_1790685959459.jpg',
      '/src/assets/images/tehri_campaign_film_1790685989101.jpg',
      '/src/assets/images/tehri_collection_women_1790686005820.jpg'
    ],
    colors: [
      { name: 'Vintage Wine', hex: '#98323F' },
      { name: 'Midnight Charcoal', hex: '#151515' },
      { name: 'Raw Sandstone', hex: '#DDD4C9' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'An expansive outerwear statement engineered with soft unlined shoulders and an architectural silhouette. Cut from double-faced cashmere and brushed wool that yields warmth without rigidity.',
    details: [
      'Hand-finished rolled lapel edge',
      'Generous deep patch pockets with flap',
      'Self-fabric architectural wrap belt',
      'Full cupro cupro lining in tonal champagne',
      'Numbered atelier batch: 80 pieces total'
    ],
    composition: '80% Recycled Cashmere, 20% Fine Wool',
    careInstructions: [
      'Specialist dry clean only',
      'Do not wash or tumble dry',
      'Protect from prolonged rain'
    ],
    fit: 'Fluid oversized cocoon cut. Drapes softly over knitwear and tailored suiting.',
    collection: 'Collection 01: Between Form & Flow',
    isNewArrival: true,
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'th-03',
    slug: 'asymmetric-fluid-silk-gown',
    name: 'Asymmetric Fluid Silk Column Dress',
    tagline: 'High-slit evening drape crafted from heavy washed mulberry silk',
    category: 'dresses',
    gender: 'women',
    price: 12999,
    badge: 'BESTSELLER',
    images: [
      '/src/assets/images/tehri_collection_women_1790686005820.jpg',
      '/src/assets/images/tehri_campaign_film_1790685989101.jpg',
      '/src/assets/images/tehri_hero_campaign_1790685959459.jpg'
    ],
    colors: [
      { name: 'Burgundy Crimson', hex: '#98323F' },
      { name: 'Smoked Onyx', hex: '#1E1E1E' },
      { name: 'Oatmeal Silk', hex: '#FCFAF7' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'An exercise in balance and tension. One sculptured sleeve contrasts with an open back and fluid bias-cut paneling that cascades down to the ankle.',
    details: [
      'Bias cut for natural contour and stretch',
      'Concealed side zipper with hook closure',
      'Raw edge hem with micro-stitch finish',
      'Breathable organic silk lining'
    ],
    composition: '100% Heavy Mulberry Silk (30 momme)',
    careInstructions: [
      'Dry clean only',
      'Cool iron inside out with pressing cloth',
      'Do not spray perfume directly on silk'
    ],
    fit: 'Slightly skimming the body. Fits true to size with elegant bias movement.',
    collection: 'The Red Room Edit',
    isNewArrival: false,
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'th-04',
    slug: 'tailored-minimalist-overcoat-charcoal',
    name: 'Architectural Minimalist Overcoat',
    tagline: 'Sharp single-breasted wool coat with clean concealed fastening',
    category: 'outerwear',
    gender: 'men',
    price: 16999,
    badge: 'NEW',
    images: [
      '/src/assets/images/tehri_collection_men_1790686025637.jpg',
      '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
      '/src/assets/images/tehri_campaign_film_1790685989101.jpg'
    ],
    colors: [
      { name: 'Deep Charcoal', hex: '#151515' },
      { name: 'Burgundy Wine', hex: '#681F29' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Cut with razor-sharp shoulders and an elongated length, this overcoat synthesizes bespoke Savile Row restraint with contemporary ease. Subtle internal burgundy piping highlights TEHRI heritage.',
    details: [
      'Notch lapel with throat tab detail',
      'Concealed horn button front placket',
      'Double back vent for effortless gait',
      'Bespoke canvas chest construction'
    ],
    composition: '90% Wool, 10% Cashmere',
    careInstructions: ['Dry clean only', 'Store with cedar blocks'],
    fit: 'Tailored regular silhouette. Fits cleanly over a knit or suit jacket.',
    collection: 'Collection 01: Between Form & Flow',
    isNewArrival: true,
    isFeatured: true,
    isBestseller: false,
  },
  {
    id: 'th-05',
    slug: 'relaxed-fluid-poplin-shirt',
    name: 'Relaxed Fluid Poplin Shirt',
    tagline: 'Crisp organic Egyptian cotton poplin with extended cuffs',
    category: 'shirts',
    gender: 'unisex',
    price: 4999,
    originalPrice: 5999,
    images: [
      '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
      '/src/assets/images/tehri_collection_women_1790686005820.jpg'
    ],
    colors: [
      { name: 'Warm Ivory', hex: '#F8F5EF' },
      { name: 'Wine Accent', hex: '#98323F' },
      { name: 'Soft Black', hex: '#1E1E1E' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A foundation wardrobe piece woven from 120s two-ply GOTS certified Egyptian cotton. Silky tactile hand-feel with a crisp editorial collar and mother-of-pearl buttons.',
    details: [
      'Convertible band or spread collar styling',
      'Extended double cuffs with dual buttoning',
      'Curved high-low hem with side gussets',
      'Pre-washed for zero shrinkage'
    ],
    composition: '100% GOTS Certified Organic Cotton',
    careInstructions: ['Gentle cycle at 30°C', 'Line dry in shade', 'Warm iron'],
    fit: 'Relaxed contemporary cut with airy body volume.',
    collection: 'Essential Form',
    isNewArrival: false,
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'th-06',
    slug: 'wide-leg-pleated-trouser',
    name: 'Deep Double-Pleated Fluid Trouser',
    tagline: 'High-waisted trousers with architectural drape and side buckle adjusters',
    category: 'trousers',
    gender: 'unisex',
    price: 5999,
    badge: 'BESTSELLER',
    images: [
      '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
      '/src/assets/images/tehri_collection_men_1790686025637.jpg'
    ],
    colors: [
      { name: 'Charcoal Black', hex: '#151515' },
      { name: 'Muted Sand', hex: '#DDD4C9' },
      { name: 'Wine Heather', hex: '#98323F' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Engineered with twin forward pleats that create sweeping column volume while walking. Complete with side waist adjusters for a bespoke fit without belt loops.',
    details: [
      'Double forward pleats on each leg',
      'German brass side buckle adjusters',
      'Slanted front pockets and buttoned rear jetted pockets',
      'Unfinished hem length for custom tailoring'
    ],
    composition: '75% Tropical Wool, 25% Silk',
    careInstructions: ['Dry clean recommended', 'Steam to refresh pleats'],
    fit: 'High rise, generous wide leg with relaxed drape.',
    collection: 'Collection 01: Between Form & Flow',
    isNewArrival: true,
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'th-07',
    slug: 'heavy-gauge-ribbed-knit-turtleneck',
    name: 'Heavy Ribbed Sculptural Turtleneck',
    tagline: 'Thick tactile 5-gauge knit spun from undyed organic merino wool',
    category: 'shirts',
    gender: 'unisex',
    price: 7499,
    badge: 'LIMITED',
    images: [
      '/src/assets/images/tehri_hero_campaign_1790685959459.jpg',
      '/src/assets/images/tehri_campaign_film_1790685989101.jpg'
    ],
    colors: [
      { name: 'Raw Ecru', hex: '#FCFAF7' },
      { name: 'Deep Burgundy', hex: '#98323F' },
      { name: 'Charcoal Smoke', hex: '#151515' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Substantial tactile ribbing in pure organic merino wool. Designed with a folded architectural neck that holds its form naturally without pinching.',
    details: [
      '5-gauge brioche knit construction',
      'Raglan sleeve detailing with visible fashioning marks',
      'Subtle thumb loops at cuff interior',
      'Hand-linked in small workshops'
    ],
    composition: '100% Extrafine Organic Merino Wool',
    careInstructions: ['Hand wash in cold water with wool detergent', 'Dry flat on towel'],
    fit: 'Boxy, cocoon fit with structured neck.',
    collection: 'Essential Form',
    isNewArrival: true,
    isFeatured: false,
    isBestseller: false,
  },
  {
    id: 'th-08',
    slug: 'atelier-leather-tote-bag',
    name: 'Sculpted Calfskin Atelier Tote',
    tagline: 'Minimalist hand-stitched leather tote with suede interior and wine crest',
    category: 'accessories',
    gender: 'unisex',
    price: 11499,
    badge: 'NEW',
    images: [
      '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
      '/src/assets/images/tehri_campaign_film_1790685989101.jpg'
    ],
    colors: [
      { name: 'Burgundy Wine', hex: '#98323F' },
      { name: 'Obsidian Black', hex: '#151515' }
    ],
    sizes: ['M'],
    description: 'Cut from full-grain Tuscan calf leather that patinas beautifully with age. Minimalist architectural lines, reinforced base, and discreet debossed TEHRI monogram.',
    details: [
      'Unstructured silhouette with magnetic top bridge closure',
      'Interior zip compartment and laptop sleeve (up to 15")',
      'Contrast edge paint hand-burnished 4 times',
      'Includes raw canvas dust bag'
    ],
    composition: '100% Full-Grain Vegetable Tanned Calfskin',
    careInstructions: ['Condition with natural beeswax balsam annually', 'Avoid direct water immersion'],
    fit: 'Accommodates everyday essentials, sketchbook, and travel necessities.',
    collection: 'Atelier Accessories',
    isNewArrival: true,
    isFeatured: true,
    isBestseller: false,
  }
];

export const LOOKBOOK_EDITS = [
  {
    number: '01',
    title: 'THE RED ROOM',
    subtitle: 'Sensual monochrome textures bathed in signature wine and muted rose.',
    image: '/src/assets/images/tehri_hero_campaign_1790685959459.jpg',
    look: 'Double-face Cashmere Overcoat + Silk High-Slit Gown',
  },
  {
    number: '02',
    title: 'AFTER DARK',
    subtitle: 'Deep charcoal silhouettes meeting razor-sharp tailored lines.',
    image: '/src/assets/images/tehri_campaign_film_1790685989101.jpg',
    look: 'Architectural Overcoat + Fluid Pleated Wool Trouser',
  },
  {
    number: '03',
    title: 'ESSENTIAL FORM',
    subtitle: 'Understated luxury designed for tactile contact and fluid movement.',
    image: '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
    look: 'Structured Overshirt in Wine + Raw Egyptian Poplin',
  },
  {
    number: '04',
    title: 'NEW CLASSICS',
    subtitle: 'Haute craftsmanship reimagined for contemporary daily rituals.',
    image: '/src/assets/images/tehri_collection_women_1790686005820.jpg',
    look: 'Asymmetric Fluid Drape Dress + Sculpted Calfskin Tote',
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    handle: '@mayur_atelier',
    caption: 'In the autumn chill with @TEHRI signature cocoon coat. Nothing compares to the weight.',
    image: '/src/assets/images/tehri_hero_campaign_1790685959459.jpg',
    product: 'Sculptural Cashmere Cocoon Coat'
  },
  {
    id: 'ig-2',
    handle: '@clara.vogue',
    caption: 'Couture lines for gallery previews. @TEHRI silk column dress in signature wine.',
    image: '/src/assets/images/tehri_collection_women_1790686005820.jpg',
    product: 'Asymmetric Fluid Silk Column Dress'
  },
  {
    id: 'ig-3',
    handle: '@atelier_soren',
    caption: 'The precision on these shoulder pleats. Modern tailoring done right.',
    image: '/src/assets/images/tehri_collection_men_1790686025637.jpg',
    product: 'Architectural Minimalist Overcoat'
  },
  {
    id: 'ig-4',
    handle: '@nora_edit',
    caption: 'Between form and flow. Wardrobe anchors from @TEHRI.',
    image: '/src/assets/images/tehri_editorial_split_1790685974493.jpg',
    product: 'Structured Overshirt in Wine Wool'
  }
];
