import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type ContinueIndicatorProps = {
  nextSection: string;
  className?: string;
};

export const ContinueIndicator: React.FC<ContinueIndicatorProps> = ({
  nextSection,
  className,
}: ContinueIndicatorProps) => (
  <div className={className}>
    <Button variant="ghost" onClick={() => scrollToSection(nextSection)}>
      <ChevronDown
        className="w-8 h-8 animate-bounce hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]"
        onClick={() => scrollToSection("about")}
      />
    </Button>
  </div>
);
