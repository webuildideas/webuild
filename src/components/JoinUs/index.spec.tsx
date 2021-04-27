import React from 'react'
import { render } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { TypeJob } from '@common/types/Job'
import JoinUs from '.'

const TEST_JOBS: TypeJob[] = [
  {
    isOpen: true,
    applicationLink: 'https://sweet-link.com',
    title: 'Boss',
    location: 'Narnia'
  }
]

describe('<JoinUs />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<JoinUs jobs={TEST_JOBS} />)
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
