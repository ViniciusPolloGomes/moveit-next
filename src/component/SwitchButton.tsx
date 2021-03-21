import React, { useState } from 'react';
import Styles from '../Style/component/SwitchButton.module.css';

export function SwitchButton(){

    const [isDarkModeEnabled,setIsDarkModeEnabled] = useState(false);

    const handleDarkMode = (e) => {
        
        let html = document.querySelector('html');
        html.classList.toggle('dark-mode');
        setIsDarkModeEnabled(e.target.checked);
    }


    return(
        
        <div className={Styles.container}>
            <input type="checkbox" name="SwitchButton" id="switch-button" onChange={handleDarkMode}/>

            <label htmlFor="switch-button" >Click and switch to dark template {isDarkModeEnabled?'Light Mode':'Dark Mode'}</label> 
        </div>
        
    );

}