import React from "react";
import Fuse, { FuseResult } from "fuse.js";
import {  Briefcase, CloudCog, DoorOpen, User, Wand } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn, scrollToSection } from "@/lib/utils";
import { projectsToContent } from "@/types/project";
import experience from "@/assets/experience.json";
import projects from "@/assets/projects.json";
import { SearchItem } from "@/types/searchItem";
import { Section } from "./SearchResult";
import { useActiveExp } from "@/context/ActiveExpProvider";

const sections: SearchItem[] = [
  {
    label: "Landing",
    content: [],
    value: "landing",
    icon: <DoorOpen className="mr-2 h-4 w-4" />,
    shortcut: "F1",
  },
  {
    label: "About Me",
    content: [
      "I studied computer science at the University of Toronto",
      "working at dbt Labs as a Software Engineer, working on dbt Explorer.",
      "I've worked at SailPoint, Citigroup, and Citylitics.",
      "Certifications: AWS Certified Developer, DataDog Fundamentals, PagerDuty Incident Responder, dbt Fundamentals"
    ],
    value: "about",
    icon: <User className="mr-2 h-4 w-4" />,
    shortcut: "F2",
  },
  {
    label: "Experience",
    content: [], // experienceToContent(experience),
    value: "experience",
    icon: <Briefcase className="mr-2 h-4 w-4" />,
    shortcut: "F3",
  },
  {
    label: "Projects",
    content: projectsToContent(projects.slice(0, 4)),
    value: "projects",
    icon: <Wand className="mr-2 h-4 w-4" />,
    shortcut: "F4",
  },
];

// TODO: Add ability to ask natural language questions
export const CommandBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const { setActiveExp } = useActiveExp();

  // TODO: Include other search items like Github, LinkedIn, etc.
  // TODO: Include experience and project content in search that links to the respective sections with ?activeTab=<x>
  const [searchResults, setSearchResults] = React.useState<
    FuseResult<SearchItem>[]
  >([]);

  const experiences: SearchItem[] = experience.map((exp, index) => {
    return {
      label: "Experience",
      content: [exp.workplace, ...exp.description],
      value: `experience-${index}`,
      icon: <CloudCog className="mr-2 h-4 w-4" />,
      customOnSelect: () => {
        scrollToSection("experience");
        setActiveExp(`${index}`)
      },
    };
  });

  const fuse = new Fuse(sections.concat(experiences), {
    includeScore: true,
    includeMatches: true,
    ignoreFieldNorm: true,
    shouldSort: true,
    minMatchCharLength: 3,
    keys: ["label", "content"],
  });

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }

      sections.forEach((section) => {
        if (e.key === section.shortcut) {
          e.preventDefault();
          scrollToSection(section.value);
          setOpen(false);
        }
      });
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const results = fuse.search(query).filter((result) => result.score! < 0.6);
    setSearchResults(results);
  }, [query]);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-10 justify-start rounded-[0.5rem] bg-muted/50 text-base font-normal text-muted-foreground shadow-none sm:pr-40 md:w-64 lg:w-80 xl:w-96"
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
        <CommandInput
          placeholder="Type a command or search..."
          value={query}
          onValueChange={(val) => setQuery(val)}
        />
        <CommandList inputMode="search">
          {query.length > 0 && (
            <CommandGroup heading="Search results">
              {searchResults.map((result) => (
                <Section
                  key={result.item.value}
                  {...result.item}
                  matches={result.matches}
                  setOpen={setOpen}
                />
              ))}
              <CommandSeparator />
            </CommandGroup>
          )}
          {query.length === 0 && (
            <CommandGroup heading="Sections">
              {sections.map((section) => (
                <Section key={section.value} {...section} setOpen={setOpen} />
              ))}
            </CommandGroup>
          )}
          {searchResults.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

