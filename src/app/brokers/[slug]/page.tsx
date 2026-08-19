import React from 'react'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'
import { detectServerCountry } from '@/lib/detect-country.server'
import BrokerCountryPanel from '@/components/BrokerCountryPanel'
import BrokerAvailabilityBadge from '@/components/BrokerAvailabilityBadge'
import { countryName, flagUrl as sharedFlagUrl } from '@/lib/countries'

export const dynamic = 'force-dynamic'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BrokerLogos { square_light: string|null; square_dark: string|null; rectangle_light: string|null; rectangle_dark: string|null }
interface Regulator   { title?: string; name?: string; country_code?: string; country?: string; note?: string }
interface PlatformItem { title?: string; name?: string }
interface AccountType  { account_type?: string; name?: string; spread?: number|string|null; commission?: string|null }
interface PaymentMethod {
  method?: string; name?: string; logo_url?: string|null; attribute_item_id?: number
  for_deposit: boolean; for_withdrawal: boolean
  deposit_fee?: string|null; withdrawal_fee?: string|null
  processing_time_deposit?: string|null; processing_time_withdrawal?: string|null
  countries?: string[]
}
interface Promotion {
  id: number; bonus_type?: string|null; bonus_amount?: string|null
  description?: string|null; is_global: boolean; countries: string[]
}
interface BrokerCountries { available: string[]; restricted: string[] }
interface BrokerData {
  id: number; name: string; slug: string; brand_color?: string|null
  logos: BrokerLogos
  regulation: { is_regulated: boolean; has_negative_balance_protection: boolean; regulators: Regulator[] }
  accounts: { min_deposit?: number|null; max_leverage?: string|null; platforms: PlatformItem[]; account_types: AccountType[]; has_demo_accounts?: boolean }
  instruments: ({ instrument?: string; title?: string; name?: string })[]
  support: { has_24_7_support: boolean; channels: ({ title?: string })[] }
  pros_cons: { pros?: (string|{text:string})[]; cons?: (string|{text:string})[] }
  payment_methods: PaymentMethod[]
  promotions: Promotion[]
  countries: BrokerCountries|null
  content: { description?: string|null; short_description?: string|null; seo_title?: string|null; seo_meta_description?: string|null }
  affiliate_link?: string|null
}
interface Review {
  written_by?: string|null; reviewed_by?: string|null; updated_label?: string|null
  rating?: number|null; review_count?: number|null
  taglines?: string[]
  summary_text?: string|null; verdict?: string|null
  faqs?: { q: string; a: string }[]
}
interface RelatedBroker {
  id: number; name: string; slug: string; logos: BrokerLogos
  total_rating?: number|null; min_deposit?: number|null; min_spread?: number|null
  platforms?: string[]; promotion?: { bonus_type?: string|null } | null
  affiliate_link?: string|null; users_count?: number|null
}

// ─── Fetch helpers ────────────────────────────────────────────────────────────

const BMS_URL = (process.env.BMS_API_URL ?? '').replace(/\/$/, '')
const BMS_KEY = process.env.BMS_API_KEY ?? ''

async function fetchBroker(slug: string, country: string): Promise<BrokerData|null> {
  try {
    const res = await fetch(
      `${BMS_URL}/api/v1/brokers/${slug}?country=${country}`,
      { headers: { 'X-Api-Key': BMS_KEY }, cache: 'no-store' }
    )
    if (!res.ok) return null
    const json = await res.json()
    return json.data ?? null
  } catch { return null }
}

async function fetchReview(brokerSlug: string): Promise<Review|null> {
  try {
    const res = await fetch(
      `${BMS_URL}/api/v1/broker-reviews/by-broker/${brokerSlug}`,
      { headers: { 'X-Api-Key': BMS_KEY }, cache: 'no-store' }
    )
    if (!res.ok) return null
    const json = await res.json()
    return json.data ?? null
  } catch { return null }
}

async function fetchRelatedBrokers(excludeSlug: string, country: string): Promise<RelatedBroker[]> {
  try {
    const res = await fetch(
      `${BMS_URL}/api/v1/brokers?per_page=8&country=${country}`,
      { headers: { 'X-Api-Key': BMS_KEY }, cache: 'no-store' }
    )
    if (!res.ok) return []
    const json = await res.json()
    const all: RelatedBroker[] = json.data ?? []
    return all.filter((b) => b.slug !== excludeSlug).slice(0, 6)
  } catch { return [] }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function bmsUrl(path: string|null|undefined): string|null {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${BMS_URL}${path.startsWith('/') ? path : '/' + path}`
}

function buildStars(rating: number): ('full'|'half'|'empty')[] {
  const stars: ('full'|'half'|'empty')[] = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push('full')
    else if (rating >= i - 0.5) stars.push('half')
    else stars.push('empty')
  }
  return stars
}

function Stars({ rating }: { rating: number }) {
  return (
    <>
      {buildStars(rating).map((type, i) => (
        <img
          key={i}
          src={type === 'half' ? '/assets/images/icon-star-half.svg' : '/assets/images/icon-star.svg'}
          alt=""
          style={type === 'empty' ? { opacity: 0.25 } : undefined}
        />
      ))}
    </>
  )
}

function extractText(v: string|{text:string}): string {
  return typeof v === 'string' ? v : (v?.text ?? '')
}

// countryName, flagUrl, COUNTRY_NAMES are imported from @/lib/countries
function flagUrl(code: string): string { return sharedFlagUrl(code) }

function getCountryStatus(countries: BrokerCountries|null, code: string): 'available'|'restricted'|'unknown' {
  if (!countries) return 'unknown'
  const cc = code.toUpperCase()
  const restricted = (countries.restricted ?? []).map(c => c.toUpperCase())
  if (restricted.includes(cc)) return 'restricted'
  return 'available'
}

function getActivePromotions(promotions: Promotion[], country: string): Promotion[] {
  return promotions.filter((p) =>
    p.is_global || (Array.isArray(p.countries) && p.countries.map(c => c.toUpperCase()).includes(country.toUpperCase()))
  )
}

const TABS = [
  { href: '#overview',           icon: '/assets/images/rv-icon-home-outline.svg',        label: 'Overview' },
  { href: '#pros-cons',          icon: '/assets/images/rv-icon-like-outline.svg',         label: 'Pros & Cons' },
  { href: '#fees',               icon: '/assets/images/rv-icon-coin-group.svg',           label: 'Fees' },
  { href: '#regulation',         icon: '/assets/images/rv-icon-shield-check-line.svg',    label: 'Regulation' },
  { href: '#platforms',          icon: '/assets/images/rv-icon-monitor-outline.svg',      label: 'Platforms' },
  { href: '#deposit-withdrawal', icon: '/assets/images/icon-card-outline.svg',            label: 'Deposit & Withdrawal' },
  { href: '#countries',          icon: '/assets/images/rv-icon-language.svg',             label: 'Countries' },
  { href: '#faq',                icon: '/assets/images/rv-icon-question-line-group.svg',  label: 'FAQ' },
]

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const broker = await fetchBroker(slug, 'NL')
  if (!broker) return { title: 'Broker Not Found — FX Look Up' }
  const review = await fetchReview(slug)
  return {
    title:       review?.summary_text ? `${broker.name} Review 2026 — FX Look Up` : `${broker.name} — FX Look Up`,
    description: broker.content?.seo_meta_description ?? broker.content?.short_description ?? `In-depth ${broker.name} review: fees, regulation, platforms, and more.`,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BrokerReviewPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  // Detect country — same priority as layout + client-side:
  // 1. Manual cookie preference (user picked explicitly)
  // 2. Cloudflare IP detection (cf-ipcountry via detectServerCountry)
  // 3. Fallback 'NL'
  const cookieStore = await cookies()
  const manual = cookieStore.get('fx_country_pref')?.value?.toUpperCase()
  const ipCountry = /^[A-Z]{2}$/.test(manual ?? '') ? null : await detectServerCountry()
  const country = /^[A-Z]{2}$/.test(manual ?? '') ? manual! : (ipCountry ?? 'NL')

  const [broker, review, related] = await Promise.all([
    fetchBroker(slug, country),
    fetchReview(slug),
    fetchRelatedBrokers(slug, country),
  ])

  if (!broker) notFound()

  // ── Derived values ──────────────────────────────────────────────────────────
  const rating        = review?.rating ?? broker.total_rating ?? null
  const reviewCount   = review?.review_count ?? null
  const writtenBy     = review?.written_by  ?? 'FX Look Up Editorial Team'
  const reviewedBy    = review?.reviewed_by ?? 'Broker Research Team'
  const updatedLabel  = review?.updated_label ?? null
  const taglines      = review?.taglines ?? []
  const summaryText   = review?.summary_text ?? broker.content?.short_description ?? broker.content?.description ?? null
  const verdict       = review?.verdict ?? null
  const faqs          = review?.faqs ?? []

  const pros         = (broker.pros_cons?.pros ?? []).map(extractText)
  const cons         = (broker.pros_cons?.cons ?? []).map(extractText)
  const platforms    = (broker.accounts?.platforms ?? []).map((p) => p.title ?? p.name ?? '')
  const regulators   = broker.regulation?.regulators ?? []
  const accountTypes = broker.accounts?.account_types ?? []
  const payMethods   = broker.payment_methods ?? []
  const promos       = getActivePromotions(broker.promotions ?? [], country)
  const countryStatus = getCountryStatus(broker.countries ?? null, country)
  const affiliateLink = broker.affiliate_link ?? '#'

  const minSpread = accountTypes.length > 0
    ? Math.min(...accountTypes.map((at) => Number(at.spread ?? 99)).filter((n) => n < 99))
    : null

  const minCommission = accountTypes.find((at) => at.commission)?.commission ?? null

  const logoUrl = bmsUrl(broker.logos?.square_light ?? broker.logos?.square_dark)

  // ── Key facts ───────────────────────────────────────────────────────────────
  const keyFacts = [
    { icon: 'rv-icon-wallet-outline.svg',      label: 'Min. Deposit',  value: broker.accounts?.min_deposit != null ? `$${broker.accounts.min_deposit}` : 'N/A' },
    { icon: 'rv-icon-shield-check-line.svg',   label: 'Regulations',   value: regulators.slice(0, 4).map((r) => r.title ?? r.name ?? '').filter(Boolean).join(', ') || 'N/A' },
    { icon: 'rv-icon-screen-pc-tower.svg',     label: 'Platforms',     value: platforms.slice(0, 4).join(', ') || 'N/A' },
    { icon: 'rv-icon-chart-up-group.svg',      label: 'Max Leverage',  value: broker.accounts?.max_leverage ?? 'N/A' },
    { icon: 'icon-trading-pattern.svg',        label: 'Instruments',   value: (broker.instruments ?? []).slice(0, 3).map((i) => i.instrument ?? i.title ?? i.name ?? '').filter(Boolean).join(', ') || 'N/A' },
    { icon: 'rv-icon-coin-group.svg',          label: 'Spread From',   value: minSpread != null && minSpread < 99 ? `${minSpread} pips` : 'N/A' },
    { icon: 'rv-icon-arrow-down-up.svg',       label: 'Commission',    value: minCommission != null ? `$${minCommission}` : '$0' },
    { icon: 'rv-icon-users-outline-group.svg', label: 'Demo Account',  value: broker.accounts?.has_demo_accounts ? 'Available' : 'N/A' },
  ] as { icon: string; label: string; value: string }[]

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="hero hero--flush">
        <div className="hero__border">
          <div className="hero__bg" aria-hidden="true">
            <img src="/assets/images/hero-best-broker-bg.png" alt="" />
            <div className="hero__bg-gradient" />
          </div>
          <Nav />
          <div className="hero__main hero__main--search">
            <div className="bb-hero__title-block">
              <div className="breadcrumb">
                <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
                <span>Home</span>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span>Broker Reviews</span>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">{broker.name} Review</span>
              </div>
              <h1>{broker.name} Broker Review 2026</h1>
            </div>
            <div className="bb-byline">
              <div className="bb-byline__item">
                <span className="icon-btn"><img src="/assets/images/icon-user-outline.svg" alt="" /></span>
                <div className="bb-byline__text">
                  <span className="bb-byline__label">Written By</span>
                  <span className="bb-byline__value">{writtenBy}</span>
                </div>
              </div>
              <div className="bb-byline__item">
                <span className="icon-btn"><img src="/assets/images/icon-shield-check-outline.svg" alt="" /></span>
                <div className="bb-byline__text">
                  <span className="bb-byline__label">Reviewed By</span>
                  <span className="bb-byline__value">{reviewedBy}</span>
                </div>
              </div>
              {updatedLabel && (
                <div className="bb-byline__item">
                  <span className="icon-btn"><img src="/assets/images/icon-calendar.svg" alt="" /></span>
                  <div className="bb-byline__text">
                    <span className="bb-byline__label">Updated:</span>
                    <span className="bb-byline__value">{updatedLabel}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ──────────────────────────────────────────────────────────────── */}
      <nav className="rv-tabs">
        {TABS.map((t, i) => (
          <a key={t.href} href={t.href} className={`rv-tabs__link${i === 0 ? ' is-active' : ''}`}>
            <img src={t.icon} alt="" />{t.label}
          </a>
        ))}
      </nav>

      {/* ── ARTICLE ───────────────────────────────────────────────────────────── */}
      <section className="rv-article">
        <div className="section-inner" style={{ gap: 0 }}>
          <div className="rv-article__layout">

            {/* ── MAIN ──────────────────────────────────────────────────────── */}
            <div className="rv-article__main">

              {/* Quick badges */}
              {(broker.regulation.is_regulated || platforms.length > 0) && (
                <div className="rv-quick-badges">
                  {broker.regulation.is_regulated && (
                    <div className="rv-quick-badge">
                      <span className="rv-quick-badge__icon"><img src="/assets/images/rv-icon-shield-check-line.svg" alt="" /></span>
                      Regulated Broker
                    </div>
                  )}
                  {minSpread != null && minSpread < 1 && (
                    <div className="rv-quick-badge">
                      <span className="rv-quick-badge__icon"><img src="/assets/images/rv-icon-coin-group.svg" alt="" /></span>
                      Low Spread Broker
                    </div>
                  )}
                  {platforms.length > 0 && (
                    <div className="rv-quick-badge">
                      <span className="rv-quick-badge__icon"><img src="/assets/images/rv-icon-chart-up-group.svg" alt="" /></span>
                      {platforms[0]}
                    </div>
                  )}
                </div>
              )}

              {/* ── OVERVIEW ────────────────────────────────────────────────── */}
              <div className="rv-block" id="overview">
                <h2>{broker.name} Overview</h2>
                <p className="lead">A quick verdict on {broker.name}&rsquo;s rating, availability, and key review details.</p>

                <div className="rv-score-card">
                  <div className="rv-score-card__side">
                    {logoUrl
                      ? <img src={logoUrl} alt={broker.name} className="rv-score-card__logo" />
                      : <span style={{ fontWeight: 700, fontSize: 20 }}>{broker.name}</span>
                    }
                    {rating != null && (
                      <>
                        <p className="rv-score-card__value">{rating.toFixed(1)}/5</p>
                        <p className="rv-score-card__stars"><Stars rating={rating} /></p>
                        {reviewCount != null && (
                          <p className="rv-score-card__reviews">Based on {reviewCount.toLocaleString()}+ user reviews</p>
                        )}
                      </>
                    )}
                  </div>
                  <div className="rv-score-card__body">
                    <div className="rv-score-card__pills">
                      {taglines.map((t) => (
                        <span key={t} className="rv-pill">
                          <img src="/assets/images/rv-icon-star-alt.svg" alt="" />{t}
                        </span>
                      ))}
                      <span className="rv-pill">
                        <BrokerAvailabilityBadge
                          initialCountry={country}
                          brokerCountries={broker.countries ?? null}
                          imgStyle={{ width: 20, height: 15, objectFit: 'cover' }}
                        />
                      </span>
                    </div>
                    {summaryText && <p className="lead">{summaryText}</p>}
                    <div className="rv-score-card__chips">
                      {broker.regulation.is_regulated && (
                        <span className="rv-chip">
                          <span className="rv-chip__icon"><img src="/assets/images/icon-shield-check-outline.svg" alt="" /></span>
                          Regulated Broker
                        </span>
                      )}
                      {minSpread != null && minSpread < 1 && (
                        <span className="rv-chip">
                          <span className="rv-chip__icon"><img src="/assets/images/icon-card-outline.svg" alt="" /></span>
                          Low Spread
                        </span>
                      )}
                      {platforms.slice(0, 2).map((p) => (
                        <span key={p} className="rv-chip">
                          <span className="rv-chip__icon"><img src="/assets/images/rv-icon-chart-up-group.svg" alt="" /></span>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <h3>Key Facts</h3>
                <div className="rv-facts-grid">
                  {keyFacts.map((f) => (
                    <div key={f.label} className="rv-fact-card">
                      <span className="rv-fact-card__icon"><img src={`/assets/images/${f.icon}`} alt="" /></span>
                      <p className="rv-fact-card__label">{f.label}</p>
                      <p className="rv-fact-card__value">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── PROS & CONS ─────────────────────────────────────────────── */}
              <div className="rv-block" id="pros-cons">
                <h2>{broker.name} Pros &amp; Cons</h2>
                <p className="lead">A quick look at where {broker.name} performs well and where traders may want to compare alternatives.</p>

                <div className="rv-proscons-toggle">
                  <button type="button" className="rv-proscons-toggle__btn is-active" data-proscons-target="pros">Pros</button>
                  <button type="button" className="rv-proscons-toggle__btn" data-proscons-target="cons">Cons</button>
                </div>

                <div className="rv-panel">
                  <div className="rv-proscons">
                    <div className="rv-proscons__col is-active" data-proscons-panel="pros">
                      <p className="rv-proscons__heading">Pros</p>
                      <ul className="rv-proscons__list">
                        {pros.length > 0
                          ? pros.map((t) => (
                              <li key={t}><img src="/assets/images/icon-check-fill.svg" alt="" />{t}</li>
                            ))
                          : <li><img src="/assets/images/icon-check-fill.svg" alt="" />Regulated and trusted broker</li>
                        }
                      </ul>
                    </div>
                    <div className="rv-proscons__col rv-proscons__col--cons" data-proscons-panel="cons">
                      <p className="rv-proscons__heading">Cons</p>
                      <ul className="rv-proscons__list">
                        {cons.map((t) => (
                          <li key={t}><img src="/assets/images/rv-icon-negative-outline.svg" alt="" />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {verdict && (
                    <div className="rv-callout">
                      <span className="icon-btn"><img src="/assets/images/rv-icon-info-outline.svg" alt="" /></span>
                      <div className="rv-callout__text">
                        <p className="rv-callout__title">Quick Verdict</p>
                        <p className="lead">{verdict}</p>
                      </div>
                    </div>
                  )}

                  <div className="rv-cta-row">
                    <a href={affiliateLink} className="btn btn--secondary rv-cta-row__desktop" target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
                    <a href="/compare-brokers" className="btn btn--text btn--text--px rv-cta-row__desktop">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                    <a href={affiliateLink} className="btn btn--secondary rv-cta-row__mobile" target="_blank" rel="noopener noreferrer nofollow">Find Your Broker</a>
                    <a href="/compare-brokers" className="btn btn--text rv-cta-row__mobile">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                  </div>
                </div>
              </div>

              {/* ── FEES ────────────────────────────────────────────────────── */}
              <div className="rv-block" id="fees">
                <h2>{broker.name} Fees &amp; Trading Costs</h2>
                <p className="lead">Review {broker.name}&rsquo;s key trading fees, spreads, commissions, and non-trading costs before opening an account.</p>

                <div className="rv-facts-grid rv-facts-grid--3 rv-cta-row__desktop">
                  {[
                    { icon: 'rv-icon-arrow-down-up.svg', label: 'Spread From',  value: minSpread != null && minSpread < 99 ? `${minSpread} pips` : 'N/A' },
                    { icon: 'rv-icon-coin-group.svg',    label: 'Commission',   value: minCommission ?? '$0' },
                    { icon: 'icon-card-outline.svg',     label: 'Min. Deposit', value: broker.accounts.min_deposit != null ? `$${broker.accounts.min_deposit}` : 'N/A' },
                  ].map((f) => (
                    <div key={f.label} className="rv-fact-card rv-fact-card--row">
                      <span className="rv-fact-card__icon"><img src={`/assets/images/${f.icon}`} alt="" /></span>
                      <div>
                        <p className="rv-fact-card__label">{f.label}</p>
                        <p className="rv-fact-card__value">{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {(() => {
                  const depositFeeVal  = payMethods.filter(pm => pm.for_deposit).some(pm => pm.deposit_fee && pm.deposit_fee !== '0') ? 'Varies' : '$0'
                  const withdrawFeeVal = payMethods.filter(pm => pm.for_withdrawal).some(pm => pm.withdrawal_fee && pm.withdrawal_fee !== '0') ? 'Varies' : '$0'
                  const feeRows = [
                    { icon: 'rv-icon-currency-exchange-group.svg', label: 'EUR/USD Spread', value: minSpread != null && minSpread < 99 ? `From ${minSpread} pips` : 'N/A' },
                    { icon: 'rv-icon-coin-group.svg',               label: 'Commission',     value: minCommission != null ? `From $${minCommission}` : '$0' },
                    { icon: 'icon-card-outline.svg',                label: 'Min. Deposit',   value: broker.accounts?.min_deposit != null ? `$${broker.accounts.min_deposit}` : 'N/A' },
                    { icon: 'rv-icon-money-deposit.svg',            label: 'Deposit Fee',    value: depositFeeVal },
                    { icon: 'rv-icon-money-withdraw.svg',           label: 'Withdrawal Fee', value: withdrawFeeVal },
                  ]
                  return (
                    <div className="rv-fee-table">
                      <p className="rv-fee-table__head rv-fee-table__head--type">Fee Type</p>
                      <p className="rv-fee-table__head rv-fee-table__head--value">
                        <span className="rv-fee-table__head-full">{broker.name} Cost</span>
                        <span className="rv-fee-table__head-short">Cost</span>
                      </p>
                      <p className="rv-fee-table__head rv-fee-table__head--note" />
                      {feeRows.map((row, i) => {
                        const last = i === feeRows.length - 1
                        return (
                          <React.Fragment key={row.label}>
                            <div className={`rv-fee-table__cell rv-fee-table__cell--type${last ? ' rv-fee-table__cell--last' : ''}`}>
                              <img src={`/assets/images/${row.icon}`} alt="" /><span>{row.label}</span>
                            </div>
                            <div className={`rv-fee-table__cell rv-fee-table__cell--value${last ? ' rv-fee-table__cell--last' : ''}`}>
                              <span>{row.value}</span>
                            </div>
                            <div className={`rv-fee-table__cell rv-fee-table__cell--note${last ? ' rv-fee-table__cell--last' : ''}`} />
                          </React.Fragment>
                        )
                      })}
                    </div>
                  )
                })()}

                {summaryText && (
                  <div className="rv-callout">
                    <span className="icon-btn"><img src="/assets/images/rv-icon-info-outline.svg" alt="" /></span>
                    <div className="rv-callout__text">
                      <p className="rv-callout__title">Fee Takeaway</p>
                      <p className="lead">{summaryText}</p>
                    </div>
                  </div>
                )}

                <div className="rv-cta-row">
                  <a href={affiliateLink} className="btn btn--secondary rv-cta-row__desktop" target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
                  <a href="/compare-brokers" className="btn btn--text btn--text--px rv-cta-row__desktop">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                  <a href={affiliateLink} className="btn btn--secondary rv-cta-row__mobile" target="_blank" rel="noopener noreferrer nofollow">Find Your Broker</a>
                  <a href="/compare-brokers" className="btn btn--text rv-cta-row__mobile">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
              </div>

              {/* ── REGULATION ──────────────────────────────────────────────── */}
              <div className="rv-block" id="regulation">
                <h2>Is {broker.name} Safe and Regulated?</h2>
                <p className="lead">Review {broker.name}&rsquo;s regulatory licenses, investor protection details, and trust signals before choosing a broker.</p>

                <div className="rv-callout rv-callout--lg">
                  <span className="icon-btn icon-btn--lg"><img src="/assets/images/rv-icon-shield-check-line-big.svg" alt="" /></span>
                  <div className="rv-callout__text">
                    <p className="rv-callout__title rv-callout__title--lg">
                      {broker.regulation.is_regulated
                        ? `Trust verdict: regulated by ${regulators.length > 1 ? 'multiple authorities' : regulators[0]?.title ?? regulators[0]?.name ?? 'a financial authority'}`
                        : 'Trust verdict: check regulation details carefully'
                      }
                    </p>
                    {summaryText && <p className="lead">{summaryText}</p>}
                  </div>
                </div>

                {regulators.length > 0 && (
                  <div className="rv-facts-grid">
                    {regulators.map((r) => (
                      <div key={r.title ?? r.name} className="rv-reg-card">
                        <span className="rv-fact-card__icon"><img src="/assets/images/rv-icon-shield-check-line.svg" alt="" /></span>
                        <div>
                          <p className="rv-reg-card__name">{r.title ?? r.name}</p>
                          <p className="rv-reg-card__country">{r.country ?? r.country_code ?? ''}</p>
                          {r.note && <p className="rv-reg-card__note">{r.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="rv-panel">
                  <p className="rv-proscons__heading rv-proscons__heading--safety">What we check for safety</p>
                  <div className="rv-proscons rv-proscons--safety">
                    <div className="rv-proscons__col">
                      <ul className="rv-proscons__list">
                        {[
                          broker.regulation.is_regulated && `Regulated by ${regulators[0]?.title ?? regulators[0]?.name ?? 'a financial authority'}`,
                          broker.regulation.has_negative_balance_protection && 'Negative balance protection',
                          broker.accounts?.has_demo_accounts && 'Demo account available',
                        ].filter(Boolean).map((t) => (
                          <li key={String(t)}><img src="/assets/images/icon-check-fill.svg" alt="" />{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rv-proscons__col">
                      <ul className="rv-proscons__list">
                        {regulators.slice(1).map((r) => (
                          <li key={r.title ?? r.name}><img src="/assets/images/icon-check-fill.svg" alt="" />Licensed by {r.title ?? r.name} ({r.country ?? r.country_code})</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── PLATFORMS ───────────────────────────────────────────────── */}
              <div className="rv-block" id="platforms">
                <h2>{broker.name} Trading Platforms</h2>
                <p className="lead">{broker.name} supports {platforms.length > 0 ? platforms.join(', ') : 'various'} trading platforms, giving traders access to forex, CFDs, charts, indicators, and order management tools.</p>

                {platforms.length > 0 && (
                  <div className="rv-platform-row">
                    {platforms.map((p) => (
                      <div key={p} className="rv-platform-card">
                        <p className="rv-platform-card__name">{p}</p>
                        <p className="rv-platform-card__desc">Trading Platform</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ── DEPOSIT & WITHDRAWAL ────────────────────────────────────── */}
              <div className="rv-block" id="deposit-withdrawal">
                <h2>{broker.name} Deposit &amp; Withdrawal</h2>
                <p className="lead">Review the available payment methods, fees, and processing times. Availability may vary by country and broker entity.</p>

                <div className="rv-panel">
                  {payMethods.length > 0 ? (
                    <div className="rv-pay-grid">
                      {payMethods.map((pm, i) => {
                        const pmLogo = bmsUrl(pm.logo_url)
                        return (
                          <div key={i} className="rv-pay-card">
                            <div className="rv-pay-card__head">
                              <span className="rv-pay-card__logo">
                                {pmLogo
                                  ? <img src={pmLogo} alt="" />
                                  : <img src="/assets/images/icon-card-outline.svg" alt="" />
                                }
                              </span>
                              <p className="rv-pay-card__name">{pm.method ?? pm.name}</p>
                            </div>
                            <div className="rv-pay-card__cols">
                              {pm.for_deposit && (
                                <div className="rv-pay-card__col">
                                  <p className="rv-pay-card__label">Deposit</p>
                                  <p className="rv-pay-card__meta">Fee: <strong>{pm.deposit_fee && pm.deposit_fee !== '0' ? `$${pm.deposit_fee}` : '$0'}</strong></p>
                                  {pm.processing_time_deposit && (
                                    <>
                                      <p className="rv-pay-card__meta">Processing Time:</p>
                                      <p className="rv-pay-card__meta rv-pay-card__meta--strong">{pm.processing_time_deposit}</p>
                                    </>
                                  )}
                                </div>
                              )}
                              {pm.for_withdrawal && (
                                <div className="rv-pay-card__col">
                                  <p className="rv-pay-card__label">Withdrawal</p>
                                  <p className="rv-pay-card__meta">Fee: <strong>{pm.withdrawal_fee && pm.withdrawal_fee !== '0' ? `$${pm.withdrawal_fee}` : '$0'}</strong></p>
                                  {pm.processing_time_withdrawal && (
                                    <>
                                      <p className="rv-pay-card__meta">Processing Time:</p>
                                      <p className="rv-pay-card__meta rv-pay-card__meta--strong">{pm.processing_time_withdrawal}</p>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="lead text-center py-3">Payment method details not available. Visit the broker&rsquo;s website for the latest information.</p>
                  )}
                </div>
              </div>

              {/* Video placeholder */}
              <div className="rv-video"><img src="/assets/images/rv-video-placeholder.png" alt="" /></div>

              {/* ── COUNTRIES & PROMOTIONS ──────────────────────────────────── */}
              <div className="rv-block" id="countries">
                <h2>{broker.name} Countries &amp; Promotions</h2>
                <p className="lead">Check whether {broker.name} is available in your country and review any country-specific promotions, restrictions, or account notes.</p>

                <BrokerCountryPanel
                  initialCountry={country}
                  brokerCountries={broker.countries ?? null}
                  promotions={broker.promotions ?? []}
                />
              </div>

              {/* ── FAQ ─────────────────────────────────────────────────────── */}
              <div className="rv-block" id="faq">
                <h2>{broker.name} Frequently Asked Questions</h2>
                <p className="lead">Find quick answers about {broker.name}&rsquo;s fees, safety, platforms, deposits, withdrawals, and country availability.</p>

                {faqs.length > 0 && (
                  <div className="faq-grid rv-faq-grid">
                    <div className="faq-col">
                      {faqs.map((faq, i) => (
                        <div key={i} className={`faq-item${i === 0 ? ' is-open' : ''}`}>
                          <button type="button" className="faq-question">
                            {faq.q}<img src="/assets/images/rv-icon-chevron-down-filled.svg" alt="" />
                          </button>
                          <div className="faq-answer"><p className="lead">{faq.a}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <a href="/compare-brokers" className="btn btn--text btn--text--px">Compare {broker.name} with other brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
              </div>

            </div>{/* /rv-article__main */}

            {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
            <aside className="rv-article__sidebar">
              <div className="rv-side-card">
                <div className="rv-side-card__head">
                  {logoUrl
                    ? <img src={logoUrl} alt={broker.name} className="rv-side-card__logo" />
                    : null
                  }
                  <p className="rv-side-card__name">{broker.name}</p>
                </div>
                {rating != null && (
                  <p className="rv-side-card__stars">
                    <Stars rating={rating} />
                    <span>{rating.toFixed(1)}/5</span>
                  </p>
                )}
                <p className="rv-side-card__flag">
                  <BrokerAvailabilityBadge
                    initialCountry={country}
                    brokerCountries={broker.countries ?? null}
                    imgStyle={{ width: 20, height: 15, objectFit: 'cover' }}
                  />
                </p>
                <a href={affiliateLink} className="btn btn--secondary btn--block" target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
                <a href="/compare-brokers" className="btn btn--text btn--text--px btn--center">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
              </div>

              <nav className="rv-side-card rv-onpage">
                <p className="rv-onpage__title">On this page</p>
                {TABS.map((t, i) => (
                  <a key={t.href} href={t.href} className={`rv-onpage__link${i === 0 ? ' is-active' : ''}`}>
                    <img src={t.icon} alt="" />{t.label}
                  </a>
                ))}
              </nav>
            </aside>

          </div>
        </div>
      </section>

      {/* ── RELATED BROKERS ───────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section section--brokers">
          <div className="section-inner">
            <div className="section-head section-head--split">
              <div className="section-head__copy">
                <p className="eyebrow">RELATED BROKERS</p>
                <h2>Others Also Viewed These Brokers</h2>
                <p className="lead">Explore similar forex brokers that traders compare with {broker.name}</p>
              </div>
              <div className="section-head__nav">
                <button type="button" className="carousel-btn carousel-btn--prev" aria-label="Previous"><img src="/assets/images/icon-chevron-right-1.svg" alt="" /></button>
                <button type="button" className="carousel-btn carousel-btn--next" aria-label="Next"><img src="/assets/images/icon-chevron-right-2.svg" alt="" /></button>
                <a href="/" className="btn btn--text btn--text--px">View All Brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
            </div>

            <div className="broker-grid">
              {related.slice(0, 3).map((b) => {
                const bLogo = bmsUrl(b.logos?.square_light ?? b.logos?.square_dark)
                const bRating = b.total_rating != null ? Math.round(b.total_rating * 10) / 10 : null
                const bMinDeposit = b.min_deposit != null ? `$${b.min_deposit}` : '—'
                const bMinSpread = b.min_spread != null ? `${b.min_spread} pips` : '—'
                return (
                  <article key={b.id} className="broker-card">
                    <div className="broker-card__head">
                      {bLogo
                        ? <img src={bLogo} alt={b.name} className="broker-logo" loading="lazy" />
                        : <span className="broker-logo-placeholder">{b.name.charAt(0)}</span>
                      }
                      <div>
                        <p className="broker-name">{b.name}</p>
                        {bRating != null && (
                          <span className="rating-badge">
                            <img src="/assets/images/icon-star.svg" alt="" />{bRating}/5
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="availability-badge">
                      <img src="/assets/images/icon-check-circle.svg" alt="" />Available in your country
                    </div>

                    <ul className="broker-facts">
                      {b.users_count != null && (
                        <li>
                          <img src="/assets/images/icon-users.svg" alt="" />{b.users_count.toLocaleString('en-US')} users
                        </li>
                      )}
                      <li>
                        <img src="/assets/images/icon-swap.svg" alt="" />
                        <span>Min. spread</span>
                        <strong>{bMinSpread}</strong>
                      </li>
                      <li>
                        <img src="/assets/images/icon-card.svg" alt="" />
                        <span>Min. deposit</span>
                        <strong>{bMinDeposit}</strong>
                      </li>
                      {(b.platforms?.length ?? 0) > 0 && (
                        <li className="broker-facts__platform">
                          <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                          <div className="tag-row">
                            {(b.platforms ?? []).map((p: string) => <span key={p} className="tag">{p}</span>)}
                          </div>
                        </li>
                      )}
                      {b.promotion?.bonus_type && (
                        <li>
                          <img src="/assets/images/icon-gift-light.svg" alt="" />
                          <span>Bonus</span>
                          <strong>{b.promotion.bonus_type}</strong>
                        </li>
                      )}
                    </ul>

                    <div className="broker-card__ctas">
                      {b.affiliate_link && (
                        <a href={b.affiliate_link} className="btn btn--primary btn--block" target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
                      )}
                      <a href={`/brokers/${b.slug}`} className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER CTA ────────────────────────────────────────────────────── */}
      <section className="section section--blogs">
        <div className="section-bg-decor" aria-hidden="true">
          <img src="/assets/images/blogs-bg.png" alt="" />
          <div className="section-bg-decor__fade" />
        </div>
        <div className="section-inner">
          <div className="cta">
            <img src="/assets/images/cta-bg.png" alt="" className="cta__bg" />
            <div className="cta__content">
              <p className="eyebrow">STAY UPDATED</p>
              <h2>Get the latest forex news, broker updates, and trading insights</h2>
              <p className="lead">Join our newsletter for broker updates, trading insights, and market trends delivered straight to your inbox.</p>
            </div>
            <form className="subscribe">
              <div className="subscribe__field">
                <img src="/assets/images/icon-email.svg" alt="" />
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn btn--secondary subscribe__submit--desktop">Sign Up Now</button>
              </div>
              <button type="submit" className="subscribe__submit--mobile">Sign Up Now</button>
              <p className="subscribe__note"><img src="/assets/images/icon-shield.svg" alt="" />We respect your privacy. Unsubscribe at any time</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
