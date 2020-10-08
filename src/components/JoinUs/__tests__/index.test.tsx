import React from 'react'
import { render } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import JoinUs from '../index'

describe('<JoinUs />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<JoinUs />)
    mockAllIsIntersecting(true)

    const container = getByTestId('joinUs')
    const title = getByTestId('joinUs-title')
    const subtitle = getByTestId('joinUs-subtitle')
    const jobs = getByTestId('joinUs-jobs')

    expect(container).toBeTruthy()
    expect(title).toBeTruthy()
    expect(subtitle).toBeTruthy()
    expect(jobs).toBeTruthy()
  })
})
