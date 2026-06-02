import Image from "next/image";
import Link from "next/link";

const WORKS = [
  {
    label: "I",
    src: "/images/portfolio/waiting-game.png",
    alt: "Waiting game",
  },
  { label: "II", src: "/images/portfolio/sumptuous.jpg", alt: "Sumptuous" },
  { label: "III", src: "/images/portfolio/elegance-1.png", alt: "Elegance" },
];

export default function SelectedWork() {
  return (
    <section className="section selected-work">
      <p className="section-label">Selected work</p>
      <div className="grid-3">
        {WORKS.map((work) => (
          <Link key={work.label} href="/portfolio" className="grid-image">
            {work.src ? (
              <Image
                src={work.src}
                alt={work.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : null}
            <span className="grid-image-label">{work.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
