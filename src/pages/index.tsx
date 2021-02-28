
import{Profile} from '../component/Profile';
import {ExperienceBar} from '../component/ExperienceBar';
import  Styles from '../Style/pages/Home.module.css';
import {CompletedChallenges} from '../component/CompletedChallenges';
import {CountDown} from '../component/CountDown';
import {ChallengeBox} from '../component/ChallengeBox';
import React from 'react';
import Head from 'next/head';
import { CountDownProvider } from '../contexts/CountDownContext';
import {GetServerSideProps} from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
  
interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
    <div className={Styles.Container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar/>
      <CountDownProvider>
            <section>
                <div>
                    <Profile/>
                    <CompletedChallenges/>
                    <CountDown/>
                </div>
                <div>
                    <ChallengeBox/>
                </div>
            </section>
            
      </CountDownProvider> 
      
    </div> 
    </ChallengesProvider>
  )
}


