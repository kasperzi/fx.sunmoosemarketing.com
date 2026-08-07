import { getBrokers } from '@/lib/api'
import BrokerCard from '@/components/BrokerCard'

export default async function HomePage() {
  let brokers = []
  let error = ''
  try {
    brokers = await getBrokers()
  } catch (e: any) {
    error = e?.message ?? String(e)
    console.error(e)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Top Forex Brokers</h1>
      <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {error && (
          <p className="col-span-3 text-center text-red-500 font-mono text-sm">Error: {error}</p>
        )}
        {!error && brokers.length === 0 && (
          <p className="col-span-3 text-center text-gray-500">No brokers found.</p>
        )}
        {brokers.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}
      </div>
    </main>
  )
}
