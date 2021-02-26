import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountDownContextData {
        minutes:number;
        seconds: number;
        hasFinished:boolean;
        isactive: boolean ;
        startCountDown: ()=> void;
        resetCountDown: () => void;
} 

interface CountDownProviderProps{
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

let CountDownTimeout: NodeJS.Timeout;

export function  CountDownProvider({children} : CountDownProviderProps){

    const {startNewChallenge} = useContext(ChallengesContext);

    const[time, setTime] = useState(0.05*60);
    const[isactive, setisActive] = useState(false);
    const[hasFinished, setHasFinished] = useState(false);
    
    const minutes= Math.floor(time / 60) ;
    const seconds = time % 60;

    function startCountDown(){
        setisActive(true);
    }

    function resetCountDown(){
        clearTimeout(CountDownTimeout);
        setisActive(false);
        setTime(0.05*60);
        setHasFinished(false);
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

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isactive,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountDownContext.Provider>
    )
}

