import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY

  if (!BMS_API_URL || !BMS_API_KEY) {
    return NextResponse.json({ error: 'API not configured' }, { status: 500 })
  }

  // Forward query params (country, page, per_page, etc.)
  const { searchParams } = new URL(req.url)
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
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch brokers' }, { status: 500 })
  }
}
