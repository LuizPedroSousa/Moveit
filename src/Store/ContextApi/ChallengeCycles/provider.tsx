/* eslint-disable no-new */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LevelUpModal from '../../../Components/LevelUpModal'
import ChallengeCyclesContext, {
  ActiveChallengesType,
  UserType
} from './context'

interface ChallengeCyclesProviderProps {
  userProps: UserType
}

const { Provider, Consumer } = ChallengeCyclesContext
const ChallengeCyclesProvider: React.FC<ChallengeCyclesProviderProps> = ({
  children,
  userProps
}) => {
  const [activeChallenge, setActiveChallenge] = useState<ActiveChallengesType>()
  const [user, setUser] = useState<UserType>(userProps ?? ({} as UserType))
  const [viewModal, setViewModal] = useState(false)
  const experienceToNextLevel = Math.pow((user.level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const startNewChallenge = async () => {
    const challenges = await axios.get('/api/challenges')
    const RandomChallengeIndex = Math.floor(
      Math.random() * challenges.data.length
    )
    const challenge = challenges.data[RandomChallengeIndex]
    setActiveChallenge(challenge)
    if (Notification.permission === 'granted') {
      new Audio('/notification.mp3').play()
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}`,
        silent: true
      })
    }
  }
  const levelUp = (currentUserLevel: number) => {
    setViewModal(true)
    currentUserLevel = user.level + 1
    return currentUserLevel
  }
  const completeChallenge = async () => {
    if (!activeChallenge) return null
    const { amount } = activeChallenge
    let currentExperience = user.currentExperience + amount
    let level = user.level
    if (currentExperience >= experienceToNextLevel) {
      currentExperience = currentExperience - experienceToNextLevel
      level = levelUp(level)
    }

    const data = {
      currentExperience,
      level,
      challengesCompleted: user.challengesCompleted + 1
    }

    await axios.patch(`/api/user/update/${user._id}`, data)
    setUser({ ...user, ...data })
    setActiveChallenge(null)
  }
  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  return (
    <Provider
      value={{
        activeChallenge,
        experienceToNextLevel,
        user,
        setViewModal,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}

      {viewModal && <LevelUpModal />}
    </Provider>
  )
}

export { ChallengeCyclesProvider, Consumer }
