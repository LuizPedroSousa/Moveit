/* eslint-disable multiline-ternary */
import React, { useContext } from 'react'

import { Container, Clock, StartCycle, FinishedCycle } from './styles'
import StartIcon from '../../../public/icons/start.svg'
import FinishIcon from '../../../public/icons/close.svg'
import CompletedIcon from '../../../public/icons/completed.svg'
import CountDownContext from '../../Store/ContextApi/CountDown/context'
const CountDown: React.FC = () => {
  const {
    isActive,
    hasFinished,
    startCountDown,
    minutes,
    seconds
  } = useContext(CountDownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <Container>
      <Clock>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Clock>
      {hasFinished ? (
        <FinishedCycle>
          <span>
            Ciclo encerrado
            <span>
              <CompletedIcon />
            </span>
          </span>
        </FinishedCycle>
      ) : (
        <StartCycle isActive={isActive} type="button" onClick={startCountDown}>
          {!isActive ? 'Iniciar um ciclo' : 'Abandonar ciclo'}
          <span>{!isActive ? <StartIcon /> : <FinishIcon />}</span>
        </StartCycle>
      )}
    </Container>
  )
}

export default CountDown
