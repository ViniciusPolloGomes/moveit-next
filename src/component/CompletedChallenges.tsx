import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../Style/component/CompletedChallenges.module.css';
import {useContext} from 'react';

export function CompletedChallenges(){

    const {challengesCompleted} = useContext(ChallengesContext);


    return(
        <div className={Styles.CompletedChallengesContainer }>
            <span>
                Desafios completos
            </span>
            <span>{challengesCompleted}</span>
        </div>
    );
}