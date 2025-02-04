import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { analyticsEvents, captureEvent } from "@/lib/analytics";
import { scrollToSection } from "@/lib/utils";

type ContinueIndicatorProps = {
  currSection: string;
  nextSection: string;
  className?: string;
};

export const ContinueIndicator: React.FC<ContinueIndicatorProps> = ({
  currSection,
  nextSection,
  className,
}: ContinueIndicatorProps) => (
  <div className={className}>
    <Button
      variant="ghost"
      onClick={() => {
        captureEvent(analyticsEvents.SCROLL_NEXT, {
          origin: currSection,
          target: nextSection,
        });
        scrollToSection(nextSection);
      }}
    >
      <ChevronDown
        aria-label="Continue to next section"
        className="w-8 h-8 animate-bounce hover:text-main dark:hover:text-alt"
        onClick={() => scrollToSection("about")}
      />
    </Button>
  </div>
);
