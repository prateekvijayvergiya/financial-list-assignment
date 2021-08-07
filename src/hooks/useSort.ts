import { useCallback, useMemo, useState } from 'react'

import { SortConfigType, SortKeyType } from '../common/types/sortConfig'
import data from '../data.json'

const useSort = () => {
  const [sortConfig, setSortConfig] = useState<SortConfigType | null>(null)

  const sortedItems = useMemo(() => {
    let sortableItems = [...data]
    if (sortConfig !== null) {
      sortableItems.sort((firstItem, secondItem) => {
        if (firstItem[sortConfig.key] < secondItem[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (firstItem[sortConfig.key] > secondItem[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [sortConfig])

  const handleSortChange = useCallback(
    (key: SortKeyType) => {
      let direction = 'asc'
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'asc'
      ) {
        direction = 'desc'
      }
      setSortConfig({ key, direction })
    },
    [sortConfig]
  )

  return { items: sortedItems, handleSortChange, sortConfig }
}

export default useSort
