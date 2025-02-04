import posthog, { Properties } from "posthog-js";

const POSTHOG_TOKEN = import.meta.env.VITE_POSTHOG_TOKEN;
const POSTHOG_API_HOST =
  import.meta.env.VITE_POSTHOG_API_HOST || "https://us.i.posthog.com";

if (!POSTHOG_TOKEN) {
  console.error("POSTHOG_TOKEN is not set");
} else {
  posthog.init(POSTHOG_TOKEN, {
    api_host: POSTHOG_API_HOST,
    person_profiles: "identified_only",
  });
}

export const analyticsEvents = {
  CLICK_BUTTON: "click_button",
  CLICK_IMAGE: "click_image",
  CLICK_LINK: "click_link",
  HOVER: "hover",
  SCROLL_NEXT: "scroll_next",
  SEARCH: "search",
} as const;

export const captureEvent = (event: string, properties: Properties) => {
  posthog.capture(event, properties);
};
