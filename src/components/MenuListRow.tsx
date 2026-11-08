import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { formatNGN } from '../utils/formatters';
import { luxuryEasing } from './motion/MotionTransitions';

interface MenuListRowProps {
  item: MenuItem;
}

export default function MenuListRow({ item }: MenuListRowProps) {
  const [imageError, setImageError] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduce ? {} : { x: 4 }}
      transition={{ duration: 0.25, ease: luxuryEasing }}
      className="group py-5 sm:py-6 px-3 -mx-3 rounded-xl border-b border-black/10 hover:border-[#B99A75]/50 hover:bg-black/[0.015] transition-all duration-300"
    >
      <div className="flex items-start sm:items-center justify-between gap-4">
        
        {/* Left Side: Thumbnail + Title + Tagline */}
        <div className="flex items-start sm:items-center gap-4 flex-1">
          {/* Subtle dish thumbnail with warm zoom */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-[#ECE8E1] shrink-0 border border-black/5 shadow-sm transition-transform duration-500 group-hover:scale-105">
            {!imageError ? (
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-[#E5E1D8] flex items-center justify-center text-[10px] text-[#A69C8E]">
                MK
              </div>
            )}
          </div>

          <div className="space-y-1 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-[#171717] group-hover:text-[#B99A75] transition-colors duration-300">
                <Link to={`/menu/${item.id}`} className="focus:outline-none focus-visible:underline">
                  {item.name}
                </Link>
              </h3>

              {item.isSignature && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F1EBDD] text-[#967857]">
                  <Sparkles className="w-2.5 h-2.5" /> Signature
                </span>
              )}
            </div>

            <p className="text-xs text-[#B99A75] font-medium tracking-wide">
              {item.tagline}
            </p>
          </div>
        </div>

        {/* Dotted leader on desktop */}
        <div className="hidden md:block flex-1 mx-6 border-b border-dotted border-black/20" />

        {/* Right Side: Price */}
        <div className="font-heading font-bold text-base sm:text-lg text-[#171717] shrink-0">
          {formatNGN(item.price)}
        </div>
      </div>

      {/* Description & Action footer */}
      <div className="mt-2 pl-0 sm:pl-20 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-secondary">
        <p className="leading-relaxed max-w-2xl">
          {item.description}
        </p>

        <div className="flex items-center gap-3 shrink-0 pt-1 md:pt-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.dietary.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-black/5 text-[#555555] px-2 py-0.5 rounded font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/menu/${item.id}`}
            className="text-xs font-semibold text-[#171717] group-hover:text-[#B99A75] inline-flex items-center gap-1 transition-colors duration-300 ml-auto sm:ml-0"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
