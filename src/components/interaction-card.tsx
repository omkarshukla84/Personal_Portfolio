"use client";

import React, { useState } from "react";
import { Hand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractionCard() {
  const [count, setCount] = useState(0);
  const [showParticle, setShowParticle] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setShowParticle(true);
    setTimeout(() => setShowParticle(false), 500);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-red-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group relative overflow-hidden select-none"
    >
      <div className="bg-red-500 w-full h-32 border-2 border-black flex items-center justify-center text-white font-black text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 relative">
        <AnimatePresence mode="wait">
            <motion.span
                key={count}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                {count > 0 ? count : "Hi!"}
            </motion.span>
        </AnimatePresence>
      </div>
      
      <div className="z-10 relative">
        <div className="flex items-center gap-2 mt-4">
            <Hand className="w-5 h-5 text-red-600 group-active:skew-x-12 transition-transform" />
            <h3 className="font-bold text-xl text-black">High Five!</h3>
        </div>
        <p className="text-sm text-black font-sans">Click to send vibes</p>
      </div>

      {/* Click Effect Particle */}
        {showParticle && (
            <motion.div
                initial={{ scale: 0, opacity: 1, x: "-50%", y: "-50%" }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 w-20 h-20 bg-red-200 rounded-full z-0 pointer-events-none"
                style={{ top: '40%' }}
            />
        )}
    </div>
  );
}
