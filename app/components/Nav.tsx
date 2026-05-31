import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">Your Name</div>
      <ul className="nav-links">
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/shop/prints">Shop prints</Link></li>
        <li><Link href="/shop/clothing">Shop clothing</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
