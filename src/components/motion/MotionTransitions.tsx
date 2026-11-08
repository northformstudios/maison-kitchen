import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const luxuryEasing = [0.22, 1, 0.36, 1] as const;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  viewportOnce?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 22,
  direction = 'up',
  className = '',
  viewportOnce = true,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduce || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: yOffset };
      case 'down':
        return { x: 0, y: -yOffset };
      case 'left':
        return { x: yOffset, y: 0 };
      case 'right':
        return { x: -yOffset, y: 0 };
      default:
        return { x: 0, y: yOffset };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x: initialOffset.x, y: initialOffset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: '-40px' }}
      transition={{
        duration: shouldReduce ? 0.01 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: luxuryEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = '',
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduce ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : staggerDelay,
        delayChildren: shouldReduce ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export function StaggerItem({
  children,
  className = '',
  yOffset = 18,
}: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : yOffset,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0.01 : 0.55,
        ease: luxuryEasing,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduce ? 0 : -8 }}
      transition={{
        duration: shouldReduce ? 0.01 : 0.35,
        ease: luxuryEasing,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
