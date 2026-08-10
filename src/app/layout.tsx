import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'FX Look Up — Find the Best Forex Broker for Your Trading Goals',
  description: 'Compare trusted forex brokers by fees, platforms, regulation, and country availability. Find the best broker for your trading goals with FX Look Up.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/assets/images/logo-fxlookup.png" />
        <link rel="stylesheet" href="/assets/css/styles.css?v=216" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var pref=null;try{pref=localStorage.getItem('fx_country_pref');}catch(e){}var ok=/^[A-Z]{2}$/;window.__fxCountry=(pref&&ok.test(pref.trim()))?Promise.resolve(pref.trim().toUpperCase()):fetch('/api/country',{cache:'no-store'}).then(function(r){return r.json();}).then(function(d){return d.country?d.country.toUpperCase():null;}).catch(function(){return null;});function applyNow(code){['panelCountrySelect','countrySelect','filterCountrySelect'].forEach(function(id){var r=document.getElementById(id);if(!r)return;var opt=Array.from(r.querySelectorAll('[data-code]')).find(function(o){return o.dataset.code===code;});if(!opt)return;r.querySelectorAll('.country-option--selected').forEach(function(o){o.classList.remove('country-option--selected');});opt.classList.add('country-option--selected');var v=r.querySelector('.select-value');if(v)v.textContent=opt.dataset.name||opt.textContent.trim();var f=r.querySelector('.flag');if(f){var img=document.createElement('img');img.src='https://flagcdn.com/w160/'+code.toLowerCase()+'.png';img.width=20;img.height=15;img.alt='';img.className='flag';if(f.id)img.id=f.id;f.replaceWith(img);}});}if(pref&&ok.test(pref.trim())){document.addEventListener('DOMContentLoaded',function(){applyNow(pref.trim().toUpperCase());});}else{window.__fxCountry.then(function(code){if(code&&ok.test(code)){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){applyNow(code);});}else{applyNow(code);}}});}})();` }} />
      </head>
      <body>
        {children}
        <Script src="/assets/js/script.js?v=210" strategy="afterInteractive" />
      </body>
    </html>
  )
}
