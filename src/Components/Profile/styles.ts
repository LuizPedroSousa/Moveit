import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  img {
    margin: 0 1.4rem 0 0;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
  > div {
    height: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    strong {
      font: 600 1.5rem Inter;
      color: ${props => props.theme.colors.title};
    }
    span {
      svg {
        margin: 0 0.625rem 0 0;
      }
    }
  }

  @media (min-width: 1120px) {
    grid-area: profile;
  }
`
