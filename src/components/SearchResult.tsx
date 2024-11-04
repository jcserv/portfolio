import React from "react";
import { FuseResultMatch } from "fuse.js";
import { CommandItem, CommandShortcut } from "@/components/ui/command";
import { scrollToSection } from "@/lib/utils";
import { SearchItem } from "@/types/searchItem";

type SectionProps = SearchItem & {
  matches?: readonly FuseResultMatch[] | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Section: React.FC<SectionProps> = ({
  label,
  value,
  icon,
  shortcut,
  matches,
  setOpen,
  customOnSelect,
}: SectionProps) => (
  <CommandItem
    value={value}
    onSelect={() => {
      if (customOnSelect) {
        customOnSelect();
        setTimeout(() => setOpen(false), 450);
        return;
      }

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
    {shortcut && <CommandShortcut>{shortcut}</CommandShortcut>}
  </CommandItem>
);
