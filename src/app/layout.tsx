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
        <link rel="stylesheet" href="/assets/css/styles.css?v=212" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){window.__fxCountry=fetch('/api/country').then(function(r){return r.json();}).then(function(d){return d.country?d.country.toUpperCase():null;}).catch(function(){return null;});document.addEventListener('DOMContentLoaded',function(){try{var c=localStorage.getItem('fx_country_pref')||sessionStorage.getItem('fx_country');if(!c)return;c=c.toUpperCase();['panelCountrySelect','countrySelect','filterCountrySelect'].forEach(function(id){var r=document.getElementById(id);if(!r)return;var opt=Array.from(r.querySelectorAll('[data-code]')).find(function(o){return o.dataset.code===c;});if(!opt)return;r.querySelectorAll('.country-option--selected').forEach(function(o){o.classList.remove('country-option--selected');});opt.classList.add('country-option--selected');var v=r.querySelector('.select-value');if(v)v.textContent=opt.dataset.name;var f=r.querySelector('.flag');if(f){var img=document.createElement('img');img.src='https://flagcdn.com/w160/'+c.toLowerCase()+'.png';img.width=20;img.height=15;img.alt='';img.className='flag';if(f.id)img.id=f.id;f.replaceWith(img);}});}catch(e){}});})();` }} />
      </head>
      <body>
        {children}
        <Script src="/assets/js/script.js?v=210" strategy="afterInteractive" />
      </body>
    </html>
  )
}
