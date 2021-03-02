/* eslint-disable multiline-ternary */
import React, { useContext } from 'react'
import {
  Container,
  Challenge,
  FailedButton,
  CompletedButton,
  CycleInfo
} from './styles'
import LevelUpBig from '../../../public/icons/level-up.svg'
import LevelUpSmall from '../../../public/icons/level-up-small.svg'
import ChallengeCyclesContext from '../../Store/ContextApi/ChallengeCycles/context'
import BodyIcon from '../../../public/icons/body.svg'
import EyeIcon from '../../../public/icons/eye.svg'
import CountDownContext from '../../Store/ContextApi/CountDown/context'
const CardBox: React.FC = () => {
  const { activeChallenge, completeChallenge, resetChallenge } = useContext(
    ChallengeCyclesContext
  )
  const { hasFinished, isActive, setIsActive } = useContext(CountDownContext)

  const handleChallegeCompleted = () => {
    completeChallenge()
    setIsActive(false)
  }

  const handleChallengeFaild = () => {
    resetChallenge()
    setIsActive(false)
  }
  return (
    <Container hasFinished={hasFinished}>
      {activeChallenge ? (
        <Challenge>
          <header>
            <h1>Ganhe {activeChallenge.amount} XP</h1>
          </header>
          <main>
            <span>
              {activeChallenge.type === 'body' ? <BodyIcon /> : <EyeIcon />}
            </span>
            <strong>
              {activeChallenge.type === 'body'
                ? 'Exercite-se'
                : 'Mova os olhos'}
            </strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <FailedButton type="button" onClick={handleChallengeFaild}>
              Falhei
            </FailedButton>
            <CompletedButton onClick={handleChallegeCompleted} type="button">
              Completei
            </CompletedButton>
          </footer>
        </Challenge>
      ) : (
        <CycleInfo isActive={isActive}>
          <strong>
            {!isActive ? (
              <>
                Para começar
                <p>inicie um novo ciclo</p>
              </>
            ) : (
              'Finalize um ciclo para receber um desafio'
            )}
          </strong>
          <p>
            <span>{isActive ? <LevelUpSmall /> : <LevelUpBig />}</span>
            {isActive
              ? 'Complete desafios ganhe experiência e avance de level.'
              : 'Avance de level completando os desafios.'}
          </p>
        </CycleInfo>
      )}
    </Container>
  )
}

export default CardBox
