import React from 'react'

import { SortConfigType } from '../../common/types/sortConfig'
import HeaderButton from './headerButton'

interface TableHeaderProps {
  handleSortChange: Function
  sortConfig: SortConfigType | null
}

const TableHeader: React.FC<TableHeaderProps> = ({
  handleSortChange,
  sortConfig,
}: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <HeaderButton
          {...{
            title: 'Asset Class',
            handleSortChange,
            sortKey: 'assetClass',
            sortConfig,
          }}
        />
        <HeaderButton
          {...{
            title: 'Price',
            handleSortChange,
            sortKey: 'price',
            sortConfig,
          }}
        />
        <HeaderButton
          {...{
            title: 'Ticker',
            handleSortChange,
            sortKey: 'ticker',
            sortConfig,
          }}
        />
      </tr>
    </thead>
  )
}

export default TableHeader
