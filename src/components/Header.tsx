import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommandBar } from "@/components/CommandBar";
import { ModeToggle } from "@/components/mode-toggle";
import { analyticsEvents, captureEvent } from "@/lib/analytics";
import { scrollToSection } from "@/lib/utils";

type Link = {
  label: string;
};

const links: Link[] = [
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Projects",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="top-0 z-50 sticky flex justify-between items-center backdrop-blur w-full">
      <div className="flex-1 mt-2 ml-2">
        <img
          src="/logo.png"
          alt=""
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={() => {
            captureEvent(analyticsEvents.SCROLL_NEXT, {
              origin: "logo",
              target: "landing",
            });
            scrollToSection("landing");
          }}
        />
      </div>

      <div className="flex flex-1 justify-center mt-2">
        <CommandBar />
      </div>
      <div className="flex flex-1 justify-end mt-2 mr-2">
        {/* Links navigation shows up when viewport >= md */}
        <div className="flex flex-row items-center space-x-4 max-md:hidden mr-2">
          {links.map((btn) => (
            <ScrollLink
              key={btn.label}
              to={btn.label.toLowerCase()}
              spy
              smooth
              offset={-70}
              duration={500}
              className="hover:underline cursor-pointer"
              onClick={() =>
                captureEvent(analyticsEvents.SCROLL_NEXT, {
                  origin: "header",
                  target: btn.label.toLowerCase(),
                })
              }
            >
              {btn.label}
            </ScrollLink>
          ))}
          <ModeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-label="Open menu dropdown button"
            >
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {links.map((btn) => (
                <DropdownMenuItem
                  key={btn.label}
                  onSelect={() => scrollToSection(btn.label.toLowerCase())}
                >
                  {btn.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <ModeToggle />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
