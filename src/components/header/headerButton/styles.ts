import styled from 'styled-components'

const TableHeaderStyled = styled.th`
  text-align: left;
  border-bottom: 2px solid black;
`

const ButtonStyled = styled.button`
  cursor: pointer;
  font-weight: 700;
  padding: 0.5em;
  margin-bottom: 1px;
`

const SortIconStyled = styled.div`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`

export { TableHeaderStyled, ButtonStyled, SortIconStyled }
