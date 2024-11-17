import { analyticsEvents, captureEvent } from "@/lib/analytics";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const IS_AI_ENABLED = import.meta.env.VITE_AI_ENABLED == "true";

export const AskAIToggle = ({ className }: { className?: string }) => {
  if (!IS_AI_ENABLED) {
    return null;
  }
  return (
    <div className="flex items-center space-x-1.5">
      <Label htmlFor="ask-ai" className="text-xs whitespace-nowrap">
        Ask AI ✨
      </Label>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Switch
              id="ask-ai"
              disabled
              className={`scale-75 mt-1 ${className}`}
              aria-label="This feature is coming soon"
              aria-disabled="true"
              onMouseEnter={() =>
                captureEvent(analyticsEvents.HOVER, {
                  target: "ask-ai-toggle",
                })
              }
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">Coming soon!</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
