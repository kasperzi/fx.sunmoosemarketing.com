'use client'

import { useEffect, useState } from 'react'
import { resolveCountry, saveCountry } from '@/lib/country'
import type { Broker } from '@/lib/api'

function shortenPlatform(p: string): string {
  return p
    .replace(/MetaTrader\s*4/i, 'MT4')
    .replace(/MetaTrader\s*5/i, 'MT5')
    .replace(/MetaTrader/i, 'MT')
}

function BrokerCard({ broker }: { broker: Broker }) {
  const logoUrl = broker.logos?.square_light || broker.logos?.square_dark || null
  const brokerUrl = broker.affiliate_link || '#'
  const reviewUrl = `/broker/${broker.slug}`
  const minDeposit = broker.min_deposit != null ? `$${broker.min_deposit}` : '—'
  const minSpread = broker.min_spread != null ? `${broker.min_spread} pips` : '—'
  const rating = broker.total_rating != null
    ? Math.round(broker.total_rating * 10) / 10
    : null
  const usersCount = broker.users_count
    ? broker.users_count.toLocaleString('en-US') + ' users'
    : null

  return (
    <article className="broker-card">
      <div className="broker-card__head">
        {logoUrl
          ? <img src={logoUrl} alt={broker.name} className="broker-logo" loading="lazy" />
          : <span className="broker-logo-placeholder">{broker.name.charAt(0)}</span>
        }
        <div>
          <p className="broker-name">{broker.name}</p>
          {rating && (
            <span className="rating-badge">
              <img src="/assets/images/icon-star.svg" alt="" />{rating}/5
            </span>
          )}
        </div>
      </div>

      <div className="availability-badge">
        <img src="/assets/images/icon-check-circle.svg" alt="" />Available in your country
      </div>

      <ul className="broker-facts">
        {usersCount && (
          <li>
            <img src="/assets/images/icon-users.svg" alt="" />{usersCount}
          </li>
        )}
        <li>
          <img src="/assets/images/icon-swap.svg" alt="" />
          <span>Min. spread</span>
          <strong>{minSpread}</strong>
        </li>
        <li>
          <img src="/assets/images/icon-card.svg" alt="" />
          <span>Min. deposit</span>
          <strong>{minDeposit}</strong>
        </li>
        {broker.platforms && broker.platforms.length > 0 && (
          <li className="broker-facts__platform">
            <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
            <div className="tag-row">
              {broker.platforms.map((p) => (
                <span key={p} className="tag">{shortenPlatform(p)}</span>
              ))}
            </div>
          </li>
        )}
        {broker.promotion?.bonus_type && (
          <li>
            <img src="/assets/images/icon-gift-light.svg" alt="" />
            <span>Bonus</span>
            <strong>{broker.promotion.bonus_type}</strong>
          </li>
        )}
      </ul>

      <div className="broker-card__ctas">
        <a href={brokerUrl} className="btn btn--primary btn--block" target="_blank" rel="noopener noreferrer">
          Visit Broker
        </a>
        <a href={reviewUrl} className="btn btn--text btn--text--px btn--center">
          Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" />
        </a>
      </div>
    </article>
  )
}

export default function BrokerCarousel() {
  const [brokers, setBrokers] = useState<Broker[]>([])
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState<string>('NL')

  useEffect(() => {
    async function load() {
      const c = await resolveCountry()
      setCountry(c)

      try {
        const res = await fetch(`/api/brokers?country=${c}&per_page=10`)
        if (!res.ok) throw new Error()
        const json = await res.json()
        const data: Broker[] = json.data ?? json
        setBrokers(data)
      } catch {
        // brokers stay empty
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // Listen for country changes dispatched by script.js lang panel
  useEffect(() => {
    function onCountryChange(e: Event) {
      const code = (e as CustomEvent<string>).detail
      saveCountry(code)
      setCountry(code)
      setLoading(true)
      fetch(`/api/brokers?country=${code}&per_page=10`)
        .then(r => r.json())
        .then(json => setBrokers(json.data ?? json))
        .catch(() => {})
        .finally(() => setLoading(false))
    }
    window.addEventListener('fx:countryChange', onCountryChange)
    return () => window.removeEventListener('fx:countryChange', onCountryChange)
  }, [])

  if (loading) {
    return (
      <div className="broker-cards" id="brokerCarousel">
        <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Loading brokers...</p>
      </div>
    )
  }

  if (brokers.length === 0) {
    return (
      <div className="broker-cards" id="brokerCarousel">
        <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No brokers found.</p>
      </div>
    )
  }

  return (
    <div className="broker-cards" id="brokerCarousel">
      {brokers.map((broker) => (
        <BrokerCard key={broker.id} broker={broker} />
      ))}
    </div>
  )
}
