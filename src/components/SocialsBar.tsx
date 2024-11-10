import { TooltipProvider } from "@/components/ui/tooltip";
import { IconButton } from "@/components/Link";
import { getSocials } from "@/assets/socials";
import { analyticsEvents, captureEvent } from "@/lib/analytics";

export const SocialsBar: React.FC = () => {
  const socials = getSocials(
    "w-6 h-6 hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]"
  );
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
