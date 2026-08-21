import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HowWeMakeMoney() {
  return (
    <>
      <main>

        <section className="hero hero--flush">
          <div className="hero__border hero__border--flush hero__border--money-gradient">

            <div className="hero__bg hero__bg--faint" aria-hidden="true">
              <img src="/assets/images/contact-hero-bg.png" alt="" />
            </div>

            <Nav activePage="about" />

            <div className="contact-hero__content">
              <div className="breadcrumb">
                <img src="/assets/images/icon-home-outline.svg" alt="" className="icon-24" />
                <a href="/">Home</a>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">Affiliate Disclosure</span>
              </div>
              <div className="contact-hero__copy">
                <p className="eyebrow">AFFILIATE DISCLOSURE</p>
                <h1>How FX Look Up Makes Money</h1>
              </div>
              <p className="lead">Facilisi imperdiet nibh vitae sed. Pellentesque ultricies posuere eu vestibulum dis nullam scelerisque non. Congue nec libero accumsan mauris varius scelerisque. Integer euismod fermentum elit molestie turpis maecenas nibh ultrices.</p>
            </div>

          </div>
        </section>

        <section className="money-section">
          <div className="money-intro">
            <div className="money-intro__text">
              <div className="money-heading">
                <span className="money-heading__num">1.</span>
                <h2>We May Earn From Broker Links</h2>
              </div>
              <div className="money-body">
                <p>Bibendum varius elit aenean etiam malesuada suspendisse eget. Vitae magnis id dictumst enim cursus luctus. Pulvinar scelerisque fringilla ultrices sodales metus eu ornare commodo vulputate. Risus aenean mauris mauris tellus. Integer phasellus erat sed integer nisi amet aliquam id sagittis. A at blandit id eget nascetur. Sed laoreet habitasse nec volutpat velit viverra. Sit nulla nibh proin enim nisl non luctus sit mi.</p>
                <p>Dolor vitae ornare morbi sit fringilla vulputate mattis egestas. Nec quis ut euismod aliquet elit. Nec eu lectus tincidunt nunc dignissim sed mauris sed consequat. Egestas consectetur maecenas tellus justo sagittis semper donec. Congue neque ac ut donec.</p>
              </div>
            </div>
            <div className="rate-stats__card">
              <p className="rate-stats__card-title">How affiliate links work</p>
              <div className="money-howto__steps">
                <div className="money-howto__step">
                  <span className="money-howto__num"><span>1</span></span>
                  <p>User compares brokers</p>
                </div>
                <div className="money-howto__step">
                  <span className="money-howto__num"><span>2</span></span>
                  <p>User clicks a broker link</p>
                </div>
                <div className="money-howto__step">
                  <span className="money-howto__num"><span>3</span></span>
                  <p>User visits the broker website</p>
                </div>
                <div className="money-howto__step">
                  <span className="money-howto__num"><span>4</span></span>
                  <p>FX Look Up may receive compensation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="money-section" style={{ flexDirection: 'column', gap: '40px' }}>
          <div className="money-heading">
            <span className="money-heading__num">2.</span>
            <h2>Do Affiliate Links Affect Broker Ratings?</h2>
          </div>
          <div className="money-body" style={{ paddingBottom: 0 }}>
            <p>Bibendum varius elit aenean etiam malesuada suspendisse eget. Vitae magnis id dictumst enim cursus luctus. Pulvinar scelerisque fringilla ultrices sodales metus eu ornare commodo vulputate. Risus aenean mauris mauris tellus. Integer phasellus erat sed integer nisi amet aliquam id sagittis. A at blandit id eget nascetur. Sed laoreet habitasse nec volutpat velit viverra. Sit nulla nibh proin enim nisl non luctus sit mi.</p>
          </div>
          <div className="rate-cards__row money-cards-row" style={{ boxSizing: 'border-box' }}>
            <div className="rate-card">
              <span className="rate-card__icon"><img src="/assets/images/icon-material-star-outline.svg" alt="" /></span>
              <div>
                <p className="rate-card__title">Est facilisis quis sed</p>
                <p className="lead">Tincidunt sollicitudin et nibh cum pretium scelerisque placerat arcu.</p>
              </div>
            </div>
            <div className="rate-card">
              <span className="rate-card__icon"><img src="/assets/images/icon-material-language.svg" alt="" /></span>
              <div>
                <p className="rate-card__title">Sit rhoncus at placerat</p>
                <p className="lead">Neque pharetra elit lectus donec egestas fermentum.</p>
              </div>
            </div>
            <div className="rate-card">
              <span className="rate-card__icon"><img src="/assets/images/icon-solar-shield-check.svg" alt="" /></span>
              <div>
                <p className="rate-card__title">At bibendum cras aliquet</p>
                <p className="lead">Volutpat ornare amet morbi etiam massa faucibus id amet.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="money-section">
          <div className="money-keep">
            <div className="money-keep__text">
              <div className="money-heading">
                <span className="money-heading__num">3.</span>
                <h2>Important Things To Keep in Mind</h2>
              </div>
              <div className="money-body">
                <p>Bibendum varius elit aenean etiam malesuada suspendisse eget. Vitae magnis id dictumst enim cursus luctus. Pulvinar scelerisque fringilla ultrices sodales metus eu ornare commodo vulputate. Risus aenean mauris mauris tellus.</p>
              </div>
            </div>
            <div className="money-keep__list">
              <div className="money-keep__item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>FX Look Up may earn money from some broker links.</span></div>
              <div className="money-keep__item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Not every broker link may be an affiliate link.</span></div>
              <div className="money-keep__item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Broker offers, fees, and availability can change.</span></div>
              <div className="money-keep__item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Users should read the full broker review before choosing a broker.</span></div>
              <div className="money-keep__item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Users should confirm important details directly with the broker.</span></div>
              <div className="money-keep__item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Trading forex and CFDs involves risk and may not be suitable for every user.</span></div>
            </div>
          </div>
        </section>

        <section className="money-section">
          <div className="money-transparency">
            <div className="money-transparency__img"><img src="/assets/images/money-transparency-img.png" alt="" /></div>
            <div className="money-transparency__text">
              <div className="money-heading">
                <span className="money-heading__num">4.</span>
                <h2>Our Commitment to Transparency</h2>
              </div>
              <div className="money-body">
                <p>Bibendum varius elit aenean etiam malesuada suspendisse eget. Vitae magnis id dictumst enim cursus luctus. Pulvinar scelerisque fringilla ultrices sodales metus eu ornare commodo vulputate. Risus aenean mauris mauris tellus.</p>
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
