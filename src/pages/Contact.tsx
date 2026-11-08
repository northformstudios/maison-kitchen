import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send, CheckCircle2, Car, Compass, Anchor, Copy, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { FadeIn, StaggerContainer, StaggerItem, luxuryEasing } from '../components/motion/MotionTransitions';

type PinType = 'main' | 'valet' | 'jetty';

const PIN_COORDINATES: Record<PinType, { x: number; y: number; label: string }> = {
  main: { x: 430, y: 165, label: 'Main Entrance & Host Foyer' },
  valet: { x: 310, y: 165, label: 'Walter Carrington Valet Staging' },
  jetty: { x: 430, y: 105, label: 'Private Five Cowries Boat Slip' },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activePin, setActivePin] = useState<PinType>('main');
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    document.title = "Contact & Concierge — Victoria Island | Maison Kitchen Lagos";
  }, []);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      err.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('18 Walter Carrington Crescent, Victoria Island, Lagos, Nigeria');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const currentCoords = PIN_COORDINATES[activePin];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header Banner */}
      <FadeIn delay={0.05} direction="up" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
          Connect & Inquire
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight">
          Lagos Concierge & Location
        </h1>
        <p className="text-secondary text-sm sm:text-base leading-relaxed">
          For private dining salon buyouts, corporate dinner arrangements, or bespoke tasting menus, our team is at your disposal.
        </p>

        {/* Demo Callout */}
        <div className="bg-[#F1EBDD]/60 border border-[#B99A75]/30 rounded-2xl p-4 text-xs text-[#6B553D] max-w-xl mx-auto flex items-start gap-3 text-left">
          <ShieldAlert className="w-5 h-5 text-[#B99A75] shrink-0 mt-0.5" />
          <div>
            <strong className="block text-[#171717]">Fictional Contact & Location Notice</strong>
            Maison Kitchen is a conceptual demonstration project. All phone numbers, emails, and address coordinates are simulated for UI/UX demonstration purposes.
          </div>
        </div>
      </FadeIn>

      {/* Grid: Contact Information & Working Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          <FadeIn delay={0.1} direction="up" className="bg-white rounded-3xl p-8 border border-black/10 shadow-subtle space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-xl text-[#171717]">
                Restaurant Particulars
              </h2>
              <motion.button
                whileHover={shouldReduce ? {} : { scale: 1.04 }}
                whileTap={shouldReduce ? {} : { scale: 0.95 }}
                onClick={handleCopyAddress}
                className="text-xs text-[#B99A75] hover:text-[#171717] flex items-center gap-1.5 font-medium transition-colors bg-[#F1EBDD]/40 px-3 py-1.5 rounded-full"
                title="Copy address to clipboard"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAddress ? 'Address Copied' : 'Copy Address'}</span>
              </motion.button>
            </div>

            <StaggerContainer staggerDelay={0.06} className="space-y-5 text-xs sm:text-sm">
              <StaggerItem className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#171717] font-semibold">Location Address</strong>
                  <address className="not-italic text-secondary leading-relaxed mt-0.5">
                    {RESTAURANT_INFO.address.street}<br />
                    {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.country}<br />
                    <span className="text-[11px] text-[#B99A75] block mt-1">({RESTAURANT_INFO.address.landmark})</span>
                  </address>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#171717] font-semibold">Service Hours</strong>
                  <ul className="text-secondary space-y-1 mt-0.5 text-xs">
                    <li>Tue – Thu: 12:00 PM – 3:30 PM &bull; 6:00 PM – 11:00 PM</li>
                    <li>Fri – Sat: 12:00 PM – 4:00 PM &bull; 6:00 PM – 12:00 AM</li>
                    <li>Sunday: 11:30 AM – 10:30 PM (Continuous)</li>
                    <li className="text-[#B99A75] font-medium">Monday: Closed for culinary development</li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#171717] font-semibold">Telephone (Demo)</strong>
                  <p className="text-secondary">{RESTAURANT_INFO.contact.phone}</p>
                  <span className="text-[10px] text-secondary/70">Simulated number for demonstration</span>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#171717] font-semibold">Electronic Mail (Demo)</strong>
                  <p className="text-secondary">{RESTAURANT_INFO.contact.email}</p>
                  <span className="text-[10px] text-secondary/70">Simulated concierge inbox</span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>

          {/* Transportation & Access Guide */}
          <FadeIn delay={0.18} direction="up" className="bg-white rounded-3xl p-8 border border-black/10 shadow-subtle space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#171717]">
              Arrival & Access
            </h3>

            <StaggerContainer staggerDelay={0.06} className="space-y-3.5 text-xs text-secondary">
              <StaggerItem className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#B99A75] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171717] block">Private Valet</strong>
                  Complimentary secure valet staging on Walter Carrington Crescent.
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-2.5">
                <Anchor className="w-4 h-4 text-[#B99A75] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171717] block">Water-Taxi Jetty</strong>
                  Private boat docking available on Five Cowries Creek for guests arriving from Ikoyi or Lekki Phase 1.
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#B99A75] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171717] block">Dress Code</strong>
                  Contemporary Chic &bull; Smart Casual.
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>

        </div>

        {/* Right Column: Working Contact Form (7 cols) */}
        <FadeIn delay={0.15} direction="up" className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-luxury">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: shouldReduce ? 0.01 : 0.45, ease: luxuryEasing }}
                  className="text-center py-12 space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: luxuryEasing }}
                    className="w-16 h-16 rounded-full bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center mx-auto shadow-sm"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-2xl text-[#171717]">
                    Demonstration Inquiry Received
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. In an active operational setting, our Lagos hospitality concierge would respond within two business hours.
                  </p>
                  <motion.button
                    whileHover={shouldReduce ? {} : { scale: 1.03 }}
                    whileTap={shouldReduce ? {} : { scale: 0.97 }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiries', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#B99A75] transition-colors"
                  >
                    Send Another Inquiry
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduce ? 0.01 : 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#B99A75] font-semibold">
                      Concierge Inquiries
                    </span>
                    <h2 className="font-heading font-bold text-2xl text-[#171717] mt-1">
                      Send a Message
                    </h2>
                    <p className="text-xs text-secondary mt-1">
                      Please complete the form below for private reservations, events, or press requests.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Chimamanda Cole"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[#F5F5F7] border ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-black/10'
                        } rounded-xl px-4 py-2.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. c.cole@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#F5F5F7] border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-black/10'
                        } rounded-xl px-4 py-2.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-2.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1.5">
                        Inquiry Department
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-2.5 text-sm text-[#171717] focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="General Inquiries">General Dining Inquiries</option>
                        <option value="Private Dining">Private Salon & Event Buyouts</option>
                        <option value="Press & Media">Press, Media & Collaborations</option>
                        <option value="Sommelier Cellar">Sommelier Tasting & Cellar Allocations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your event, preferred date, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-[#F5F5F7] border ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-black/10'
                      } rounded-xl p-3.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all resize-none`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-secondary">
                      Demonstration form &bull; Submissions are processed locally.
                    </p>

                    <motion.button
                      whileHover={shouldReduce ? {} : { scale: 1.02 }}
                      whileTap={shouldReduce ? {} : { scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171717] hover:bg-[#B99A75] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5 text-[#B99A75]" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>

      </div>

      {/* Interactive Stylized Map Section */}
      <FadeIn delay={0.1} direction="up" className="bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-luxury space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B99A75] font-semibold">
              Interactive Demonstration Map
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#171717] mt-1">
              Victoria Island Waterfront Enclave
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#F5F5F7] p-1 rounded-full border border-black/5">
            <button
              onClick={() => setActivePin('main')}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                activePin === 'main' ? 'text-white' : 'text-secondary hover:text-[#171717]'
              }`}
            >
              {activePin === 'main' && (
                <motion.div
                  layoutId="activeMapPinPill"
                  className="absolute inset-0 bg-[#171717] rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Main Entrance</span>
            </button>
            <button
              onClick={() => setActivePin('valet')}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                activePin === 'valet' ? 'text-white' : 'text-secondary hover:text-[#171717]'
              }`}
            >
              {activePin === 'valet' && (
                <motion.div
                  layoutId="activeMapPinPill"
                  className="absolute inset-0 bg-[#171717] rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Valet Staging</span>
            </button>
            <button
              onClick={() => setActivePin('jetty')}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                activePin === 'jetty' ? 'text-white' : 'text-secondary hover:text-[#171717]'
              }`}
            >
              {activePin === 'jetty' && (
                <motion.div
                  layoutId="activeMapPinPill"
                  className="absolute inset-0 bg-[#171717] rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Boat Jetty</span>
            </button>
          </div>
        </div>

        {/* Custom Stylized Minimalist Map Canvas */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#E7E5E0] border border-black/10 flex items-center justify-center">
          
          {/* Stylized SVG Map of Five Cowries Creek Waterfront */}
          <svg className="w-full h-full object-cover" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Water body: Five Cowries Creek */}
            <path d="M0 120 C 250 80, 500 160, 800 110 L 800 0 L 0 0 Z" fill="#D3E0EA" opacity="0.85" />
            <text x="400" y="55" fill="#7895A2" fontSize="12" fontFamily="sans-serif" letterSpacing="3" textAnchor="middle" fontWeight="bold">
              FIVE COWRIES CREEK (LAGOS LAGOON ACCESS)
            </text>

            {/* Shoreline contour */}
            <path d="M0 120 C 250 80, 500 160, 800 110" stroke="#B0C4DE" strokeWidth="4" />

            {/* Land Area: Victoria Island */}
            <rect x="0" y="120" width="800" height="330" fill="#EFECE6" />

            {/* Main Road: Walter Carrington Crescent */}
            <path d="M50 180 C 300 150, 550 210, 750 170" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
            <path d="M50 180 C 300 150, 550 210, 750 170" stroke="#D1CDC2" strokeWidth="2" strokeDasharray="6 6" />

            {/* Road Label */}
            <text x="400" y="225" fill="#888888" fontSize="11" fontFamily="sans-serif" letterSpacing="2" textAnchor="middle">
              WALTER CARRINGTON CRESCENT
            </text>

            {/* Connecting Roads */}
            <path d="M220 175 L 180 400" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <path d="M580 185 L 620 400" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <text x="210" y="320" fill="#999999" fontSize="9" fontFamily="sans-serif" transform="rotate(78 210 320)">
              TO OZUMBA MBADIWE
            </text>

            {/* Diplomatic Quarter Block */}
            <rect x="80" y="240" width="160" height="90" rx="8" fill="#E5E1D8" stroke="#D1CDC2" strokeWidth="1" />
            <text x="160" y="290" fill="#888888" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
              DIPLOMATIC QUARTER
            </text>

            {/* Marina Dock Jetty Landmark */}
            <path d="M430 145 L 430 110" stroke="#B99A75" strokeWidth="4" strokeLinecap="round" />
            <rect x="420" y="100" width="20" height="15" rx="3" fill="#B99A75" />
            <text x="430" y="92" fill="#967857" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              PRIVATE BOAT JETTY
            </text>

            {/* Animated Dynamic Destination Pin */}
            <motion.g
              animate={{
                x: currentCoords.x,
                y: currentCoords.y,
              }}
              transition={{
                type: "spring",
                stiffness: shouldReduce ? 1000 : 150,
                damping: 20,
              }}
            >
              <circle cx="0" cy="0" r="32" fill="#B99A75" opacity="0.2">
                {!shouldReduce && (
                  <animate
                    attributeName="r"
                    values="22;36;22"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              <circle cx="0" cy="0" r="18" fill="#171717" />
              <circle cx="0" cy="0" r="7" fill="#B99A75" />
              <circle cx="0" cy="0" r="18" fill="none" stroke="#B99A75" strokeWidth="2" />
            </motion.g>
          </svg>

          {/* Floating Luxury Location Card overlay responding to activePin */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePin}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduce ? 0 : -8 }}
                transition={{ duration: shouldReduce ? 0.01 : 0.25, ease: luxuryEasing }}
                className="glass-pill p-4 rounded-2xl shadow-luxury space-y-1"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B99A75] animate-ping" />
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#171717]">
                    {activePin === 'main' ? 'Maison Kitchen Lagos — Main Entrance' : activePin === 'valet' ? 'Private Valet Drop-off' : 'Five Cowries Water-Taxi Dock'}
                  </span>
                </div>
                <p className="text-xs text-secondary leading-snug">
                  {activePin === 'main' && '18 Walter Carrington Crescent, Victoria Island, Lagos. Formal greeting foyer & coat check.'}
                  {activePin === 'valet' && 'Dedicated private valet drive directly on Walter Carrington Crescent. Complimentary for all dining guests.'}
                  {activePin === 'jetty' && 'Direct private boat slip on Five Cowries Creek. Water-taxi transfers from Ikoyi & Lekki Phase 1.'}
                </p>
                <span className="text-[10px] text-[#B99A75] font-semibold block pt-1">
                  Demonstration Coordinates &bull; Victoria Island Waterfront
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full font-medium">
            Demo Map Projection
          </div>
        </div>
      </FadeIn>

    </div>
  );
}