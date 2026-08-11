import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ContentBlock {
  id:   string
  type: string
  data: Record<string, unknown>
}

interface BlogArticle {
  slug:           string
  title:          string
  excerpt:        string | null
  content_blocks: ContentBlock[]
  published_at:   string | null
  created_at:     string
  category_name:  string | null
  category_slug:  string | null
}

interface SidebarBroker {
  broker_id: number
  name:      string
  slug?:     string
  logo_url?: string | null
  rating?:   string
}

// ─── Data fetching ─────────────────────────────────────────────────────────────

async function fetchArticle(slug: string): Promise<BlogArticle | null> {
  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY
  if (!BMS_API_URL || !BMS_API_KEY) return null
  try {
    const res = await fetch(`${BMS_API_URL}/api/v1/blog/${slug}`, {
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

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article  = await fetchArticle(slug)
  return {
    title:       article?.title ?? 'Blog — FX Look Up',
    description: article?.excerpt?.slice(0, 160) ?? '',
  }
}

// ─── Media helper ──────────────────────────────────────────────────────────────

const BMS_BASE = (process.env.BMS_API_URL ?? '').replace(/\/$/, '')

function bmsMedia(url: string | null | undefined): string {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const clean = url.startsWith('/') ? url.slice(1) : url
  return `/api/media/${clean}`
}

function bmsUrl(path: string | null | undefined): string | null {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${BMS_BASE}${path.startsWith('/') ? path : '/' + path}`
}

// ─── Logo with initials fallback ──────────────────────────────────────────────

function BrokerLogo({ name, logoUrl, className }: { name: string; logoUrl?: string | null; className: string }) {
  const url = bmsUrl(logoUrl ?? null)
  if (url) {
    return <img src={url} alt={name} className={className} style={{ objectFit: 'contain' }} />
  }
  const initials = name.split(/\s+/).slice(0, 2).map((w) => w[0] ?? '').join('').toUpperCase()
  const hue      = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
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

// ─── Main content block renderer ───────────────────────────────────────────────

function renderMainBlock(block: ContentBlock) {
  const { type, data } = block

  if (type === 'heading') {
    const level = String(data.level ?? 'h2')
    const text  = String(data.text ?? '')
    if (!text) return null
    return (
      <div key={block.id} className="rv-block">
        {level === 'h2' ? <h2>{text}</h2> : <h3>{text}</h3>}
      </div>
    )
  }

  if (type === 'text') {
    const html = String(data.html ?? '')
      .replace(/&nbsp;/g, ' ')
      .replace(/<p>(\s*<br\s*\/?>)?\s*<\/p>/g, '<br>')
      .replace(/(<br\s*\/?>\s*){2,}/g, '<br>')
    if (!html) return null
    return (
      <div key={block.id} className="rv-block">
        <div className="bb-prose" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }

  if (type === 'image') {
    const url     = bmsMedia(String(data.url ?? ''))
    const alt     = String(data.alt ?? '')
    const caption = String(data.caption ?? '')
    if (!url) return null
    return (
      <div key={block.id} className="article-image">
        <img src={url} alt={alt} />
        {caption && <p className="article-image__caption">{caption}</p>}
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
    const brokerName   = String(data.broker_name  ?? '')
    const brokerLogo   = bmsMedia(String(data.broker_logo ?? ''))
    const awardLabel   = String(data.award_label  ?? '')
    const awardYear    = String(data.award_year   ?? '')
    const scoreLabel   = String(data.score_label  ?? '')
    const rawScore     = data.score_value != null ? parseFloat(String(data.score_value)) : null
    const scoreValue   = rawScore != null && !isNaN(rawScore) ? `${rawScore.toFixed(1)}/5` : ''
    const badgeInitials = brokerName.split(/\s+/).slice(0, 2).map((w) => w[0] ?? '').join('').toUpperCase()
    const badgeHue      = [...brokerName].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
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
                  <li key={i}><img src="/assets/images/icon-check-fill.svg" alt="" />{item}</li>
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
          <div className="bb-cta__badge-group">
            {(brokerLogo || brokerName || awardLabel || awardYear) && (
              <div className="bb-cta__badge">
                {brokerLogo
                  ? <img src={brokerLogo} alt={brokerName} className="bb-cta__badge-logo" />
                  : brokerName && (
                    <span className="bb-cta__badge-logo" style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: `hsl(${badgeHue}, 55%, 45%)`, color: '#fff',
                      fontWeight: 700, fontSize: 28,
                    }}>{badgeInitials}</span>
                  )
                }
                {awardLabel && <span className="bb-cta__award-label">{awardLabel}</span>}
                {(awardLabel || awardYear) && <div className="bb-cta__award-divider" />}
                {awardYear  && <span className="bb-cta__award-year">{awardYear}</span>}
              </div>
            )}
            {(scoreValue || scoreLabel) && (
              <div className="bb-cta__score-inner">
                {scoreValue && (
                  <div className="bb-cta__score-row">
                    <img src="/assets/images/icon-star.svg" alt="" />
                    <span className="bb-cta__score-value"><strong>{scoreValue.replace('/5', '')}</strong>/5</span>
                  </div>
                )}
                {scoreLabel && <span className="bb-cta__score-label">{scoreLabel}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return null
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }  = await params
  const article = await fetchArticle(slug)

  if (!article) notFound()

  const blocks = article.content_blocks ?? []

  // Extract sidebar_brokers block (first one wins)
  const sidebarBlock   = blocks.find((b) => b.type === 'sidebar_brokers')
  const mainBlocks     = blocks.filter((b) => b.type !== 'sidebar_brokers')

  const sidebarTitle   = sidebarBlock ? String(sidebarBlock.data.title ?? 'Top Brokers') : 'Top Brokers'
  const sidebarDesc    = sidebarBlock ? String(sidebarBlock.data.description ?? '') : ''
  const sidebarBrokers = sidebarBlock ? ((sidebarBlock.data.brokers as SidebarBroker[]) ?? []).slice(0, 5) : []

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      {/* Hero flush — breadcrumb only */}
      <section className="hero hero--flush">
        <div className="hero__border hero__border--flush hero__border--white">
          <Nav />
          <div className="hero__main" style={{ padding: '40px 112px 56px' }}>
            <div className="breadcrumb">
              <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
              <span>Home</span>
              <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
              <a href="/blog" style={{ color: 'var(--body-text)', textDecoration: 'none', fontSize: 14 }}>Blog</a>
              <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
              <span className="breadcrumb__current">{article.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="rv-article">
        <div className="section-inner" style={{ paddingTop: 0 }}>
          <div className="rv-article__layout">

            {/* Main content */}
            <div className="rv-article__main">

              {/* Article header */}
              <div className="article-header">
                {article.category_name && (
                  <span className="top10-card__badge">{article.category_name.toUpperCase()}</span>
                )}
                <div className="article-header__meta">
                  <span className="lead" style={{ fontSize: 14 }}>{publishedDate}</span>
                </div>
                <h2>{article.title}</h2>
                {article.excerpt && <p className="lead">{article.excerpt}</p>}
              </div>

              {/* Content blocks */}
              {mainBlocks.map((block) => renderMainBlock(block))}

              {/* Share */}
              <div className="article-share">
                <span className="article-share__label">Share this article</span>
                <div className="article-share__icons">
                  <a href="#"><img src="/assets/images/icon-share-facebook.svg" alt="Facebook" /></a>
                  <a href="#"><img src="/assets/images/icon-share-linkedin.svg" alt="LinkedIn" /></a>
                  <a href="#"><img src="/assets/images/icon-share-twitter.svg" alt="Twitter" /></a>
                  <a href="#"><img src="/assets/images/icon-share-link.svg" alt="Copy link" /></a>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            {sidebarBrokers.length > 0 && (
              <aside className="bb-article__sidebar">
                <div className="bb-sidebar-card">
                  <div className="bb-sidebar-card__head">
                    <h4>{sidebarTitle}</h4>
                    {sidebarDesc && <p className="lead">{sidebarDesc}</p>}
                  </div>
                  {sidebarBrokers.map((b, idx) => (
                    <a
                      key={b.broker_id}
                      href={b.slug ? `/broker/${b.slug}` : '#'}
                      className={`match-card${idx === 0 ? ' match-card--active' : ''}`}
                    >
                      <div className="match-card__info">
                        <span className="match-card__rank">#{idx + 1}</span>
                        <BrokerLogo
                          name={b.name}
                          logoUrl={b.logo_url}
                          className="match-card__logo"
                        />
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

      {/* Latest articles */}
      <section className="blogs">
        <div className="section-inner">
          <div className="section-head section-head--center">
            <p className="eyebrow">LATEST INSIGHTS</p>
            <h2>Latest Broker Guides &amp; Forex Insights</h2>
            <p className="lead">Explore recent broker guides, platform comparisons, and trading insights to help you make better broker decisions.</p>
          </div>
          <div className="blog-cards">
            <article className="blog-card">
              <div className="blog-card__image blog-card__image--1"><img src="/assets/images/blog-img-1.png" alt="" /></div>
              <div className="blog-card__body">
                <div className="blog-card__text">
                  <div className="blog-meta"><span className="tag">Broker Guides</span><span className="lead">May 10, 2026</span></div>
                  <p className="blog-title">Top 5 Forex Brokers with the Best Customer Support</p>
                  <p className="lead">Compare trusted brokers with responsive support, beginner-friendly tools, and reliable service.</p>
                </div>
                <a href="#" className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card__image blog-card__image--2"><img src="/assets/images/blog-img-2.png" alt="" /></div>
              <div className="blog-card__body">
                <div className="blog-card__text">
                  <div className="blog-meta"><span className="tag">Trading Platforms</span><span className="lead">May 12, 2026</span></div>
                  <p className="blog-title">MT4 vs MT5: Which Platform Should You Choose?</p>
                  <p className="lead">Learn the key differences between MetaTrader platforms and which brokers support each option.</p>
                </div>
                <a href="#" className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card__image blog-card__image--3"><img src="/assets/images/blog-img-3.png" alt="" /></div>
              <div className="blog-card__body">
                <div className="blog-card__text">
                  <div className="blog-meta"><span className="tag">Broker Comparison</span><span className="lead">May 14, 2026</span></div>
                  <p className="blog-title">Compare Broker Fees Before Signing Up</p>
                  <p className="lead">Understand spreads, commissions, deposit fees, and trading costs before choosing a broker.</p>
                </div>
                <a href="#" className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section--blogs">
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
              <p className="subscribe__note">
                <img src="/assets/images/icon-shield.svg" alt="" />
                We respect your privacy. Unsubscribe at any time
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
