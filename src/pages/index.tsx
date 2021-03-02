import React from 'react'
import Head from 'next/head'
import ExperienceBar from '../Components/ExperienceBar'
import { Container, Content, Section } from '../Styles/Pages/home'
import Profile from '../Components/Profile'
import Challenges from '../Components/Challenges'
import CountDown from '../Components/CountDown'
import CardBox from '../Components/CardBox'
import { UserType } from '../Store/ContextApi/ChallengeCycles/context'
import CountDownProvider from '../Store/ContextApi/CountDown/provider'

import {
  ChallengeCyclesProvider,
  Consumer
} from '../Store/ContextApi/ChallengeCycles/provider'
import { GetServerSideProps } from 'next'
import axios from 'axios'
interface HomeProps {
  userProps: UserType
}
const Home: React.FC<HomeProps> = ({ userProps }) => {
  return (
    <ChallengeCyclesProvider userProps={userProps}>
      <Consumer>
        {({ user, experienceToNextLevel }) => (
          <Container>
            <Head>
              <title>Home</title>
            </Head>
            <ExperienceBar
              experienceToNextLevel={experienceToNextLevel}
              currentExperience={user.currentExperience}
            />
            <Section>
              <Content>
                <CountDownProvider>
                  <Profile user={user} />
                  <Challenges completed={user.challengesCompleted} />
                  <CardBox />
                  <CountDown />
                </CountDownProvider>
              </Content>
            </Section>
          </Container>
        )}
      </Consumer>
    </ChallengeCyclesProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/user/show/603c3e203d55f20ef877363d`
  )
  return {
    props: {
      userProps: res.data
    }
  }
}
