import React from 'react'
import { PriceTableCellStyled, TableCellStyled, TableRowStyled } from './styles'

interface ItemType {
  assetClass: string
  price: number
  ticker: string
}

interface TableBodyProps {
  items: ItemType[]
}

const TableBody: React.FC<TableBodyProps> = ({ items }: TableBodyProps) => {
  return (
    <tbody>
      {items.map((item) => {
        const { ticker, assetClass, price } = item
        return (
          <TableRowStyled key={ticker} {...{ assetClass }}>
            <TableCellStyled>{assetClass}</TableCellStyled>
            <PriceTableCellStyled {...{ price }}>
              Rs. {price}
            </PriceTableCellStyled>
            <TableCellStyled>{ticker}</TableCellStyled>
          </TableRowStyled>
        )
      })}
    </tbody>
  )
}

export default TableBody
