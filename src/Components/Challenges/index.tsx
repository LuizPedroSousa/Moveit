import React from 'react'

import { Container } from './styles'

interface CompletedChanllengesProps {
  completed: number
}

const Challenges: React.FC<CompletedChanllengesProps> = ({ completed }) => {
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{completed < 10 ? `0${completed}` : completed}</span>
    </Container>
  )
}

export default Challenges
