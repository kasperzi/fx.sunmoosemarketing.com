'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
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
  processing_time_deposit?: string | null
  processing_time_withdrawal?: string | null
}

interface BrokerDetail {
  id: number
  name: string
  slug: string
  logos: BrokerLogos
  affiliate_link: string | null
  founded_year: number | null
  regulation: {
    is_regulated: boolean
    has_negative_balance_protection: boolean
    regulators: PivotItem[]
  }
  accounts: {
    min_deposit: number | null
    max_leverage: string | null
    has_demo_accounts: boolean
    has_islamic_accounts: boolean
    has_swap_free: boolean
    has_managed_accounts: boolean
    has_hedging: boolean
    has_eas_allowed: boolean
    has_trailing_stop: boolean
    accepts_us_clients: boolean
    platforms: PivotItem[]
    execution_types: PivotItem[]
    currencies: PivotItem[]
  }
  support: {
    has_24_7_support: boolean
    channels: PivotItem[]
    languages: PivotItem[]
  }
  instruments: Instrument[]
  payment_methods: PaymentMethod[]
}

interface BrokerState {
  basic: BrokerBasic
  detail: BrokerDetail | null
  loading: boolean
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function getBrokerLogo(logos: BrokerLogos): string | null {
  return logos.rectangle_light || logos.square_light || logos.square_dark || logos.rectangle_dark || null
}

function unionTitles(
  a: PivotItem[] | undefined | null,
  b: PivotItem[] | undefined | null,
): string[] {
  const set = new Set([
    ...(a?.map(x => x.title) ?? []),
    ...(b?.map(x => x.title) ?? []),
  ])
  return Array.from(set).sort()
}

function unionInstruments(
  a: Instrument[] | undefined | null,
  b: Instrument[] | undefined | null,
): string[] {
  const set = new Set([
    ...(a?.map(x => x.instrument) ?? []),
    ...(b?.map(x => x.instrument) ?? []),
  ])
  return Array.from(set).sort()
}

function unionPayments(
  a: PaymentMethod[] | undefined | null,
  b: PaymentMethod[] | undefined | null,
): string[] {
  const set = new Set([
    ...(a?.map(x => x.method) ?? []),
    ...(b?.map(x => x.method) ?? []),
  ])
  return Array.from(set).sort()
}

// ─── Atom components ──────────────────────────────────────────────────────────

function CheckNode({ val }: { val: boolean }) {
  return (
    <>
      <img
        src={val ? '/assets/images/icon-check-fill-solid.svg' : '/assets/images/rv-icon-negative-outline.svg'}
        alt={val ? 'Yes' : 'No'}
        style={{ width: 20, height: 20 }}
      />{' '}
      {val ? 'Yes' : 'No'}
    </>
  )
}

function Stars({ rating }: { rating: number | null }) {
  if (!rating) return <span>—</span>
  const stars: React.ReactNode[] = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<img key={i} src="/assets/images/icon-star.svg" alt="" />)
    else if (rating >= i - 0.5) stars.push(<img key={i} src="/assets/images/icon-star-half.svg" alt="" />)
  }
  return <span className="star-row">{stars}<span>{parseFloat(rating.toFixed(1))}/5</span></span>
}

// ─── Broker column header ─────────────────────────────────────────────────────

function BrokerColHeader({ state, isFirst }: { state: BrokerState; isFirst: boolean }) {
  const { basic, detail } = state
  const logo = getBrokerLogo(basic.logos)
  const affiliateLink = detail?.affiliate_link || basic.affiliate_link

  return (
    <div className="cmp-broker-col">
      <div className="cmp-broker-card">
        <div className="cmp-broker-card__top">
          {logo && (
            <img src={logo} alt={basic.name} style={{ height: 44, maxWidth: 120, objectFit: 'contain' }} />
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

// ─── Comparison table ─────────────────────────────────────────────────────────

function CompareTable({ stateA, stateB }: { stateA: BrokerState; stateB: BrokerState | null }) {
  const dA = stateA.detail
  const dB = stateB?.detail ?? null

  const allPlatforms   = unionTitles(dA?.accounts.platforms, dB?.accounts.platforms)
  const allExecTypes   = unionTitles(dA?.accounts.execution_types, dB?.accounts.execution_types)
  const allCurrencies  = unionTitles(dA?.accounts.currencies, dB?.accounts.currencies)
  const allInstruments = unionInstruments(dA?.instruments, dB?.instruments)
  const allChannels    = unionTitles(dA?.support.channels, dB?.support.channels)
  const allPayments    = unionPayments(dA?.payment_methods, dB?.payment_methods)

  // Render value cell for one broker
  function cell(
    state: BrokerState,
    render: (d: BrokerDetail, basic: BrokerBasic) => React.ReactNode,
    last?: boolean,
  ): React.ReactElement {
    let content: React.ReactNode
    if (state.loading) content = <span style={{ opacity: 0.35 }}>…</span>
    else if (!state.detail) content = '—'
    else content = render(state.detail, state.basic)
    return <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>{content}</div>
  }

  // Render a full row (label + 2 value cells)
  function row(
    label: string,
    renderFn: (d: BrokerDetail, basic: BrokerBasic) => React.ReactNode,
    last?: boolean,
  ): React.ReactElement {
    return (
      <>
        <div className={`cmp-cell${last ? ' cmp-cell--last' : ''}`}>{label}</div>
        {cell(stateA, renderFn, last)}
        {stateB
          ? cell(stateB, renderFn, last)
          : <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>—</div>
        }
      </>
    )
  }

  // Bool row shorthand
  function boolRow(label: string, getVal: (d: BrokerDetail) => boolean, last?: boolean) {
    return row(label, (d) => <CheckNode val={getVal(d)} />, last)
  }

  // Dynamic rows from a union list — check/cross for each broker
  function dynamicRows(
    items: string[],
    hasA: (title: string) => boolean,
    hasB: (title: string) => boolean,
  ): React.ReactNode {
    if (!items.length) return null
    return items.map((title, idx) => {
      const last = idx === items.length - 1
      const valA = stateA.loading ? null : (dA != null ? hasA(title) : null)
      const valB = stateB
        ? (stateB.loading ? null : (dB != null ? hasB(title) : null))
        : undefined // stateB not selected at all

      return (
        <Fragment key={title}>
          <div className={`cmp-cell${last ? ' cmp-cell--last' : ''}`}>{title}</div>
          <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>
            {valA === null ? <span style={{ opacity: 0.35 }}>…</span> : <CheckNode val={valA} />}
          </div>
          <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>
            {valB === undefined ? '—' : valB === null ? <span style={{ opacity: 0.35 }}>…</span> : <CheckNode val={valB} />}
          </div>
        </Fragment>
      )
    })
  }

  return (
    <div className="cmp-table">

      {/* Broker header cards */}
      <div className="cmp-table__head">
        <div className="cmp-table__head-label"><p>Feature</p></div>
        <BrokerColHeader state={stateA} isFirst />
        {stateB
          ? <BrokerColHeader state={stateB} isFirst={false} />
          : (
            <div className="cmp-broker-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: 14, textAlign: 'center', padding: '24px 16px', opacity: 0.5 }}>
                Select a second broker above to compare
              </p>
            </div>
          )
        }
      </div>

      {/* ── Overall ── */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/rv-icon-chart-up-group.svg" alt="" />
          <span>Overall</span>
        </div>
        {row('Overall rating', (_, b) => <Stars rating={b.total_rating} />)}
        {row('Founded', (d) => d.founded_year ? String(d.founded_year) : '—')}
        {row('Min deposit', (d, b) => {
          const dep = d.accounts.min_deposit ?? b.min_deposit
          return dep != null ? `$${dep}` : '—'
        })}
        {row('Max leverage', (d) => d.accounts.max_leverage || '—')}
        {boolRow('Accepts US clients', (d) => d.accounts.accepts_us_clients, true)}
      </div>

      {/* ── Account features ── */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/icon-user.svg" alt="" />
          <span>Account features</span>
        </div>
        {boolRow('Demo account', (d) => d.accounts.has_demo_accounts)}
        {boolRow('Islamic account', (d) => d.accounts.has_islamic_accounts)}
        {boolRow('Swap-free account', (d) => d.accounts.has_swap_free)}
        {boolRow('Managed accounts', (d) => d.accounts.has_managed_accounts)}
        {boolRow('Hedging allowed', (d) => d.accounts.has_hedging)}
        {boolRow('EAs / robots allowed', (d) => d.accounts.has_eas_allowed)}
        {boolRow('Trailing stop', (d) => d.accounts.has_trailing_stop, true)}
      </div>

      {/* ── Fees ── */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/rv-icon-coin-group.svg" alt="" />
          <span>Fees</span>
        </div>
        {row('EUR/USD min spread', (_, b) => b.min_spread != null ? `From ${b.min_spread} pips` : '—', true)}
      </div>

      {/* ── Platforms — dynamic ── */}
      {allPlatforms.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head">
            <img src="/assets/images/rv-icon-screen-pc-tower.svg" alt="" />
            <span>Platforms</span>
          </div>
          {dynamicRows(
            allPlatforms,
            (t) => !!dA?.accounts.platforms.some(p => p.title === t),
            (t) => !!dB?.accounts.platforms.some(p => p.title === t),
          )}
        </div>
      )}

      {/* ── Execution types — dynamic ── */}
      {allExecTypes.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head">
            <img src="/assets/images/icon-arrow-swap-filled.svg" alt="" />
            <span>Execution</span>
          </div>
          {dynamicRows(
            allExecTypes,
            (t) => !!dA?.accounts.execution_types.some(e => e.title === t),
            (t) => !!dB?.accounts.execution_types.some(e => e.title === t),
          )}
        </div>
      )}

      {/* ── Account currencies — dynamic ── */}
      {allCurrencies.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head">
            <img src="/assets/images/rv-icon-coin-group.svg" alt="" />
            <span>Account currencies</span>
          </div>
          {dynamicRows(
            allCurrencies,
            (t) => !!dA?.accounts.currencies.some(c => c.title === t),
            (t) => !!dB?.accounts.currencies.some(c => c.title === t),
          )}
        </div>
      )}

      {/* ── Instruments — dynamic ── */}
      {allInstruments.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head">
            <img src="/assets/images/icon-trading-pattern.svg" alt="" />
            <span>Instruments</span>
          </div>
          {dynamicRows(
            allInstruments,
            (t) => !!dA?.instruments.some(i => i.instrument === t),
            (t) => !!dB?.instruments.some(i => i.instrument === t),
          )}
        </div>
      )}

      {/* ── Regulation & Safety ── */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/icon-shield-check-outline.svg" alt="" />
          <span>Regulation &amp; Safety</span>
        </div>
        {boolRow('Regulated', (d) => d.regulation.is_regulated)}
        {row('Regulators', (d) => {
          const regs = d.regulation.regulators
          return regs.length > 0 ? regs.map(r => r.title).join(', ') : '—'
        })}
        {boolRow('Negative balance protection', (d) => d.regulation.has_negative_balance_protection, true)}
      </div>

      {/* ── Support ── */}
      <div className="cmp-row-group">
        <div className="cmp-group__head">
          <img src="/assets/images/rv-icon-language.svg" alt="" />
          <span>Support</span>
        </div>
        {allChannels.length > 0
          ? (
            <>
              {boolRow('24/7 support', (d) => d.support.has_24_7_support)}
              {dynamicRows(
                allChannels,
                (t) => !!dA?.support.channels.some(c => c.title === t),
                (t) => !!dB?.support.channels.some(c => c.title === t),
              )}
            </>
          )
          : boolRow('24/7 support', (d) => d.support.has_24_7_support, true)
        }
      </div>

      {/* ── Deposit & Withdrawal — dynamic ── */}
      {allPayments.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head">
            <img src="/assets/images/icon-card.svg" alt="" />
            <span>Deposit &amp; Withdrawal</span>
          </div>
          {dynamicRows(
            allPayments,
            (t) => !!dA?.payment_methods.some(p => p.method === t),
            (t) => !!dB?.payment_methods.some(p => p.method === t),
          )}
        </div>
      )}

    </div>
  )
}

// ─── Broker dropdown ──────────────────────────────────────────────────────────

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
                  onClick={() => { onSelect(broker); setOpen(false); setSearch('') }}
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function CompareClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const slugA = searchParams.get('a')
  const slugB = searchParams.get('b')

  const [allBrokers, setAllBrokers] = useState<BrokerBasic[]>([])
  const [loadingList, setLoadingList] = useState(true)
  const [selectedA, setSelectedA] = useState<BrokerBasic | null>(null)
  const [selectedB, setSelectedB] = useState<BrokerBasic | null>(null)
  const [stateA, setStateA] = useState<BrokerState | null>(null)
  const [stateB, setStateB] = useState<BrokerState | null>(null)

  // Load broker list once on mount
  useEffect(() => {
    fetch('/api/brokers?per_page=500&page=1')
      .then(r => r.json())
      .then(json => {
        const brokers: BrokerBasic[] = (json.data ?? json ?? [])
          .sort((a: BrokerBasic, b: BrokerBasic) => a.name.localeCompare(b.name))
        setAllBrokers(brokers)
        setLoadingList(false)
        if (slugA) { const f = brokers.find(b => b.slug === slugA); if (f) setSelectedA(f) }
        if (slugB) { const f = brokers.find(b => b.slug === slugB); if (f) setSelectedB(f) }
      })
      .catch(() => setLoadingList(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch broker detail when selection changes
  useEffect(() => {
    if (!selectedA) { setStateA(null); return }
    setStateA({ basic: selectedA, detail: null, loading: true })
    fetch(`/api/brokers/${selectedA.slug}`)
      .then(r => r.json())
      .then(json => setStateA({ basic: selectedA, detail: json.data ?? json, loading: false }))
      .catch(() => setStateA({ basic: selectedA, detail: null, loading: false }))
  }, [selectedA?.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!selectedB) { setStateB(null); return }
    setStateB({ basic: selectedB, detail: null, loading: true })
    fetch(`/api/brokers/${selectedB.slug}`)
      .then(r => r.json())
      .then(json => setStateB({ basic: selectedB, detail: json.data ?? json, loading: false }))
      .catch(() => setStateB({ basic: selectedB, detail: null, loading: false }))
  }, [selectedB?.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  function updateUrl(a: BrokerBasic | null, b: BrokerBasic | null) {
    const params = new URLSearchParams()
    if (a) params.set('a', a.slug)
    if (b) params.set('b', b.slug)
    const qs = params.toString()
    router.replace(`/compare-brokers${qs ? `?${qs}` : ''}`, { scroll: false })
  }

  function handleSelectA(broker: BrokerBasic) { setSelectedA(broker); updateUrl(broker, selectedB) }
  function handleSelectB(broker: BrokerBasic) { setSelectedB(broker); updateUrl(selectedA, broker) }

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
              allBrokers={allBrokers}
              selected={selectedA}
              placeholder={loadingList ? 'Loading brokers…' : 'Search first broker...'}
              onSelect={handleSelectA}
              excludeSlug={selectedB?.slug}
            />
          </div>
          <div className="cmp-select">
            <label>Select second broker</label>
            <BrokerDropdown
              allBrokers={allBrokers}
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
            onClick={() => updateUrl(selectedA, selectedB)}
            disabled={!selectedA && !selectedB}
          >
            Compare Brokers
          </button>
        </div>
      </div>

      {/* Comparison table — shown once at least one broker is selected */}
      {stateA && (
        <section>
          <div className="section-inner">
            <CompareTable stateA={stateA} stateB={stateB} />
          </div>
        </section>
      )}
    </>
  )
}
