
import{Profile} from '../component/Profile';
import {ExperienceBar} from '../component/ExperienceBar';
import  Styles from '../Style/pages/Home.module.css';
import {CompletedChallenges} from '../component/CompletedChallenges';
import {CountDown} from '../component/CountDown';
import {ChallengeBox} from '../component/ChallengeBox';
import React from 'react';
import Head from 'next/head';
import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { GetServerSideProps } from 'next';
import { SwitchButton } from '../component/SwitchButton';


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
      <SwitchButton></SwitchButton>
      <ExperienceBar/>
      <CountDownProvider>
            <section>
                <div className={Styles.div1}>
                    <Profile/>
                    <CompletedChallenges/>
                    <CountDown/>
                </div>
                <div className={Styles.div2}>
                    <ChallengeBox/>
                </div>
            </section>
            
      </CountDownProvider> 
      
    </div> 
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps= async (ctx) => {
  const user = {
    level: 1 ,
    currentExperience:50,
    challengesCompleted:2,
  }
  
  const {level,currentExperience,challengesCompleted}=  ctx.req.cookies;

  return{
    props:{
      level: Number(level),
      currentExperience :Number( currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}