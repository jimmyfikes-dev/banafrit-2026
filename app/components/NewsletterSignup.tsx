'use client'

import { useState } from 'react'
import { subscribe } from '@/app/actions/subscribe'

interface NewsletterSignupProps {
  onSuccess?: () => void
  heading?: string
  subheading?: string
}

export default function NewsletterSignup({
  onSuccess,
  heading = 'Stay close',
  subheading = 'New work, behind the scenes, and early access to prints.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const result = await subscribe(email)

    if (result.success) {
      setStatus('success')
      onSuccess?.()
    } else {
      setStatus('error')
      setError(result.error ?? 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="newsletter-success">
        <p>You&rsquo;re in — thank you.</p>
      </div>
    )
  }

  return (
    <div className="newsletter-signup">
      {heading && <p className="newsletter-heading">{heading}</p>}
      {subheading && <p className="newsletter-sub">{subheading}</p>}
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          className="newsletter-input"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button
          className="newsletter-submit"
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && <p className="newsletter-error">{error}</p>}
    </div>
  )
}
