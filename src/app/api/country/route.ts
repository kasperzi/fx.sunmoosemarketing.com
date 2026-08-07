import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // 1. Cloudflare sets this header instantly — no external call needed
  const cfCountry = req.headers.get('cf-ipcountry')
  if (cfCountry && cfCountry.length === 2 && cfCountry !== 'XX') {
    return NextResponse.json({ country: cfCountry.toUpperCase() })
  }

  // 2. Get client IP from forwarded headers
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded
    ? forwarded.split(',')[0].trim()
    : req.headers.get('x-real-ip') ?? ''

  // Skip loopback / private IPs — signal client to do its own detection
  if (!ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return NextResponse.json({ country: null })
  }

  // 3. Server-side ipapi.co lookup (server IP, no CORS, no rate limit per user)
  try {
    const res = await fetch(`https://ipapi.co/${ip}/country/`, {
      headers: { 'User-Agent': 'fxlookup/1.0' },
    })
    const text = (await res.text()).trim().toUpperCase()
    if (text.length === 2 && /^[A-Z]{2}$/.test(text)) {
      return NextResponse.json(
        { country: text },
        { headers: { 'Cache-Control': 'private, max-age=3600' } }
      )
    }
  } catch (_) {}

  // Signal client to detect on its own
  return NextResponse.json({ country: null })
}
