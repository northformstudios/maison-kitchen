import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { luxuryEasing } from './motion/MotionTransitions';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-400 ${
          scrolled ? 'glass-nav py-3.5 shadow-subtle' : 'bg-[#F5F5F7]/95 backdrop-blur-md py-4 sm:py-5 border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with micro-interaction */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A75] rounded-xl p-1"
            >
              <motion.div
                whileHover={shouldReduce ? {} : { scale: 1.05 }}
                whileTap={shouldReduce ? {} : { scale: 0.96 }}
                transition={{ duration: 0.25, ease: luxuryEasing }}
                className="w-9 h-9 rounded-full bg-[#171717] flex items-center justify-center text-[#B99A75] font-heading font-semibold text-base tracking-wider transition-colors duration-300 group-hover:bg-[#B99A75] group-hover:text-[#171717] shadow-sm"
              >
                MK
              </motion.div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold tracking-wider text-lg sm:text-xl text-[#171717] uppercase leading-tight group-hover:text-[#B99A75] transition-colors duration-300">
                  Maison Kitchen
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B99A75] font-medium">
                  Lagos &bull; Fine Dining
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A75] ${
                      active
                        ? 'text-[#171717] font-semibold'
                        : 'text-[#555555] hover:text-[#171717]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navActiveBackground"
                        className="absolute inset-0 bg-black/[0.06] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B99A75]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Status & Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-[#777777] bg-black/[0.03] px-3 py-1.5 rounded-full border border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Victoria Island &bull; Service Today</span>
              </div>

              <motion.div whileHover={shouldReduce ? {} : { scale: 1.02 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white text-[13px] font-medium tracking-wide hover:bg-[#B99A75] transition-all duration-300 shadow-sm hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A75]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B99A75] group-hover:text-white" />
                  <span>Reserve a Table</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Actions & Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/reservations"
                className="px-3.5 py-2 rounded-full bg-[#171717] text-white text-xs font-semibold tracking-wide hover:bg-[#B99A75] transition-colors"
              >
                Reserve
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#171717] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A75] transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay with Silky Smooth AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduce ? 0.01 : 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: shouldReduce ? 0.01 : 0.4,
                ease: luxuryEasing,
              }}
              className="relative z-10 w-full max-w-sm ml-auto h-full bg-[#F5F5F7] shadow-2xl flex flex-col p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#171717] flex items-center justify-center text-[#B99A75] font-heading font-semibold text-sm">
                    MK
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-semibold tracking-wider text-base uppercase text-[#171717]">
                      Maison Kitchen
                    </span>
                    <span className="text-[10px] text-[#B99A75] font-medium tracking-widest uppercase">
                      Lagos Waterfront
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-secondary hover:text-main hover:bg-black/5 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-1">
                {navLinks.map((link, idx) => {
                  const active = isActive(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: shouldReduce ? 0 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: shouldReduce ? 0 : 0.1 + idx * 0.05,
                        duration: shouldReduce ? 0.01 : 0.35,
                        ease: luxuryEasing,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          active
                            ? 'bg-[#171717] text-white font-semibold pl-5'
                            : 'text-main hover:bg-black/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-black/10 flex flex-col space-y-4">
                <Link
                  to="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#B99A75] text-[#171717] font-semibold text-center tracking-wide text-sm shadow-md hover:bg-[#A3835F] transition-colors"
                >
                  Reserve a Table
                </Link>

                <div className="bg-white/80 rounded-xl p-4 text-xs text-secondary space-y-2 border border-black/5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#B99A75] shrink-0 mt-0.5" />
                    <span>{RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.district}, Lagos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#B99A75] shrink-0 mt-0.5" />
                    <span>Tue – Sun: 12:00 PM – 11:30 PM (Mon Closed)</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-[#8C7A65]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B99A75]" />
                    <span>Private Valet on Walter Carrington</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
