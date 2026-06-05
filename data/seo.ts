/**
 * SEO Configuration — single source of truth
 *
 * Edit this file to update page titles, descriptions, Open Graph images,
 * image alt text, and other metadata across the whole site.
 *
 * After editing, rebuild/redeploy for changes to take effect.
 */

// ─── Site-wide defaults ──────────────────────────────────────────────────────

export const siteName = 'Banafrit'
export const siteUrl = 'https://banafrit.com'

/** Shown in browser tab and as OG title when no page-level override is set */
export const defaultTitle = 'Banafrit — Fine Art Photography'

/** Appended to every page title: "Portfolio — Banafrit" */
export const titleTemplate = '%s — Banafrit'

/** Default meta description — used on the home page and as fallback */
export const defaultDescription =
  'Banafrit is a fine art nude and boudoir photography project — intimate portraiture and figure study. Limited edition prints on Hahnemühle paper, available to order.'

/** Default OG image (1200×630). Place the file at /public/images/og-image.jpg */
export const defaultOgImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Banafrit fine art photography',
}

// ─── Hero image ───────────────────────────────────────────────────────────────

export const hero = {
  /** Path to the hero image (relative to /public) */
  src: '/images/portfolio/nude/IMG_7055-preview.jpg',
  /** Alt text for the hero image — be descriptive for SEO */
  alt: 'Fine art figure study — natural light portrait',
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
//
// title    — shown in the browser tab (the template adds "— Banafrit" automatically)
// description — shown in Google search results (aim for 150–160 characters)
// ogImage  — optional page-specific social preview image; falls back to defaultOgImage
//

export const pages = {
  home: {
    title: defaultTitle,
    description: defaultDescription,
    ogImage: defaultOgImage,
  },

  portfolio: {
    title: 'Portfolio',
    description:
      'Fine art nude and boudoir photography by Banafrit — intimate portraiture and figure studies shot in natural light. Limited edition prints available.',
    ogImage: defaultOgImage,
  },

  about: {
    title: 'About',
    description:
      'Banafrit is a fine art nude photography project — portraiture, boudoir, and figure study centered on authenticity. Fine art prints on Hahnemühle Bamboo Gloss Baryta paper.',
    ogImage: defaultOgImage,
  },

  contact: {
    title: 'Contact',
    description:
      'Contact Banafrit — model inquiries, fine art print orders, licensing, and collaboration requests.',
    ogImage: defaultOgImage,
  },

  privacy: {
    title: 'Privacy Policy',
    description: 'Privacy policy for Banafrit Photography.',
    ogImage: defaultOgImage,
  },
} satisfies Record<string, PageSeo>

// ─── Types ────────────────────────────────────────────────────────────────────

export interface OgImage {
  url: string
  width: number
  height: number
  alt: string
}

export interface PageSeo {
  title: string
  description: string
  ogImage?: OgImage
}
