import React from 'react'
import { render } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import Button from '../index'

describe('<Button />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Button href="cool" type="primaryButton">
        Press Me
      </Button>
    )
    mockAllIsIntersecting(true);
    expect(getByTestId('primaryButton')).toBeTruthy()
  })
})
