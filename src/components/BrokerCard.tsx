import Image from 'next/image'
import Link from 'next/link'
import { Broker } from '@/lib/api'

interface Props {
  broker: Broker
}

export default function BrokerCard({ broker }: Props) {
  const rating = broker.total_rating ? broker.total_rating.toFixed(1) : null
  const minDeposit = broker.min_deposit != null ? `$${broker.min_deposit}` : '—'
  const minSpread = broker.min_spread != null ? `${broker.min_spread} pips` : '—'

  return (
    <article className="broker-card bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
      {/* Head */}
      <div className="flex items-center gap-3">
        {broker.logo_url ? (
          <Image
            src={broker.logo_url}
            alt={broker.name}
            width={56}
            height={56}
            className="broker-logo rounded-lg object-contain"
          />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-400">
            {broker.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="broker-name font-semibold text-gray-900">{broker.name}</p>
          {rating && (
            <span className="rating-badge text-sm text-yellow-500 font-medium">
              ★ {rating}/5
            </span>
          )}
        </div>
      </div>

      {/* Facts */}
      <ul className="broker-facts text-sm text-gray-600 flex flex-col gap-2">
        <li className="flex justify-between">
          <span>Min. spread</span>
          <strong className="text-gray-900">{minSpread}</strong>
        </li>
        <li className="flex justify-between">
          <span>Min. deposit</span>
          <strong className="text-gray-900">{minDeposit}</strong>
        </li>
        {broker.platforms.length > 0 && (
          <li className="flex justify-between items-center">
            <span>Platform</span>
            <div className="flex gap-1 flex-wrap justify-end">
              {broker.platforms.map((p) => (
                <span key={p} className="tag bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </li>
        )}
      </ul>

      {/* CTAs */}
      <div className="broker-card__ctas flex flex-col gap-2 mt-auto">
        {broker.affiliate_url && (
          <a
            href={broker.affiliate_url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn btn--primary block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors"
          >
            Visit Broker
          </a>
        )}
        <Link
          href={`/brokers/${broker.slug}`}
          className="text-center text-sm text-blue-600 hover:underline py-1"
        >
          Read Review →
        </Link>
      </div>
    </article>
  )
}
