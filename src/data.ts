import { WeddingCar } from './types';

export const WEDDING_CARS: WeddingCar[] = [
  {
    id: 'audi-2025',
    name: 'Audi (2025 Edition)',
    category: 'sedan',
    tagline: 'Brand New Pristine Elite',
    description: 'Experience the pinnacle of modern luxury with the brand new 2025 Audi. Styled with a razor-sharp matrix design, dynamic custom indicators, and sophisticated white floral layout. Perfect for the contemporary high-style couple seeking a grand luxury entry.',
    images: [
      '/audi_new.jpg'
    ],
    specs: {
      seating: 4,
      color: 'Pristine Arctic White',
      decorIncluded: true,
      fuelType: 'Petrol (Premium Hybrid)',
      features: [
        'Premium 2025 Luxury Facelift',
        'Stunning hood-to-grille calla lily drapes',
        'Whisper-quiet dual-zone climate systems',
        'State-of-the-art cinematic luxury cabin'
      ]
    },
    basePriceLkr: 65000,
    perExtraKmLkr: 250,
    perExtraHourLkr: 4000,
    sriLankanVibe: 'Extremely popular for premium hotel grand ballroom weddings in Colombo and Kandy. Features the highly requested CBT-2181 / C25 modern luxury profile.'
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes Benz C-Class',
    category: 'sedan',
    tagline: 'Timeless Royal Elegance',
    description: 'The standard of sheer luxury. Our pristine white Mercedes Benz C-Class features deep chrome accents, sweeping aerodynamic hood design, and traditional Sri Lankan white jasmine and rose bouquet draping. A classic choice for divine church exits and grand hotel parade loops.',
    images: [
      '/mercedes.jpg'
    ],
    specs: {
      seating: 4,
      color: 'Chamber Pearl White',
      decorIncluded: true,
      fuelType: 'Super Diesel / Petrol',
      features: [
        'Traditional white silk mesh ribbon decor',
        'Full panoramic glass sun-roof for photos',
        'Luxury premium leather seating',
        'Gentle fragrance-diffused interior cabin'
      ]
    },
    basePriceLkr: 55000,
    perExtraKmLkr: 200,
    perExtraHourLkr: 3500,
    sriLankanVibe: 'Ideal for elegant church weddings and premium five-star reception halls, offering outstanding timeless photo backdrops.'
  },
  {
    id: 'bmw-convertible',
    name: 'BMW Luxury Convertible',
    category: 'classic_convertible',
    tagline: 'High-Fashion Open-Top Parade',
    description: 'The ultimate fairytale getaway car. Feel the draft of romance and absolute elite status in our white BMW Convertible. Features premium soft-top control, enabling breathtaking bride & groom open-roof portrait posing as you enter or leave the venue.',
    images: [
      '/bmw_side.jpg',
      '/bmw_collage.jpg'
    ],
    specs: {
      seating: 4,
      color: 'Alpine Alabaster White',
      decorIncluded: true,
      fuelType: 'Petrol Sport',
      features: [
        'Dynamic retractable open-top convertible roof',
        'Elegant premium crimson roses layout',
        'Perfect height clearance for wedding dress entry',
        'Professional suited chauffeur with wedding protocol'
      ]
    },
    basePriceLkr: 75000,
    perExtraKmLkr: 300,
    perExtraHourLkr: 5000,
    sriLankanVibe: 'Extremely scenic for outdoor garden weddings, beachside receptions at Mount Lavinia, or scenic sunset photo drives.'
  },
  {
    id: 'defender',
    name: 'Land Rover Defender',
    category: 'suv',
    tagline: 'Bold Modern Prestige',
    description: 'Commanding, powerful, and exceptionally prestigious. Our majestic deep-obsidian Black Land Rover Defender brings a heavy dose of luxury authority to your parade. Adorned with custom structured high-contrast white flora to highlight its handsome stance.',
    images: [
      '/defender.jpg'
    ],
    specs: {
      seating: 5,
      color: 'Obsidian Metallic Black',
      decorIncluded: true,
      fuelType: 'Twin-Turbo Diesel',
      features: [
        'Rugged-luxe modern off-road styling',
        'Cascading baby-breath floral bumper accents',
        'Extremely spacious interior legroom for wedding dresses',
        'Bold urban & rural road clearance'
      ]
    },
    basePriceLkr: 95000,
    perExtraKmLkr: 350,
    perExtraHourLkr: 6000,
    sriLankanVibe: 'The current top-voted trend for grooms-parade and luxury modern couple entries. Stunningly contrasts with white bridal sarees.'
  },
  {
    id: 'range-rover',
    name: 'Range Rover Sport',
    category: 'suv',
    tagline: 'Crown Jewel Royal Parade',
    description: 'The hallmark of ultimate world-class luxury. Our magnificent white Range Rover comes wrapped in breathtaking luxury golden mesh and silk accents. It is designed to glide you to the wedding ceremony with monumental poise, grace, and unmatched comfort.',
    images: [
      '/range_rover.jpg'
    ],
    specs: {
      seating: 5,
      color: 'Alabaster Luxe White',
      decorIncluded: true,
      fuelType: 'Supercharged Diesel',
      features: [
        'Imperial golden mesh drapery work',
        'High-density pneumatic air-suspension ride',
        'Signature front-cluster signature headlights',
        'Whisper quiet double-glazed cabin glass'
      ]
    },
    basePriceLkr: 110000,
    perExtraKmLkr: 400,
    perExtraHourLkr: 7000,
    sriLankanVibe: 'Frequently chartered for high-profile VVIP weddings in Colombo, offering a supreme feeling of luxury security on your big day.'
  },
  {
    id: 'prado',
    name: 'Toyota Land Cruiser Prado',
    category: 'suv',
    tagline: 'Imperial Luxury Cruiser',
    description: 'A grand Sri Lankan traditional favorite for upscale wedding entries. This beautiful white Prado offers a majestic body style, stunning tall road presence, and beautiful floral crown drapes. It is robust, exceptionally reliable, and guarantees a silky smooth ride.',
    images: [
      '/prado.jpg'
    ],
    specs: {
      seating: 7,
      color: 'Crystal Clear Pearl White',
      decorIncluded: true,
      fuelType: 'Diesel',
      features: [
        'Tall commanding view of the road',
        'Lavish orchid and daisy bouquet arrangements',
        'Vast and comfortable secondary cabin area',
        'Multi-zone air-conditioning back and front'
      ]
    },
    basePriceLkr: 48000,
    perExtraKmLkr: 180,
    perExtraHourLkr: 3000,
    sriLankanVibe: 'Extremely beautiful backdrop for photoshoot venues at Colombo Galle Face Greens, Port City, or Negombo beach hotels.'
  },
  {
    id: 'premio',
    name: 'Toyota Premio F',
    category: 'sedan',
    tagline: 'Sophisticated & Graceful Traditional',
    description: 'One of the most trusted and universally adored symbols of graceful carriage in Sri Lanka. Our Toyota Premio F features immaculate white styling, deep highly polished chrome grill, and traditional floral drapes. Offers amazing class at an exceptionally family-friendly rate.',
    images: [
      '/premio.jpg'
    ],
    specs: {
      seating: 4,
      color: 'Silky Pure White',
      decorIncluded: true,
      fuelType: 'Petrol (Premium EFI)',
      features: [
        'Classic traditional wedding flower bouquet',
        'Extremely reliable dual-AC cooling performance',
        'Plush velvet or wood-trim premium seats',
        'Pristine trunk space for presents & bags'
      ]
    },
    basePriceLkr: 28000,
    perExtraKmLkr: 120,
    perExtraHourLkr: 1800,
    sriLankanVibe: 'The beloved favorite for classical, intimate Nilame & Kandyan sari weddings, ensuring maximum elegance and warmth.'
  },
  {
    id: 'axio',
    name: 'Toyota Axio',
    category: 'sedan',
    tagline: 'Smart Comfort & Sweet Simplicity',
    description: 'An elegant, ultra-smart option decorated with cozy white drapes or soft pink mesh ribbons. It delivers absolute comfort, reliability, and smooth air-conditioned driving. Ideal for practical couples who value pristine neatness and elegant presentation.',
    images: [
      '/axio.jpg'
    ],
    specs: {
      seating: 4,
      color: 'Diamond Bright White',
      decorIncluded: true,
      fuelType: 'Hybrid Synergy Drive',
      features: [
        'Modern mesh ribbon flower detailing',
        'Whisper-quiet electric drive modes',
        'Neat, spotless, fully-serviced interiors',
        'Responsive, safety-first driver protocols'
      ]
    },
    basePriceLkr: 24000,
    perExtraKmLkr: 100,
    perExtraHourLkr: 1550,
    sriLankanVibe: 'Ideal for beautiful registry weddings, intimate family functions, and home-coming drives throughout Sri Lanka.'
  },
  {
    id: 'classic-cars',
    name: 'Vintage & Classic Tourer',
    category: 'classic_convertible',
    tagline: 'Golden Era Fairytale Romance',
    description: 'Step directly back into a golden era of high nobility. Our collection of rare classic open-top vintage tourers delivers an incredibly unique romance vibe. Adorned with delicate vintage ivory lace and single roses, this rare vehicle is an absolute showstopper for photography.',
    images: [
      '/classic.jpg'
    ],
    specs: {
      seating: 3,
      color: 'Chamber Pearl Ivory',
      decorIncluded: true,
      fuelType: 'Vintage Gasoline',
      features: [
        'Authentic chrome wire-spoke vintage rims',
        'Open air convertible style with tan leather upholstery',
        'Stunning authentic retro headlamp and front-grille',
        'Draped in delicate vintage floral loops'
      ]
    },
    basePriceLkr: 85000,
    perExtraKmLkr: 320,
    perExtraHourLkr: 5500,
    sriLankanVibe: 'The pinnacle of bespoke wedding albums. Unbeatable fairytale charm, creating memories that look straight out of royal films.'
  }
];

export const DECOR_STYLES = [
  { name: 'Royal White & Jasmine', description: 'Traditional cascading white roses, dynamic jasmine garlands and elegant tulle mesh.' },
  { name: 'Red Rose Romance Accent', description: 'Dramatic crimson and red velvet roses paired with delicate baby-breath drapes.' },
  { name: 'Golden Tiara Sunburst', description: 'Gilded yellow floral crown ribbons, rich orchids and glowing golden satin wraps.' },
  { name: 'Sweet Meadow Pastel Blend', description: 'Soft pink roses, lavender stalks and fresh eucalyptus leaf cascades.' }
];

export const TESTIMONIALS = [
  {
    name: 'Kasun & Dinithi',
    role: 'Colombo Wedding',
    quote: 'The luxury 2025 Audi was absolutely stunning! It felt brand new, and the flower decoration on the hood looked exactly like our dream wedding theme. Chauffeur was incredibly polite and paved a smooth, royal entry for us at the Shangri-La Colombo. Highly recommended!',
    rating: 5,
    carBooked: 'Audi (2025 Edition)'
  },
  {
    name: 'Sanjeewa & Priyanthica',
    role: 'Kandy Royal Botanical Wedding',
    quote: 'We booked the classic Vintage Tourer for our wedding. It stole the show! Guests could not stop taking photos with the car. The complimentary champagne toast right after our registry signing made us feel like royalty. Beautifully maintained!',
    rating: 5,
    carBooked: 'Vintage & Classic Tourer'
  },
  {
    name: 'Amila & Shenali',
    role: 'Negombo Beach Wedding',
    quote: 'The Black Defender was a showstopper! Truly bold and pristine. Coming from a traditional family, the combination of elegant traditional white flower arrangements on such a premium modern SUV was incredibly unique. Ceylon Royal Parade is the best!',
    rating: 5,
    carBooked: 'Land Rover Defender'
  }
];

export const GENERAL_BENEFITS = [
  {
    title: 'Clean & Spotless',
    description: 'Every vehicle undergoes strict deep cleaning, multi-point interior detailing, and wax treatment prior to arrival. Our vehicles arrive immaculate inside and out.',
    iconName: 'Sparkles'
  },
  {
    title: 'Elegant Floral Work',
    description: 'Each booking includes bespoke, custom flower decoration from professional wedding florists, customized according to your wedding color theme (White, Crimson, or Gold).',
    iconName: 'Flower'
  },
  {
    title: 'Suited Professional Driver',
    description: 'Ride in safety with our courteous, highly experienced wedding specialists. Punctual, polite, fully suited, and well-trained in wedding car protocols.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Complimentary Champagne',
    description: 'Celebrate your first drive as husband and wife with a premium, chilled non-alcoholic champagne bottle, elegantly served inside the cabin with our compliments.',
    iconName: 'GlassWater'
  }
];
