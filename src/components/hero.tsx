"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TechCarousel } from "@/components/tech-carousel";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div className="flex-1 space-y-8">
        <div className="inline-block bg-accent px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
          <span className="font-bold text-sm md:text-base">HEY THERE! IT&apos;S ME!</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-black">
          I&apos;M <span className="text-black">OMKAR</span>.
          <br />
          <span className="text-green-600">BUILDER</span> & <span className="text-blue-600">CREATOR</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-black max-w-lg leading-relaxed">
          Building new worlds with React, Next.js, and Modern Web Tech.
          Creating pixel-perfect experiences for the web.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="default" size="lg" className="text-lg">
            View Projects
          </Button>
          <Button variant="secondary" size="lg" className="text-lg">
            Contact Me
          </Button>
        </div>

        {/* Tech Stack Carousel */}
        <TechCarousel />
      </div>
      
      <div className="flex-1 relative flex justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Decorative background circle */}
          <div className="absolute inset-0 bg-sky-200 rounded-full border-4 border-black translate-x-4 translate-y-4"></div>
          
          {/* Animated Image Container */}
          {isMounted ? (
            <motion.div 
              className="absolute inset-0 bg-white rounded-full border-4 border-black overflow-hidden flex items-end justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
               <Image
                src="/me.png"
                alt="Omkar"
                width={400}
                height={400}
                className="object-cover object-center w-full h-full"
                priority
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-white rounded-full border-4 border-black overflow-hidden flex items-end justify-center">
               <Image
                src="/me.png"
                alt="Omkar"
                width={400}
                height={400}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          )}
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 border-2 border-black animate-bounce flex items-center justify-center font-bold text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            ?
          </div>
          <div className="absolute top-1/2 -left-8 w-16 h-8 bg-green-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>
      </div>
    </section>
  );
}
