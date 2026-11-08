import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Demonstration Notice" className="bg-[#171717] text-white/90 text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#B99A75] text-[#171717] text-[10px] font-bold">
            i
          </span>
          <p className="font-medium tracking-wide">
            <span className="text-[#B99A75] font-semibold uppercase tracking-wider mr-1.5 text-[11px]">Portfolio Project:</span>
            Maison Kitchen is a fictional luxury dining concept created for digital demonstration. Prices & bookings are simulated.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/60 hover:text-white transition-colors p-1"
          aria-label="Dismiss demo banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
