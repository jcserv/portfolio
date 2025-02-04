import { TooltipProvider } from "@/components/ui/tooltip";
import { IconButton } from "@/components/Link";
import { analyticsEvents, captureEvent } from "@/lib/analytics";

import { getSocials } from "@/assets/socials";

export const SocialsBar: React.FC = () => {
  const socials = getSocials("w-6 h-6 hover:text-main dark:hover:text-alt");
  return (
    <TooltipProvider>
      <div className="flex flex-row items-center space-x-4">
        {socials.map((social) => (
          <IconButton
            key={social.label}
            href={social.url}
            tooltip={social.label}
            onClick={() =>
              captureEvent(analyticsEvents.CLICK_BUTTON, {
                type: "social",
                target: social.url,
              })
            }
          >
            {social.icon}
          </IconButton>
        ))}
      </div>
    </TooltipProvider>
  );
};
