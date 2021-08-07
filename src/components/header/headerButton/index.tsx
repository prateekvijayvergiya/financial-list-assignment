import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { SortConfigType } from '../../../common/types/sortConfig'
import { ButtonStyled, SortIconStyled, TableHeaderStyled } from './styles'

interface HeaderButtonProps {
  title: string
  handleSortChange: Function
  sortKey: string
  sortConfig: SortConfigType | null
}

const sortIcon = (sortKey: string, sortConfig: SortConfigType) => {
  return sortConfig.key === sortKey ? (
    sortConfig.direction === 'asc' ? (
      <FontAwesomeIcon icon={faArrowDown} />
    ) : (
      <FontAwesomeIcon icon={faArrowUp} />
    )
  ) : undefined
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  title,
  handleSortChange,
  sortKey,
  sortConfig,
}: HeaderButtonProps) => {
  const handleButtonClick = useCallback(
    () => handleSortChange(sortKey),
    [sortKey, handleSortChange]
  )

  return (
    <TableHeaderStyled onClick={handleButtonClick}>
      <ButtonStyled>{title}</ButtonStyled>
      {sortConfig && (
        <SortIconStyled>{sortIcon(sortKey, sortConfig)}</SortIconStyled>
      )}
    </TableHeaderStyled>
  )
}

export default HeaderButton
