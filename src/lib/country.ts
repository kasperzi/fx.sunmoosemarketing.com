const STORAGE_KEY = 'fx_country'
const STORAGE_LANG_KEY = 'fx_language'

export function getSavedCountry(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEY)
}

export function saveCountry(code: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, code.toUpperCase())
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
 * Detect user country via ipapi.co (free tier: 30k req/month).
 * Falls back to null on error.
 */
export async function detectCountry(): Promise<string | null> {
  try {
    const res = await fetch('https://ipapi.co/country/', { signal: AbortSignal.timeout(3000) })
    if (!res.ok) return null
    const code = (await res.text()).trim()
    return code.length === 2 ? code.toUpperCase() : null
  } catch {
    return null
  }
}

/**
 * Returns country code — from localStorage if saved, otherwise auto-detects and saves.
 */
export async function resolveCountry(): Promise<string> {
  const saved = getSavedCountry()
  if (saved) return saved

  const detected = await detectCountry()
  const country = detected ?? 'NL' // fallback default
  saveCountry(country)
  return country
}
