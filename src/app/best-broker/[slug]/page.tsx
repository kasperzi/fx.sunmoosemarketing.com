import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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

function BrokerLogoImg({ item, className = '' }: { item: CollectionItem; className?: string }) {
  const src = item.logos?.rectangle_light ?? item.logos?.square_light ?? null
  if (!src) return <span className={className}>{item.name}</span>
  return <img src={src} alt={item.name} className={className} style={{ maxHeight: 32, objectFit: 'contain' }} />
}

function RatingStars({ rating }: { rating: number | null | undefined }) {
  if (!rating) return null
  const stars = Math.round((rating / 10) * 5)
  return (
    <span className="rating-stars" aria-label={`${rating}/10`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < stars ? 'star star--filled' : 'star'}>★</span>
      ))}
      <span className="rating-num ms-1">{rating.toFixed(1)}</span>
    </span>
  )
}

function getBrokerProp(item: CollectionItem, key: string): unknown {
  return (item as unknown as Record<string, unknown>)[key]
}

function renderBlock(block: ContentBlock, items: CollectionItem[], idx: number) {
  const { type, data } = block

  if (type === 'heading') {
    const level = String(data.level ?? 'h2')
    const text  = String(data.text ?? '')
    return (
      <section key={block.id} className="bb-block bb-block--heading">
        <div className="section-inner">
          {level === 'h2' ? <h2>{text}</h2> : <h3>{text}</h3>}
        </div>
      </section>
    )
  }

  if (type === 'text') {
    return (
      <section key={block.id} className="bb-block bb-block--text">
        <div className="section-inner">
          <div
            className="bb-prose"
            dangerouslySetInnerHTML={{ __html: String(data.html ?? '') }}
          />
        </div>
      </section>
    )
  }

  if (type === 'video') {
    const url = String(data.url ?? '')
    if (!url) return null
    const embedUrl = url
      .replace('youtube.com/watch?v=', 'youtube.com/embed/')
      .replace('youtu.be/', 'youtube.com/embed/')
    const videoTitle = String(data.title ?? 'Video')
    return (
      <section key={block.id} className="bb-block bb-block--video">
        <div className="section-inner">
          {url && <p className="bb-video__title">{videoTitle}</p>}
          <div className="bb-video__wrap" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={embedUrl}
              title={videoTitle}
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 8 }}
            />
          </div>
        </div>
      </section>
    )
  }

  if (type === 'broker_table') {
    const cols = (data.columns as string[]) ?? ['total_rating', 'min_deposit', 'max_leverage']
    return (
      <section key={block.id} className="bb-block bb-block--broker-table">
        <div className="section-inner">
          <div className="table-responsive">
            <table className="bb-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Broker</th>
                  {cols.map((c) => (
                    <th key={c}>{BROKER_TABLE_COLUMNS[c] ?? c}</th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={item.broker_id}>
                    <td className="rank-cell">#{i + 1}</td>
                    <td>
                      <div className="broker-name-cell">
                        <BrokerLogoImg item={item} className="broker-table-logo" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    {cols.map((c) => (
                      <td key={c}>
                        {c === 'total_rating'                    ? <RatingStars rating={getBrokerProp(item, c) as number | null} />
                        : c === 'is_regulated'                   ? (item.is_regulated ? '✅' : '—')
                        : c === 'has_negative_balance_protection' ? (item.has_negative_balance_protection ? '✅' : '—')
                        : c === 'min_deposit'                    ? (item.min_deposit != null ? `$${item.min_deposit}` : '—')
                        : String(getBrokerProp(item, c) ?? '—')}
                      </td>
                    ))}
                    <td>
                      {item.affiliate_link && (
                        <a href={item.affiliate_link} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer nofollow">
                          Visit
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }

  if (type === 'broker_detail_cards') {
    const attrs = (data.attributes as string[]) ?? ['total_rating', 'min_deposit', 'max_leverage']
    return (
      <section key={block.id} className="bb-block bb-block--detail-cards">
        <div className="section-inner">
          <div className="bb-detail-cards">
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
        </div>
      </section>
    )
  }

  if (type === 'cta') {
    const headline   = String(data.headline   ?? '')
    const ctaText    = String(data.text       ?? '')
    const btnText    = String(data.button_text ?? 'Get Started')
    const btnUrl     = String(data.button_url  ?? '/find-broker')
    return (
      <section key={block.id} className="bb-block bb-block--cta">
        <div className="section-inner">
          <div className="bb-cta">
            <div className="bb-cta__copy">
              {headline && <h3 className="bb-cta__headline">{headline}</h3>}
              {ctaText  && <p className="bb-cta__text">{ctaText}</p>}
              {btnText  && <a href={btnUrl} className="btn btn--primary">{btnText}</a>}
            </div>
            <div className="bb-cta__image" aria-hidden="true">
              <img src="/assets/images/cta-find-broker.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (type === 'cta_overlay') {
    const topBroker  = items[0]
    const headline   = String(data.headline   ?? '')
    const overlayText = String(data.text      ?? '')
    const badgeText  = String(data.badge_text ?? '')
    return (
      <section key={block.id} className="bb-block bb-block--cta-overlay">
        <div className="section-inner">
          <div className="bb-cta-overlay">
            <div className="bb-cta-overlay__copy">
              {headline    && <h3>{headline}</h3>}
              {overlayText && <p>{overlayText}</p>}
            </div>
            {topBroker && (
              <div className="bb-cta-overlay__broker">
                {badgeText && <span className="badge">{badgeText}</span>}
                <BrokerLogoImg item={topBroker} className="overlay-broker-logo" />
                {topBroker.affiliate_link && (
                  <a href={topBroker.affiliate_link} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer nofollow">
                    Visit {topBroker.name}
                  </a>
                )}
              </div>
            )}
          </div>
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
  const top3  = items.slice(0, 3)
  const rest  = items.slice(3)
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

        {/* ── TOP 10 ───────────────────────────────────────── */}
        {items.length > 0 && (
          <section className="bb-top10">
            <div className="section-inner">
              <div className="bb-top10__head">
                <div className="bb-top10__head-copy">
                  <p className="eyebrow">RANKING</p>
                  <h2>Top {items.length} Brokers — {content.h1 ?? 'Best Brokers'}</h2>
                </div>
              </div>

              {/* Podium — top 3 */}
              <div className="top10-podium">
                {top3.map((item, i) => (
                  <div
                    key={item.broker_id}
                    className={`top10-card ${i === 0 ? 'top10-card--pick' : ''}`}
                    style={item.brand_color ? { '--broker-color': item.brand_color } as React.CSSProperties : undefined}
                  >
                    <div className="top10-card__head">
                      <span className="top10-card__rank">#{i + 1}</span>
                      <div className="top10-card__body">
                        <div className="top10-card__logo-row">
                          <BrokerLogoImg item={item} className="top10-card__logo" />
                          {i === 0 && <span className="top10-card__badge">TOP PICK</span>}
                        </div>
                        {item.tagline && <p className="top10-card__tagline">{item.tagline}</p>}
                      </div>
                    </div>
                    {item.blurb && <p className="top10-card__blurb">{item.blurb}</p>}
                    <div className="top10-card__meta">
                      {item.min_deposit != null && (
                        <div className="top10-card__meta-item">
                          <span className="label">Min Deposit</span>
                          <span className="value">${item.min_deposit}</span>
                        </div>
                      )}
                      {item.max_leverage && (
                        <div className="top10-card__meta-item">
                          <span className="label">Max Leverage</span>
                          <span className="value">{item.max_leverage}</span>
                        </div>
                      )}
                      {item.is_regulated && (
                        <div className="top10-card__meta-item">
                          <span className="label">Regulated</span>
                          <span className="value">✅</span>
                        </div>
                      )}
                    </div>
                    {item.affiliate_link && (
                      <a href={item.affiliate_link} className="btn btn--primary btn--full" target="_blank" rel="noopener noreferrer nofollow">
                        Visit {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Full list table */}
              {rest.length > 0 && (
                <div className="top10-table-wrap">
                  <table className="bb-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Broker</th>
                        <th>Min Deposit</th>
                        <th>Max Leverage</th>
                        <th>Regulated</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {rest.map((item, i) => (
                        <tr key={item.broker_id}>
                          <td>#{i + 4}</td>
                          <td>
                            <div className="broker-name-cell">
                              <BrokerLogoImg item={item} className="broker-table-logo" />
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td>{item.min_deposit != null ? `$${item.min_deposit}` : '—'}</td>
                          <td>{item.max_leverage ?? '—'}</td>
                          <td>{item.is_regulated ? '✅' : '—'}</td>
                          <td>
                            {item.affiliate_link && (
                              <a href={item.affiliate_link} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer nofollow">
                                Visit
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── CONTENT BLOCKS (dynamic) ──────────────────────── */}
        {(content.content_blocks ?? []).map((block, idx) =>
          renderBlock(block, items, idx)
        )}

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
