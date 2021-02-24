import Styles from '../Style/component/CompletedChallenges.module.css';

export function CompletedChallenges(){
    return(
        <div className={Styles.CompletedChallengesContainer }>
            <span>
                Desafios completos
            </span>
            <span>5</span>
        </div>
    );
}