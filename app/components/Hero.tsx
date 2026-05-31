import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  imageSrc?: string
  imageAlt?: string
}

export default function Hero({ imageSrc, imageAlt = 'Hero photograph' }: HeroProps) {
  return (
    <div className="hero">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="hero-image"
          priority
        />
      ) : (
        <div className="hero-placeholder">
          <div className="hero-placeholder-inner">Hero image</div>
        </div>
      )}
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-tag">Fine art photography</p>
        <h1 className="hero-headline">Intimacy photographed honestly</h1>
        <p className="hero-sub">
          Quiet moments. Natural light. The space between presence and desire.
        </p>
        <Link href="/portfolio" className="hero-cta">
          View portfolio →
        </Link>
      </div>
    </div>
  )
}
