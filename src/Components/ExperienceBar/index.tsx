import React from 'react'

import { Header, XP, Bar, Progress, ActualXp } from './styles'

interface ExperienceBarProps {
  currentExperience: number
  experienceToNextLevel: number
}

const ExperienceBar: React.FC<ExperienceBarProps> = ({
  currentExperience,
  experienceToNextLevel
}) => {
  const percent = Math.round((currentExperience / experienceToNextLevel) * 100)
  return (
    <Header>
      <XP>0 px</XP>
      <Bar>
        <Progress percent={`${percent}%`} />
        <ActualXp xp={`${percent}%`}>{currentExperience}xp</ActualXp>
      </Bar>
      <XP>{experienceToNextLevel} px</XP>
    </Header>
  )
}

export default ExperienceBar
