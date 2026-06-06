'use client'

import Link from "next/link";
import { track } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Banafrit Photography</div>
      <ul className="footer-links">
        <li>
          <Link
            href="https://www.etsy.com/shop/BanafritArt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Etsy shop (opens in new tab)"
            onClick={() => track.etsyClick('footer')}
          >
            Etsy shop
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@banafritphotography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube channel (opens in new tab)"
          >
            YouTube
          </Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
      <p className="footer-copy">© {new Date().getFullYear()}</p>
    </footer>
  );
}
