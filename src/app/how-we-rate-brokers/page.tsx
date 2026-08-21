import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HowWeRateBrokers() {
  return (
    <>
      <main>

        <section className="hero hero--flush">
          <div className="hero__border hero__border--flush hero__border--contact-gradient">

            <div className="hero__bg hero__bg--faint" aria-hidden="true">
              <img src="/assets/images/contact-hero-bg.png" alt="" />
            </div>

            <Nav activePage="about" />

            <div className="contact-hero__content">
              <div className="breadcrumb">
                <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
                <a href="/">Home</a>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">How We Rate Brokers</span>
              </div>
              <div className="contact-hero__copy">
                <p className="eyebrow">BROKER REVIEW METHODOLOGY</p>
                <h1>How FX Look Up Rates Forex Brokers</h1>
              </div>
              <p className="lead">Our broker ratings are designed to help users compare brokers through clear review categories, structured broker data, and country-aware availability checks.</p>
            </div>

          </div>
        </section>

        <section className="rate-cards">
          <div className="rate-cards__inner">
            <div className="rate-cards__intro">
              <h2>What We Look At When Reviewing Brokers</h2>
              <p className="lead">FX Look Up reviews brokers across multiple categories that can affect a trader&apos;s decision, from fees and regulation to platform, payments, and account conditions.</p>
            </div>

            <div className="rate-cards__row">
              <div className="rate-card">
                <span className="rate-card__icon"><img src="/assets/images/icon-tabler-coins.svg" alt="" /></span>
                <div>
                  <p className="rate-card__title">Fees &amp; Trading Costs</p>
                  <p className="lead">Tincidunt sollicitudin et nibh cum pretium scelerisque placerat arcu.</p>
                </div>
              </div>
              <div className="rate-card">
                <span className="rate-card__icon"><img src="/assets/images/icon-solar-shield-check.svg" alt="" /></span>
                <div>
                  <p className="rate-card__title">Regulation &amp; Safety</p>
                  <p className="lead">Neque pharetra elit lectus donec egestas fermentum.</p>
                </div>
              </div>
              <div className="rate-card">
                <span className="rate-card__icon"><img src="/assets/images/icon-ix-screen-pc-tower.svg" alt="" /></span>
                <div>
                  <p className="rate-card__title">Trading Platforms</p>
                  <p className="lead">Volutpat ornare amet morbi etiam massa faucibus id amet.</p>
                </div>
              </div>
            </div>

            <div className="rate-cards__row">
              <div className="rate-card">
                <span className="rate-card__icon"><img src="/assets/images/icon-ion-card-outline-deposit.svg" alt="" /></span>
                <div>
                  <p className="rate-card__title">Deposit &amp; Withdrawal</p>
                  <p className="lead">Tincidunt sollicitudin et nibh cum pretium scelerisque placerat arcu.</p>
                </div>
              </div>
              <div className="rate-card">
                <span className="rate-card__icon"><img src="/assets/images/icon-mage-chart-up.svg" alt="" /></span>
                <div>
                  <p className="rate-card__title">Instruments &amp; Markets</p>
                  <p className="lead">Neque pharetra elit lectus donec egestas fermentum.</p>
                </div>
              </div>
              <div className="rate-card">
                <span className="rate-card__icon"><img src="/assets/images/icon-material-language.svg" alt="" /></span>
                <div>
                  <p className="rate-card__title">Country Availability</p>
                  <p className="lead">Volutpat ornare amet morbi etiam massa faucibus id amet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rate-stats">
          <div className="rate-stats__bg" aria-hidden="true"><img src="/assets/images/rate-stats-bg.png" alt="" /></div>

          <div className="rate-stats__intro">
            <h2>How Broker Scores Are Built</h2>
            <p className="lead">Bibendum varius elit aenean etiam malesuada suspendisse eget. Vitae magnis id dictumst enim cursus luctus. Pulvinar scelerisque fringilla ultrices sodales metus eu ornare commodo vulputate. Risus aenean mauris mauris tellus. Integer phasellus erat sed integer nisi amet aliquam id sagittis. A at blandit id eget nascetur. Sed laoreet habitasse nec volutpat velit viverra. Sit nulla nibh proin enim nisl non luctus sit mi.</p>
            <p className="lead">Dolor vitae ornare morbi sit fringilla vulputate mattis egestas. Nec quis ut euismod aliquet elit. Nec eu lectus tincidunt nunc dignissim sed mauris sed consequat. Egestas consectetur maecenas tellus justo sagittis semper donec. Congue neque ac ut donec. Mattis aliquet consectetur arcu sed diam at. Vitae lacus urna erat tortor eget orci malesuada sed morbi.</p>
          </div>

          <div className="rate-stats__card">
            <p className="rate-stats__card-title">Example Rating Breakdown</p>
            <p className="lead">Mattis at ante sem nulla nulla malesuada habitasse ante donec. Egestas risus ultrices et diam.</p>
            <div className="rate-stats__rows">
              <div className="rate-stats__row">
                <p className="rate-stats__label">Fees &amp; Costs</p>
                <div className="rate-bar"><span className="rate-bar__fill" style={{ width: '25%' }}></span></div>
                <p className="rate-stats__pct">25%</p>
              </div>
              <div className="rate-stats__row">
                <p className="rate-stats__label">Regulation &amp; Safety</p>
                <div className="rate-bar"><span className="rate-bar__fill" style={{ width: '25%' }}></span></div>
                <p className="rate-stats__pct">25%</p>
              </div>
              <div className="rate-stats__row">
                <p className="rate-stats__label">Platforms &amp; Tools</p>
                <div className="rate-bar"><span className="rate-bar__fill" style={{ width: '20%' }}></span></div>
                <p className="rate-stats__pct">20%</p>
              </div>
              <div className="rate-stats__row">
                <p className="rate-stats__label">Deposit &amp; Withdrawal</p>
                <div className="rate-bar"><span className="rate-bar__fill" style={{ width: '15%' }}></span></div>
                <p className="rate-stats__pct">15%</p>
              </div>
              <div className="rate-stats__row">
                <p className="rate-stats__label">Instruments &amp; Markets</p>
                <div className="rate-bar"><span className="rate-bar__fill" style={{ width: '10%' }}></span></div>
                <p className="rate-stats__pct">10%</p>
              </div>
              <div className="rate-stats__row">
                <p className="rate-stats__label">User Experience</p>
                <div className="rate-bar"><span className="rate-bar__fill" style={{ width: '5%' }}></span></div>
                <p className="rate-stats__pct">5%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rate-country">
          <div className="rate-country__intro">
            <h2>Why Country Availability Matters</h2>
            <p className="lead">Broker availability, bonuses, affiliate links, account conditions, and payment methods can vary depending on the user&apos;s selected country. FX Look Up is designed to support country-based broker information so users can see more relevant broker options.</p>
          </div>

          <div className="rate-steps">
            <div className="rate-steps__row">
              <div className="rate-step">
                <span className="rate-step__icon"><img src="/assets/images/icon-twemoji-flag-netherlands.svg" alt="" /></span>
                <div className="rate-step__text">
                  <span className="rate-step__label">Selected Country</span>
                  <span className="rate-step__value">Netherlands</span>
                </div>
              </div>
              <div className="rate-step">
                <span className="rate-step__icon"><img src="/assets/images/icon-check-o.svg" alt="" /></span>
                <div className="rate-step__text">
                  <span className="rate-step__label">Broker availability</span>
                  <span className="rate-step__value">Checked</span>
                </div>
              </div>
              <div className="rate-step">
                <span className="rate-step__icon"><img src="/assets/images/icon-gift-outline-mdi.svg" alt="" /></span>
                <div className="rate-step__text">
                  <span className="rate-step__label">Promotions</span>
                  <span className="rate-step__value">May vary</span>
                </div>
              </div>
            </div>
            <div className="rate-steps__row rate-steps__row--center">
              <div className="rate-step rate-step--fixed">
                <span className="rate-step__icon"><img src="/assets/images/icon-link-lucide.svg" alt="" /></span>
                <div className="rate-step__text">
                  <span className="rate-step__label">Affiliate links</span>
                  <span className="rate-step__value">Country-specific</span>
                </div>
              </div>
              <div className="rate-step rate-step--fixed">
                <span className="rate-step__icon"><img src="/assets/images/icon-ion-card-outline-payment.svg" alt="" /></span>
                <div className="rate-step__text">
                  <span className="rate-step__label" style={{ fontSize: '14px' }}>Payment methods</span>
                  <span className="rate-step__value">Region-dependent</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--faq">
          <div className="section-inner" style={{ gap: '40px' }}>
            <div className="section-head section-head--center">
              <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Questions About Our Broker Ratings</h2>
            </div>

            <div className="faq-grid">
              <div className="faq-col">
                <div className="faq-item is-open">
                  <button type="button" className="faq-question">Are broker ratings the same for every country?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">No. Broker availability, promotions, and affiliate links can vary by country, so ratings are shown alongside country-aware availability checks.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">Do higher-rated brokers fit every trader?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">How often is broker data reviewed?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc.</p></div>
                </div>
              </div>
              <div className="faq-col">
                <div className="faq-item">
                  <button type="button" className="faq-question">Do affiliate links affect broker ratings?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">Should users still read the full broker review?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">Why does country availability matter?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
