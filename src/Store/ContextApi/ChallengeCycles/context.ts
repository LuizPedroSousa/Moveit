import { createContext, Dispatch, SetStateAction } from 'react'

export type ActiveChallengesType = {
  type: string
  amount: number
  description: string
}
export type UserType = {
  _id: number
  name: string
  photo: string
  level: number
  currentExperience: number
  challengesCompleted: number
}
interface IChallengeCyclesContext {
  activeChallenge: ActiveChallengesType
  experienceToNextLevel: number
  user: UserType
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  setViewModal: Dispatch<SetStateAction<boolean>>
}
const ChallengeCyclesContext = createContext<IChallengeCyclesContext>(
  {} as IChallengeCyclesContext
)
export default ChallengeCyclesContext
