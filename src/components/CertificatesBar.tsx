import { FaAws } from "react-icons/fa";
import { SiPagerduty, SiDatadog, SiDbt } from "react-icons/si";

import { TooltipProvider } from "@/components/ui/tooltip";
import { IconButton } from "@/components/Link";
import { analyticsEvents, captureEvent } from "@/lib/analytics";

export const CertificatesBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      {/* I would use a map function here normally, but I had some troubles with Tailwind custom colours */}
      <TooltipProvider>
        <IconButton
          href="https://www.credly.com/badges/517ae2cf-990f-4e3f-acf7-c7dc692c67a0/public_url"
          tooltip="AWS Certified Developer (DVA-C01)"
          onClick={() =>
            captureEvent(analyticsEvents.CLICK_BUTTON, {
              type: "cert",
              target:
                "https://www.credly.com/badges/517ae2cf-990f-4e3f-acf7-c7dc692c67a0/public_url",
            })
          }
        >
          <FaAws
            aria-label="AWS Certified Developer (DVA-C01) certificate"
            className="w-6 h-6 hover:text-[#ff9900]"
          />
        </IconButton>
        <IconButton
          href="https://www.credly.com/badges/e6715f11-b3a5-4793-ad15-569250ac42f6/public_url"
          tooltip="Datadog Fundamentals"
          onClick={() =>
            captureEvent(analyticsEvents.CLICK_BUTTON, {
              type: "cert",
              target:
                "https://www.credly.com/badges/e6715f11-b3a5-4793-ad15-569250ac42f6/public_url",
            })
          }
        >
          <SiDatadog
            aria-label="Datadog Fundamentals certificate"
            className="w-6 h-6 hover:text-[#632ca6]"
          />
        </IconButton>
        <IconButton
          href="https://www.credly.com/badges/646b9426-2046-459d-a0cf-f2c3fd8c6fa1/public_url"
          tooltip="PagerDuty Incident Responder"
          onClick={() =>
            captureEvent(analyticsEvents.CLICK_BUTTON, {
              type: "cert",
              target:
                "https://www.credly.com/badges/646b9426-2046-459d-a0cf-f2c3fd8c6fa1/public_url",
            })
          }
        >
          <SiPagerduty
            aria-label="PagerDuty Incident Responder certificate"
            className="w-6 h-6 hover:text-[#048a24]"
          />
        </IconButton>
        <IconButton
          href="https://credentials.getdbt.com/0eda8bc8-abda-43ca-80ae-10ffb87fcfd2"
          tooltip="dbt Fundamentals"
          onClick={() =>
            captureEvent(analyticsEvents.CLICK_BUTTON, {
              type: "cert",
              target:
                "https://credentials.getdbt.com/0eda8bc8-abda-43ca-80ae-10ffb87fcfd2",
            })
          }
        >
          <SiDbt
            aria-label="dbt Fundamentals Certificate"
            className="w-6 h-6 hover:text-[#ff6849]"
          />
        </IconButton>
      </TooltipProvider>
    </div>
  );
};
