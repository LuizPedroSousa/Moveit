import styled, { keyframes } from 'styled-components'

interface IStartCycle {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  @media (min-width: 1120px) {
    grid-area: countdown;
  }
`

export const Clock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem;
  font: 600 7.5rem Rajdhani;
  color: ${props => props.theme.colors.title};
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6.5rem;
    width: 2.313rem;
  }
  div {
    overflow: hidden;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.white};
    width: 11rem;
    height: 9rem;
    position: relative;
    ::before {
      content: '';
      background-color: ${props => props.theme.colors.background};
      width: 2px;
      height: 100%;
      position: absolute;
    }
  }
`

export const StartCycle = styled.button<IStartCycle>`
  height: 5rem;
  width: 100%;
  background-color: ${props =>
    props.isActive ? props.theme.colors.white : props.theme.colors.blue};
  border: 0;
  outline: 0;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.25rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  color: ${props =>
    props.isActive ? props.theme.colors.text : props.theme.colors.white};
  span {
    margin-left: 1.063rem;
  }
  transition: 0.25s;
  :hover {
    color: ${props => props.isActive && props.theme.colors.white};
    span {
      svg path {
        fill: ${props => props.isActive && props.theme.colors.white};
      }
    }
    background-color: ${props =>
      props.isActive ? props.theme.colors.red : props.theme.colors.blueDark};
  }
`

export const FinishedCycle = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  cursor: no-drop;
  font-weight: 600;
  font-size: 1.25rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    display: flex;
    align-items: center;
    margin-left: 1.063rem;
  }
  ::before {
    content: '';
    width: 100%;
    height: 4px;
    background-color: ${props => props.theme.colors.green};
    position: absolute;
    border-radius: 0 0 5px 5px;
    bottom: 0;
    left: 0;
    animation: ${keyframes`
      0%{
        width: 0%;
        
      }
      100%{
        width: 100%;
      }
    `} 1s linear;
  }
`
