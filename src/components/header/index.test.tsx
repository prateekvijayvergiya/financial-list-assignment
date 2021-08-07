import Component from './'
import makeSnapshot from '../../common/testing/makeSnapshot'

jest.mock('./headerButton', () => 'HeaderButton')

describe('TableHeader', () => {
  it('renders correctly', () => {
    const props = {
      handleSortChange: jest.fn(),
      sortConfig: null
    }
    makeSnapshot(<Component {...props}/>)
  })
})
