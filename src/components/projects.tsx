"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Project Data
const sihProject = {
  title: "NextStop Bus Management",
  subtitle: "National Hackathon Champion 2024",
  description: (
    <ul className="list-disc list-inside space-y-1 text-lg">
        <li><strong>NextStop User Mobile App</strong>: Allows users to search for buses, track live location, live passenger count and book tickets.</li>
        <li><strong>NextStop Conductor/Driver App</strong>: Tracks live location of the bus, allows the conductor to verify the tickets and track revenue.</li>
        <li><strong>Admin Portal</strong>: Allows the government to visualise all the data, customise routes, upload bulk data, track live buses etc. in a single dashboard.</li>
    </ul>
  ),
  tags: ["Next.js", "React Native", "Node.js", "MongoDB", "Socket.io"],
  links: {
    demo: "",
    repo: "https://github.com/orgs/Team-NextStop/repositories",
  },
  image: "/projects/nextstop/sih-victory-photo.jpg",
  year: "2025"
};

const otherProjects = [
  {
    title: "AnonChat",
    description: "A privacy-first, real-time, 1-to-1 anonymous chat platform with AI-backed human verification, safety controls, and a Redis-powered matchmaking queue. Features ephemeral chats with zero server-side history and Redis-backed horizontal scaling.",
    tags: ["Next.js", "Node.js", "Socket.io", "Redis", "Python"],
    links: {
      demo: "https://klymo-client-cnxt.vercel.app/",
      repo: "https://github.com/omkarshukla84/anonchat",
    },
    images: ["/projects/anonchat/preview.png"],
    year: "2025"
  },
  {
    title: "Stackly",
    description: "A decision-driven team workspace that forces discussions to end with clear, documented decisions. Features a decision-first workflow where tasks only exist as outcomes of decisions, preserving context and preventing repeated debates.",
    tags: ["Next.js", "React", "Tailwind CSS", "Local Storage"],
    links: {
      demo: "",
      repo: "https://github.com/omkarshukla84/STACKLY",
    },
    images: ["/projects/stackly_preview.png"],
    year: "2025"
  },
  {
    title: "SigmaLink",
    description: "Your link-in-bio, now with a brain. Join 3M+ creators and brands using Sigma.Link. Add your links, share posts, send emails, and let AI greet and guide your visitors.",
    tags: ["React.js", "Vite", "Framer Motion", "Node.js", "Express.js", "MongoDB", "JWT"],
    links: {
      demo: "https://sigma-link.vercel.app/",
      repo: "https://github.com/omkarshukla84/sigmalink",
    },
    images: ["/projects/sigmalink/preview.png"],
    year: "2025"
  },
];

const Slideshow = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  return (
    <div 
      className="aspect-video bg-gray-200 relative group overflow-hidden border-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.length > 0 ? (
         <Image 
            src={images[currentIndex]} 
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            className="object-contain transition-transform duration-500 hover:scale-105"
         />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-yellow-400 p-4 border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             <span className="text-xl font-bold">{title}</span>
        </div>
      )}
    </div>
  );
};

export function Projects() {
  return (
    <>
      {/* SIH Victory Section - Purple Background */}
      <section id="sih-victory" className="py-20 bg-purple-50 border-t-4 border-black relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 font-black text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 mb-6">
              <Trophy className="w-6 h-6" />
              SIH VICTORY
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-4">
              {sihProject.title}
            </h2>
            <p className="text-2xl font-bold font-mono bg-black text-white px-4 py-1">
              {sihProject.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* SIH Image/Badge - Highlighted */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-video relative bg-[#FFFBEB] border-2 border-black flex items-center justify-center overflow-hidden">
                  <Image
                    src={sihProject.image}
                    alt="SIH Winner Badge"
                    fill
                    className="object-cover p-0"
                  />
                </div>
              </div>
            </div>

            {/* SIH Specs */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-b-4 border-black pb-4 mb-4">
                  <h3 className="text-2xl font-black uppercase">Project Specifications</h3>
                </div>
                <div className="text-black font-medium">
                  {sihProject.description}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {sihProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black text-white font-bold text-sm uppercase border-2 border-transparent">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="gap-2 bg-black hover:bg-gray-800 text-white border-2 border-transparent text-lg h-14 px-8 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)]">
                  <Link href={sihProject.links.repo} target="_blank">
                    <Github className="w-5 h-5" /> View Source Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects Header - Blue Background (Original) */}
      <section id="projects" className="py-20 bg-sky-100 border-t-4 border-black relative">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="inline-block bg-black text-white px-4 py-2 font-bold transform -rotate-2 mb-4">
              MY WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
              Selected Projects
            </h2>
          </div>

          {/* Other Projects List */}
          <div className="space-y-20">
            {otherProjects.map((project, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Browser Window Style Image Container */}
                <div className="w-full lg:w-1/2 bg-white border-4 border-black rounded-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                  <div className="border-b-4 border-black bg-gray-100 p-2 flex gap-2 items-center">
                    <div className="w-4 h-4 border-2 border-black rounded-full bg-white"></div>
                    <div className="w-4 h-4 border-2 border-black rounded-full bg-white"></div>
                    <div className="flex-1 bg-white border-2 border-black h-6 mx-2"></div>
                  </div>

                  <Slideshow images={project.images} title={project.title} />

                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold border-2 border-black px-2 py-1 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                      {project.year}
                    </span>
                    <h3 className="text-3xl font-black uppercase text-black">{project.title}</h3>
                  </div>

                  <div className="text-lg text-black leading-relaxed font-sans border-l-4 border-blue-400 pl-4">
                    {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 border-2 border-black font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button asChild variant="outline" className="gap-2 bg-white cursor-pointer">
                      <Link href={project.links.repo} target="_blank">
                        <Github className="w-4 h-4" /> Code
                      </Link>
                    </Button>

                    {project.links.demo && (
                      <Button asChild variant="default" className="gap-2 bg-blue-500 hover:bg-blue-600 border-black text-white cursor-pointer">
                        <Link href={project.links.demo} target="_blank">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
