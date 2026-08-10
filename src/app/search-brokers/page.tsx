import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
                <span>Home</span>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">Broker Search</span>
              </div>
              <div className="search-hero__copy search-hero__copy--centered">
                <p className="eyebrow">BROKER SEARCH</p>
                <h1>Search Forex Brokers</h1>
                <p className="lead">Find and compare trusted forex brokers by country, platforms, fees, instruments, payment methods, rating, and trading conditions.</p>
              </div>
              <div className="search-pill-wrap">
                <div className="search-pill">
                  <img src="/assets/images/icon-search.svg" alt="" />
                  <span>Search by broker, platform, payment method, or keyword...</span>
                </div>
                <p className="search-hero__hint">Start typing at least 3 characters to search</p>
              </div>
            </div>

          </div>
        </section>

        {/* RESULTS */}
        <section>
          <div className="section-inner section-inner--row">

            <aside className="search-sidebar">
              <div className="filters-panel filters-panel--sidebar">
                <div className="filters-panel__header">
                  <h3 className="filters-panel__title">Filters</h3>
                  <p className="filters-panel__sub">Refine brokers by trading needs</p>
                </div>
                <ul className="filters-list">
                  <li className="filters-item is-open">
                    <button type="button" className="filters-row">Country<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content">
                      <div className="country-select" id="filterCountrySelect">
                        <button type="button" className="select-row country-toggle">
                          <img src="/assets/images/flag-netherlands.png" alt="" className="flag" />
                          <span className="select-value">Netherlands</span>
                          <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 select-chevron" />
                        </button>
                        <div className="country-dropdown" hidden>
                          <div className="country-search">
                            <img src="/assets/images/icon-search.svg" alt="" />
                            <input type="text" placeholder="Search country..." autoComplete="off" />
                          </div>
                          <ul className="country-list" role="listbox">
                            <li className="country-option country-option--selected" role="option" data-flag="🇳🇱" data-name="Netherlands"><span className="flag-emoji">🇳🇱</span>Netherlands</li>
                            <li className="country-option" role="option" data-flag="🇬🇧" data-name="United Kingdom"><span className="flag-emoji">🇬🇧</span>United Kingdom</li>
                            <li className="country-option" role="option" data-flag="🇩🇪" data-name="Germany"><span className="flag-emoji">🇩🇪</span>Germany</li>
                            <li className="country-option" role="option" data-flag="🇫🇷" data-name="France"><span className="flag-emoji">🇫🇷</span>France</li>
                            <li className="country-option" role="option" data-flag="🇨🇦" data-name="Canada"><span className="flag-emoji">🇨🇦</span>Canada</li>
                            <li className="country-option" role="option" data-flag="🇺🇸" data-name="United States"><span className="flag-emoji">🇺🇸</span>United States</li>
                            <li className="country-option" role="option" data-flag="🇪🇸" data-name="Spain"><span className="flag-emoji">🇪🇸</span>Spain</li>
                            <li className="country-option" role="option" data-flag="🇮🇹" data-name="Italy"><span className="flag-emoji">🇮🇹</span>Italy</li>
                            <li className="country-option" role="option" data-flag="🇦🇺" data-name="Australia"><span className="flag-emoji">🇦🇺</span>Australia</li>
                          </ul>
                          <p className="country-empty" hidden>No countries found.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="filters-item is-open">
                    <button type="button" className="filters-row">Instruments<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content">
                      <label className="filters-checkbox"><input type="checkbox" defaultChecked /><span className="filters-checkbox__box"></span>General Brokers</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Forex</label>
                      <label className="filters-checkbox"><input type="checkbox" defaultChecked /><span className="filters-checkbox__box"></span>CFDs</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Stocks</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Crypto</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Options</label>
                    </div>
                  </li>
                  <li className="filters-item is-open">
                    <button type="button" className="filters-row">Platforms<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content">
                      <label className="filters-checkbox"><input type="checkbox" defaultChecked /><span className="filters-checkbox__box"></span>MT4</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>MT5</label>
                      <label className="filters-checkbox"><input type="checkbox" defaultChecked /><span className="filters-checkbox__box"></span>cTrader</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>TradingView</label>
                    </div>
                  </li>
                  <li className="filters-item is-open">
                    <button type="button" className="filters-row">Minimum Deposit<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content">
                      <div className="filters-range">
                        <div className="filters-range__values">
                          <span className="filters-range__value" id="depositRangeMinLabel">$0</span>
                          <span className="filters-range__value" id="depositRangeMaxLabel">$500+</span>
                        </div>
                        <div className="filters-range__track">
                          <div className="filters-range__fill" id="depositRangeFill"></div>
                          <input type="range" min="0" max="500" step="10" defaultValue="0" className="filters-range__input" id="depositRangeMin" />
                          <input type="range" min="0" max="500" step="10" defaultValue="330" className="filters-range__input" id="depositRangeMax" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="filters-item">
                    <button type="button" className="filters-row">Rating<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content" hidden>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>5 Stars</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>4+ Stars</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>3+ Stars</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>2+ Stars</label>
                    </div>
                  </li>
                  <li className="filters-item">
                    <button type="button" className="filters-row">Deposit Method<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content" hidden>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Bank Transfer</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Credit Card</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Crypto</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>E-Wallet</label>
                    </div>
                  </li>
                  <li className="filters-item">
                    <button type="button" className="filters-row">Deposit Bonus<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content" hidden>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>No Deposit Bonus</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Welcome Bonus</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Deposit Match Bonus</label>
                    </div>
                  </li>
                </ul>
                <button type="button" className="filters-panel__reset">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12a9 9 0 1 0 3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 4v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Reset filters
                </button>
              </div>
            </aside>

            <div className="search-content">

              <div className="search-results__head">
                <p className="search-results__count">Showing <strong>9 brokers</strong></p>
                <span className="sb-sort-label">Sort by</span>
                <div className="mini-dropdown" data-mini-dropdown="">
                  <button type="button" className="sb-sort-toggle mini-dropdown__toggle" aria-expanded="false">
                    <span className="mini-dropdown__label">Best Match</span>
                    <img src="/assets/images/icon-chevron-down.svg" alt="" />
                  </button>
                  <ul className="mini-dropdown__panel" hidden>
                    <li><button type="button" className="mini-dropdown__option is-selected">Best Match</button></li>
                    <li><button type="button" className="mini-dropdown__option">Lowest Spread</button></li>
                    <li><button type="button" className="mini-dropdown__option">Highest Rated</button></li>
                    <li><button type="button" className="mini-dropdown__option">Most Popular</button></li>
                  </ul>
                </div>
                <div className="view-toggle">
                  <button type="button" className="is-active" aria-label="Grid view">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor"/><rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor"/><rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor"/><rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor"/></svg>
                  </button>
                  <button type="button" aria-label="List view">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>
              </div>

              <div className="filter-chips">
                <span className="filter-chip">Netherlands<button type="button" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></button></span>
                <span className="filter-chip">General Brokers<button type="button" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></button></span>
                <span className="filter-chip">CFDs<button type="button" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></button></span>
                <span className="filter-chip">MT4<button type="button" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></button></span>
                <span className="filter-chip">cTrader<button type="button" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></button></span>
                <button type="button" className="filter-chips__clear">Clear All</button>
              </div>

              <div className="broker-grid">

                <article className="broker-card broker-card--featured">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-pepperstone.png" alt="Pepperstone" className="broker-logo" />
                    <div>
                      <span className="top10-card__badge">TOP PICK</span>
                      <p className="broker-name">Pepperstone</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Low-cost forex broker with tight spreads and fast execution.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--secondary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-icmarkets.png" alt="IC Markets" className="broker-logo" />
                    <div>
                      <p className="broker-name">IC Markets</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Raw ECN pricing with ultra-fast order execution.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-etoro.png" alt="eToro" className="broker-logo broker-logo--contain" />
                    <div>
                      <p className="broker-name">eToro</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Social trading platform with copy-trading tools.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-avatrade.png" alt="AvaTrade" className="broker-logo" />
                    <div>
                      <p className="broker-name">AvaTrade</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Regulated broker with strong education resources.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-xm.png" alt="XM" className="broker-logo" />
                    <div>
                      <p className="broker-name">XM</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Flexible account types with generous bonus offers.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-xtb.png" alt="XTB" className="broker-logo" />
                    <div>
                      <p className="broker-name">XTB</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Award-winning platform with in-depth market research.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-vantage.png" alt="Vantage" className="broker-logo" />
                    <div>
                      <p className="broker-name">Vantage</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">ECN/STP execution with competitive raw spreads.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-plus500.png" alt="Plus500" className="broker-logo" style={{ objectFit: 'contain', background: '#0c2780' }} />
                    <div>
                      <p className="broker-name">Plus500</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Simple CFD trading platform for beginners and pros.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

                <article className="broker-card">
                  <div className="broker-card__head">
                    <img src="/assets/images/logo-oanda.png" alt="OANDA" className="broker-logo" />
                    <div>
                      <p className="broker-name">OANDA</p>
                      <span className="rating-badge"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    </div>
                  </div>
                  <p className="broker-card__desc">Trusted broker with transparent pricing and API access.</p>
                  <ul className="broker-facts">
                    <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>0.0 pips</strong></li>
                    <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>$0</strong></li>
                    <li className="broker-facts__platform">
                      <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
                      <div className="tag-row"><span className="tag">MT4</span><span className="tag">MT5</span><span className="tag">cTrader</span></div>
                    </li>
                  </ul>
                  <div className="broker-card__ctas">
                    <a href="#" className="btn btn--primary btn--block">Visit Broker</a>
                    <a href="#" className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                  </div>
                </article>

              </div>

              <div className="load-more-row">
                <button type="button" className="load-more-btn">Load More Brokers <img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
              </div>

            </div>
          </div>
        </section>

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
