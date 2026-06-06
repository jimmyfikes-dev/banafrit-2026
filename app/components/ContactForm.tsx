'use client'

import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'
import { track } from '@/lib/analytics'

const SUBJECTS = [
  'Questions or concerns',
  'Model inquiry',
  'Print sizing / custom order',
  'Product questions',
  'Collaboration',
  'Licensing',
  'Press / media',
]

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mvzyeglp')

  useEffect(() => {
    if (state.succeeded) track.contactSubmit()
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <p>Thank you — your message has been sent.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label className="contact-label" htmlFor="name">Name</label>
        <input
          className="contact-input"
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
        />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="contact-error" />
      </div>

      <div className="contact-field">
        <label className="contact-label" htmlFor="email">Email</label>
        <input
          className="contact-input"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="contact-error" />
      </div>

      <div className="contact-field">
        <label className="contact-label" htmlFor="subject">Subject</label>
        <select className="contact-input contact-select" id="subject" name="subject" required>
          <option value="">Select a subject</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <ValidationError field="subject" prefix="Subject" errors={state.errors} className="contact-error" />
      </div>

      <div className="contact-field">
        <label className="contact-label" htmlFor="message">Message</label>
        <textarea
          className="contact-input contact-textarea"
          id="message"
          name="message"
          required
          rows={6}
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="contact-error" />
      </div>

      <button
        className="contact-submit"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
