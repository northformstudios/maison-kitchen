import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Sparkles, CheckCircle2, ShieldAlert, ArrowRight, Printer, Download } from 'lucide-react';
import { Reservation } from '../types';
import { saveReservation } from '../utils/formatters';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { luxuryEasing } from './motion/MotionTransitions';

interface ReservationFormProps {
  onSuccess?: (reservation: Reservation) => void;
  preselectedTime?: string;
  preselectedDate?: string;
  preselectedGuests?: number;
  preselectedDish?: string;
}

export default function ReservationForm({
  onSuccess,
  preselectedTime,
  preselectedDate,
  preselectedGuests,
  preselectedDish,
}: ReservationFormProps) {
  const today = new Date().toISOString().split('T')[0];
  const shouldReduce = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: preselectedDate || today,
    time: preselectedTime || '19:30',
    guests: preselectedGuests || 2,
    seatingArea: 'Main Dining Room' as Reservation['seatingArea'],
    specialRequests: preselectedDish ? `Interested in enjoying: ${preselectedDish}` : '',
    occasion: 'Dinner' as NonNullable<Reservation['occasion']>,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedReservation, setSubmittedReservation] = useState<Reservation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync props if passed
  useEffect(() => {
    if (preselectedDate) setFormData((prev) => ({ ...prev, date: preselectedDate }));
    if (preselectedTime) setFormData((prev) => ({ ...prev, time: preselectedTime }));
    if (preselectedGuests) setFormData((prev) => ({ ...prev, guests: preselectedGuests }));
    if (preselectedDish) setFormData((prev) => ({ ...prev, specialRequests: `Interested in enjoying: ${preselectedDish}` }));
  }, [preselectedDate, preselectedTime, preselectedGuests, preselectedDish]);

  const lunchSlots = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];
  const dinnerSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g., name@domain.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid telephone number (minimum 8 digits).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    } else if (formData.date < today) {
      newErrors.date = 'Past dates cannot be reserved.';
    } else {
      const dayOfWeek = new Date(formData.date + 'T00:00:00').getDay();
      if (dayOfWeek === 1) {
        newErrors.date = 'Maison Kitchen is closed on Mondays for culinary development. Please choose Tuesday through Sunday.';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred seating time.';
    }

    if (formData.guests < 1 || formData.guests > 16) {
      newErrors.guests = 'Party size must be between 1 and 16 guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = Math.floor(10000 + Math.random() * 90000);
      const newReservation: Reservation = {
        id: `MK-${randomCode}`,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        date: formData.date,
        time: formData.time,
        guests: Number(formData.guests),
        seatingArea: formData.seatingArea,
        specialRequests: formData.specialRequests.trim(),
        occasion: formData.occasion,
        createdAt: new Date().toISOString(),
        status: 'Confirmed',
      };

      saveReservation(newReservation);
      setSubmittedReservation(newReservation);
      setIsSubmitting(false);

      if (onSuccess) {
        onSuccess(newReservation);
      }
    }, 600);
  };

  const resetForm = () => {
    setSubmittedReservation(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: today,
      time: '19:30',
      guests: 2,
      seatingArea: 'Main Dining Room',
      specialRequests: '',
      occasion: 'Dinner',
    });
    setErrors({});
  };

  const handleDownloadCalendar = () => {
    if (!submittedReservation) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Maison Kitchen//Demonstration Reservation//EN
BEGIN:VEVENT
SUMMARY:Dining at Maison Kitchen Lagos (${submittedReservation.id})
DESCRIPTION:Simulated Demonstration Dining Reservation at Maison Kitchen, 18 Walter Carrington Crescent, Victoria Island, Lagos. Party of ${submittedReservation.guests}.
LOCATION:18 Walter Carrington Crescent, Victoria Island, Lagos, Nigeria
DTSTART:${submittedReservation.date.replace(/-/g, '')}T${submittedReservation.time.replace(':', '')}00
DTEND:${submittedReservation.date.replace(/-/g, '')}T${Number(submittedReservation.time.split(':')[0]) + 2}${submittedReservation.time.split(':')[1]}00
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `maison-kitchen-${submittedReservation.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If submitted, render confirmation state
  if (submittedReservation) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduce ? 0.01 : 0.5, ease: luxuryEasing }}
        className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-luxury text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: shouldReduce ? 1 : 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, delay: 0.1, type: 'spring' }}
          className="w-16 h-16 rounded-full bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center mx-auto mb-6 shadow-sm"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>

        <span className="text-xs uppercase tracking-widest text-[#B99A75] font-semibold">
          Demonstration Confirmation
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717] mt-1 mb-2">
          Table Reserved for {submittedReservation.fullName}
        </h2>
        <p className="text-secondary text-xs sm:text-sm max-w-md mx-auto mb-8">
          Your demonstration booking has been verified and saved to your local browser session. A simulated receipt reference has been issued.
        </p>

        {/* Booking Card Details */}
        <div className="bg-[#F5F5F7] rounded-2xl p-6 text-left border border-black/5 space-y-4 mb-8">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <div>
              <span className="text-[11px] text-secondary uppercase tracking-wider block">Booking Reference</span>
              <span className="font-heading font-bold text-lg text-[#171717]">{submittedReservation.id}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Simulated Booking
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-secondary block">Date</span>
              <span className="font-medium text-[#171717] text-sm">{submittedReservation.date}</span>
            </div>
            <div>
              <span className="text-secondary block">Time</span>
              <span className="font-medium text-[#171717] text-sm">{submittedReservation.time} WAT</span>
            </div>
            <div>
              <span className="text-secondary block">Party Size</span>
              <span className="font-medium text-[#171717] text-sm">{submittedReservation.guests} {submittedReservation.guests === 1 ? 'Guest' : 'Guests'}</span>
            </div>
            <div>
              <span className="text-secondary block">Seating Area</span>
              <span className="font-medium text-[#171717] text-sm">{submittedReservation.seatingArea}</span>
            </div>
            <div>
              <span className="text-secondary block">Occasion</span>
              <span className="font-medium text-[#171717] text-sm">{submittedReservation.occasion || 'Dinner'}</span>
            </div>
            <div>
              <span className="text-secondary block">Location</span>
              <span className="font-medium text-[#171717] text-sm">Victoria Island, Lagos</span>
            </div>
          </div>

          {submittedReservation.specialRequests && (
            <div className="border-t border-black/10 pt-3 text-xs">
              <span className="text-secondary block">Notes & Dietary Accommodations</span>
              <p className="text-[#171717] italic mt-0.5">{submittedReservation.specialRequests}</p>
            </div>
          )}
        </div>

        {/* Disclaimer Notice */}
        <div className="bg-[#F1EBDD]/50 border border-[#B99A75]/30 rounded-xl p-4 text-xs text-[#6B553D] flex items-start gap-3 text-left mb-8">
          <ShieldAlert className="w-5 h-5 text-[#B99A75] shrink-0 mt-0.5" />
          <div>
            <strong className="block text-[#171717]">Fictional Booking Notice</strong>
            This reservation is for demonstration and UX showcase only. Maison Kitchen is not an operating business in Lagos. No real charges or culinary bookings exist.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.button
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-black/15 text-xs font-semibold text-main hover:bg-black/5 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-[#B99A75]" />
            <span>Add to Calendar (.ics)</span>
          </motion.button>
          <motion.button
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
            onClick={() => window.print()}
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-black/15 text-xs font-semibold text-main hover:bg-black/5 transition-colors flex items-center justify-center gap-2"
          >
            <Printer className="w-3.5 h-3.5 text-[#B99A75]" />
            <span>Print Pass</span>
          </motion.button>
          <motion.button
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
            onClick={resetForm}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#171717] text-white text-xs font-semibold tracking-wider hover:bg-[#B99A75] transition-colors"
          >
            Reserve Another Table
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-luxury">
      
      {/* Form Header */}
      <div className="border-b border-black/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#B99A75] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Online Demonstration Concierge
          </span>
          <h2 className="font-heading font-bold text-2xl text-[#171717] mt-1">
            Reserve Your Dining Table
          </h2>
          <p className="text-xs text-secondary mt-1">
            Experience contemporary culinary artistry on the Victoria Island waterfront.
          </p>
        </div>

        <div className="bg-[#F5F5F7] px-4 py-2 rounded-xl text-xs text-secondary border border-black/5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Real-time demo booking validation</span>
        </div>
      </div>

      <div className="space-y-6">
        
        {/* Row 1: Guests, Date, Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Guests */}
          <div>
            <label htmlFor="res-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#B99A75]" />
              <span>Guests</span>
            </label>
            <select
              id="res-guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
              className="w-full bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest (Solo Tasting)' : `${num} Guests`}
                </option>
              ))}
            </select>
            {errors.guests && <p className="text-xs text-red-500 mt-1">{errors.guests}</p>}
          </div>

          {/* Date */}
          <div>
            <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-[#B99A75]" />
              <span>Date</span>
            </label>
            <input
              id="res-date"
              type="date"
              min={today}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={`w-full bg-[#F5F5F7] border ${
                errors.date ? 'border-red-500 bg-red-50/20' : 'border-black/10'
              } rounded-xl px-4 py-2.5 text-sm text-[#171717] focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all cursor-pointer`}
            />
            {errors.date && <p className="text-xs text-red-500 mt-1 font-medium">{errors.date}</p>}
            <span className="text-[11px] text-secondary mt-1 block">Closed Mondays for culinary development</span>
          </div>

          {/* Time Slot */}
          <div>
            <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B99A75]" />
              <span>Time Slot</span>
            </label>
            <select
              id="res-time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all cursor-pointer"
            >
              <optgroup label="Lunch Service">
                {lunchSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot} PM</option>
                ))}
              </optgroup>
              <optgroup label="Dinner Service">
                {dinnerSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot} PM</option>
                ))}
              </optgroup>
            </select>
            {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
          </div>

        </div>

        {/* Row 2: Seating Preference & Occasion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B99A75]" />
              <span>Seating Preference</span>
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {RESTAURANT_INFO.seatingOptions.map((seat) => (
                <button
                  type="button"
                  key={seat.name}
                  onClick={() => setFormData({ ...formData, seatingArea: seat.name as Reservation['seatingArea'] })}
                  className={`text-left p-3 rounded-xl border text-xs transition-all ${
                    formData.seatingArea === seat.name
                      ? 'border-[#B99A75] bg-[#F1EBDD]/40 font-semibold text-[#171717] shadow-sm'
                      : 'border-black/10 bg-[#F5F5F7] text-secondary hover:border-black/20'
                  }`}
                >
                  <span className="block font-medium text-[#171717]">{seat.name}</span>
                  <span className="text-[10px] text-secondary line-clamp-1 mt-0.5">{seat.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="res-occasion" className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
              Occasion
            </label>
            <select
              id="res-occasion"
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value as NonNullable<Reservation['occasion']> })}
              className="w-full bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all cursor-pointer"
            >
              <option value="Dinner">Casual Fine Dining</option>
              <option value="Date Night">Romantic Date Night</option>
              <option value="Birthday">Birthday Celebration</option>
              <option value="Anniversary">Wedding Anniversary</option>
              <option value="Business Dining">Corporate / Business Dinner</option>
              <option value="Celebration">Special Milestone</option>
            </select>

            <div className="mt-4 bg-[#F5F5F7] p-3 rounded-xl border border-black/5">
              <span className="text-[11px] text-secondary block">
                <strong className="text-[#171717]">Lagos Dress Code:</strong> Smart Casual &bull; Contemporary Chic.
              </span>
            </div>
          </div>

        </div>

        {/* Row 3: Guest Contact Details */}
        <div className="border-t border-black/10 pt-6 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#B99A75]">
            Guest Contact Particulars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div>
              <label htmlFor="res-name" className="block text-xs font-medium text-main mb-1.5">
                Full Name *
              </label>
              <input
                id="res-name"
                type="text"
                placeholder="e.g. Oluwaseun Adeleke"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full bg-[#F5F5F7] border ${
                  errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-black/10'
                } rounded-xl px-4 py-2.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="res-email" className="block text-xs font-medium text-main mb-1.5">
                Email Address *
              </label>
              <input
                id="res-email"
                type="email"
                placeholder="e.g. o.adeleke@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-[#F5F5F7] border ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-black/10'
                } rounded-xl px-4 py-2.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="res-phone" className="block text-xs font-medium text-main mb-1.5">
                Telephone (WhatsApp / Calls) *
              </label>
              <input
                id="res-phone"
                type="tel"
                placeholder="+234 803 000 0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full bg-[#F5F5F7] border ${
                  errors.phone ? 'border-red-500 bg-red-50/20' : 'border-black/10'
                } rounded-xl px-4 py-2.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
            </div>

          </div>
        </div>

        {/* Row 4: Dietary & Special Notes */}
        <div>
          <label htmlFor="res-notes" className="block text-xs font-medium text-main mb-1.5">
            Dietary Requirements & Special Requests (Optional)
          </label>
          <textarea
            id="res-notes"
            rows={3}
            placeholder="Please mention any allergies (e.g. Shellfish-free, Halal, Gluten-Free), or anniversary surprises..."
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full bg-[#F5F5F7] border border-black/10 rounded-xl p-3.5 text-sm text-[#171717] placeholder-black/30 focus:outline-none focus:border-[#B99A75] focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Notice & Submit Button */}
        <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary text-center sm:text-left">
            <span className="font-semibold text-main">Demo Mode:</span> Bookings are saved locally in your browser storage.
          </p>

          <motion.button
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171717] hover:bg-[#B99A75] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Confirming...' : 'Confirm Demonstration Booking'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

      </div>
    </form>
  );
}
