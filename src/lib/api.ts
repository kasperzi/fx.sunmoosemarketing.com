export interface BrokerLogos {
  square_light: string | null
  square_dark: string | null
  rectangle_light: string | null
  rectangle_dark: string | null
}

export interface BrokerPromotion {
  bonus_type: string | null
  bonus_amount: string | null
  description: string | null
}

export interface Broker {
  id: number
  name: string
  slug: string
  logos: BrokerLogos
  affiliate_link: string | null
  website_url?: string | null
  min_deposit: number | null
  min_spread: number | null
  total_rating: number | null
  users_count: number | null
  platforms: string[]
  promotion: BrokerPromotion | null
  brand_color?: string | null
}

export interface BrokerListResponse {
  data: Broker[]
  meta?: {
    total: number
    per_page: number
    current_page: number
    last_page: number
  }
}

export async function getBrokers(): Promise<Broker[]> {
  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY
  const res = await fetch(`${BMS_API_URL}/api/v1/brokers`, {
    headers: { 'X-Api-Key': BMS_API_KEY! },
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error(`BMS API error: ${res.status}`)

  const json: BrokerListResponse = await res.json()
  return json.data ?? json
}

export async function getBroker(slug: string): Promise<Broker | null> {
  const BMS_API_URL = process.env.BMS_API_URL
  const BMS_API_KEY = process.env.BMS_API_KEY
  const res = await fetch(`${BMS_API_URL}/api/v1/brokers/${slug}`, {
    headers: { 'X-Api-Key': BMS_API_KEY! },
    next: { revalidate: 3600 },
  })

  if (res.status === 404) return null
  if (!res.ok) throw new Error(`BMS API error: ${res.status}`)

  const json = await res.json()
  return json.data ?? json
}
