enum SortKeyType {
  ASSETCLASS = 'assetClass',
  PRICE = 'price',
  TICKER = 'ticker',
}

type SortConfigType = {
  key: SortKeyType
  direction: string
}

export { SortKeyType }
export type { SortConfigType }
