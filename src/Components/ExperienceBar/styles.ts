import styled from 'styled-components'

interface IProgress {
  percent: string
}

interface IActualXp {
  xp: string
}

export const Header = styled.header`
  display: flex;
  align-items: center;
`
export const XP = styled.span`
  font-size: 1rem;
`
export const Bar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.grayLine};
  margin: 0 1.563rem;
  position: relative;
`
export const Progress = styled.div<IProgress>`
  width: ${props => props.percent};
  position: absolute;
  height: 4px;
  transition: 0.25s;
  background-color: ${props => props.theme.colors.green};
`
export const ActualXp = styled(XP)<IActualXp>`
  top: 0.75rem;
  position: absolute;
  left: ${props => props.xp};
  transform: translateX(-50%);
`
