import Image from 'next/image'
import Link from 'next/link'

interface FeaturedProps {
  imageSrc?: string
}

export default function Featured({ imageSrc }: FeaturedProps) {
  return (
    <section className="featured">
      <div className="featured-image">
        {imageSrc ? (
          <Image src={imageSrc} alt="Featured work" fill style={{ objectFit: 'cover' }} />
        ) : null}
      </div>
      <div className="featured-text">
        <p className="featured-eyebrow">The vision</p>
        <h2 className="featured-title">The moment before the moment</h2>
        <p className="featured-body">
          Every image is a quiet observation. A woman in her own world — unguarded,
          unhurried, entirely herself. No direction. No performance. Just the truth
          of a moment, caught in natural light.
        </p>
        <Link href="/portfolio/featured" className="text-link">View the series →</Link>
      </div>
    </section>
  )
}
