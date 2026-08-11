import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

// 60 requests per minute per IP
const RATE_LIMIT = 60
const RATE_WINDOW_MS = 60_000

export async function GET(req: NextRequest) {
  // ── 1. Block direct browser navigation (address bar, new tab, etc.) ──────
  // Browsers set Sec-Fetch-Mode: navigate for direct URL access.
  // JavaScript fetch() always sends cors/no-cors — this header cannot be
  // spoofed by JS, so it's a reliable gate against casual browser scraping.
  const secFetchMode = req.headers.get('sec-fetch-mode')
  const secFetchSite = req.headers.get('sec-fetch-site')

  if (secFetchMode === 'navigate') {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }

  // If the browser sends fetch headers, only allow same-origin requests
  if (secFetchSite && secFetchSite !== 'same-origin' && secFetchSite !== 'none') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // ── 2. IP rate limiting ───────────────────────────────────────────────────
  const ip = getClientIp(req)
  const rl = checkRateLimit(ip, RATE_LIMIT, RATE_WINDOW_MS)

  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Too Many Requests' },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.ceil(rl.resetAt / 1000)),
          'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  // ── 3. Proxy to BMS ──────────────────────────────────────────────────────
  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY

  if (!BMS_API_URL || !BMS_API_KEY) {
    return NextResponse.json({ error: 'API not configured' }, { status: 500 })
  }

  const { searchParams } = new URL(req.url)
  const BMS_WEBSITE_ID = process.env.BMS_WEBSITE_ID
  if (BMS_WEBSITE_ID && !searchParams.has('website_id')) searchParams.set('website_id', BMS_WEBSITE_ID)
  const params = searchParams.toString()
  const url = `${BMS_API_URL}/api/v1/brokers${params ? `?${params}` : ''}`

  try {
    const res = await fetch(url, {
      headers: { 'X-Api-Key': BMS_API_KEY },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: `BMS error: ${res.status}` }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data, {
      headers: {
        'X-RateLimit-Limit': String(RATE_LIMIT),
        'X-RateLimit-Remaining': String(rl.remaining),
        'X-RateLimit-Reset': String(Math.ceil(rl.resetAt / 1000)),
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch brokers' }, { status: 500 })
  }
}
