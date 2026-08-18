import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title:       'Pepperstone Broker Review 2026 — FX Look Up',
  description: 'In-depth Pepperstone review covering fees, spreads, regulation, platforms, deposits, withdrawals, and safety. See if Pepperstone fits your trading style.',
}

// ─── Static tabs config ───────────────────────────────────────────────────────

const TABS = [
  { href: '#overview',           icon: '/assets/images/rv-icon-home-outline.svg',           label: 'Overview' },
  { href: '#pros-cons',          icon: '/assets/images/rv-icon-like-outline.svg',            label: 'Pros & Cons' },
  { href: '#fees',               icon: '/assets/images/rv-icon-coin-group.svg',              label: 'Fees' },
  { href: '#regulation',         icon: '/assets/images/rv-icon-shield-check-line.svg',       label: 'Regulation' },
  { href: '#platforms',          icon: '/assets/images/rv-icon-monitor-outline.svg',         label: 'Platforms' },
  { href: '#deposit-withdrawal', icon: '/assets/images/icon-card-outline.svg',               label: 'Deposit & Withdrawal' },
  { href: '#countries',          icon: '/assets/images/rv-icon-language.svg',                label: 'Countries' },
  { href: '#faq',                icon: '/assets/images/rv-icon-question-line-group.svg',     label: 'FAQ' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrokerReviewPage() {
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
                <span className="breadcrumb__current">Pepperstone Review</span>
              </div>
              <h1>Pepperstone Broker Review 2026</h1>
            </div>

            <div className="bb-byline">
              <div className="bb-byline__item">
                <span className="icon-btn"><img src="/assets/images/icon-user-outline.svg" alt="" /></span>
                <div className="bb-byline__text">
                  <span className="bb-byline__label">Written By</span>
                  <span className="bb-byline__value">FX Look Up Editorial Team</span>
                </div>
              </div>
              <div className="bb-byline__item">
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
                  <span className="bb-byline__value">May 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION TABS ──────────────────────────────────────────────────────── */}
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

            {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
            <div className="rv-article__main">

              {/* Quick badges */}
              <div className="rv-quick-badges">
                <div className="rv-quick-badge"><span className="rv-quick-badge__icon"><img src="/assets/images/rv-icon-shield-check-line.svg" alt="" /></span>Regulated Broker</div>
                <div className="rv-quick-badge"><span className="rv-quick-badge__icon"><img src="/assets/images/rv-icon-coin-group.svg" alt="" /></span>Low Spread Broker</div>
                <div className="rv-quick-badge"><span className="rv-quick-badge__icon"><img src="/assets/images/rv-icon-chart-up-group.svg" alt="" /></span>Popular Platform</div>
              </div>

              {/* ── OVERVIEW ──────────────────────────────────────────────────── */}
              <div className="rv-block" id="overview">
                <h2>Pepperstone Overview</h2>
                <p className="lead">A quick verdict on Pepperstone&rsquo;s rating, availability, and key review details.</p>

                <div className="rv-score-card">
                  <div className="rv-score-card__side">
                    <img src="/assets/images/logo-pepperstone.png" alt="" className="rv-score-card__logo" />
                    <p className="rv-score-card__value">4.8/5</p>
                    <p className="rv-score-card__stars">
                      <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />
                    </p>
                    <p className="rv-score-card__reviews">Based on 1,250+ user reviews</p>
                  </div>
                  <div className="rv-score-card__body">
                    <div className="rv-score-card__pills">
                      <span className="rv-pill"><img src="/assets/images/rv-icon-star-alt.svg" alt="" />Best for Low-Cost Forex Trading</span>
                      <span className="rv-pill"><img src="/assets/images/flag-netherlands.png" alt="" />Available in Netherlands</span>
                    </div>
                    <p className="lead">Pepperstone is a popular forex and CFD broker known for competitive spreads, trusted regulation, and support for MT4, MT5, and cTrader.</p>
                    <div className="rv-score-card__chips">
                      <span className="rv-chip"><span className="rv-chip__icon"><img src="/assets/images/icon-shield-check-outline.svg" alt="" /></span>Regulated Broker</span>
                      <span className="rv-chip"><span className="rv-chip__icon"><img src="/assets/images/icon-card-outline.svg" alt="" /></span>Low Spread Broker</span>
                      <span className="rv-chip"><span className="rv-chip__icon"><img src="/assets/images/rv-icon-chart-up-group.svg" alt="" /></span>Popular Platform</span>
                    </div>
                  </div>
                </div>

                <h3>Key Facts</h3>
                <div className="rv-facts-grid">
                  {[
                    { icon: 'rv-icon-wallet-outline.svg',       label: 'Min. Deposit',       value: '$0' },
                    { icon: 'rv-icon-shield-check-line.svg',    label: 'Regulations',        value: 'FCA, ASIC' },
                    { icon: 'rv-icon-screen-pc-tower.svg',      label: 'Platforms',          value: 'MT4, MT5, cTrader' },
                    { icon: 'rv-icon-device-mobile-star.svg',   label: 'Mobile App Rating',  value: '4.8/5' },
                    { icon: 'rv-icon-chart-up-group.svg',       label: 'Leverage',           value: 'Up to 1:500' },
                    { icon: 'icon-trading-pattern.svg',         label: 'Instruments',        value: 'Forex, CFDs, Indices' },
                    { icon: 'rv-icon-coin-group.svg',           label: 'Commission',         value: 'From $0' },
                    { icon: 'rv-icon-users-outline-group.svg',  label: 'Copy Trading',       value: 'Available' },
                  ].map((f) => (
                    <div key={f.label} className="rv-fact-card">
                      <span className="rv-fact-card__icon"><img src={`/assets/images/${f.icon}`} alt="" /></span>
                      <p className="rv-fact-card__label">{f.label}</p>
                      <p className="rv-fact-card__value">{f.value}</p>
                    </div>
                  ))}
                </div>

                <p className="lead">One of our highest rated brokers, Pepperstone is well-regulated and is globally renowned for its low trading costs and choice of trading platforms. Pepperstone keeps costs low with some of the tightest spreads we&rsquo;ve seen, averaging 1.00 pips (EUR/USD) on its Standard Account. For those who prefer classic ECN trading, the Razor Account has low commissions and spreads averaging just 0.17 pips on the EUR/USD. Neither account has a required minimum deposit.</p>
                <p className="lead">More experienced traders will appreciate Pepperstone&rsquo;s trading platform options, including a web-based platform, MT4, MT5, cTrader, and TradingView. All are available on desktop and mobile devices. Pepperstone&rsquo;s education section is not the most extensive we&rsquo;ve seen, but it is competent and well-structured, making it a good place to start for beginner traders.</p>
              </div>

              {/* ── PROS & CONS ───────────────────────────────────────────────── */}
              <div className="rv-block" id="pros-cons">
                <h2>Pepperstone Pros &amp; Cons</h2>
                <p className="lead">A quick look at where Pepperstone performs well and where beginners may want to compare alternatives.</p>

                <div className="rv-proscons-toggle">
                  <button type="button" className="rv-proscons-toggle__btn is-active" data-proscons-target="pros">Pros</button>
                  <button type="button" className="rv-proscons-toggle__btn" data-proscons-target="cons">Cons</button>
                </div>

                <div className="rv-panel">
                  <div className="rv-proscons">
                    <div className="rv-proscons__col is-active" data-proscons-panel="pros">
                      <p className="rv-proscons__heading">Pros</p>
                      <ul className="rv-proscons__list">
                        {['Lorem ipsum dolor sit amet consectetur.','Aliquam in nibh libero habitant nulla massa.','Sagittis vitae ipsum dolor imperdiet.','Mauris in orci feugiat fringilla massa.','Adipiscing pretium sit vitae mattis facilisis.'].map((t) => (
                          <li key={t}><img src="/assets/images/icon-check-fill.svg" alt="" />{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rv-proscons__col rv-proscons__col--cons" data-proscons-panel="cons">
                      <p className="rv-proscons__heading">Cons</p>
                      <ul className="rv-proscons__list">
                        {['Lacus nulla laoreet porta ultrices.','Justo iaculis vitae sem faucibus id viverra.','Porttitor et at orci cursus rutrum cras at at.','Phasellus cursus eget massa dolor cras ultrices.','Pulvinar aliquet purus volutpat integer.'].map((t) => (
                          <li key={t}><img src="/assets/images/rv-icon-negative-outline.svg" alt="" />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="rv-callout">
                    <span className="icon-btn"><img src="/assets/images/rv-icon-info-outline.svg" alt="" /></span>
                    <div className="rv-callout__text">
                      <p className="rv-callout__title">Quick Verdict</p>
                      <p className="lead">Ornare ultrices diam nulla convallis. Mauris nisl consectetur turpis et. Enim natoque laoreet ullamcorper mi non a senectus et. Porta amet dignissim est tempor facilisis lacinia. Ac id nibh odio consectetur vulputate vulputate.</p>
                    </div>
                  </div>

                  <div className="rv-cta-row">
                    <a href="#" className="btn btn--secondary rv-cta-row__desktop">Visit Broker</a>
                    <button type="button" className="btn btn--text btn--text--px rv-cta-row__desktop">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
                    <a href="#" className="btn btn--secondary rv-cta-row__mobile">Find Your Broker</a>
                    <button type="button" className="btn btn--text rv-cta-row__mobile">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
                  </div>
                </div>
              </div>

              {/* ── FEES ──────────────────────────────────────────────────────── */}
              <div className="rv-block" id="fees">
                <h2>Pepperstone Fees &amp; Trading Costs</h2>
                <p className="lead">Review Pepperstone&rsquo;s key trading fee, spreads, commissions, and non-trading costs before opening an account.</p>

                <div className="rv-proscons-toggle rv-fee-toggle">
                  <button type="button" className="rv-proscons-toggle__btn is-active" data-fee-target="cost">Cost</button>
                  <button type="button" className="rv-proscons-toggle__btn" data-fee-target="note">Note</button>
                </div>

                <div className="rv-facts-grid rv-facts-grid--3 rv-cta-row__desktop">
                  {[
                    { icon: 'rv-icon-arrow-down-up.svg', label: 'Spread From',   value: '0.0 pips' },
                    { icon: 'rv-icon-coin-group.svg',    label: 'Commission',    value: 'From $0' },
                    { icon: 'icon-card-outline.svg',     label: 'Min. Deposit',  value: '$0' },
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

                <div className="rv-fee-table">
                  <p className="rv-fee-table__head rv-fee-table__head--type">Fee Type</p>
                  <p className="rv-fee-table__head rv-fee-table__head--value"><span className="rv-fee-table__head-full">Pepperstone Cost</span><span className="rv-fee-table__head-short">Cost</span></p>
                  <p className="rv-fee-table__head rv-fee-table__head--note">Beginner note</p>

                  {[
                    { icon: 'rv-icon-currency-exchange-group.svg', label: 'EUR/USD Spread', value: 'From 0.0 pips', note: 'Phasellus fusce vestibulum id blandit velit nunc aliquam.', last: false },
                    { icon: 'rv-icon-coin-group.svg',              label: 'Commission',     value: 'From $0',       note: 'Senectus sapien viverra neque congue eget amet sit.',     last: false },
                    { icon: 'icon-card-outline.svg',               label: 'Min. Deposit',   value: '$0',            note: 'Gravida gravida accumsan elementum id erat accumsan.',    last: false },
                    { icon: 'rv-icon-time-line-group.svg',         label: 'Inactivity Fee', value: 'No',            note: 'Lorem nisl in velit porttitor odio nibh morbi elit.',     last: false },
                    { icon: 'rv-icon-money-deposit.svg',           label: 'Deposit Fee',    value: '$0',            note: 'Congue libero sodales faucibus mi nibh pharetra eu id cras.', last: false },
                    { icon: 'rv-icon-money-withdraw.svg',          label: 'Withdrawal Fee', value: '$0',            note: 'Neque ipsum facilisi dolor neque ultrices pulvinar in pretium.', last: true },
                  ].map((row) => (
                    <>
                      <div key={`t-${row.label}`} className={`rv-fee-table__cell rv-fee-table__cell--type${row.last ? ' rv-fee-table__cell--last' : ''}`}><img src={`/assets/images/${row.icon}`} alt="" /><span>{row.label}</span></div>
                      <div key={`v-${row.label}`} className={`rv-fee-table__cell rv-fee-table__cell--value${row.last ? ' rv-fee-table__cell--last' : ''}`}><span>{row.value}</span></div>
                      <div key={`n-${row.label}`} className={`rv-fee-table__cell rv-fee-table__cell--note${row.last ? ' rv-fee-table__cell--last' : ''}`}><span>{row.note}</span></div>
                    </>
                  ))}
                </div>

                <div className="rv-callout">
                  <span className="icon-btn"><img src="/assets/images/rv-icon-info-outline.svg" alt="" /></span>
                  <div className="rv-callout__text">
                    <p className="rv-callout__title">Fee Takeaway</p>
                    <p className="lead">Ornare ultrices diam nulla convallis. Mauris nisl consectetur turpis et. Enim natoque laoreet ullamcorper mi non a senectus et. Porta amet dignissim est tempor facilisis lacinia. Ac id nibh odio consectetur vulputate vulputate.</p>
                  </div>
                </div>

                <div className="rv-cta-row">
                  <a href="#" className="btn btn--secondary rv-cta-row__desktop">Visit Broker</a>
                  <button type="button" className="btn btn--text btn--text--px rv-cta-row__desktop">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
                  <a href="#" className="btn btn--secondary rv-cta-row__mobile">Find Your Broker</a>
                  <button type="button" className="btn btn--text rv-cta-row__mobile">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
                </div>
              </div>

              {/* ── REGULATION ────────────────────────────────────────────────── */}
              <div className="rv-block" id="regulation">
                <h2>Is Pepperstone Safe and Regulated?</h2>
                <p className="lead">Review Pepperstone&rsquo;s regulatory licenses, investor protection details, and trust signals before choosing a broker.</p>

                <div className="rv-callout rv-callout--lg">
                  <span className="icon-btn icon-btn--lg"><img src="/assets/images/rv-icon-shield-check-line-big.svg" alt="" /></span>
                  <div className="rv-callout__text">
                    <p className="rv-callout__title rv-callout__title--lg">Trust verdict: regulated by multiple authorities</p>
                    <p className="lead">Ornare ultrices diam nulla convallis. Mauris nisl consectetur turpis et. Enim natoque laoreet ullamcorper mi non a senectus et. Porta amet dignissim est tempor facilisis lacinia.</p>
                  </div>
                </div>

                <div className="rv-facts-grid">
                  {[
                    { name: 'FCA',   country: 'United Kingdom',  note: 'Strong investor protection' },
                    { name: 'ASIC',  country: 'Australia',       note: 'Established financial regulator' },
                    { name: 'CySEC', country: 'European Union',  note: 'EU regulatory oversight' },
                    { name: 'DFSA',  country: 'Dubai',           note: 'Regional financial authority' },
                  ].map((r) => (
                    <div key={r.name} className="rv-reg-card">
                      <span className="rv-fact-card__icon"><img src="/assets/images/rv-icon-shield-check-line.svg" alt="" /></span>
                      <div>
                        <p className="rv-reg-card__name">{r.name}</p>
                        <p className="rv-reg-card__country">{r.country}</p>
                        <p className="rv-reg-card__note">{r.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rv-panel">
                  <p className="rv-proscons__heading rv-proscons__heading--safety">What we check for safety</p>
                  <div className="rv-proscons rv-proscons--safety">
                    <div className="rv-proscons__col">
                      <ul className="rv-proscons__list">
                        {['Lorem ipsum dolor sit amet consectetur.','Aliquam in nibh libero habitant nulla massa.','Sagittis vitae ipsum dolor imperdiet.'].map((t) => (
                          <li key={t}><img src="/assets/images/icon-check-fill.svg" alt="" />{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rv-proscons__col">
                      <ul className="rv-proscons__list">
                        {['Mauris in orci feugiat fringilla massa.','Adipiscing pretium sit vitae mattis facilisis.','Adipiscing pretium sit vitae mattis facilisis.'].map((t) => (
                          <li key={t}><img src="/assets/images/icon-check-fill.svg" alt="" />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── PLATFORMS ─────────────────────────────────────────────────── */}
              <div className="rv-block" id="platforms">
                <h2>Pepperstone Trading Platforms</h2>
                <p className="lead">Pepperstone supports several popular trading platforms, giving traders access to forex, CFDs, charts, indicators, and order management tools.</p>

                <div className="rv-platform-row">
                  {[
                    { logo: 'rv-logo-mt4.png',         name: 'MT4',         desc: 'Forex Trading' },
                    { logo: 'rv-logo-mt5.png',         name: 'MT5',         desc: 'Multi-Asset Tools' },
                    { logo: 'rv-logo-ctrader.png',     name: 'cTrader',     desc: 'Advance Execution' },
                    { logo: 'rv-logo-tradingview.png', name: 'TradingView', desc: 'Charting and Analysis' },
                  ].map((p) => (
                    <div key={p.name} className="rv-platform-card">
                      <img src={`/assets/images/${p.logo}`} alt="" className="rv-platform-card__logo" />
                      <p className="rv-platform-card__name">{p.name}</p>
                      <p className="rv-platform-card__desc">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rv-callout">
                  <span className="icon-btn"><img src="/assets/images/rv-icon-info-outline.svg" alt="" /></span>
                  <div className="rv-callout__text">
                    <p className="rv-callout__title">Takeaway</p>
                    <p className="lead">Beginner may prefer MT5 or TradingView, while MT4 and cTrader suit traders who want more platform control</p>
                  </div>
                </div>
              </div>

              {/* ── DEPOSIT & WITHDRAWAL ──────────────────────────────────────── */}
              <div className="rv-block" id="deposit-withdrawal">
                <h2>Pepperstone Deposit &amp; Withdrawal</h2>
                <p className="lead">Review the available payment methods, fees, processing times, and supported base currencies. Availability may vary by country and broker entity.</p>

                <div className="rv-panel">
                  <div className="rv-pay-grid">
                    {[
                      { logo: 'icon-card-outline.svg',     name: 'Credit/Debit Card' },
                      { logo: 'icon-bank.svg',             name: 'Bank Transfer' },
                      { logo: 'rv-icon-paypal-mark.png',   name: 'Paypal' },
                      { logo: 'rv-logo-skrill.png',        name: 'Skrill' },
                    ].map((pm) => (
                      <div key={pm.name} className="rv-pay-card">
                        <div className="rv-pay-card__head">
                          <span className="rv-pay-card__logo"><img src={`/assets/images/${pm.logo}`} alt="" /></span>
                          <p className="rv-pay-card__name">{pm.name}</p>
                        </div>
                        <div className="rv-pay-card__cols">
                          <div className="rv-pay-card__col">
                            <p className="rv-pay-card__label">Deposit</p>
                            <p className="rv-pay-card__meta">Fee: <strong>Free</strong></p>
                            <p className="rv-pay-card__meta">Processing Time:</p>
                            <p className="rv-pay-card__meta rv-pay-card__meta--strong">Instant</p>
                          </div>
                          <div className="rv-pay-card__col">
                            <p className="rv-pay-card__label">Withdrawal</p>
                            <p className="rv-pay-card__meta">Fee: <strong>$0</strong></p>
                            <p className="rv-pay-card__meta">Processing Time:</p>
                            <p className="rv-pay-card__meta rv-pay-card__meta--strong">1-3 Business Days</p>
                          </div>
                        </div>
                        <div className="rv-pay-card__currencies"><span>Currencies:</span><em>USD</em><em>EUR</em><em>GBP</em><em>AUD</em></div>
                      </div>
                    ))}
                  </div>

                  <div className="rv-callout">
                    <span className="icon-btn"><img src="/assets/images/rv-icon-info-outline.svg" alt="" /></span>
                    <div className="rv-callout__text">
                      <p className="rv-callout__title">Payment Takeaway</p>
                      <p className="lead">Elementum vel justo vel malesuada lectus elit laoreet penatibus egestas. Auctor tortor at cursus quis pretium imperdiet sit.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video placeholder */}
              <div className="rv-video"><img src="/assets/images/rv-video-placeholder.png" alt="" /></div>

              {/* ── COUNTRIES ─────────────────────────────────────────────────── */}
              <div className="rv-block" id="countries">
                <h2>Pepperstone Countries &amp; Promotions</h2>
                <p className="lead">Check whether Pepperstone is available in your country and review any country-specific promotions, restrictions, or account notes.</p>

                <div className="rv-panel">
                  <p className="rv-panel__heading">Your selected country</p>
                  <div className="country-select" id="reviewCountrySelect">
                    <button type="button" className="select-row country-toggle">
                      <img src="/assets/images/flag-netherlands.png" alt="" className="flag" />
                      <span className="select-value" id="reviewCountryValue">Netherlands</span>
                      <img src="/assets/images/rv-icon-chevron-down-filled.svg" alt="" className="icon-24 select-chevron" />
                    </button>
                    <div className="country-dropdown" hidden>
                      <div className="country-search">
                        <img src="/assets/images/icon-search.svg" alt="" />
                        <input type="text" placeholder="Search country..." autoComplete="off" />
                      </div>
                      <ul className="country-list" role="listbox">
                        <li className="country-option country-option--selected" role="option" data-flag="🇳🇱" data-name="Netherlands"><span className="flag-emoji">🇳🇱</span>Netherlands</li>
                        <li className="country-option" role="option" data-flag="🇬🇧" data-name="United Kingdom"><span className="flag-emoji">🇬🇧</span>United Kingdom</li>
                      </ul>
                      <p className="country-empty" hidden>No countries found.</p>
                    </div>
                  </div>
                  <p className="rv-note">Detected automatically. You can change it anytime.</p>

                  <div className="rv-info-list">
                    <div className="rv-info-list__row"><span className="rv-fact-card__icon"><img src="/assets/images/rv-icon-language.svg" alt="" /></span><span className="rv-info-list__label">Availability</span><span className="rv-info-list__value">Available</span></div>
                    <div className="rv-info-list__row"><span className="rv-fact-card__icon"><img src="/assets/images/icon-gift.svg" alt="" /></span><span className="rv-info-list__label">Welcome Bonus</span><span className="rv-info-list__value">No Active Deposit Bonus</span></div>
                    <div className="rv-info-list__row"><span className="rv-fact-card__icon"><img src="/assets/images/rv-icon-shield-warning-outline.svg" alt="" /></span><span className="rv-info-list__label">Restrictions</span><span className="rv-info-list__value">Entity-Specific terms may apply</span></div>
                  </div>

                  <p className="rv-note">Availability, promotions, restrictions, and affiliate links may vary depending on your selected country and the broker entity you register with.</p>
                  <button type="button" className="btn btn--text btn--text--px">View brokers available in Netherlands <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
                </div>
              </div>

              {/* ── FAQ ───────────────────────────────────────────────────────── */}
              <div className="rv-block" id="faq">
                <h2>Pepperstone Frequently Asked Questions</h2>
                <p className="lead">Find quick answers about Pepperstone&rsquo;s fees, safety, platforms, deposits, withdrawals, and country availability.</p>

                <div className="faq-grid rv-faq-grid">
                  <div className="faq-col">
                    {[
                      { q: 'Is Pepperstone good for beginners?',           a: 'FX Look Up compares brokers using key factors such as fees, spreads, platforms, regulations, deposit requirements, payment methods, and country availability.' },
                      { q: 'Is Pepperstone regulated?',                    a: 'Yes. Pepperstone is regulated by multiple authorities including the FCA (UK), ASIC (Australia), CySEC (EU), and DFSA (Dubai), giving traders strong investor protection across regions.' },
                      { q: "What is Pepperstone's minimum deposit?",       a: 'Pepperstone has no required minimum deposit, so you can open a Standard or Razor account and fund it with an amount that suits your budget.' },
                      { q: 'Which platforms does Pepperstone support?',    a: 'Pepperstone supports MT4, MT5, cTrader, and TradingView, all available on desktop and mobile devices.' },
                      { q: 'Does Pepperstone offer a welcome bonus?',      a: 'There is currently no active deposit bonus, though country-specific promotions may vary depending on the broker entity you register with.' },
                    ].map((faq, i) => (
                      <div key={faq.q} className={`faq-item${i === 0 ? ' is-open' : ''}`}>
                        <button type="button" className="faq-question">
                          {faq.q}<img src="/assets/images/rv-icon-chevron-down-filled.svg" alt="" />
                        </button>
                        <div className="faq-answer"><p className="lead">{faq.a}</p></div>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="button" className="btn btn--text btn--text--px">Compare Pepperstone with other brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
              </div>

            </div>{/* /rv-article__main */}

            {/* ── SIDEBAR ───────────────────────────────────────────────────── */}
            <aside className="rv-article__sidebar">
              <div className="rv-side-card">
                <div className="rv-side-card__head">
                  <img src="/assets/images/logo-pepperstone.png" alt="" className="rv-side-card__logo" />
                  <p className="rv-side-card__name">Pepperstone</p>
                </div>
                <p className="rv-side-card__stars">
                  <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />
                  <span>4.8/5</span>
                </p>
                <p className="rv-side-card__flag"><img src="/assets/images/flag-netherlands.png" alt="" />Available in Netherlands</p>
                <a href="#" className="btn btn--secondary btn--block">Visit Broker</a>
                <button type="button" className="btn btn--text btn--text--px btn--center">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
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
      <section className="rv-related">
        <div className="rv-related__head">
          <div className="rv-related__copy">
            <p className="eyebrow">RELATED BROKERS</p>
            <h2>Others Also Viewed These Brokers</h2>
            <p className="lead">Explore similar forex brokers that traders compare with Pepperstone</p>
          </div>
          <div className="rv-related__nav">
            <button type="button" className="rv-related__arrow" aria-label="Previous"><img src="/assets/images/rv-icon-chevron-round-left.svg" alt="" /></button>
            <button type="button" className="rv-related__arrow" aria-label="Next"><img src="/assets/images/rv-icon-chevron-round-right.svg" alt="" /></button>
            <a href="#" className="btn btn--text btn--text--px">View All Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
          </div>
        </div>

        <div className="rv-related__cards" id="relatedCarousel">
          {[
            { photo: 'rv-photo-icmarkets.png', name: 'IC Markets', rating: '4.8/5', bonus: 'No deposit bonus',    bonusClass: '' },
            { photo: 'rv-photo-etoro.png',     name: 'eToro',      rating: '4.8/5', bonus: 'Deposit bonus',       bonusClass: 'rv-related-card__bonus--accent' },
            { photo: 'rv-photo-avatrade.png',  name: 'AvaTrade',   rating: '4.8/5', bonus: 'No deposit bonus',    bonusClass: '' },
          ].map((b) => (
            <div key={b.name} className="rv-related-card">
              <div className="rv-related-card__top">
                <img src={`/assets/images/${b.photo}`} alt="" className="rv-related-card__photo" />
                <div>
                  <p className="rv-related-card__name">{b.name}</p>
                  <p className="rv-related-card__rating"><img src="/assets/images/icon-star.svg" alt="" />{b.rating}</p>
                </div>
              </div>
              <p className="rv-related-card__available"><img src="/assets/images/icon-check-circle.svg" alt="" />Available in your country</p>
              <div className="rv-related-card__stats">
                <div className="rv-related-card__stat"><img src="/assets/images/icon-users.svg" alt="" /><span>12,540 users</span></div>
                <div className="rv-related-card__stat"><img src="/assets/images/icon-swap.svg" alt="" /><span className="rv-related-card__stat-label">Min. spread</span><strong>0.0 pips</strong></div>
                <div className="rv-related-card__stat"><img src="/assets/images/icon-card-outline.svg" alt="" /><span className="rv-related-card__stat-label">Min. deposit</span><strong>$0</strong></div>
                <div className="rv-related-card__platform">
                  <div className="rv-related-card__stat"><img src="/assets/images/icon-pc-check.svg" alt="" /><span className="rv-related-card__stat-label">Platform</span></div>
                  <div className="rv-related-card__tags"><span>MT4</span><span>MT5</span><span>cTrader</span></div>
                </div>
                <div className="rv-related-card__stat"><img src="/assets/images/icon-gift-light.svg" alt="" /><span className="rv-related-card__stat-label">Bonus</span><strong className={b.bonusClass || undefined}>{b.bonus}</strong></div>
              </div>
              <div className="rv-related-card__ctas">
                <a href="#" className="btn btn--primary">Visit Broker</a>
                <button type="button" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG + CTA ────────────────────────────────────────────────────────── */}
      <section className="section section--blogs">
        <div className="section-bg-decor" aria-hidden="true">
          <img src="/assets/images/blogs-bg.png" alt="" />
          <div className="section-bg-decor__fade" />
        </div>
        <div className="section-inner">
          <div className="section-head section-head--center">
            <p className="eyebrow">LATEST INSIGHTS</p>
            <h2>Latest Broker Guides &amp; Forex Insights</h2>
            <p className="lead">Explore recent broker guides, platform comparisons, and trading insights to help you make better broker decisions.</p>
            <a href="/blog" className="btn btn--text">View All Posts <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
          </div>

          <div className="blog-cards">
            {[
              { img: 'blog-img-1.png', cls: 'blog-card__image--1', tag: 'Broker Guides',    date: 'May 10, 2026', title: 'Top 5 Forex Brokers with the Best Customer Support', lead: 'Compare trusted brokers with responsive support, beginner-friendly tools, and reliable service.' },
              { img: 'blog-img-2.png', cls: 'blog-card__image--2', tag: 'Trading Platforms', date: 'May 12, 2026', title: 'MT4 vs MT5: Which Platform Should You Choose?', lead: 'Learn the key differences between MetaTrader platforms and which brokers support each option.' },
              { img: 'blog-img-3.png', cls: 'blog-card__image--3', tag: 'Broker Comparison', date: 'May 14, 2026', title: 'Compare Broker Fees Before Signing Up', lead: 'Understand spreads, commissions, deposit fees, and trading costs before choosing a broker.' },
            ].map((c) => (
              <article key={c.title} className="blog-card">
                <div className={`blog-card__image ${c.cls}`}><img src={`/assets/images/${c.img}`} alt="" /></div>
                <div className="blog-card__body">
                  <div className="blog-card__text">
                    <div className="blog-meta"><span className="tag">{c.tag}</span><span className="lead">{c.date}</span></div>
                    <p className="blog-title">{c.title}</p>
                    <p className="lead">{c.lead}</p>
                  </div>
                  <a href="#" className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                </div>
              </article>
            ))}
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
