import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'

// Replace these with real data per shoot
const SHOOT = {
  title: 'Shoot Title',
  date: 'Month Day, Year',
  location: 'Location',
  model: 'Model Name',
  statement: 'A short artist statement about this shoot. What was the mood, the light, the intention behind the work.',
  heroImage: '/images/portfolio/placeholder.jpg',
  heroAlt: 'Hero image alt text',
  images: [
    { src: '/images/portfolio/placeholder.jpg', alt: 'Image one' },
    { src: '/images/portfolio/placeholder.jpg', alt: 'Image two' },
    { src: '/images/portfolio/placeholder.jpg', alt: 'Image three' },
    { src: '/images/portfolio/placeholder.jpg', alt: 'Image four' },
    { src: '/images/portfolio/placeholder.jpg', alt: 'Image five' },
    { src: '/images/portfolio/placeholder.jpg', alt: 'Image six' },
  ],
}

export default function ShootPage() {
  return (
    <div className="site">
      <Nav />

      {/* Hero */}
      <div className="shoot-hero">
        <div className="shoot-hero-image">
          <Image
            src={SHOOT.heroImage}
            alt={SHOOT.heroAlt}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="shoot-hero-overlay" />
        </div>
        <div className="shoot-hero-content">
          <p className="hero-tag">{SHOOT.date} · {SHOOT.location}</p>
          <h1 className="hero-headline">{SHOOT.title}</h1>
          <p className="hero-sub">With {SHOOT.model}</p>
        </div>
      </div>

      {/* Statement */}
      <div className="shoot-statement">
        <p className="shoot-statement-text">{SHOOT.statement}</p>
      </div>

      {/* Image grid */}
      <div className="shoot-grid">
        {SHOOT.images.map((img, i) => (
          <div key={i} className="shoot-grid-item">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Back nav */}
      <div className="shoot-back">
        <Link href="/portfolio" className="text-link">← Back to portfolio</Link>
      </div>

      <Footer />
    </div>
  )
}
