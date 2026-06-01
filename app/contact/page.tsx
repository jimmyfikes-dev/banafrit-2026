import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import ContactForm from '@/app/components/ContactForm'

export const metadata = {
  title: 'Contact — Banafrit',
}

export default function ContactPage() {
  return (
    <div className="site">
      <Nav />
      <div className="contact-page">
        <div className="contact-content">
          <p className="section-label">Contact</p>
          <h1 className="about-title">Get in touch</h1>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
