import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CompareClient from './CompareClient'

export const metadata: Metadata = {
  title: 'Compare Forex Brokers Side by Side — FX Look Up',
  description: 'Compare two forex brokers side by side on fees, regulation, platforms, deposit methods, instruments, and ratings before you choose.',
  alternates: { canonical: 'https://fx.sunmoosemarketing.com/compare-brokers' },
  openGraph: {
    type: 'website',
    siteName: 'FX Look Up',
    title: 'Compare Forex Brokers Side by Side — FX Look Up',
    description: 'Compare two forex brokers side by side on fees, regulation, platforms, deposit methods, instruments, and ratings before you choose.',
    url: 'https://fx.sunmoosemarketing.com/compare-brokers',
    images: [{ url: 'https://fx.sunmoosemarketing.com/assets/images/logo-fxlookup.png' }],
  },
}

export default function CompareBrokersPage() {
  return (
    <>
      <main>

        {/* ── Hero ── */}
        <section className="hero hero--flush">
          <div className="hero__border hero__border--plain-gradient">

            <Nav activePage="compare" />

            <div className="hero__main hero__main--search hero__main--search-centered">
              <div className="breadcrumb">
                <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
                <span>Home</span>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">Compare Brokers</span>
              </div>
              <div className="search-hero__copy search-hero__copy--centered">
                <p className="eyebrow">BROKER COMPARISON</p>
                <h1>Compare Forex Brokers Side by Side</h1>
                <p className="lead">Select two brokers to compare fees, regulation, platforms, deposit methods, instruments, ratings, and key trading conditions.</p>
              </div>

              <Suspense fallback={<div className="cmp-selector-card" />}>
                <CompareClient />
              </Suspense>
            </div>

          </div>
        </section>

        {/* ── Guide ── */}
        <section>
          <div className="section-inner">
            <div className="sb-guide">
              <div className="sb-guide__copy">
                <p className="eyebrow">BROKER COMPARISON GUIDE</p>
                <h2>How to Compare Forex Brokers Before Choosing One</h2>
                <p className="lead">Choosing the right forex broker is one of the most important decisions for any trader. Use our side-by-side comparison tool to evaluate brokers across the metrics that matter most — from regulation and safety to trading costs, platform support, and deposit options.</p>
              </div>
              <div className="sb-guide__steps">
                <div className="step-card">
                  <span className="step-icon">
                    <img src="/assets/images/icon-arrow-swap-filled.svg" alt="" />
                  </span>
                  <p className="lead">Compare regulation and safety</p>
                </div>
                <div className="step-card">
                  <span className="step-icon">
                    <img src="/assets/images/icon-trading-pattern.svg" alt="" />
                  </span>
                  <p className="lead">Review spreads and trading costs</p>
                </div>
                <div className="step-card">
                  <span className="step-icon">
                    <img src="/assets/images/rv-icon-screen-pc-tower.svg" alt="" />
                  </span>
                  <p className="lead">Check supported platforms</p>
                </div>
                <div className="step-card">
                  <span className="step-icon">
                    <img src="/assets/images/icon-card.svg" alt="" />
                  </span>
                  <p className="lead">Confirm deposit and withdrawal methods</p>
                </div>
                <div className="step-card">
                  <span className="step-icon">
                    <img src="/assets/images/rv-icon-language.svg" alt="" />
                  </span>
                  <p className="lead">Verify country availability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content row 1 ── */}
        <section>
          <div className="section-inner">
            <div className="sb-compare__row">
              <div className="sb-compare__media" />
              <div className="sb-compare__copy">
                <p className="eyebrow">REGULATION & SAFETY</p>
                <h2>Why Broker Regulation Matters for Your Capital</h2>
                <p className="lead">A regulated broker is required to meet strict financial standards, segregate client funds, and provide access to investor compensation schemes. Always check which authority licenses your broker and what protection it offers in your country.</p>
                <ul className="check-list">
                  <li>
                    <span className="icon-box"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span>
                    <p>Top-tier regulators include FCA, ASIC, CySEC, and FINMA.</p>
                  </li>
                  <li>
                    <span className="icon-box"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span>
                    <p>Negative balance protection prevents losing more than your deposit.</p>
                  </li>
                  <li>
                    <span className="icon-box"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span>
                    <p>Segregated client funds reduce risk if the broker becomes insolvent.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content row 2 ── */}
        <section>
          <div className="section-inner">
            <div className="sb-compare__row">
              <div className="sb-compare__copy">
                <p className="eyebrow">TRADING COSTS</p>
                <h2>Understanding Spreads, Commissions, and Fees</h2>
                <p className="lead">Trading costs can significantly impact your profitability, especially for high-frequency traders. Look beyond the headline spread and consider commission per lot, swap rates, deposit fees, withdrawal fees, and inactivity charges before committing to a broker.</p>
                <ul className="check-list">
                  <li>
                    <span className="icon-box"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span>
                    <p>ECN/STP brokers often offer raw spreads with a per-lot commission.</p>
                  </li>
                  <li>
                    <span className="icon-box"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span>
                    <p>Market-maker brokers usually charge no commission but widen spreads.</p>
                  </li>
                  <li>
                    <span className="icon-box"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span>
                    <p>Swap-free accounts remove overnight financing but may add admin fees.</p>
                  </li>
                </ul>
              </div>
              <div className="sb-compare__media" />
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <section className="blogs">
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

      </main>

      <Footer />
    </>
  )
}
