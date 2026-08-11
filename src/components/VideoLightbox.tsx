'use client'

import { useState, useEffect, useCallback } from 'react'

interface Props {
  embedUrl: string
  thumbnailUrl: string
  title: string
}

export default function VideoLightbox({ embedUrl, thumbnailUrl, title }: Props) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, close])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Thumbnail + play button */}
      <button
        type="button"
        className="bb-video__poster"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${title}`}
        style={{
          position: 'relative',
          display: 'block',
          width: '100%',
          padding: 0,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          borderRadius: 12,
          overflow: 'hidden',
          aspectRatio: '16/9',
        }}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Play icon overlay */}
        <span style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.25)',
          transition: 'background 0.2s',
        }}>
          <span style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}>
            {/* Triangle play icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M10 7l14 7-14 7V7z" fill="#6c47ff" />
            </svg>
          </span>
        </span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          {/* Stop click propagation on the video container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 960,
              aspectRatio: '16/9',
              borderRadius: 12,
              overflow: 'hidden',
              background: '#000',
            }}
          >
            <iframe
              src={`${embedUrl}?autoplay=1&rel=0`}
              title={title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            style={{
              position: 'fixed',
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
