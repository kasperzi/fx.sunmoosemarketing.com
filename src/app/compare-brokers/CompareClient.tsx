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

// ─── Utils ────────────────────────────────────────────────────────────────────

function getSquareLogo(logos: BrokerLogos): string | null {
  return logos.square_light || logos.square_dark || logos.rectangle_light || logos.rectangle_dark || null
}

function getRectLogo(logos: BrokerLogos): string | null {
  return logos.rectangle_light || logos.square_light || logos.square_dark || logos.rectangle_dark || null
}

function unionTitles(a?: PivotItem[] | null, b?: PivotItem[] | null): string[] {
  return Array.from(new Set([...(a?.map(x => x.title) ?? []), ...(b?.map(x => x.title) ?? [])])).sort()
}

function unionInstruments(a?: Instrument[] | null, b?: Instrument[] | null): string[] {
  return Array.from(new Set([...(a?.map(x => x.instrument) ?? []), ...(b?.map(x => x.instrument) ?? [])])).sort()
}

function unionPayments(a?: PaymentMethod[] | null, b?: PaymentMethod[] | null): string[] {
  return Array.from(new Set([...(a?.map(x => x.method) ?? []), ...(b?.map(x => x.method) ?? [])])).sort()
}

async function loadBrokers(): Promise<BrokerBasic[]> {
  const json = await fetch('/api/brokers?per_page=500&page=1').then(r => r.json())
  return ((json.data ?? json ?? []) as BrokerBasic[]).sort((a, b) => a.name.localeCompare(b.name))
}

async function loadDetail(slug: string): Promise<BrokerDetail | null> {
  try {
    const json = await fetch(`/api/brokers/${slug}`).then(r => r.json())
    return json.data ?? json ?? null
  } catch {
    return null
  }
}

// ─── Shared atoms ─────────────────────────────────────────────────────────────

/** Used in broker card header — uses .star-row styles */
function Stars({ rating }: { rating: number | null }) {
  if (!rating) return <span>—</span>
  return (
    <span className="star-row">
      <img src="/assets/images/icon-star.svg" alt="" />
      <span>{parseFloat(rating.toFixed(1))}/5</span>
    </span>
  )
}

/** Used inside .cmp-cell--value — inherits cell font-size/color, no wrapper */
function RatingCell({ rating }: { rating: number | null }) {
  if (!rating) return <>—</>
  return (
    <>
      <img src="/assets/images/icon-star.svg" alt="" />
      {parseFloat(rating.toFixed(1))}/5
    </>
  )
}

function CheckNode({ val }: { val: boolean }) {
  return (
    <>
      <img
        src={val ? '/assets/images/icon-check-fill-solid.svg' : '/assets/images/rv-icon-negative-outline.svg'}
        alt={val ? 'Yes' : 'No'}
        style={{ width: 24, height: 24 }}
      />{' '}
      {val ? 'Yes' : 'No'}
    </>
  )
}

// ─── Broker dropdown ──────────────────────────────────────────────────────────

interface DropdownProps {
  allBrokers: BrokerBasic[]
  selected: BrokerBasic | null
  placeholder: string
  onSelect: (b: BrokerBasic) => void
  excludeSlug?: string | null
}

function BrokerDropdown({ allBrokers, selected, placeholder, onSelect, excludeSlug }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) { setOpen(false); setSearch('') }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { if (open) inputRef.current?.focus() }, [open])

  const filtered = allBrokers
    .filter(b => b.slug !== excludeSlug)
    .filter(b => !search || b.name.toLowerCase().includes(search.toLowerCase()))

  const logo = selected ? getRectLogo(selected.logos) : null

  return (
    <div className="country-select broker-select" ref={ref}>
      <button
        type="button"
        className="select-row country-toggle broker-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(p => !p)}
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
            <input ref={inputRef} type="text" placeholder="Search broker..." autoComplete="off"
              value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <ul className="country-list broker-list" role="listbox">
            {filtered.map(b => {
              const bLogo = getRectLogo(b.logos)
              return (
                <li key={b.slug}
                  className={`country-option broker-option${selected?.slug === b.slug ? ' country-option--selected' : ''}`}
                  role="option"
                  onClick={() => { onSelect(b); setOpen(false); setSearch('') }}
                >
                  {bLogo && <img src={bLogo} alt="" className="broker-option__logo" />}
                  {b.name}
                </li>
              )
            })}
          </ul>
          {!filtered.length && <p className="country-empty">No brokers found.</p>}
        </div>
      )}
    </div>
  )
}

// ─── Comparison table ─────────────────────────────────────────────────────────

function BrokerColHeader({ state, isFirst }: { state: BrokerState; isFirst: boolean }) {
  const { basic, detail } = state
  // CSS expects 64×64 square logo
  const logo = getSquareLogo(basic.logos)
  const affiliateLink = detail?.affiliate_link || basic.affiliate_link

  return (
    <div className="cmp-broker-col">
      <div className="cmp-broker-card">
        <div className="cmp-broker-card__top">
          {/* logo: CSS controls size (64×64, border-radius 9px) — no inline styles */}
          {logo
            ? <img src={logo} alt={basic.name} />
            : <span className="broker-logo-placeholder broker-logo-placeholder--sm">{basic.name.charAt(0)}</span>
          }
          <div>
            {isFirst && <span className="top10-card__badge">TOP PICK</span>}
            <p className="cmp-broker-card__name">{basic.name}</p>
            <Stars rating={basic.total_rating} />
          </div>
        </div>
      </div>
      <div className="broker-card__ctas">
        {affiliateLink
          ? <a href={affiliateLink} className={`btn ${isFirst ? 'btn--secondary' : 'btn--primary'} btn--block`}
              target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
          : <span />
        }
        <a href={`/broker/${basic.slug}`} className="btn btn--text btn--text--px btn--center">
          Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

function CompareTable({ stateA, stateB }: { stateA: BrokerState; stateB: BrokerState | null }) {
  const dA = stateA.detail
  const dB = stateB?.detail ?? null

  const allPlatforms   = unionTitles(dA?.accounts.platforms, dB?.accounts.platforms)
  const allExecTypes   = unionTitles(dA?.accounts.execution_types, dB?.accounts.execution_types)
  const allCurrencies  = unionTitles(dA?.accounts.currencies, dB?.accounts.currencies)
  const allInstruments = unionInstruments(dA?.instruments, dB?.instruments)
  const allChannels    = unionTitles(dA?.support.channels, dB?.support.channels)
  const allPayments    = unionPayments(dA?.payment_methods, dB?.payment_methods)

  // Render one value cell for a broker
  function cell(state: BrokerState, render: (d: BrokerDetail, b: BrokerBasic) => React.ReactNode, last?: boolean) {
    const content = state.loading
      ? <span style={{ opacity: 0.35 }}>…</span>
      : state.detail ? render(state.detail, state.basic) : '—'
    return <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>{content}</div>
  }

  // Full row: label + broker A cell + broker B cell (or placeholder)
  function row(label: string, renderFn: (d: BrokerDetail, b: BrokerBasic) => React.ReactNode, last?: boolean) {
    return (
      <>
        <div className={`cmp-cell${last ? ' cmp-cell--last' : ''}`}>{label}</div>
        {cell(stateA, renderFn, last)}
        {stateB ? cell(stateB, renderFn, last) : <div className={`cmp-cell cmp-cell--value${last ? ' cmp-cell--last' : ''}`}>—</div>}
      </>
    )
  }

  function boolRow(label: string, fn: (d: BrokerDetail) => boolean, last?: boolean) {
    return row(label, d => <CheckNode val={fn(d)} />, last)
  }

  // Dynamic rows: one row per item in the union list
  function dynRows(
    items: string[],
    hasA: (t: string) => boolean,
    hasB: (t: string) => boolean,
  ) {
    if (!items.length) return null
    return items.map((title, idx) => {
      const last = idx === items.length - 1
      const valA = stateA.loading ? null : dA != null ? hasA(title) : null
      const valB = stateB ? (stateB.loading ? null : dB != null ? hasB(title) : null) : undefined
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

      {/* Header */}
      <div className="cmp-table__head">
        <div className="cmp-table__head-label"><p>Feature</p></div>
        <BrokerColHeader state={stateA} isFirst />
        {stateB
          ? <BrokerColHeader state={stateB} isFirst={false} />
          : (
            <div className="cmp-broker-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: 14, textAlign: 'center', padding: 24, opacity: 0.5 }}>
                Select a second broker above to compare
              </p>
            </div>
          )
        }
      </div>

      {/* Overall */}
      <div className="cmp-row-group">
        <div className="cmp-group__head"><img src="/assets/images/rv-icon-chart-up-group.svg" alt="" /><span>Overall</span></div>
        {row('Overall rating', (_, b) => <RatingCell rating={b.total_rating} />)}
        {row('Founded', d => d.founded_year ? String(d.founded_year) : '—')}
        {row('Min deposit', (d, b) => { const v = d.accounts.min_deposit ?? b.min_deposit; return v != null ? `$${v}` : '—' })}
        {row('Max leverage', d => d.accounts.max_leverage || '—')}
        {boolRow('Accepts US clients', d => d.accounts.accepts_us_clients, true)}
      </div>

      {/* Account features */}
      <div className="cmp-row-group">
        <div className="cmp-group__head"><img src="/assets/images/icon-user.svg" alt="" /><span>Account features</span></div>
        {boolRow('Demo account', d => d.accounts.has_demo_accounts)}
        {boolRow('Islamic account', d => d.accounts.has_islamic_accounts)}
        {boolRow('Swap-free account', d => d.accounts.has_swap_free)}
        {boolRow('Managed accounts', d => d.accounts.has_managed_accounts)}
        {boolRow('Hedging allowed', d => d.accounts.has_hedging)}
        {boolRow('EAs / robots allowed', d => d.accounts.has_eas_allowed)}
        {boolRow('Trailing stop', d => d.accounts.has_trailing_stop, true)}
      </div>

      {/* Fees */}
      <div className="cmp-row-group">
        <div className="cmp-group__head"><img src="/assets/images/rv-icon-coin-group.svg" alt="" /><span>Fees</span></div>
        {row('EUR/USD min spread', (_, b) => b.min_spread != null ? `From ${b.min_spread} pips` : '—', true)}
      </div>

      {/* Platforms (dynamic) */}
      {allPlatforms.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head"><img src="/assets/images/rv-icon-screen-pc-tower.svg" alt="" /><span>Platforms</span></div>
          {dynRows(allPlatforms,
            t => !!dA?.accounts.platforms.some(p => p.title === t),
            t => !!dB?.accounts.platforms.some(p => p.title === t))}
        </div>
      )}

      {/* Execution (dynamic) */}
      {allExecTypes.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head"><img src="/assets/images/icon-arrow-swap-filled.svg" alt="" /><span>Execution</span></div>
          {dynRows(allExecTypes,
            t => !!dA?.accounts.execution_types.some(e => e.title === t),
            t => !!dB?.accounts.execution_types.some(e => e.title === t))}
        </div>
      )}

      {/* Account currencies (dynamic) */}
      {allCurrencies.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head"><img src="/assets/images/rv-icon-coin-group.svg" alt="" /><span>Account currencies</span></div>
          {dynRows(allCurrencies,
            t => !!dA?.accounts.currencies.some(c => c.title === t),
            t => !!dB?.accounts.currencies.some(c => c.title === t))}
        </div>
      )}

      {/* Instruments (dynamic) */}
      {allInstruments.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head"><img src="/assets/images/icon-trading-pattern.svg" alt="" /><span>Instruments</span></div>
          {dynRows(allInstruments,
            t => !!dA?.instruments.some(i => i.instrument === t),
            t => !!dB?.instruments.some(i => i.instrument === t))}
        </div>
      )}

      {/* Regulation */}
      <div className="cmp-row-group">
        <div className="cmp-group__head"><img src="/assets/images/icon-shield-check-outline.svg" alt="" /><span>Regulation &amp; Safety</span></div>
        {boolRow('Regulated', d => d.regulation.is_regulated)}
        {row('Regulators', d => d.regulation.regulators.length ? d.regulation.regulators.map(r => r.title).join(', ') : '—')}
        {boolRow('Negative balance protection', d => d.regulation.has_negative_balance_protection, true)}
      </div>

      {/* Support */}
      <div className="cmp-row-group">
        <div className="cmp-group__head"><img src="/assets/images/rv-icon-language.svg" alt="" /><span>Support</span></div>
        {allChannels.length > 0
          ? <>
              {boolRow('24/7 support', d => d.support.has_24_7_support)}
              {dynRows(allChannels,
                t => !!dA?.support.channels.some(c => c.title === t),
                t => !!dB?.support.channels.some(c => c.title === t))}
            </>
          : boolRow('24/7 support', d => d.support.has_24_7_support, true)
        }
      </div>

      {/* Deposit & Withdrawal (dynamic) */}
      {allPayments.length > 0 && (
        <div className="cmp-row-group">
          <div className="cmp-group__head"><img src="/assets/images/icon-card.svg" alt="" /><span>Deposit &amp; Withdrawal</span></div>
          {dynRows(allPayments,
            t => !!dA?.payment_methods.some(p => p.method === t),
            t => !!dB?.payment_methods.some(p => p.method === t))}
        </div>
      )}

    </div>
  )
}

// ─── Export 1: Selector card (goes INSIDE hero) ───────────────────────────────

export function CompareSelectorCard() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const slugA = searchParams.get('a')
  const slugB = searchParams.get('b')

  const [allBrokers, setAllBrokers] = useState<BrokerBasic[]>([])
  const [loadingList, setLoadingList] = useState(true)
  const [selectedA, setSelectedA] = useState<BrokerBasic | null>(null)
  const [selectedB, setSelectedB] = useState<BrokerBasic | null>(null)

  useEffect(() => {
    loadBrokers().then(brokers => {
      setAllBrokers(brokers)
      setLoadingList(false)
      if (slugA) setSelectedA(brokers.find(b => b.slug === slugA) ?? null)
      if (slugB) setSelectedB(brokers.find(b => b.slug === slugB) ?? null)
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function updateUrl(a: BrokerBasic | null, b: BrokerBasic | null) {
    const p = new URLSearchParams()
    if (a) p.set('a', a.slug)
    if (b) p.set('b', b.slug)
    router.replace(`/compare-brokers${p.toString() ? `?${p}` : ''}`, { scroll: false })
  }

  return (
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
            onSelect={b => setSelectedA(b)}
            excludeSlug={selectedB?.slug}
          />
        </div>
        <div className="cmp-select">
          <label>Select second broker</label>
          <BrokerDropdown
            allBrokers={allBrokers}
            selected={selectedB}
            placeholder={loadingList ? 'Loading brokers…' : 'Search second broker...'}
            onSelect={b => setSelectedB(b)}
            excludeSlug={selectedA?.slug}
          />
        </div>
      </div>
      <div className="cmp-selector-card__submit">
        <button type="button" className="btn btn--secondary"
          onClick={() => updateUrl(selectedA, selectedB)}
          disabled={!selectedA || !selectedB}>
          Compare Brokers
        </button>
      </div>
    </div>
  )
}

// ─── Export 2: Comparison table section (goes OUTSIDE hero) ──────────────────

export function CompareTableSection() {
  const searchParams = useSearchParams()
  const slugA = searchParams.get('a')
  const slugB = searchParams.get('b')

  const [allBrokers, setAllBrokers] = useState<BrokerBasic[]>([])
  const [stateA, setStateA] = useState<BrokerState | null>(null)
  const [stateB, setStateB] = useState<BrokerState | null>(null)

  // Load broker list for basic info (total_rating, min_spread)
  useEffect(() => {
    if (!slugA && !slugB) return
    loadBrokers().then(setAllBrokers)
  }, [!!slugA, !!slugB]) // eslint-disable-line react-hooks/exhaustive-deps

  // Load detail for broker A
  useEffect(() => {
    if (!slugA) { setStateA(null); return }
    const basic = allBrokers.find(b => b.slug === slugA)
    if (!basic && allBrokers.length === 0) return // list not loaded yet
    if (!basic) { setStateA(null); return }
    setStateA({ basic, detail: null, loading: true })
    loadDetail(slugA).then(detail => setStateA({ basic, detail, loading: false }))
  }, [slugA, allBrokers]) // eslint-disable-line react-hooks/exhaustive-deps

  // Load detail for broker B
  useEffect(() => {
    if (!slugB) { setStateB(null); return }
    const basic = allBrokers.find(b => b.slug === slugB)
    if (!basic && allBrokers.length === 0) return
    if (!basic) { setStateB(null); return }
    setStateB({ basic, detail: null, loading: true })
    loadDetail(slugB).then(detail => setStateB({ basic, detail, loading: false }))
  }, [slugB, allBrokers]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!slugA || !stateA) return null

  return (
    <section>
      <div className="section-inner">
        <CompareTable stateA={stateA} stateB={stateB} />
      </div>
    </section>
  )
}
