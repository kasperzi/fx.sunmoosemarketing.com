'use client'

import { useState } from 'react'

interface CmpBroker { broker_id: number; name: string }
interface CmpColumn { id: string; label: string }

interface Props {
  brokers: CmpBroker[]
  columns: CmpColumn[]
  cells: Record<string, string>
}

export default function ComparisonTable({ brokers, columns, cells }: Props) {
  // selectedCols: which column id is shown in each slot
  const [selectedCols, setSelectedCols] = useState<string[]>(columns.map((c) => c.id))
  const [openSlot, setOpenSlot] = useState<number | null>(null)

  if (brokers.length === 0 || columns.length === 0) return null

  const renderCell = (val: string) => {
    if (val === 'yes') return <img src="/assets/images/icon-check-mark.svg" alt="Yes" className="icon-20" />
    if (val === 'no')  return <img src="/assets/images/icon-xcircle.svg"    alt="No"  className="icon-20" />
    return <>{val || '—'}</>
  }

  const selectCol = (slotIdx: number, colId: string) => {
    setSelectedCols((prev) => prev.map((c, i) => (i === slotIdx ? colId : c)))
    setOpenSlot(null)
  }

  return (
    <div className="bb-mini-table">
      {/* Header row */}
      <div className="bb-mini-table__row">
        <div className="bb-mini-table__cell bb-mini-table__cell--head">Broker</div>
        {selectedCols.map((colId, slotIdx) => {
          const activeCol = columns.find((c) => c.id === colId) ?? columns[0]
          const isOpen = openSlot === slotIdx
          return (
            <div key={slotIdx} className="bb-mini-table__cell bb-mini-table__cell--dropdown">
              <div className={`mini-dropdown${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="bb-mini-table__dropdown mini-dropdown__toggle"
                  aria-expanded={isOpen}
                  onClick={(e) => { e.stopPropagation(); setOpenSlot(isOpen ? null : slotIdx) }}
                >
                  <span className="mini-dropdown__label">{activeCol.label}</span>
                  <img src="/assets/images/icon-caret-down.svg" alt="" className="mini-dropdown__caret" />
                </button>
                {isOpen && (
                  <ul className="mini-dropdown__panel">
                    {columns.map((col) => (
                      <li key={col.id}>
                        <button
                          type="button"
                          className={`mini-dropdown__option${col.id === colId ? ' is-selected' : ''}`}
                          onClick={() => selectCol(slotIdx, col.id)}
                        >
                          {col.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Data rows */}
      {brokers.map((b) => (
        <div key={b.broker_id} className="bb-mini-table__row">
          <div className="bb-mini-table__cell bb-mini-table__cell--head">{b.name}</div>
          {selectedCols.map((colId, slotIdx) => (
            <div key={slotIdx} className="bb-mini-table__cell">
              {renderCell(cells[`${b.broker_id}_${colId}`] ?? '')}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
