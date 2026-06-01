import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "About — Banafrit",
};

export default function AboutPage() {
  return (
    <div className="site">
      <Nav />
      <div className="about-page">
        <div className="about-content">
          <p className="section-label">About</p>

          <h1 className="about-title">The work</h1>

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
      </div>
      <Footer />
    </div>
  );
}
