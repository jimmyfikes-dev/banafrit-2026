'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

interface AgeGateContextType {
  isConfirmed: boolean
  confirm: () => void
}

const AgeGateContext = createContext<AgeGateContextType>({
  isConfirmed: false,
  confirm: () => {},
})

export function useAgeGate() {
  return useContext(AgeGateContext)
}

export default function AgeGateProvider({ children }: { children: React.ReactNode }) {
  const [isConfirmed, setIsConfirmed] = useState(true) // default true to avoid flash
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem('age-confirmed')
    setIsConfirmed(stored === 'true')
    setReady(true)
  }, [])

  function confirm() {
    sessionStorage.setItem('age-confirmed', 'true')
    setIsConfirmed(true)
  }

  return (
    <AgeGateContext.Provider value={{ isConfirmed, confirm }}>
      {children}
      {ready && !isConfirmed && <AgeGateModal onConfirm={confirm} />}
    </AgeGateContext.Provider>
  )
}

function AgeGateModal({ onConfirm }: { onConfirm: () => void }) {
  const confirmRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Move focus into modal on mount
  useEffect(() => {
    confirmRef.current?.focus()
  }, [])

  // Trap focus inside modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, a, input, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="age-gate-overlay" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
      <div className="age-gate-modal" ref={modalRef}>
        <p className="age-gate-eyebrow">Before you enter</p>
        <h2 className="age-gate-title" id="age-gate-title">This site contains artistic nudity</h2>
        <p className="age-gate-body">
          The photography on this site is intended as fine art. It explores the
          human form honestly and without performance — it is not pornographic
          in nature. Some images include topless and nude content.
        </p>
        <p className="age-gate-body">
          By entering you confirm that you are 18 years of age or older and
          that viewing this content is legal in your jurisdiction.
        </p>
        <div className="age-gate-actions">
          <button className="age-gate-confirm" onClick={onConfirm} ref={confirmRef}>
            I am 18 or older — Enter
          </button>
          <a className="age-gate-exit" href="https://google.com">
            Exit
          </a>
        </div>
      </div>
    </div>
  )
}
