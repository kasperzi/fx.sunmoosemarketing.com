'use client'

import { useState, useEffect } from 'react'
import { countryName, flagUrl } from '@/lib/countries'

interface BrokerCountries { available: string[]; restricted: string[] }

interface Props {
  initialCountry: string
  brokerCountries: BrokerCountries | null
  className?: string
  imgStyle?: React.CSSProperties
}

function getStatus(countries: BrokerCountries | null, code: string): 'available' | 'restricted' | 'unknown' {
  if (!countries) return 'unknown'
  if ((countries.restricted ?? []).map(c => c.toUpperCase()).includes(code.toUpperCase())) return 'restricted'
  return 'available'
}

export default function BrokerAvailabilityBadge({ initialCountry, brokerCountries, className, imgStyle }: Props) {
  const [country, setCountry] = useState(initialCountry)

  useEffect(() => {
    function onChange(e: Event) {
      setCountry((e as CustomEvent<string>).detail)
    }
    window.addEventListener('fx:countryChange', onChange)
    return () => window.removeEventListener('fx:countryChange', onChange)
  }, [])

  const status = getStatus(brokerCountries, country)
  const label = status === 'restricted'
    ? `Not available in ${countryName(country)}`
    : `Available in ${countryName(country)}`

  return (
    <>
      <img src={flagUrl(country)} alt="" style={imgStyle ?? { width: 20, height: 15, objectFit: 'cover' }} />
      <span className={className}>{label}</span>
    </>
  )
}
