import Styles from '../Style/component/CountDown.module.css';
import {useState, useEffect, useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';

let CountDownTimeout: NodeJS.Timeout;

export function CountDown(){
    const {startNewChallenge} = useContext(ChallengesContext);

    const[time, setTime] = useState(0.05*60);
    const[isactive, setisActive] = useState(false);
    const[hasFinished, setHasFinished] = useState(false);
    
    const minutes= Math.floor(time / 60) ;
    const seconds = time % 60;
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountDown(){
        setisActive(true);
    }

    function resetCountDown(){
        clearTimeout(CountDownTimeout);
        setisActive(false);
        setTime(0.05*60);
    }

    useEffect(() =>{
        if(isactive && time > 0){
            CountDownTimeout =setTimeout(()=>{
                setTime(time-1); 
            },1000)
        } else if(isactive && time === 0){
            setHasFinished(true);
            setisActive(false);
            startNewChallenge();
        }
    }, [isactive,time])

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