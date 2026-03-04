import { motion } from 'motion/react';
import { Loader2, Sparkles } from 'lucide-react';

interface PageLoaderProps {
  message?: string;
}

export default function PageLoader({ message = 'Loading your dashboard...' }: PageLoaderProps) {
  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121821_1px,transparent_1px),linear-gradient(to_bottom,#121821_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Logo/Icon */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-20 h-20 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00C6FF]/50"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">CarbonPilot AI</h3>
          <p className="text-gray-400 text-sm">{message}</p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] rounded-full"
        />

        {/* Pulse effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/20 to-[#00FFB2]/20 rounded-full blur-3xl"
        />
      </motion.div>
    </div>
  );
}