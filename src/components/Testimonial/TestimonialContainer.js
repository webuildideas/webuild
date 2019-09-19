import styled from 'styled-components'

const TestimonialContainer = styled.div`
  padding: 3.125rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  max-width: 33.4375rem;

  .testimonial {
    font-size: ${props => props.theme.f4};
    line-height: 1.6;
    margin-bottom: 1.875rem;
  }

  .client {
    display: flex;
    align-items: center;
  }

  .client-img {
    min-width: 50px;
    min-height: 50px;
    width: 50px;
    height: 50px;
    margin-right: 1.25rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .client-name {
    font-size: ${props => props.theme.f6};
    font-weight: 700;
    margin-bottom: 12px;
  }

  .client-company {
    color: ${props => props.theme.grey};
    font-weight: 400;
  }
`

export default TestimonialContainer
