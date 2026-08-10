// fx_country_pref — stored in localStorage AND cookie (cookie for server-side reads)
// IP-detected country: server reads cf-ipcountry header on every request (always fresh)
const MANUAL_KEY = 'fx_country_pref'
const STORAGE_LANG_KEY = 'fx_language'

/** Return manual country preference (user picked explicitly), or null */
export function getManualCountry(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(MANUAL_KEY)
}

/** Save a manually-chosen country — localStorage + cookie so server uses it next request */
export function saveCountry(code: string): void {
  if (typeof window === 'undefined') return
  const upper = code.toUpperCase()
  localStorage.setItem(MANUAL_KEY, upper)
  // Cookie allows server to render the correct country on the next request
  document.cookie = `${MANUAL_KEY}=${upper};max-age=31536000;path=/;SameSite=Lax`
}

export function getSavedLanguage(): string {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem(STORAGE_LANG_KEY) ?? 'en'
}

export function saveLanguage(lang: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_LANG_KEY, lang)
}

/**
 * Get the country the server already resolved (embedded in <html data-country>).
 * This is always correct — server reads cf-ipcountry on every request.
 */
export function getServerCountry(): string | null {
  if (typeof document === 'undefined') return null
  const c = document.documentElement.dataset.country
  return c && /^[A-Z]{2}$/.test(c) ? c : null
}

/**
 * Resolve country (client-side):
 *  1. Manual preference (localStorage) — user picked explicitly
 *  2. Server-rendered country (html data-country) — always fresh from Cloudflare IP
 *  3. Fallback 'NL'
 */
export async function resolveCountry(): Promise<string> {
  const manual = getManualCountry()
  if (manual) return manual

  const serverCountry = getServerCountry()
  if (serverCountry) return serverCountry

  return 'NL'
}

/**
 * Detect country via API (used as fallback when server country is unavailable).
 */
export async function detectCountry(): Promise<string | null> {
  try {
    const res = await fetch('/api/country', { cache: 'no-store', signal: AbortSignal.timeout(4000) })
    if (!res.ok) return null
    const data = await res.json()
    return data.country?.toUpperCase() ?? null
  } catch {
    return null
  }
}
