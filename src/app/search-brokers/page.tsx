import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Search Forex Brokers — FX Look Up',
  description: 'Search and filter trusted forex brokers by country, platform, payment method, fees, and rating to find your ideal broker in seconds.',
}

export default function SearchBrokersPage() {
  return (
    <>
      <main>

        {/* HERO */}
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
                            <li className="country-option" role="option" data-code="CR" data-name="Costa Rica" data-flag="🇨🇷"><img src="https://flagcdn.com/w20/cr.png" width="20" height="15" alt="" className="flag-emoji" />Costa Rica</li>
                            <li className="country-option" role="option" data-code="HR" data-name="Croatia" data-flag="🇭🇷"><img src="https://flagcdn.com/w20/hr.png" width="20" height="15" alt="" className="flag-emoji" />Croatia</li>
                            <li className="country-option" role="option" data-code="CY" data-name="Cyprus" data-flag="🇨🇾"><img src="https://flagcdn.com/w20/cy.png" width="20" height="15" alt="" className="flag-emoji" />Cyprus</li>
                            <li className="country-option" role="option" data-code="CZ" data-name="Czech Republic" data-flag="🇨🇿"><img src="https://flagcdn.com/w20/cz.png" width="20" height="15" alt="" className="flag-emoji" />Czech Republic</li>
                            <li className="country-option" role="option" data-code="DK" data-name="Denmark" data-flag="🇩🇰"><img src="https://flagcdn.com/w20/dk.png" width="20" height="15" alt="" className="flag-emoji" />Denmark</li>
                            <li className="country-option" role="option" data-code="DO" data-name="Dominican Republic" data-flag="🇩🇴"><img src="https://flagcdn.com/w20/do.png" width="20" height="15" alt="" className="flag-emoji" />Dominican Republic</li>
                            <li className="country-option" role="option" data-code="EC" data-name="Ecuador" data-flag="🇪🇨"><img src="https://flagcdn.com/w20/ec.png" width="20" height="15" alt="" className="flag-emoji" />Ecuador</li>
                            <li className="country-option" role="option" data-code="EG" data-name="Egypt" data-flag="🇪🇬"><img src="https://flagcdn.com/w20/eg.png" width="20" height="15" alt="" className="flag-emoji" />Egypt</li>
                            <li className="country-option" role="option" data-code="SV" data-name="El Salvador" data-flag="🇸🇻"><img src="https://flagcdn.com/w20/sv.png" width="20" height="15" alt="" className="flag-emoji" />El Salvador</li>
                            <li className="country-option" role="option" data-code="EE" data-name="Estonia" data-flag="🇪🇪"><img src="https://flagcdn.com/w20/ee.png" width="20" height="15" alt="" className="flag-emoji" />Estonia</li>
                            <li className="country-option" role="option" data-code="ET" data-name="Ethiopia" data-flag="🇪🇹"><img src="https://flagcdn.com/w20/et.png" width="20" height="15" alt="" className="flag-emoji" />Ethiopia</li>
                            <li className="country-option" role="option" data-code="FI" data-name="Finland" data-flag="🇫🇮"><img src="https://flagcdn.com/w20/fi.png" width="20" height="15" alt="" className="flag-emoji" />Finland</li>
                            <li className="country-option" role="option" data-code="FR" data-name="France" data-flag="🇫🇷"><img src="https://flagcdn.com/w20/fr.png" width="20" height="15" alt="" className="flag-emoji" />France</li>
                            <li className="country-option" role="option" data-code="GA" data-name="Gabon" data-flag="🇬🇦"><img src="https://flagcdn.com/w20/ga.png" width="20" height="15" alt="" className="flag-emoji" />Gabon</li>
                            <li className="country-option" role="option" data-code="GE" data-name="Georgia" data-flag="🇬🇪"><img src="https://flagcdn.com/w20/ge.png" width="20" height="15" alt="" className="flag-emoji" />Georgia</li>
                            <li className="country-option" role="option" data-code="DE" data-name="Germany" data-flag="🇩🇪"><img src="https://flagcdn.com/w20/de.png" width="20" height="15" alt="" className="flag-emoji" />Germany</li>
                            <li className="country-option" role="option" data-code="GH" data-name="Ghana" data-flag="🇬🇭"><img src="https://flagcdn.com/w20/gh.png" width="20" height="15" alt="" className="flag-emoji" />Ghana</li>
                            <li className="country-option" role="option" data-code="GR" data-name="Greece" data-flag="🇬🇷"><img src="https://flagcdn.com/w20/gr.png" width="20" height="15" alt="" className="flag-emoji" />Greece</li>
                            <li className="country-option" role="option" data-code="GT" data-name="Guatemala" data-flag="🇬🇹"><img src="https://flagcdn.com/w20/gt.png" width="20" height="15" alt="" className="flag-emoji" />Guatemala</li>
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
                            <li className="country-option" role="option" data-code="KW" data-name="Kuwait" data-flag="🇰🇼"><img src="https://flagcdn.com/w20/kw.png" width="20" height="15" alt="" className="flag-emoji" />Kuwait</li>
                            <li className="country-option" role="option" data-code="KG" data-name="Kyrgyzstan" data-flag="🇰🇬"><img src="https://flagcdn.com/w20/kg.png" width="20" height="15" alt="" className="flag-emoji" />Kyrgyzstan</li>
                            <li className="country-option" role="option" data-code="LA" data-name="Laos" data-flag="🇱🇦"><img src="https://flagcdn.com/w20/la.png" width="20" height="15" alt="" className="flag-emoji" />Laos</li>
                            <li className="country-option" role="option" data-code="LV" data-name="Latvia" data-flag="🇱🇻"><img src="https://flagcdn.com/w20/lv.png" width="20" height="15" alt="" className="flag-emoji" />Latvia</li>
                            <li className="country-option" role="option" data-code="LI" data-name="Liechtenstein" data-flag="🇱🇮"><img src="https://flagcdn.com/w20/li.png" width="20" height="15" alt="" className="flag-emoji" />Liechtenstein</li>
                            <li className="country-option" role="option" data-code="LT" data-name="Lithuania" data-flag="🇱🇹"><img src="https://flagcdn.com/w20/lt.png" width="20" height="15" alt="" className="flag-emoji" />Lithuania</li>
                            <li className="country-option" role="option" data-code="LU" data-name="Luxembourg" data-flag="🇱🇺"><img src="https://flagcdn.com/w20/lu.png" width="20" height="15" alt="" className="flag-emoji" />Luxembourg</li>
                            <li className="country-option" role="option" data-code="MG" data-name="Madagascar" data-flag="🇲🇬"><img src="https://flagcdn.com/w20/mg.png" width="20" height="15" alt="" className="flag-emoji" />Madagascar</li>
                            <li className="country-option" role="option" data-code="MY" data-name="Malaysia" data-flag="🇲🇾"><img src="https://flagcdn.com/w20/my.png" width="20" height="15" alt="" className="flag-emoji" />Malaysia</li>
                            <li className="country-option" role="option" data-code="MV" data-name="Maldives" data-flag="🇲🇻"><img src="https://flagcdn.com/w20/mv.png" width="20" height="15" alt="" className="flag-emoji" />Maldives</li>
                            <li className="country-option" role="option" data-code="MT" data-name="Malta" data-flag="🇲🇹"><img src="https://flagcdn.com/w20/mt.png" width="20" height="15" alt="" className="flag-emoji" />Malta</li>
                            <li className="country-option" role="option" data-code="MR" data-name="Mauritania" data-flag="🇲🇷"><img src="https://flagcdn.com/w20/mr.png" width="20" height="15" alt="" className="flag-emoji" />Mauritania</li>
                            <li className="country-option" role="option" data-code="MU" data-name="Mauritius" data-flag="🇲🇺"><img src="https://flagcdn.com/w20/mu.png" width="20" height="15" alt="" className="flag-emoji" />Mauritius</li>
                            <li className="country-option" role="option" data-code="MX" data-name="Mexico" data-flag="🇲🇽"><img src="https://flagcdn.com/w20/mx.png" width="20" height="15" alt="" className="flag-emoji" />Mexico</li>
                            <li className="country-option" role="option" data-code="MD" data-name="Moldova" data-flag="🇲🇩"><img src="https://flagcdn.com/w20/md.png" width="20" height="15" alt="" className="flag-emoji" />Moldova</li>
                            <li className="country-option" role="option" data-code="MC" data-name="Monaco" data-flag="🇲🇨"><img src="https://flagcdn.com/w20/mc.png" width="20" height="15" alt="" className="flag-emoji" />Monaco</li>
                            <li className="country-option" role="option" data-code="MN" data-name="Mongolia" data-flag="🇲🇳"><img src="https://flagcdn.com/w20/mn.png" width="20" height="15" alt="" className="flag-emoji" />Mongolia</li>
                            <li className="country-option" role="option" data-code="ME" data-name="Montenegro" data-flag="🇲🇪"><img src="https://flagcdn.com/w20/me.png" width="20" height="15" alt="" className="flag-emoji" />Montenegro</li>
                            <li className="country-option" role="option" data-code="MA" data-name="Morocco" data-flag="🇲🇦"><img src="https://flagcdn.com/w20/ma.png" width="20" height="15" alt="" className="flag-emoji" />Morocco</li>
                            <li className="country-option" role="option" data-code="MZ" data-name="Mozambique" data-flag="🇲🇿"><img src="https://flagcdn.com/w20/mz.png" width="20" height="15" alt="" className="flag-emoji" />Mozambique</li>
                            <li className="country-option" role="option" data-code="NA" data-name="Namibia" data-flag="🇳🇦"><img src="https://flagcdn.com/w20/na.png" width="20" height="15" alt="" className="flag-emoji" />Namibia</li>
                            <li className="country-option" role="option" data-code="NP" data-name="Nepal" data-flag="🇳🇵"><img src="https://flagcdn.com/w20/np.png" width="20" height="15" alt="" className="flag-emoji" />Nepal</li>
                            <li className="country-option country-option--selected" role="option" data-code="NL" data-name="Netherlands" data-flag="🇳🇱"><img src="https://flagcdn.com/w20/nl.png" width="20" height="15" alt="" className="flag-emoji" />Netherlands</li>
                            <li className="country-option" role="option" data-code="NE" data-name="Niger" data-flag="🇳🇪"><img src="https://flagcdn.com/w20/ne.png" width="20" height="15" alt="" className="flag-emoji" />Niger</li>
                            <li className="country-option" role="option" data-code="NG" data-name="Nigeria" data-flag="🇳🇬"><img src="https://flagcdn.com/w20/ng.png" width="20" height="15" alt="" className="flag-emoji" />Nigeria</li>
                            <li className="country-option" role="option" data-code="NO" data-name="Norway" data-flag="🇳🇴"><img src="https://flagcdn.com/w20/no.png" width="20" height="15" alt="" className="flag-emoji" />Norway</li>
                            <li className="country-option" role="option" data-code="OM" data-name="Oman" data-flag="🇴🇲"><img src="https://flagcdn.com/w20/om.png" width="20" height="15" alt="" className="flag-emoji" />Oman</li>
                            <li className="country-option" role="option" data-code="PK" data-name="Pakistan" data-flag="🇵🇰"><img src="https://flagcdn.com/w20/pk.png" width="20" height="15" alt="" className="flag-emoji" />Pakistan</li>
                            <li className="country-option" role="option" data-code="PA" data-name="Panama" data-flag="🇵🇦"><img src="https://flagcdn.com/w20/pa.png" width="20" height="15" alt="" className="flag-emoji" />Panama</li>
                            <li className="country-option" role="option" data-code="PY" data-name="Paraguay" data-flag="🇵🇾"><img src="https://flagcdn.com/w20/py.png" width="20" height="15" alt="" className="flag-emoji" />Paraguay</li>
                            <li className="country-option" role="option" data-code="PE" data-name="Peru" data-flag="🇵🇪"><img src="https://flagcdn.com/w20/pe.png" width="20" height="15" alt="" className="flag-emoji" />Peru</li>
                            <li className="country-option" role="option" data-code="PH" data-name="Philippines" data-flag="🇵🇭"><img src="https://flagcdn.com/w20/ph.png" width="20" height="15" alt="" className="flag-emoji" />Philippines</li>
                            <li className="country-option" role="option" data-code="PL" data-name="Poland" data-flag="🇵🇱"><img src="https://flagcdn.com/w20/pl.png" width="20" height="15" alt="" className="flag-emoji" />Poland</li>
                            <li className="country-option" role="option" data-code="PT" data-name="Portugal" data-flag="🇵🇹"><img src="https://flagcdn.com/w20/pt.png" width="20" height="15" alt="" className="flag-emoji" />Portugal</li>
                            <li className="country-option" role="option" data-code="QA" data-name="Qatar" data-flag="🇶🇦"><img src="https://flagcdn.com/w20/qa.png" width="20" height="15" alt="" className="flag-emoji" />Qatar</li>
                            <li className="country-option" role="option" data-code="RO" data-name="Romania" data-flag="🇷🇴"><img src="https://flagcdn.com/w20/ro.png" width="20" height="15" alt="" className="flag-emoji" />Romania</li>
                            <li className="country-option" role="option" data-code="RW" data-name="Rwanda" data-flag="🇷🇼"><img src="https://flagcdn.com/w20/rw.png" width="20" height="15" alt="" className="flag-emoji" />Rwanda</li>
                            <li className="country-option" role="option" data-code="SA" data-name="Saudi Arabia" data-flag="🇸🇦"><img src="https://flagcdn.com/w20/sa.png" width="20" height="15" alt="" className="flag-emoji" />Saudi Arabia</li>
                            <li className="country-option" role="option" data-code="SN" data-name="Senegal" data-flag="🇸🇳"><img src="https://flagcdn.com/w20/sn.png" width="20" height="15" alt="" className="flag-emoji" />Senegal</li>
                            <li className="country-option" role="option" data-code="RS" data-name="Serbia" data-flag="🇷🇸"><img src="https://flagcdn.com/w20/rs.png" width="20" height="15" alt="" className="flag-emoji" />Serbia</li>
                            <li className="country-option" role="option" data-code="SG" data-name="Singapore" data-flag="🇸🇬"><img src="https://flagcdn.com/w20/sg.png" width="20" height="15" alt="" className="flag-emoji" />Singapore</li>
                            <li className="country-option" role="option" data-code="SK" data-name="Slovakia" data-flag="🇸🇰"><img src="https://flagcdn.com/w20/sk.png" width="20" height="15" alt="" className="flag-emoji" />Slovakia</li>
                            <li className="country-option" role="option" data-code="SI" data-name="Slovenia" data-flag="🇸🇮"><img src="https://flagcdn.com/w20/si.png" width="20" height="15" alt="" className="flag-emoji" />Slovenia</li>
                            <li className="country-option" role="option" data-code="ZA" data-name="South Africa" data-flag="🇿🇦"><img src="https://flagcdn.com/w20/za.png" width="20" height="15" alt="" className="flag-emoji" />South Africa</li>
                            <li className="country-option" role="option" data-code="ES" data-name="Spain" data-flag="🇪🇸"><img src="https://flagcdn.com/w20/es.png" width="20" height="15" alt="" className="flag-emoji" />Spain</li>
                            <li className="country-option" role="option" data-code="LK" data-name="Sri Lanka" data-flag="🇱🇰"><img src="https://flagcdn.com/w20/lk.png" width="20" height="15" alt="" className="flag-emoji" />Sri Lanka</li>
                            <li className="country-option" role="option" data-code="SR" data-name="Suriname" data-flag="🇸🇷"><img src="https://flagcdn.com/w20/sr.png" width="20" height="15" alt="" className="flag-emoji" />Suriname</li>
                            <li className="country-option" role="option" data-code="SE" data-name="Sweden" data-flag="🇸🇪"><img src="https://flagcdn.com/w20/se.png" width="20" height="15" alt="" className="flag-emoji" />Sweden</li>
                            <li className="country-option" role="option" data-code="CH" data-name="Switzerland" data-flag="🇨🇭"><img src="https://flagcdn.com/w20/ch.png" width="20" height="15" alt="" className="flag-emoji" />Switzerland</li>
                            <li className="country-option" role="option" data-code="TW" data-name="Taiwan" data-flag="🇹🇼"><img src="https://flagcdn.com/w20/tw.png" width="20" height="15" alt="" className="flag-emoji" />Taiwan</li>
                            <li className="country-option" role="option" data-code="TZ" data-name="Tanzania" data-flag="🇹🇿"><img src="https://flagcdn.com/w20/tz.png" width="20" height="15" alt="" className="flag-emoji" />Tanzania</li>
                            <li className="country-option" role="option" data-code="TH" data-name="Thailand" data-flag="🇹🇭"><img src="https://flagcdn.com/w20/th.png" width="20" height="15" alt="" className="flag-emoji" />Thailand</li>
                            <li className="country-option" role="option" data-code="TG" data-name="Togo" data-flag="🇹🇬"><img src="https://flagcdn.com/w20/tg.png" width="20" height="15" alt="" className="flag-emoji" />Togo</li>
                            <li className="country-option" role="option" data-code="TT" data-name="Trinidad and Tobago" data-flag="🇹🇹"><img src="https://flagcdn.com/w20/tt.png" width="20" height="15" alt="" className="flag-emoji" />Trinidad and Tobago</li>
                            <li className="country-option" role="option" data-code="TR" data-name="Turkey" data-flag="🇹🇷"><img src="https://flagcdn.com/w20/tr.png" width="20" height="15" alt="" className="flag-emoji" />Turkey</li>
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
                  </li>
                  <li className="filters-item is-open">
                    <button type="button" className="filters-row">Instruments<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content">
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>General Brokers</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Forex</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>CFDs</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Stocks</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Crypto</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>Options</label>
                    </div>
                  </li>
                  <li className="filters-item is-open">
                    <button type="button" className="filters-row">Platforms<img src="/assets/images/icon-chevron-down.svg" alt="" className="icon-18 filters-chevron" /></button>
                    <div className="filters-content">
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>MT4</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>MT5</label>
                      <label className="filters-checkbox"><input type="checkbox" /><span className="filters-checkbox__box"></span>cTrader</label>
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
                <div className="mini-dropdown" data-mini-dropdown>
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

        {/* BLOGS */}
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
