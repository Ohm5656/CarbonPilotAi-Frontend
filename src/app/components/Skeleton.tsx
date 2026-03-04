import { motion } from 'motion/react';

interface SkeletonProps {
  className?: string;
  variant?: 'card' | 'chart' | 'text' | 'circle';
}

export default function Skeleton({ className = '', variant = 'card' }: SkeletonProps) {
  const baseClasses = "bg-[#121821] animate-pulse";
  
  const variantClasses = {
    card: 'rounded-xl h-32',
    chart: 'rounded-xl h-64',
    text: 'rounded h-4',
    circle: 'rounded-full w-12 h-12'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {/* Shimmer effect */}
      <motion.div
        animate={{ x: [-200, 500] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#00C6FF]/10 to-transparent"
      />
    </motion.div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 space-y-3">
          <Skeleton variant="text" className="w-24" />
          <Skeleton variant="text" className="w-32 h-8" />
        </div>
        <Skeleton variant="circle" />
      </div>
      <Skeleton variant="text" className="w-40" />
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6">
      <Skeleton variant="text" className="w-48 mb-6" />
      <Skeleton variant="chart" />
    </div>
  );
}
