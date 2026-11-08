import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Wine, Calendar, Clock, Flame, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { formatNGN } from '../utils/formatters';
import MenuCard from '../components/MenuCard';
import { FadeIn, StaggerContainer, StaggerItem, luxuryEasing } from '../components/motion/MotionTransitions';

export default function MenuItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const shouldReduce = useReducedMotion();

  const item = useMemo(() => {
    return MENU_ITEMS.find((dish) => dish.id === id);
  }, [id]);

  useEffect(() => {
    if (item) {
      document.title = `${item.name} — Culinary Selection | Maison Kitchen Lagos`;
      setImageLoaded(false);
      setImageError(false);
    }
  }, [item]);

  // Similar dishes: from same category or signatures, excluding current item
  const similarDishes = useMemo(() => {
    if (!item) return [];
    const sameCategory = MENU_ITEMS.filter((dish) => dish.category === item.category && dish.id !== item.id);
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    const others = MENU_ITEMS.filter((dish) => dish.id !== item.id && !sameCategory.includes(dish));
    return [...sameCategory, ...others].slice(0, 3);
  }, [item]);

  if (!item) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <UtensilsCrossed className="w-12 h-12 text-[#B99A75] mb-3 opacity-60" />
        <h1 className="font-heading font-bold text-3xl text-main mb-2">Dish Not Found</h1>
        <p className="text-secondary text-sm mb-6 max-w-md">
          The culinary creation you are seeking may have rotated off the current seasonal tasting menu.
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 rounded-full bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#B99A75] transition-colors"
        >
          Return to Kitchen Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Breadcrumbs & Navigation */}
      <FadeIn direction="down" duration={0.4}>
        <div className="flex items-center justify-between">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-main transition-colors group focus:outline-none focus-visible:underline"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Menu Collection</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#B99A75] font-semibold">
            Course: {item.categoryLabel}
          </span>
        </div>
      </FadeIn>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Large Hero Photographic Showcase (7 cols) with warm entrance */}
        <div className="lg:col-span-7 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduce ? 0.01 : 0.7, ease: luxuryEasing }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#ECE8E1] border border-black/5 shadow-luxury"
          >
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-[#E8E4DD] animate-pulse" />
            )}

            {imageError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#EFECE6] text-[#A69C8E] p-6 text-center">
                <UtensilsCrossed className="w-12 h-12 mb-2 text-[#B99A75] opacity-60" />
                <span className="font-heading font-semibold text-base text-main">{item.name}</span>
                <span className="text-xs text-secondary mt-1">{item.tagline}</span>
              </div>
            ) : (
              <motion.img
                src={item.image}
                alt={`${item.name} - ${item.tagline}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={imageLoaded ? { opacity: 1, scale: 1.0 } : { opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.75, ease: luxuryEasing }}
                className="w-full h-full object-cover object-center"
              />
            )}

            {item.isSignature && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: luxuryEasing }}
                className="absolute top-5 left-5 glass-pill px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#171717] flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B99A75]" />
                <span>Executive Chef's Signature</span>
              </motion.div>
            )}
          </motion.div>

          {/* Photographic provenance caption */}
          <div className="flex items-center justify-between text-[11px] text-secondary px-2">
            <span>Prepared to order at our Victoria Island hearth</span>
            <span className="text-[#B99A75] font-medium">Demonstration Presentation</span>
          </div>
        </div>

        {/* Right Column: Dish Details & Story (5 cols) with subtle stagger */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Header & Price */}
          <FadeIn delay={0.1} direction="up">
            <div className="space-y-3 border-b border-black/10 pb-6">
              <div className="flex flex-wrap gap-1.5">
                {item.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F1EBDD] text-[#967857] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#171717] tracking-tight leading-tight">
                {item.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#B99A75] font-medium tracking-wide">
                {item.tagline}
              </p>

              <div className="pt-2 flex items-baseline gap-3">
                <span className="font-heading font-extrabold text-3xl text-[#171717]">
                  {formatNGN(item.price)}
                </span>
                <span className="text-xs text-secondary font-medium">(Fictional Demo Price)</span>
              </div>
            </div>
          </FadeIn>

          {/* Sensory Profile */}
          <FadeIn delay={0.2} direction="up">
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#171717]">
                The Culinary Profile
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>

          {/* Chef's Technique & Tasting Notes */}
          {item.chefNotes && (
            <FadeIn delay={0.3} direction="up">
              <div className="bg-[#F5F5F7] rounded-2xl p-5 border border-black/5 space-y-2 shadow-xs">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B99A75] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Chef's Technique & Inspiration
                </span>
                <p className="text-xs text-[#444444] italic leading-relaxed">
                  "{item.chefNotes}"
                </p>
              </div>
            </FadeIn>
          )}

          {/* Composed Ingredients */}
          <FadeIn delay={0.4} direction="up">
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#171717]">
                Composed Ingredients
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {item.ingredients.map((ing) => (
                  <div key={ing} className="flex items-center gap-2 text-xs text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B99A75]" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Sommelier Wine Pairing */}
          {item.pairingRecommendation && (
            <FadeIn delay={0.45} direction="up">
              <div className="bg-[#171717] text-white rounded-2xl p-5 space-y-2 shadow-sm">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B99A75] flex items-center gap-1.5">
                  <Wine className="w-3.5 h-3.5" /> Sommelier Cellar Pairing
                </span>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  {item.pairingRecommendation}
                </p>
              </div>
            </FadeIn>
          )}

          {/* Dish Specs: Calories & Prep Time */}
          {(item.calories || item.preparationTime) && (
            <FadeIn delay={0.5} direction="up">
              <div className="flex items-center gap-6 text-xs text-secondary border-t border-black/10 pt-4">
                {item.preparationTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B99A75]" />
                    <span>Prep: <strong>{item.preparationTime}</strong></span>
                  </div>
                )}
                {item.calories && (
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#B99A75]" />
                    <span>Energy: <strong>{item.calories}</strong></span>
                  </div>
                )}
              </div>
            </FadeIn>
          )}

          {/* Reservation CTA Action with prefilled dish parameter and micro-hover */}
          <FadeIn delay={0.55} direction="up">
            <div className="pt-4 border-t border-black/10 space-y-3">
              <motion.div whileHover={shouldReduce ? {} : { scale: 1.02 }} whileTap={shouldReduce ? {} : { scale: 0.98 }}>
                <Link
                  to={`/reservations?dish=${encodeURIComponent(item.name)}`}
                  className="w-full py-4 rounded-full bg-[#171717] hover:bg-[#B99A75] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#B99A75]" />
                  <span>Reserve a Table for This Dish</span>
                </Link>
              </motion.div>

              <p className="text-[11px] text-secondary text-center">
                Our culinary brigade accommodates all allergies with advance notice in your reservation.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>

      {/* Similar Dishes Section */}
      <section className="pt-12 border-t border-black/10 space-y-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                Complementary Flavours
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717] mt-1">
                You May Also Enjoy
              </h2>
              <p className="text-xs sm:text-sm text-secondary">
                Dishes paired harmoniously with {item.name}.
              </p>
            </div>

            <Link
              to="/menu"
              className="text-xs font-semibold uppercase tracking-wider text-[#171717] hover:text-[#B99A75] inline-flex items-center gap-1 transition-colors group"
            >
              <span>View Full Menu Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {similarDishes.map((dish) => (
            <StaggerItem key={dish.id}>
              <MenuCard item={dish} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

    </div>
  );
}
