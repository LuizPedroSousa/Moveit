import { lighten } from 'polished'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  padding: 0 1rem;

  @media (min-width: 1120px) {
    padding: 0 29.5rem;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 17.625rem;
  border-radius: 5px 5px 0 0;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 2px solid ${props => props.theme.colors.grayLine};
  header {
    height: 3rem;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    top: 0;
    padding: 0.5rem;
    button {
      cursor: pointer;
      border: 0;
      transition: 0.25s;
      :hover {
        opacity: 0.5;
      }
      background: inherit;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      width: 2.5rem;
      height: 2.5rem;
    }
    position: absolute;
  }
  main {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    strong:nth-child(1) {
      text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
      z-index: 2;
      font-size: 8.75rem;
      color: ${props => props.theme.colors.blueDark};
      font-weight: 600;
    }
    strong:nth-child(3) {
      color: ${props => props.theme.colors.title};
      font-size: 1.875rem;
      line-height: 2.5rem;
    }
    span {
      z-index: 1;
      position: absolute;
      top: 1rem;
    }
    p {
      line-height: 1.875rem;
      font-size: 1.25rem;
    }
  }
`

export const ShareOnTwitter = styled.button`
  outline: 0;
  border: 0;
  background-color: ${props => lighten(0.4, props.theme.colors.blueTwitter)};
  font-weight: 600;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.blueTwitter};
  width: 100%;
  transition: 0.25s;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  span {
    display: flex;
    margin-left: 1rem;
    justify-content: center;
    svg path {
      fill: ${props => props.theme.colors.blueTwitter};
    }
    align-items: center;
  }

  :hover {
    color: ${props => props.theme.colors.white};
    span {
      svg path {
        fill: ${props => props.theme.colors.white};
      }
    }
    background-color: ${props => props.theme.colors.blueTwitter};
  }
`
