import type { Metadata } from 'next'
import Script from 'next/script'
import { cookies } from 'next/headers'
import { detectServerCountry } from '@/lib/detect-country.server'

export const metadata: Metadata = {
  title: 'FX Look Up — Find the Best Forex Broker for Your Trading Goals',
  description: 'Compare trusted forex brokers by fees, platforms, regulation, and country availability. Find the best broker for your trading goals with FX Look Up.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()

  // Manual user preference (cookie) takes priority over IP detection
  const manualCountry = cookieStore.get('fx_country_pref')?.value?.toUpperCase()
  const detectedCountry = /^[A-Z]{2}$/.test(manualCountry ?? '')
    ? manualCountry!
    : await detectServerCountry()
  const country = detectedCountry ?? 'NL'

  return (
    <html lang="en" data-country={country}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/assets/images/logo-fxlookup.png" />
        <link rel="stylesheet" href="/assets/css/styles.css?v=216" />
        {/* Apply server-resolved country to dropdowns synchronously — no flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var code=document.documentElement.dataset.country;if(!code||code.length!==2)return;function apply(){['panelCountrySelect','countrySelect','filterCountrySelect'].forEach(function(id){var r=document.getElementById(id);if(!r)return;var opt=Array.from(r.querySelectorAll('[data-code]')).find(function(o){return o.dataset.code===code;});if(!opt)return;r.querySelectorAll('.country-option--selected').forEach(function(o){o.classList.remove('country-option--selected');});opt.classList.add('country-option--selected');var v=r.querySelector('.select-value');if(v)v.textContent=opt.dataset.name||opt.textContent.trim();var f=r.querySelector('.flag');if(f){var img=document.createElement('img');img.src='https://flagcdn.com/w160/'+code.toLowerCase()+'.png';img.width=20;img.height=15;img.alt='';img.className='flag';if(f.id)img.id=f.id;f.replaceWith(img);}});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',apply);}else{apply();}})();` }} />
      </head>
      <body>
        {children}
        <Script src="/assets/js/script.js?v=211" strategy="afterInteractive" />
      </body>
    </html>
  )
}
