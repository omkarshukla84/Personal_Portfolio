"use client";

import React, { useState } from "react";
import { Coffee, Code, Zap, Rocket, Bug } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const vibes = [
  {
    icon: Code,
    text: "Coding",
    bg: "bg-blue-500",
    lightBg: "bg-blue-50",
    color: "text-blue-600",
    msg: "In the zone"
  },
  {
    icon: Coffee,
    text: "Caffeinating",
    bg: "bg-amber-700",
    lightBg: "bg-amber-50",
    color: "text-amber-800",
    msg: "Fueling up"
  },
  {
    icon: Bug,
    text: "Debugging",
    bg: "bg-red-500",
    lightBg: "bg-red-50",
    color: "text-red-600",
    msg: "Squashing bugs"
  },
  {
    icon: Rocket,
    text: "Shipping",
    bg: "bg-green-500",
    lightBg: "bg-green-50",
    color: "text-green-600",
    msg: "Pushing code"
  },
   {
    icon: Zap,
    text: "Focus",
    bg: "bg-yellow-400",
    lightBg: "bg-yellow-50", 
    color: "text-yellow-600",
    msg: "Deep work"
  },
];

export function VibeCard() {
  const [index, setIndex] = useState(0);

  const handleNextVibe = () => {
    setIndex((prev) => (prev + 1) % vibes.length);
  };

  const currentVibe = vibes[index];
  const Icon = currentVibe.icon;

  return (
    <div 
      onClick={handleNextVibe}
      className={`${currentVibe.lightBg} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group relative overflow-hidden h-[180px] select-none`}
    >
      <AnimatePresence mode="wait">
        <motion.div 
            key={currentVibe.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`w-16 h-16 ${currentVibe.bg} border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
        >
            <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </AnimatePresence>
      
      <div className="z-10 relative mt-4">
        <div className="flex items-center gap-2">
            <h3 className="font-bold text-xl text-black">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentVibe.text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {currentVibe.text}
                    </motion.span>
                </AnimatePresence>
            </h3>
        </div>
        <p className={`text-sm font-bold font-sans ${currentVibe.color}`}>
             {currentVibe.msg}
        </p>
      </div>
      
      <div className="absolute top-4 right-4 text-xs font-bold border border-black px-2 py-1 bg-white rotate-3 group-hover:rotate-0 transition-transform">
        CLICK ME
      </div>
    </div>
  );
}
