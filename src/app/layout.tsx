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
        <link rel="stylesheet" href="/assets/css/styles.css?v=197" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var D=1440;function s(){var w=window.innerWidth;document.body.style.zoom=w>D?w/D:1}document.addEventListener('DOMContentLoaded',s);window.addEventListener('resize',s)})();`
        }} />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var c=localStorage.getItem('fx_country');if(!c||c==='NL')return;c=c.toUpperCase();['panelCountrySelect','countrySelect'].forEach(function(id){var r=document.getElementById(id);if(!r)return;var opt=Array.from(r.querySelectorAll('[data-code]')).find(function(o){return o.dataset.code===c;});if(!opt)return;r.querySelectorAll('.country-option--selected').forEach(function(o){o.classList.remove('country-option--selected');});opt.classList.add('country-option--selected');var v=r.querySelector('.select-value');if(v)v.textContent=opt.dataset.name;var f=r.querySelector('.flag');if(f){var img=document.createElement('img');img.src='https://flagcdn.com/w20/'+c.toLowerCase()+'.png';img.width=20;img.height=15;img.alt='';img.className='flag';if(f.id)img.id=f.id;f.replaceWith(img);}});} catch(e){}})();` }} />
        <Script src="/assets/js/script.js?v=200" strategy="afterInteractive" />
      </body>
    </html>
  )
}
