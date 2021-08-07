import styled, { css } from 'styled-components'

const TableRowStyled = styled.tr<{ assetClass: string }>`
  ${({ assetClass }) => css`
    ${assetClass === 'Equities'
      ? css`
          background-color: #e3f2fd;
        `
      : assetClass === 'Credit' &&
        css`
          background-color: #e8f5e9;
        `}
  `}
  border-bottom: 1px solid #263238;
  &:hover {
    background-color: #eeeeee;
  }
`
const TableCellStyled = styled.td`
  padding: 10px;
`

const PriceTableCellStyled = styled.td<{ price: number }>`
  padding: 10px;
  ${({ price }) => css`
    ${price > 0
      ? css`
          color: #1b5e20;
        `
      : css`
          color: #b71c1c;
        `}
  `}
`

export { TableRowStyled, PriceTableCellStyled, TableCellStyled }
