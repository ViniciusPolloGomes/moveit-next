import Styles from '../Style/component/ChallengeBox.module.css';
import {ChallengesContext} from '../contexts/ChallengesContext';
import {useContext} from 'react';

export function ChallengeBox(){ 

    const {activeChallenge,resetChallenge} = useContext(ChallengesContext);

   

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
                            onClick={resetChallenge}>
                                Falhei
                        </button>
                        <button  
                            type="button" 
                            className={Styles.challengeSuceededButton} >
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