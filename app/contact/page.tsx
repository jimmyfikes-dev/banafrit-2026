import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import ContactForm from '@/app/components/ContactForm'
import { pages } from '@/data/seo'

export const metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
  openGraph: { images: [pages.contact.ogImage] },
}

export default function ContactPage() {
  return (
    <div className="site">
      <Nav />
      <main className="contact-page">
        <div className="contact-content">
          <p className="section-label">Contact</p>
          <h1 className="about-title">Get in touch</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
