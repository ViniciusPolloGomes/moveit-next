import Styles from '../Style/component/ExperienceBar.module.css';

export function ExperienceBar(){
    return(
        <header className={Styles.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{width: '60%'}}/>
                <span className={Styles.currentExperience} style={{left: '50%'}}>
                    300xp
                </span>
            </div>
            <span>600 XP</span>
        </header>
    );
}     