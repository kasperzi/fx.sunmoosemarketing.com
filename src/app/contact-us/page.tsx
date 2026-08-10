import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ContactUs() {
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
                <span>Home</span>
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="icon-24" />
                <span className="breadcrumb__current">Contact Us</span>
              </div>
              <div className="contact-hero__copy">
                <p className="eyebrow">CONTACT FX LOOK UP</p>
                <h1>Get in Touch With FX Look Up</h1>
              </div>
              <p className="lead">Have a question about broker comparisons, reviews, country availability, or how FX Look Up works? Send us a message and our team will get back to you.</p>
            </div>

          </div>
        </section>

        <section className="about-form">
          <div className="about-form__bg" aria-hidden="true"><img src="/assets/images/contact-form-bg.png" alt="" /></div>
          <div className="about-form__copy" style={{ gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <p className="eyebrow">CONTACT SUPPORT</p>
              <h2>Have a Question About FX Look Up?</h2>
              <p className="lead">Amet egestas nulla sit pulvinar enim nam sed scelerisque. Felis amet molestie id at turpis. Felis velit nisi id et vulputate curabitur ac molestie at. Condimentum volutpat ornare purus et mollis facilisi tempor et.</p>
            </div>
            <div className="contact-steps">
              <div className="contact-step">
                <span className="contact-step__icon"><img src="/assets/images/icon-arrow-swap-filled.svg" alt="" /></span>
                <span>Compare regulation and safety</span>
              </div>
              <div className="contact-step">
                <span className="contact-step__icon"><img src="/assets/images/icon-trading-pattern.svg" alt="" /></span>
                <span>Review spreads and trading costs</span>
              </div>
              <div className="contact-step">
                <span className="contact-step__icon"><img src="/assets/images/rv-icon-screen-pc-tower.svg" alt="" /></span>
                <span>Check supported platforms</span>
              </div>
              <div className="contact-step">
                <span className="contact-step__icon"><img src="/assets/images/rv-icon-language.svg" alt="" /></span>
                <span>Verify country availability</span>
              </div>
            </div>
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

        <section className="contact-services">
          <p className="contact-services__title">Looking for something specific?</p>
          <div className="contact-services__cards">
            <div className="contact-service-card">
              <div className="contact-service-card__top">
                <p className="contact-service-card__title">Compare Brokers</p>
                <p className="lead">Quam gravida viverra dui diam sed sit.</p>
              </div>
              <a href="/compare-brokers" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
            <div className="contact-service-card">
              <div className="contact-service-card__top">
                <p className="contact-service-card__title">Search Brokers</p>
                <p className="lead">Elit at faucibus dolor varius ultricies quisque.</p>
              </div>
              <a href="/search-brokers" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
            <div className="contact-service-card">
              <div className="contact-service-card__top">
                <p className="contact-service-card__title">Find your Broker</p>
                <p className="lead">Vitae urna volutpat tellus mauris mattis.</p>
              </div>
              <a href="/find-broker" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>
            <div className="contact-service-card">
              <div className="contact-service-card__top">
                <p className="contact-service-card__title">Read Broker Reviews</p>
                <p className="lead">Dis quam sit vestibulum blandit fringilla.</p>
              </div>
              <a href="#" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
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
