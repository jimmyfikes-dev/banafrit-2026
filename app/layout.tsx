import type { Metadata } from 'next'
import AgeGateProvider from '@/app/components/AgeGateProvider'
import { defaultTitle, titleTemplate, defaultDescription, defaultOgImage, siteUrl, siteName } from '@/data/seo'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage.url],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AgeGateProvider>{children}</AgeGateProvider>
      </body>
    </html>
  )
}
