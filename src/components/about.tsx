import { MapPin, Briefcase, Youtube, Trophy, Linkedin, Mail, Github, FileText, Download, Code } from "lucide-react";
import Link from "next/link";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { VibeCard } from "@/components/vibe-card";

export function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Location Card */}
        <div className="bg-sky-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <div className="bg-white w-12 h-12 border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <MapPin className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="font-bold text-xl mt-4 text-black">Based in India</h3>
            <p className="text-sm text-black font-sans">Open to remote work worldwide.</p>
          </div>
        </div>

        {/* Tech Stack Card (Wide) */}
        <div className="md:col-span-2 bg-green-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <div className="bg-white w-12 h-12 border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Briefcase className="w-6 h-6 text-green-600" />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-xl mb-3 text-black">Tech Arsenal</h3>
            <InfiniteMarquee speed="slow">
              {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Python", "Git", "Vercel", "Firebase", "React Native", "Figma", "MongoDB", "HTML", "CSS", "JavaScript"].map((tech) => (
                <span key={tech} className="bg-white border-2 border-black px-2 py-1 text-xs font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                  {tech}
                </span>
              ))}
            </InfiniteMarquee>
          </div>
        </div>

        {/* Interactive Vibe Card */}
        <VibeCard />

        {/* Achievement Card (Wide) */}
        <div className="md:col-span-2 bg-yellow-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
           <div className="bg-yellow-400 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 max-w-md mx-auto transform -rotate-1">
             <Trophy className="w-12 h-12 text-black drop-shadow-sm" />
             <div>
               <div className="bg-white px-2 py-1 text-xs font-bold border border-black inline-block mb-1 text-black">1ST PLACE</div>
               <h3 className="font-black text-xl text-black drop-shadow-sm uppercase">Smart India Hackathon</h3>
             </div>
           </div>
           <div className="mt-6">
             <h3 className="font-bold text-xl text-black">SIH Winner</h3>
             <p className="text-sm text-black font-sans">National Hackathon Champion 2024</p>
           </div>
        </div>

        {/* Socials Grid */}
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
           <h3 className="font-bold text-xl mb-4 text-black">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="https://github.com/omkarshukla84" target="_blank" className="bg-gray-100 border-2 border-black p-3 flex justify-center hover:bg-gray-200 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/om-kar-shukla-495b98321/" target="_blank" className="bg-blue-100 border-2 border-black p-3 flex justify-center hover:bg-blue-200 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-700" />
              </Link>
              <Link href="https://leetcode.com/u/omkarshukla84/" target="_blank" className="bg-orange-100 border-2 border-black p-3 flex justify-center hover:bg-orange-200 transition-colors">
                <Code className="w-6 h-6 text-orange-600" />
              </Link>
               <Link href="mailto:shuklaomkar3010@gmail.com" className="bg-sky-100 border-2 border-black p-3 flex justify-center hover:bg-sky-200 transition-colors">
                <Mail className="w-6 h-6 text-sky-600" />
              </Link>
            </div>
        </div>
        
        {/* Resume Card */}
         <div className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#888] flex flex-col justify-center items-center text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#888] transition-all cursor-pointer group">
            <Download className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl">Get Resume</h3>
            <p className="text-xs text-gray-400 font-sans mt-1">PDF Download</p>
        </div>

      </div>
    </section>
  );
}
