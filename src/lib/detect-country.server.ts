import { headers } from 'next/headers'

/**
 * Server-side country detection — same logic as /api/country route.
 * Returns 2-letter country code or null.
 */
export async function detectServerCountry(): Promise<string | null> {
  const h = await headers()

  // 1. Cloudflare sets this on every proxied request
  const cf = h.get('cf-ipcountry')
  if (cf && cf.length === 2 && cf !== 'XX') return cf.toUpperCase()

  // 2. Extract client IP from forwarded headers
  const forwarded = h.get('x-forwarded-for')
  const ip = forwarded
    ? forwarded.split(',')[0].trim()
    : h.get('x-real-ip') ?? ''

  if (!ip || ip === '127.0.0.1' || ip === '::1'
      || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return null
  }

  // 3. ipapi.co lookup (server-side, no CORS, no rate limit per user)
  try {
    const res = await fetch(`https://ipapi.co/${ip}/country/`, {
      headers: { 'User-Agent': 'fxlookup/1.0' },
      cache: 'no-store',
    })
    const text = (await res.text()).trim().toUpperCase()
    if (text.length === 2 && /^[A-Z]{2}$/.test(text)) return text
  } catch (_) {}

  return null
}
