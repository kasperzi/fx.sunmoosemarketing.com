import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import VideoLightbox from '@/components/VideoLightbox'
import ComparisonTable from '@/components/ComparisonTable'

export const dynamic = 'force-dynamic'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CollectionItem {
  sort_order:                       number
  tagline:                          string | null
  blurb:                            string | null
  broker_id:                        number
  name:                             string
  slug:                             string
  brand_color:                      string | null
  logos: {
    square_light:    string | null
    square_dark:     string | null
    rectangle_light: string | null
    rectangle_dark:  string | null
  }
  min_deposit:                      number | null
  max_leverage:                     string | null
  is_regulated:                     boolean
  has_negative_balance_protection:  boolean
  total_rating:                     number | null
  affiliate_link:                   string | null
}

interface ContentBlock {
  id:   string
  type: string
  data: Record<string, unknown>
}

interface CollectionContent {
  title:          string | null
  h1:             string | null
  intro:          string | null
  article_body:   string | null
  content_blocks: ContentBlock[]
  methodology:    string | null
  faq:            Array<{ question: string; answer: string }> | null
  language_code:  string
  is_ai_generated: boolean
  author:         { id: number; name: string; email: string } | null
}

interface Collection {
  slug:    string
  content: CollectionContent
  items:   CollectionItem[]
}

// ─── Data fetching ────────────────────────────────────────────────────────────

async function fetchCollection(slug: string): Promise<Collection | null> {
  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY

  if (!BMS_API_URL || !BMS_API_KEY) return null

  try {
    const res = await fetch(`${BMS_API_URL}/api/v1/collections/${slug}`, {
      headers: { 'X-Api-Key': BMS_API_KEY },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const json = await res.json()
    return json?.data ?? null
  } catch {
    return null
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const collection = await fetchCollection(slug)
  const title = collection?.content?.title ?? 'Best Broker — FX Look Up'
  return {
    title,
    description: collection?.content?.intro?.slice(0, 160) ?? '',
  }
}

// ─── Block renderer ───────────────────────────────────────────────────────────

const BROKER_TABLE_COLUMNS: Record<string, string> = {
  total_rating:                    'Rating',
  min_deposit:                     'Min Deposit',
  max_leverage:                    'Max Leverage',
  platforms:                       'Platforms',
  min_spread:                      'Min Spread',
  is_regulated:                    'Regulated',
  has_negative_balance_protection: 'Neg. Balance',
}

const BMS_BASE = (process.env.BMS_API_URL ?? '').replace(/\/$/, '')

function bmsUrl(path: string | null | undefined): string | null {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${BMS_BASE}${path.startsWith('/') ? path : '/' + path}`
}

/** Logo with initials fallback — applies the given className for sizing/border-radius */
function BrokerLogo({ name, logoUrl, className }: { name: string; logoUrl?: string | null; className: string }) {
  const url = bmsUrl(logoUrl ?? null)
  if (url) {
    return <img src={url} alt={name} className={className} style={{ objectFit: 'contain' }} />
  }
  const initials = name.split(/\s+/).slice(0, 2).map((w) => w[0] ?? '').join('').toUpperCase()
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: `hsl(${hue}, 55%, 45%)`, color: '#fff',
        fontWeight: 700, fontSize: '0.65em', flexShrink: 0,
      }}
    >
      {initials}
    </span>
  )
}

/** Same logo helper but for CollectionItem (uses .logos object) */
function BrokerLogoImg({ item, className = '' }: { item: CollectionItem; className?: string }) {
  return <BrokerLogo name={item.name} logoUrl={item.logos?.rectangle_light ?? item.logos?.square_light} className={className} />
}

function getBrokerProp(item: CollectionItem, key: string): unknown {
  return (item as unknown as Record<string, unknown>)[key]
}

/** Renders star images + score from a string like "4.8/5" or "9.6/10" */
function StarRating({ rating, className }: { rating?: string | null; className?: string }) {
  if (!rating) return null
  const num = parseFloat(rating)
  if (isNaN(num)) return <span>{rating}</span>
  const outOf5   = rating.includes('/10') ? num / 2 : num
  const full     = Math.min(5, Math.floor(outOf5))
  const hasHalf  = outOf5 - full >= 0.3 && full < 5
  return (
    <p className={className ?? 'top10-card__rating'}>
      {Array.from({ length: full }, (_, i) => (
        <img key={i} src="/assets/images/icon-star.svg" alt="" />
      ))}
      {hasHalf && <img src="/assets/images/icon-star-half.svg" alt="" />}
      {rating}
    </p>
  )
}

// ─── Article-level block items (rendered inside bb-article__main) ─────────────

function renderArticleItem(block: ContentBlock, items: CollectionItem[]) {
  const { type, data } = block

  if (type === 'heading') {
    const level = String(data.level ?? 'h2')
    const text  = String(data.text ?? '')
    return (
      <div key={block.id} className="bb-block">
        {level === 'h2' ? <h2>{text}</h2> : <h3>{text}</h3>}
      </div>
    )
  }

  if (type === 'text') {
    const html = String(data.html ?? '')
      .replace(/&nbsp;/g, ' ')
      .replace(/<p>(\s*<br\s*\/?>)?\s*<\/p>/g, '<br>')  // empty <p> → <br>
      .replace(/(<br\s*\/?>\s*){2,}/g, '<br>')           // dva+ uzastopna <br> → jedan
    return (
      <div key={block.id} className="bb-block">
        <div className="bb-prose" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }

  if (type === 'video') {
    const url = String(data.url ?? '')
    if (!url) return null
    const embedUrl     = url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')
    const videoTitle   = String(data.title ?? 'Video')
    const thumbnailUrl = bmsMedia(String(data.thumbnail_url ?? '')) || null
    return (
      <div key={block.id} className="bb-video">
        {thumbnailUrl ? (
          <VideoLightbox embedUrl={embedUrl} thumbnailUrl={thumbnailUrl} title={videoTitle} />
        ) : (
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe src={embedUrl} title={videoTitle} frameBorder="0" allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 8 }} />
          </div>
        )}
      </div>
    )
  }

  if (type === 'broker_table') {
    interface TableBroker { broker_id: number; name: string; logo_url?: string | null; rating?: string; visit_url?: string; min_deposit?: number | null; min_spread?: string; is_regulated?: boolean }
    const brokers = (data.brokers as TableBroker[]) ?? []
    if (brokers.length === 0) return null
    return (
      <div key={block.id} className="bb-broker-table">
        <div className="bb-broker-table__head">
          <span>Broker</span>
          <span>Ratings</span>
          <span>Min.<br />Deposit</span>
          <span>Spread</span>
          <span>Licensed</span>
          <span></span>
        </div>
        {brokers.map((b) => (
          <div key={b.broker_id} className="bb-broker-row">
            <div className="bb-broker-row__broker">
              <BrokerLogo name={b.name} logoUrl={b.logo_url} className="bb-broker-row__logo" />
              <span className="bb-broker-row__name">{b.name}</span>
            </div>
            <p className="bb-broker-row__rating">
              {b.rating ? <><img src="/assets/images/icon-star.svg" alt="" />{b.rating}</> : '—'}
            </p>
            <p className="bb-broker-row__stat">{b.min_deposit != null ? `$${b.min_deposit}` : '—'}</p>
            <p className="bb-broker-row__stat">{b.min_spread || '—'}</p>
            <p className="bb-broker-row__stat">{b.is_regulated ? '✔' : '—'}</p>
            <div className="bb-broker-row__visit">
              {b.visit_url
                ? <a href={b.visit_url} className="btn btn--text" target="_blank" rel="noopener noreferrer nofollow">
                    Visit Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                  </a>
                : null}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'comparison_table') {
    interface CmpBroker { broker_id: number; name: string }
    interface CmpColumn { id: string; label: string }
    const brokers = (data.brokers as CmpBroker[]) ?? []
    const columns = (data.columns as CmpColumn[]) ?? []
    const cells   = (data.cells as Record<string, string>) ?? {}
    return <ComparisonTable key={block.id} brokers={brokers} columns={columns} cells={cells} />
  }

  if (type === 'broker_detail_cards') {
    const attrs = (data.attributes as string[]) ?? ['total_rating', 'min_deposit', 'max_leverage']
    return (
      <div key={block.id} className="bb-detail-cards">
        {items.slice(0, 10).map((item, i) => (
          <div key={item.broker_id} className="bb-detail-card">
            <div className="bb-detail-card__head">
              <span className="bb-detail-card__rank">#{i + 1}</span>
              <BrokerLogoImg item={item} className="bb-detail-card__logo" />
            </div>
            <div className="bb-detail-card__name">{item.name}</div>
            {item.blurb && <p className="bb-detail-card__blurb">{item.blurb}</p>}
            <div className="bb-detail-card__attrs">
              {attrs.map((a) => (
                <div key={a} className="bb-detail-card__attr">
                  <span className="bb-detail-card__attr-label">{BROKER_TABLE_COLUMNS[a] ?? a}</span>
                  <span className="bb-detail-card__attr-val">
                    {a === 'is_regulated'                    ? (item.is_regulated ? 'Yes' : 'No')
                    : a === 'has_negative_balance_protection' ? (item.has_negative_balance_protection ? 'Yes' : 'No')
                    : a === 'min_deposit'                    ? (item.min_deposit != null ? `$${item.min_deposit}` : '—')
                    : String(getBrokerProp(item, a) ?? '—')}
                  </span>
                </div>
              ))}
            </div>
            {item.affiliate_link && (
              <a href={item.affiliate_link} className="btn btn--primary btn--full mt-2" target="_blank" rel="noopener noreferrer nofollow">
                Visit {item.name}
              </a>
            )}
          </div>
        ))}
      </div>
    )
  }

  if (type === 'cta') {
    const badge    = String(data.badge        ?? '')
    const headline = String(data.headline     ?? '')
    const ctaText  = String(data.text         ?? '')
    const btnText  = String(data.button_text  ?? 'Find Your Broker')
    const btnUrl   = String(data.button_url   ?? '/find-broker')
    const btn2Text = String(data.button2_text ?? '')
    const btn2Url  = String(data.button2_url  ?? '/compare-brokers')
    const imgUrl   = bmsMedia(String(data.image_url ?? '')) || '/assets/images/cta-find-broker.png'
    return (
      <div key={block.id} className="bb-cta">
        <div className="bb-cta__content">
          <div className="bb-cta__copy">
            {badge    && <p className="eyebrow">{badge}</p>}
            {headline && <h4>{headline}</h4>}
            {ctaText  && <p className="lead">{ctaText}</p>}
          </div>
          <div className="bb-cta__actions">
            <div className="bb-cta__buttons">
              {btnText  && <a href={btnUrl}  className="btn btn--secondary">{btnText}</a>}
              {btn2Text && <a href={btn2Url} className="btn btn--text">{btn2Text} <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>}
            </div>
            <div className="bb-cta__trust">
              <img src="/assets/images/icon-lock-outline.svg" alt="" />
              <span>100% Secure</span>
              <img src="/assets/images/icon-dot-filled.svg" alt="" />
              <span>No spam</span>
              <img src="/assets/images/icon-dot-filled.svg" alt="" />
              <span>No obligations</span>
            </div>
          </div>
        </div>
        <div className="bb-cta__image">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    )
  }

  if (type === 'cta_overlay') {
    const badge        = String(data.badge        ?? '')
    const headline     = String(data.headline     ?? '')
    const checklist    = Array.isArray(data.checklist) ? (data.checklist as string[]).filter(Boolean) : []
    const btnText      = String(data.button_text  ?? 'Find Your Broker')
    const btnUrl       = String(data.button_url   ?? '/find-broker')
    const btn2Text     = String(data.button2_text ?? '')
    const btn2Url      = String(data.button2_url  ?? '/compare-brokers')
    const brokerIdNum  = Number(data.broker_id ?? 0)
    const brokerName   = String(data.broker_name  ?? '')
    const brokerLogo   = bmsMedia(String(data.broker_logo ?? ''))
    const awardLabel   = String(data.award_label  ?? '')
    const awardYear    = String(data.award_year   ?? '')
    const scoreLabel   = String(data.score_label  ?? '')
    // Pull live rating from collection items if broker is in there, else fall back to stored value
    const liveItem     = brokerIdNum ? items.find((it) => it.broker_id === brokerIdNum) : null
    // total_rating comes live from the collections API; score_value is legacy fallback
    const rawRating    = liveItem?.total_rating ?? (data.score_value != null ? parseFloat(String(data.score_value)) : null)
    const scoreValue   = rawRating != null && !isNaN(Number(rawRating)) ? `${Number(rawRating).toFixed(1)}/5` : ''
    // Initials helper for badge logo fallback
    const badgeInitials = brokerName
      ? brokerName.split(/\s+/).slice(0, 2).map((w) => w[0] ?? '').join('').toUpperCase()
      : ''
    const badgeHue = [...brokerName].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
    return (
      <div key={block.id} className="bb-cta bb-cta--overlay">
        <div className="bb-cta__content">
          <div className="bb-cta__top">
            <div className="bb-cta__copy">
              {badge    && <p className="eyebrow">{badge}</p>}
              {headline && <h4>{headline}</h4>}
            </div>
            {checklist.length > 0 && (
              <ul className="bb-cta__checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <img src="/assets/images/icon-check-fill.svg" alt="" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="bb-cta__buttons">
            {btnText  && <a href={btnUrl}  className="btn btn--secondary">{btnText}</a>}
            {btn2Text && <a href={btn2Url} className="btn btn--text">{btn2Text} <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>}
          </div>
        </div>
        <div className="bb-cta__image-wrap">
          <img src="/assets/images/cta2-bg.svg" alt="" className="bb-cta__shape" />
          {(brokerLogo || brokerName || awardLabel || awardYear) && (
            <div className="bb-cta__badge">
              {brokerLogo
                ? <img src={brokerLogo} alt={brokerName} className="bb-cta__badge-logo" />
                : brokerName && (
                  <span className="bb-cta__badge-logo" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: `hsl(${badgeHue}, 55%, 45%)`, color: '#fff',
                    fontWeight: 700, fontSize: 28,
                  }}>
                    {badgeInitials}
                  </span>
                )
              }
              {awardLabel && <span className="bb-cta__award-label">{awardLabel}</span>}
              {(awardLabel || awardYear) && <div className="bb-cta__award-divider" />}
              {awardYear  && <span className="bb-cta__award-year">{awardYear}</span>}
            </div>
          )}
          {(scoreValue || scoreLabel) && (
            <div className="bb-cta__score">
              {scoreValue && (
                <div className="bb-cta__score-row">
                  <img src="/assets/images/icon-star.svg" alt="" />
                  <span className="bb-cta__score-value">{scoreValue}</span>
                </div>
              )}
              {scoreLabel && <span className="bb-cta__score-label">{scoreLabel}</span>}
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

// ─── Top-level content block renderer (groups article blocks + sidebar) ────────

function renderContentBlocks(blocks: ContentBlock[], items: CollectionItem[]) {
  interface SidebarBroker {
    broker_id: number; name: string; slug?: string
    logo_url?: string | null; rating?: string; visit_url?: string | null
  }
  type Segment =
    | { kind: 'ranking'; block: ContentBlock }
    | { kind: 'article'; blocks: ContentBlock[]; sidebar: SidebarBroker[]; sidebarTitle: string; sidebarDesc: string }

  const segments: Segment[] = []
  let lastRanking: SidebarBroker[] = []
  let lastSidebarTitle = 'Top Brokers'
  let lastSidebarDesc  = "Quick shortlist from this page’s ranked brokers."

  for (const block of blocks) {
    if (block.type === 'broker_ranking') {
      lastRanking      = ((block.data?.brokers as SidebarBroker[]) ?? []).slice(0, 5)
      lastSidebarTitle = block.data?.sidebar_title      ? String(block.data.sidebar_title)      : 'Top Brokers'
      lastSidebarDesc  = block.data?.sidebar_description ? String(block.data.sidebar_description) : "Quick shortlist from this page’s ranked brokers."
      segments.push({ kind: 'ranking', block })
    } else {
      const last = segments[segments.length - 1]
      if (last?.kind === 'article') {
        last.blocks.push(block)
      } else {
        segments.push({ kind: 'article', blocks: [block], sidebar: [...lastRanking], sidebarTitle: lastSidebarTitle, sidebarDesc: lastSidebarDesc })
      }
    }
  }

  return segments.map((seg, i) => {
    if (seg.kind === 'ranking') {
      return renderBlock(seg.block, items, i)
    }
    return (
      <section key={`article-${i}`} className="bb-article">
        <div className="section-inner" style={{ gap: 0 }}>
          <div className="bb-article__layout">
            <div className="bb-article__main">
              {seg.blocks.map((b) => renderArticleItem(b, items))}
            </div>
            {seg.sidebar.length > 0 && (
              <aside className="bb-article__sidebar">
                <div className="bb-sidebar-card">
                  <div className="bb-sidebar-card__head">
                    <h4>{seg.sidebarTitle}</h4>
                    <p className="lead">{seg.sidebarDesc}</p>
                  </div>
                  {seg.sidebar.map((b, j) => (
                    <a
                      key={b.broker_id}
                      href={b.visit_url ?? '#'}
                      className={`match-card${j === 0 ? ' match-card--active' : ''}`}
                      target="_blank" rel="noopener noreferrer nofollow"
                    >
                      <div className="match-card__info">
                        <span className="match-card__rank">#{j + 1}</span>
                        <BrokerLogo name={b.name} logoUrl={b.logo_url} className="match-card__logo" />
                        <div className="match-card__text">
                          <p className="match-card__name">{b.name}</p>
                          {b.rating && (
                            <p className="match-card__rating">
                              <img src="/assets/images/icon-star.svg" alt="" />{b.rating}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="icon-btn match-card__link">
                        <img src="/assets/images/icon-arrow-up-right.svg" alt="" />
                      </span>
                    </a>
                  ))}
                  <a href="/find-broker" className="btn btn--secondary btn--block">Find Your Broker</a>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    )
  })
}

// ─── BMS media proxy helper ───────────────────────────────────────────────────
// Converts relative BMS storage paths to /api/media/... proxy URLs.
// Full https:// URLs (legacy or external) are passed through unchanged.
function bmsMedia(url: string | null | undefined): string {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  // strip leading slash so path.join works predictably
  const clean = url.startsWith('/') ? url.slice(1) : url
  return `/api/media/${clean}`
}

// ─── broker_ranking full-width block ──────────────────────────────────────────

function renderBlock(block: ContentBlock, items: CollectionItem[], idx: number) {
  const { type, data } = block

  if (type === 'broker_ranking') {
    interface RankBroker {
      broker_id: number; name: string; slug?: string
      logo_url?: string | null; best_for?: string; rating?: string; visit_url?: string | null
    }
    const brokers = (data.brokers as RankBroker[]) ?? []
    if (brokers.length === 0) return null

    const subtitle      = data.subtitle      ? String(data.subtitle)      : null
    const blockTitle    = data.title         ? String(data.title)         : null
    const description   = data.description   ? String(data.description)   : null
    const compareLabel  = data.compare_label ? String(data.compare_label) : null
    const compareUrl    = data.compare_url   ? String(data.compare_url)   : null
    const rTop3 = brokers.slice(0, 3)
    const rRest = brokers.slice(3)

    return (
      <section key={block.id} className="bb-top10">
        <div className="section-inner">

          {/* ── Header ─────────────────────────────────────────── */}
          {(subtitle || blockTitle || description || compareLabel) && (
            <div className="bb-top10__head">
              <div className="bb-top10__head-copy">
                {subtitle    && <p className="eyebrow">{subtitle}</p>}
                {blockTitle  && <h2>{blockTitle}</h2>}
                {description && <p className="lead">{description}</p>}
              </div>
              {compareLabel && (
                <a href={compareUrl ?? '#'} className="btn btn--text">
                  {compareLabel} <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                </a>
              )}
            </div>
          )}

          {/* ── Podium (top 3) — exact structure from best-broker.html ── */}
          <div className="top10-podium">
            {rTop3.map((b, i) => (
              <div key={b.broker_id} className={`top10-card${i === 0 ? ' top10-card--pick' : ''}`}>
                <div className="top10-card__head">
                  <span className="top10-card__rank">#{i + 1}</span>
                  <div className="top10-card__body">
                    <div className="top10-card__logo-row">
                      <BrokerLogo name={b.name} logoUrl={b.logo_url} className="top10-card__logo" />
                      <div>
                        <span className="top10-card__badge" style={i !== 0 ? { visibility: 'hidden' } : undefined}>
                          TOP PICK
                        </span>
                        <p className="top10-card__name">{b.name}</p>
                        <StarRating rating={b.rating} className="top10-card__rating" />
                      </div>
                    </div>
                    {b.best_for && (
                      <p className="top10-card__bestfor">
                        <strong>Best for:</strong> {b.best_for}
                      </p>
                    )}
                  </div>
                </div>
                <div className="top10-card__ctas">
                  {/* #1 → btn--secondary (teal), #2/#3 → btn--primary (purple) */}
                  {b.visit_url
                    ? <a href={b.visit_url} className={`btn ${i === 0 ? 'btn--secondary' : 'btn--primary'}`} target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
                    : <span className={`btn ${i === 0 ? 'btn--secondary' : 'btn--primary'}`}>Visit Broker</span>
                  }
                  <a href={b.slug ? `/broker/${b.slug}` : '#'} className="btn btn--text">
                    Read Review <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Table (#4 onward) — exact structure from best-broker.html ── */}
          {rRest.length > 0 && (
            <div className="top10-table">
              <div className="top10-table__head">
                <span>Rank</span>
                <span>Broker</span>
                <span>Best For</span>
                <span>Rating</span>
              </div>
              {rRest.map((b, i) => (
                <div key={b.broker_id} className="top10-row">
                  <span className="top10-row__rank">#{i + 4}</span>
                  <div className="top10-row__broker">
                    <BrokerLogo name={b.name} logoUrl={b.logo_url} className="top10-row__logo" />
                    <span className="top10-row__name">{b.name}</span>
                  </div>
                  <p className="top10-row__bestfor">{b.best_for || '—'}</p>
                  <StarRating rating={b.rating} className="top10-row__rating" />
                  <div className="top10-row__visit">
                    {b.visit_url
                      ? <a href={b.visit_url} className="btn btn--text" target="_blank" rel="noopener noreferrer nofollow">
                          Visit Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                        </a>
                      : <button type="button" className="btn btn--text" disabled>
                          Visit Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                        </button>
                    }
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    )
  }

  return null
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BestBrokerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = await fetchCollection(slug)

  if (!collection) notFound()

  const { content, items } = collection
  const updatedDate = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  return (
    <>
      <main>

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="hero hero--flush">
          <div className="hero__border">
            <div className="hero__bg" aria-hidden="true">
              <img src="/assets/images/hero-best-broker-bg.png" alt="" />
              <div className="hero__bg-gradient" />
            </div>

            <Nav activePage="best-broker" />

            <div className="hero__main hero__main--search">
              <div className="bb-hero__title-block">
                <div className="breadcrumb">
                  <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
                  <span>Home</span>
                  <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                  <span>Best Brokers</span>
                  <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                  <span className="breadcrumb__current">{content.title ?? content.h1 ?? 'Best Brokers'}</span>
                </div>
                <h1>{content.h1 ?? content.title ?? 'Best Brokers'}</h1>
              </div>

              <div className="bb-byline">
                <div className="bb-byline__item">
                  <span className="icon-btn"><img src="/assets/images/icon-user-outline.svg" alt="" /></span>
                  <div className="bb-byline__text">
                    <span className="bb-byline__label">Written By</span>
                    <span className="bb-byline__value">{content.author?.name ?? 'FX Look Up Editorial Team'}</span>
                  </div>
                </div>
                <div className="bb-byline__item" style={{ display: 'none' }}>
                  {/* Reviewed By — hidden until data is added */}
                  <span className="icon-btn"><img src="/assets/images/icon-shield-check-outline.svg" alt="" /></span>
                  <div className="bb-byline__text">
                    <span className="bb-byline__label">Reviewed By</span>
                    <span className="bb-byline__value">Broker Research Team</span>
                  </div>
                </div>
                <div className="bb-byline__item">
                  <span className="icon-btn"><img src="/assets/images/icon-calendar.svg" alt="" /></span>
                  <div className="bb-byline__text">
                    <span className="bb-byline__label">Updated:</span>
                    <span className="bb-byline__value">{updatedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTRO ────────────────────────────────────────── */}
        {content.intro && (
          <section className="bb-intro">
            <div className="section-inner">
              <p className="lead">{content.intro}</p>
            </div>
          </section>
        )}

        {/* ── CONTENT BLOCKS (dynamic) ──────────────────────── */}
        {renderContentBlocks(content.content_blocks ?? [], items)}

        {/* ── ARTICLE BODY ──────────────────────────────────── */}
        {content.article_body && (
          <section className="bb-block bb-block--text">
            <div className="section-inner">
              <div
                className="bb-prose"
                dangerouslySetInnerHTML={{ __html: content.article_body }}
              />
            </div>
          </section>
        )}

        {/* ── FAQ ───────────────────────────────────────────── */}
        {content.faq && content.faq.length > 0 && (
          <section className="bb-faq">
            <div className="section-inner">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {content.faq.map((item, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-item__q">{item.question}</summary>
                    <div className="faq-item__a">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  )
}
