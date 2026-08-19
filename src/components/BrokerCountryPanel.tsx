'use client'

import { useState, useEffect, useRef } from 'react'
import { COUNTRIES, countryName, flagUrl, flagUrlSmall } from '@/lib/countries'

interface BrokerCountries { available: string[]; restricted: string[] }
interface Promotion {
  bonus_type?: string | null
  bonus_amount?: string | null
  is_global: boolean
  countries: string[]
}

interface Props {
  initialCountry: string
  brokerCountries: BrokerCountries | null
  promotions: Promotion[]
}

function getCountryStatus(countries: BrokerCountries | null, code: string): 'available' | 'restricted' | 'unknown' {
  if (!countries) return 'unknown'
  const cc = code.toUpperCase()
  if ((countries.restricted ?? []).map(c => c.toUpperCase()).includes(cc)) return 'restricted'
  return 'available'
}

function getActivePromotions(promotions: Promotion[], country: string): Promotion[] {
  return promotions.filter(p =>
    p.is_global || (Array.isArray(p.countries) && p.countries.map(c => c.toUpperCase()).includes(country.toUpperCase()))
  )
}

export default function BrokerCountryPanel({ initialCountry, brokerCountries, promotions }: Props) {
  const [country, setCountry] = useState(initialCountry)
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)

  const status = getCountryStatus(brokerCountries, country)
  const promos = getActivePromotions(promotions, country)
  const label = countryName(country)

  // Sync with header / other components
  useEffect(() => {
    function onCountryChange(e: Event) {
      setCountry((e as CustomEvent<string>).detail)
    }
    window.addEventListener('fx:countryChange', onCountryChange)
    return () => window.removeEventListener('fx:countryChange', onCountryChange)
  }, [])

  // Close on outside click
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  function select(code: string) {
    setCountry(code)
    setIsOpen(false)
    setSearch('')
    // Broadcast to header + other listeners
    window.dispatchEvent(new CustomEvent('fx:countryChange', { detail: code }))
    // Persist preference (same logic as header confirm button)
    const ipCountry = document.documentElement.dataset.ipCountry ?? ''
    try { localStorage.setItem('fx_country_pref', code) } catch (_) {}
    if (ipCountry) { try { localStorage.setItem('fx_ip_at_selection', ipCountry) } catch (_) {} }
    document.cookie = `fx_country_pref=${code};max-age=31536000;path=/;SameSite=Lax`
  }

  const entries = COUNTRIES.filter(({ code, name }) => {
    const q = search.toLowerCase()
    return name.toLowerCase().includes(q) || code.toLowerCase().includes(q)
  })

  return (
    <div className="rv-panel">
      <p className="rv-panel__heading">Your selected country</p>

      <div className={`country-select${isOpen ? ' is-open' : ''}`} ref={rootRef}>
        <button type="button" className="select-row country-toggle" onClick={() => setIsOpen(o => !o)}>
          <img src={flagUrl(country)} alt="" className="flag" style={{ width: 20, height: 15, objectFit: 'cover' }} />
          <span className="select-value">{label}</span>
          <img src="/assets/images/rv-icon-chevron-down-filled.svg" alt="" className="icon-24 select-chevron" />
        </button>

        <div className="country-dropdown" hidden={!isOpen}>
          <div className="country-search">
            <img src="/assets/images/icon-search.svg" alt="" />
            <input
              type="text"
              placeholder="Search country..."
              autoComplete="off"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <ul className="country-list" role="listbox">
            {entries.map(({ code, name }) => (
              <li
                key={code}
                className={`country-option${code === country ? ' country-option--selected' : ''}`}
                role="option"
                data-code={code}
                data-name={name}
                onClick={() => select(code)}
              >
                <img src={flagUrlSmall(code)} width={20} height={15} alt="" className="flag-emoji" />
                {name}
              </li>
            ))}
          </ul>
          {entries.length === 0 && <p className="country-empty">No countries found.</p>}
        </div>
      </div>

      <p className="rv-note">Detected automatically. You can change it anytime.</p>

      <div className="rv-info-list">
        <div className="rv-info-list__row">
          <span className="rv-fact-card__icon"><img src="/assets/images/rv-icon-language.svg" alt="" /></span>
          <span className="rv-info-list__label">Availability</span>
          <span className="rv-info-list__value">
            {status === 'restricted'
              ? `Not available in ${label}`
              : status === 'available'
                ? `Available in ${label}`
                : 'Check website for availability'
            }
          </span>
        </div>
        <div className="rv-info-list__row">
          <span className="rv-fact-card__icon"><img src="/assets/images/icon-gift.svg" alt="" /></span>
          <span className="rv-info-list__label">Welcome Bonus</span>
          <span className="rv-info-list__value">
            {promos.length > 0
              ? `${promos[0].bonus_type ?? 'Active bonus'}${promos[0].bonus_amount ? `: ${promos[0].bonus_amount}` : ''}`
              : 'No Active Deposit Bonus'
            }
          </span>
        </div>
        <div className="rv-info-list__row">
          <span className="rv-fact-card__icon"><img src="/assets/images/rv-icon-shield-warning-outline.svg" alt="" /></span>
          <span className="rv-info-list__label">Restrictions</span>
          <span className="rv-info-list__value">
            {status === 'restricted'
              ? `Trading restricted in ${label}`
              : 'Entity-specific terms may apply'
            }
          </span>
        </div>
      </div>

      <p className="rv-note">Availability, promotions, restrictions, and affiliate links may vary depending on your selected country and the broker entity you register with.</p>
      <a href={`/?country=${country}`} className="btn btn--text btn--text--px">
        View brokers available in {label} <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
      </a>
    </div>
  )
}
