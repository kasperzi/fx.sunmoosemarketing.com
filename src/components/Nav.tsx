type NavPage = 'home' | 'best-broker' | 'compare' | 'search' | 'about'

type NavProps = {
  activePage?: NavPage
}

function NavLink({ page, current, href, label }: { page: NavPage | undefined; current: NavPage; href: string; label: string }) {
  if (page === current) {
    return <li><a href={href} className="breadcrumb__current">{label}</a></li>
  }
  return <li><a href={href}>{label}</a></li>
}

export default function Nav({ activePage }: NavProps) {
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a href="/" className="nav__logo"><img src="/assets/images/logo-fxlookup.png" alt="FX Look Up" /></a>
        <ul className="nav__links">
          <NavLink page={activePage} current="best-broker" href="/best-broker" label="Best Brokers" />
          <li className="nav-mega" id="brokerReviewsMega">
            <button type="button" className="nav-mega__toggle" id="brokerReviewsToggle" aria-haspopup="true" aria-expanded="false">
              Broker Reviews <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18" />
            </button>
            <div className="nav-mega__panel" id="brokerReviewsPanel" hidden>
              <div className="nav-mega__col">
                <p className="nav-mega__heading">Brokers per Category</p>
                <ul className="nav-mega__list">
                  <li><a href="#"><span className="nav-mega__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M10 20V4M16 20V13M22 20V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span>Best Forex for Brokers</a></li>
                  <li><a href="#"><span className="nav-mega__icon"><img src="/assets/images/icon-user.svg" alt="" /></span>Best Brokers for Beginners</a></li>
                  <li><a href="#"><span className="nav-mega__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="2"/><path d="M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span>Low Spread Brokers</a></li>
                  <li><a href="#"><span className="nav-mega__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.8"/><circle cx="5" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8"/><circle cx="19" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7.2V13M12 13 6.4 16.3M12 13l5.6 3.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></span>ECN Brokers</a></li>
                  <li><a href="#"><span className="nav-mega__icon"><img src="/assets/images/icon-gift.svg" alt="" /></span>No Deposit Bonus Brokers</a></li>
                </ul>
              </div>
              <div className="nav-mega__col nav-mega__col--countries">
                <p className="nav-mega__heading">Country-Specific Brokers</p>
                <div className="nav-mega__country-grid">
                  <ul className="nav-mega__list">
                    <li><a href="#"><img src="https://flagcdn.com/w20/nl.png" width="18" height="14" alt="" className="flag-emoji" />Netherlands</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/gb.png" width="18" height="14" alt="" className="flag-emoji" />United Kingdom</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/de.png" width="18" height="14" alt="" className="flag-emoji" />Germany</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/fr.png" width="18" height="14" alt="" className="flag-emoji" />France</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/ca.png" width="18" height="14" alt="" className="flag-emoji" />Canada</a></li>
                  </ul>
                  <ul className="nav-mega__list">
                    <li><a href="#"><img src="https://flagcdn.com/w20/es.png" width="18" height="14" alt="" className="flag-emoji" />Spain</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/in.png" width="18" height="14" alt="" className="flag-emoji" />India</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/it.png" width="18" height="14" alt="" className="flag-emoji" />Italy</a></li>
                    <li><a href="#"><img src="https://flagcdn.com/w20/au.png" width="18" height="14" alt="" className="flag-emoji" />Australia</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <NavLink page={activePage} current="compare" href="/compare-brokers" label="Compare" />
          <NavLink page={activePage} current="search" href="/search-brokers" label="Search" />
          <NavLink page={activePage} current="about" href="/about-us" label="About" />
        </ul>
        <div className="nav__icons">
          <div className="lang-widget" id="langWidget">
            <button type="button" className="icon-btn" id="langWidgetToggle" aria-haspopup="true" aria-expanded="false">
              <img src="/assets/images/icon-globe.svg" alt="Language &amp; Location" />
            </button>
            <div className="lang-panel" id="langPanel" hidden>
              <h3 className="lang-panel__title">Select language &amp; Location</h3>
              <p className="lang-panel__sub">Choose your language and country to personalize broker availability, promotions, and recommendations</p>
              <div className="lang-panel__field">
                <label>Language</label>
                <p className="lang-panel__hint">English is the default. Other languages may be available with AI translation.</p>
                <div className="country-select" id="languageSelect">
                  <button type="button" className="select-row country-toggle">
                    <span className="select-value">English (Original)</span>
                    <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 select-chevron" />
                  </button>
                  <div className="country-dropdown" hidden>
                    <div className="country-search">
                      <img src="/assets/images/icon-search.svg" alt="" />
                      <input type="text" placeholder="Search language..." autoComplete="off" />
                    </div>
                    <ul className="country-list" role="listbox">
                      <li className="country-option country-option--selected" role="option" data-name="English (Original)">English (Original)</li>
                      <li className="country-option" role="option" data-name="Afrikaans">Afrikaans</li>
                      <li className="country-option" role="option" data-name="Shqiptar">Shqiptar</li>
                      <li className="country-option" role="option" data-name="العربية">العربية</li>
                      <li className="country-option" role="option" data-name="Български">Български</li>
                      <li className="country-option" role="option" data-name="Català">Català</li>
                      <li className="country-option" role="option" data-name="Český">Český</li>
                      <li className="country-option" role="option" data-name="Dansk">Dansk</li>
                      <li className="country-option" role="option" data-name="Deutsch">Deutsch</li>
                      <li className="country-option" role="option" data-name="Español">Español</li>
                      <li className="country-option" role="option" data-name="Français">Français</li>
                      <li className="country-option" role="option" data-name="Hrvatski">Hrvatski</li>
                      <li className="country-option" role="option" data-name="Italiano">Italiano</li>
                      <li className="country-option" role="option" data-name="Nederlands">Nederlands</li>
                      <li className="country-option" role="option" data-name="Polski">Polski</li>
                      <li className="country-option" role="option" data-name="Português">Português</li>
                      <li className="country-option" role="option" data-name="Svenska">Svenska</li>
                      <li className="country-option" role="option" data-name="Türkçe">Türkçe</li>
                    </ul>
                    <p className="country-empty" hidden>No languages found.</p>
                  </div>
                </div>
              </div>
              <div className="lang-panel__field">
                <label>Country</label>
                <p className="lang-panel__hint">Country is detected automatically, but you can change it anytime.</p>
                <div className="country-select" id="panelCountrySelect">
                  <button type="button" className="select-row country-toggle">
                    <img src="https://flagcdn.com/w160/nl.png" width="20" height="15" alt="" className="flag" />
                    <span className="select-value">Netherlands</span>
                    <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 select-chevron" />
                  </button>
                  <div className="country-dropdown" hidden>
                    <div className="country-search">
                      <img src="/assets/images/icon-search.svg" alt="" />
                      <input type="text" placeholder="Search country..." autoComplete="off" />
                    </div>
                    <ul className="country-list" role="listbox">
                      <li className="country-option" role="option" data-code="AL" data-name="Albania" data-flag="🇦🇱"><img src="https://flagcdn.com/w20/al.png" width="20" height="15" alt="" className="flag-emoji" />Albania</li>
                      <li className="country-option" role="option" data-code="DZ" data-name="Algeria" data-flag="🇩🇿"><img src="https://flagcdn.com/w20/dz.png" width="20" height="15" alt="" className="flag-emoji" />Algeria</li>
                      <li className="country-option" role="option" data-code="AD" data-name="Andorra" data-flag="🇦🇩"><img src="https://flagcdn.com/w20/ad.png" width="20" height="15" alt="" className="flag-emoji" />Andorra</li>
                      <li className="country-option" role="option" data-code="AO" data-name="Angola" data-flag="🇦🇴"><img src="https://flagcdn.com/w20/ao.png" width="20" height="15" alt="" className="flag-emoji" />Angola</li>
                      <li className="country-option" role="option" data-code="AG" data-name="Antigua and Barbuda" data-flag="🇦🇬"><img src="https://flagcdn.com/w20/ag.png" width="20" height="15" alt="" className="flag-emoji" />Antigua and Barbuda</li>
                      <li className="country-option" role="option" data-code="AR" data-name="Argentina" data-flag="🇦🇷"><img src="https://flagcdn.com/w20/ar.png" width="20" height="15" alt="" className="flag-emoji" />Argentina</li>
                      <li className="country-option" role="option" data-code="AM" data-name="Armenia" data-flag="🇦🇲"><img src="https://flagcdn.com/w20/am.png" width="20" height="15" alt="" className="flag-emoji" />Armenia</li>
                      <li className="country-option" role="option" data-code="AU" data-name="Australia" data-flag="🇦🇺"><img src="https://flagcdn.com/w20/au.png" width="20" height="15" alt="" className="flag-emoji" />Australia</li>
                      <li className="country-option" role="option" data-code="AT" data-name="Austria" data-flag="🇦🇹"><img src="https://flagcdn.com/w20/at.png" width="20" height="15" alt="" className="flag-emoji" />Austria</li>
                      <li className="country-option" role="option" data-code="AZ" data-name="Azerbaijan" data-flag="🇦🇿"><img src="https://flagcdn.com/w20/az.png" width="20" height="15" alt="" className="flag-emoji" />Azerbaijan</li>
                      <li className="country-option" role="option" data-code="BS" data-name="Bahamas" data-flag="🇧🇸"><img src="https://flagcdn.com/w20/bs.png" width="20" height="15" alt="" className="flag-emoji" />Bahamas</li>
                      <li className="country-option" role="option" data-code="BH" data-name="Bahrain" data-flag="🇧🇭"><img src="https://flagcdn.com/w20/bh.png" width="20" height="15" alt="" className="flag-emoji" />Bahrain</li>
                      <li className="country-option" role="option" data-code="BD" data-name="Bangladesh" data-flag="🇧🇩"><img src="https://flagcdn.com/w20/bd.png" width="20" height="15" alt="" className="flag-emoji" />Bangladesh</li>
                      <li className="country-option" role="option" data-code="BB" data-name="Barbados" data-flag="🇧🇧"><img src="https://flagcdn.com/w20/bb.png" width="20" height="15" alt="" className="flag-emoji" />Barbados</li>
                      <li className="country-option" role="option" data-code="BE" data-name="Belgium" data-flag="🇧🇪"><img src="https://flagcdn.com/w20/be.png" width="20" height="15" alt="" className="flag-emoji" />Belgium</li>
                      <li className="country-option" role="option" data-code="BZ" data-name="Belize" data-flag="🇧🇿"><img src="https://flagcdn.com/w20/bz.png" width="20" height="15" alt="" className="flag-emoji" />Belize</li>
                      <li className="country-option" role="option" data-code="BJ" data-name="Benin" data-flag="🇧🇯"><img src="https://flagcdn.com/w20/bj.png" width="20" height="15" alt="" className="flag-emoji" />Benin</li>
                      <li className="country-option" role="option" data-code="BT" data-name="Bhutan" data-flag="🇧🇹"><img src="https://flagcdn.com/w20/bt.png" width="20" height="15" alt="" className="flag-emoji" />Bhutan</li>
                      <li className="country-option" role="option" data-code="BO" data-name="Bolivia" data-flag="🇧🇴"><img src="https://flagcdn.com/w20/bo.png" width="20" height="15" alt="" className="flag-emoji" />Bolivia</li>
                      <li className="country-option" role="option" data-code="BA" data-name="Bosnia and Herzegovina" data-flag="🇧🇦"><img src="https://flagcdn.com/w20/ba.png" width="20" height="15" alt="" className="flag-emoji" />Bosnia and Herzegovina</li>
                      <li className="country-option" role="option" data-code="BW" data-name="Botswana" data-flag="🇧🇼"><img src="https://flagcdn.com/w20/bw.png" width="20" height="15" alt="" className="flag-emoji" />Botswana</li>
                      <li className="country-option" role="option" data-code="BR" data-name="Brazil" data-flag="🇧🇷"><img src="https://flagcdn.com/w20/br.png" width="20" height="15" alt="" className="flag-emoji" />Brazil</li>
                      <li className="country-option" role="option" data-code="BN" data-name="Brunei" data-flag="🇧🇳"><img src="https://flagcdn.com/w20/bn.png" width="20" height="15" alt="" className="flag-emoji" />Brunei</li>
                      <li className="country-option" role="option" data-code="BG" data-name="Bulgaria" data-flag="🇧🇬"><img src="https://flagcdn.com/w20/bg.png" width="20" height="15" alt="" className="flag-emoji" />Bulgaria</li>
                      <li className="country-option" role="option" data-code="BF" data-name="Burkina Faso" data-flag="🇧🇫"><img src="https://flagcdn.com/w20/bf.png" width="20" height="15" alt="" className="flag-emoji" />Burkina Faso</li>
                      <li className="country-option" role="option" data-code="BI" data-name="Burundi" data-flag="🇧🇮"><img src="https://flagcdn.com/w20/bi.png" width="20" height="15" alt="" className="flag-emoji" />Burundi</li>
                      <li className="country-option" role="option" data-code="CV" data-name="Cabo Verde" data-flag="🇨🇻"><img src="https://flagcdn.com/w20/cv.png" width="20" height="15" alt="" className="flag-emoji" />Cabo Verde</li>
                      <li className="country-option" role="option" data-code="KH" data-name="Cambodia" data-flag="🇰🇭"><img src="https://flagcdn.com/w20/kh.png" width="20" height="15" alt="" className="flag-emoji" />Cambodia</li>
                      <li className="country-option" role="option" data-code="CM" data-name="Cameroon" data-flag="🇨🇲"><img src="https://flagcdn.com/w20/cm.png" width="20" height="15" alt="" className="flag-emoji" />Cameroon</li>
                      <li className="country-option" role="option" data-code="CA" data-name="Canada" data-flag="🇨🇦"><img src="https://flagcdn.com/w20/ca.png" width="20" height="15" alt="" className="flag-emoji" />Canada</li>
                      <li className="country-option" role="option" data-code="CL" data-name="Chile" data-flag="🇨🇱"><img src="https://flagcdn.com/w20/cl.png" width="20" height="15" alt="" className="flag-emoji" />Chile</li>
                      <li className="country-option" role="option" data-code="CN" data-name="China" data-flag="🇨🇳"><img src="https://flagcdn.com/w20/cn.png" width="20" height="15" alt="" className="flag-emoji" />China</li>
                      <li className="country-option" role="option" data-code="CO" data-name="Colombia" data-flag="🇨🇴"><img src="https://flagcdn.com/w20/co.png" width="20" height="15" alt="" className="flag-emoji" />Colombia</li>
                      <li className="country-option" role="option" data-code="KM" data-name="Comoros" data-flag="🇰🇲"><img src="https://flagcdn.com/w20/km.png" width="20" height="15" alt="" className="flag-emoji" />Comoros</li>
                      <li className="country-option" role="option" data-code="CR" data-name="Costa Rica" data-flag="🇨🇷"><img src="https://flagcdn.com/w20/cr.png" width="20" height="15" alt="" className="flag-emoji" />Costa Rica</li>
                      <li className="country-option" role="option" data-code="HR" data-name="Croatia" data-flag="🇭🇷"><img src="https://flagcdn.com/w20/hr.png" width="20" height="15" alt="" className="flag-emoji" />Croatia</li>
                      <li className="country-option" role="option" data-code="CU" data-name="Cuba" data-flag="🇨🇺"><img src="https://flagcdn.com/w20/cu.png" width="20" height="15" alt="" className="flag-emoji" />Cuba</li>
                      <li className="country-option" role="option" data-code="CY" data-name="Cyprus" data-flag="🇨🇾"><img src="https://flagcdn.com/w20/cy.png" width="20" height="15" alt="" className="flag-emoji" />Cyprus</li>
                      <li className="country-option" role="option" data-code="CZ" data-name="Czech Republic" data-flag="🇨🇿"><img src="https://flagcdn.com/w20/cz.png" width="20" height="15" alt="" className="flag-emoji" />Czech Republic</li>
                      <li className="country-option" role="option" data-code="DK" data-name="Denmark" data-flag="🇩🇰"><img src="https://flagcdn.com/w20/dk.png" width="20" height="15" alt="" className="flag-emoji" />Denmark</li>
                      <li className="country-option" role="option" data-code="DJ" data-name="Djibouti" data-flag="🇩🇯"><img src="https://flagcdn.com/w20/dj.png" width="20" height="15" alt="" className="flag-emoji" />Djibouti</li>
                      <li className="country-option" role="option" data-code="DM" data-name="Dominica" data-flag="🇩🇲"><img src="https://flagcdn.com/w20/dm.png" width="20" height="15" alt="" className="flag-emoji" />Dominica</li>
                      <li className="country-option" role="option" data-code="DO" data-name="Dominican Republic" data-flag="🇩🇴"><img src="https://flagcdn.com/w20/do.png" width="20" height="15" alt="" className="flag-emoji" />Dominican Republic</li>
                      <li className="country-option" role="option" data-code="EC" data-name="Ecuador" data-flag="🇪🇨"><img src="https://flagcdn.com/w20/ec.png" width="20" height="15" alt="" className="flag-emoji" />Ecuador</li>
                      <li className="country-option" role="option" data-code="EG" data-name="Egypt" data-flag="🇪🇬"><img src="https://flagcdn.com/w20/eg.png" width="20" height="15" alt="" className="flag-emoji" />Egypt</li>
                      <li className="country-option" role="option" data-code="SV" data-name="El Salvador" data-flag="🇸🇻"><img src="https://flagcdn.com/w20/sv.png" width="20" height="15" alt="" className="flag-emoji" />El Salvador</li>
                      <li className="country-option" role="option" data-code="GQ" data-name="Equatorial Guinea" data-flag="🇬🇶"><img src="https://flagcdn.com/w20/gq.png" width="20" height="15" alt="" className="flag-emoji" />Equatorial Guinea</li>
                      <li className="country-option" role="option" data-code="ER" data-name="Eritrea" data-flag="🇪🇷"><img src="https://flagcdn.com/w20/er.png" width="20" height="15" alt="" className="flag-emoji" />Eritrea</li>
                      <li className="country-option" role="option" data-code="EE" data-name="Estonia" data-flag="🇪🇪"><img src="https://flagcdn.com/w20/ee.png" width="20" height="15" alt="" className="flag-emoji" />Estonia</li>
                      <li className="country-option" role="option" data-code="SZ" data-name="Eswatini" data-flag="🇸🇿"><img src="https://flagcdn.com/w20/sz.png" width="20" height="15" alt="" className="flag-emoji" />Eswatini</li>
                      <li className="country-option" role="option" data-code="ET" data-name="Ethiopia" data-flag="🇪🇹"><img src="https://flagcdn.com/w20/et.png" width="20" height="15" alt="" className="flag-emoji" />Ethiopia</li>
                      <li className="country-option" role="option" data-code="FJ" data-name="Fiji" data-flag="🇫🇯"><img src="https://flagcdn.com/w20/fj.png" width="20" height="15" alt="" className="flag-emoji" />Fiji</li>
                      <li className="country-option" role="option" data-code="FI" data-name="Finland" data-flag="🇫🇮"><img src="https://flagcdn.com/w20/fi.png" width="20" height="15" alt="" className="flag-emoji" />Finland</li>
                      <li className="country-option" role="option" data-code="FR" data-name="France" data-flag="🇫🇷"><img src="https://flagcdn.com/w20/fr.png" width="20" height="15" alt="" className="flag-emoji" />France</li>
                      <li className="country-option" role="option" data-code="GA" data-name="Gabon" data-flag="🇬🇦"><img src="https://flagcdn.com/w20/ga.png" width="20" height="15" alt="" className="flag-emoji" />Gabon</li>
                      <li className="country-option" role="option" data-code="GM" data-name="Gambia" data-flag="🇬🇲"><img src="https://flagcdn.com/w20/gm.png" width="20" height="15" alt="" className="flag-emoji" />Gambia</li>
                      <li className="country-option" role="option" data-code="GE" data-name="Georgia" data-flag="🇬🇪"><img src="https://flagcdn.com/w20/ge.png" width="20" height="15" alt="" className="flag-emoji" />Georgia</li>
                      <li className="country-option" role="option" data-code="DE" data-name="Germany" data-flag="🇩🇪"><img src="https://flagcdn.com/w20/de.png" width="20" height="15" alt="" className="flag-emoji" />Germany</li>
                      <li className="country-option" role="option" data-code="GH" data-name="Ghana" data-flag="🇬🇭"><img src="https://flagcdn.com/w20/gh.png" width="20" height="15" alt="" className="flag-emoji" />Ghana</li>
                      <li className="country-option" role="option" data-code="GR" data-name="Greece" data-flag="🇬🇷"><img src="https://flagcdn.com/w20/gr.png" width="20" height="15" alt="" className="flag-emoji" />Greece</li>
                      <li className="country-option" role="option" data-code="GD" data-name="Grenada" data-flag="🇬🇩"><img src="https://flagcdn.com/w20/gd.png" width="20" height="15" alt="" className="flag-emoji" />Grenada</li>
                      <li className="country-option" role="option" data-code="GT" data-name="Guatemala" data-flag="🇬🇹"><img src="https://flagcdn.com/w20/gt.png" width="20" height="15" alt="" className="flag-emoji" />Guatemala</li>
                      <li className="country-option" role="option" data-code="GN" data-name="Guinea" data-flag="🇬🇳"><img src="https://flagcdn.com/w20/gn.png" width="20" height="15" alt="" className="flag-emoji" />Guinea</li>
                      <li className="country-option" role="option" data-code="GW" data-name="Guinea-Bissau" data-flag="🇬🇼"><img src="https://flagcdn.com/w20/gw.png" width="20" height="15" alt="" className="flag-emoji" />Guinea-Bissau</li>
                      <li className="country-option" role="option" data-code="GY" data-name="Guyana" data-flag="🇬🇾"><img src="https://flagcdn.com/w20/gy.png" width="20" height="15" alt="" className="flag-emoji" />Guyana</li>
                      <li className="country-option" role="option" data-code="HN" data-name="Honduras" data-flag="🇭🇳"><img src="https://flagcdn.com/w20/hn.png" width="20" height="15" alt="" className="flag-emoji" />Honduras</li>
                      <li className="country-option" role="option" data-code="HU" data-name="Hungary" data-flag="🇭🇺"><img src="https://flagcdn.com/w20/hu.png" width="20" height="15" alt="" className="flag-emoji" />Hungary</li>
                      <li className="country-option" role="option" data-code="IS" data-name="Iceland" data-flag="🇮🇸"><img src="https://flagcdn.com/w20/is.png" width="20" height="15" alt="" className="flag-emoji" />Iceland</li>
                      <li className="country-option" role="option" data-code="IN" data-name="India" data-flag="🇮🇳"><img src="https://flagcdn.com/w20/in.png" width="20" height="15" alt="" className="flag-emoji" />India</li>
                      <li className="country-option" role="option" data-code="ID" data-name="Indonesia" data-flag="🇮🇩"><img src="https://flagcdn.com/w20/id.png" width="20" height="15" alt="" className="flag-emoji" />Indonesia</li>
                      <li className="country-option" role="option" data-code="IE" data-name="Ireland" data-flag="🇮🇪"><img src="https://flagcdn.com/w20/ie.png" width="20" height="15" alt="" className="flag-emoji" />Ireland</li>
                      <li className="country-option" role="option" data-code="IL" data-name="Israel" data-flag="🇮🇱"><img src="https://flagcdn.com/w20/il.png" width="20" height="15" alt="" className="flag-emoji" />Israel</li>
                      <li className="country-option" role="option" data-code="IT" data-name="Italy" data-flag="🇮🇹"><img src="https://flagcdn.com/w20/it.png" width="20" height="15" alt="" className="flag-emoji" />Italy</li>
                      <li className="country-option" role="option" data-code="JM" data-name="Jamaica" data-flag="🇯🇲"><img src="https://flagcdn.com/w20/jm.png" width="20" height="15" alt="" className="flag-emoji" />Jamaica</li>
                      <li className="country-option" role="option" data-code="JP" data-name="Japan" data-flag="🇯🇵"><img src="https://flagcdn.com/w20/jp.png" width="20" height="15" alt="" className="flag-emoji" />Japan</li>
                      <li className="country-option" role="option" data-code="JO" data-name="Jordan" data-flag="🇯🇴"><img src="https://flagcdn.com/w20/jo.png" width="20" height="15" alt="" className="flag-emoji" />Jordan</li>
                      <li className="country-option" role="option" data-code="KE" data-name="Kenya" data-flag="🇰🇪"><img src="https://flagcdn.com/w20/ke.png" width="20" height="15" alt="" className="flag-emoji" />Kenya</li>
                      <li className="country-option" role="option" data-code="KI" data-name="Kiribati" data-flag="🇰🇮"><img src="https://flagcdn.com/w20/ki.png" width="20" height="15" alt="" className="flag-emoji" />Kiribati</li>
                      <li className="country-option" role="option" data-code="KW" data-name="Kuwait" data-flag="🇰🇼"><img src="https://flagcdn.com/w20/kw.png" width="20" height="15" alt="" className="flag-emoji" />Kuwait</li>
                      <li className="country-option" role="option" data-code="KG" data-name="Kyrgyzstan" data-flag="🇰🇬"><img src="https://flagcdn.com/w20/kg.png" width="20" height="15" alt="" className="flag-emoji" />Kyrgyzstan</li>
                      <li className="country-option" role="option" data-code="LA" data-name="Laos" data-flag="🇱🇦"><img src="https://flagcdn.com/w20/la.png" width="20" height="15" alt="" className="flag-emoji" />Laos</li>
                      <li className="country-option" role="option" data-code="LV" data-name="Latvia" data-flag="🇱🇻"><img src="https://flagcdn.com/w20/lv.png" width="20" height="15" alt="" className="flag-emoji" />Latvia</li>
                      <li className="country-option" role="option" data-code="LS" data-name="Lesotho" data-flag="🇱🇸"><img src="https://flagcdn.com/w20/ls.png" width="20" height="15" alt="" className="flag-emoji" />Lesotho</li>
                      <li className="country-option" role="option" data-code="LI" data-name="Liechtenstein" data-flag="🇱🇮"><img src="https://flagcdn.com/w20/li.png" width="20" height="15" alt="" className="flag-emoji" />Liechtenstein</li>
                      <li className="country-option" role="option" data-code="LT" data-name="Lithuania" data-flag="🇱🇹"><img src="https://flagcdn.com/w20/lt.png" width="20" height="15" alt="" className="flag-emoji" />Lithuania</li>
                      <li className="country-option" role="option" data-code="LU" data-name="Luxembourg" data-flag="🇱🇺"><img src="https://flagcdn.com/w20/lu.png" width="20" height="15" alt="" className="flag-emoji" />Luxembourg</li>
                      <li className="country-option" role="option" data-code="MG" data-name="Madagascar" data-flag="🇲🇬"><img src="https://flagcdn.com/w20/mg.png" width="20" height="15" alt="" className="flag-emoji" />Madagascar</li>
                      <li className="country-option" role="option" data-code="MW" data-name="Malawi" data-flag="🇲🇼"><img src="https://flagcdn.com/w20/mw.png" width="20" height="15" alt="" className="flag-emoji" />Malawi</li>
                      <li className="country-option" role="option" data-code="MY" data-name="Malaysia" data-flag="🇲🇾"><img src="https://flagcdn.com/w20/my.png" width="20" height="15" alt="" className="flag-emoji" />Malaysia</li>
                      <li className="country-option" role="option" data-code="MV" data-name="Maldives" data-flag="🇲🇻"><img src="https://flagcdn.com/w20/mv.png" width="20" height="15" alt="" className="flag-emoji" />Maldives</li>
                      <li className="country-option" role="option" data-code="MT" data-name="Malta" data-flag="🇲🇹"><img src="https://flagcdn.com/w20/mt.png" width="20" height="15" alt="" className="flag-emoji" />Malta</li>
                      <li className="country-option" role="option" data-code="MH" data-name="Marshall Islands" data-flag="🇲🇭"><img src="https://flagcdn.com/w20/mh.png" width="20" height="15" alt="" className="flag-emoji" />Marshall Islands</li>
                      <li className="country-option" role="option" data-code="MR" data-name="Mauritania" data-flag="🇲🇷"><img src="https://flagcdn.com/w20/mr.png" width="20" height="15" alt="" className="flag-emoji" />Mauritania</li>
                      <li className="country-option" role="option" data-code="MU" data-name="Mauritius" data-flag="🇲🇺"><img src="https://flagcdn.com/w20/mu.png" width="20" height="15" alt="" className="flag-emoji" />Mauritius</li>
                      <li className="country-option" role="option" data-code="MX" data-name="Mexico" data-flag="🇲🇽"><img src="https://flagcdn.com/w20/mx.png" width="20" height="15" alt="" className="flag-emoji" />Mexico</li>
                      <li className="country-option" role="option" data-code="FM" data-name="Micronesia" data-flag="🇫🇲"><img src="https://flagcdn.com/w20/fm.png" width="20" height="15" alt="" className="flag-emoji" />Micronesia</li>
                      <li className="country-option" role="option" data-code="MD" data-name="Moldova" data-flag="🇲🇩"><img src="https://flagcdn.com/w20/md.png" width="20" height="15" alt="" className="flag-emoji" />Moldova</li>
                      <li className="country-option" role="option" data-code="MC" data-name="Monaco" data-flag="🇲🇨"><img src="https://flagcdn.com/w20/mc.png" width="20" height="15" alt="" className="flag-emoji" />Monaco</li>
                      <li className="country-option" role="option" data-code="MN" data-name="Mongolia" data-flag="🇲🇳"><img src="https://flagcdn.com/w20/mn.png" width="20" height="15" alt="" className="flag-emoji" />Mongolia</li>
                      <li className="country-option" role="option" data-code="ME" data-name="Montenegro" data-flag="🇲🇪"><img src="https://flagcdn.com/w20/me.png" width="20" height="15" alt="" className="flag-emoji" />Montenegro</li>
                      <li className="country-option" role="option" data-code="MA" data-name="Morocco" data-flag="🇲🇦"><img src="https://flagcdn.com/w20/ma.png" width="20" height="15" alt="" className="flag-emoji" />Morocco</li>
                      <li className="country-option" role="option" data-code="MZ" data-name="Mozambique" data-flag="🇲🇿"><img src="https://flagcdn.com/w20/mz.png" width="20" height="15" alt="" className="flag-emoji" />Mozambique</li>
                      <li className="country-option" role="option" data-code="NA" data-name="Namibia" data-flag="🇳🇦"><img src="https://flagcdn.com/w20/na.png" width="20" height="15" alt="" className="flag-emoji" />Namibia</li>
                      <li className="country-option" role="option" data-code="NR" data-name="Nauru" data-flag="🇳🇷"><img src="https://flagcdn.com/w20/nr.png" width="20" height="15" alt="" className="flag-emoji" />Nauru</li>
                      <li className="country-option" role="option" data-code="NP" data-name="Nepal" data-flag="🇳🇵"><img src="https://flagcdn.com/w20/np.png" width="20" height="15" alt="" className="flag-emoji" />Nepal</li>
                      <li className="country-option country-option--selected" role="option" data-code="NL" data-name="Netherlands" data-flag="🇳🇱"><img src="https://flagcdn.com/w20/nl.png" width="20" height="15" alt="" className="flag-emoji" />Netherlands</li>
                      <li className="country-option" role="option" data-code="NE" data-name="Niger" data-flag="🇳🇪"><img src="https://flagcdn.com/w20/ne.png" width="20" height="15" alt="" className="flag-emoji" />Niger</li>
                      <li className="country-option" role="option" data-code="NG" data-name="Nigeria" data-flag="🇳🇬"><img src="https://flagcdn.com/w20/ng.png" width="20" height="15" alt="" className="flag-emoji" />Nigeria</li>
                      <li className="country-option" role="option" data-code="NO" data-name="Norway" data-flag="🇳🇴"><img src="https://flagcdn.com/w20/no.png" width="20" height="15" alt="" className="flag-emoji" />Norway</li>
                      <li className="country-option" role="option" data-code="OM" data-name="Oman" data-flag="🇴🇲"><img src="https://flagcdn.com/w20/om.png" width="20" height="15" alt="" className="flag-emoji" />Oman</li>
                      <li className="country-option" role="option" data-code="PK" data-name="Pakistan" data-flag="🇵🇰"><img src="https://flagcdn.com/w20/pk.png" width="20" height="15" alt="" className="flag-emoji" />Pakistan</li>
                      <li className="country-option" role="option" data-code="PW" data-name="Palau" data-flag="🇵🇼"><img src="https://flagcdn.com/w20/pw.png" width="20" height="15" alt="" className="flag-emoji" />Palau</li>
                      <li className="country-option" role="option" data-code="PA" data-name="Panama" data-flag="🇵🇦"><img src="https://flagcdn.com/w20/pa.png" width="20" height="15" alt="" className="flag-emoji" />Panama</li>
                      <li className="country-option" role="option" data-code="PG" data-name="Papua New Guinea" data-flag="🇵🇬"><img src="https://flagcdn.com/w20/pg.png" width="20" height="15" alt="" className="flag-emoji" />Papua New Guinea</li>
                      <li className="country-option" role="option" data-code="PY" data-name="Paraguay" data-flag="🇵🇾"><img src="https://flagcdn.com/w20/py.png" width="20" height="15" alt="" className="flag-emoji" />Paraguay</li>
                      <li className="country-option" role="option" data-code="PE" data-name="Peru" data-flag="🇵🇪"><img src="https://flagcdn.com/w20/pe.png" width="20" height="15" alt="" className="flag-emoji" />Peru</li>
                      <li className="country-option" role="option" data-code="PH" data-name="Philippines" data-flag="🇵🇭"><img src="https://flagcdn.com/w20/ph.png" width="20" height="15" alt="" className="flag-emoji" />Philippines</li>
                      <li className="country-option" role="option" data-code="PL" data-name="Poland" data-flag="🇵🇱"><img src="https://flagcdn.com/w20/pl.png" width="20" height="15" alt="" className="flag-emoji" />Poland</li>
                      <li className="country-option" role="option" data-code="PT" data-name="Portugal" data-flag="🇵🇹"><img src="https://flagcdn.com/w20/pt.png" width="20" height="15" alt="" className="flag-emoji" />Portugal</li>
                      <li className="country-option" role="option" data-code="QA" data-name="Qatar" data-flag="🇶🇦"><img src="https://flagcdn.com/w20/qa.png" width="20" height="15" alt="" className="flag-emoji" />Qatar</li>
                      <li className="country-option" role="option" data-code="RO" data-name="Romania" data-flag="🇷🇴"><img src="https://flagcdn.com/w20/ro.png" width="20" height="15" alt="" className="flag-emoji" />Romania</li>
                      <li className="country-option" role="option" data-code="RW" data-name="Rwanda" data-flag="🇷🇼"><img src="https://flagcdn.com/w20/rw.png" width="20" height="15" alt="" className="flag-emoji" />Rwanda</li>
                      <li className="country-option" role="option" data-code="KN" data-name="Saint Kitts and Nevis" data-flag="🇰🇳"><img src="https://flagcdn.com/w20/kn.png" width="20" height="15" alt="" className="flag-emoji" />Saint Kitts and Nevis</li>
                      <li className="country-option" role="option" data-code="LC" data-name="Saint Lucia" data-flag="🇱🇨"><img src="https://flagcdn.com/w20/lc.png" width="20" height="15" alt="" className="flag-emoji" />Saint Lucia</li>
                      <li className="country-option" role="option" data-code="VC" data-name="Saint Vincent and the Grenadines" data-flag="🇻🇨"><img src="https://flagcdn.com/w20/vc.png" width="20" height="15" alt="" className="flag-emoji" />Saint Vincent and the Grenadines</li>
                      <li className="country-option" role="option" data-code="WS" data-name="Samoa" data-flag="🇼🇸"><img src="https://flagcdn.com/w20/ws.png" width="20" height="15" alt="" className="flag-emoji" />Samoa</li>
                      <li className="country-option" role="option" data-code="SM" data-name="San Marino" data-flag="🇸🇲"><img src="https://flagcdn.com/w20/sm.png" width="20" height="15" alt="" className="flag-emoji" />San Marino</li>
                      <li className="country-option" role="option" data-code="ST" data-name="Sao Tome and Principe" data-flag="🇸🇹"><img src="https://flagcdn.com/w20/st.png" width="20" height="15" alt="" className="flag-emoji" />Sao Tome and Principe</li>
                      <li className="country-option" role="option" data-code="SA" data-name="Saudi Arabia" data-flag="🇸🇦"><img src="https://flagcdn.com/w20/sa.png" width="20" height="15" alt="" className="flag-emoji" />Saudi Arabia</li>
                      <li className="country-option" role="option" data-code="SN" data-name="Senegal" data-flag="🇸🇳"><img src="https://flagcdn.com/w20/sn.png" width="20" height="15" alt="" className="flag-emoji" />Senegal</li>
                      <li className="country-option" role="option" data-code="RS" data-name="Serbia" data-flag="🇷🇸"><img src="https://flagcdn.com/w20/rs.png" width="20" height="15" alt="" className="flag-emoji" />Serbia</li>
                      <li className="country-option" role="option" data-code="SC" data-name="Seychelles" data-flag="🇸🇨"><img src="https://flagcdn.com/w20/sc.png" width="20" height="15" alt="" className="flag-emoji" />Seychelles</li>
                      <li className="country-option" role="option" data-code="SL" data-name="Sierra Leone" data-flag="🇸🇱"><img src="https://flagcdn.com/w20/sl.png" width="20" height="15" alt="" className="flag-emoji" />Sierra Leone</li>
                      <li className="country-option" role="option" data-code="SG" data-name="Singapore" data-flag="🇸🇬"><img src="https://flagcdn.com/w20/sg.png" width="20" height="15" alt="" className="flag-emoji" />Singapore</li>
                      <li className="country-option" role="option" data-code="SK" data-name="Slovakia" data-flag="🇸🇰"><img src="https://flagcdn.com/w20/sk.png" width="20" height="15" alt="" className="flag-emoji" />Slovakia</li>
                      <li className="country-option" role="option" data-code="SI" data-name="Slovenia" data-flag="🇸🇮"><img src="https://flagcdn.com/w20/si.png" width="20" height="15" alt="" className="flag-emoji" />Slovenia</li>
                      <li className="country-option" role="option" data-code="SB" data-name="Solomon Islands" data-flag="🇸🇧"><img src="https://flagcdn.com/w20/sb.png" width="20" height="15" alt="" className="flag-emoji" />Solomon Islands</li>
                      <li className="country-option" role="option" data-code="ZA" data-name="South Africa" data-flag="🇿🇦"><img src="https://flagcdn.com/w20/za.png" width="20" height="15" alt="" className="flag-emoji" />South Africa</li>
                      <li className="country-option" role="option" data-code="ES" data-name="Spain" data-flag="🇪🇸"><img src="https://flagcdn.com/w20/es.png" width="20" height="15" alt="" className="flag-emoji" />Spain</li>
                      <li className="country-option" role="option" data-code="LK" data-name="Sri Lanka" data-flag="🇱🇰"><img src="https://flagcdn.com/w20/lk.png" width="20" height="15" alt="" className="flag-emoji" />Sri Lanka</li>
                      <li className="country-option" role="option" data-code="SR" data-name="Suriname" data-flag="🇸🇷"><img src="https://flagcdn.com/w20/sr.png" width="20" height="15" alt="" className="flag-emoji" />Suriname</li>
                      <li className="country-option" role="option" data-code="SE" data-name="Sweden" data-flag="🇸🇪"><img src="https://flagcdn.com/w20/se.png" width="20" height="15" alt="" className="flag-emoji" />Sweden</li>
                      <li className="country-option" role="option" data-code="CH" data-name="Switzerland" data-flag="🇨🇭"><img src="https://flagcdn.com/w20/ch.png" width="20" height="15" alt="" className="flag-emoji" />Switzerland</li>
                      <li className="country-option" role="option" data-code="TW" data-name="Taiwan" data-flag="🇹🇼"><img src="https://flagcdn.com/w20/tw.png" width="20" height="15" alt="" className="flag-emoji" />Taiwan</li>
                      <li className="country-option" role="option" data-code="TJ" data-name="Tajikistan" data-flag="🇹🇯"><img src="https://flagcdn.com/w20/tj.png" width="20" height="15" alt="" className="flag-emoji" />Tajikistan</li>
                      <li className="country-option" role="option" data-code="TZ" data-name="Tanzania" data-flag="🇹🇿"><img src="https://flagcdn.com/w20/tz.png" width="20" height="15" alt="" className="flag-emoji" />Tanzania</li>
                      <li className="country-option" role="option" data-code="TH" data-name="Thailand" data-flag="🇹🇭"><img src="https://flagcdn.com/w20/th.png" width="20" height="15" alt="" className="flag-emoji" />Thailand</li>
                      <li className="country-option" role="option" data-code="TL" data-name="Timor-Leste" data-flag="🇹🇱"><img src="https://flagcdn.com/w20/tl.png" width="20" height="15" alt="" className="flag-emoji" />Timor-Leste</li>
                      <li className="country-option" role="option" data-code="TG" data-name="Togo" data-flag="🇹🇬"><img src="https://flagcdn.com/w20/tg.png" width="20" height="15" alt="" className="flag-emoji" />Togo</li>
                      <li className="country-option" role="option" data-code="TO" data-name="Tonga" data-flag="🇹🇴"><img src="https://flagcdn.com/w20/to.png" width="20" height="15" alt="" className="flag-emoji" />Tonga</li>
                      <li className="country-option" role="option" data-code="TT" data-name="Trinidad and Tobago" data-flag="🇹🇹"><img src="https://flagcdn.com/w20/tt.png" width="20" height="15" alt="" className="flag-emoji" />Trinidad and Tobago</li>
                      <li className="country-option" role="option" data-code="TR" data-name="Turkey" data-flag="🇹🇷"><img src="https://flagcdn.com/w20/tr.png" width="20" height="15" alt="" className="flag-emoji" />Turkey</li>
                      <li className="country-option" role="option" data-code="TV" data-name="Tuvalu" data-flag="🇹🇻"><img src="https://flagcdn.com/w20/tv.png" width="20" height="15" alt="" className="flag-emoji" />Tuvalu</li>
                      <li className="country-option" role="option" data-code="UG" data-name="Uganda" data-flag="🇺🇬"><img src="https://flagcdn.com/w20/ug.png" width="20" height="15" alt="" className="flag-emoji" />Uganda</li>
                      <li className="country-option" role="option" data-code="UA" data-name="Ukraine" data-flag="🇺🇦"><img src="https://flagcdn.com/w20/ua.png" width="20" height="15" alt="" className="flag-emoji" />Ukraine</li>
                      <li className="country-option" role="option" data-code="AE" data-name="United Arab Emirates" data-flag="🇦🇪"><img src="https://flagcdn.com/w20/ae.png" width="20" height="15" alt="" className="flag-emoji" />United Arab Emirates</li>
                      <li className="country-option" role="option" data-code="GB" data-name="United Kingdom" data-flag="🇬🇧"><img src="https://flagcdn.com/w20/gb.png" width="20" height="15" alt="" className="flag-emoji" />United Kingdom</li>
                      <li className="country-option" role="option" data-code="US" data-name="United States" data-flag="🇺🇸"><img src="https://flagcdn.com/w20/us.png" width="20" height="15" alt="" className="flag-emoji" />United States</li>
                      <li className="country-option" role="option" data-code="UZ" data-name="Uzbekistan" data-flag="🇺🇿"><img src="https://flagcdn.com/w20/uz.png" width="20" height="15" alt="" className="flag-emoji" />Uzbekistan</li>
                      <li className="country-option" role="option" data-code="VN" data-name="Vietnam" data-flag="🇻🇳"><img src="https://flagcdn.com/w20/vn.png" width="20" height="15" alt="" className="flag-emoji" />Vietnam</li>
                      <li className="country-option" role="option" data-code="ZM" data-name="Zambia" data-flag="🇿🇲"><img src="https://flagcdn.com/w20/zm.png" width="20" height="15" alt="" className="flag-emoji" />Zambia</li>
                    </ul>
                    <p className="country-empty" hidden>No countries found.</p>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn--primary lang-panel__confirm">Confirm changes</button>
            </div>
          </div>
          <button type="button" className="icon-btn nav__icon--mobile" id="mobileMenuToggle" aria-haspopup="true" aria-expanded="false" aria-controls="mobileNavPanel">
            <img src="/assets/images/icon-menu-rounded.svg" alt="Menu" />
          </button>
        </div>
        <a href="/find-broker" className="btn btn--secondary">Find Your Broker</a>
      </nav>

      <div className="mobile-nav-panel" id="mobileNavPanel" hidden>
        <div className="mobile-nav-panel__header">
          <a href="/" className="mobile-nav-panel__logo"><img src="/assets/images/logo-fxlookup.png" alt="FX Look Up" /></a>
          <button type="button" className="mobile-nav-panel__close" id="mobileNavClose" aria-label="Close menu">&times;</button>
        </div>
        <div className="mobile-nav-panel__screen" data-nav-screen="main">
          <ul className="mobile-nav-panel__list">
            <li><a href="/best-broker">Best Brokers</a></li>
            <li>
              <button type="button" className="mobile-nav-panel__expand" data-nav-open="mobileNavScreenReviews">
                Broker Reviews
                <img src="/assets/images/icon-chevron-right-rounded.svg" alt="" />
              </button>
            </li>
            <li><a href="/compare-brokers">Compare</a></li>
            <li><a href="/search-brokers">Search</a></li>
            <li><a href="/about-us">About</a></li>
          </ul>
          <div className="mobile-nav-panel__ctas">
            <a href="/find-broker" className="btn btn--secondary btn--block">Find Your Broker</a>
            <a href="/compare-brokers" className="btn btn--text btn--center">Compare Brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
          </div>
        </div>
        <div className="mobile-nav-panel__screen mobile-nav-panel__screen--sub" id="mobileNavScreenReviews" hidden data-nav-screen="reviews">
          <button type="button" className="mobile-nav-panel__back" data-nav-back="">
            <span className="mobile-nav-panel__back-icon-box"><img src="/assets/images/icon-chevron-right-rounded.svg" alt="" className="mobile-nav-panel__back-icon" /></span>
            Back
          </button>
          <p className="mobile-nav-panel__section-title">BY CATEGORY</p>
          <ul className="mobile-nav-panel__sublist">
            <li><a href="#">Best Forex Brokers</a></li>
            <li><a href="#">Best Beginners Brokers</a></li>
            <li><a href="#">Low Spread Brokers</a></li>
            <li><a href="#">MT5 Brokers</a></li>
            <li><a href="#">Broker Comparison</a></li>
          </ul>
          <p className="mobile-nav-panel__section-title">BY COUNTRY</p>
          <ul className="mobile-nav-panel__sublist">
            <li><a href="#"><img src="https://flagcdn.com/w20/nl.png" width="18" height="14" alt="" className="flag-emoji" />Netherlands</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/gb.png" width="18" height="14" alt="" className="flag-emoji" />United Kingdom</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/de.png" width="18" height="14" alt="" className="flag-emoji" />Germany</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/fr.png" width="18" height="14" alt="" className="flag-emoji" />France</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/ca.png" width="18" height="14" alt="" className="flag-emoji" />Canada</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/es.png" width="18" height="14" alt="" className="flag-emoji" />Spain</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/in.png" width="18" height="14" alt="" className="flag-emoji" />India</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/it.png" width="18" height="14" alt="" className="flag-emoji" />Italy</a></li>
            <li><a href="#"><img src="https://flagcdn.com/w20/au.png" width="18" height="14" alt="" className="flag-emoji" />Australia</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
