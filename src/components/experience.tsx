
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    company: "Newton School of Technology",
    role: "Student (AI Major)",
    date: "2024 - Present",
    description: "Deepening CS fundamentals.",
  },
  {
    company: "Unipe",
    role: "SDE 1 (Founding Team)",
    date: "Aug 2022 - Mar 2024",
    description: "Scaled React Native app from 0 to 1.",
  },
  {
    company: "Binaryveda Solutions",
    role: "Mobile Engineer Intern",
    date: "May 2022 - Aug 2022",
    description: "Built Fintech UI for Kotak Bank.",
  },
  {
    company: "Fart Magazine",
    role: "Mobile App Intern",
    date: "Dec 2021 - Feb 2022",
    description: "Full Stack Development.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 container mx-auto px-4">
      <h2 className="text-4xl font-black uppercase mb-12 text-black">
        XP Points (Experience)
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
          >
            {/* Date Badge */}
            <div className="bg-black text-white px-4 py-2 font-bold text-sm md:w-48 text-center shrink-0 border-2 border-black">
              {exp.date}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left w-full">
              <h3 className="font-black text-xl text-black">{exp.company}</h3>
              <p className="text-sm font-bold text-gray-700 font-sans">{exp.role}</p>
            </div>

            {/* Description (Hidden on mobile maybe? screenshot shows it) */}
            <div className="hidden md:block text-right text-gray-500 font-sans text-sm w-48">
                {exp.description}
            </div>

            {/* Icon */}
            <div className="bg-yellow-400 border-2 border-black p-2 hover:bg-yellow-500 cursor-pointer transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <ChevronDown className="w-6 h-6 text-black" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
