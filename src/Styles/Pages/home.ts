import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1120px) {
    padding: 2.5rem 12.063rem;
  }
  @media (min-width: 1440px) {
    padding: 2.5rem 15rem;
  }
`

export const Section = styled.section`
  flex: 1;
  margin-top: 4.125rem;
  @media (min-height: 800px) {
    margin-top: 8.125rem;
  }
`

export const Content = styled.div`
  margin: 0 0 4rem;
  @media (min-width: 1120px) {
    display: grid;
    grid-template-columns: 1fr 29.25rem;
    grid-template-areas:
      'profile card'
      'challenge card'
      'countdown card';

    align-items: center;
    column-gap: 6.438rem;
    @media (min-height: 800px) {
      margin-bottom: 8.125rem;
    }
  }
`
