'use client'

import { useState } from 'react'

interface VideoSectionProps {
  videoId?: string
  /** Path to a poster/placeholder image under /public. Replace with your own. */
  poster?: string
  label?: string
}

export default function VideoSection({
  videoId = 'd2Jt5ir_qBo',
  poster = '/images/video-poster.jpg', // swap this path once you have an image
  label = 'Watch',
}: VideoSectionProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="video-section" aria-label={label}>
      <div className="video-label-row">
        <p className="section-label">{label}</p>
      </div>
      <div className="video-wrapper">
        {playing ? (
          <iframe
            className="video-iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Banafrit — film"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            className="video-poster-btn"
            onClick={() => setPlaying(true)}
            aria-label="Play video"
          >
            {/* Poster image — replace /images/video-poster.jpg with your own */}
            <img
              className="video-poster-img"
              src={poster}
              alt=""
              aria-hidden="true"
            />
            {/* Fallback background if image is missing */}
            <div className="video-poster-placeholder" aria-hidden="true" />
            <span className="video-play-btn" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" stroke="currentColor" strokeOpacity="0.5" />
                <polygon points="19,14 37,24 19,34" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  )
}
