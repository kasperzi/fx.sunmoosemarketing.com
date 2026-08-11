import { NextRequest, NextResponse } from 'next/server'

const BMS_ORIGIN = process.env.BMS_API_URL ?? 'https://bms.sunmoosemarketing.com'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params
  const filePath = path.join('/')

  // Only allow paths under /storage/uploads/
  if (!filePath.startsWith('storage/uploads/')) {
    return new NextResponse('Not found', { status: 404 })
  }

  const upstream = `${BMS_ORIGIN}/${filePath}`

  try {
    const res = await fetch(upstream, { cache: 'no-store' })

    if (!res.ok) {
      return new NextResponse('Not found', { status: 404 })
    }

    const body = await res.arrayBuffer()
    const contentType = res.headers.get('Content-Type') ?? 'application/octet-stream'

    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return new NextResponse('Failed to fetch media', { status: 502 })
  }
}
