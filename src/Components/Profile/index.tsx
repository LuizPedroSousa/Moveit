import React from 'react'

import { Container } from './styles'

import LevelIco from '../../../public/icons/level.svg'

interface ProfileProps {
  user: {
    photo: string
    name: string
    level: number
  }
}
const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Container>
      <img src={user.photo} alt="avatar" />
      <div>
        <strong>{user.name}</strong>
        <span>
          <LevelIco />
          Level {user.level}
        </span>
      </div>
    </Container>
  )
}

export default Profile
