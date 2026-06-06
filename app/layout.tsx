import type { Metadata } from 'next'
import Script from 'next/script'
import AgeGateProvider from '@/app/components/AgeGateProvider'
import { defaultTitle, titleTemplate, defaultDescription, defaultOgImage, siteUrl, siteName } from '@/data/seo'
import './globals.css'

const GA_ID = 'G-3T6FCH4PMJ'

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <AgeGateProvider>{children}</AgeGateProvider>
      </body>
    </html>
  )
}
