import React from "react";

import { Briefcase, DoorOpen, User, Wand } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn, scrollToSection } from "@/lib/utils";

type SectionCommands = {
  label: string;
  value: string;
  icon: JSX.Element;
  key: string;
};

const sections: SectionCommands[] = [
  {
    label: "Landing",
    value: "landing",
    icon: <DoorOpen className="mr-2 h-4 w-4" />,
    key: "F1",
  },
  {
    label: "About Me",
    value: "about",
    icon: <User className="mr-2 h-4 w-4" />,
    key: "F2",
  },
  {
    label: "Experience",
    value: "experience",
    icon: <Briefcase className="mr-2 h-4 w-4" />,
    key: "F3",
  },
  {
    label: "Projects",
    value: "projects",
    icon: <Wand className="mr-2 h-4 w-4" />,
    key: "F4",
  },
];

export const CommandBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }

      sections.forEach((section) => {
        if (e.key === section.key) {
          e.preventDefault();
          scrollToSection(section.value);
          setOpen(false);
        }
      });
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // TODO[jcserv]: It'd be neat to allow all content to be searchable, but not sure how that'd work with smooth scrolling.
  // Maybe store top-level document sections with their content, search on that, and then scroll to that section

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-10 justify-start rounded-[0.5rem] bg-muted/50 text-base font-normal text-muted-foreground shadow-none sm:pr-40 md:w-64 lg:w-80 xl:w-96",
        )}
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex">Search</span>
        <kbd className="pointer-events-none absolute right-[0.5rem] top-[0.5rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        dialogTitle="Search/Command Bar"
        contentDescribedBy="Search/Command Bar"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup heading="Sections">
            {sections.map((section) => (
              <CommandItem
                key={section.value}
                value={section.value}
                onSelect={() => {
                  scrollToSection(section.value);
                  setTimeout(() => setOpen(false), 450);
                }}
              >
                {section.icon}
                <span>{section.label}</span>
                <CommandShortcut>{section.key}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
