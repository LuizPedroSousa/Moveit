import styled from 'styled-components'
import { shade } from 'polished'
interface IContainer {
  hasFinished: boolean
}

interface ICycleInfo {
  isActive: boolean
}

export const Container = styled.div<IContainer>`
  width: 100%;
  transition: 0.25s;
  background-color: ${props => props.theme.colors.white};
  height: ${props => (props.hasFinished ? '39.5rem' : '25rem')};
  margin: 2.125rem 0 4.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  align-items: center;

  @media (min-width: 1120px) {
    margin: 0;
    height: ${props => (props.hasFinished ? '31.25rem' : '31.25rem')};
    grid-area: card;
  }
`

export const CycleInfo = styled.div<ICycleInfo>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  strong {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.4;
    p {
      max-width: 100%;
    }
  }
  p {
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => (props.isActive ? 'row' : 'column')};
    align-items: center;
    line-height: 1.3;
    max-width: 80%;
    text-align: ${props => (props.isActive ? 'left' : 'center')};
    span {
      margin: ${props => (!props.isActive ? '0 0 1.438rem' : '0 1rem 0 0')};
    }
  }

  @media (min-width: 1120px) {
    strong {
      margin-bottom: 4.188rem;
    }
  }
`

export const Challenge = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  header {
    padding-bottom: 2.063rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 600;
      font-size: 1.25rem;
      color: ${props => props.theme.colors.blue};
    }
    width: 100%;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin: 2.375rem 0 2rem;
    }
    strong {
      font-weight: 600;
      font-size: 1.875rem;
      margin-bottom: 1.438rem;
      color: ${props => props.theme.colors.title};
    }
    p {
      text-align: center;
    }
  }
  footer {
    margin-top: 2.25rem;
    display: flex;
    width: 100%;
    gap: 1.5rem;
    flex-direction: column-reverse;
    @media (min-width: 1120px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
  }
`
export const FailedButton = styled.button`
  height: 3.5rem;
  border: 0;
  outline: 0;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 5px;
  transition: 0.25s;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.red};
  cursor: pointer;
  :hover {
    background-color: ${props => shade(0.2, props.theme.colors.red)};
  }
`
export const CompletedButton = styled(FailedButton)`
  background-color: ${props => props.theme.colors.green};
  :hover {
    background-color: ${props => shade(0.2, props.theme.colors.green)};
  }
`
