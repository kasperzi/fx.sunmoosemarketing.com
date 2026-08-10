import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function AboutUs() {
  return (
    <>
      <main>

        <section className="hero hero--flush">
          <div className="hero__border">

            <div className="hero__bg" aria-hidden="true">
              <img src="/assets/images/about-hero-bg.png" alt="" />
              <div className="hero__bg-gradient"></div>
            </div>

            <Nav activePage="about" />

            <div className="about-hero">
              <div className="about-hero__content">
                <div className="about-hero__copy">
                  <div className="about-hero__copy-top">
                    <p className="eyebrow">ABOUT FX LOOK UP</p>
                    <h1>Helping Traders Compare Forex Brokers With Confidence</h1>
                  </div>
                  <p className="lead">Sed sed tellus quis amet libero velit pretium enim. Nibh nunc dignissim magna scelerisque. Quam tellus aliquet nunc turpis feugiat imperdiet lorem malesuada ut.</p>
                </div>
                <div className="about-hero__buttons">
                  <a href="/find-broker" className="btn btn--secondary">Find Your Broker</a>
                  <a href="/compare-brokers" className="btn btn--text">Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
              </div>
              <div className="about-hero__media">
                <img src="/assets/images/about-hero-shape.svg" alt="" className="about-hero__shape" />
                <div className="about-hero__photo-frame">
                  <img src="/assets/images/about-hero-photo.png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="about-mission">
          <div className="about-mission__top">
            <div className="about-mission__copy">
              <p className="eyebrow">OUR MISSION</p>
              <h2>Making Broker Research Clearer, Faster, and More Transparent</h2>
              <p className="lead">Mattis at ante sem nulla nulla malesuada habitasse ante donec. Egestas risus ultrices et diam. Posuere est sem velit commodo. Libero libero dolor id sit leo enim. Tincidunt augue massa augue suspendisse in sapien duis id nec. Aliquam porttitor maecenas cursus cursus in lobortis et sit. Tincidunt viverra euismod leo ut venenatis. Dapibus est donec quis non a facilisis et aliquet. Eu enim hendrerit metus morbi cursus leo proin. Sagittis elit urna imperdiet et nullam duis ut. Mi magna felis quam bibendum cursus volutpat imperdiet. Mauris euismod orci cras amet magnis diam nulla.</p>
            </div>
            <div className="about-mission__list">
              <p className="about-mission__list-title">What we help users compare</p>
              <div className="about-mission__check-item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Broker ratings and review scores</span></div>
              <div className="about-mission__check-item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Fees, spreads, and commissions</span></div>
              <div className="about-mission__check-item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Trading platforms and tools</span></div>
              <div className="about-mission__check-item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Regulation and safety information</span></div>
              <div className="about-mission__check-item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Deposit and withdrawal methods</span></div>
              <div className="about-mission__check-item"><span className="about-mission__check-icon"><img src="/assets/images/icon-check-fill-solid.svg" alt="" /></span><span>Country-specific broker availability</span></div>
            </div>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <p className="about-stat__value">100+</p>
              <p className="about-stat__label">Trusted brokers compared worldwide.</p>
              <a href="/compare-brokers" className="btn btn--text" style={{ alignSelf: 'center' }}>Compare Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
            <div className="about-stat">
              <p className="about-stat__value">25+</p>
              <p className="about-stat__label">Countries and markets supported.</p>
              <a href="/search-brokers" className="btn btn--text" style={{ alignSelf: 'center' }}>Explore Markets <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
            <div className="about-stat">
              <p className="about-stat__value">24/7</p>
              <p className="about-stat__label">Updated broker data and offers.</p>
              <a href="/search-brokers" className="btn btn--text" style={{ alignSelf: 'center' }}>View brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
            <div className="about-stat">
              <p className="about-stat__value">4.3/5</p>
              <p className="about-stat__label">Average user satisfaction rating.</p>
              <a href="/best-broker" className="btn btn--text" style={{ alignSelf: 'center' }}>View Top Rated <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
          </div>
        </section>

        <section className="about-trust">
          <img src="/assets/images/about-trust-img.png" alt="" className="about-trust__image" />
          <div className="about-trust__copy">
            <p className="eyebrow">WHY TRUST FX LOOK UP</p>
            <h2>Broker Research Should Be Clear, Structured, and Easy to Verify</h2>
            <p className="lead">Mattis at ante sem nulla nulla malesuada habitasse ante donec. Egestas risus ultrices et diam. Posuere est sem velit commodo. Libero libero dolor id sit leo enim. Tincidunt augue massa augue suspendisse in sapien duis id nec. Aliquam porttitor maecenas cursus cursus in lobortis et sit. Tincidunt viverra euismod leo ut venenatis.</p>
          </div>
        </section>

        <section className="about-form">
          <div className="about-form__bg" aria-hidden="true"><img src="/assets/images/about-form-bg.png" alt="" /></div>
          <div className="about-form__copy">
            <p className="eyebrow">Contact</p>
            <h2>Have a Question About FX Look Up?</h2>
            <p className="lead">Amet egestas nulla sit pulvinar enim nam sed scelerisque. Felis amet molestie id at turpis. Felis velit nisi id et vulputate curabitur ac molestie at. Condimentum volutpat ornare purus et mollis facilisi tempor et.</p>
          </div>
          <form className="about-form__card">
            <p className="about-form__card-title" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text)' }}>Contact FX Look Up</p>
            <p className="lead">Mattis at ante sem nulla nulla malesuada habitasse ante donec. Egestas risus ultrices et diam.</p>
            <div className="about-form__fields">
              <input type="text" className="about-form__input" placeholder="Name" />
              <input type="email" className="about-form__input" placeholder="Email" />
              <input type="text" className="about-form__input" placeholder="Subject" />
              <textarea className="about-form__textarea" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
            <div className="about-form__trust">
              <img src="/assets/images/icon-lock-outline.svg" alt="" />
              <span>100% Secure</span>
              <img src="/assets/images/icon-dot-filled.svg" alt="" />
              <span>No spam</span>
              <img src="/assets/images/icon-dot-filled.svg" alt="" />
              <span>No obligations</span>
            </div>
          </form>
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
