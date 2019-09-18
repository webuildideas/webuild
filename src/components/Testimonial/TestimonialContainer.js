import styled from 'styled-components'

const TestimonialContainer = styled.div`
  padding: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  max-width: 535px;

  .testimonial {
    font-size: ${props => props.theme.f4};
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .client {
    display: flex;
    align-items: center;
  }

  .client-img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
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
