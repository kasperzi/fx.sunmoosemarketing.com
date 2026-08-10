// fx_country_manual — set only when user explicitly picks a country
// IP-detected country is never cached, always fresh per session
const MANUAL_KEY   = 'fx_country_manual'
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
    const res = await fetch('/api/country', { signal: AbortSignal.timeout(4000) })
    if (!res.ok) return null
    const data = await res.json()
    return data.country?.toUpperCase() ?? null
  } catch {
    return null
  }
}

/**
 * Resolve country:
 *  1. Manual user preference (localStorage) — user picked explicitly
 *  2. Server-side IP detection (always fresh, NOT cached)
 *  3. Fallback 'NL'
 */
export async function resolveCountry(): Promise<string> {
  const manual = getManualCountry()
  if (manual) return manual

  const detected = await detectCountry()
  return detected ?? 'NL'
}
