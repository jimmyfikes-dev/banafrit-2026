import Image from 'next/image'
import Link from 'next/link'
import products from '@/data/products.json'

export default function ShopSection() {
  const shopUrl = process.env.NEXT_PUBLIC_ETSY_SHOP_URL ?? 'https://etsy.com'

  return (
    <section className="shop-section">
      <div className="shop-header">
        <p className="section-label">Shop</p>
        <Link
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
          style={{ fontSize: '11px' }}
        >
          View all →
        </Link>
      </div>
      <div className="shop-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-card"
          >
            <div className="shop-image">
              <Image
                src={product.image}
                alt={product.name}
                fill
                draggable={false}
                style={{ objectFit: 'cover', pointerEvents: 'none' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="shop-info">
              <p className="shop-name">{product.name}</p>
              <p className="shop-price">{product.price}</p>
              <span className="shop-tag">{product.tag}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
