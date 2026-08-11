'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BrokerLogos {
  square_light: string | null
  rectangle_light: string | null
  square_dark: string | null
  rectangle_dark: string | null
}

interface BrokerBasic {
  id: number
  name: string
  slug: string
  logos: BrokerLogos
  total_rating: number | null
  min_deposit: number | null
  min_spread: number | null
  platforms: string[]
  affiliate_link: string | null
}

interface PivotItem {
  id: number
  title: string
  image_light?: string | null
  image_dark?: string | null
}

interface Instrument {
  id: number
  attribute_item_id: number
  instrument: string
  asset_count?: string | null
  leverage?: string | null
}

interface PaymentMethod {
  id: number
  attribute_item_id: number
  method: string
  for_deposit: boolean
  for_withdrawal: boolean
  deposit_fee?: string | null
  withdrawal_fee?: string | null
  processing_time_deposit?: string | null
  processing_time_withdrawal?: string | null
}

interface BrokerDetail {
  id: number
  name: string
  slug: string
  logos: BrokerLogos
  affiliate_link: string | null
  regulation: {
    is_regulated: boolean
    has_negative_balance_protection: boolean
    regulators: PivotItem[]
  }
  accounts: {
    min_deposit: number | null
    max_leverage: string | null
    has_demo_accounts: boolean
    platforms: PivotItem[]
  }
  instruments: Instrument[]
  payment_methods: PaymentMethod[]
}

interface BrokerState {
  basic: BrokerBasic
  detail: BrokerDetail | null
  loading: boolean
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hasPlatform(platforms: PivotItem[], keyword: string): boolean {
  return platforms.some(p => p.title.toLowerCase().includes(keyword.toLowerCase()))
}

function hasInstrument(instruments: Instrument[], keyword: string): boolean {
  return instruments.some(i => i.instrument.toLowerCase().includes(keyword.toLowerCase()))
}

function hasPayment(methods: PaymentMethod[], keyword: string): boolean {
  return methods.some(m => m.method.toLowerCase().includes(keyword.toLowerCase()))
}

function getBrokerLogo(logos: BrokerLogos): string | null {
  return logos.rectangle_light || logos.square_light || logos.square_dark || logos.rectangle_dark || null
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number | null }) {
  if (!rating) return <span className="star-row"><span>—</span></span>
  const stars: React.ReactNode[] = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<img key={i} src="/assets/images/icon-star.svg" alt="" />)
    } else if (rating >= i - 0.5) {
      stars.push(<img key={i} src="/assets/images/icon-star-half.svg" alt="" />)
    }
  }
  return (
    <span className="star-row">
      {stars}
      <span>{parseFloat(rating.toFixed(1))}/5</span>
    </span>
  )
}

interface BrokerDropdownProps {
  allBrokers: BrokerBasic[]
  selected: BrokerBasic | null
  placeholder: string
  onSelect: (broker: BrokerBasic) => void
  excludeSlug?: string | null
}

function BrokerDropdown({ allBrokers, selected, placeholder, onSelect, excludeSlug }: BrokerDropdownProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  const filtered = allBrokers
    .filter(b => b.slug !== excludeSlug)
    .filter(b => !search || b.name.toLowerCase().includes(search.toLowerCase()))

  const logo = selected ? getBrokerLogo(selected.logos) : null

  return (
    <div className="country-select broker-select" ref={ref}>
      <button
        type="button"
        className="select-row country-toggle broker-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        {logo
          ? <img src={logo} alt={selected!.name} className="broker-toggle__icon" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          : <img src="/assets/images/icon-search.svg" alt="" className="broker-toggle__icon" />
        }
        <span className={`select-value${!selected ? ' broker-toggle__placeholder' : ''}`}>
          {selected ? selected.name : placeholder}
        </span>
        <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 select-chevron" />
      </button>

      {open && (
        <div className="country-dropdown broker-dropdown">
          <div className="country-search">
            <img src="/assets/images/icon-search.svg" alt="" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search broker..."
              autoComplete="off"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <ul className="country-list broker-list" role="listbox">
            {filtered.map(broker => {
              const bLogo = getBrokerLogo(broker.logos)
              return (
                <li
                  key={broker.slug}
                  className={`country-option broker-option${selected?.slug === broker.slug ? ' country-option--selected' : ''}`}
                  role="option"
                  onClick={() => {
                    onSelect(broker)
                    setOpen(false)
                    setSearch('')
                  }}
                >
                  {bLogo && <img src={bLogo} alt="" className="broker-option__logo" />}
                  {broker.name}
                </li>
              )
            })}
          </ul>
          {filtered.length === 0 && <p className="country-empty">No brokers found.</p>}
        </div>
      )}
    </div>
  )
}

// ─── Comparison Table ─────────────────────────────────────────────────────────

function Check() {
  return <img src="/assets/images/icon-check-fill-solid.svg" alt="" style={{ width: 20, height: 20 }} />
}
function Cross() {
  return <img src="/assets/images/rv-icon-negative-outline.svg" alt="" style={{ width: 20, height: 20 }} />
}

function ValCell({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>{children}</div>
}

function BoolCell({ val, yes = 'Yes', no = 'No', last }: { val: boolean | null; yes?: string; no?: string; last?: boolean }) {
  if (val === null) return <ValCell last={last}>—</ValCell>
  return <ValCell last={last}>{val ? <Check /> : <Cross />}{val ? yes : no}</ValCell>
}

interface BrokerColProps {
  state: BrokerState
  isFirst: boolean
}

function BrokerColHeader({ state, isFirst }: BrokerColProps) {
  const { basic, detail } = state
  const logo = getBrokerLogo(basic.logos)
  const affiliateLink = detail?.affiliate_link || basic.affiliate_link

  return (
    <div className="cmp-broker-col">
      <div className="cmp-broker-card">
        <div className="cmp-broker-card__top">
          {logo && (
            <img
              src={logo}
              alt={basic.name}
              style={{ height: 44, maxWidth: 120, objectFit: 'contain' }}
            />
          )}
          <div>
            {isFirst && <span className="top10-card__badge">TOP PICK</span>}
            <p className="cmp-broker-card__name">{basic.name}</p>
            <Stars rating={basic.total_rating} />
          </div>
        </div>
      </div>
      <div className="broker-card__ctas">
        {affiliateLink && (
          <a
            href={affiliateLink}
            className={`btn ${isFirst ? 'btn--secondary' : 'btn--primary'} btn--block`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Visit Broker
          </a>
        )}
        <a href={`/broker/${basic.slug}`} className="btn btn--text btn--text--px btn--center">
          Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

// Render a row for a single broker, or loading/empty placeholder
function brokerCell(
  state: BrokerState,
  render: (detail: BrokerDetail, basic: BrokerBasic) => React.ReactNode,
  last?: boolean,
): React.ReactNode {
  if (state.loading) {
    return <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`} style={{ opacity: 0.4 }}>Loading…</div>
  }
  if (!state.detail) {
    return <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>—</div>
  }
  return render(state.detail, state.basic)
}

interface CompareTableProps {
  stateA: BrokerState
  stateB: BrokerState | null
}

function CompareTable({ stateA, stateB }: CompareTableProps) {
  // Render both broker cells for a row
  const row = (
    renderFn: (detail: BrokerDetail, basic: BrokerBasic) => React.ReactNode,
    last?: boolean,
  ) => (
    <>
      {brokerCell(stateA, renderFn, last)}
      {stateB ? brokerCell(stateB, renderFn, last) : <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>—</div>}
    </>
  )

  return (
    <div className="cmp-table">

      {/* Header row */}
      <div className="cmp-table__head">
        <div className="cmp-table__head-label"><p>Feature</p></div>
        <BrokerColHeader state={stateA} isFirst />
        {stateB
          ? <BrokerColHeader state={stateB} isFirst={false} />
          : (
            <div className="cmp-broker-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
              <p style={{ fontSize: 14, textAlign: 'center', padding: '16px' }}>Select a second broker above</p>
            </div>
          )
        }
      </div>

      {/* Overall */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/rv-icon-chart-up-group.svg" alt="" />
          <span>Overall</span>
        </div>
        <div className="cmp-cell">Overall rating</div>
        {row((_, b) => <ValCell><Stars rating={b.total_rating} /></ValCell>)}
        <div className="cmp-cell">Minimum deposit</div>
        {row((d, b) => {
          const dep = d.accounts.min_deposit ?? b.min_deposit
          return <ValCell>{dep != null ? `$${dep}` : '—'}</ValCell>
        })}
        <div className="cmp-cell">Max leverage</div>
        {row((d) => <ValCell>{d.accounts.max_leverage || '—'}</ValCell>)}
        <div className="cmp-cell cmp-cell--last">Demo account</div>
        {row((d) => <BoolCell val={d.accounts.has_demo_accounts} last />, true)}
      </div>

      {/* Fees */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/rv-icon-coin-group.svg" alt="" />
          <span>Fees</span>
        </div>
        <div className="cmp-cell">EUR/USD spread</div>
        {row((_, b) => <ValCell>{b.min_spread != null ? `From ${b.min_spread} pips` : '—'}</ValCell>)}
        <div className="cmp-cell cmp-cell--last">Inactivity fee</div>
        {row((_, b) => <ValCell last>—</ValCell>, true)}
      </div>

      {/* Platform */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/rv-icon-screen-pc-tower.svg" alt="" />
          <span>Platform</span>
        </div>
        <div className="cmp-cell">MT4</div>
        {row((d) => <BoolCell val={hasPlatform(d.accounts.platforms, 'MT4') || hasPlatform(d.accounts.platforms, 'MetaTrader 4')} />)}
        <div className="cmp-cell">MT5</div>
        {row((d) => <BoolCell val={hasPlatform(d.accounts.platforms, 'MT5') || hasPlatform(d.accounts.platforms, 'MetaTrader 5')} />)}
        <div className="cmp-cell">cTrader</div>
        {row((d) => <BoolCell val={hasPlatform(d.accounts.platforms, 'cTrader')} />)}
        <div className="cmp-cell">TradingView</div>
        {row((d) => <BoolCell val={hasPlatform(d.accounts.platforms, 'TradingView')} />)}
        <div className="cmp-cell cmp-cell--last">Demo account</div>
        {row((d) => <BoolCell val={d.accounts.has_demo_accounts} last />, true)}
      </div>

      {/* Instruments */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/icon-trading-pattern.svg" alt="" />
          <span>Instruments</span>
        </div>
        <div className="cmp-cell">Forex</div>
        {row((d) => <BoolCell val={hasInstrument(d.instruments, 'Forex') || hasInstrument(d.instruments, 'Currency')} />)}
        <div className="cmp-cell">CFDs</div>
        {row((d) => <BoolCell val={hasInstrument(d.instruments, 'CFD')} />)}
        <div className="cmp-cell">Stocks</div>
        {row((d) => <BoolCell val={hasInstrument(d.instruments, 'Stock') || hasInstrument(d.instruments, 'Share') || hasInstrument(d.instruments, 'Equit')} />)}
        <div className="cmp-cell">ETFs</div>
        {row((d) => <BoolCell val={hasInstrument(d.instruments, 'ETF') || hasInstrument(d.instruments, 'Fund')} />)}
        <div className="cmp-cell cmp-cell--last">Crypto</div>
        {row((d) => <BoolCell val={hasInstrument(d.instruments, 'Crypto') || hasInstrument(d.instruments, 'Bitcoin') || hasInstrument(d.instruments, 'Coin')} last />, true)}
      </div>

      {/* Regulation & Safety */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/icon-shield-check-outline.svg" alt="" />
          <span>Regulation &amp; Safety</span>
        </div>
        <div className="cmp-cell">Regulated</div>
        {row((d) => <BoolCell val={d.regulation.is_regulated} />)}
        <div className="cmp-cell">Main regulators</div>
        {row((d) => (
          <ValCell>
            {d.regulation.regulators.length > 0
              ? d.regulation.regulators.map(r => r.title).join(', ')
              : '—'
            }
          </ValCell>
        ))}
        <div className="cmp-cell cmp-cell--last">Negative balance protection</div>
        {row((d) => <BoolCell val={d.regulation.has_negative_balance_protection} last />, true)}
      </div>

      {/* Deposit & Withdrawal */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/icon-card.svg" alt="" />
          <span>Deposit &amp; Withdrawal</span>
        </div>
        <div className="cmp-cell">Bank transfer</div>
        {row((d) => <BoolCell val={hasPayment(d.payment_methods, 'Bank') || hasPayment(d.payment_methods, 'Wire')} />)}
        <div className="cmp-cell">Credit/Debit Card</div>
        {row((d) => <BoolCell val={hasPayment(d.payment_methods, 'Card') || hasPayment(d.payment_methods, 'Visa') || hasPayment(d.payment_methods, 'Master')} />)}
        <div className="cmp-cell">PayPal</div>
        {row((d) => <BoolCell val={hasPayment(d.payment_methods, 'PayPal') || hasPayment(d.payment_methods, 'Paypal')} />)}
        <div className="cmp-cell cmp-cell--last">Skrill / Neteller</div>
        {row((d) => <BoolCell val={hasPayment(d.payment_methods, 'Skrill') || hasPayment(d.payment_methods, 'Neteller') || hasPayment(d.payment_methods, 'Netteler')} last />, true)}
      </div>

    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CompareClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const slugA = searchParams.get('a')
  const slugB = searchParams.get('b')

  const [allBrokers, setAllBrokers] = useState<BrokerBasic[]>([])
  const [loadingList, setLoadingList] = useState(true)

  // Selected basic broker objects (resolved from slugs once list loads)
  const [selectedA, setSelectedA] = useState<BrokerBasic | null>(null)
  const [selectedB, setSelectedB] = useState<BrokerBasic | null>(null)

  // Full comparison states (basic + detail)
  const [stateA, setStateA] = useState<BrokerState | null>(null)
  const [stateB, setStateB] = useState<BrokerState | null>(null)

  // Load all brokers list once
  useEffect(() => {
    fetch('/api/brokers?per_page=500&page=1')
      .then(r => r.json())
      .then(json => {
        const brokers: BrokerBasic[] = (json.data ?? json ?? [])
          .sort((a: BrokerBasic, b: BrokerBasic) => a.name.localeCompare(b.name))
        setAllBrokers(brokers)
        setLoadingList(false)

        // Resolve initial slugs from URL
        if (slugA) {
          const found = brokers.find(b => b.slug === slugA)
          if (found) setSelectedA(found)
        }
        if (slugB) {
          const found = brokers.find(b => b.slug === slugB)
          if (found) setSelectedB(found)
        }
      })
      .catch(() => setLoadingList(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch detail for broker A when selectedA changes
  useEffect(() => {
    if (!selectedA) { setStateA(null); return }
    setStateA({ basic: selectedA, detail: null, loading: true })
    fetch(`/api/brokers/${selectedA.slug}`)
      .then(r => r.json())
      .then(json => {
        const detail: BrokerDetail = json.data ?? json
        setStateA({ basic: selectedA, detail, loading: false })
      })
      .catch(() => setStateA({ basic: selectedA, detail: null, loading: false }))
  }, [selectedA?.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch detail for broker B when selectedB changes
  useEffect(() => {
    if (!selectedB) { setStateB(null); return }
    setStateB({ basic: selectedB, detail: null, loading: true })
    fetch(`/api/brokers/${selectedB.slug}`)
      .then(r => r.json())
      .then(json => {
        const detail: BrokerDetail = json.data ?? json
        setStateB({ basic: selectedB, detail, loading: false })
      })
      .catch(() => setStateB({ basic: selectedB, detail: null, loading: false }))
  }, [selectedB?.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  function updateUrl(a: BrokerBasic | null, b: BrokerBasic | null) {
    const params = new URLSearchParams()
    if (a) params.set('a', a.slug)
    if (b) params.set('b', b.slug)
    const qs = params.toString()
    router.replace(`/compare-brokers${qs ? `?${qs}` : ''}`, { scroll: false })
  }

  function handleSelectA(broker: BrokerBasic) {
    setSelectedA(broker)
    updateUrl(broker, selectedB)
  }

  function handleSelectB(broker: BrokerBasic) {
    setSelectedB(broker)
    updateUrl(selectedA, broker)
  }

  function handleCompare() {
    updateUrl(selectedA, selectedB)
  }

  return (
    <>
      {/* Broker selector card */}
      <div className="cmp-selector-card">
        <div className="cmp-selector-card__head">
          <p>Select Brokers to Compare</p>
          <p className="lead">Choose two brokers below to generate a side-by-side comparison.</p>
        </div>
        <div className="cmp-selector-row">
          <div className="cmp-select">
            <label>Select first broker</label>
            <BrokerDropdown
              allBrokers={loadingList ? [] : allBrokers}
              selected={selectedA}
              placeholder={loadingList ? 'Loading brokers…' : 'Search first broker...'}
              onSelect={handleSelectA}
              excludeSlug={selectedB?.slug}
            />
          </div>
          <div className="cmp-select">
            <label>Select second broker</label>
            <BrokerDropdown
              allBrokers={loadingList ? [] : allBrokers}
              selected={selectedB}
              placeholder={loadingList ? 'Loading brokers…' : 'Search second broker...'}
              onSelect={handleSelectB}
              excludeSlug={selectedA?.slug}
            />
          </div>
        </div>
        <div className="cmp-selector-card__submit">
          <button
            type="button"
            className="btn btn--secondary"
            onClick={handleCompare}
            disabled={!selectedA && !selectedB}
          >
            Compare Brokers
          </button>
        </div>
      </div>

      {/* Comparison table — shown once at least one broker is selected */}
      {stateA && (
        <section style={{ marginTop: 0 }}>
          <div className="section-inner">
            <CompareTable stateA={stateA} stateB={stateB} />
          </div>
        </section>
      )}
    </>
  )
}
