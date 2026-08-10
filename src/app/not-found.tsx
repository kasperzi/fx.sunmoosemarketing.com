import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <main>
        <section className="notfound-hero">

          <div className="notfound-hero__bg" aria-hidden="true">
            <img src="/assets/images/notfound-hero-bg.png" alt="" />
          </div>

          <Nav />

          <div className="notfound-hero__content">
            <div className="notfound-hero__illustration">
              <img src="/assets/images/notfound-illustration.png" alt="" />
            </div>
            <div className="notfound-hero__copy">
              <p className="eyebrow">PAGE NOT FOUND</p>
              <p className="notfound-hero__number">404</p>
              <h2>This Page Couldn&rsquo;t Be Found</h2>
              <p className="lead">Sem gravida mus feugiat viverra mattis. Id in lacinia dignissim commodo tellus commodo non tempus. Diam sagittis consectetur odio rutrum aliquam.</p>
            </div>
            <div className="notfound-hero__ctas">
              <a href="/" className="btn btn--secondary">Back to Homepage</a>
              <a href="/search-brokers" className="btn btn--text btn--text--px">Search Brokers <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
            </div>

            <div className="notfound-cards">
              <p className="notfound-cards__title">Looking for something specific?</p>
              <div className="notfound-cards__row">
                <div className="notfound-card">
                  <div className="notfound-card__top">
                    <p className="notfound-card__title">Compare Brokers</p>
                    <p className="lead">Quam gravida viverra dui diam sed sit.</p>
                  </div>
                  <a href="/compare-brokers" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
                <div className="notfound-card">
                  <div className="notfound-card__top">
                    <p className="notfound-card__title">Search Brokers</p>
                    <p className="lead">Elit at faucibus dolor varius ultricies quisque.</p>
                  </div>
                  <a href="/search-brokers" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
                <div className="notfound-card">
                  <div className="notfound-card__top">
                    <p className="notfound-card__title">Find your Broker</p>
                    <p className="lead">Vitae urna volutpat tellus mauris mattis.</p>
                  </div>
                  <a href="/find-broker" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
                <div className="notfound-card">
                  <div className="notfound-card__top">
                    <p className="notfound-card__title">Read Broker Reviews</p>
                    <p className="lead">Dis quam sit vestibulum blandit fringilla.</p>
                  </div>
                  <a href="#" className="btn btn--text">Learn more <img src="/assets/images/icon-arrow-right-duotone.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}
