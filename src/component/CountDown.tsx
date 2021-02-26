import Styles from '../Style/component/CountDown.module.css';
import {useState, useEffect, useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';



export function CountDown(){
   const {
         minutes,
         seconds,
         hasFinished,
         isactive,
         startCountDown,
         resetCountDown,
} = useContext(CountDownContext);
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');


    return(
       <div>
            <div className={Styles.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div> 
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div> 
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={`${Styles.CountDownButton}  }`}>
                        Ciclo encerrado
                </button>
            ) : (
                <>
                    {isactive ? (
                <button 
                type="button" 
                className={`${Styles.CountDownButton} ${Styles.CountDownButtonActive}`}
                onClick={resetCountDown}>
                     Abandonar ciclo
            </button>
            ):(
                <button 
                type="button" 
                className={Styles.CountDownButton}
                onClick={startCountDown}>
                    Iniciar um ciclo
                </button>
            )}
                </>
            )}
        </div>
    );

}