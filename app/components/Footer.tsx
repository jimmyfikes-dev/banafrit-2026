import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Your Name</div>
      <ul className="footer-links">
        <li><Link href="https://etsy.com" target="_blank" rel="noopener noreferrer">Etsy shop</Link></li>
        <li><Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
      </ul>
      <p className="footer-copy">© {new Date().getFullYear()}</p>
    </footer>
  )
}
