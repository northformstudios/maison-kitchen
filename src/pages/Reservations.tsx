import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShieldAlert, Sparkles, Check, HelpCircle, Trash2, Calendar, MapPin, X, ChevronDown } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';
import { Reservation } from '../types';
import { getStoredReservations } from '../utils/formatters';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { FadeIn, StaggerContainer, StaggerItem, luxuryEasing } from '../components/motion/MotionTransitions';

export default function Reservations() {
  const [searchParams] = useSearchParams();
  const [storedList, setStoredList] = useState<Reservation[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // first open by default
  const shouldReduce = useReducedMotion();

  const paramDate = searchParams.get('date') || undefined;
  const paramTime = searchParams.get('time') || undefined;
  const paramGuests = searchParams.get('guests') ? Number(searchParams.get('guests')) : undefined;
  const paramDish = searchParams.get('dish') || undefined;

  useEffect(() => {
    document.title = "Reserve a Table — Victoria Island Waterfront | Maison Kitchen Lagos";
    setStoredList(getStoredReservations());
  }, []);

  const handleReservationSuccess = (newRes: Reservation) => {
    setStoredList((prev) => [newRes, ...prev]);
  };

  const removeSingleBooking = (id: string) => {
    const updated = storedList.filter((b) => b.id !== id);
    setStoredList(updated);
    try {
      localStorage.setItem('maison_kitchen_demo_reservations', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const clearBookings = () => {
    localStorage.removeItem('maison_kitchen_demo_reservations');
    setStoredList([]);
  };

  const faqs = [
    {
      q: 'What is the dress code at Maison Kitchen Lagos?',
      a: 'We embrace Smart Chic / Contemporary Elegance. We kindly request that guests refrain from athletic wear, beach flip-flops, or gym apparel in the main dining rooms.'
    },
    {
      q: 'How far in advance can reservations be made?',
      a: 'Our booking calendar opens 30 days in advance on a rolling daily basis. For special celebrations or buyouts beyond 30 days, please contact our concierge.'
    },
    {
      q: 'Can Maison Kitchen accommodate severe dietary allergies?',
      a: 'Absolutely. Our culinary brigade accommodates allergies (gluten-free, shellfish, nut allergies, dairy-free) with advance notice in your reservation booking.'
    },
    {
      q: 'Is valet parking available?',
      a: 'Yes, complimentary secure valet parking is provided directly at our Walter Carrington Crescent entrance in Victoria Island.'
    },
    {
      q: 'What is the corkage policy for private wine collections?',
      a: 'Guests may bring up to two 750ml bottles of special vintage wine not represented on our 450+ label cellar list. A corkage fee of ₦25,000 per bottle applies.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header Banner */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Victoria Island Dining Reservations
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight">
            Reserve Your Table
          </h1>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Bookings are accepted for lunch and dinner service. For private events of 8 or more, our Private Salon provides a dedicated sommelier and custom tasting menu.
          </p>

          {paramDish && (
            <div className="inline-flex items-center gap-2 bg-[#F1EBDD] text-[#8C7A65] px-4 py-2 rounded-full text-xs font-medium border border-[#B99A75]/30">
              <span>Reserving for: <strong>{paramDish}</strong></span>
            </div>
          )}

          {/* Demo Callout */}
          <div className="bg-[#F1EBDD]/60 border border-[#B99A75]/30 rounded-2xl p-4 text-xs text-[#6B553D] max-w-xl mx-auto flex items-start gap-3 text-left">
            <ShieldAlert className="w-5 h-5 text-[#B99A75] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#171717]">Portfolio Demonstration Mode</strong>
              All reservations submitted here are simulated and saved to your local browser storage. No real email, telephone charges, or payment exist.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Main Reservation Form */}
      <FadeIn delay={0.1}>
        <div className="max-w-4xl mx-auto">
          <ReservationForm
            onSuccess={handleReservationSuccess}
            preselectedDate={paramDate}
            preselectedTime={paramTime}
            preselectedGuests={paramGuests}
            preselectedDish={paramDish}
          />
        </div>
      </FadeIn>

      {/* Local Storage "My Saved Demo Bookings" with Animated Items */}
      {storedList.length > 0 && (
        <FadeIn delay={0.15}>
          <section className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-subtle space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B99A75]">
                  Saved Browser Demonstrations
                </span>
                <h2 className="font-heading font-bold text-xl text-[#171717]">
                  Your Active Demo Bookings ({storedList.length})
                </h2>
              </div>
              <button
                onClick={clearBookings}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Saved</span>
              </button>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {storedList.map((res) => (
                  <motion.div
                    key={res.id}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3, ease: luxuryEasing }}
                    className="bg-[#F5F5F7] p-4 rounded-xl border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm text-[#171717]">{res.fullName}</span>
                        <span className="text-[10px] bg-[#B99A75]/20 text-[#967857] px-2 py-0.5 rounded font-semibold">
                          {res.id}
                        </span>
                      </div>
                      <div className="text-secondary mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span>Date: <strong className="text-main">{res.date}</strong></span>
                        <span>Time: <strong className="text-main">{res.time} WAT</strong></span>
                        <span>Party: <strong className="text-main">{res.guests} Guests</strong></span>
                        <span>Area: <strong className="text-main">{res.seatingArea}</strong></span>
                      </div>
                      {res.specialRequests && (
                        <p className="text-[11px] text-secondary mt-1 italic">
                          Note: {res.specialRequests}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        <Check className="w-3 h-3" /> Demo Confirmed
                      </span>
                      <button
                        onClick={() => removeSingleBooking(res.id)}
                        className="text-secondary hover:text-red-600 p-1 transition-colors"
                        title="Remove booking"
                        aria-label={`Remove booking ${res.id}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </FadeIn>
      )}

      {/* Dining Environments Showcase */}
      <section className="max-w-5xl mx-auto space-y-8">
        <FadeIn>
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
              Dining Spaces
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717]">
              Select Your Dining Environment
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_INFO.seatingOptions.map((opt) => (
            <StaggerItem key={opt.id}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -4 }}
                transition={{ duration: 0.25, ease: luxuryEasing }}
                className="bg-white p-6 rounded-2xl border border-black/5 space-y-2 shadow-subtle hover:border-[#B99A75]/50 transition-colors h-full"
              >
                <h3 className="font-heading font-bold text-base text-[#171717]">{opt.name}</h3>
                <p className="text-xs text-secondary leading-relaxed">{opt.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Reservation FAQs with Animated Accordion */}
      <section className="max-w-4xl mx-auto space-y-6 pt-8 border-t border-black/10">
        <FadeIn>
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
              Guest Inquiries
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={false}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A75]"
                  aria-expanded={isExpanded}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-[#171717] flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#B99A75] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: luxuryEasing }}
                    className="shrink-0 text-secondary"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduce ? 0.01 : 0.3, ease: luxuryEasing }}
                    >
                      <div className="px-5 pb-5 pt-1 pl-12 text-xs sm:text-sm text-secondary leading-relaxed border-t border-black/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
