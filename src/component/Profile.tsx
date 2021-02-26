import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../Style/component/Profile.module.css'; 

export function Profile(){
    const{ level }= useContext(ChallengesContext);
    return(
        <div className={Styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/55021733?s=400&u=c9ab5ad8abbf751656768eb0128e7ded4591a5d5&v=4" alt="Vinícius Pollo"></img>
            <div>
                <strong>Vinicius Pollo</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    );
} 