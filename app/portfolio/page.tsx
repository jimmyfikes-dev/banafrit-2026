import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import PortfolioGrid from '@/app/components/PortfolioGrid'
import portfolio from '@/data/portfolio.json'

const general = portfolio.filter((p) => p.section === 'general')
const fineArtNude = portfolio.filter((p) => p.section === 'fine-art-nude')

export default function PortfolioPage() {
  return (
    <div className="site">
      <Nav />

      <section className="portfolio-section">
        <p className="section-label">Selected work</p>
        <div className="portfolio-grid">
          {general.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <PortfolioGrid images={fineArtNude} />

      <Footer />
    </div>
  )
}
