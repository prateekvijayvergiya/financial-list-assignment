import Component from './'
import makeSnapshot from '../../common/testing/makeSnapshot'

describe('TableBody', () => {
  it('renders correctly', () => {
    const props = {
      items: [{
        assetClass: 'Credit',
        price: 123,
        ticker: 'ALPHA'
      }]
    }
    makeSnapshot(<Component {...props}/>)
  })
})
