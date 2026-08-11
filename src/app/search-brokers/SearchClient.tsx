'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { resolveCountry, saveCountry } from '@/lib/country'
import type { Broker } from '@/lib/api'

// ─── Country list ─────────────────────────────────────────────────────────────

const COUNTRIES = [
  { code: 'AE', name: 'United Arab Emirates', emoji: '🇦🇪' },
  { code: 'AF', name: 'Afghanistan', emoji: '🇦🇫' },
  { code: 'AL', name: 'Albania', emoji: '🇦🇱' },
  { code: 'AM', name: 'Armenia', emoji: '🇦🇲' },
  { code: 'AO', name: 'Angola', emoji: '🇦🇴' },
  { code: 'AR', name: 'Argentina', emoji: '🇦🇷' },
  { code: 'AT', name: 'Austria', emoji: '🇦🇹' },
  { code: 'AU', name: 'Australia', emoji: '🇦🇺' },
  { code: 'AZ', name: 'Azerbaijan', emoji: '🇦🇿' },
  { code: 'BA', name: 'Bosnia and Herzegovina', emoji: '🇧🇦' },
  { code: 'BD', name: 'Bangladesh', emoji: '🇧🇩' },
  { code: 'BE', name: 'Belgium', emoji: '🇧🇪' },
  { code: 'BF', name: 'Burkina Faso', emoji: '🇧🇫' },
  { code: 'BG', name: 'Bulgaria', emoji: '🇧🇬' },
  { code: 'BH', name: 'Bahrain', emoji: '🇧🇭' },
  { code: 'BJ', name: 'Benin', emoji: '🇧🇯' },
  { code: 'BN', name: 'Brunei', emoji: '🇧🇳' },
  { code: 'BO', name: 'Bolivia', emoji: '🇧🇴' },
  { code: 'BR', name: 'Brazil', emoji: '🇧🇷' },
  { code: 'BW', name: 'Botswana', emoji: '🇧🇼' },
  { code: 'BY', name: 'Belarus', emoji: '🇧🇾' },
  { code: 'CA', name: 'Canada', emoji: '🇨🇦' },
  { code: 'CD', name: 'DR Congo', emoji: '🇨🇩' },
  { code: 'CF', name: 'Central African Republic', emoji: '🇨🇫' },
  { code: 'CG', name: 'Republic of the Congo', emoji: '🇨🇬' },
  { code: 'CH', name: 'Switzerland', emoji: '🇨🇭' },
  { code: 'CI', name: 'Ivory Coast', emoji: '🇨🇮' },
  { code: 'CL', name: 'Chile', emoji: '🇨🇱' },
  { code: 'CM', name: 'Cameroon', emoji: '🇨🇲' },
  { code: 'CN', name: 'China', emoji: '🇨🇳' },
  { code: 'CO', name: 'Colombia', emoji: '🇨🇴' },
  { code: 'CR', name: 'Costa Rica', emoji: '🇨🇷' },
  { code: 'CY', name: 'Cyprus', emoji: '🇨🇾' },
  { code: 'CZ', name: 'Czech Republic', emoji: '🇨🇿' },
  { code: 'DE', name: 'Germany', emoji: '🇩🇪' },
  { code: 'DJ', name: 'Djibouti', emoji: '🇩🇯' },
  { code: 'DK', name: 'Denmark', emoji: '🇩🇰' },
  { code: 'DZ', name: 'Algeria', emoji: '🇩🇿' },
  { code: 'EC', name: 'Ecuador', emoji: '🇪🇨' },
  { code: 'EE', name: 'Estonia', emoji: '🇪🇪' },
  { code: 'EG', name: 'Egypt', emoji: '🇪🇬' },
  { code: 'ER', name: 'Eritrea', emoji: '🇪🇷' },
  { code: 'ES', name: 'Spain', emoji: '🇪🇸' },
  { code: 'ET', name: 'Ethiopia', emoji: '🇪🇹' },
  { code: 'FI', name: 'Finland', emoji: '🇫🇮' },
  { code: 'FR', name: 'France', emoji: '🇫🇷' },
  { code: 'GA', name: 'Gabon', emoji: '🇬🇦' },
  { code: 'GB', name: 'United Kingdom', emoji: '🇬🇧' },
  { code: 'GE', name: 'Georgia', emoji: '🇬🇪' },
  { code: 'GH', name: 'Ghana', emoji: '🇬🇭' },
  { code: 'GM', name: 'Gambia', emoji: '🇬🇲' },
  { code: 'GN', name: 'Guinea', emoji: '🇬🇳' },
  { code: 'GQ', name: 'Equatorial Guinea', emoji: '🇬🇶' },
  { code: 'GR', name: 'Greece', emoji: '🇬🇷' },
  { code: 'GT', name: 'Guatemala', emoji: '🇬🇹' },
  { code: 'GW', name: 'Guinea-Bissau', emoji: '🇬🇼' },
  { code: 'GY', name: 'Guyana', emoji: '🇬🇾' },
  { code: 'HK', name: 'Hong Kong', emoji: '🇭🇰' },
  { code: 'HN', name: 'Honduras', emoji: '🇭🇳' },
  { code: 'HR', name: 'Croatia', emoji: '🇭🇷' },
  { code: 'HT', name: 'Haiti', emoji: '🇭🇹' },
  { code: 'HU', name: 'Hungary', emoji: '🇭🇺' },
  { code: 'ID', name: 'Indonesia', emoji: '🇮🇩' },
  { code: 'IE', name: 'Ireland', emoji: '🇮🇪' },
  { code: 'IL', name: 'Israel', emoji: '🇮🇱' },
  { code: 'IN', name: 'India', emoji: '🇮🇳' },
  { code: 'IQ', name: 'Iraq', emoji: '🇮🇶' },
  { code: 'IR', name: 'Iran', emoji: '🇮🇷' },
  { code: 'IS', name: 'Iceland', emoji: '🇮🇸' },
  { code: 'IT', name: 'Italy', emoji: '🇮🇹' },
  { code: 'JM', name: 'Jamaica', emoji: '🇯🇲' },
  { code: 'JO', name: 'Jordan', emoji: '🇯🇴' },
  { code: 'JP', name: 'Japan', emoji: '🇯🇵' },
  { code: 'KE', name: 'Kenya', emoji: '🇰🇪' },
  { code: 'KG', name: 'Kyrgyzstan', emoji: '🇰🇬' },
  { code: 'KH', name: 'Cambodia', emoji: '🇰🇭' },
  { code: 'KM', name: 'Comoros', emoji: '🇰🇲' },
  { code: 'KR', name: 'South Korea', emoji: '🇰🇷' },
  { code: 'KW', name: 'Kuwait', emoji: '🇰🇼' },
  { code: 'KZ', name: 'Kazakhstan', emoji: '🇰🇿' },
  { code: 'LA', name: 'Laos', emoji: '🇱🇦' },
  { code: 'LB', name: 'Lebanon', emoji: '🇱🇧' },
  { code: 'LK', name: 'Sri Lanka', emoji: '🇱🇰' },
  { code: 'LR', name: 'Liberia', emoji: '🇱🇷' },
  { code: 'LS', name: 'Lesotho', emoji: '🇱🇸' },
  { code: 'LT', name: 'Lithuania', emoji: '🇱🇹' },
  { code: 'LU', name: 'Luxembourg', emoji: '🇱🇺' },
  { code: 'LV', name: 'Latvia', emoji: '🇱🇻' },
  { code: 'LY', name: 'Libya', emoji: '🇱🇾' },
  { code: 'MA', name: 'Morocco', emoji: '🇲🇦' },
  { code: 'MD', name: 'Moldova', emoji: '🇲🇩' },
  { code: 'MG', name: 'Madagascar', emoji: '🇲🇬' },
  { code: 'MK', name: 'North Macedonia', emoji: '🇲🇰' },
  { code: 'ML', name: 'Mali', emoji: '🇲🇱' },
  { code: 'MM', name: 'Myanmar', emoji: '🇲🇲' },
  { code: 'MN', name: 'Mongolia', emoji: '🇲🇳' },
  { code: 'MR', name: 'Mauritania', emoji: '🇲🇷' },
  { code: 'MT', name: 'Malta', emoji: '🇲🇹' },
  { code: 'MU', name: 'Mauritius', emoji: '🇲🇺' },
  { code: 'MV', name: 'Maldives', emoji: '🇲🇻' },
  { code: 'MW', name: 'Malawi', emoji: '🇲🇼' },
  { code: 'MX', name: 'Mexico', emoji: '🇲🇽' },
  { code: 'MY', name: 'Malaysia', emoji: '🇲🇾' },
  { code: 'MZ', name: 'Mozambique', emoji: '🇲🇿' },
  { code: 'NA', name: 'Namibia', emoji: '🇳🇦' },
  { code: 'NE', name: 'Niger', emoji: '🇳🇪' },
  { code: 'NG', name: 'Nigeria', emoji: '🇳🇬' },
  { code: 'NI', name: 'Nicaragua', emoji: '🇳🇮' },
  { code: 'NL', name: 'Netherlands', emoji: '🇳🇱' },
  { code: 'NO', name: 'Norway', emoji: '🇳🇴' },
  { code: 'NP', name: 'Nepal', emoji: '🇳🇵' },
  { code: 'NZ', name: 'New Zealand', emoji: '🇳🇿' },
  { code: 'OM', name: 'Oman', emoji: '🇴🇲' },
  { code: 'PA', name: 'Panama', emoji: '🇵🇦' },
  { code: 'PE', name: 'Peru', emoji: '🇵🇪' },
  { code: 'PG', name: 'Papua New Guinea', emoji: '🇵🇬' },
  { code: 'PH', name: 'Philippines', emoji: '🇵🇭' },
  { code: 'PK', name: 'Pakistan', emoji: '🇵🇰' },
  { code: 'PL', name: 'Poland', emoji: '🇵🇱' },
  { code: 'PT', name: 'Portugal', emoji: '🇵🇹' },
  { code: 'PY', name: 'Paraguay', emoji: '🇵🇾' },
  { code: 'QA', name: 'Qatar', emoji: '🇶🇦' },
  { code: 'RO', name: 'Romania', emoji: '🇷🇴' },
  { code: 'RS', name: 'Serbia', emoji: '🇷🇸' },
  { code: 'RU', name: 'Russia', emoji: '🇷🇺' },
  { code: 'RW', name: 'Rwanda', emoji: '🇷🇼' },
  { code: 'SA', name: 'Saudi Arabia', emoji: '🇸🇦' },
  { code: 'SC', name: 'Seychelles', emoji: '🇸🇨' },
  { code: 'SD', name: 'Sudan', emoji: '🇸🇩' },
  { code: 'SE', name: 'Sweden', emoji: '🇸🇪' },
  { code: 'SG', name: 'Singapore', emoji: '🇸🇬' },
  { code: 'SI', name: 'Slovenia', emoji: '🇸🇮' },
  { code: 'SK', name: 'Slovakia', emoji: '🇸🇰' },
  { code: 'SL', name: 'Sierra Leone', emoji: '🇸🇱' },
  { code: 'SN', name: 'Senegal', emoji: '🇸🇳' },
  { code: 'SO', name: 'Somalia', emoji: '🇸🇴' },
  { code: 'SR', name: 'Suriname', emoji: '🇸🇷' },
  { code: 'SS', name: 'South Sudan', emoji: '🇸🇸' },
  { code: 'SV', name: 'El Salvador', emoji: '🇸🇻' },
  { code: 'SY', name: 'Syria', emoji: '🇸🇾' },
  { code: 'SZ', name: 'Eswatini', emoji: '🇸🇿' },
  { code: 'TD', name: 'Chad', emoji: '🇹🇩' },
  { code: 'TG', name: 'Togo', emoji: '🇹🇬' },
  { code: 'TH', name: 'Thailand', emoji: '🇹🇭' },
  { code: 'TJ', name: 'Tajikistan', emoji: '🇹🇯' },
  { code: 'TL', name: 'Timor-Leste', emoji: '🇹🇱' },
  { code: 'TM', name: 'Turkmenistan', emoji: '🇹🇲' },
  { code: 'TN', name: 'Tunisia', emoji: '🇹🇳' },
  { code: 'TR', name: 'Turkey', emoji: '🇹🇷' },
  { code: 'TT', name: 'Trinidad and Tobago', emoji: '🇹🇹' },
  { code: 'TW', name: 'Taiwan', emoji: '🇹🇼' },
  { code: 'TZ', name: 'Tanzania', emoji: '🇹🇿' },
  { code: 'UA', name: 'Ukraine', emoji: '🇺🇦' },
  { code: 'UG', name: 'Uganda', emoji: '🇺🇬' },
  { code: 'US', name: 'United States', emoji: '🇺🇸' },
  { code: 'UY', name: 'Uruguay', emoji: '🇺🇾' },
  { code: 'UZ', name: 'Uzbekistan', emoji: '🇺🇿' },
  { code: 'VE', name: 'Venezuela', emoji: '🇻🇪' },
  { code: 'VN', name: 'Vietnam', emoji: '🇻🇳' },
  { code: 'YE', name: 'Yemen', emoji: '🇾🇪' },
  { code: 'ZA', name: 'South Africa', emoji: '🇿🇦' },
  { code: 'ZM', name: 'Zambia', emoji: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe', emoji: '🇿🇼' },
].sort((a, b) => a.name.localeCompare(b.name))

function getCountryName(code: string): string {
  return COUNTRIES.find(c => c.code === code)?.name ?? code
}

function getCountryEmoji(code: string): string {
  return COUNTRIES.find(c => c.code === code)?.emoji ?? ''
}

function flagImgUrl(code: string): string {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`
}

// ─── Platform helpers ─────────────────────────────────────────────────────────

function shortenPlatform(p: string): string {
  return p
    .replace(/MetaTrader\s*4/i, 'MT4')
    .replace(/MetaTrader\s*5/i, 'MT5')
    .replace(/MetaTrader/i, 'MT')
}

// ─── Broker card (matches HTML exactly) ──────────────────────────────────────

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

// ─── Main ─────────────────────────────────────────────────────────────────────

const PAGE_SIZE = 12

const SORT_LABELS: Record<string, string> = {
  best_match: 'Best Match',
  lowest_spread: 'Lowest Spread',
  highest_rated: 'Highest Rated',
  most_popular: 'Most Popular',
}

const XBtn = ({ onClick }: { onClick: () => void }) => (
  <button type="button" aria-label="Remove" onClick={onClick}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  </button>
)

export default function SearchClient() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''

  const [country, setCountry] = useState('NL')
  const [brokers, setBrokers] = useState<Broker[]>([])
  const [loading, setLoading] = useState(true)

  // Filters — all empty by default (no pre-checked)
  const [selectedInstruments, setSelectedInstruments] = useState<Set<string>>(new Set())
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(new Set())
  const [selectedDepositMethods, setSelectedDepositMethods] = useState<Set<string>>(new Set())
  const [selectedBonusTypes, setSelectedBonusTypes] = useState<Set<string>>(new Set())
  const [minDeposit, setMinDeposit] = useState(0)
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
  const sortRef = useRef<HTMLDivElement>(null)

  // Accordion state
  const [openSections, setOpenSections] = useState({
    country: true,
    instruments: true,
    platforms: true,
    deposit: true,
    rating: false,
    depositMethod: false,
    bonus: false,
  })

  // ── Load ────────────────────────────────────────────────────────────────────
  useEffect(() => {
    resolveCountry().then(c => {
      setCountry(c)
      fetchBrokers(c)
    })
  }, [])

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

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false)
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false)
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

  function toggleInstrument(label: string) {
    setSelectedInstruments(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
    setVisibleCount(PAGE_SIZE)
  }

  function toggleBonusType(label: string) {
    setSelectedBonusTypes(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
    setVisibleCount(PAGE_SIZE)
  }

  function toggleDepositMethod(label: string) {
    setSelectedDepositMethods(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
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
    setSelectedInstruments(new Set<string>())
    setSelectedPlatforms(new Set<string>())
    setSelectedDepositMethods(new Set<string>())
    setSelectedBonusTypes(new Set<string>())
    setMinDeposit(0)
    setMaxDeposit(500)
    setMinRating(0)
    setVisibleCount(PAGE_SIZE)
    setSortOpen(false)
  }

  function toggleSection(key: keyof typeof openSections) {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // ── Derived instrument + platform lists from API data ────────────────────
  const allInstruments = useMemo(() => {
    const set = new Set<string>()
    brokers.forEach(b => b.instruments?.forEach(i => set.add(i)))
    return Array.from(set).sort()
  }, [brokers])

  const allPlatforms = useMemo(() => {
    const set = new Set<string>()
    brokers.forEach(b => b.platforms?.forEach(p => set.add(p)))
    return Array.from(set).sort()
  }, [brokers])

  const allDepositMethods = useMemo(() => {
    const set = new Set<string>()
    brokers.forEach(b => b.deposit_methods?.forEach(m => set.add(m)))
    return Array.from(set).sort()
  }, [brokers])

  const allBonusTypes = useMemo(() => {
    const set = new Set<string>()
    brokers.forEach(b => b.bonus_types?.forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [brokers])

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

    if (selectedInstruments.size > 0) {
      result = result.filter(b =>
        b.instruments?.some(inst => selectedInstruments.has(inst))
      )
    }

    if (selectedPlatforms.size > 0) {
      result = result.filter(b =>
        b.platforms?.some(p => selectedPlatforms.has(p))
      )
    }

    if (selectedDepositMethods.size > 0) {
      result = result.filter(b =>
        b.deposit_methods?.some(m => selectedDepositMethods.has(m))
      )
    }

    if (selectedBonusTypes.size > 0) {
      result = result.filter(b =>
        b.bonus_types?.some(t => selectedBonusTypes.has(t))
      )
    }

    if (minDeposit > 0 || maxDeposit < 500) {
      result = result.filter(b => {
        const d = b.min_deposit ?? 0
        return d >= minDeposit && (maxDeposit >= 500 || d <= maxDeposit)
      })
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
  }, [brokers, searchQuery, selectedInstruments, selectedPlatforms, selectedDepositMethods, selectedBonusTypes, minDeposit, maxDeposit, minRating, sortBy])

  const visible = filtered.slice(0, visibleCount)

  // ── Chips ────────────────────────────────────────────────────────────────
  const chips: Array<{ label: string; onRemove?: () => void }> = [
    { label: getCountryName(country) },
    ...Array.from(selectedInstruments).map(i => ({ label: i, onRemove: () => toggleInstrument(i) })),
    ...Array.from(selectedPlatforms).map(p => ({ label: p, onRemove: () => togglePlatform(p) })),
    ...Array.from(selectedDepositMethods).map(m => ({ label: m, onRemove: () => toggleDepositMethod(m) })),
    ...Array.from(selectedBonusTypes).map(t => ({ label: t, onRemove: () => toggleBonusType(t) })),
    ...(minRating > 0 ? [{ label: `${minRating}+ Stars`, onRemove: () => setMinRating(0) }] : []),
    ...(minDeposit > 0 ? [{ label: `Min $${minDeposit}`, onRemove: () => setMinDeposit(0) }] : []),
    ...(maxDeposit < 500 ? [{ label: `Max $${maxDeposit}`, onRemove: () => setMaxDeposit(500) }] : []),
  ]

  const hasActiveFilters = selectedInstruments.size > 0 || selectedPlatforms.size > 0 || selectedDepositMethods.size > 0 || selectedBonusTypes.size > 0 || minRating > 0 || minDeposit > 0 || maxDeposit < 500

  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  )

  // Deposit range — same logic as script.js
  const minPct = (minDeposit / 500) * 100
  const maxPct = (maxDeposit / 500) * 100

  return (
    <section>
      <div className="section-inner section-inner--row">

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
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
                        <img
                          src={flagImgUrl(country)}
                          alt={getCountryName(country)}
                          className="flag"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                        />
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
                                data-flag={c.emoji}
                                data-name={c.name}
                              >
                                <span className="flag-emoji">{c.emoji}</span>
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

              {/* Instruments — dynamic from API */}
              <li className={`filters-item${openSections.instruments ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('instruments')}>
                  Instruments
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.instruments && (
                  <div className="filters-content" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {allInstruments.length === 0 && !loading && (
                      <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>No instruments found.</p>
                    )}
                    {allInstruments.map(item => (
                      <label key={item} className="filters-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedInstruments.has(item)}
                          onChange={() => toggleInstrument(item)}
                        />
                        <span className="filters-checkbox__box"></span>
                        {item}
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Platforms — dynamic from API */}
              <li className={`filters-item${openSections.platforms ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('platforms')}>
                  Platforms
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.platforms && (
                  <div className="filters-content" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {allPlatforms.length === 0 && !loading && (
                      <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>No platforms found.</p>
                    )}
                    {allPlatforms.map(label => (
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
                        <span className="filters-range__value" style={{ left: `${minPct}%` }}>
                          ${minDeposit}
                        </span>
                        <span className="filters-range__value" style={{ left: `${maxPct}%` }}>
                          ${maxDeposit}+
                        </span>
                      </div>
                      <div className="filters-range__track">
                        <div
                          className="filters-range__fill"
                          style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }}
                        ></div>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          step="10"
                          value={minDeposit}
                          onChange={e => {
                            const v = Number(e.target.value)
                            setMinDeposit(Math.min(v, maxDeposit - 10))
                            setVisibleCount(PAGE_SIZE)
                          }}
                          className="filters-range__input"
                        />
                        <input
                          type="range"
                          min="0"
                          max="500"
                          step="10"
                          value={maxDeposit}
                          onChange={e => {
                            const v = Number(e.target.value)
                            setMaxDeposit(Math.max(v, minDeposit + 10))
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

              {/* Deposit Method — dynamic from API */}
              <li className={`filters-item${openSections.depositMethod ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('depositMethod')}>
                  Deposit Method
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.depositMethod && (
                  <div className="filters-content" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {allDepositMethods.length === 0 && !loading && (
                      <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>No deposit methods found.</p>
                    )}
                    {allDepositMethods.map(m => (
                      <label key={m} className="filters-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedDepositMethods.has(m)}
                          onChange={() => toggleDepositMethod(m)}
                        />
                        <span className="filters-checkbox__box"></span>
                        {m}
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Deposit Bonus — dynamic from API */}
              <li className={`filters-item${openSections.bonus ? ' is-open' : ''}`}>
                <button type="button" className="filters-row" onClick={() => toggleSection('bonus')}>
                  Deposit Bonus
                  <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" />
                </button>
                {openSections.bonus && (
                  <div className="filters-content" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {allBonusTypes.length === 0 && !loading && (
                      <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>No bonuses found.</p>
                    )}
                    {allBonusTypes.map(t => (
                      <label key={t} className="filters-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedBonusTypes.has(t)}
                          onChange={() => toggleBonusType(t)}
                        />
                        <span className="filters-checkbox__box"></span>
                        {t}
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
                {loading ? '…' : `${Math.min(visibleCount, filtered.length)} of ${filtered.length} broker${filtered.length !== 1 ? 's' : ''}`}
              </strong>
            </p>
            <span className="sb-sort-label">Sort by</span>
            <div className="mini-dropdown" data-mini-dropdown="" ref={sortRef}>
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

          <div className="filter-chips">
            {chips.map((chip, i) => (
              <span key={i} className="filter-chip">
                {chip.label}
                {chip.onRemove && <XBtn onClick={chip.onRemove} />}
              </span>
            ))}
            {hasActiveFilters && (
              <button type="button" className="filter-chips__clear" onClick={resetFilters}>
                Clear All
              </button>
            )}
          </div>

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
