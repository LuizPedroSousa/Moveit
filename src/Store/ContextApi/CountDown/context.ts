import { createContext, Dispatch, SetStateAction } from 'react'

interface ICountDownContext {
  startCountDown: () => void
  setIsActive: Dispatch<SetStateAction<boolean>>
  isActive: boolean
  hasFinished: boolean
  minutes: number
  seconds: number
}

const CountDownContext = createContext({} as ICountDownContext)

export default CountDownContext
