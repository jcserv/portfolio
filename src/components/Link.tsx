import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { captureEvent, analyticsEvents } from "@/lib/analytics";

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
      className
    )}
    rel="noreferrer"
    onClick={() => captureEvent(analyticsEvents.CLICK_LINK, {
      origin: "about", // TODO: hard coded
      target: href,
    })}
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
    onClick={() => captureEvent(analyticsEvents.CLICK_LINK, {
      origin: "experience", // TODO: hard coded
      target: href,
    })}
  >
    {children}
  </a>
);

/** Must be used within a TooltipProvider */
export const IconButton = ({
  href,
  children,
  tooltip,
  onClick,
}: LinkProps & { onClick: () => void }) => (
  <Tooltip>
    <TooltipTrigger
      onClick={() => {
        onClick();
        window.open(href, "_blank");
      }}
    >
      {children}
    </TooltipTrigger>
    <TooltipContent>{tooltip}</TooltipContent>
  </Tooltip>
);
