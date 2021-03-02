import React, { useContext, useEffect, useState } from 'react'
import ChallengeCyclesContext from '../ChallengeCycles/context'
import CountDownContext from './context'

const { Provider } = CountDownContext

let countDownTimeOut: NodeJS.Timeout
const CountDownProvider: React.FC = ({ children }) => {
  const { startNewChallenge } = useContext(ChallengeCyclesContext)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [hasFinished, setHasFinished] = useState<boolean>(false)
  const [time, setTime] = useState(25 * 60)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  useEffect(() => {
    if (!isActive) {
      clearTimeout(countDownTimeOut)
      setTime(25 * 60)
      setHasFinished(false)
    }
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => setTime(time - 1), 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      startNewChallenge()
    }
  }, [isActive, time])
  const startCountDown = () => setIsActive(!isActive)
  return (
    <Provider
      value={{
        startCountDown,
        minutes,
        seconds,
        setIsActive,
        isActive,
        hasFinished
      }}
    >
      {children}
    </Provider>
  )
}

export default CountDownProvider
