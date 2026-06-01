import Link from "next/link";

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
          >
            Etsy shop
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@banafritphotography"
            target="_blank"
            rel="noopener noreferrer"
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
