import React from "react";
import Fuse, { FuseResult, FuseResultMatch } from "fuse.js";
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
import { experienceToContent } from "@/types/experience";
import { projectsToContent } from "@/types/project";
import experience from "@/assets/experience.json";
import projects from "@/assets/projects.json";


type SectionCommand = {
  label: string;
  content: string[];
  value: string;
  icon: JSX.Element;
  shortcut: string;
};

const sections: SectionCommand[] = [
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
    content: experienceToContent(experience),
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

  // TODO: Include other search items like Github, LinkedIn, etc.
  // TODO: Include experience and project content in search that links to the respective sections with ?activeTab=<x>
  const [searchResults, setSearchResults] = React.useState<
    FuseResult<SectionCommand>[]
  >([]);

  const fuse = new Fuse(sections, {
    includeScore: true,
    includeMatches: true,
    ignoreFieldNorm: true,
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
    const results = fuse.search(query);
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

type SectionProps = SectionCommand & {
  matches?: readonly FuseResultMatch[] | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Section: React.FC<SectionProps> = ({
  label,
  value,
  icon,
  shortcut,
  matches,
  setOpen,
}: SectionProps) => (
  <CommandItem
    value={value}
    onSelect={() => {
      scrollToSection(value);
      setTimeout(() => setOpen(false), 450);
    }}
  >
    {icon}
    <div className="flex flex-col">
      <span>{label}</span>
      {(matches ?? []).length > 0 && (
        <span className="flex items-center gap-2 text-sm text-muted-foreground truncate">
          Includes:
          {matches?.slice(0, 1).map((match, idx) => {
            const getNWords = (str: string, n: number, fromEnd = false) => {
              if (!str) return "";
              const words = str.trim().split(/\s+/);
              const selectedWords = fromEnd
                ? words.slice(Math.max(words.length - n, 0))
                : words.slice(0, n);
              return selectedWords.join(" ");
            };

            // The best match will be the one with the greatest difference
            const bestMatch = match.indices.reduce((acc, curr) => {
              const matchLength = curr[1] - curr[0];
              return matchLength > acc[1] - acc[0] ? curr : acc;
            });

            const beforeMatch = match.value?.slice(0, bestMatch[0]) || "";
            const highlightedMatch =
              match.value?.slice(bestMatch[0], bestMatch[1] + 1) || "";
            const afterMatch = match.value?.slice(bestMatch[1] + 1) || "";

            // Get 3 words before and after
            const truncatedBefore = getNWords(beforeMatch, 3, true);
            const truncatedAfter = getNWords(afterMatch, 3);

            return (
              <span key={idx} className="flex items-center gap-1 truncate">
                {truncatedBefore && (
                  <span>
                    {beforeMatch.length > truncatedBefore.length ? "..." : ""}
                    {truncatedBefore}
                  </span>
                )}
                <span className="bg-yellow-200 text-black px-1 rounded">
                  {highlightedMatch}
                </span>
                {truncatedAfter && (
                  <span>
                    {truncatedAfter}
                    {afterMatch.length > truncatedAfter.length ? "..." : ""}
                  </span>
                )}
              </span>
            );
          })}
        </span>
      )}
    </div>
    <CommandShortcut>{shortcut}</CommandShortcut>
  </CommandItem>
);
