import { notFound } from 'next/navigation'

// No published shoots yet — all slugs return 404.
// When you're ready to add a shoot:
//   1. Add its data to a shoots data file (e.g. data/shoots.ts)
//   2. Add the slug to generateStaticParams below
//   3. Replace the notFound() call with real page rendering

export function generateStaticParams() {
  // Return an empty array until real shoots are added.
  return []
}

// With an empty generateStaticParams and dynamicParams = false,
// any /shoots/[slug] URL returns a proper 404 instead of rendering
// placeholder content that Google would treat as thin/duplicate pages.
export const dynamicParams = false

export default function ShootPage() {
  notFound()
}
