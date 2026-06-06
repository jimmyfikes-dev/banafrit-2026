/**
 * Thin wrapper around GA4's gtag so we get typed event names
 * and a single place to update if we ever swap analytics providers.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

// ── Named events ──────────────────────────────────────────────────────────────

export const track = {
  etsyClick: (location: 'nav' | 'footer' | 'shop') =>
    trackEvent('etsy_click', { location }),

  newsletterSignup: () =>
    trackEvent('newsletter_signup'),

  contactSubmit: () =>
    trackEvent('contact_form_submit'),
}
