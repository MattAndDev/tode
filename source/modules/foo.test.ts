import { foo } from './foo'

describe('foo ()', () => {
  it('bars', () => {
    expect(foo()).toEqual('bar')
  })
})
