import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function ShopSection() {
  const shopUrl = process.env.NEXT_PUBLIC_ETSY_SHOP_URL ?? "https://etsy.com";

  return (
    <section className="shop-section" aria-label="Shop">
      <div className="shop-header">
        <p className="section-label">Shop</p>
        <Link
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
          style={{ fontSize: "11px" }}
        >
          View all →
        </Link>
      </div>
      <ul className="shop-masonry" role="list">
        {products.map((product) => (
          <li key={product.id} className="shop-masonry-item">
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-card"
              aria-label={`${product.name}, ${product.price} — ${product.tag}`}
            >
              <div className="shop-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={800}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    pointerEvents: "none",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="shop-info" aria-hidden="true">
                  <p className="shop-name">{product.name}</p>
                  <p className="shop-price">{product.price}</p>
                  <span className="shop-tag">{product.tag}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
