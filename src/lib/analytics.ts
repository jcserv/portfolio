import posthog, { Properties } from 'posthog-js'

const POSTHOG_TOKEN = import.meta.env.VITE_POSTHOG_TOKEN;

if (!POSTHOG_TOKEN) {
    console.error('POSTHOG_TOKEN is not set')
} else {
    posthog.init(POSTHOG_TOKEN,
        {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
        }
    )
}

export const analyticsEvents = {
    CLICK_BUTTON: 'click_button',
    CLICK_IMAGE: 'click_image',
    CLICK_LINK: 'click_link',
    HOVER: 'hover',
    SCROLL_NEXT: 'scroll_next',
    SEARCH: 'search',
} as const;

export const captureEvent = (event: string, properties: Properties) => {
    posthog.capture(event, properties)
}

