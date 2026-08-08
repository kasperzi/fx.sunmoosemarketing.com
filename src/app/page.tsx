import BrokerCarousel from '@/components/BrokerCarousel'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <main>

        {/* HERO */}
        <section className="hero">
          <div className="hero__border">

            <div className="hero__bg" aria-hidden="true">
              <img src="/assets/images/hero-border-bg.png" alt="" />
              <div className="hero__bg-gradient"></div>
            </div>

            <Nav activePage="home" />


            <div className="hero__main">
              <div className="hero__content">
                <div className="hero__copy">
                  <h1>Find the Best Forex Broker for Your Trading Goals</h1>
                  <p className="lead">Compare trusted forex brokers by fees, platforms, regulations, country availability, and real trading conditions.</p>
                </div>
                <div className="hero__ctas">
                  <a href="#" className="btn btn--secondary">Find Your Broker</a>
                  <a href="#" className="btn btn--text btn--text--px">Compare Brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                </div>
                <div className="hero__perks">
                  <div className="perk-col">
                    <div className="perk-card">
                      <span className="perk-icon"><img src="/assets/images/icon-trophy.svg" alt="" /></span>
                      <div className="perk-text">
                        <p className="perk-title">Best Forex Brokers</p>
                        <p className="perk-sub">Fully tested, low cost &amp; safe</p>
                      </div>
                      <span className="perk-arrow"><img src="/assets/images/icon-arrow-right.svg" alt="" /></span>
                    </div>
                    <div className="perk-card">
                      <span className="perk-icon"><img src="/assets/images/icon-gift.svg" alt="" /></span>
                      <div className="perk-text">
                        <p className="perk-title">Deposit Bonuses</p>
                        <p className="perk-sub">Start your trading with a boost</p>
                      </div>
                      <span className="perk-arrow"><img src="/assets/images/icon-arrow-right.svg" alt="" /></span>
                    </div>
                  </div>
                  <div className="perk-col">
                    <div className="perk-card">
                      <span className="perk-icon"><img src="/assets/images/icon-user.svg" alt="" /></span>
                      <div className="perk-text">
                        <p className="perk-title">Beginner Brokers</p>
                        <p className="perk-sub">Fast registration &amp; full support</p>
                      </div>
                      <span className="perk-arrow"><img src="/assets/images/icon-arrow-right.svg" alt="" /></span>
                    </div>
                    <div className="perk-card">
                      <span className="perk-icon"><img src="/assets/images/icon-star-outline.svg" alt="" /></span>
                      <div className="perk-text">
                        <p className="perk-title">Best Brokers 2026</p>
                        <p className="perk-sub">Best-rated brokers of this year</p>
                      </div>
                      <span className="perk-arrow"><img src="/assets/images/icon-arrow-right.svg" alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero__form-wrap">
                <form className="hero__form">
                  <h3>Find your best broker match</h3>
                  <div className="form-step">
                    <label>1. Where do you live?</label>
                    <div className="country-select" id="countrySelect">
                      <button type="button" className="select-row country-toggle" id="countryToggle" aria-haspopup="listbox" aria-expanded="false">
                        <img src="https://flagcdn.com/w160/nl.png" width="20" height="15" alt="" className="flag" id="countryFlag" />
                        <span className="select-value" id="countryValue">Netherlands</span>
                        <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 select-chevron" />
                      </button>
                      <div className="country-dropdown" id="countryDropdown" hidden>
                        <div className="country-search">
                          <img src="/assets/images/icon-search.svg" alt="" />
                          <input type="text" id="countrySearch" placeholder="Search country..." autoComplete="off" />
                        </div>
                        <ul className="country-list" id="countryList" role="listbox">
                                                    <li className="country-option" role="option" data-code="AL" data-name="Albania" data-flag="🇦🇱" ><img src="https://flagcdn.com/w20/al.png" width="20" height="15" alt="" className="flag-emoji" />Albania</li>
                          <li className="country-option" role="option" data-code="DZ" data-name="Algeria" data-flag="🇩🇿" ><img src="https://flagcdn.com/w20/dz.png" width="20" height="15" alt="" className="flag-emoji" />Algeria</li>
                          <li className="country-option" role="option" data-code="AD" data-name="Andorra" data-flag="🇦🇩" ><img src="https://flagcdn.com/w20/ad.png" width="20" height="15" alt="" className="flag-emoji" />Andorra</li>
                          <li className="country-option" role="option" data-code="AO" data-name="Angola" data-flag="🇦🇴" ><img src="https://flagcdn.com/w20/ao.png" width="20" height="15" alt="" className="flag-emoji" />Angola</li>
                          <li className="country-option" role="option" data-code="AG" data-name="Antigua and Barbuda" data-flag="🇦🇬" ><img src="https://flagcdn.com/w20/ag.png" width="20" height="15" alt="" className="flag-emoji" />Antigua and Barbuda</li>
                          <li className="country-option" role="option" data-code="AR" data-name="Argentina" data-flag="🇦🇷" ><img src="https://flagcdn.com/w20/ar.png" width="20" height="15" alt="" className="flag-emoji" />Argentina</li>
                          <li className="country-option" role="option" data-code="AM" data-name="Armenia" data-flag="🇦🇲" ><img src="https://flagcdn.com/w20/am.png" width="20" height="15" alt="" className="flag-emoji" />Armenia</li>
                          <li className="country-option" role="option" data-code="AU" data-name="Australia" data-flag="🇦🇺" ><img src="https://flagcdn.com/w20/au.png" width="20" height="15" alt="" className="flag-emoji" />Australia</li>
                          <li className="country-option" role="option" data-code="AT" data-name="Austria" data-flag="🇦🇹" ><img src="https://flagcdn.com/w20/at.png" width="20" height="15" alt="" className="flag-emoji" />Austria</li>
                          <li className="country-option" role="option" data-code="AZ" data-name="Azerbaijan" data-flag="🇦🇿" ><img src="https://flagcdn.com/w20/az.png" width="20" height="15" alt="" className="flag-emoji" />Azerbaijan</li>
                          <li className="country-option" role="option" data-code="BS" data-name="Bahamas" data-flag="🇧🇸" ><img src="https://flagcdn.com/w20/bs.png" width="20" height="15" alt="" className="flag-emoji" />Bahamas</li>
                          <li className="country-option" role="option" data-code="BH" data-name="Bahrain" data-flag="🇧🇭" ><img src="https://flagcdn.com/w20/bh.png" width="20" height="15" alt="" className="flag-emoji" />Bahrain</li>
                          <li className="country-option" role="option" data-code="BD" data-name="Bangladesh" data-flag="🇧🇩" ><img src="https://flagcdn.com/w20/bd.png" width="20" height="15" alt="" className="flag-emoji" />Bangladesh</li>
                          <li className="country-option" role="option" data-code="BB" data-name="Barbados" data-flag="🇧🇧" ><img src="https://flagcdn.com/w20/bb.png" width="20" height="15" alt="" className="flag-emoji" />Barbados</li>
                          <li className="country-option" role="option" data-code="BE" data-name="Belgium" data-flag="🇧🇪" ><img src="https://flagcdn.com/w20/be.png" width="20" height="15" alt="" className="flag-emoji" />Belgium</li>
                          <li className="country-option" role="option" data-code="BZ" data-name="Belize" data-flag="🇧🇿" ><img src="https://flagcdn.com/w20/bz.png" width="20" height="15" alt="" className="flag-emoji" />Belize</li>
                          <li className="country-option" role="option" data-code="BJ" data-name="Benin" data-flag="🇧🇯" ><img src="https://flagcdn.com/w20/bj.png" width="20" height="15" alt="" className="flag-emoji" />Benin</li>
                          <li className="country-option" role="option" data-code="BT" data-name="Bhutan" data-flag="🇧🇹" ><img src="https://flagcdn.com/w20/bt.png" width="20" height="15" alt="" className="flag-emoji" />Bhutan</li>
                          <li className="country-option" role="option" data-code="BO" data-name="Bolivia" data-flag="🇧🇴" ><img src="https://flagcdn.com/w20/bo.png" width="20" height="15" alt="" className="flag-emoji" />Bolivia</li>
                          <li className="country-option" role="option" data-code="BA" data-name="Bosnia and Herzegovina" data-flag="🇧🇦" ><img src="https://flagcdn.com/w20/ba.png" width="20" height="15" alt="" className="flag-emoji" />Bosnia and Herzegovina</li>
                          <li className="country-option" role="option" data-code="BW" data-name="Botswana" data-flag="🇧🇼" ><img src="https://flagcdn.com/w20/bw.png" width="20" height="15" alt="" className="flag-emoji" />Botswana</li>
                          <li className="country-option" role="option" data-code="BR" data-name="Brazil" data-flag="🇧🇷" ><img src="https://flagcdn.com/w20/br.png" width="20" height="15" alt="" className="flag-emoji" />Brazil</li>
                          <li className="country-option" role="option" data-code="BN" data-name="Brunei" data-flag="🇧🇳" ><img src="https://flagcdn.com/w20/bn.png" width="20" height="15" alt="" className="flag-emoji" />Brunei</li>
                          <li className="country-option" role="option" data-code="BG" data-name="Bulgaria" data-flag="🇧🇬" ><img src="https://flagcdn.com/w20/bg.png" width="20" height="15" alt="" className="flag-emoji" />Bulgaria</li>
                          <li className="country-option" role="option" data-code="BF" data-name="Burkina Faso" data-flag="🇧🇫" ><img src="https://flagcdn.com/w20/bf.png" width="20" height="15" alt="" className="flag-emoji" />Burkina Faso</li>
                          <li className="country-option" role="option" data-code="BI" data-name="Burundi" data-flag="🇧🇮" ><img src="https://flagcdn.com/w20/bi.png" width="20" height="15" alt="" className="flag-emoji" />Burundi</li>
                          <li className="country-option" role="option" data-code="CV" data-name="Cabo Verde" data-flag="🇨🇻" ><img src="https://flagcdn.com/w20/cv.png" width="20" height="15" alt="" className="flag-emoji" />Cabo Verde</li>
                          <li className="country-option" role="option" data-code="KH" data-name="Cambodia" data-flag="🇰🇭" ><img src="https://flagcdn.com/w20/kh.png" width="20" height="15" alt="" className="flag-emoji" />Cambodia</li>
                          <li className="country-option" role="option" data-code="CM" data-name="Cameroon" data-flag="🇨🇲" ><img src="https://flagcdn.com/w20/cm.png" width="20" height="15" alt="" className="flag-emoji" />Cameroon</li>
                          <li className="country-option" role="option" data-code="CA" data-name="Canada" data-flag="🇨🇦" ><img src="https://flagcdn.com/w20/ca.png" width="20" height="15" alt="" className="flag-emoji" />Canada</li>
                          <li className="country-option" role="option" data-code="CL" data-name="Chile" data-flag="🇨🇱" ><img src="https://flagcdn.com/w20/cl.png" width="20" height="15" alt="" className="flag-emoji" />Chile</li>
                          <li className="country-option" role="option" data-code="CN" data-name="China" data-flag="🇨🇳" ><img src="https://flagcdn.com/w20/cn.png" width="20" height="15" alt="" className="flag-emoji" />China</li>
                          <li className="country-option" role="option" data-code="CO" data-name="Colombia" data-flag="🇨🇴" ><img src="https://flagcdn.com/w20/co.png" width="20" height="15" alt="" className="flag-emoji" />Colombia</li>
                          <li className="country-option" role="option" data-code="KM" data-name="Comoros" data-flag="🇰🇲" ><img src="https://flagcdn.com/w20/km.png" width="20" height="15" alt="" className="flag-emoji" />Comoros</li>
                          <li className="country-option" role="option" data-code="CR" data-name="Costa Rica" data-flag="🇨🇷" ><img src="https://flagcdn.com/w20/cr.png" width="20" height="15" alt="" className="flag-emoji" />Costa Rica</li>
                          <li className="country-option" role="option" data-code="HR" data-name="Croatia" data-flag="🇭🇷" ><img src="https://flagcdn.com/w20/hr.png" width="20" height="15" alt="" className="flag-emoji" />Croatia</li>
                          <li className="country-option" role="option" data-code="CU" data-name="Cuba" data-flag="🇨🇺" ><img src="https://flagcdn.com/w20/cu.png" width="20" height="15" alt="" className="flag-emoji" />Cuba</li>
                          <li className="country-option" role="option" data-code="CY" data-name="Cyprus" data-flag="🇨🇾" ><img src="https://flagcdn.com/w20/cy.png" width="20" height="15" alt="" className="flag-emoji" />Cyprus</li>
                          <li className="country-option" role="option" data-code="CZ" data-name="Czech Republic" data-flag="🇨🇿" ><img src="https://flagcdn.com/w20/cz.png" width="20" height="15" alt="" className="flag-emoji" />Czech Republic</li>
                          <li className="country-option" role="option" data-code="DK" data-name="Denmark" data-flag="🇩🇰" ><img src="https://flagcdn.com/w20/dk.png" width="20" height="15" alt="" className="flag-emoji" />Denmark</li>
                          <li className="country-option" role="option" data-code="DJ" data-name="Djibouti" data-flag="🇩🇯" ><img src="https://flagcdn.com/w20/dj.png" width="20" height="15" alt="" className="flag-emoji" />Djibouti</li>
                          <li className="country-option" role="option" data-code="DM" data-name="Dominica" data-flag="🇩🇲" ><img src="https://flagcdn.com/w20/dm.png" width="20" height="15" alt="" className="flag-emoji" />Dominica</li>
                          <li className="country-option" role="option" data-code="DO" data-name="Dominican Republic" data-flag="🇩🇴" ><img src="https://flagcdn.com/w20/do.png" width="20" height="15" alt="" className="flag-emoji" />Dominican Republic</li>
                          <li className="country-option" role="option" data-code="EC" data-name="Ecuador" data-flag="🇪🇨" ><img src="https://flagcdn.com/w20/ec.png" width="20" height="15" alt="" className="flag-emoji" />Ecuador</li>
                          <li className="country-option" role="option" data-code="EG" data-name="Egypt" data-flag="🇪🇬" ><img src="https://flagcdn.com/w20/eg.png" width="20" height="15" alt="" className="flag-emoji" />Egypt</li>
                          <li className="country-option" role="option" data-code="SV" data-name="El Salvador" data-flag="🇸🇻" ><img src="https://flagcdn.com/w20/sv.png" width="20" height="15" alt="" className="flag-emoji" />El Salvador</li>
                          <li className="country-option" role="option" data-code="GQ" data-name="Equatorial Guinea" data-flag="🇬🇶" ><img src="https://flagcdn.com/w20/gq.png" width="20" height="15" alt="" className="flag-emoji" />Equatorial Guinea</li>
                          <li className="country-option" role="option" data-code="ER" data-name="Eritrea" data-flag="🇪🇷" ><img src="https://flagcdn.com/w20/er.png" width="20" height="15" alt="" className="flag-emoji" />Eritrea</li>
                          <li className="country-option" role="option" data-code="EE" data-name="Estonia" data-flag="🇪🇪" ><img src="https://flagcdn.com/w20/ee.png" width="20" height="15" alt="" className="flag-emoji" />Estonia</li>
                          <li className="country-option" role="option" data-code="SZ" data-name="Eswatini" data-flag="🇸🇿" ><img src="https://flagcdn.com/w20/sz.png" width="20" height="15" alt="" className="flag-emoji" />Eswatini</li>
                          <li className="country-option" role="option" data-code="ET" data-name="Ethiopia" data-flag="🇪🇹" ><img src="https://flagcdn.com/w20/et.png" width="20" height="15" alt="" className="flag-emoji" />Ethiopia</li>
                          <li className="country-option" role="option" data-code="FJ" data-name="Fiji" data-flag="🇫🇯" ><img src="https://flagcdn.com/w20/fj.png" width="20" height="15" alt="" className="flag-emoji" />Fiji</li>
                          <li className="country-option" role="option" data-code="FI" data-name="Finland" data-flag="🇫🇮" ><img src="https://flagcdn.com/w20/fi.png" width="20" height="15" alt="" className="flag-emoji" />Finland</li>
                          <li className="country-option" role="option" data-code="FR" data-name="France" data-flag="🇫🇷" ><img src="https://flagcdn.com/w20/fr.png" width="20" height="15" alt="" className="flag-emoji" />France</li>
                          <li className="country-option" role="option" data-code="GA" data-name="Gabon" data-flag="🇬🇦" ><img src="https://flagcdn.com/w20/ga.png" width="20" height="15" alt="" className="flag-emoji" />Gabon</li>
                          <li className="country-option" role="option" data-code="GM" data-name="Gambia" data-flag="🇬🇲" ><img src="https://flagcdn.com/w20/gm.png" width="20" height="15" alt="" className="flag-emoji" />Gambia</li>
                          <li className="country-option" role="option" data-code="GE" data-name="Georgia" data-flag="🇬🇪" ><img src="https://flagcdn.com/w20/ge.png" width="20" height="15" alt="" className="flag-emoji" />Georgia</li>
                          <li className="country-option" role="option" data-code="DE" data-name="Germany" data-flag="🇩🇪" ><img src="https://flagcdn.com/w20/de.png" width="20" height="15" alt="" className="flag-emoji" />Germany</li>
                          <li className="country-option" role="option" data-code="GH" data-name="Ghana" data-flag="🇬🇭" ><img src="https://flagcdn.com/w20/gh.png" width="20" height="15" alt="" className="flag-emoji" />Ghana</li>
                          <li className="country-option" role="option" data-code="GR" data-name="Greece" data-flag="🇬🇷" ><img src="https://flagcdn.com/w20/gr.png" width="20" height="15" alt="" className="flag-emoji" />Greece</li>
                          <li className="country-option" role="option" data-code="GD" data-name="Grenada" data-flag="🇬🇩" ><img src="https://flagcdn.com/w20/gd.png" width="20" height="15" alt="" className="flag-emoji" />Grenada</li>
                          <li className="country-option" role="option" data-code="GT" data-name="Guatemala" data-flag="🇬🇹" ><img src="https://flagcdn.com/w20/gt.png" width="20" height="15" alt="" className="flag-emoji" />Guatemala</li>
                          <li className="country-option" role="option" data-code="GN" data-name="Guinea" data-flag="🇬🇳" ><img src="https://flagcdn.com/w20/gn.png" width="20" height="15" alt="" className="flag-emoji" />Guinea</li>
                          <li className="country-option" role="option" data-code="GW" data-name="Guinea-Bissau" data-flag="🇬🇼" ><img src="https://flagcdn.com/w20/gw.png" width="20" height="15" alt="" className="flag-emoji" />Guinea-Bissau</li>
                          <li className="country-option" role="option" data-code="GY" data-name="Guyana" data-flag="🇬🇾" ><img src="https://flagcdn.com/w20/gy.png" width="20" height="15" alt="" className="flag-emoji" />Guyana</li>
                          <li className="country-option" role="option" data-code="HN" data-name="Honduras" data-flag="🇭🇳" ><img src="https://flagcdn.com/w20/hn.png" width="20" height="15" alt="" className="flag-emoji" />Honduras</li>
                          <li className="country-option" role="option" data-code="HU" data-name="Hungary" data-flag="🇭🇺" ><img src="https://flagcdn.com/w20/hu.png" width="20" height="15" alt="" className="flag-emoji" />Hungary</li>
                          <li className="country-option" role="option" data-code="IS" data-name="Iceland" data-flag="🇮🇸" ><img src="https://flagcdn.com/w20/is.png" width="20" height="15" alt="" className="flag-emoji" />Iceland</li>
                          <li className="country-option" role="option" data-code="IN" data-name="India" data-flag="🇮🇳" ><img src="https://flagcdn.com/w20/in.png" width="20" height="15" alt="" className="flag-emoji" />India</li>
                          <li className="country-option" role="option" data-code="ID" data-name="Indonesia" data-flag="🇮🇩" ><img src="https://flagcdn.com/w20/id.png" width="20" height="15" alt="" className="flag-emoji" />Indonesia</li>
                          <li className="country-option" role="option" data-code="IE" data-name="Ireland" data-flag="🇮🇪" ><img src="https://flagcdn.com/w20/ie.png" width="20" height="15" alt="" className="flag-emoji" />Ireland</li>
                          <li className="country-option" role="option" data-code="IL" data-name="Israel" data-flag="🇮🇱" ><img src="https://flagcdn.com/w20/il.png" width="20" height="15" alt="" className="flag-emoji" />Israel</li>
                          <li className="country-option" role="option" data-code="IT" data-name="Italy" data-flag="🇮🇹" ><img src="https://flagcdn.com/w20/it.png" width="20" height="15" alt="" className="flag-emoji" />Italy</li>
                          <li className="country-option" role="option" data-code="JM" data-name="Jamaica" data-flag="🇯🇲" ><img src="https://flagcdn.com/w20/jm.png" width="20" height="15" alt="" className="flag-emoji" />Jamaica</li>
                          <li className="country-option" role="option" data-code="JP" data-name="Japan" data-flag="🇯🇵" ><img src="https://flagcdn.com/w20/jp.png" width="20" height="15" alt="" className="flag-emoji" />Japan</li>
                          <li className="country-option" role="option" data-code="JO" data-name="Jordan" data-flag="🇯🇴" ><img src="https://flagcdn.com/w20/jo.png" width="20" height="15" alt="" className="flag-emoji" />Jordan</li>
                          <li className="country-option" role="option" data-code="KE" data-name="Kenya" data-flag="🇰🇪" ><img src="https://flagcdn.com/w20/ke.png" width="20" height="15" alt="" className="flag-emoji" />Kenya</li>
                          <li className="country-option" role="option" data-code="KI" data-name="Kiribati" data-flag="🇰🇮" ><img src="https://flagcdn.com/w20/ki.png" width="20" height="15" alt="" className="flag-emoji" />Kiribati</li>
                          <li className="country-option" role="option" data-code="KW" data-name="Kuwait" data-flag="🇰🇼" ><img src="https://flagcdn.com/w20/kw.png" width="20" height="15" alt="" className="flag-emoji" />Kuwait</li>
                          <li className="country-option" role="option" data-code="KG" data-name="Kyrgyzstan" data-flag="🇰🇬" ><img src="https://flagcdn.com/w20/kg.png" width="20" height="15" alt="" className="flag-emoji" />Kyrgyzstan</li>
                          <li className="country-option" role="option" data-code="LA" data-name="Laos" data-flag="🇱🇦" ><img src="https://flagcdn.com/w20/la.png" width="20" height="15" alt="" className="flag-emoji" />Laos</li>
                          <li className="country-option" role="option" data-code="LV" data-name="Latvia" data-flag="🇱🇻" ><img src="https://flagcdn.com/w20/lv.png" width="20" height="15" alt="" className="flag-emoji" />Latvia</li>
                          <li className="country-option" role="option" data-code="LS" data-name="Lesotho" data-flag="🇱🇸" ><img src="https://flagcdn.com/w20/ls.png" width="20" height="15" alt="" className="flag-emoji" />Lesotho</li>
                          <li className="country-option" role="option" data-code="LI" data-name="Liechtenstein" data-flag="🇱🇮" ><img src="https://flagcdn.com/w20/li.png" width="20" height="15" alt="" className="flag-emoji" />Liechtenstein</li>
                          <li className="country-option" role="option" data-code="LT" data-name="Lithuania" data-flag="🇱🇹" ><img src="https://flagcdn.com/w20/lt.png" width="20" height="15" alt="" className="flag-emoji" />Lithuania</li>
                          <li className="country-option" role="option" data-code="LU" data-name="Luxembourg" data-flag="🇱🇺" ><img src="https://flagcdn.com/w20/lu.png" width="20" height="15" alt="" className="flag-emoji" />Luxembourg</li>
                          <li className="country-option" role="option" data-code="MG" data-name="Madagascar" data-flag="🇲🇬" ><img src="https://flagcdn.com/w20/mg.png" width="20" height="15" alt="" className="flag-emoji" />Madagascar</li>
                          <li className="country-option" role="option" data-code="MW" data-name="Malawi" data-flag="🇲🇼" ><img src="https://flagcdn.com/w20/mw.png" width="20" height="15" alt="" className="flag-emoji" />Malawi</li>
                          <li className="country-option" role="option" data-code="MY" data-name="Malaysia" data-flag="🇲🇾" ><img src="https://flagcdn.com/w20/my.png" width="20" height="15" alt="" className="flag-emoji" />Malaysia</li>
                          <li className="country-option" role="option" data-code="MV" data-name="Maldives" data-flag="🇲🇻" ><img src="https://flagcdn.com/w20/mv.png" width="20" height="15" alt="" className="flag-emoji" />Maldives</li>
                          <li className="country-option" role="option" data-code="MT" data-name="Malta" data-flag="🇲🇹" ><img src="https://flagcdn.com/w20/mt.png" width="20" height="15" alt="" className="flag-emoji" />Malta</li>
                          <li className="country-option" role="option" data-code="MH" data-name="Marshall Islands" data-flag="🇲🇭" ><img src="https://flagcdn.com/w20/mh.png" width="20" height="15" alt="" className="flag-emoji" />Marshall Islands</li>
                          <li className="country-option" role="option" data-code="MR" data-name="Mauritania" data-flag="🇲🇷" ><img src="https://flagcdn.com/w20/mr.png" width="20" height="15" alt="" className="flag-emoji" />Mauritania</li>
                          <li className="country-option" role="option" data-code="MU" data-name="Mauritius" data-flag="🇲🇺" ><img src="https://flagcdn.com/w20/mu.png" width="20" height="15" alt="" className="flag-emoji" />Mauritius</li>
                          <li className="country-option" role="option" data-code="MX" data-name="Mexico" data-flag="🇲🇽" ><img src="https://flagcdn.com/w20/mx.png" width="20" height="15" alt="" className="flag-emoji" />Mexico</li>
                          <li className="country-option" role="option" data-code="FM" data-name="Micronesia" data-flag="🇫🇲" ><img src="https://flagcdn.com/w20/fm.png" width="20" height="15" alt="" className="flag-emoji" />Micronesia</li>
                          <li className="country-option" role="option" data-code="MD" data-name="Moldova" data-flag="🇲🇩" ><img src="https://flagcdn.com/w20/md.png" width="20" height="15" alt="" className="flag-emoji" />Moldova</li>
                          <li className="country-option" role="option" data-code="MC" data-name="Monaco" data-flag="🇲🇨" ><img src="https://flagcdn.com/w20/mc.png" width="20" height="15" alt="" className="flag-emoji" />Monaco</li>
                          <li className="country-option" role="option" data-code="MN" data-name="Mongolia" data-flag="🇲🇳" ><img src="https://flagcdn.com/w20/mn.png" width="20" height="15" alt="" className="flag-emoji" />Mongolia</li>
                          <li className="country-option" role="option" data-code="ME" data-name="Montenegro" data-flag="🇲🇪" ><img src="https://flagcdn.com/w20/me.png" width="20" height="15" alt="" className="flag-emoji" />Montenegro</li>
                          <li className="country-option" role="option" data-code="MA" data-name="Morocco" data-flag="🇲🇦" ><img src="https://flagcdn.com/w20/ma.png" width="20" height="15" alt="" className="flag-emoji" />Morocco</li>
                          <li className="country-option" role="option" data-code="MZ" data-name="Mozambique" data-flag="🇲🇿" ><img src="https://flagcdn.com/w20/mz.png" width="20" height="15" alt="" className="flag-emoji" />Mozambique</li>
                          <li className="country-option" role="option" data-code="NA" data-name="Namibia" data-flag="🇳🇦" ><img src="https://flagcdn.com/w20/na.png" width="20" height="15" alt="" className="flag-emoji" />Namibia</li>
                          <li className="country-option" role="option" data-code="NR" data-name="Nauru" data-flag="🇳🇷" ><img src="https://flagcdn.com/w20/nr.png" width="20" height="15" alt="" className="flag-emoji" />Nauru</li>
                          <li className="country-option" role="option" data-code="NP" data-name="Nepal" data-flag="🇳🇵" ><img src="https://flagcdn.com/w20/np.png" width="20" height="15" alt="" className="flag-emoji" />Nepal</li>
                          <li className="country-option country-option--selected" role="option" data-code="NL" data-name="Netherlands" data-flag="🇳🇱" ><img src="https://flagcdn.com/w20/nl.png" width="20" height="15" alt="" className="flag-emoji" />Netherlands</li>
                          <li className="country-option" role="option" data-code="NE" data-name="Niger" data-flag="🇳🇪" ><img src="https://flagcdn.com/w20/ne.png" width="20" height="15" alt="" className="flag-emoji" />Niger</li>
                          <li className="country-option" role="option" data-code="NG" data-name="Nigeria" data-flag="🇳🇬" ><img src="https://flagcdn.com/w20/ng.png" width="20" height="15" alt="" className="flag-emoji" />Nigeria</li>
                          <li className="country-option" role="option" data-code="NO" data-name="Norway" data-flag="🇳🇴" ><img src="https://flagcdn.com/w20/no.png" width="20" height="15" alt="" className="flag-emoji" />Norway</li>
                          <li className="country-option" role="option" data-code="OM" data-name="Oman" data-flag="🇴🇲" ><img src="https://flagcdn.com/w20/om.png" width="20" height="15" alt="" className="flag-emoji" />Oman</li>
                          <li className="country-option" role="option" data-code="PK" data-name="Pakistan" data-flag="🇵🇰" ><img src="https://flagcdn.com/w20/pk.png" width="20" height="15" alt="" className="flag-emoji" />Pakistan</li>
                          <li className="country-option" role="option" data-code="PW" data-name="Palau" data-flag="🇵🇼" ><img src="https://flagcdn.com/w20/pw.png" width="20" height="15" alt="" className="flag-emoji" />Palau</li>
                          <li className="country-option" role="option" data-code="PA" data-name="Panama" data-flag="🇵🇦" ><img src="https://flagcdn.com/w20/pa.png" width="20" height="15" alt="" className="flag-emoji" />Panama</li>
                          <li className="country-option" role="option" data-code="PG" data-name="Papua New Guinea" data-flag="🇵🇬" ><img src="https://flagcdn.com/w20/pg.png" width="20" height="15" alt="" className="flag-emoji" />Papua New Guinea</li>
                          <li className="country-option" role="option" data-code="PY" data-name="Paraguay" data-flag="🇵🇾" ><img src="https://flagcdn.com/w20/py.png" width="20" height="15" alt="" className="flag-emoji" />Paraguay</li>
                          <li className="country-option" role="option" data-code="PE" data-name="Peru" data-flag="🇵🇪" ><img src="https://flagcdn.com/w20/pe.png" width="20" height="15" alt="" className="flag-emoji" />Peru</li>
                          <li className="country-option" role="option" data-code="PH" data-name="Philippines" data-flag="🇵🇭" ><img src="https://flagcdn.com/w20/ph.png" width="20" height="15" alt="" className="flag-emoji" />Philippines</li>
                          <li className="country-option" role="option" data-code="PL" data-name="Poland" data-flag="🇵🇱" ><img src="https://flagcdn.com/w20/pl.png" width="20" height="15" alt="" className="flag-emoji" />Poland</li>
                          <li className="country-option" role="option" data-code="PT" data-name="Portugal" data-flag="🇵🇹" ><img src="https://flagcdn.com/w20/pt.png" width="20" height="15" alt="" className="flag-emoji" />Portugal</li>
                          <li className="country-option" role="option" data-code="QA" data-name="Qatar" data-flag="🇶🇦" ><img src="https://flagcdn.com/w20/qa.png" width="20" height="15" alt="" className="flag-emoji" />Qatar</li>
                          <li className="country-option" role="option" data-code="RO" data-name="Romania" data-flag="🇷🇴" ><img src="https://flagcdn.com/w20/ro.png" width="20" height="15" alt="" className="flag-emoji" />Romania</li>
                          <li className="country-option" role="option" data-code="RW" data-name="Rwanda" data-flag="🇷🇼" ><img src="https://flagcdn.com/w20/rw.png" width="20" height="15" alt="" className="flag-emoji" />Rwanda</li>
                          <li className="country-option" role="option" data-code="KN" data-name="Saint Kitts and Nevis" data-flag="🇰🇳" ><img src="https://flagcdn.com/w20/kn.png" width="20" height="15" alt="" className="flag-emoji" />Saint Kitts and Nevis</li>
                          <li className="country-option" role="option" data-code="LC" data-name="Saint Lucia" data-flag="🇱🇨" ><img src="https://flagcdn.com/w20/lc.png" width="20" height="15" alt="" className="flag-emoji" />Saint Lucia</li>
                          <li className="country-option" role="option" data-code="VC" data-name="Saint Vincent and the Grenadines" data-flag="🇻🇨" ><img src="https://flagcdn.com/w20/vc.png" width="20" height="15" alt="" className="flag-emoji" />Saint Vincent and the Grenadines</li>
                          <li className="country-option" role="option" data-code="WS" data-name="Samoa" data-flag="🇼🇸" ><img src="https://flagcdn.com/w20/ws.png" width="20" height="15" alt="" className="flag-emoji" />Samoa</li>
                          <li className="country-option" role="option" data-code="SM" data-name="San Marino" data-flag="🇸🇲" ><img src="https://flagcdn.com/w20/sm.png" width="20" height="15" alt="" className="flag-emoji" />San Marino</li>
                          <li className="country-option" role="option" data-code="ST" data-name="Sao Tome and Principe" data-flag="🇸🇹" ><img src="https://flagcdn.com/w20/st.png" width="20" height="15" alt="" className="flag-emoji" />Sao Tome and Principe</li>
                          <li className="country-option" role="option" data-code="SA" data-name="Saudi Arabia" data-flag="🇸🇦" ><img src="https://flagcdn.com/w20/sa.png" width="20" height="15" alt="" className="flag-emoji" />Saudi Arabia</li>
                          <li className="country-option" role="option" data-code="SN" data-name="Senegal" data-flag="🇸🇳" ><img src="https://flagcdn.com/w20/sn.png" width="20" height="15" alt="" className="flag-emoji" />Senegal</li>
                          <li className="country-option" role="option" data-code="RS" data-name="Serbia" data-flag="🇷🇸" ><img src="https://flagcdn.com/w20/rs.png" width="20" height="15" alt="" className="flag-emoji" />Serbia</li>
                          <li className="country-option" role="option" data-code="SC" data-name="Seychelles" data-flag="🇸🇨" ><img src="https://flagcdn.com/w20/sc.png" width="20" height="15" alt="" className="flag-emoji" />Seychelles</li>
                          <li className="country-option" role="option" data-code="SL" data-name="Sierra Leone" data-flag="🇸🇱" ><img src="https://flagcdn.com/w20/sl.png" width="20" height="15" alt="" className="flag-emoji" />Sierra Leone</li>
                          <li className="country-option" role="option" data-code="SG" data-name="Singapore" data-flag="🇸🇬" ><img src="https://flagcdn.com/w20/sg.png" width="20" height="15" alt="" className="flag-emoji" />Singapore</li>
                          <li className="country-option" role="option" data-code="SK" data-name="Slovakia" data-flag="🇸🇰" ><img src="https://flagcdn.com/w20/sk.png" width="20" height="15" alt="" className="flag-emoji" />Slovakia</li>
                          <li className="country-option" role="option" data-code="SI" data-name="Slovenia" data-flag="🇸🇮" ><img src="https://flagcdn.com/w20/si.png" width="20" height="15" alt="" className="flag-emoji" />Slovenia</li>
                          <li className="country-option" role="option" data-code="SB" data-name="Solomon Islands" data-flag="🇸🇧" ><img src="https://flagcdn.com/w20/sb.png" width="20" height="15" alt="" className="flag-emoji" />Solomon Islands</li>
                          <li className="country-option" role="option" data-code="ZA" data-name="South Africa" data-flag="🇿🇦" ><img src="https://flagcdn.com/w20/za.png" width="20" height="15" alt="" className="flag-emoji" />South Africa</li>
                          <li className="country-option" role="option" data-code="ES" data-name="Spain" data-flag="🇪🇸" ><img src="https://flagcdn.com/w20/es.png" width="20" height="15" alt="" className="flag-emoji" />Spain</li>
                          <li className="country-option" role="option" data-code="LK" data-name="Sri Lanka" data-flag="🇱🇰" ><img src="https://flagcdn.com/w20/lk.png" width="20" height="15" alt="" className="flag-emoji" />Sri Lanka</li>
                          <li className="country-option" role="option" data-code="SR" data-name="Suriname" data-flag="🇸🇷" ><img src="https://flagcdn.com/w20/sr.png" width="20" height="15" alt="" className="flag-emoji" />Suriname</li>
                          <li className="country-option" role="option" data-code="SE" data-name="Sweden" data-flag="🇸🇪" ><img src="https://flagcdn.com/w20/se.png" width="20" height="15" alt="" className="flag-emoji" />Sweden</li>
                          <li className="country-option" role="option" data-code="CH" data-name="Switzerland" data-flag="🇨🇭" ><img src="https://flagcdn.com/w20/ch.png" width="20" height="15" alt="" className="flag-emoji" />Switzerland</li>
                          <li className="country-option" role="option" data-code="TW" data-name="Taiwan" data-flag="🇹🇼" ><img src="https://flagcdn.com/w20/tw.png" width="20" height="15" alt="" className="flag-emoji" />Taiwan</li>
                          <li className="country-option" role="option" data-code="TJ" data-name="Tajikistan" data-flag="🇹🇯" ><img src="https://flagcdn.com/w20/tj.png" width="20" height="15" alt="" className="flag-emoji" />Tajikistan</li>
                          <li className="country-option" role="option" data-code="TZ" data-name="Tanzania" data-flag="🇹🇿" ><img src="https://flagcdn.com/w20/tz.png" width="20" height="15" alt="" className="flag-emoji" />Tanzania</li>
                          <li className="country-option" role="option" data-code="TH" data-name="Thailand" data-flag="🇹🇭" ><img src="https://flagcdn.com/w20/th.png" width="20" height="15" alt="" className="flag-emoji" />Thailand</li>
                          <li className="country-option" role="option" data-code="TL" data-name="Timor-Leste" data-flag="🇹🇱" ><img src="https://flagcdn.com/w20/tl.png" width="20" height="15" alt="" className="flag-emoji" />Timor-Leste</li>
                          <li className="country-option" role="option" data-code="TG" data-name="Togo" data-flag="🇹🇬" ><img src="https://flagcdn.com/w20/tg.png" width="20" height="15" alt="" className="flag-emoji" />Togo</li>
                          <li className="country-option" role="option" data-code="TO" data-name="Tonga" data-flag="🇹🇴" ><img src="https://flagcdn.com/w20/to.png" width="20" height="15" alt="" className="flag-emoji" />Tonga</li>
                          <li className="country-option" role="option" data-code="TT" data-name="Trinidad and Tobago" data-flag="🇹🇹" ><img src="https://flagcdn.com/w20/tt.png" width="20" height="15" alt="" className="flag-emoji" />Trinidad and Tobago</li>
                          <li className="country-option" role="option" data-code="TR" data-name="Turkey" data-flag="🇹🇷" ><img src="https://flagcdn.com/w20/tr.png" width="20" height="15" alt="" className="flag-emoji" />Turkey</li>
                          <li className="country-option" role="option" data-code="TV" data-name="Tuvalu" data-flag="🇹🇻" ><img src="https://flagcdn.com/w20/tv.png" width="20" height="15" alt="" className="flag-emoji" />Tuvalu</li>
                          <li className="country-option" role="option" data-code="UG" data-name="Uganda" data-flag="🇺🇬" ><img src="https://flagcdn.com/w20/ug.png" width="20" height="15" alt="" className="flag-emoji" />Uganda</li>
                          <li className="country-option" role="option" data-code="UA" data-name="Ukraine" data-flag="🇺🇦" ><img src="https://flagcdn.com/w20/ua.png" width="20" height="15" alt="" className="flag-emoji" />Ukraine</li>
                          <li className="country-option" role="option" data-code="AE" data-name="United Arab Emirates" data-flag="🇦🇪" ><img src="https://flagcdn.com/w20/ae.png" width="20" height="15" alt="" className="flag-emoji" />United Arab Emirates</li>
                          <li className="country-option" role="option" data-code="GB" data-name="United Kingdom" data-flag="🇬🇧" ><img src="https://flagcdn.com/w20/gb.png" width="20" height="15" alt="" className="flag-emoji" />United Kingdom</li>
                          <li className="country-option" role="option" data-code="US" data-name="United States" data-flag="🇺🇸" ><img src="https://flagcdn.com/w20/us.png" width="20" height="15" alt="" className="flag-emoji" />United States</li>
                          <li className="country-option" role="option" data-code="UZ" data-name="Uzbekistan" data-flag="🇺🇿" ><img src="https://flagcdn.com/w20/uz.png" width="20" height="15" alt="" className="flag-emoji" />Uzbekistan</li>
                          <li className="country-option" role="option" data-code="VN" data-name="Vietnam" data-flag="🇻🇳" ><img src="https://flagcdn.com/w20/vn.png" width="20" height="15" alt="" className="flag-emoji" />Vietnam</li>
                          <li className="country-option" role="option" data-code="ZM" data-name="Zambia" data-flag="🇿🇲" ><img src="https://flagcdn.com/w20/zm.png" width="20" height="15" alt="" className="flag-emoji" />Zambia</li>
</ul>
                        <p className="country-empty" id="countryEmpty" hidden>No countries found.</p>
                      </div>
                    </div>
                  </div>
                  <div className="form-step">
                    <label>2. What is your experience?</label>
                    <div className="pill-row pill-row--desktop">
                      <button type="button" className="pill pill--active">Beginner</button>
                      <button type="button" className="pill">Intermediate</button>
                      <button type="button" className="pill">Expert</button>
                    </div>
                    <div className="simple-select" data-simple-select="">
                      <button type="button" className="simple-select__toggle" aria-haspopup="listbox" aria-expanded="false">
                        <span className="simple-select__value">Beginner</span>
                        <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 simple-select__chevron" />
                      </button>
                      <ul className="simple-select__list" hidden role="listbox">
                        <li role="option" className="simple-select__option simple-select__option--selected">Beginner</li>
                        <li role="option" className="simple-select__option">Intermediate</li>
                        <li role="option" className="simple-select__option">Expert</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-step">
                    <label>3. What is your starting investment?</label>
                    <div className="pill-row pill-row--desktop">
                      <button type="button" className="pill pill--active">$1 - $100</button>
                      <button type="button" className="pill">$101 - $500</button>
                      <button type="button" className="pill">$501 - $1000</button>
                      <button type="button" className="pill">$1000+</button>
                    </div>
                    <div className="simple-select" data-simple-select="">
                      <button type="button" className="simple-select__toggle" aria-haspopup="listbox" aria-expanded="false">
                        <span className="simple-select__value">$1 - $100</span>
                        <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 simple-select__chevron" />
                      </button>
                      <ul className="simple-select__list" hidden role="listbox">
                        <li role="option" className="simple-select__option simple-select__option--selected">$1 - $100</li>
                        <li role="option" className="simple-select__option">$101 - $500</li>
                        <li role="option" className="simple-select__option">$501 - $1000</li>
                        <li role="option" className="simple-select__option">$1000+</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-step">
                    <label>4. What is your preferred payment method?</label>
                    <div className="pill-row pill-row--desktop">
                      <button type="button" className="pill pill--active">Bank Transfer</button>
                      <button type="button" className="pill">Credit Card</button>
                      <button type="button" className="pill">Crypto</button>
                      <button type="button" className="pill">E-Wallet</button>
                    </div>
                    <div className="simple-select" data-simple-select="">
                      <button type="button" className="simple-select__toggle" aria-haspopup="listbox" aria-expanded="false">
                        <span className="simple-select__value">Bank Transfer</span>
                        <img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-24 simple-select__chevron" />
                      </button>
                      <ul className="simple-select__list" hidden role="listbox">
                        <li role="option" className="simple-select__option simple-select__option--selected">Bank Transfer</li>
                        <li role="option" className="simple-select__option">Credit Card</li>
                        <li role="option" className="simple-select__option">Crypto</li>
                        <li role="option" className="simple-select__option">E-Wallet</li>
                      </ul>
                    </div>
                  </div>
                  <button type="submit" className="btn btn--secondary btn--block">Find Your Broker</button>
                  <div className="form-trust">
                    <span><img src="/assets/images/icon-lock.svg" alt="" />100% Secure</span>
                    <img src="/assets/images/icon-dot.svg" alt="" className="icon-24" />
                    <span>No spam</span>
                    <img src="/assets/images/icon-dot.svg" alt="" className="icon-24" />
                    <span>No obligations</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* BEST RATED BROKERS + HOW IT WORKS */}
        <section className="section section--brokers-bg">
          <div className="section-bg-decor" aria-hidden="true">
            <img src="/assets/images/best-brokers-bg.png" alt="" />
            <div className="section-bg-decor__fade"></div>
          </div>
          <div className="section-inner">
            <div className="section-head section-head--split">
              <div className="section-head__copy">
                <p className="eyebrow">TOP BROKER COMPARISON</p>
                <h2>Best Rated Forex Brokers</h2>
                <p className="lead">Compare trusted forex brokers based on fees, platforms, regulations, and real trading conditions.</p>
              </div>
              <div className="section-head__nav">
                <button type="button" className="carousel-btn carousel-btn--prev" id="brokerCarouselPrev" aria-label="Previous"><img src="/assets/images/icon-chevron-right-1.svg" alt="" /></button>
                <button type="button" className="carousel-btn carousel-btn--next" id="brokerCarouselNext" aria-label="Next"><img src="/assets/images/icon-chevron-right-2.svg" alt="" /></button>
                <a href="#" className="btn btn--text btn--text--px">View All Brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
            </div>
            <BrokerCarousel />
            <a href="#" className="btn btn--text btn--text--px btn--center broker-cards__view-all">View All Brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
          </div>

          <div className="section-inner">
            <div className="how-it-works">
              <div className="how-it-works__copy">
                <p className="eyebrow">HOW FX LOOK UP WORKS</p>
                <h2>Start Successful Forex Trading in 3 Simple Steps</h2>
                <p className="lead">Find, compare, and choose trusted forex brokers based on your country, goals, and experience level.</p>
                <a href="#" className="btn btn--secondary">Find Your Broker</a>
              </div>
              <div className="how-it-works__steps">
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-search.svg" alt="" /></span>
                  <div>
                    <p className="step-title">1. Discover</p>
                    <p className="lead">Choose your country, experience level, starting budget, and trading preferences.</p>
                  </div>
                </div>
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-arrow-swap-filled.svg" alt="" /></span>
                  <div>
                    <p className="step-title">2. Compare</p>
                    <p className="lead">Review broker fees, platforms, regulations, spreads, deposits, and real trading conditions.</p>
                  </div>
                </div>
                <div className="step-card">
                  <span className="step-icon"><img src="/assets/images/icon-target.svg" alt="" /></span>
                  <div>
                    <p className="step-title">3. Choose</p>
                    <p className="lead">Pick the broker that fits your goals and continue to the review or official broker website.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat">
                <p className="stat__number" data-count-to="100" data-suffix="+">100+</p>
                <p className="stat__label">Trusted brokers compared worldwide.</p>
                <a href="#" className="btn btn--text btn--center">Compare Brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
              <div className="stat">
                <p className="stat__number" data-count-to="25" data-suffix="+">25+</p>
                <p className="stat__label">Countries and markets supported.</p>
                <a href="#" className="btn btn--text btn--center">Explore Markets <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
              <div className="stat">
                <p className="stat__number">24/7</p>
                <p className="stat__label">Updated broker data and offers.</p>
                <a href="#" className="btn btn--text btn--center">View brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
              <div className="stat stat--last">
                <p className="stat__number" data-count-to="4.3" data-suffix="/5" data-decimals="1">4.3/5</p>
                <p className="stat__label">Average user satisfaction rating.</p>
                <a href="#" className="btn btn--text btn--center">View Top Rated <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section className="section section--about">
          <span className="about-decor-circle" aria-hidden="true"></span>
          <div className="section-inner">
            <div className="about-panel">
              <div className="about-panel__copy">
                <p className="eyebrow">ABOUT FX LOOK UP</p>
                <h2>Helping Traders Find the Right Forex Broker Faster</h2>
                <p className="lead">FX Look Up, helps traders compare forex brokers based on fees, platforms, regulations, country availability, payment methods, and real trading conditions. Our goal is to make broker research clearer, faster, and easier to understand.</p>
                <a href="#" className="btn btn--text">Read More <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
              </div>

              <div className="broker-comparison">
                <div className="broker-comparison__header">
                  <p className="broker-comparison__title">Broker Comparison</p>
                  <span className="broker-comparison__badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5.25 3.4 10.16 8 11.5 4.6-1.34 8-6.25 8-11.5V5l-8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Independent &amp; Unbiased
                  </span>
                </div>
                <div className="broker-match">
                  <span className="broker-match__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.6 5.6L21 8.3l-4.6 4.3 1.2 6.4L12 16l-5.6 3 1.2-6.4L3 8.3l6.4-.7L12 2Z" fill="white"/></svg>
                  </span>
                  <div className="broker-match__body">
                    <p className="broker-match__title">Our Top Match for You</p>
                    <p className="broker-match__sub">Based on your trading preferences and priorities, we recommend this broker as the best fit.</p>
                  </div>
                  <div className="broker-match__rating">
                    <span className="broker-match__score"><img src="/assets/images/icon-star.svg" alt="" />4.8/5</span>
                    <span className="broker-match__label">Excellent Match</span>
                  </div>
                </div>
                <div className="broker-table">
                  <div className="broker-table__row broker-table__row--head">
                    <span>Broker</span>
                    <span>Regulation</span>
                    <span>Min. Deposit</span>
                    <span>Min. Spread</span>
                    <span>Rating</span>
                    <span></span>
                  </div>
                  <div className="broker-table__row">
                    <div className="broker-cell-name">
                      <span className="broker-logo-sm broker-logo-sm--forexpro">FP</span>
                      <span className="broker-cell-name__text">
                        <strong>ForexPro</strong>
                        <span className="recommended-badge"><img src="/assets/images/icon-star.svg" alt="" />Recommended</span>
                      </span>
                    </div>
                    <div className="regulation-col">
                      <img src="/assets/images/icon-check-circle.svg" alt="" />
                      <img src="/assets/images/icon-check-circle.svg" alt="" />
                    </div>
                    <span className="cell-value">$0</span>
                    <span className="cell-value">0.0 pips</span>
                    <div className="rating-col">
                      <span className="stars">★★★★★</span>
                      <span className="rating-num">4.8/5</span>
                    </div>
                    <span className="row-chevron">›</span>
                  </div>
                  <div className="broker-table__row">
                    <div className="broker-cell-name">
                      <span className="broker-logo-sm broker-logo-sm--xm">XM</span>
                      <span className="broker-cell-name__text"><strong>XM Global</strong></span>
                    </div>
                    <div className="regulation-col">
                      <img src="/assets/images/icon-check-circle.svg" alt="" />
                      <img src="/assets/images/icon-check-circle.svg" alt="" />
                    </div>
                    <span className="cell-value">$5</span>
                    <span className="cell-value">0.6 pips</span>
                    <div className="rating-col">
                      <span className="stars">★★★★★</span>
                      <span className="rating-num">4.6/5</span>
                    </div>
                    <span className="row-chevron">›</span>
                  </div>
                  <div className="broker-table__row">
                    <div className="broker-cell-name">
                      <span className="broker-logo-sm broker-logo-sm--ig">IG</span>
                      <span className="broker-cell-name__text"><strong>IG Markets</strong></span>
                    </div>
                    <div className="regulation-col">
                      <img src="/assets/images/icon-check-circle.svg" alt="" />
                      <img src="/assets/images/icon-check-circle.svg" alt="" />
                    </div>
                    <span className="cell-value">$250</span>
                    <span className="cell-value">1.0 pips</span>
                    <div className="rating-col">
                      <span className="stars">★★★★★</span>
                      <span className="rating-num">4.4/5</span>
                    </div>
                    <span className="row-chevron">›</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="goals">
              <div className="section-head section-head--center">
                <h2>Whatever Your Trading Goals are, We&rsquo;ll Help you Find The Right Forex Broker</h2>
                <p className="lead">Choose the trading profile that best matches your needs and explore brokers tailored to your experience, strategy, and goals</p>
              </div>
              <div className="goal-cards">
                <div className="goal-card">
                  <span className="goal-icon"><img src="/assets/images/icon-graduation.svg" alt="" /></span>
                  <div className="goal-card__body">
                    <p className="goal-title">For Beginners</p>
                    <p className="lead">Get matched with regulated brokers that offer low minimums, educational tools, and easy onboarding.</p>
                  </div>
                  <a href="#" className="btn btn--text">Find a Beginner Broker <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                </div>
                <div className="goal-card">
                  <span className="goal-icon"><img src="/assets/images/icon-trading-pattern.svg" alt="" /></span>
                  <div className="goal-card__body">
                    <p className="goal-title">For Active Traders</p>
                    <p className="lead">Compare spreads, commissions, execution speed, and platforms for high-frequency trading.</p>
                  </div>
                  <a href="#" className="btn btn--text">Compare Trading Conditions <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                </div>
                <div className="goal-card">
                  <span className="goal-icon"><img src="/assets/images/icon-loop-ring.svg" alt="" /></span>
                  <div className="goal-card__body">
                    <p className="goal-title">For Advanced Traders</p>
                    <p className="lead">Explore institutional-grade tools, API access, and multi-asset brokers for expert strategies.</p>
                  </div>
                  <a href="#" className="btn btn--text">Explore advanced brokers <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--faq">
          <div className="section-inner">
            <div className="section-head section-head--center">
              <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Questions Before Choosing a Forex Broker?</h2>
              <p className="lead">Learn how FX Look Up compares brokers, personalizes recommendations, and helps you make a clearer trading decision.</p>
            </div>
            <div className="faq-grid">
              <div className="faq-col">
                <div className="faq-item is-open">
                  <button type="button" className="faq-question">How does FX Look Up compare forex brokers?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">FX Look Up compares brokers using key factors such as fees, spreads, platforms, regulations, deposit requirements, payment methods, and country availability.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">Are broker recommendations based on my country?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Yes, broker recommendations are tailored to your country to show only brokers available and regulated in your region.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">Do you earn commission from broker links?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">FX Look Up may earn a commission when you visit a broker through our affiliate links. This does not affect our ratings or recommendations.</p></div>
                </div>
              </div>
              <div className="faq-col">
                <div className="faq-item">
                  <button type="button" className="faq-question">What should beginners look for in a forex broker?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Beginners should look for regulated brokers with low minimum deposits, educational resources, and easy-to-use platforms.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">How often is broker data updated?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Broker data is reviewed and updated regularly to ensure accuracy in fees, regulations, and trading conditions.</p></div>
                </div>
                <div className="faq-item">
                  <button type="button" className="faq-question">Can I compare brokers side by side?<img src="/assets/images/icon-chevron-down.svg" alt="" /></button>
                  <div className="faq-answer"><p className="lead">Yes, FX Look Up offers a broker comparison tool that lets you compare multiple brokers side by side across key criteria.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOGS + CTA */}
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
              <a href="/blog" className="btn btn--text">View All Posts <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
            </div>
            <div className="blog-cards" id="blogCarousel">
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
