/**
 * Simple in-memory IP rate limiter.
 * Works per-process (single PM2 instance). For multi-instance deployments,
 * swap the Map for Redis — the interface stays the same.
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

// Clean up expired entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (entry.resetAt < now) store.delete(key)
  }
}, 5 * 60 * 1000)

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number
}

/**
 * @param ip         Client IP address
 * @param limit      Max requests per window (default: 60)
 * @param windowMs   Window size in ms (default: 60 000 = 1 min)
 */
export function checkRateLimit(
  ip: string,
  limit = 60,
  windowMs = 60_000,
): RateLimitResult {
  const now = Date.now()
  let entry = store.get(ip)

  if (!entry || entry.resetAt < now) {
    entry = { count: 1, resetAt: now + windowMs }
    store.set(ip, entry)
    return { allowed: true, remaining: limit - 1, resetAt: entry.resetAt }
  }

  entry.count++
  const remaining = Math.max(0, limit - entry.count)
  return { allowed: entry.count <= limit, remaining, resetAt: entry.resetAt }
}

export function getClientIp(req: Request): string {
  const cf = (req.headers as Headers).get('cf-connecting-ip')
  if (cf) return cf
  const forwarded = (req.headers as Headers).get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return '127.0.0.1'
}
