import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  tooltip?: string;
};

export const Link = ({ href, children, className }: LinkProps) => (
  <a
    target="_blank"
    href={href}
    className={cn(
      "hover:text-[#1ca7d0] dark:hover:text-[#90cdf4] underline",
      className,
    )}
    rel="noreferrer"
  >
    {children}
  </a>
);

export const StyledLink = ({ href, children, className }: LinkProps) => (
  <a
    target="_blank"
    href={href}
    className={cn("text-[#1ca7d0] underline", className)}
    rel="noreferrer"
  >
    {children}
  </a>
);

/** Must be used within a TooltipProvider */
export const IconButton = ({ href, children, tooltip }: LinkProps) => (
  <Tooltip>
    <TooltipTrigger onClick={() => window.open(href, "_blank")}>
      {children}
    </TooltipTrigger>
    <TooltipContent>{tooltip}</TooltipContent>
  </Tooltip>
);
