import React from 'react'

import TableHeader from './components/header'
import TableBody from './components/body'
import useSort from './hooks/useSort'
import { TableCaption, TableStyled } from './appStyles'

const App: React.FC = () => {
  const { items, handleSortChange, sortConfig } = useSort()
  return (
    <TableStyled>
      <TableCaption>Financial instruments</TableCaption>
      <TableHeader {...{ handleSortChange, sortConfig }} />
      <TableBody {...{ items }} />
    </TableStyled>
  )
}

export default App
