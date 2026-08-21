import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title:       'Forex Broker News & Trading Insights — FX Look Up',
  description: 'Read the latest forex broker news, trading platform updates, market insights, regulation changes, and practical broker comparison guides.',
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Category {
  id:            number
  name:          string
  slug:          string
  article_count: number
}

interface Article {
  id:            number
  slug:          string
  title:         string
  excerpt:       string | null
  published_at:  string | null
  created_at:    string
  category_name: string | null
  category_slug: string | null
}

// ─── API helpers ──────────────────────────────────────────────────────────────

const BMS_URL = (process.env.BMS_API_URL ?? 'https://bms.sunmoosemarketing.com').replace(/\/$/, '')
const BMS_KEY = process.env.BMS_API_KEY ?? ''

async function fetchCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BMS_URL}/api/v1/blog/categories`, {
      headers: { 'X-Api-Key': BMS_KEY },
      next:    { revalidate: 60 },
    })
    if (!res.ok) return []
    const json = await res.json()
    return json.data ?? []
  } catch {
    return []
  }
}

async function fetchArticles(categorySlug?: string): Promise<{ data: Article[]; total: number }> {
  try {
    const qs  = new URLSearchParams({ per_page: '13' })
    if (categorySlug) qs.set('category', categorySlug)
    const res = await fetch(`${BMS_URL}/api/v1/blog?${qs}`, {
      headers: { 'X-Api-Key': BMS_KEY },
      next:    { revalidate: 60 },
    })
    if (!res.ok) return { data: [], total: 0 }
    const json = await res.json()
    return { data: json.data?.data ?? [], total: json.data?.meta?.total ?? 0 }
  } catch {
    return { data: [], total: 0 }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const activeSlug  = searchParams.category ?? ''
  const [categories, { data: articles, total }] = await Promise.all([
    fetchCategories(),
    fetchArticles(activeSlug || undefined),
  ])

  const featured   = articles[0] ?? null
  const cardGroups = articles.slice(1)
  const row1       = cardGroups.slice(0, 3)
  const row2       = cardGroups.slice(3, 6)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="hero hero--flush">
        <div className="hero__border hero__border--flush hero__border--blog-gradient">

          <div className="hero__bg hero__bg--faint" aria-hidden="true">
            <img src="/assets/images/hero-blog-bg.png" alt="" />
          </div>

          <Nav />

          <div className="hero__main hero__main--search hero__main--search-centered">

            {/* Breadcrumb */}
            <div className="breadcrumb" style={{ alignSelf: 'flex-start' }}>
              <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
              <a href="/">Home</a>
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
              <a
                href="/blog"
                className={`blog-filter-pill${!activeSlug ? ' blog-filter-pill--active' : ''}`}
              >
                All
                <span className="blog-filter-pill__count">{total}</span>
              </a>
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/blog?category=${cat.slug}`}
                  className={`blog-filter-pill${activeSlug === cat.slug ? ' blog-filter-pill--active' : ''}`}
                >
                  {cat.name}
                  <span className="blog-filter-pill__count">{cat.article_count}</span>
                </a>
              ))}
            </div>

            {/* Featured article */}
            {featured && (
              <div className="blog-featured">
                <div className="blog-featured__media">
                  <img src="/assets/images/blog-featured-img.png" alt={featured.title} />
                </div>
                <div className="blog-featured__content">
                  <div className="blog-featured__top">
                    <div className="blog-featured__meta">
                      {featured.category_name && (
                        <span className="top10-card__badge">{featured.category_name.toUpperCase()}</span>
                      )}
                      <span className="lead" style={{ fontSize: 14 }}>{formatDate(featured.published_at ?? featured.created_at)}</span>
                    </div>
                    <h2 className="blog-featured__title">{featured.title}</h2>
                    {featured.excerpt && <p className="lead">{featured.excerpt}</p>}
                  </div>
                  <div className="blog-featured__bottom">
                    <div className="blog-featured__readtime">
                      <img src="/assets/images/rv-icon-time-line-group.svg" alt="" />
                      <span>3 min read</span>
                    </div>
                    <a href={`/blog/${featured.slug}`} className="btn btn--text">
                      Read More <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            )}

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
          </div>

          {articles.length === 0 ? (
            <p className="lead" style={{ textAlign: 'center', padding: '40px 0' }}>No articles found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {row1.length > 0 && (
                <div className="blog-cards">
                  {row1.map((card) => (
                    <BlogCard key={card.id} card={card} />
                  ))}
                </div>
              )}
              {row2.length > 0 && (
                <div className="blog-cards">
                  {row2.map((card) => (
                    <BlogCard key={card.id} card={card} />
                  ))}
                </div>
              )}
            </div>
          )}

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

// ─── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ card }: { card: Article }) {
  return (
    <article className="blog-card">
      <div className="blog-card__image">
        <img src="/assets/images/blog-img-1.png" alt={card.title} />
      </div>
      <div className="blog-card__body">
        <div className="blog-card__text">
          <div className="blog-meta">
            {card.category_name && <span className="tag">{card.category_name}</span>}
            <span className="lead">{formatDate(card.published_at ?? card.created_at)}</span>
          </div>
          <p className="blog-title">{card.title}</p>
          {card.excerpt && <p className="lead">{card.excerpt}</p>}
        </div>
        <a href={`/blog/${card.slug}`} className="btn btn--text">
          Read More <img src="/assets/images/icon-arrow-right.svg" alt="" />
        </a>
      </div>
    </article>
  )
}
