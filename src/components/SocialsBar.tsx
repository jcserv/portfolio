import { File, Github, Linkedin } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { IconButton } from "./Link";

type Social = {
  label: string;
  icon: JSX.Element;
  url: string;
};

const socials: Social[] = [
  {
    label: "Github",
    icon: (
      <Github className="w-6 h-6 hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]" />
    ),
    url: "https://github.com/jcserv",
  },
  {
    label: "LinkedIn",
    icon: (
      <Linkedin className="w-6 h-6 hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]" />
    ),
    url: "https://linkedin.com/in/jarrod-servilla",
  },
  {
    label: "Resume",
    icon: (
      <File className="w-6 h-6 hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]" />
    ),
    url: "/resume.pdf",
  },
];

export const SocialsBar: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-row items-center space-x-4">
        {socials.map((social) => (
          <IconButton
            key={social.label}
            href={social.url}
            tooltip={social.label}
          >
            {social.icon}
          </IconButton>
        ))}
      </div>
    </TooltipProvider>
  );
};
