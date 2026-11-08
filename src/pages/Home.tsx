import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, MapPin, Calendar, Compass, Wine, ChevronRight, Award } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import MenuCard from '../components/MenuCard';
import { FadeIn, StaggerContainer, StaggerItem, luxuryEasing } from '../components/motion/MotionTransitions';

export default function Home() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const shouldReduce = useReducedMotion();

  const [quickDate, setQuickDate] = useState(today);
  const [quickGuests, setQuickGuests] = useState('2');
  const [quickTime, setQuickTime] = useState('19:30');

  useEffect(() => {
    document.title = "Maison Kitchen — Premium Dining Experience | Lagos, Nigeria";
  }, []);

  const handleQuickReserve = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/reservations?date=${quickDate}&guests=${quickGuests}&time=${quickTime}`);
  };

  // 4 Curated distinct signature dishes
  const signatureDishes = [
    MENU_ITEMS.find((d) => d.id === 'charred-octopus-suya')!,
    MENU_ITEMS.find((d) => d.id === 'short-rib-plantain-fondant')!,
    MENU_ITEMS.find((d) => d.id === 'atlantic-turbot-beurre-blanc')!,
    MENU_ITEMS.find((d) => d.id === 'zobo-hibiscus-pavlova')!,
  ].filter(Boolean);

  const pressQuotes = [
    {
      quote: "The most architecturally transcendent dining room on the Lagos waterfront.",
      source: "Lagos Design Journal",
      year: "2026"
    },
    {
      quote: "A rigorous dialogue between classical French discipline and indigenous West African botanicals.",
      source: "Epicurean Review Africa",
      year: "2025"
    },
    {
      quote: "An oasis of calm and culinary restraint amidst the kinetic energy of Victoria Island.",
      source: "Condé Nast Traveler (Luxury Edition)",
      year: "2025"
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. CINEMATIC EDITORIAL HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-8">
        {/* Full-width visual background container with subtle warm deceleration zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2400&q=85"
            alt="Maison Kitchen intimate candlelight dining atmosphere in Lagos"
            initial={shouldReduce ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0.85 }}
            animate={{ scale: 1.01, opacity: 1 }}
            transition={{ duration: shouldReduce ? 0.01 : 2.8, ease: luxuryEasing }}
            className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-[#171717]/60" />
        </div>

        {/* Hero Content with Staggered Entrance */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-6 sm:space-y-8 py-16">
          
          {/* Subtle Distinction Badge */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0.01 : 0.6, delay: 0.1, ease: luxuryEasing }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-widest uppercase text-[#B99A75] shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B99A75]" />
            <span>Victoria Island Waterfront &bull; Haute Cuisine</span>
          </motion.div>

          {/* Required Headline */}
          <motion.h1
            initial={{ opacity: 0, y: shouldReduce ? 0 : 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0.01 : 0.8, delay: 0.25, ease: luxuryEasing }}
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white"
          >
            A little more than just a meal.
          </motion.h1>

          {/* Required Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0.01 : 0.7, delay: 0.4, ease: luxuryEasing }}
            className="text-base sm:text-xl text-white/85 max-w-2xl mx-auto font-normal leading-relaxed font-body"
          >
            Thoughtfully prepared dishes, beautiful spaces and memorable dining experiences.
          </motion.p>

          {/* Primary Action Buttons with Micro-tap Feedback */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0.01 : 0.6, delay: 0.55, ease: luxuryEasing }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.div whileHover={shouldReduce ? {} : { scale: 1.02 }} whileTap={shouldReduce ? {} : { scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF] text-[#171717] font-semibold text-xs tracking-widest uppercase hover:bg-[#F1EBDD] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={shouldReduce ? {} : { scale: 1.02 }} whileTap={shouldReduce ? {} : { scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/reservations"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B99A75] text-[#171717] font-semibold text-xs tracking-widest uppercase hover:bg-[#A3835F] hover:text-white transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Fast-Booking Dock */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0.01 : 0.7, delay: 0.7, ease: luxuryEasing }}
            className="pt-6"
          >
            <form
              onSubmit={handleQuickReserve}
              className="glass-pill max-w-2xl mx-auto p-2 sm:p-2.5 rounded-2xl sm:rounded-full grid grid-cols-1 sm:grid-cols-4 gap-2 text-left shadow-2xl border border-white/30 transition-shadow duration-300 hover:shadow-luxury-hover"
            >
              {/* Date */}
              <div className="px-3.5 py-1.5 flex flex-col justify-center">
                <label htmlFor="hero-date" className="text-[10px] uppercase tracking-wider font-semibold text-[#8C7A65]">
                  Date
                </label>
                <input
                  id="hero-date"
                  type="date"
                  min={today}
                  value={quickDate}
                  onChange={(e) => setQuickDate(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#171717] focus:outline-none cursor-pointer"
                />
              </div>

              {/* Time */}
              <div className="px-3.5 py-1.5 flex flex-col justify-center sm:border-l sm:border-black/10">
                <label htmlFor="hero-time" className="text-[10px] uppercase tracking-wider font-semibold text-[#8C7A65]">
                  Time Slot
                </label>
                <select
                  id="hero-time"
                  value={quickTime}
                  onChange={(e) => setQuickTime(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#171717] focus:outline-none cursor-pointer"
                >
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="13:30">1:30 PM (Lunch)</option>
                  <option value="18:30">6:30 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Dinner)</option>
                  <option value="20:30">8:30 PM (Dinner)</option>
                  <option value="21:30">9:30 PM (Late Dinner)</option>
                </select>
              </div>

              {/* Guests */}
              <div className="px-3.5 py-1.5 flex flex-col justify-center sm:border-l sm:border-black/10">
                <label htmlFor="hero-guests" className="text-[10px] uppercase tracking-wider font-semibold text-[#8C7A65]">
                  Party Size
                </label>
                <select
                  id="hero-guests"
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#171717] focus:outline-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests (Salon)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <motion.button
                whileHover={shouldReduce ? {} : { scale: 1.02 }}
                whileTap={shouldReduce ? {} : { scale: 0.98 }}
                type="submit"
                className="w-full bg-[#171717] hover:bg-[#B99A75] text-white rounded-xl sm:rounded-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Find Table</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#B99A75]" />
              </motion.button>
            </form>
          </motion.div>

          {/* Subtle Key Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B99A75]" /> Walter Carrington Crescent, VI
            </span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B99A75]" /> Dinner from 6:00 PM (Closed Mon)
            </span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Wine className="w-3.5 h-3.5 text-[#B99A75]" /> 450+ Cellar Allocations
            </span>
          </motion.div>

        </div>
      </section>

      {/* 2. PRESS ACCLAIM STRIP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1}>
          <div className="border-y border-black/10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {pressQuotes.map((item, idx) => (
                <div key={idx} className="space-y-2 md:border-r md:border-black/10 md:pr-6 last:border-none">
                  <p className="font-heading italic text-xs sm:text-sm text-[#171717] leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] text-secondary">
                    <span className="font-semibold text-[#B99A75]">{item.source}</span>
                    <span>&bull;</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. BRAND INTRODUCTION (Minimalist & Editorial) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <FadeIn direction="up">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                The Maison Philosophy
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#171717] leading-tight mt-1">
                Culinary precision meets the warmth of West African hospitality.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 space-y-6 text-secondary text-sm sm:text-base leading-relaxed">
            <FadeIn direction="up" delay={0.15}>
              <p>
                Nestled along the quiet waterfront stretch of Walter Carrington Crescent in Victoria Island, 
                Maison Kitchen was conceived as an architectural sanctuary where fine dining breathes with restraint, 
                warmth, and unmistakable cultural resonance.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.25}>
              <p>
                We celebrate indigenous West African botanical aromatics—from fragrant uziza and fermented iru to coastal ocean catches—reimagined 
                with the exacting classical discipline of French haute cuisine. Every plate is balanced like modern typography: uncluttered, deliberate, and deeply memorable.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <div className="pt-4 flex items-center gap-8">
                <div>
                  <span className="block font-heading font-bold text-2xl text-[#171717]">48h</span>
                  <span className="text-xs text-secondary">Slow Confit & Braises</span>
                </div>
                <div className="h-8 w-px bg-black/10" />
                <div>
                  <span className="block font-heading font-bold text-2xl text-[#171717]">450+</span>
                  <span className="text-xs text-secondary">Sourced Cellar Labels</span>
                </div>
                <div className="h-8 w-px bg-black/10" />
                <div>
                  <span className="block font-heading font-bold text-2xl text-[#171717]">100%</span>
                  <span className="text-xs text-secondary">Artisanal Scratch Kitchen</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 4. SIGNATURE DISHES (Curated Selection with Staggered Entrance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                Selected Plating
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#171717] mt-1">
                Signature Dishes
              </h2>
              <p className="text-sm text-secondary mt-1">
                Standout expressions of our culinary brigade's daily craft.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#171717] hover:text-[#B99A75] transition-colors group"
            >
              <span>View Full 24-Item Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        {/* Staggered Grid of Distinct Signature Dishes */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((dish) => (
            <StaggerItem key={dish.id}>
              <MenuCard item={dish} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 5. TASTING MENU SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1}>
          <div className="bg-[#171717] text-white rounded-3xl p-8 sm:p-14 overflow-hidden relative border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B99A75]/20 text-[#B99A75] text-[11px] font-semibold tracking-wider uppercase">
                  <Award className="w-3.5 h-3.5" /> Seasonal Gastronomy
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  The 7-Course Lagos Waterfront Tasting Journey
                </h2>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  An intimate culinary progression curated daily by Executive Chef Adebayo Thorne. Featuring coastal Gulf of Guinea catches, heritage Jos highland botanicals, and rare artisanal reductions paired with Grand Cru vintages.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs text-white/80 pt-2">
                  <div>
                    <span className="text-secondary block">Price per Guest</span>
                    <span className="font-heading font-bold text-xl text-white">₦85,000</span>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <span className="text-secondary block">Cellar Pairing (Optional)</span>
                    <span className="font-heading font-bold text-xl text-[#B99A75]">₦45,000</span>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <span className="text-secondary block">Duration</span>
                    <span className="font-heading font-bold text-xl text-white">2.5 Hours</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <motion.div whileHover={shouldReduce ? {} : { scale: 1.02 }} whileTap={shouldReduce ? {} : { scale: 0.98 }}>
                    <Link
                      to="/reservations"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B99A75] text-[#171717] font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-md inline-block text-center"
                    >
                      Reserve Tasting Table
                    </Link>
                  </motion.div>
                  <Link
                    to="/menu"
                    className="text-xs font-semibold text-white/80 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Explore À La Carte Selections &rarr;
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80"
                  alt="Plated tasting course at Maison Kitchen Lagos"
                  className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-106"
                />
              </div>

            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. MENU CATEGORIES PREVIEW */}
      <section className="bg-[#FFFFFF] py-20 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                Curated Courses
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#171717]">
                Explore by Category
              </h2>
              <p className="text-sm text-secondary">
                From delicate coastal seafood to hand-rolled pasta and indigenous botanical mixology.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_CATEGORIES.map((cat) => (
              <StaggerItem key={cat.id}>
                <motion.div whileHover={shouldReduce ? {} : { y: -4 }} transition={{ duration: 0.3, ease: luxuryEasing }}>
                  <Link
                    to={`/menu?category=${cat.id}`}
                    className="group bg-[#F5F5F7] hover:bg-[#F1EBDD]/60 p-8 rounded-2xl border border-black/5 hover:border-[#B99A75]/50 transition-all duration-300 flex flex-col justify-between h-48 focus:outline-none focus:ring-2 focus:ring-[#B99A75] block"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest font-semibold text-[#B99A75]">
                          {cat.count} Curated Offerings
                        </span>
                        <ArrowRight className="w-4 h-4 text-secondary group-hover:text-[#171717] group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-[#171717] mt-3 group-hover:text-[#967857] transition-colors duration-300">
                        {cat.label}
                      </h3>
                      <p className="text-xs text-secondary mt-2 line-clamp-2">
                        {cat.description}
                      </p>
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171717] pt-2">
                      Browse Selection &rarr;
                    </span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. RESTAURANT EXPERIENCE (Spatial Bento with Gentle Image Reveals) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
              The Atmosphere
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#171717]">
              Crafted for Memorable Evenings
            </h2>
            <p className="text-sm text-secondary">
              Thoughtfully proportioned spaces designed for conversation, comfort, and sensory delight.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Main Dining */}
          <StaggerItem>
            <motion.div whileHover={shouldReduce ? {} : { y: -5 }} transition={{ duration: 0.35, ease: luxuryEasing }} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-subtle hover:shadow-luxury group h-full">
              <div className="aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Maison Kitchen Main Dining Room with warm ambient lighting"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B99A75]">Acoustics & Warmth</span>
                <h3 className="font-heading font-bold text-xl text-[#171717]">The Main Dining Room</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Featuring handcrafted bronze accents, textured travertine stone, and custom acoustic ceiling treatments that ensure intimate dinner table conversations.
                </p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Card 2: Waterfront Terrace */}
          <StaggerItem>
            <motion.div whileHover={shouldReduce ? {} : { y: -5 }} transition={{ duration: 0.35, ease: luxuryEasing }} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-subtle hover:shadow-luxury group h-full">
              <div className="aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Waterfront terrace overlooking Five Cowries Creek Lagos"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B99A75]">Open Air Breezes</span>
                <h3 className="font-heading font-bold text-xl text-[#171717]">Five Cowries Waterfront Terrace</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Watch the sunset over the lagoon with tropical botanical spritzes, cooled by soft marine breezes and lush indigenous greenery.
                </p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Card 3: Chef's Counter */}
          <StaggerItem>
            <motion.div whileHover={shouldReduce ? {} : { y: -5 }} transition={{ duration: 0.35, ease: luxuryEasing }} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-subtle hover:shadow-luxury group h-full">
              <div className="aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Executive Chef preparing tasting courses at the counter"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B99A75]">Front Row Theater</span>
                <h3 className="font-heading font-bold text-xl text-[#171717]">The Chef's Counter</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Six exclusive seats positioned along the open hearth. Converse with our culinary brigade as each bespoke tasting course is plated before you.
                </p>
              </div>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* 8. RESTAURANT INTERIORS & ARCHITECTURAL MOSAIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-[#171717] rounded-3xl p-8 sm:p-14 text-white overflow-hidden relative shadow-luxury">
            <div className="max-w-xl space-y-4 mb-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B99A75]">
                Spatial Architecture
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                An oasis of calm in the vibrant heart of Victoria Island.
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Every curve, material texture, and lighting fixture was chosen to foster warmth and unhurried hospitality.
              </p>
            </div>

            {/* Mosaic Gallery with distinct intentional art-direction */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80"
                  alt="Table setting with crystal glassware"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
                  alt="Sommelier pouring vintage wine"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Atmospheric restaurant interior design"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal dessert creation"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 9. OPENING HOURS & LAGOS LOCATION PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-luxury grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                  Plan Your Visit
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717] mt-1">
                  Hours & Lagos Location
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B99A75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-main font-semibold">Address</strong>
                    <p className="text-secondary">{RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.city}, Nigeria</p>
                    <p className="text-xs text-[#B99A75] mt-0.5">{RESTAURANT_INFO.address.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#B99A75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-main font-semibold">Service Hours</strong>
                    <p className="text-secondary">Tue – Sun Lunch: 12:00 PM – 3:30 PM</p>
                    <p className="text-secondary">Tue – Sun Dinner: 6:00 PM – 11:30 PM</p>
                    <p className="text-secondary italic">Closed Mondays for culinary development</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#B99A75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-main font-semibold">Arrival & Valet</strong>
                    <p className="text-secondary">Complimentary valet parking provided at our private drive on Walter Carrington Crescent.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171717] hover:text-[#B99A75] transition-colors group"
                >
                  <span>Interactive Map & Directions</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Mini Map / Card with subtle hover lift */}
            <motion.div
              whileHover={shouldReduce ? {} : { scale: 1.02 }}
              transition={{ duration: 0.35, ease: luxuryEasing }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE8E4] border border-black/10 shadow-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="Victoria Island Lagos waterfront demonstration view"
                className="w-full h-full object-cover filter saturate-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium w-max mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B99A75]" /> Demonstration Location
                </div>
                <h3 className="font-heading font-bold text-lg">Maison Kitchen Lagos</h3>
                <p className="text-xs text-white/80">Five Cowries Creek &bull; Victoria Island</p>
              </div>
            </motion.div>

          </div>
        </FadeIn>
      </section>

      {/* 10. RESERVATION CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="bg-[#F1EBDD] rounded-3xl p-10 sm:p-16 border border-[#B99A75]/30 shadow-subtle space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#967857]">
              Begin Your Evening
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#171717] max-w-xl mx-auto">
              Reserve your table at Maison Kitchen.
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-md mx-auto">
              Bookings are open 30 days in advance. For parties of six or more, private salon dining is available.
            </p>

            <div className="pt-2">
              <motion.div whileHover={shouldReduce ? {} : { scale: 1.03 }} whileTap={shouldReduce ? {} : { scale: 0.97 }} className="inline-block">
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#171717] hover:bg-[#B99A75] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#B99A75]" />
                  <span>Make a Reservation</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
