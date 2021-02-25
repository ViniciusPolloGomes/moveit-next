import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../Style/component/ExperienceBar.module.css';

export function ExperienceBar(){
    const{currentExperience, experienceToNextLevel}=useContext(ChallengesContext);
    
    const percentToNextLevel= Math.round(currentExperience*100)/ experienceToNextLevel;

    return( 
        <header className={Styles.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{width: `${ percentToNextLevel}%`}}/>
                <span className={Styles.currentExperience} style={{left: `${ percentToNextLevel}%`}}>
                    {currentExperience} XP
                </span>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </header>
    );
}     