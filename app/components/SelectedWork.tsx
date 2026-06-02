import Image from "next/image";
import Link from "next/link";
import portfolio from "@/data/portfolio.json";

// Featured images are controlled via the `featured` flag in data/portfolio.json.
// Set featured:true on up to 3 images to control what appears here.
const ROMAN = ["I", "II", "III"];
const featured = portfolio.filter((p) => p.featured).slice(0, 3);

export default function SelectedWork() {
  return (
    <section className="section selected-work">
      <p className="section-label">Selected work</p>
      <div className="grid-3">
        {featured.map((work, i) => (
          <Link key={work.id} href="/portfolio" className="grid-image">
            <Image
              src={work.src}
              alt={work.alt}
              fill
              style={{ objectFit: "cover" }}
            />
            <span className="grid-image-label">{ROMAN[i]}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
