import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title:       'Forex Broker News & Trading Insights — FX Look Up',
  description: 'Read the latest forex broker news, trading platform updates, market insights, regulation changes, and practical broker comparison guides.',
}

// ─── Static category pills (will be dynamic later) ────────────────────────────

const PILLS = [
  { label: 'All',           count: 156, active: true  },
  { label: 'Broker News',   count: 64,  active: false },
  { label: 'Broker Guides', count: 38,  active: false },
  { label: 'Markets',       count: 27,  active: false },
  { label: 'Regulation',    count: 17,  active: false },
  { label: 'Platforms',     count: 10,  active: false },
]

// ─── Static blog cards (will be dynamic later) ────────────────────────────────

const BLOG_CARDS = [
  {
    image: '/assets/images/blog-img-1.png',
    imageClass: 'blog-card__image--1',
    tag: 'Broker Guides',
    date: 'May 10, 2026',
    title: 'Top 5 Forex Brokers with the Best Customer Support',
    lead: 'Compare trusted brokers with responsive support, beginner-friendly tools, and reliable service.',
    href: '#',
  },
  {
    image: '/assets/images/blog-img-2.png',
    imageClass: 'blog-card__image--2',
    tag: 'Trading Platforms',
    date: 'May 12, 2026',
    title: 'MT4 vs MT5: Which Platform Should You Choose?',
    lead: 'Learn the key differences between MetaTrader platforms and which brokers support each option.',
    href: '#',
  },
  {
    image: '/assets/images/blog-img-3.png',
    imageClass: 'blog-card__image--3',
    tag: 'Broker Comparison',
    date: 'May 14, 2026',
    title: 'Compare Broker Fees Before Signing Up',
    lead: 'Understand spreads, commissions, deposit fees, and trading costs before choosing a broker.',
    href: '#',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="hero hero--flush">
        <div className="hero__border hero__border--flush hero__border--blog-gradient">

          <div className="hero__bg hero__bg--faint" aria-hidden="true">
            <img src="/assets/images/hero-blog-bg.png" alt="" />
          </div>

          <Nav />

          <div className="hero__main hero__main--search-centered">

            {/* Breadcrumb */}
            <div className="breadcrumb" style={{ alignSelf: 'flex-start' }}>
              <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
              <span>Home</span>
              <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
              <span className="breadcrumb__current">Blog</span>
            </div>

            {/* Heading */}
            <div className="search-hero__copy search-hero__copy--centered">
              <p className="eyebrow">FX LOOK UP INSIGHTS</p>
              <h1>Forex Broker News &amp; Trading Insights</h1>
              <p className="lead">Read the latest broker updates, trading platform news, market insights, regulation changes, and practical guides to help you compare brokers with more confidence.</p>
            </div>

            {/* Filter pills */}
            <div className="blog-filter-pills">
              {PILLS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  className={`blog-filter-pill${p.active ? ' blog-filter-pill--active' : ''}`}
                >
                  {p.label}
                  <span className="blog-filter-pill__count">{p.count}</span>
                </button>
              ))}
            </div>

            {/* Featured article */}
            <div className="blog-featured">
              <div className="blog-featured__media">
                <img src="/assets/images/blog-featured-img.png" alt="Interactive Brokers Expands Commission-Free Trading Access" />
              </div>
              <div className="blog-featured__content">
                <div className="blog-featured__top">
                  <div className="blog-featured__meta">
                    <span className="top10-card__badge">BROKER NEWS</span>
                    <span className="lead" style={{ fontSize: 14 }}>May 18, 2026</span>
                  </div>
                  <h2 className="blog-featured__title">Interactive Brokers Expands Commission-Free Trading Access</h2>
                  <p className="lead">Dictumst vitae mauris nunc interdum massa amet praesent at cursus. Feugiat posuere pulvinar aliquam viverra diam consectetur eleifend nec.</p>
                </div>
                <div className="blog-featured__bottom">
                  <div className="blog-featured__readtime">
                    <img src="/assets/images/rv-icon-time-line-group.svg" alt="" />
                    <span>3 min read</span>
                  </div>
                  <a href="/blog/interactive-brokers-expands-commission-free-trading-access" className="btn btn--text">
                    Read More <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BLOG CARDS ────────────────────────────────────────────────────────── */}
      <section className="blogs">
        <div className="section-inner">

          <div className="section-head section-head--center">
            <p className="eyebrow">LATEST INSIGHTS</p>
            <h2>Latest Broker Guides &amp; Forex Insights</h2>
            <p className="lead">Explore recent broker guides, platform comparisons, and trading insights to help you make better broker decisions.</p>
            <a href="#" className="btn btn--text">Browse All Articles <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Row 1 */}
            <div className="blog-cards">
              {BLOG_CARDS.map((card) => (
                <article key={card.title} className="blog-card">
                  <div className={`blog-card__image ${card.imageClass}`}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__text">
                      <div className="blog-meta">
                        <span className="tag">{card.tag}</span>
                        <span className="lead">{card.date}</span>
                      </div>
                      <p className="blog-title">{card.title}</p>
                      <p className="lead">{card.lead}</p>
                    </div>
                    <a href={card.href} className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>
              ))}
            </div>

            {/* Row 2 */}
            <div className="blog-cards">
              {BLOG_CARDS.map((card) => (
                <article key={`r2-${card.title}`} className="blog-card">
                  <div className={`blog-card__image ${card.imageClass}`}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__text">
                      <div className="blog-meta">
                        <span className="tag">{card.tag}</span>
                        <span className="lead">{card.date}</span>
                      </div>
                      <p className="blog-title">{card.title}</p>
                      <p className="lead">{card.lead}</p>
                    </div>
                    <a href={card.href} className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
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
