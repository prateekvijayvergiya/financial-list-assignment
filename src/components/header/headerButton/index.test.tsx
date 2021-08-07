import Component from './'
import makeSnapshot from '../../../common/testing/makeSnapshot'

describe('HeaderButton', () => {
  it('renders correctly', () => {
    const props = {
      title: 'Price',
      handleSortChange: jest.fn(),
      sortKey: 'price',
      sortConfig: null,
    }
    makeSnapshot(<Component {...props} />)
  })
})
