'use client'

import { useEffect, useState } from 'react'
import NewsletterSignup from '@/app/components/NewsletterSignup'

interface Image {
  id: string
  src: string
  alt: string
}

export default function PortfolioGrid({ images }: { images: Image[] }) {
  const [subscribed, setSubscribed] = useState(true) // default true to avoid flash
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('newsletter-subscribed')
    setSubscribed(stored === 'true')
    setReady(true)
  }, [])

  function handleSuccess() {
    localStorage.setItem('newsletter-subscribed', 'true')
    setSubscribed(true)
  }

  return (
    <section className="portfolio-nude-section">
      <div className="portfolio-nude-header">
        <p className="portfolio-nude-title">Fine Art Nude</p>
      </div>
      <div style={{ position: 'relative' }}>
        <div className={`portfolio-nude-grid${ready && !subscribed ? ' blurred' : ''}`}>
          {images.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img
                src={item.src}
                alt={subscribed ? item.alt : ''}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {ready && !subscribed && (
          <div className="portfolio-nude-reveal" role="region" aria-label="Newsletter required">
            <NewsletterSignup
              heading="Fine Art Nude"
              subheading="Subscribe to unlock this section. It's free — no spam, ever."
              onSuccess={handleSuccess}
            />
          </div>
        )}
      </div>
    </section>
  )
}
