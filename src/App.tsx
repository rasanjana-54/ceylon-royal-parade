/* Commit 2/4: Integrate Responsive Fleet Showcase and Category Filters */
import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  User,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Calculator,
  ChevronDown,
  ChevronUp,
  X,
  Send,
  Heart,
  Car,
  GlassWater,
  Info,
  Check
} from 'lucide-react';
import { WEDDING_CARS, DECOR_STYLES, TESTIMONIALS } from './data';
import { WeddingCar, BookingRequest } from './types';

// Hero background slider images
const HERO_SLIDES = [
  {
    image: '/hero_main.jpg',
    title: 'Ceylon Royal Parade',
    subtitle: 'Sri Lanka’s Premier Wedding Car Fleet'
  },
  {
    image: '/bmw_side.jpg',
    title: 'BMW Luxury Convertible',
    subtitle: 'Fairytale Open-Top Elegance'
  },
  {
    image: '/defender.jpg',
    title: 'Land Rover Defender',
    subtitle: 'Commanding Prestige & Authority'
  },
  {
    image: '/prado.jpg',
    title: 'Toyota Land Cruiser Prado',
    subtitle: 'Imperial Royal Cruiser'
  },
  {
    image: '/mercedes.jpg',
    title: 'Mercedes Benz C-Class',
    subtitle: 'Timeless Premium Sophistication'
  }
];

export default function App() {
  // Navigation & Category states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCarDetail, setActiveCarDetail] = useState<WeddingCar | null>(null);
  
  // Hero slider index
  const [currentSlide, setCurrentSlide] = useState(0);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);



  // Booking states
  const [booking, setBooking] = useState<BookingRequest>({
    carId: 'bmw-convertible',
    weddingDate: '',
    groomName: '',
    brideName: '',
    contactNumber: '',
    pickupLocation: '',
    venueLocation: '',
    durationHours: 8,
    expectedDistanceKm: 80,
    decorStyle: 'Royal White & Jasmine',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Auto slide hero background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Filter cars based on chosen tab
  const filteredCars = WEDDING_CARS.filter(car => {
    if (selectedCategory === 'all') return true;
    return car.category === selectedCategory;
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBooking(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumericChange = (name: string, value: number) => {
    setBooking(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate WhatsApp booking template
  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!booking.groomName || !booking.contactNumber || !booking.weddingDate) {
      alert("Please fill in your Contact Number, Wedding Date, and Name to proceed!");
      return;
    }

    const chosenCar = WEDDING_CARS.find(c => c.id === booking.carId) || WEDDING_CARS[0];

    const message = `👑 *CEYLON ROYAL PARADE - WEDDING DRIVE REQUEST* 👑

AyuBowan Ceylon Royal Parade! I would like to check availability for our wedding car. Here are our wedding details:

🚗 *Selected Vehicle:* ${chosenCar.name}
🌹 *Flower Garland Theme:* ${booking.decorStyle}
📅 *Wedding Date:* ${booking.weddingDate}
🤵 *Groom's Name:* ${booking.groomName}
👰 *Bride's Name:* ${booking.brideName || 'N/A'}
📱 *Phone Number:* ${booking.contactNumber}

📍 *Pick-up Location:* ${booking.pickupLocation || 'Not Specified'}
🏛️ *Wedding Venue:* ${booking.venueLocation || 'Not Specified'}

📝 *Additional Requests:* ${booking.notes || 'None'}

Please verify availability and block this vehicle for our special day! Thank you.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94754855555?text=${encodedText}`;

    setFormSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f4f6] selection:bg-[#c5a880] selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Background Soft Premium Accent Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c5a880]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[25%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/10 blur-[150px] rounded-full pointer-events-none z-0" />
 
      {/* TOP HEADER CONTACT BANNER */}
      <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-white/5 py-3 px-4 text-xs tracking-wider uppercase font-mono text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c5a880] animate-pulse"></span>
            <span>Premium Ceylon Wedding Cars • Chauffeur & Custom Floral Decor Included</span>
          </div>
          <div className="flex items-center gap-5 font-sans">
            <a href="tel:0754855555" className="hover:text-[#c5a880] flex items-center gap-1.5 transition-all text-neutral-300">
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" /> 075 485 5555
            </a>
            <span className="text-white/10">|</span>
            <a href="https://wa.me/94754855555" target="_blank" rel="noreferrer" className="hover:text-emerald-400 flex items-center gap-1.5 transition-all text-neutral-300">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Support
            </a>
          </div>
        </div>
      </header>
 
      {/* NAV BAR */}
      <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="leading-tight">
              <span className="block font-display text-xl md:text-2xl tracking-[0.2em] font-light text-white uppercase">
                CEYLON ROYAL PARADE
              </span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-neutral-400 font-mono mt-1">
                Luxury Wedding Car Rentals Sri Lanka
              </span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-mono font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#fleet" className="hover:text-white transition-colors">Our Fleet</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#booking" className="hover:text-white transition-colors">Book Registry</a>
            <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
          </div>

          {/* Book Now Button */}
          <div>
            <a
              href="#booking"
              className="px-5 py-2.5 bg-[#c5a880] text-black hover:bg-white hover:text-black font-semibold text-xs tracking-[0.1em] uppercase transition-all duration-300 shadow-lg shadow-[#c5a880]/10"
            >
              Reserve Drive
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION WITH AUTO-SLIDING BACKGROUND */}
      <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Sliding images background */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-50 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-[#c5a880] uppercase tracking-[0.2em] font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Fleet & Service
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-wider leading-tight text-white uppercase">
            ARRIVE IN <br/>
            <span className="text-[#c5a880] font-serif font-light italic tracking-normal block mt-2 normal-case font-semibold">
              Absolute Majesty
            </span>
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Make your entrance unforgettable. We deliver pristine luxury sedans, majestic high-clearance SUVs, and open-top convertibles. Every wedding package includes customized professional floral decoration, a suited chauffeur, and complimentary non-alcoholic toast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#fleet"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-[#c5a880] transition-colors"
            >
              Browse Fleet
            </a>
            <a
              href="#booking"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#c5a880]" /> Check Availability
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 transition-all ${index === currentSlide ? 'bg-[#c5a880]' : 'bg-white/30'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* QUICK STATS BANNER */}
      <section className="relative z-10 bg-black border-y border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block text-2xl md:text-3xl font-display font-light text-[#c5a880]">9+ Premium</span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-mono">Vehicle Classes</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl md:text-3xl font-display font-light text-[#c5a880]">100% Free</span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-mono">Floral Decoration</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl md:text-3xl font-display font-light text-[#c5a880]">Spotless</span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-mono">Interior Grooming</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl md:text-3xl font-display font-light text-[#c5a880]">Islandwide</span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-mono">Service range (SL)</span>
          </div>
        </div>
      </section>

      {/* FLEET GRID */}
      <section id="fleet" className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-[#c5a880] tracking-widest uppercase font-mono">
            ★ SELECT YOUR BRIDE & GROOM PARADE CAR
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wider">
            Explore Our Elite Fleet
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Choose from our pristine, fully decorated wedding vehicles. Each car comes with customized florist garlands, executive chauffeurs, and an immaculate deep-cleaned cabin.
          </p>
        </div>

        {/* Categories Tab Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-[9px] font-bold tracking-widest uppercase font-mono">
          {['all', 'sedan', 'suv', 'classic_convertible'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 border transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#c5a880] text-black border-[#c5a880] shadow-md shadow-[#c5a880]/10'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {category === 'all' && `All Cars (${WEDDING_CARS.length})`}
              {category === 'sedan' && `Luxury Sedans (${WEDDING_CARS.filter(c => c.category === 'sedan').length})`}
              {category === 'suv' && `Prestige SUVs (${WEDDING_CARS.filter(c => c.category === 'suv').length})`}
              {category === 'classic_convertible' && `Convertibles / Classics (${WEDDING_CARS.filter(c => c.category === 'classic_convertible').length})`}
            </button>
          ))}
        </div>

        {/* Tip panel */}
        <div className="mb-12 p-4 bg-white/[0.02] border border-white/5 rounded-none flex items-center gap-3 text-xs">
          <Info className="w-4 h-4 text-[#c5a880] shrink-0" />
          <span className="text-neutral-400 font-light text-[11px] tracking-wide">
            <strong className="text-white font-mono text-[10px] uppercase tracking-wider mr-2">Pro Tip:</strong>
            Open-top cabriolets like our <strong className="text-[#c5a880] font-normal">BMW Convertible</strong> are breathtaking for photo shoots. The <strong className="text-[#c5a880] font-normal">Land Rover Defender</strong> and <strong className="text-[#c5a880] font-normal">Toyota Prado</strong> offer spectacular commanding entries.
          </span>
        </div>

        {/* Fleet Grid Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => {
            const hasRealImage = car.images[0].startsWith('/');
            return (
              <div
                key={car.id}
                className={`group rounded-none overflow-hidden bg-[#090909] border transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex flex-col justify-between ${
                  hasRealImage ? 'border-[#c5a880]/30' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative h-60 overflow-hidden bg-neutral-950">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        car.id === 'audi-2025'
                          ? 'object-[center_65%]'
                          : car.id === 'axio'
                          ? 'object-[center_25%]'
                          : 'object-center'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                      <span className="backdrop-blur-md bg-black/80 border border-white/10 px-2.5 py-1 text-[8px] font-bold tracking-widest text-neutral-350 uppercase font-mono">
                        {car.category.replace('_', ' ')}
                      </span>
                      {hasRealImage && (
                        <span className="bg-[#c5a880] text-black px-2 py-0.5 text-[8px] font-bold tracking-widest uppercase font-mono shadow-md">
                          ★ Local Fleet Car
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-display text-base text-white tracking-widest uppercase group-hover:text-[#c5a880] transition-colors">
                          {car.name}
                        </h3>
                        <p className="text-[11px] text-[#c5a880] font-serif italic mt-0.5">
                          {car.tagline}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-[8px] uppercase tracking-widest text-neutral-500 font-mono">Base (8H/80KM)</span>
                        <span className="text-[#c5a880] font-display text-sm tracking-wider font-bold">
                          LKR {car.basePriceLkr.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {car.description}
                    </p>

                    {/* Specs Bullet */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-400 pt-3 border-t border-white/5 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#c5a880]">◇</span>
                        <span>{car.specs.color}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#c5a880]">◇</span>
                        <span>{car.specs.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#c5a880]">◇</span>
                        <span>Capacity: {car.specs.seating} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#c5a880]">◇</span>
                        <span className="text-neutral-300">Driver & Decor Inc.</span>
                      </div>
                    </div>

                    {/* Vibe description */}
                    <div className="p-3 bg-white/[0.01] border border-white/5 text-[10.5px] text-neutral-400 italic font-light">
                      &ldquo;{car.sriLankanVibe}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveCarDetail(car)}
                    className="flex-1 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-medium text-[10px] border border-white/10 uppercase tracking-widest font-mono cursor-pointer transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      setCalcCarId(car.id);
                      setBooking(prev => ({ ...prev, carId: car.id }));
                      const targetEl = document.getElementById('booking');
                      if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-4 py-2.5 bg-white hover:bg-[#c5a880] text-black font-semibold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-all"
                  >
                    Select Ride <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICE AMENITIES (WHAT'S INCLUDED) */}
      <section id="services" className="py-24 bg-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase text-[#c5a880] tracking-[0.2em] font-mono">★ PROUD SERVICE STANDARDS ★</span>
            <h2 className="font-display text-3xl text-white uppercase tracking-wider">
              Included With Every Charter
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              We provide the absolute finest premium touches to secure your royal drive. Rest assured with these professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-950 border border-white/5 rounded-none text-center space-y-4 hover:border-[#c5a880]/30 transition-all duration-300">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white/5 text-[#c5a880] rounded-full">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display text-sm text-white tracking-widest uppercase font-mono">
                1. Spotless Interior
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Each carriage undergoes full detail groom treatment right before departure. We deliver a spotless cabin smelling of pristine linen.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-white/5 rounded-none text-center space-y-4 hover:border-[#c5a880]/30 transition-all duration-300">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white/5 text-[#c5a880] rounded-full">
                <Heart className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="font-display text-sm text-white tracking-widest uppercase font-mono">
                2. Bespoke Floral Decor
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Premium silk wedding garlands, drapes, and rearview mirrors decorated to pair seamlessly with your custom wedding color motifs.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-white/5 rounded-none text-center space-y-4 hover:border-[#c5a880]/30 transition-all duration-300">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white/5 text-[#c5a880] rounded-full">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-display text-sm text-white tracking-widest uppercase font-mono">
                3. Courteous Driver
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Punctual, polite, and fully suited wedding specialist chauffeurs who understand wedding timelines and local routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SHOWROOM MODAL POPUP */}
      {activeCarDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/10 rounded-none shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => setActiveCarDetail(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 hover:bg-black text-gray-400 hover:text-white rounded-none border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative h-60 md:h-72">
              <img
                src={activeCarDetail.images[0]}
                alt={activeCarDetail.name}
                className={`w-full h-full object-cover ${
                  activeCarDetail.id === 'audi-2025'
                    ? 'object-[center_65%]'
                    : activeCarDetail.id === 'axio'
                    ? 'object-[center_25%]'
                    : 'object-center'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="bg-[#c5a880] text-black text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-none font-mono">
                  {activeCarDetail.category.replace('_', ' ')}
                </span>
                <h3 className="font-display text-2xl font-black text-white mt-1">{activeCarDetail.name}</h3>
              </div>
            </div>

            {/* Modal Specs */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-mono font-bold block">Luxury Carriage Profile</span>
                <p className="text-xs text-neutral-300 leading-relaxed">{activeCarDetail.description}</p>
              </div>

              {/* Specs detailed table */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-white/5 border border-white/5 rounded-none space-y-1">
                  <span className="text-neutral-500 text-[9px] uppercase block tracking-wider">Vehicle Color</span>
                  <span className="text-white font-medium">{activeCarDetail.specs.color}</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-none space-y-1">
                  <span className="text-neutral-500 text-[9px] uppercase block tracking-wider">Fuel Type</span>
                  <span className="text-white font-medium">{activeCarDetail.specs.fuelType}</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-none space-y-1">
                  <span className="text-neutral-500 text-[9px] uppercase block tracking-wider">Luxury Seating</span>
                  <span className="text-white font-medium">{activeCarDetail.specs.seating} Passengers</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-none space-y-1">
                  <span className="text-neutral-500 text-[9px] uppercase block tracking-wider">Ceylon Standard</span>
                  <span className="text-[#c5a880] font-serif italic font-medium">Included Garland & Ribbons</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-2.5">
                <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-mono font-bold block">Included Elite Features</span>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {activeCarDetail.specs.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                <div className="text-left font-mono">
                  <span className="text-neutral-500 text-[9px] uppercase block tracking-wider">Base Package Rate (8 Hour)</span>
                  <span className="text-[#c5a880] font-bold text-base tracking-wider">LKR {activeCarDetail.basePriceLkr.toLocaleString()} /=</span>
                </div>
                
                <button
                  onClick={() => {
                    setBooking(prev => ({ ...prev, carId: activeCarDetail.id }));
                    setActiveCarDetail(null);
                    const targetEl = document.getElementById('booking');
                    if (targetEl) {
                      targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#c5a880] text-black hover:bg-white font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
                >
                  Book This Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* PORTFOLIO ACCENT IMAGERY */}
      <section className="py-12 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid sm:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-[#c5a880] text-[9px] font-mono tracking-widest uppercase">★ CAPTURED EXPERIENCES</span>
            <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider">Fairytale Wedding Albums</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
              Our cars are detailed specifically for couple photography. Capture stunning open-top cabriolet shots, or high-prestige SUV entrances that reflect the absolute luxury of your milestone day.
            </p>
            <div className="pt-2">
              <a href="#booking" className="text-xs font-bold text-[#c5a880] hover:text-white uppercase font-mono tracking-widest flex items-center gap-1">
                Book Your Wedding Date <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="h-72 sm:h-96 rounded-none overflow-hidden border border-white/10 relative">
            <img
              src="/bmw_collage.jpg"
              alt="Ceylon Wedding Parade Collage"
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="text-white text-xs font-bold uppercase tracking-wider font-mono">Bespoke Couple Shoot</span>
              <p className="text-[10px] text-neutral-300">Complimentary backdrop posing with suited chauffeur assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING REGISTRY FORM */}
      <section id="booking" className="py-24 max-w-5xl mx-auto px-4 md:px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-[#c5a880] uppercase tracking-widest font-mono">
            ✉ INSTANT DATE RESERVATION ✉
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wider">
            Check Availability
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Fill in your wedding itinerary details below to draft a block-date request. We will immediately package your information and launch a pre-filled WhatsApp message.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#090909] border border-white/5 p-6 md:p-10 shadow-2xl relative z-10">
          <form onSubmit={handleWhatsAppBooking} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Selected Car */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Car Type Requested *
                </label>
                <select
                  name="carId"
                  value={booking.carId}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white font-medium focus:outline-none focus:border-[#c5a880] font-mono text-[11.5px]"
                >
                  {WEDDING_CARS.map(c => (
                    <option key={c.id} value={c.id} className="bg-neutral-950 text-white font-mono">{c.name} (Base LKR {c.basePriceLkr.toLocaleString()})</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Wedding / Homecoming Date *
                </label>
                <input
                  type="date"
                  name="weddingDate"
                  required
                  value={booking.weddingDate}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880] font-mono text-[11.5px]"
                />
              </div>

              {/* Groom name */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Groom&apos;s Name *
                </label>
                <input
                  type="text"
                  name="groomName"
                  required
                  placeholder="e.g., Kasun Perera"
                  value={booking.groomName}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Bride name */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Bride&apos;s Name
                </label>
                <input
                  type="text"
                  name="brideName"
                  placeholder="e.g., Dinithi Alwis"
                  value={booking.brideName}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Whatsapp contact number */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  placeholder="e.g., 077 123 4567"
                  value={booking.contactNumber}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880] font-mono text-[11.5px]"
                />
              </div>

              {/* Flower style */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Floral Garland Theme *
                </label>
                <select
                  name="decorStyle"
                  value={booking.decorStyle}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white font-medium focus:outline-none focus:border-[#c5a880] font-mono text-[11.5px]"
                >
                  {DECOR_STYLES.map(d => (
                    <option key={d.name} value={d.name} className="bg-neutral-950 text-white font-mono">{d.name}</option>
                  ))}
                </select>
              </div>

              {/* Pick-up location */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Pick-up Location Address
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="e.g., Dehiwala, Colombo 06"
                  value={booking.pickupLocation}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Venue */}
              <div className="space-y-2 text-xs">
                <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                  Wedding Venue Hall Address
                </label>
                <input
                  type="text"
                  name="venueLocation"
                  placeholder="e.g., Mount Lavinia Hotel Grand Ballroom"
                  value={booking.venueLocation}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2 text-xs">
              <label className="block text-neutral-400 uppercase font-mono font-bold tracking-wider">
                Special Wedding Instructions & Route Notes
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Specify details like custom ribbon color matches, multiple photoshoot venue stops, Nilame dress-up space requirements, etc."
                value={booking.notes}
                onChange={handleInputChange}
                className="w-full bg-neutral-900 border border-white/10 p-3.5 text-white focus:outline-none focus:border-[#c5a880] resize-none"
              />
            </div>



            {/* WhatsApp CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#c5a880] text-black hover:bg-white font-semibold text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a880]/10"
            >
              <MessageCircle className="w-4 h-4" />
              Generate WhatsApp Availability Request
            </button>

          </form>

          {formSubmitted && (
            <div className="mt-6 p-4 bg-white/[0.01] border border-emerald-500/30 text-emerald-450 text-xs text-center space-y-1">
              <span className="font-bold">✔ Quote Draft Generated Successfully!</span>
              <p className="text-neutral-450">Please complete the request through WhatsApp. For immediate bookings, call us directly at <strong>075 485 5555</strong>.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase text-[#c5a880] tracking-[0.2em] font-mono">✦ COMMONLY ASKED QUESTIONS ✦</span>
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider">
              Planning Information & Guidelines
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              Clear guidelines to make your wedding day transportation flawless.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "When will the wedding car arrive at our groom's / bride's house?",
                a: "Our chauffeurs always arrive 15 to 30 minutes prior to your scheduled booking time. This leaves ample buffer for photography, suited assistance, and route adjustments."
              },
              {
                q: "Are the flowers artificial or real fresh flowers?",
                a: "Our standard booking includes premium, speed-tested artificial silk flower garlands designed to look stunning in photography and hold steady on highways. Surcharges apply if custom real fresh flowers are required."
              },
              {
                q: "Do you permit custom photography inside the car?",
                a: "Absolutely! We encourage gorgeous couple photography. Our chauffeurs will assist photographers in positioning the car in scenic, high-fidelity light profiles."
              },
              {
                q: "What happens if our wedding event exceeds the 8-hour duration?",
                a: "No stress! Any extra hours are easily charged at the transparent standard hourly rate specified on each car profile, with no hidden penalty fees."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-950 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-white uppercase tracking-wider font-mono text-xs md:text-[13px]">{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#c5a880] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#c5a880] shrink-0" />
                  )}
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'pb-5 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-neutral-450 leading-relaxed font-light">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 py-16 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <span className="block font-display text-base tracking-[0.2em] text-white uppercase font-semibold">
              CEYLON ROYAL PARADE
            </span>
            <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
              Providing Colombo, Kandy, Galle, Gampaha and islandwide Sri Lanka premier luxury wedding car hire services. Rely on our premium fleet, spotless interior grooming, and professional suited drivers for your absolute grand entry.
            </p>
            <p className="text-[10px] text-neutral-600 uppercase font-mono tracking-wider">
              Licensed Premium Carriage Operator &copy; 2026.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white tracking-wider uppercase text-[10px] font-mono">Our Fleet Highlights</h4>
            <ul className="space-y-1.5 text-neutral-400 text-[11px] font-light">
              <li>✦ BMW Luxury Cabriolets</li>
              <li>✦ Land Rover Defender & SUV</li>
              <li>✦ Toyota Land Cruiser Prado</li>
              <li>✦ Mercedes Benz Premium C-Class</li>
              <li>✦ Toyota Premio & Axio</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-white tracking-wider uppercase text-[10px] font-mono">Office & Garages</h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
              Main Garage: Dehiwala Road, Colombo, Sri Lanka.<br/>
              Kandy Garage: Peradeniya Gate, Kandy.<br/>
              Direct Hotline: <strong className="text-white hover:text-[#c5a880] transition-colors cursor-pointer">075 485 5555</strong>
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/94754855555"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-neutral-900 border border-white/10 text-white font-mono uppercase tracking-wider text-[10px] hover:border-[#c5a880] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
              </a>
              <a
                href="tel:0754855555"
                className="px-4 py-2 bg-neutral-900 border border-white/10 text-white font-mono uppercase tracking-wider text-[10px] hover:border-[#c5a880] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" /> Call Hotline
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

