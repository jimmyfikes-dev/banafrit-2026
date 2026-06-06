"use client";

import { useState } from "react";
import { subscribe } from "@/app/actions/subscribe";
import { track } from "@/lib/analytics";

interface NewsletterSignupProps {
  onSuccess?: () => void;
  heading?: string;
  subheading?: string;
}

export default function NewsletterSignup({
  onSuccess,
  heading = "Stay close",
  subheading = "New work, behind the scenes, and early access to prints.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const result = await subscribe(email);

    if (result.success) {
      setStatus("success");
      track.newsletterSignup();
      onSuccess?.();
    } else {
      setStatus("error");
      setError(result.error ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <section className="newsletter-signup" aria-label="Newsletter">
        <div className="newsletter-card">
          <p className="newsletter-success">You&rsquo;re in — thank you.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter-signup" aria-label="Newsletter signup">
      <div className="newsletter-card">
        {heading && (
          <p className="newsletter-heading" aria-hidden="true">
            {heading}
          </p>
        )}
        {subheading && <p className="newsletter-sub">{subheading}</p>}
        <p className="newsletter-incentive">
          Get <strong>25% off</strong> your first print order — coupon sent when
          you confirm your email.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            className="newsletter-input"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <button
            className="newsletter-submit"
            type="submit"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
          >
            {status === "submitting" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p className="newsletter-error" role="alert">
            {error}
          </p>
        )}
        <p className="newsletter-note">
          Already subscribed but images aren&rsquo;t showing? Re-enter your
          email above — it won&rsquo;t create a duplicate accounts.
        </p>
      </div>
    </section>
  );
}
