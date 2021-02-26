import Styles from '../Style/component/ChallengeBox.module.css';
import {ChallengesContext} from '../contexts/ChallengesContext';
import {useContext} from 'react';
import { CountDownContext } from '../contexts/CountDownContext';


export function ChallengeBox(){ 

    const {activeChallenge,resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountDown} = useContext(CountDownContext);

    function handleChallengeSucceeded(){
        completeChallenge();   
        resetCountDown();
    } 

    function handleChallengeFailed(){
        resetChallenge(); 
        resetCountDown();
    }

    return(
        <div className={Styles.challengeBoxContainer}>
            
            {activeChallenge ? (
                <div className={Styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount}XP
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} ></img>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}
                        </p>
                    </main>
                    <footer>
                        <button 
                            type="button" 
                            className={Styles.challengeFailedButton} 
                            onClick={handleChallengeFailed}>
                                Falhei
                        </button>
                        <button  
                            type="button" 
                            className={Styles.challengeSuceededButton} 
                            onClick={ handleChallengeSucceeded}>
                                Completei
                        </button>
                    </footer>
                </div>
            ) : (
            
                <div className={Styles.challengeNotActive}>
                    <strong>
                        Inicie um ciclo para receber desafios a serem completados
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"></img>
                        Avance de level completando desafios
                    </p>
                </div>
            
             )}
            
        </div>     
    ); 
}