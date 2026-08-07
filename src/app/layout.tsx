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
        <link rel="stylesheet" href="/assets/css/styles.css?v=193" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var D=1440;function s(){var w=window.innerWidth;document.body.style.zoom=w>D?w/D:1}document.addEventListener('DOMContentLoaded',s);window.addEventListener('resize',s)})();`
        }} />
      </head>
      <body>
        {children}
        <Script src="/assets/js/script.js?v=193" strategy="afterInteractive" />
      </body>
    </html>
  )
}
