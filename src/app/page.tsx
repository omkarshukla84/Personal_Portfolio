import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { SocialDock } from "@/components/social-dock";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf6e3] overflow-x-hidden relative selection:bg-red-500 selection:text-white">
      {/* Global Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "fixed inset-x-0 inset-y-0 h-full w-full skew-y-6 opacity-60 text-yellow-600 pointer-events-none z-0",
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />

        <Contact />
        
        {/* Footer */}
        <footer className="py-8 bg-[#cda434] border-t-4 border-black text-center text-sm font-bold flex flex-col items-center gap-6">
          <SocialDock />
          <div>
            <p>© 2025 Omkar Shukla. All rights reserved.</p>
            <p className="text-xs mt-2 opacity-70 font-sans">Powering up with Next.js & Tailwind</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
