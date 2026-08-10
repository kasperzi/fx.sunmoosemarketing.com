import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BestBrokerPage() {
  return (
    <>
      <main>

        {/* HERO */}
        <section className="hero hero--flush">
          <div className="hero__border">
            <div className="hero__bg" aria-hidden="true">
              <img src="/assets/images/hero-best-broker-bg.png" alt="" />
              <div className="hero__bg-gradient"></div>
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
                  <span className="breadcrumb__current">Best Forex Brokers for Beginners</span>
                </div>
                <h1>Best Forex Brokers for Beginners</h1>
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

        {/* TOP 10 */}
        <section className="bb-top10">
          <div className="section-inner">
            <div className="bb-top10__head">
              <div className="bb-top10__head-copy">
                <p className="eyebrow">BEGINNER BROKER RANKING</p>
                <h2>Top 10 Forex Brokers for Beginners</h2>
                <p className="lead">Our beginner broker rankings are based on platform usability, minimum deposit, fees, regulation, educational tools, and overall broker rating.</p>
              </div>
              <a href="#" className="btn btn--text">Compare all beginner brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>

            {/* Podium — top 3 */}
            <div className="top10-podium">
              <div className="top10-card top10-card--pick">
                <div className="top10-card__head">
                  <span className="top10-card__rank">#1</span>
                  <div className="top10-card__body">
                    <div className="top10-card__logo-row">
                      <img src="/assets/images/logo-pepperstone-fyb.png" alt="" className="top10-card__logo" />
                      <div>
                        <span className="top10-card__badge">TOP PICK</span>
                        <p className="top10-card__name">Pepperstone</p>
                        <p className="top10-card__rating">
                          <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />4.8/5
                        </p>
                      </div>
                    </div>
                    <p className="top10-card__bestfor"><strong>Best for:</strong> Low-Cost Beginner Trading</p>
                  </div>
                </div>
                <div className="top10-card__ctas">
                  <a href="#" className="btn btn--secondary">Visit Broker</a>
                  <a href="#" className="btn btn--text">Read Review <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
              </div>

              <div className="top10-card">
                <div className="top10-card__head">
                  <span className="top10-card__rank">#2</span>
                  <div className="top10-card__body">
                    <div className="top10-card__logo-row">
                      <img src="/assets/images/logo-icmarkets-fyb.png" alt="" className="top10-card__logo" />
                      <div>
                        <span className="top10-card__badge" style={{ visibility: 'hidden' }}>TOP PICK</span>
                        <p className="top10-card__name">IC Markets</p>
                        <p className="top10-card__rating">
                          <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />4.8/5
                        </p>
                      </div>
                    </div>
                    <p className="top10-card__bestfor"><strong>Best for:</strong> Low Spreads</p>
                  </div>
                </div>
                <div className="top10-card__ctas">
                  <a href="#" className="btn btn--primary">Visit Broker</a>
                  <a href="#" className="btn btn--text">Read Review <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
              </div>

              <div className="top10-card">
                <div className="top10-card__head">
                  <span className="top10-card__rank">#3</span>
                  <div className="top10-card__body">
                    <div className="top10-card__logo-row">
                      <span className="top10-card__logo match-card__logo--etoro"><img src="/assets/images/logo-etoro-fyb.png" alt="" /></span>
                      <div>
                        <span className="top10-card__badge" style={{ visibility: 'hidden' }}>TOP PICK</span>
                        <p className="top10-card__name">eToro</p>
                        <p className="top10-card__rating">
                          <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />4.8/5
                        </p>
                      </div>
                    </div>
                    <p className="top10-card__bestfor"><strong>Best for:</strong> Copy Trading</p>
                  </div>
                </div>
                <div className="top10-card__ctas">
                  <a href="#" className="btn btn--primary">Visit Broker</a>
                  <a href="#" className="btn btn--text">Read Review <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
              </div>
            </div>

            {/* Table — #4–10 */}
            <div className="top10-table">
              <div className="top10-table__head">
                <span>Rank</span>
                <span>Broker</span>
                <span>Best For</span>
                <span>Rating</span>
              </div>
              {[
                { rank: 4, logo: 'logo-avatrade.png', name: 'AvaTrade', bestFor: 'Education Tools' },
                { rank: 5, logo: 'logo-xm.png', name: 'XM', bestFor: 'Low Entry Deposit' },
                { rank: 6, logo: 'logo-xtb.png', name: 'XTB', bestFor: 'Simple Platform' },
                { rank: 7, logo: 'logo-fpmarkets.png', name: 'FP Markets', bestFor: 'Platform Choice' },
                { rank: 8, logo: 'logo-vantage.png', name: 'Vantage', bestFor: 'Beginner Promotions' },
                { rank: 9, logo: 'logo-plus500.png', name: 'Plus500', bestFor: 'CFD Simplicity', plus500: true },
                { rank: 10, logo: 'logo-oanda.png', name: 'OANDA', bestFor: 'Low-cost beginner trading' },
              ].map(({ rank, logo, name, bestFor, plus500 }) => (
                <div className="top10-row" key={rank}>
                  <span className="top10-row__rank">#{rank}</span>
                  <div className="top10-row__broker">
                    <img src={`/assets/images/${logo}`} alt="" className={`top10-row__logo${plus500 ? ' top10-row__logo--plus500' : ''}`} />
                    <span className="top10-row__name">{name}</span>
                  </div>
                  <p className="top10-row__bestfor">{bestFor}</p>
                  <p className="top10-row__rating">
                    <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />4.8/5
                  </p>
                  <div className="top10-row__visit">
                    <a href="#" className="btn btn--text">Visit Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE + SIDEBAR */}
        <section className="bb-article">
          <div className="section-inner" style={{ gap: 0 }}>
            <div className="bb-article__layout">
              <div className="bb-article__main">

                <div className="bb-video">
                  <img src="/assets/images/video-placeholder.png" alt="" />
                </div>

                <div className="bb-block">
                  <h3>How We Compare Beginner-Friendly Forex Brokers</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id. Sed varius turpis elit lacus tempor ac risus. Facilisis quam morbi quam ornare facilisis non vulputate risus. Fames hendrerit malesuada libero nulla scelerisque et.</p>
                  <p className="lead">Dolor laoreet eget egestas sodales neque fusce erat proin. Sed ac varius enim posuere massa. Faucibus venenatis enim gravida in aenean euismod nunc euismod.</p>
                  <p className="lead">Enim ut id fames sit viverra orci nunc et. Euismod sit dui nunc penatibus ipsum turpis duis sit faucibus. Purus a viverra adipiscing amet commodo morbi morbi arcu.</p>
                </div>

                {/* Broker comparison table */}
                <div className="bb-broker-table">
                  <div className="bb-broker-table__head">
                    <span>Broker</span>
                    <span>Ratings</span>
                    <span>Min.<br />Deposit</span>
                    <span>Spread</span>
                    <span>Licensed</span>
                    <span></span>
                  </div>
                  {[
                    { logo: 'logo-avatrade.png', name: 'AvaTrade' },
                    { logo: 'logo-xm.png', name: 'XM' },
                    { logo: 'logo-xtb.png', name: 'XTB' },
                    { logo: 'logo-fpmarkets.png', name: 'FP Markets' },
                    { logo: 'logo-vantage.png', name: 'Vantage' },
                    { logo: 'logo-plus500.png', name: 'Plus500', plus500: true },
                    { logo: 'logo-oanda.png', name: 'OANDA' },
                  ].map(({ logo, name, plus500 }) => (
                    <div className="bb-broker-row" key={name}>
                      <div className="bb-broker-row__broker">
                        <img src={`/assets/images/${logo}`} alt="" className={`bb-broker-row__logo${plus500 ? ' bb-broker-row__logo--plus500' : ''}`} />
                        <span className="bb-broker-row__name">{name}</span>
                      </div>
                      <p className="bb-broker-row__rating"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</p>
                      <p className="bb-broker-row__stat">$0</p>
                      <p className="bb-broker-row__stat">0.0 pips</p>
                      <div className="bb-broker-row__flags">
                        <img src="/assets/images/flag-australia.svg" alt="" />
                        <img src="/assets/images/flag-canada.svg" alt="" />
                        <img src="/assets/images/flag-france.svg" alt="" />
                        <span>+3</span>
                      </div>
                      <a href="#" className="btn btn--text">Visit Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                    </div>
                  ))}
                </div>

                <div className="bb-block">
                  <h3>How We Compare Beginner-Friendly Forex Brokers</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id. Sed varius turpis elit lacus tempor ac risus. Facilisis quam morbi quam ornare facilisis non vulputate risus.</p>
                </div>

                {/* Mini fee table */}
                <div className="bb-mini-table">
                  <div className="bb-mini-table__row">
                    <div className="bb-mini-table__cell bb-mini-table__cell--head">Broker</div>
                    <div className="bb-mini-table__cell bb-mini-table__cell--dropdown">
                      <div className="mini-dropdown" data-mini-dropdown>
                        <button type="button" className="bb-mini-table__dropdown mini-dropdown__toggle" aria-expanded="false">
                          <span className="mini-dropdown__label">Inactivity fee</span>
                          <img src="/assets/images/icon-caret-down.svg" alt="" className="mini-dropdown__caret" />
                        </button>
                        <ul className="mini-dropdown__panel" hidden>
                          <li><button type="button" className="mini-dropdown__option is-selected">Inactivity fee</button></li>
                          <li><button type="button" className="mini-dropdown__option">Deposit fee</button></li>
                          <li><button type="button" className="mini-dropdown__option">Commission</button></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bb-mini-table__cell bb-mini-table__cell--dropdown">
                      <div className="mini-dropdown" data-mini-dropdown>
                        <button type="button" className="bb-mini-table__dropdown mini-dropdown__toggle" aria-expanded="false">
                          <span className="mini-dropdown__label">Withdrawal fee</span>
                          <img src="/assets/images/icon-caret-down.svg" alt="" className="mini-dropdown__caret" />
                        </button>
                        <ul className="mini-dropdown__panel" hidden>
                          <li><button type="button" className="mini-dropdown__option is-selected">Withdrawal fee</button></li>
                          <li><button type="button" className="mini-dropdown__option">Deposit fee</button></li>
                          <li><button type="button" className="mini-dropdown__option">Commission</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {[
                    { name: 'Oanda', inactivity: true, withdrawal: '$0' },
                    { name: 'Pepperstone', inactivity: false, withdrawal: '$0' },
                    { name: 'FXCM', inactivity: true, withdrawal: '$0' },
                  ].map(({ name, inactivity, withdrawal }) => (
                    <div className="bb-mini-table__row" key={name}>
                      <div className="bb-mini-table__cell bb-mini-table__cell--head">{name}</div>
                      <div className="bb-mini-table__cell">
                        <img src={`/assets/images/${inactivity ? 'icon-check-mark.svg' : 'icon-xcircle.svg'}`} alt="" className={inactivity ? 'icon-20' : 'icon-24'} />
                      </div>
                      <div className="bb-mini-table__cell">{withdrawal}</div>
                    </div>
                  ))}
                </div>

                {/* CTA 1 */}
                <div className="bb-cta">
                  <div className="bb-cta__content">
                    <div className="bb-cta__copy">
                      <p className="eyebrow">BROKER FINDER</p>
                      <h4>Still Deciding Which Beginner Broker Fits You Best?</h4>
                      <p className="lead">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id.</p>
                    </div>
                    <div className="bb-cta__actions">
                      <div className="bb-cta__buttons">
                        <a href="/find-broker" className="btn btn--secondary">Find Your Broker</a>
                        <a href="/compare-brokers" className="btn btn--text">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
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
                  <div className="bb-cta__image"><img src="/assets/images/cta1-image.png" alt="" /></div>
                </div>

                <div className="bb-block">
                  <h3>How We Compare Beginner-Friendly Forex Brokers</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id. Sed varius turpis elit lacus tempor ac risus. Facilisis quam morbi quam ornare facilisis non vulputate risus.</p>
                </div>

                {/* CTA 2 — overlay */}
                <div className="bb-cta bb-cta--overlay">
                  <div className="bb-cta__content">
                    <div className="bb-cta__top">
                      <div className="bb-cta__copy">
                        <p className="eyebrow">BROKER FINDER</p>
                        <h4>Still Deciding Which Beginner Broker Fits You Best?</h4>
                      </div>
                      <ul className="bb-cta__checklist">
                        <li><img src="/assets/images/icon-check-fill.svg" alt="" />Eget fusce non consequat</li>
                        <li><img src="/assets/images/icon-check-fill.svg" alt="" />Eget fusce non consequat</li>
                        <li><img src="/assets/images/icon-check-fill.svg" alt="" />Eget fusce non consequat</li>
                      </ul>
                    </div>
                    <div className="bb-cta__buttons">
                      <a href="/find-broker" className="btn btn--secondary">Find Your Broker</a>
                      <a href="/compare-brokers" className="btn btn--text">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                    </div>
                  </div>
                  <div className="bb-cta__image-wrap">
                    <img src="/assets/images/cta2-bg.svg" alt="" className="bb-cta__shape" />
                    <img src="/assets/images/cta2-badge.png" alt="" className="bb-cta__photo" />
                    <div className="bb-cta__score">
                      <div className="bb-cta__score-row">
                        <img src="/assets/images/icon-star.svg" alt="" />
                        <span className="bb-cta__score-value">4.9/5</span>
                      </div>
                      <span className="bb-cta__score-label">Overall Score</span>
                    </div>
                  </div>
                </div>

                <div className="bb-block">
                  <h3>How We Compare Beginner-Friendly Forex Brokers</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id.</p>
                </div>

                {/* Comparison cards */}
                <div className="bb-block" style={{ gap: '24px' }}>
                  {[
                    { rank: 1, logo: 'logo-pepperstone-fyb.png', name: 'Pepperstone', isPick: true, logoWrap: false },
                    { rank: 2, logo: 'logo-icmarkets-fyb.png', name: 'IC Markets', isPick: false, logoWrap: false },
                    { rank: 3, logo: 'logo-etoro-fyb.png', name: 'eToro', isPick: false, logoWrap: true },
                  ].map(({ rank, logo, name, isPick, logoWrap }) => (
                    <div className={`bb-comparison-card${isPick ? ' bb-comparison-card--pick' : ''}`} key={rank}>
                      <div className="bb-comparison-card__top">
                        <div className="bb-comparison-card__info">
                          <span className="bb-comparison-card__rank">#{rank}</span>
                          <div className="bb-comparison-card__body">
                            <div className="bb-comparison-card__head">
                              {logoWrap
                                ? <span className="bb-comparison-card__logo match-card__logo--etoro"><img src={`/assets/images/${logo}`} alt="" /></span>
                                : <img src={`/assets/images/${logo}`} alt="" className="bb-comparison-card__logo" />
                              }
                              <div>
                                {isPick && <span className="top10-card__badge">TOP PICK</span>}
                                <p className="bb-comparison-card__name">{name}</p>
                                <p className="bb-comparison-card__rating">
                                  <img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star.svg" alt="" /><img src="/assets/images/icon-star-half.svg" alt="" />4.8/5
                                </p>
                              </div>
                            </div>
                            <p className="bb-comparison-card__desc">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id.</p>
                          </div>
                        </div>
                        <div className="bb-comparison-card__ctas">
                          <a href="#" className={`btn ${isPick ? 'btn--secondary' : 'btn--primary'}`}>Visit Broker</a>
                          <a href="#" className="btn btn--text">Read Review <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                        </div>
                      </div>
                      <div className="bb-comparison-card__info-grid">
                        <div className="bb-comparison-card__col">
                          <div className="bb-comparison-card__labels">
                            <p>Minimum deposit</p><p>Time Open Account</p><p>Credit card / Debit Card</p><p>Spread</p><p>Demo Account</p>
                          </div>
                          <div className="bb-comparison-card__values">
                            <p>$0</p><p>Instant</p>
                            <p><img src="/assets/images/icon-check-mark.svg" alt="" /></p>
                            <p>0</p>
                            <p><img src="/assets/images/icon-check-mark.svg" alt="" /></p>
                          </div>
                        </div>
                        <div className="bb-comparison-card__divider"></div>
                        <div className="bb-comparison-card__col">
                          <div className="bb-comparison-card__labels bb-comparison-card__labels--muted">
                            <p>Mobile Platform Score</p><p>Inactivity fee</p><p>Comission</p><p>Fractional Shares</p><p>US Stock fee</p>
                          </div>
                          <div className="bb-comparison-card__values bb-comparison-card__values--accent">
                            <p>4.8</p><p>No</p><p>10 USD</p>
                            <p><img src="/assets/images/icon-xcircle.svg" alt="" /></p>
                            <p>1.2 USD</p>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="btn btn--text bb-comparison-card__compare">Compare Broker <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                    </div>
                  ))}
                </div>

                <div className="bb-block">
                  <h3>How We Compare Beginner-Friendly Forex Brokers</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur. Tristique et risus phasellus varius. Rhoncus eget ac blandit pharetra id. Sed varius turpis elit lacus tempor ac risus.</p>
                </div>

              </div>

              {/* SIDEBAR */}
              <aside className="bb-article__sidebar">
                <div className="bb-sidebar-card">
                  <div className="bb-sidebar-card__head">
                    <h4>Top Brokers for Beginners</h4>
                    <p className="lead">Quick shortlist from this page&rsquo;s ranked brokers.</p>
                  </div>
                  {[
                    { rank: 1, logo: 'logo-pepperstone-fyb.png', name: 'Pepperstone', active: true },
                    { rank: 2, logo: 'logo-icmarkets-fyb.png', name: 'IC Markets', active: false },
                    { rank: 3, logo: 'logo-etoro-fyb.png', name: 'eToro', active: false, etoro: true },
                    { rank: 4, logo: 'logo-avatrade.png', name: 'AvaTrade', active: false },
                    { rank: 5, logo: 'logo-xm.png', name: 'XM', active: false },
                  ].map(({ rank, logo, name, active, etoro }) => (
                    <div className={`match-card${active ? ' match-card--active' : ''}`} key={rank}>
                      <div className="match-card__info">
                        <span className="match-card__rank">#{rank}</span>
                        {etoro
                          ? <span className="match-card__logo match-card__logo--etoro"><img src={`/assets/images/${logo}`} alt="" /></span>
                          : <img src={`/assets/images/${logo}`} alt="" className="match-card__logo" />
                        }
                        <div className="match-card__text">
                          <p className="match-card__name">{name}</p>
                          <p className="match-card__rating"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</p>
                        </div>
                      </div>
                      <span className="icon-btn match-card__link"><img src="/assets/images/icon-arrow-up-right.svg" alt="" /></span>
                    </div>
                  ))}
                  <a href="/find-broker" className="btn btn--secondary btn--block">Find Your Broker</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BLOGS + NEWSLETTER */}
        <section className="section section--blogs">
          <div className="section-bg-decor" aria-hidden="true">
            <img src="/assets/images/blogs-bg.png" alt="" />
            <div className="section-bg-decor__fade"></div>
          </div>
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
