import React from 'react'
import { render } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import DesignPartner from '../DesignPartner'

describe('<DesignPartner />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<DesignPartner />)
    mockAllIsIntersecting(true)
    const container = getByTestId('designPartner')
    const title = getByTestId('designPartner-title')
    const description = getByTestId('designPartner-description')
    const investigate = getByTestId('designPartner-investigate')
    const ideate = getByTestId('designPartner-ideate')
    const iterate = getByTestId('designPartner-iterate')

    expect(container).toBeTruthy()
    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
    expect(investigate).toBeTruthy()
    expect(ideate).toBeTruthy()
    expect(iterate).toBeTruthy()
  })
})
