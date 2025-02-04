import React from "react";
import { FuseResultMatch } from "fuse.js";

import { CommandItem, CommandShortcut } from "@/components/ui/command";
import { scrollToSection } from "@/lib/utils";
import { SearchItem } from "@/types/searchItem";

type SectionProps = SearchItem & {
  matches?: readonly FuseResultMatch[] | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const Section: React.FC<SectionProps> = ({
  label,
  value,
  icon,
  shortcut,
  matches,
  setOpen,
  setQuery,
  customOnSelect,
}: SectionProps) => (
  <CommandItem
    value={value}
    onSelect={() => {
      if (customOnSelect) {
        customOnSelect();
        setTimeout(() => setOpen(false), 450);
        setTimeout(() => setQuery(""), 1000);
        return;
      }

      scrollToSection(value);
      setTimeout(() => setOpen(false), 450);
      setTimeout(() => setQuery(""), 1000);
    }}
    className="flex items-center gap-3"
  >
    <div className="flex-shrink-0 w-5 h-5">{icon}</div>
    <div className="flex flex-col min-w-0 flex-1">
      <span className="truncate">{label}</span>
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

            const bestMatch = match.indices.reduce((acc, curr) => {
              const matchLength = curr[1] - curr[0];
              return matchLength > acc[1] - acc[0] ? curr : acc;
            });

            const beforeMatch = match.value?.slice(0, bestMatch[0]) || "";
            const highlightedMatch =
              match.value?.slice(bestMatch[0], bestMatch[1] + 1) || "";
            const afterMatch = match.value?.slice(bestMatch[1] + 1) || "";

            const truncatedBefore = getNWords(beforeMatch, 2, true);
            const truncatedAfter = getNWords(afterMatch, 2);

            return (
              <span key={idx} className="flex items-center gap-1 min-w-0">
                {truncatedBefore && (
                  <span className="truncate">
                    {beforeMatch.length > truncatedBefore.length ? "..." : ""}
                    {truncatedBefore}
                  </span>
                )}
                <span className="bg-yellow-200 text-black px-1 rounded flex-shrink-0">
                  {highlightedMatch}
                </span>
                {truncatedAfter && (
                  <span className="truncate">
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
    {shortcut && (
      <CommandShortcut className="flex-shrink-0">{shortcut}</CommandShortcut>
    )}
  </CommandItem>
);
