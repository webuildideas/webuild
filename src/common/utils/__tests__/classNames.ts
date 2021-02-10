import { classNames } from '../classNames'

describe('classNames', () => {
  it('returns the expected classNames', () => {
    expect(
      classNames({
        dropdown: true,
        isActive: false,
        isHidden: 10 > 1
      })
    ).toBe('dropdown isHidden')
  })
})
