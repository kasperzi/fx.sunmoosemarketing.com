// fx_country_pref — set only when user explicitly picks a country (matches script.js)
// IP-detected country is never cached, always fresh per request
const MANUAL_KEY   = 'fx_country_pref'
const STORAGE_LANG_KEY = 'fx_language'

/** Return manual country preference (user picked explicitly), or null */
export function getManualCountry(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(MANUAL_KEY)
}

/** Save a manually-chosen country (persists across sessions) */
export function saveCountry(code: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(MANUAL_KEY, code.toUpperCase())
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
 * Detect country from server-side IP (via /api/country — uses Cloudflare headers).
 * Always fresh — VPN changes are picked up automatically.
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

/**
 * Resolve country:
 *  1. Manual user preference (localStorage fx_country_pref) — user picked explicitly
 *  2. window.__fxCountry — pre-fetched promise started in <head> (always fresh, no cache)
 *  3. detectCountry() fallback
 *  4. 'NL'
 */
export async function resolveCountry(): Promise<string> {
  const manual = getManualCountry()
  if (manual) return manual

  // Use the shared promise started in <head> if available — avoids a second fetch
  if (typeof window !== 'undefined') {
    const win = window as typeof window & { __fxCountry?: Promise<string | null> }
    if (win.__fxCountry) {
      const cached = await win.__fxCountry
      if (cached) return cached
    }
  }

  const detected = await detectCountry()
  return detected ?? 'NL'
}
