import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { pages } from "@/data/seo";

export const metadata = {
  title: pages.about.title,
  description: pages.about.description,
  openGraph: { images: [pages.about.ogImage] },
};

export default function AboutPage() {
  return (
    <div className="site">
      <Nav />
      <main className="about-page">
        <div className="about-content">
          <p className="section-label">About</p>

          <h1 className="about-title">About the work</h1>

          <div className="about-body">
            <p>
              Banafrit is a fine art photography project built around a simple
              idea — that there is something worth seeing in a woman when she is
              entirely herself.
            </p>
            <p>
              The work spans portraiture, boudoir, and figure study. Some of it
              is intimate. All of it is honest.
            </p>
            <p>
              Fine art prints are available in the shop, produced on Hahnemühle
              Bamboo Gloss Baryta paper in multiple sizes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
