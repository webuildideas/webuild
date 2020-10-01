import React from 'react'
import { render } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import Footer from '../index'

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Footer />)
    mockAllIsIntersecting(true)
    const container = getByTestId('footer')
    const title = getByTestId('footer-title')
    const subtitle = getByTestId('footer-subtitle')
    const social = getByTestId('footer-social')
    const button = getByTestId('primaryButton')

    expect(container).toBeTruthy()
    expect(title).toBeTruthy()
    expect(subtitle).toBeTruthy()
    expect(social).toBeTruthy()
    expect(button).toBeTruthy()
  })
})
