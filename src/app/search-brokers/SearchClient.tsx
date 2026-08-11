'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { resolveCountry, saveCountry } from '@/lib/country'
import type { Broker } from '@/lib/api'

// ─── Country list ────────────────────────────────────────────────────────────

const COUNTRIES = [
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'AT', name: 'Austria' },
  { code: 'AU', name: 'Australia' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BR', name: 'Brazil' },
  { code: 'CA', name: 'Canada' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'CN', name: 'China' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'DE', name: 'Germany' },
  { code: 'DK', name: 'Denmark' },
  { code: 'EG', name: 'Egypt' },
  { code: 'ES', name: 'Spain' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GR', name: 'Greece' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'HU', name: 'Hungary' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IL', name: 'Israel' },
  { code: 'IN', name: 'India' },
  { code: 'IT', name: 'Italy' },
  { code: 'JO', name: 'Jordan' },
  { code: 'JP', name: 'Japan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KR', name: 'South Korea' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MX', name: 'Mexico' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'NO', name: 'Norway' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'OM', name: 'Oman' },
  { code: 'PH', name: 'Philippines' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RO', name: 'Romania' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SE', name: 'Sweden' },
  { code: 'SG', name: 'Singapore' },
  { code: 'TH', name: 'Thailand' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'US', name: 'United States' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'ZA', name: 'South Africa' },
].sort((a, b) => a.name.localeCompare(b.name))

function countryFlag(code: string): string {
  return [...code.toUpperCase()]
    .map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65))
    .join('')
}

function getCountryName(code: string): string {
  return COUNTRIES.find(c => c.code === code)?.name ?? code
}

// ─── Platform helpers ─────────────────────────────────────────────────────────

const PLATFORM_LABELS = ['MT4', 'MT5', 'cTrader', 'TradingView']

function platformMatches(brokerPlatform: string, label: string): boolean {
  if (label === 'MT4') return /metatrader\s*4/i.test(brokerPlatform) || brokerPlatform === 'MT4'
  if (label === 'MT5') return /metatrader\s*5/i.test(brokerPlatform) || brokerPlatform === 'MT5'
  if (label === 'cTrader') return /ctrader/i.test(brokerPlatform)
  if (label === 'TradingView') return /tradingview/i.test(brokerPlatform)
  return false
}

function shortenPlatform(p: string): string {
  return p
    .replace(/MetaTrader\s*4/i, 'MT4')
    .replace(/MetaTrader\s*5/i, 'MT5')
    .replace(/MetaTrader/i, 'MT')
}

// ─── Broker card ──────────────────────────────────────────────────────────────

function BrokerResultCard({ broker, featured }: { broker: Broker; featured?: boolean }) {
  const logoUrl = broker.logos?.square_light || broker.logos?.square_dark || null
  const brokerUrl = broker.affiliate_link
  const reviewUrl = `/broker/${broker.slug}`
  const minDeposit = broker.min_deposit != null ? `$${broker.min_deposit}` : '—'
  const minSpread = broker.min_spread != null ? `${broker.min_spread} pips` : '—'
  const rating = broker.total_rating != null ? Math.round(broker.total_rating * 10) / 10 : null
  const usersCount = broker.users_count
    ? broker.users_count.toLocaleString('en-US') + ' users'
    : null

  return (
    <article className={`broker-card${featured ? ' broker-card--featured' : ''}`}>
      <div className="broker-card__head">
        {logoUrl
          ? <img src={logoUrl} alt={broker.name} className="broker-logo" loading="lazy" />
          : <span className="broker-logo-placeholder">{broker.name.charAt(0)}</span>
        }
        <div>
          {featured && <span className="top10-card__badge">TOP PICK</span>}
          <p className="broker-name">{broker.name}</p>
          {rating && (
            <span className="rating-badge">
              <img src="/assets/images/icon-star.svg" alt="" />{rating}/5
            </span>
          )}
        </div>
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
              {broker.platforms.map(p => (
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
        {brokerUrl && (
          <a
            href={brokerUrl}
            className={`btn ${featured ? 'btn--secondary' : 'btn--primary'} btn--block`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Visit Broker
          </a>
        )}
        <a href={reviewUrl} className="btn btn--text btn--text--px btn--center">
          Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" />
        </a>
      </div>
    </article>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

const PAGE_SIZE = 12

const SORT_LABELS: Record<string, string> = {
  best_match: 'Best Match',
  lowest_spread: 'Lowest Spread',
  highest_rated: 'Highest Rated',
  most_popular: 'Most Popular',
}

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)

export default function SearchClient() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''

  // Broker data
  const [country, setCountry] = useState('NL')
  const [brokers, setBrokers] = useState<Broker[]>([])
  const [loading, setLoading] = useState(true)

  // Filters
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(new Set())
  const [maxDeposit, setMaxDeposit] = useState(500)
  const [minRating, setMinRating] = useState(0)

  // Sort + pagination
  const [sortBy, setSortBy] = useState('best_match')
  const [sortOpen, setSortOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Country dropdown
  const [countryOpen, setCountryOpen] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')
  const countryRef = useRef<HTMLDivElement>(null)

  // Accordion state — no defaultChecked items
  const [openSections, setOpenSections] = useState({
    country: true,
    platforms: true,
    deposit: true,
    rating: false,
    depositMethod: false,
    bonus: false,
  })

  // ── Load country + brokers on mount ─────────────────────────────────────────
  useEffect(() => {
    resolveCountry().then(c => {
      setCountry(c)
      fetchBrokers(c)
    })
  }, [])

  // Listen for global country changes (lang panel in script.js)
  useEffect(() => {
    function onCountryChange(e: Event) {
      const code = (e as CustomEvent<string>).detail
      saveCountry(code)
      setCountry(code)
      fetchBrokers(code)
      setVisibleCount(PAGE_SIZE)
    }
    window.addEventListener('fx:countryChange', onCountryChange)
    return () => window.removeEventListener('fx:countryChange', onCountryChange)
  }, [])

  // Close country dropdown on outside click
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  async function fetchBrokers(c: string) {
    setLoading(true)
    setBrokers([])
    try {
      const res = await fetch(`/api/brokers?country=${c}&per_page=200`, { cache: 'no-store' })
      if (!res.ok) throw new Error()
      const json = await res.json()
      setBrokers(json.data ?? json ?? [])
    } catch {
      setBrokers([])
    } finally {
      setLoading(false)
    }
  }

  function selectCountry(code: string) {
    saveCountry(code)
    setCountry(code)
    setCountryOpen(false)
    setCountrySearch('')
    fetchBrokers(code)
    setVisibleCount(PAGE_SIZE)
  }

  function togglePlatform(label: string) {
    setSelectedPlatforms(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
    setVisibleCount(PAGE_SIZE)
  }

  function toggleRating(r: number) {
    setMinRating(prev => (prev === r ? 0 : r))
    setVisibleCount(PAGE_SIZE)
  }

  function resetFilters() {
    setSelectedPlatforms(new Set())
    setMaxDeposit(500)
    setMinRating(0)
    setVisibleCount(PAGE_SIZE)
  }

  function toggleSection(key: keyof typeof openSections) {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // ── Filter + sort ─────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = [...brokers]

    if (searchQuery.length >= 3) {
      const q = searchQuery.toLowerCase()
      result = result.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.platforms?.some(p => p.toLowerCase().includes(q))
      )
    }

    if (selectedPlatforms.size > 0) {
      result = result.filter(b =>
        b.platforms?.some(p =>
          Array.from(selectedPlatforms).some(label => platformMatches(p, label))
        )
      )
    }

    if (maxDeposit < 500) {
      result = result.filter(b => (b.min_deposit ?? 0) <= maxDeposit)
    }

    if (minRating > 0) {
      result = result.filter(b => (b.total_rating ?? 0) >= minRating)
    }

    if (sortBy === 'highest_rated') {
      result.sort((a, b) => (b.total_rating ?? 0) - (a.total_rating ?? 0))
    } else if (sortBy === 'most_popular') {
      result.sort((a, b) => (b.users_count ?? 0) - (a.users_count ?? 0))
    } else if (sortBy === 'lowest_spread') {
      result.sort((a, b) => (a.min_spread ?? 999) - (b.min_spread ?? 999))
    }

    return result
  }, [brokers, searchQuery, selectedPlatforms, maxDeposit, minRating, sortBy])

  const visible = filtered.slice(0, visibleCount)

  // ── Filter chips ──────────────────────────────────────────────────────────
  const chips: Array<{ label: string; onRemove?: () => void }> = [
    { label: getCountryName(country) },
    ...Array.from(selectedPlatforms).map(p => ({ label: p, onRemove: () => togglePlatform(p) })),
    ...(minRating > 0 ? [{ label: `${minRating}+ Stars`, onRemove: () => setMinRating(0) }] : []),
    ...(maxDeposit < 500 ? [{ label: `Max deposit $${maxDeposit}`, onRemove: () => setMaxDeposit(500) }] : []),
  ]

  const hasActiveFilters = selectedPlatforms.size > 0 || minRating > 0 || maxDeposit < 500

  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  )

  const fillRight = `${100 - (maxDeposit / 500) * 100}%`

  return (
    <section>
      <div className="section-inner section-inner--row">

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="search-sidebar">
          <div className="filters-panel filters-panel--sidebar">
            <div className="filters-panel__header">
              <h3 className="filters-panel__title">Filters</h3>
              <p className="filters-panel__sub">Refine brokers by trading needs</p>
            </div>

            <ul className="filters-list">

              {/* Country */}
              <li className={`filters-item${openSections.country ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('country')}>
                  Country
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.country && (
                  <div className="filters-content">
                    <div className={`country-select${countryOpen ? ' is-open' : ''}`} ref={countryRef}>
                      <button
                        type="button"
                        className="select-row country-toggle"
                        onClick={() => { setCountryOpen(o => !o); setCountrySearch('') }}
                      >
                        <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>{countryFlag(country)}</span>
                        <span className="select-value">{getCountryName(country)}</span>
                        <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 select-chevron" />
                      </button>
                      {countryOpen && (
                        <div className="country-dropdown">
                          <div className="country-search">
                            <img src="/assets/images/icon-search.svg" alt="" />
                            <input
                              type="text"
                              placeholder="Search country..."
                              autoComplete="off"
                              value={countrySearch}
                              onChange={e => setCountrySearch(e.target.value)}
                              // eslint-disable-next-line jsx-a11y/no-autofocus
                              autoFocus
                            />
                          </div>
                          <ul className="country-list" role="listbox">
                            {filteredCountries.map(c => (
                              <li
                                key={c.code}
                                className={`country-option${c.code === country ? ' country-option--selected' : ''}`}
                                role="option"
                                onClick={() => selectCountry(c.code)}
                              >
                                <span className="flag-emoji">{countryFlag(c.code)}</span>
                                {c.name}
                              </li>
                            ))}
                          </ul>
                          {filteredCountries.length === 0 && (
                            <p className="country-empty">No countries found.</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>

              {/* Platforms */}
              <li className={`filters-item${openSections.platforms ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('platforms')}>
                  Platforms
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.platforms && (
                  <div className="filters-content">
                    {PLATFORM_LABELS.map(label => (
                      <label key={label} className="filters-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedPlatforms.has(label)}
                          onChange={() => togglePlatform(label)}
                        />
                        <span className="filters-checkbox__box"></span>
                        {label}
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Minimum Deposit */}
              <li className={`filters-item${openSections.deposit ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('deposit')}>
                  Minimum Deposit
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.deposit && (
                  <div className="filters-content">
                    <div className="filters-range">
                      <div className="filters-range__values">
                        <span className="filters-range__value">$0</span>
                        <span className="filters-range__value">
                          {maxDeposit >= 500 ? '$500+' : `$${maxDeposit}`}
                        </span>
                      </div>
                      <div className="filters-range__track">
                        <div
                          className="filters-range__fill"
                          style={{ left: 0, right: fillRight }}
                        ></div>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          step="10"
                          value={maxDeposit}
                          onChange={e => {
                            setMaxDeposit(Number(e.target.value))
                            setVisibleCount(PAGE_SIZE)
                          }}
                          className="filters-range__input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Rating */}
              <li className={`filters-item${openSections.rating ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('rating')}>
                  Rating
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.rating && (
                  <div className="filters-content">
                    {[5, 4, 3, 2].map(r => (
                      <label key={r} className="filters-checkbox">
                        <input
                          type="checkbox"
                          checked={minRating === r}
                          onChange={() => toggleRating(r)}
                        />
                        <span className="filters-checkbox__box"></span>
                        {r === 5 ? '5 Stars' : `${r}+ Stars`}
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Deposit Method */}
              <li className={`filters-item${openSections.depositMethod ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('depositMethod')}>
                  Deposit Method
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.depositMethod && (
                  <div className="filters-content">
                    {['Bank Transfer', 'Credit Card', 'Crypto', 'E-Wallet'].map(m => (
                      <label key={m} className="filters-checkbox" style={{ opacity: 0.5 }}>
                        <input type="checkbox" disabled />
                        <span className="filters-checkbox__box"></span>
                        {m}
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Deposit Bonus */}
              <li className={`filters-item${openSections.bonus ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('bonus')}>
                  Deposit Bonus
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.bonus && (
                  <div className="filters-content">
                    {['No Deposit Bonus', 'Welcome Bonus', 'Deposit Match Bonus'].map(b => (
                      <label key={b} className="filters-checkbox" style={{ opacity: 0.5 }}>
                        <input type="checkbox" disabled />
                        <span className="filters-checkbox__box"></span>
                        {b}
                      </label>
                    ))}
                  </div>
                )}
              </li>

            </ul>

            <button type="button" className="filters-panel__reset" onClick={resetFilters}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 12a9 9 0 1 0 3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 4v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Reset filters
            </button>
          </div>
        </aside>

        {/* ── Results ──────────────────────────────────────────────────────── */}
        <div className="search-content">

          <div className="search-results__head">
            <p className="search-results__count">
              Showing{' '}
              <strong>
                {loading ? '…' : `${filtered.length} broker${filtered.length !== 1 ? 's' : ''}`}
              </strong>
            </p>
            <span className="sb-sort-label">Sort by</span>
            <div className={`mini-dropdown${sortOpen ? ' is-open' : ''}`} data-mini-dropdown="">
              <button
                type="button"
                className="sb-sort-toggle mini-dropdown__toggle"
                aria-expanded={sortOpen}
                onClick={() => setSortOpen(o => !o)}
              >
                <span className="mini-dropdown__label">{SORT_LABELS[sortBy]}</span>
                <img src="/assets/images/icon-chevron-down.svg" alt="" />
              </button>
              {sortOpen && (
                <ul className="mini-dropdown__panel">
                  {Object.entries(SORT_LABELS).map(([key, label]) => (
                    <li key={key}>
                      <button
                        type="button"
                        className={`mini-dropdown__option${sortBy === key ? ' is-selected' : ''}`}
                        onClick={() => { setSortBy(key); setSortOpen(false); setVisibleCount(PAGE_SIZE) }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="view-toggle">
              <button type="button" className="is-active" aria-label="Grid view">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
                  <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" />
                  <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" />
                  <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
                </svg>
              </button>
              <button type="button" aria-label="List view">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {chips.length > 0 && (
            <div className="filter-chips">
              {chips.map((chip, i) => (
                <span key={i} className="filter-chip">
                  {chip.label}
                  {chip.onRemove && (
                    <button type="button" aria-label="Remove" onClick={chip.onRemove}>
                      <XIcon />
                    </button>
                  )}
                </span>
              ))}
              {hasActiveFilters && (
                <button type="button" className="filter-chips__clear" onClick={resetFilters}>
                  Clear All
                </button>
              )}
            </div>
          )}

          {loading ? (
            <div className="broker-grid">
              <p style={{ textAlign: 'center', padding: '3rem', color: '#888', gridColumn: '1 / -1' }}>
                Loading brokers…
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="broker-grid">
              <p style={{ textAlign: 'center', padding: '3rem', color: '#888', gridColumn: '1 / -1' }}>
                No brokers found for the selected filters.
              </p>
            </div>
          ) : (
            <div className="broker-grid">
              {visible.map((broker, i) => (
                <BrokerResultCard key={broker.id} broker={broker} featured={i === 0} />
              ))}
            </div>
          )}

          {!loading && visibleCount < filtered.length && (
            <div className="load-more-row">
              <button
                type="button"
                className="load-more-btn"
                onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
              >
                Load More Brokers <img src="/assets/images/icon-chevron-down.svg" alt="" />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
