import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#171717] text-white pt-20 pb-12 border-t border-white/10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A75] rounded-xl p-1">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#B99A75] font-heading font-semibold text-base transition-colors group-hover:bg-[#B99A75] group-hover:text-[#171717]">
                MK
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold tracking-wider text-xl text-white uppercase">
                  Maison Kitchen
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B99A75] font-medium">
                  Victoria Island, Lagos
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Thoughtfully prepared dishes, beautiful spaces and memorable dining experiences.
              An ode to West African culinary soul expressed through contemporary minimalism on the Lagos waterfront.
            </p>

            {/* Demonstration Notice Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/65 space-y-1">
              <div className="flex items-center gap-2 text-[#B99A75] font-medium uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                <span>Demo Concept Notice</span>
              </div>
              <p className="leading-normal">
                Maison Kitchen is a creative demonstration project. All menu items, addresses, and reservations are simulated for design and code showcase.
              </p>
            </div>
          </div>

          {/* Column 2: Hours & Dining Schedule (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-heading font-medium tracking-wider text-sm uppercase text-[#B99A75]">
              Opening Hours
            </h2>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex flex-col space-y-0.5">
                <span className="text-white font-medium">Tuesday – Thursday</span>
                <span>Lunch: 12:00 PM – 3:30 PM</span>
                <span>Dinner: 6:00 PM – 11:00 PM</span>
              </li>
              <li className="flex flex-col space-y-0.5">
                <span className="text-white font-medium">Friday – Saturday</span>
                <span>Lunch: 12:00 PM – 4:00 PM</span>
                <span>Dinner: 6:00 PM – 12:00 AM</span>
              </li>
              <li className="flex flex-col space-y-0.5">
                <span className="text-white font-medium">Sunday Brunch & Dinner</span>
                <span>11:30 AM – 10:30 PM (Continuous)</span>
              </li>
              <li className="pt-1 text-[#B99A75] italic">
                Monday: Closed for Culinary Development
              </li>
            </ul>
          </div>

          {/* Column 3: Lagos Address & Inquiries (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-heading font-medium tracking-wider text-sm uppercase text-[#B99A75]">
              Location & Contact
            </h2>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B99A75] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  18 Walter Carrington Crescent<br />
                  Victoria Island, Lagos<br />
                  Nigeria
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B99A75] shrink-0" />
                <span>+234 1 892 4000</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B99A75] shrink-0" />
                <span className="truncate">concierge@maisonkitchen-lagos.demo</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/reservations"
                className="inline-block text-xs font-semibold text-[#B99A75] hover:text-white underline underline-offset-4 transition-colors"
              >
                Book a Demonstration Table &rarr;
              </Link>
            </div>
          </div>

          {/* Column 4: Epistolary Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-heading font-medium tracking-wider text-sm uppercase text-[#B99A75]">
              The Seasonal Letter
            </h2>
            <p className="text-xs text-white/60 leading-relaxed">
              Receive private invitations to seasonal tasting menus, cellar releases, and intimate chef dinners in Lagos.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  aria-label="Email address for seasonal newsletter"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B99A75] focus:ring-1 focus:ring-[#B99A75] transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#B99A75] hover:bg-[#D4C1A5] text-[#171717] rounded-md transition-colors flex items-center justify-center font-medium"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#B99A75] animate-fade-in flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Thank you for subscribing to our seasonal letters.
                </p>
              )}
            </form>

            <div className="pt-2">
              <p className="text-[11px] text-white/40">
                Dress Code: Smart Chic &bull; Complimentary Valet Parking
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Sub-links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Maison Kitchen Lagos. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <Link to="/about" className="hover:text-white transition-colors">Our Story</Link>
            <Link to="/menu" className="hover:text-white transition-colors">Culinary Menu</Link>
            <Link to="/reservations" className="hover:text-white transition-colors">Reservations</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Directions & Valet</Link>
          </div>

          <div className="flex items-center gap-2 text-white/40 text-[11px]">
            <span>Apple-inspired luxury minimalism</span>
            <span>&bull;</span>
            <span className="text-[#B99A75] font-medium">Lagos, Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
