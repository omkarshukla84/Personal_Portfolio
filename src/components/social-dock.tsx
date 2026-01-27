import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLeetcode,
  IconMail,
} from "@tabler/icons-react";

export function SocialDock() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full group-hover:text-white transition-colors" />
      ),
      href: "https://github.com/omkarshukla84", 
      className: "hover:bg-black group",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full group-hover:text-white transition-colors" />
      ),
      href: "https://www.linkedin.com/in/om-kar-shukla-495b98321/",
      className: "hover:bg-blue-600 group",
    },
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-800" />
      ),
      href: "https://leetcode.com/u/omkarshukla84/",
      className: "hover:bg-yellow-400", 
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full group-hover:text-white transition-colors" />
      ),
      href: "mailto:shuklaomkar3010@gmail.com",
      className: "hover:bg-red-600 group",
    },
  ];

  return (
    <div className="flex justify-center w-full pb-8">
       <div className="pointer-events-auto">
          <FloatingDock
            items={links}
          />
       </div>
    </div>
  );
}
