import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.625rem 0 2.125rem;
  span {
    font-weight: 500;
  }
  span:first-child {
    font-size: 1.125rem;
  }
  span:last-child {
    font-size: 1.5rem;
  }
  padding-bottom: 1.438rem;
  border-bottom: 1px solid ${props => props.theme.colors.grayLine};

  @media (min-width: 1120px) {
    grid-area: challenge;
  }
`
