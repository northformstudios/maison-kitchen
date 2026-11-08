import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, LayoutGrid, List, Sparkles, Info, Calendar, X, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { MenuCategory } from '../types';
import MenuCard from '../components/MenuCard';
import MenuListRow from '../components/MenuListRow';
import { FadeIn, luxuryEasing } from '../components/motion/MotionTransitions';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as MenuCategory | 'all') || 'all';

  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    document.title = "Our Menu — 24 Handcrafted Courses | Maison Kitchen Lagos";
  }, []);

  // Sync category param with active category state
  useEffect(() => {
    const cat = searchParams.get('category') as MenuCategory | null;
    if (cat && (cat === 'starters' || cat === 'mains' || cat === 'pasta' || cat === 'seafood' || cat === 'desserts' || cat === 'drinks')) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: MenuCategory | 'all') => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const dietaryFilters = ['All', "Chef's Signature", 'Gluten-Free', 'Vegetarian', 'Pescatarian', 'Halal-Friendly'];

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary check
      if (selectedDietary !== 'All') {
        if (selectedDietary === "Chef's Signature") {
          if (!item.isSignature) return false;
        } else if (!item.dietary.includes(selectedDietary)) {
          return false;
        }
      }
      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIng = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesIng;
      }
      return true;
    });
  }, [activeCategory, selectedDietary, searchQuery]);

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Editorial Header */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Seasonal Culinary Selection
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight">
            The Kitchen Collection
          </h1>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Rooted in West African coastal provenance and executed with French precision. All dishes are prepared to order in our Victoria Island kitchen.
          </p>

          {/* Demo Notice Disclaimer Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1EBDD]/60 border border-[#B99A75]/30 text-xs text-[#6B553D] mt-2">
            <Info className="w-3.5 h-3.5 text-[#B99A75]" />
            <span>Fictional demonstration menu & prices in Nigerian Naira (NGN) for portfolio showcase.</span>
          </div>
        </div>
      </FadeIn>

      {/* Control Bar: Categories, Search, Filters & View Mode */}
      <FadeIn delay={0.1}>
        <div className="space-y-6 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-subtle">
          
          {/* Category Pills with smooth layout animation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Menu Course Categories">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-[#B99A75] ${
                activeCategory === 'all'
                  ? 'text-white'
                  : 'text-secondary hover:text-[#171717] hover:bg-black/5'
              }`}
            >
              {activeCategory === 'all' && (
                <motion.span
                  layoutId="menuCatPill"
                  className="absolute inset-0 bg-[#171717] rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              All Courses ({MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const isCatActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-[#B99A75] ${
                    isCatActive
                      ? 'text-white'
                      : 'text-secondary hover:text-[#171717] hover:bg-black/5'
                  }`}
                >
                  {isCatActive && (
                    <motion.span
                      layoutId="menuCatPill"
                      className="absolute inset-0 bg-[#171717] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Search & Layout Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/5">
            
            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dish, ingredient, spices..."
                className="w-full bg-[#F5F5F7] border border-black/10 rounded-full pl-10 pr-9 py-2.5 text-xs text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-secondary hover:text-main p-1 transition-transform hover:scale-110"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Filters & View Toggle */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
              
              {/* Dietary Dropdown */}
              <div className="flex items-center gap-1.5">
                <label htmlFor="dietary-select" className="text-[11px] text-secondary uppercase font-semibold hidden md:inline">
                  Dietary:
                </label>
                <select
                  id="dietary-select"
                  value={selectedDietary}
                  onChange={(e) => setSelectedDietary(e.target.value)}
                  className="bg-[#F5F5F7] border border-black/10 rounded-full px-3.5 py-2 text-xs text-[#171717] focus:outline-none focus:border-[#B99A75] cursor-pointer transition-colors"
                >
                  {dietaryFilters.map((diet) => (
                    <option key={diet} value={diet}>
                      {diet}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grid / List Layout Switcher */}
              <div className="flex items-center bg-[#F5F5F7] p-1 rounded-full border border-black/5" role="group" aria-label="View format">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#B99A75] ${
                    viewMode === 'grid' ? 'bg-white text-[#171717] shadow-sm' : 'text-secondary hover:text-main'
                  }`}
                  aria-label="Card grid view"
                  title="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#B99A75] ${
                    viewMode === 'list' ? 'bg-white text-[#171717] shadow-sm' : 'text-secondary hover:text-main'
                  }`}
                  aria-label="Editorial list view"
                  title="Editorial Menu Book View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </FadeIn>

      {/* Active Filter Chips & Results Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2 text-xs text-secondary">
        <div className="flex items-center gap-2 flex-wrap">
          <span>Showing <strong className="font-semibold text-main">{filteredItems.length}</strong> curated dishes</span>
          
          <AnimatePresence>
            {activeCategory !== 'all' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1 bg-black/5 text-[#171717] px-2.5 py-1 rounded-full font-medium"
              >
                <span>Category: <strong className="capitalize">{activeCategory}</strong></span>
                <button onClick={() => handleCategoryChange('all')} className="hover:text-[#B99A75] transition-colors p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </motion.span>
            )}

            {selectedDietary !== 'All' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1 bg-[#F1EBDD] text-[#967857] px-2.5 py-1 rounded-full font-medium"
              >
                <span>{selectedDietary}</span>
                <button onClick={() => setSelectedDietary('All')} className="hover:text-[#171717] transition-colors p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </motion.span>
            )}

            {searchQuery && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1 bg-black/5 text-[#171717] px-2.5 py-1 rounded-full font-medium"
              >
                <span>"{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:text-[#B99A75] transition-colors p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <Link
          to="/reservations"
          className="text-[#B99A75] hover:text-[#171717] font-semibold flex items-center gap-1 transition-colors self-start sm:self-auto group"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve Table for This Menu</span>
        </Link>
      </div>

      {/* Dishes Display with Warm Category Transition & Gentle Staggered Entrances */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${selectedDietary}-${searchQuery}-${viewMode}`}
          initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduce ? 0 : -10 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.35, ease: luxuryEasing }}
        >
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-black/5 space-y-4 shadow-subtle">
              <UtensilsCrossed className="w-10 h-10 text-secondary/40 mx-auto" />
              <h2 className="font-heading font-semibold text-lg text-main">No Culinary Dishes Found</h2>
              <p className="text-secondary text-xs sm:text-sm max-w-md mx-auto">
                We couldn't find any dishes matching your current search or dietary filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedDietary('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-[#B99A75] transition-colors shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: shouldReduce ? 1 : 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: shouldReduce ? 0 : 0.04,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: shouldReduce ? 0.01 : 0.45, ease: luxuryEasing },
                    },
                  }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: shouldReduce ? 1 : 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: shouldReduce ? 0 : 0.03,
                  },
                },
              }}
              className="bg-white rounded-3xl p-6 sm:p-12 border border-black/5 shadow-subtle space-y-2"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: shouldReduce ? 0.01 : 0.35, ease: luxuryEasing },
                    },
                  }}
                >
                  <MenuListRow item={item} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Menu Notes & Allergen Policy */}
      <FadeIn delay={0.15}>
        <div className="bg-[#F1EBDD]/40 rounded-3xl p-8 border border-black/5 text-xs text-secondary space-y-3">
          <h2 className="font-heading font-semibold text-sm text-[#171717]">
            Maison Kitchen Culinary Note & Dietary Accommodations
          </h2>
          <p className="leading-relaxed">
            We honor guest dietary preferences and allergies with customized preparations. Please notify your captain or our concierge when reserving your table. All wild fish are caught sustainably along the Gulf of Guinea. Beef and poultry are ethically sourced from vetted cooperative ranches.
          </p>
          <p className="text-[11px] text-[#8C7355]">
            * Demonstration notice: Maison Kitchen is a fictional restaurant concept developed for portfolio purposes. Prices are listed in Nigerian Naira (NGN).
          </p>
        </div>
      </FadeIn>

    </div>
  );
}
