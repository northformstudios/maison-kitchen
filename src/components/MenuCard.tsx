import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from '../types';
import { formatNGN } from '../utils/formatters';
import { luxuryEasing } from './motion/MotionTransitions';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduce ? {} : { y: -5 }}
      whileTap={shouldReduce ? {} : { y: -1, scale: 0.99 }}
      transition={{ duration: 0.35, ease: luxuryEasing }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#B99A75]/50 transition-all duration-500 hover:shadow-luxury-hover flex flex-col h-full focus-within:ring-2 focus-within:ring-[#B99A75]"
    >
      {/* Image Container with Warm Editorial Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-[#E8E4DD] animate-pulse" />
        )}

        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#EFECE6] text-[#A69C8E] p-4 text-center">
            <UtensilsCrossed className="w-8 h-8 mb-1.5 opacity-60 text-[#B99A75]" />
            <span className="text-xs font-heading font-medium tracking-wide">{item.name}</span>
          </div>
        ) : (
          <motion.img
            src={item.image}
            alt={`${item.name} - ${item.tagline}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={imageLoaded ? { opacity: 1, scale: 1.0 } : { opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.65, ease: luxuryEasing }}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {item.isSignature ? (
            <span className="glass-pill px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide text-[#171717] flex items-center gap-1.5 shadow-sm transition-transform duration-300 group-hover:translate-y-[-1px]">
              <Sparkles className="w-3 h-3 text-[#B99A75]" />
              <span>Chef's Signature</span>
            </span>
          ) : (
            <span className="glass-pill px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide text-secondary uppercase transition-transform duration-300 group-hover:translate-y-[-1px]">
              {item.categoryLabel}
            </span>
          )}

          {/* Quick Details indicator */}
          <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#171717] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm transform group-hover:scale-105">
            <ArrowUpRight className="w-4 h-4 text-[#171717] group-hover:text-[#B99A75] transition-colors" />
          </span>
        </div>

        {/* Dietary Tag Pill Strip */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          {item.dietary.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-black/65 backdrop-blur-md text-white/95 text-[10px] font-medium px-2 py-0.5 rounded-md shadow-sm transition-opacity duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-semibold text-lg text-[#171717] group-hover:text-[#B99A75] transition-colors duration-300 line-clamp-1">
              <Link to={`/menu/${item.id}`} className="focus:outline-none after:absolute after:inset-0">
                {item.name}
              </Link>
            </h3>
            <span className="font-heading font-semibold text-base text-[#171717] shrink-0">
              {formatNGN(item.price)}
            </span>
          </div>

          <p className="text-xs text-[#B99A75] font-medium tracking-wide">
            {item.tagline}
          </p>

          <p className="text-secondary text-xs sm:text-sm line-clamp-2 leading-relaxed pt-1">
            {item.description}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between relative z-10">
          <div className="text-[11px] text-secondary/80 truncate max-w-[65%]">
            <span className="font-medium text-main/80">Key:</span> {item.ingredients.slice(0, 2).join(', ')}...
          </div>
          <span className="text-xs font-semibold text-[#171717] group-hover:text-[#B99A75] flex items-center gap-1 transition-colors duration-300">
            <span>Explore Dish</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
