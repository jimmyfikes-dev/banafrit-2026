import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import { pages } from '@/data/seo'

export const metadata = {
  title: pages.privacy.title,
  description: pages.privacy.description,
}

export default function PrivacyPage() {
  return (
    <div className="site">
      <Nav />
      <div className="about-page">
        <div className="about-content">
          <p className="section-label">Privacy Policy</p>
          <h1 className="about-title">Your privacy</h1>
          <div className="about-body">
            <p>
              This site is operated by Banafrit Photography. We collect minimal
              personal information and will never sell or share your data with
              third parties for marketing purposes.
            </p>

            <p>
              <strong>Email newsletter.</strong> If you subscribe to our
              newsletter, your email address is stored with Kit (formerly
              ConvertKit). You can unsubscribe at any time using the link in any
              email we send. We use your email only to send updates about new
              work, shop releases, and occasional behind-the-scenes content.
            </p>

            <p>
              <strong>Contact form.</strong> Messages submitted through the
              contact form are processed by Formspree and delivered to us by
              email. We use the information you provide only to respond to your
              inquiry.
            </p>

            <p>
              <strong>Cookies and analytics.</strong> This site does not
              currently use tracking cookies or third-party analytics. If that
              changes, this policy will be updated.
            </p>

            <p>
              <strong>Age verification.</strong> We ask visitors to confirm
              they are 18 or older before entering this site. We do not store
              or transmit this confirmation — it is held locally in your
              browser only.
            </p>

            <p>
              <strong>Third-party links.</strong> This site links to Etsy and
              YouTube. Those platforms have their own privacy policies, which
              govern any data collected when you visit them.
            </p>

            <p>
              If you have any questions about how we handle your data, please
              use the <a href="/contact" style={{ borderBottom: '0.5px solid currentColor' }}>contact page</a>.
            </p>

            <p style={{ opacity: 0.5, fontSize: '12px' }}>
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
