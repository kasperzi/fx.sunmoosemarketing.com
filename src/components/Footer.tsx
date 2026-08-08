export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/assets/images/logo-fxlookup.png" alt="FX Look Up" className="footer__logo" />
          <p className="lead">Compare trusted forex brokers by country, platform, fees, regulation, and trading conditions.</p>
          <div className="footer__social">
            <a href="#" className="icon-btn"><img src="/assets/images/icon-facebook.svg" alt="Facebook" /></a>
            <a href="#" className="icon-btn"><img src="/assets/images/icon-twitter-fill.svg" alt="Twitter" /></a>
            <a href="#" className="icon-btn"><img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer__col">
          <button type="button" className="footer__col-toggle"><span className="footer__heading">Broker Reviews</span><img src="/assets/images/icon-chevron-down.svg" alt="" className="footer__col-chevron" /></button>
          <ul>
            <li>Pepperstone Review</li>
            <li>IC Markets Review</li>
            <li>eToro Review</li>
            <li>AvaTrade Review</li>
            <li>XTB Review</li>
          </ul>
        </div>
        <div className="footer__col">
          <button type="button" className="footer__col-toggle"><span className="footer__heading">Brokers by Country</span><img src="/assets/images/icon-chevron-down.svg" alt="" className="footer__col-chevron" /></button>
          <ul>
            <li>Best Brokers in Country</li>
            <li>Best Brokers in Country</li>
            <li>Best Brokers in Country</li>
            <li>Best Brokers in Country</li>
            <li>Best Brokers in Country</li>
          </ul>
        </div>
        <div className="footer__col">
          <button type="button" className="footer__col-toggle"><span className="footer__heading">Most Searched</span><img src="/assets/images/icon-chevron-down.svg" alt="" className="footer__col-chevron" /></button>
          <ul>
            <li>Best Forex Brokers</li>
            <li>Best Beginners Brokers</li>
            <li>Low Spread Brokers</li>
            <li>MT5 Brokers</li>
            <li>Broker Comparison</li>
          </ul>
        </div>
        <div className="footer__col">
          <button type="button" className="footer__col-toggle"><span className="footer__heading">About</span><img src="/assets/images/icon-chevron-down.svg" alt="" className="footer__col-chevron" /></button>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/how-we-rate-brokers">How We Rate Brokers</a></li>
            <li><a href="/how-we-make-money">Affiliate Disclosure</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2026 FX Look Up. All rights reserved.</p>
        <p>Privacy Policy | Terms &amp; Conditions | Affiliate Disclosure</p>
      </div>
    </footer>
  )
}
