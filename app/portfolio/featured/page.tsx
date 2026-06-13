import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { pages, siteName } from "@/data/seo";

const og = pages.featured.ogImage!;

export const metadata = {
  title: pages.featured.title,
  description: pages.featured.description,
  openGraph: {
    type: "website" as const,
    siteName,
    title: pages.featured.title,
    description: pages.featured.description,
    images: [og],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: pages.featured.title,
    description: pages.featured.description,
    images: [og.url],
  },
};

const SHOOT = {
  title: "Unguarded",
  date: "June 2026",
  location: "Houston, TX",
  model: "Willa",
  statement:
    "Shot on an overcast afternoon — the kind of light that asks nothing of you. " +
    "No warmup, no direction. Just a woman moving through a space that felt like hers. " +
    "The black dress came off slowly. The white dress spun. The water was cold. " +
    "Every frame was a question the room already knew the answer to.",
  heroImage: "/images/portfolio/featured/Willa_4441-preview.jpg",
  heroAlt:
    "Fine art portrait — Willa in black off-shoulder dress standing before floor-to-ceiling window, natural overcast light, Houston TX",
  images: [
    {
      src: "/images/portfolio/featured/Willa_3589-preview.jpg",
      alt: "Fine art portrait — woman in black off-shoulder dress, standing before panoramic window, natural light with her back turned.",
    },
    {
      src: "/images/portfolio/featured/Willa_3657-preview.jpg",
      alt: "Fine art portrait — woman in black off-shoulder dress, arms crossed, standing before panoramic window, natural light",
    },
    {
      src: "/images/portfolio/featured/Willa_3713-preview.jpg",
      alt: "Fine art figure study — woman in black dress, back to camera, gazing upward before large window, soft overcast light",
    },
    {
      src: "/images/portfolio/featured/Willa_3723-preview.jpg",
      alt: "Fine art figure study — topless woman removing her black dress, before large window, soft overcast light",
    },
    {
      src: "/images/portfolio/featured/Willa_3730-preview.jpg",
      alt: "Fine art figure study — topless woman un-buttoning the back ofs her black dress, before large window, soft overcast light",
    },
    {
      src: "/images/portfolio/featured/Willa_3763-preview.jpg",
      alt: "Fine art nude portrait — woman holding black dress at waist, standing before floor-to-ceiling window removing black panties, intimate natural light",
    },
    {
      src: "/images/portfolio/featured/Willa_3779-preview.jpg",
      alt: "Fine art nude portrait — woman holding black dress at waist, standing before floor-to-ceiling window removing black panties, intimate natural light",
    },
    {
      src: "/images/portfolio/featured/Willa_3821-preview.jpg",
      alt: "Fine art nude portrait — woman standing before floor-to-ceiling window topless in elegant black panties, intimate natural light",
    },
    {
      src: "/images/portfolio/featured/Willa_3823-preview.jpg",
      alt: "Fine art nude portrait — woman stepping over an elegant black dress in front of a floor-to-ceiling window topless in elegant black panties, intimate natural light",
    },
    {
      src: "/images/portfolio/featured/Willa_3829-preview.jpg",
      alt: "Fine art nude portrait — woman standing confidently before floor-to-ceiling window topless in elegant black panties, intimate natural light",
    },
    {
      src: "/images/portfolio/featured/Willa_4170-preview.jpg",
      alt: "Fine art portrait — woman in white long-sleeve midi dress, spinning in natural light near glass door",
    },
    {
      src: "/images/portfolio/featured/Willa_4172-preview.jpg",
      alt: "Fine art portrait — woman in white dress, poised in natural daylight, minimalist interior",
    },
    {
      src: "/images/portfolio/featured/Willa_4236-preview.jpg",
      alt: "Fine art portrait — woman in white long-sleeve dress, mid-movement, natural light through glass door",
    },
    {
      src: "/images/portfolio/featured/Willa_4355-preview.jpg",
      alt: "Fine art nude — topless woman reclining on cream sofa un-buttoning an elegant white dress, architectural interior, natural side light",
    },
    {
      src: "/images/portfolio/featured/Willa_4441-preview.jpg",
      alt: "Fine art nude — woman reclining on cream sofa, architectural interior, natural side light",
    },
    {
      src: "/images/portfolio/featured/Willa_4541-preview.jpg",
      alt: "Fine art nude — woman seated on edge of freestanding soaking tub, backlit by window, luxury bathroom",
    },
    {
      src: "/images/portfolio/featured/Willa_4866-preview.jpg",
      alt: "Fine art nude — woman kneeling on freestanding bathtub, hair in motion, dramatic backlit silhouette",
    },
    {
      src: "/images/portfolio/featured/Willa_4896-preview.jpg",
      alt: "Fine art nude — woman standing near bathroom vanity, natural window light, freestanding tub in background",
    },
  ],
};

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
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="shoot-hero-overlay" />
        </div>
        <div className="shoot-hero-content">
          <p className="hero-tag">
            {SHOOT.date} · {SHOOT.location}
          </p>
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
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Back nav */}
      <div className="shoot-back">
        <Link href="/portfolio" className="text-link">
          ← Back to portfolio
        </Link>
      </div>

      <Footer />
    </div>
  );
}
