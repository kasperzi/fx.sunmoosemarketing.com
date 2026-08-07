import { Broker } from '@/lib/api'

export default function BrokerCard({ broker }: { broker: Broker }) {
  const logoUrl = broker.logos?.square_light || broker.logos?.square_dark || null
  const brokerUrl = broker.affiliate_link || '#'
  const reviewUrl = `/broker/${broker.slug}`
  const minDeposit = broker.min_deposit != null ? `$${broker.min_deposit}` : '—'
  const minSpread = broker.min_spread != null ? `${broker.min_spread} pips` : '—'
  const rating = broker.total_rating != null ? Math.round(broker.total_rating * 10) / 10 : null

  return (
    <article className="broker-card">
      <div className="broker-card__head">
        {logoUrl
          ? <img src={logoUrl} alt={broker.name} className="broker-logo" />
          : <span className="broker-logo-placeholder">{broker.name.charAt(0)}</span>
        }
        <div>
          <p className="broker-name">{broker.name}</p>
          {rating && (
            <span className="rating-badge">
              <img src="/assets/images/icon-star.svg" alt="" />{rating}/5
            </span>
          )}
        </div>
      </div>
      <div className="availability-badge">
        <img src="/assets/images/icon-check-circle.svg" alt="" />Available in your country
      </div>
      <ul className="broker-facts">
        <li><img src="/assets/images/icon-swap.svg" alt="" /><span>Min. spread</span><strong>{minSpread}</strong></li>
        <li><img src="/assets/images/icon-card.svg" alt="" /><span>Min. deposit</span><strong>{minDeposit}</strong></li>
        {broker.platforms?.length > 0 && (
          <li className="broker-facts__platform">
            <span><img src="/assets/images/icon-pc-check.svg" alt="" />Platform</span>
            <div className="tag-row">
              {broker.platforms.map((p) => <span key={p} className="tag">{p}</span>)}
            </div>
          </li>
        )}
      </ul>
      <div className="broker-card__ctas">
        <a href={brokerUrl} className="btn btn--primary btn--block" target="_blank" rel="noopener noreferrer">Visit Broker</a>
        <a href={reviewUrl} className="btn btn--text btn--text--px btn--center">Read Review <img src="/assets/images/icon-arrow-right.svg" alt="" /></a>
      </div>
    </article>
  )
}
