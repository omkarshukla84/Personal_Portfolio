"use client";

import React, { type ComponentProps } from "react";
import Image from "next/image";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// User provided logos (PNGs)
// Path: public/logos/
const HTMLIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/HTML5.png"
    alt="HTML5"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const CSSIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/CSS3.png"
    alt="CSS3"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const JavaScriptIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/JavaScript.png"
    alt="JavaScript"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const ReactIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/React.png"
    alt="React"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const NodeIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/Node.js.png"
    alt="Node.js"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const PythonIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/Python.png"
    alt="Python"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const TailwindIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/Tailwind CSS.png"
    alt="Tailwind CSS"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

const TypeScriptIcon = (props: Omit<ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/logos/TypeScript.png"
    alt="TypeScript"
    width={256}
    height={256}
    className="w-full h-full object-contain"
    {...props}
  />
);

// Fallback or SVG for Next.js (missing in user folder)
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={180}
    height={180}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_408_139"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
    </mask>
    <g mask="url(#mask0_408_139)">
      <circle
        cx={90}
        cy={90}
        r={87}
        fill="black"
        stroke="white"
        strokeWidth={6}
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_408_139)"
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill="url(#paint1_linear_408_139)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_139"
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_139"
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);


// Tech Stack Logos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const techLogos: any[] = [
  { name: "HTML", id: 1, img: HTMLIcon },
  { name: "CSS", id: 2, img: CSSIcon },
  { name: "JavaScript", id: 3, img: JavaScriptIcon },
  { name: "React", id: 4, img: ReactIcon },
  { name: "Next.js", id: 5, img: NextjsIcon },
  { name: "Tailwind", id: 6, img: TailwindIcon },
  { name: "TypeScript", id: 7, img: TypeScriptIcon },
  { name: "Node.js", id: 8, img: NodeIcon },
  { name: "Python", id: 9, img: PythonIcon },
];

export function TechCarousel() {
  return (
    <div className="w-full max-w-xl pt-8">
       <LogoCarousel columnCount={4} logos={techLogos} />
    </div>
  );
}
