import { Suspense } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SearchHeroPill from './SearchHeroPill'
import SearchClient from './SearchClient'

export default function SearchBrokers() {
  return (
    <>
      <main>

        <section className="hero hero--flush">
          <div className="hero__border">

            <div className="hero__bg" aria-hidden="true">
              <img src="/assets/images/hero-search-bg.png" alt="" />
              <div className="hero__bg-gradient"></div>
            </div>

            <Nav activePage="search" />

            <div className="hero__main hero__main--search hero__main--search-centered">
              <div className="breadcrumb">
                <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
                <a href="/">Home</a>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">Broker Search</span>
              </div>
              <div className="search-hero__copy search-hero__copy--centered">
                <p className="eyebrow">BROKER SEARCH</p>
                <h1>Search Forex Brokers</h1>
                <p className="lead">Find and compare trusted forex brokers by country, platforms, fees, instruments, payment methods, rating, and trading conditions.</p>
              </div>
              <Suspense fallback={
                <div className="search-pill-wrap">
                  <div className="search-pill">
                    <img src="/assets/images/icon-search.svg" alt="" />
                    <span>Search by broker, platform, payment method, or keyword...</span>
                  </div>
                  <p className="search-hero__hint">Start typing at least 3 characters to search</p>
                </div>
              }>
                <SearchHeroPill />
              </Suspense>
            </div>

          </div>
        </section>

        {/* RESULTS */}
        <Suspense fallback={null}>
          <SearchClient />
        </Suspense>

        {/* BROKER SEARCH GUIDE */}
        <section>
          <div className="section-inner">
            <div className="sb-divider-line"></div>
            <div className="sb-guide">
              <div className="sb-guide__copy">
                <p className="eyebrow">BROKER SEARCH GUIDE</p>
                <h2>How to Search, Compare, and Choose the Right Forex Broker</h2>
                <p className="lead">Volutpat sem mauris nisl magna et et vestibulum. Quis sem ultrices aliquam diam morbi dolor nulla. Nulla cursus nisl volutpat molestie felis elit habitasse. Eget neque sit nibh lacus sem. Consequat feugiat quam mus faucibus orci tristique aliquam risus enim. In enim ultricies sed pretium ac in eget volutpat sed. Dignissim egestas viverra amet a hendrerit ut. Ornare tincidunt duis eget quis. Etiam lacus vulputate nunc morbi ornare.</p>
                <p className="lead">Gravida quis orci risus vitae viverra neque varius morbi. Donec semper diam quis velit. Dignissim eget eget urna in est elementum. Ut augue neque cras consequat ultrices netus neque donec. Viverra aliquam vitae facilisi id pharetra lorem. A arcu massa congue scelerisque lectus commodo velit in.</p>
              </div>
              <div className="sb-guide__steps">
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-arrow-swap-filled.svg" alt="" /></span>
                  <p className="lead">Compare regulation and safety</p>
                </div>
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-target.svg" alt="" /></span>
                  <p className="lead">Review spreads and trading costs</p>
                </div>
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-search.svg" alt="" /></span>
                  <p className="lead">Check supported platforms</p>
                </div>
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-card.svg" alt="" /></span>
                  <p className="lead">Confirm deposit and withdrawal methods</p>
                </div>
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/rv-icon-language.svg" alt="" /></span>
                  <p className="lead">Verify country availability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON GUIDE 1 */}
        <section>
          <div className="section-inner">
            <div className="sb-compare__row">
              <div className="sb-compare__media"></div>
              <div className="sb-compare__copy">
                <p className="eyebrow">Ac ultricies</p>
                <h2>Ullamcorper lacus nam ullamcorper metus</h2>
                <p className="lead">Et pretium amet tempus quis cum morbi ac. At viverra aliquet nisl lacinia eget velit cras habitant dignissim. Velit adipiscing eu feugiat condimentum pellentesque. Eleifend sodales aliquam ac diam semper orci ultricies semper. Magna ultricies lorem fringilla leo aenean. Sit non tempus pellentesque urna.</p>
                <ul className="check-list">
                  <li><span className="icon-box"><img src="/assets/images/icon-check-circle.svg" alt="" /></span><p>Volutpat diam egestas tortor purus a.</p></li>
                  <li><span className="icon-box"><img src="/assets/images/icon-check-circle.svg" alt="" /></span><p>Pellentesque odio malesuada gravida eu ullamcorper.</p></li>
                  <li><span className="icon-box"><img src="/assets/images/icon-check-circle.svg" alt="" /></span><p>Eleifend etiam sodales donec iaculis dignissim.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON GUIDE 2 */}
        <section>
          <div className="section-inner">
            <div className="sb-compare__row sb-compare__row--reverse">
              <div className="sb-compare__media"></div>
              <div className="sb-compare__copy">
                <p className="eyebrow">Ac ultricies</p>
                <h2>Ullamcorper lacus nam ullamcorper metus</h2>
                <p className="lead">Et pretium amet tempus quis cum morbi ac. At viverra aliquet nisl lacinia eget velit cras habitant dignissim. Velit adipiscing eu feugiat condimentum pellentesque. Eleifend sodales aliquam ac diam semper orci ultricies semper. Magna ultricies lorem fringilla leo aenean. Sit non tempus pellentesque urna. Eget gravida ac sodales fermentum elementum eget. Sollicitudin id at aliquet sit a risus sem. Consequat elementum vitae nibh purus. Cras imperdiet sed laoreet amet odio elementum purus id tristique. Ac turpis enim congue a scelerisque. Donec phasellus facilisi odio lobortis. Imperdiet molestie phasellus vestibulum bibendum vitae. Convallis amet sapien hendrerit in phasellus a condimentum. Est consectetur nibh venenatis at neque dolor sapien cursus urna.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOGS + NEWSLETTER */}
        <section className="blogs">
          <div className="section-inner">
            <div className="section-head section-head--center">
              <p className="eyebrow">LATEST INSIGHTS</p>
              <h2>Latest Broker Guides &amp; Forex Insights</h2>
              <p className="lead">Explore recent broker guides, platform comparisons, and trading insights to help you make better broker decisions.</p>
              <a href="#" className="btn btn--text">View All Posts <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
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
                <button type="submit" className="subscribe__submit--mobile">Find Your Broker</button>
                <p className="subscribe__note"><img src="/assets/images/icon-shield.svg" alt="" />We respect your privacy. Unsubscribe at any time</p>
              </form>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
