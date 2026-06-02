import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <Image
          src="/images/banafrit-logo-2026.png"
          alt="Banafrit"
          height={52}
          width={260}
          style={{ height: "52px", width: "auto" }}
          priority
        />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="https://www.etsy.com/shop/BanafritArt" target="_blank" rel="noopener noreferrer" aria-label="Shop prints (opens in new tab)">
            Shop prints
          </Link>
        </li>
        {/* <li>
          <Link href="/shop/clothing">Shop clothing</Link>
        </li> */}
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
