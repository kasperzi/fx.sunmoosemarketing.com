'use client'

import { useState } from 'react'

interface CollectionItem {
  broker_id:          number
  min_deposit:        number | null
  min_withdrawal_fee: number | null
  max_leverage:       string | null
  min_lot_size:       number | null
  min_spread:         number | null
  has_demo_accounts:  boolean
}

interface CmpBroker { broker_id: number; name: string }

interface Props {
  brokers: CmpBroker[]
  items:   CollectionItem[]
}

const CMP_COLS = [
  {
    key:    'min_deposit',
    label:  'Min Deposit',
    render: (v: CollectionItem) =>
      v.min_deposit != null ? <>${v.min_deposit}</> : <>—</>,
  },
  {
    key:    'min_withdrawal_fee',
    label:  'Withdrawal Fee',
    render: (v: CollectionItem) =>
      v.min_withdrawal_fee != null
        ? v.min_withdrawal_fee === 0
          ? <>Free</>
          : <>${v.min_withdrawal_fee}</>
        : <>—</>,
  },
  {
    key:    'max_leverage',
    label:  'Max Leverage',
    render: (v: CollectionItem) =>
      v.max_leverage != null ? <>1:{v.max_leverage}</> : <>—</>,
  },
  {
    key:    'min_lot_size',
    label:  'Min Lot Size',
    render: (v: CollectionItem) =>
      v.min_lot_size != null ? <>{String(v.min_lot_size)}</> : <>—</>,
  },
  {
    key:    'min_spread',
    label:  'Min Spread',
    render: (v: CollectionItem) =>
      v.min_spread != null ? <>{v.min_spread} pips</> : <>—</>,
  },
  {
    key:    'has_demo_accounts',
    label:  'Demo Account',
    render: (v: CollectionItem) =>
      v.has_demo_accounts
        ? <img src="/assets/images/icon-check-mark.svg" alt="Yes" className="icon-20" />
        : <img src="/assets/images/icon-xcircle.svg"    alt="No"  className="icon-20" />,
  },
] as const

export default function ComparisonTable({ brokers, items }: Props) {
  const [activeKey, setActiveKey] = useState<string>(CMP_COLS[0].key)
  const [isOpen,    setIsOpen]    = useState(false)

  if (brokers.length === 0) return null

  const activeCol = CMP_COLS.find((c) => c.key === activeKey) ?? CMP_COLS[0]

  return (
    <div className="bb-mini-table">
      {/* Header row */}
      <div className="bb-mini-table__row">
        <div className="bb-mini-table__cell bb-mini-table__cell--head">Broker</div>
        <div className="bb-mini-table__cell bb-mini-table__cell--dropdown">
          <div className={`mini-dropdown${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="bb-mini-table__dropdown mini-dropdown__toggle"
              aria-expanded={isOpen}
              onClick={(e) => { e.stopPropagation(); setIsOpen((v) => !v) }}
            >
              <span className="mini-dropdown__label">{activeCol.label}</span>
              <img src="/assets/images/icon-caret-down.svg" alt="" className="mini-dropdown__caret" />
            </button>
            {isOpen && (
              <ul className="mini-dropdown__panel">
                {CMP_COLS.map((col) => (
                  <li key={col.key}>
                    <button
                      type="button"
                      className={`mini-dropdown__option${col.key === activeKey ? ' is-selected' : ''}`}
                      onClick={() => { setActiveKey(col.key); setIsOpen(false) }}
                    >
                      {col.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Data rows */}
      {brokers.map((b) => {
        const live = items.find((it) => it.broker_id === b.broker_id)
        return (
          <div key={b.broker_id} className="bb-mini-table__row">
            <div className="bb-mini-table__cell bb-mini-table__cell--head">{b.name}</div>
            <div className="bb-mini-table__cell">
              {live ? activeCol.render(live) : <>—</>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
