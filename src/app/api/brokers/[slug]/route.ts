import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

const RATE_LIMIT = 60
const RATE_WINDOW_MS = 60_000

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const secFetchMode = req.headers.get('sec-fetch-mode')
  const secFetchSite = req.headers.get('sec-fetch-site')

  if (secFetchMode === 'navigate') {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }

  if (secFetchSite && secFetchSite !== 'same-origin' && secFetchSite !== 'none') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

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

  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY

  if (!BMS_API_URL || !BMS_API_KEY) {
    return NextResponse.json({ error: 'API not configured' }, { status: 500 })
  }

  const { slug } = await params
  const { searchParams } = new URL(req.url)
  const qs = searchParams.toString()
  const url = `${BMS_API_URL}/api/v1/brokers/${slug}${qs ? `?${qs}` : ''}`

  try {
    const res = await fetch(url, {
      headers: { 'X-Api-Key': BMS_API_KEY },
      cache: 'no-store',
    })

    if (res.status === 404) {
      return NextResponse.json({ error: 'Broker not found' }, { status: 404 })
    }

    if (!res.ok) {
      return NextResponse.json({ error: `BMS error: ${res.status}` }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data, {
      headers: {
        'X-RateLimit-Limit': String(RATE_LIMIT),
        'X-RateLimit-Remaining': String(rl.remaining),
        'X-RateLimit-Reset': String(Math.ceil(rl.resetAt / 1000)),
        'Cache-Control': 'public, max-age=60',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch broker' }, { status: 500 })
  }
}
