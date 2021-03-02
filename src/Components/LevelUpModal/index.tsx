import React, { useContext } from 'react'

import { Overlay, ShareOnTwitter, Container } from './styles'

import CloseIcon from '../../../public/icons/close.svg'
import TwitterIcon from '../../../public/icons/twitter.svg'
import LevelUpIcon from '../../../public/icons/levelup.svg'
import ChallengeCyclesContext from '../../Store/ContextApi/ChallengeCycles/context'
const LevelUpModal: React.FC = () => {
  const { user, setViewModal } = useContext(ChallengeCyclesContext)

  return (
    <Overlay>
      <Container>
        <header>
          <button type="button" onClick={() => setViewModal(false)}>
            <span>
              <CloseIcon />
            </span>
          </button>
        </header>
        <main>
          <strong>{user.level}</strong>
          <span>
            <LevelUpIcon />
          </span>
          <strong>Parabéns</strong>
          <p>Você alcançou um novo nivel</p>
        </main>
      </Container>
      <ShareOnTwitter type="button">
        Compartilhar no Twitter
        <span>
          <TwitterIcon />
        </span>
      </ShareOnTwitter>
    </Overlay>
  )
}

export default LevelUpModal
