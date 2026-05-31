import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name — Fine Art Photography',
  description: 'Fine art photography. Quiet moments. Natural light.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
