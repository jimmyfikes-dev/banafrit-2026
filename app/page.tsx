import { Suspense } from "react";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import Featured from "@/app/components/Featured";
import ShopSection from "@/app/components/ShopSection";
import Statement from "@/app/components/Statement";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <div className="site">
      <Nav />
      <Hero imageSrc="/images/portfolio/IMG_7055-preview.jpg" />
      <SelectedWork />
      <Featured />
      <Suspense fallback={<ShopSkeleton />}>
        <ShopSection />
      </Suspense>
      <Statement />
      <Footer />
    </div>
  );
}

function ShopSkeleton() {
  return (
    <section className="shop-section">
      <div className="shop-header">
        <p className="section-label">Shop</p>
      </div>
      <div className="shop-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="shop-card">
            <div className="shop-image" style={{ background: "#e8e4df" }} />
            <div className="shop-info">
              <p
                className="shop-name"
                style={{ height: 13, background: "#e0dbd4", borderRadius: 2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
