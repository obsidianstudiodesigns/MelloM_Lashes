import { ServiceItem, PortfolioItem, TestimonialItem } from '../types';
import { ASSETS } from './assets';

export const BUSINESS_INFO = {
  name: "MelloM Lashes & Beauty",
  artist: "Mamello Molise",
  role: "Lead Makeup Artist & Wig / Lash Specialist",
  category: "Beauty, Cosmetic & Personal Care",
  phone: "067 641 0352",
  phoneRaw: "0676410352",
  whatsappInternational: "27676410352",
  email: "Mamellomolise325@gmail.com",
  instagramHandle: "@Molise.m",
  instagramUrl: "https://instagram.com/Molise.m",
  tagline: "Unveiling Your Radiance for Your Big Day & Beyond",
  subtitle: "Luxury Makeup Artistry, Lash Enhancements, Wig Care & Custom Installations.",
  wigDropoffNotice: "Have you made your arrangements for the wig drop off this week? Avoid the delay and contact the WhatsApp & Calls number to get your hair washed, treated and styled for installation. Let’s get to it beauties!",
  houseCallNote: "House calls are permitted upon request with an additional fee depending on distance (Town or Location)."
};

export const SERVICES: ServiceItem[] = [
  // Makeup Artistry
  {
    id: 'bridal-glam',
    name: 'The Big Day: Luxury Bridal Glam',
    category: 'bridal',
    price: 850,
    duration: '90 - 120 mins',
    shortDesc: 'Complete waterproof bridal beat, skin prep, contouring, custom premium mink lashes & setting for camera-ready all-day glow.',
    included: [
      'Deluxe hydrating skin prep & primer',
      'High-definition waterproof foundation beat',
      'Precision brow sculpting & eye drama',
      'Complimentary luxury 3D lash extensions',
      'Bridal touch-up kit guidance'
    ],
    popular: true,
    image: ASSETS.bridalGlam,
  },
  {
    id: 'full-glam',
    name: 'Signature Full Glam Artistry',
    category: 'makeup',
    price: 500,
    duration: '60 - 75 mins',
    shortDesc: 'Dramatic, full-coverage red carpet look. Perfect for birthdays, matric dances, baby showers, photoshoots & evening events.',
    included: [
      'Full coverage skin perfected base',
      'Cut crease or smokey eye artistry',
      'High-beam highlighting & sculpting',
      'Dramatic lash strip or individual cluster set',
      'Transfer-resistant matte or glass-gloss lip'
    ],
    popular: true,
    image: ASSETS.heroDesktop,
  },
  {
    id: 'soft-glam',
    name: 'Soft Radiant Daytime Glam',
    category: 'makeup',
    price: 400,
    duration: '45 - 60 mins',
    shortDesc: 'Clean, luminous “your skin but elevated” glow with neutral tones, feathered brows, and fluttery natural lashes.',
    included: [
      'Dewy skin prep & lightweight base',
      'Soft natural brow grooming',
      'Neutral champagne / earthy eye shimmer',
      'Natural wispy lash enhancement',
      'Hydrating lip oil finish'
    ],
  },
  {
    id: 'matric-prom',
    name: 'Matric Dance & Prom Glam Package',
    category: 'makeup',
    price: 550,
    duration: '75 mins',
    shortDesc: 'Showstopper look tailored to match your matric dance gown with long-wear setting spray for all-night celebrations.',
    included: [
      'Custom color-match to your dress & accessories',
      'Full glam with glitter / graphic accents upon request',
      'Fluffy lash set included',
      'Ultra sweat-proof seal'
    ],
  },

  // Lash Extensions
  {
    id: 'volume-lashes',
    name: 'Russian Mega Volume Lashes',
    category: 'lashes',
    price: 450,
    duration: '90 - 120 mins',
    shortDesc: 'Ultra-full, dark, dramatic lash density crafted with lightweight multi-lash fans for high-impact eyes.',
    included: [
      'Deep lash bath & priming cleanse',
      'Custom eye mapping (Cat-eye, Doll-eye, or Open-eye)',
      'Medical-grade sensitive eye bonding adhesive',
      'Spoolie brush & aftercare instructions'
    ],
    popular: true,
    image: ASSETS.bridalGlam,
  },
  {
    id: 'hybrid-lashes',
    name: 'Textured Hybrid Lash Set',
    category: 'lashes',
    price: 380,
    duration: '90 mins',
    shortDesc: 'The best of both worlds: a balanced mix of single classic lashes and fluffy volume fans for textured wispy perfection.',
    included: [
      'Gentle lash bath & de-greasing treatment',
      'Custom length & curl selection (C or D curl)',
      'Feather-light styling',
      'Lash care guide'
    ],
  },
  {
    id: 'classic-lashes',
    name: 'Natural Classic Lash Extension',
    category: 'lashes',
    price: 320,
    duration: '75 mins',
    shortDesc: 'One extension applied to each natural lash. Enhances length and curl with an effortless everyday mascara look.',
    included: [
      'Lash prep & isolation',
      '1:1 single lash application',
      'Comfortable lightweight feel'
    ],
  },
  {
    id: 'lash-refill',
    name: '2-3 Week Lash Infill / Touch-up',
    category: 'lashes',
    price: 220,
    duration: '45 - 60 mins',
    shortDesc: 'Removal of outgrown extensions and replenishment of fresh lashes to keep your set looking full and fresh.',
    included: [
      'Gentle clean & outgrown lash removal',
      'Gap filling to 100% density',
      'Fluff & bond seal'
    ],
  },

  // Wig Care, Treatment & Installations
  {
    id: 'wig-wash-treat-style',
    name: 'Wig Detox: Wash, Deep Treatment & Style',
    category: 'wigs',
    price: 250,
    duration: 'Drop-off Service',
    shortDesc: 'The essential weekly wig drop-off service! Thorough buildup shampoo, deep moisture protein mask, steam treatment & bone-straight or body wave styling.',
    included: [
      'Clarifying shampoo to strip previous adhesive & oils',
      'Intense moisture & protein restorative treatment',
      'Silicon infusion shine treatment',
      'Precision thermal styling (Bone straight, Silk press, or Voluminous body waves)',
      'Lace cleaning & residue removal'
    ],
    popular: true,
    requiresWigDropoff: true,
    image: ASSETS.wigStyling,
  },
  {
    id: 'wig-installation-melt',
    name: 'Custom Wig Installation & HD Lace Melt',
    category: 'wigs',
    price: 350,
    duration: '90 - 120 mins',
    shortDesc: 'Seamless hairline melt, custom plucking, bald cap method, secure stitching/bonding, and personalized styling on your head.',
    included: [
      'Flat foundation cornrows',
      'Skin-tone matched bald cap method',
      'HD lace customization & tinted melting',
      'Baby hair design (sleek or natural edges)',
      'Final heat styling & lock spray'
    ],
    popular: true,
    image: ASSETS.wigStyling,
  },
  {
    id: 'wig-combo-deluxe',
    name: 'The Royal Combo: Wig Wash + Treat + Install',
    category: 'wigs',
    price: 520,
    duration: '2-Part Service',
    shortDesc: 'Total wig transformation! Drop off your wig during the week for complete detox, deep conditioning, and come in for flawless scalp melt install.',
    included: [
      'Prior week drop-off wash & deep condition',
      'Customized hairline plucking & styling',
      'Appointment day bald cap & scalp melt install',
      'Save R80 with the bundle'
    ],
    requiresWigDropoff: true,
    popular: true,
    image: ASSETS.wigStyling,
  }
];

export const HOUSE_CALL_TIERS = [
  {
    type: 'studio',
    label: 'Studio Visit (No Travel Fee)',
    surcharge: 0,
    description: 'Come to our private beauty studio setup with full salon equipment and ring light setup.'
  },
  {
    type: 'house_call_town',
    label: 'House Call — Local Town (Near Studio)',
    surcharge: 120,
    description: 'Convenient glam in the comfort of your own home or hotel room within local town limits.'
  },
  {
    type: 'house_call_location',
    label: 'House Call — Location / Township / Surrounds',
    surcharge: 180,
    description: 'Travel to local locations, surrounding townships, or residential areas. Artist travels with complete professional kit.'
  },
  {
    type: 'house_call_out_of_town',
    label: 'House Call — Out of Town / Distance Venue',
    surcharge: 300,
    description: 'Destination bridal, wedding venues, or out-of-town locations (Calculated based on km radius).'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Bridal Royalty Soft Glam',
    category: 'bridal',
    description: 'Radiant wedding look designed for tears, laughter, and high-resolution photography.',
    image: ASSETS.bridalGlam,
    tag: 'Bridal Artistry'
  },
  {
    id: 'p2',
    title: 'Sleek Lace Wig Melt & Bone Straight',
    category: 'wigs',
    description: 'Freshly washed, conditioned, and melted 30-inch frontal installation with invisible hairline.',
    image: ASSETS.wigStyling,
    tag: 'Wig Installation'
  },
  {
    id: 'p3',
    title: 'Red Carpet Dramatic Full Beat',
    category: 'makeup',
    description: 'Sculpted cheekbones, sultry smoked liner, and velvet skin finish.',
    image: ASSETS.heroDesktop,
    tag: 'Full Glam'
  },
  {
    id: 'p4',
    title: 'Russian Volume Fluffy Lash Set',
    category: 'lashes',
    description: 'Handcrafted lightweight volume fans delivering intense dark lash line and lift.',
    image: ASSETS.heroMobile,
    tag: 'Volume Lashes'
  },
  {
    id: 'p5',
    title: 'Silk Press & Wig Revamp',
    category: 'wigs',
    description: 'Restored bounce, luster, and silkiness to a previously tangled unit using heat protectant infusions.',
    image: ASSETS.wigStyling,
    tag: 'Wig Treatment'
  },
  {
    id: 'p6',
    title: 'Glowing Birthday Glam Beat',
    category: 'makeup',
    description: 'Golden hour bronzed glow with crisp ombre gloss lips for birthday shoot.',
    image: ASSETS.bridalGlam,
    tag: 'Birthday Glam'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Keletso M.',
    occasion: 'Bride',
    comment: 'Mamello gave me the wedding makeup of my dreams! I cried during my vows and not a single drop of foundation moved. She also did a house call right to my hotel suite in town. 100/10 service!',
    rating: 5,
    date: '2 weeks ago',
    serviceType: 'Bridal Glam & House Call'
  },
  {
    id: 't2',
    clientName: 'Nthabiseng P.',
    occasion: 'Weekly Client',
    comment: 'The wig drop-off service is a lifesaver! I drop off my 3 wigs on Tuesday, by Thursday they are washed, conditioned, smelling amazing and bone straight. My installs look like scalp every single time.',
    rating: 5,
    date: '1 week ago',
    serviceType: 'Wig Detox & Scalp Melt'
  },
  {
    id: 't3',
    clientName: 'Lerato K.',
    occasion: 'Matric Dance Glam',
    comment: 'Everyone at my matric dance was asking who did my lashes and makeup. Mamello is gentle, professional, and treats you like a queen in her chair. Booking her again for my graduation!',
    rating: 5,
    date: 'Last month',
    serviceType: 'Hybrid Lashes & Full Glam'
  },
  {
    id: 't4',
    clientName: 'Zandile B.',
    occasion: 'Photoshoot',
    comment: 'She was so punctual for our house call in the location. Brought her professional lighting and completed my look right on schedule. Best makeup artist in the area!',
    rating: 5,
    date: '3 weeks ago',
    serviceType: 'House Call Makeup Artistry'
  }
];

export const FAQ_ITEMS = [
  {
    q: "How do house calls work and what are the fees?",
    a: "House calls are warmly welcomed upon request! An additional travel fee applies depending on whether you are located in town or in surrounding locations/townships. We bring our full professional kit, sanitation gear, and lighting. Please ensure there is a clean flat surface, good natural or room lighting, and access to an electrical outlet."
  },
  {
    q: "When should I drop off my wig for washing and styling?",
    a: "We recommend dropping off your wig at least 48 to 72 hours prior to your desired installation or pick-up date. This allows adequate time for clarifying wash, deep protein/moisture treatment, gentle drying, knot care, and precision heat styling. Don't wait until Friday afternoon—contact WhatsApp & Calls to arrange your drop-off early in the week!"
  },
  {
    q: "How do I secure my booking?",
    a: "Select your desired services and date using the interactive booking calculator below. Once you click 'Send Booking via WhatsApp', an automated detailed summary is sent to Mamello Molise (067 641 0352). A 50% non-refundable booking deposit confirms your slot on the calendar."
  },
  {
    q: "How long do lash extensions last?",
    a: "Our lash extensions typically last 4 to 6 weeks, depending on your natural lash growth cycle and aftercare. To keep them looking lush and dense, we recommend booking a refill every 2 to 3 weeks."
  },
  {
    q: "Can you accommodate bridal parties or groups?",
    a: "Yes! We specialize in bridal parties (bride, maid of honor, bridesmaids, mother of the bride). Please indicate your bridal party count in the booking calculator so we can allocate sufficient time or arrange our glam assistant for large parties."
  }
];
