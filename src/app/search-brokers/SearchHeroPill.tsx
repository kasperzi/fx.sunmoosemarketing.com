'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function SearchHeroPill() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = useState(searchParams.get('q') ?? '')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value
    setValue(v)
    const params = new URLSearchParams(searchParams.toString())
    if (v.length >= 3) {
      params.set('q', v)
    } else {
      params.delete('q')
    }
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="search-pill-wrap">
      <div className="search-pill">
        <img src="/assets/images/icon-search.svg" alt="" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search by broker, platform, payment method, or keyword..."
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            outline: 'none',
            color: 'inherit',
            font: 'inherit',
            fontSize: 'inherit',
            padding: 0,
            minWidth: 0,
          }}
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue('')
              const params = new URLSearchParams(searchParams.toString())
              params.delete('q')
              router.replace(`?${params.toString()}`, { scroll: false })
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', opacity: 0.5 }}
            aria-label="Clear search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      <p className="search-hero__hint">Start typing at least 3 characters to search</p>
    </div>
  )
}
