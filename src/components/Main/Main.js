import React, { useState } from 'react';

import styles from './Main.module.css';

const Main = props => {

    const [whiteTeamWorkingPoints, setWhiteTeamWorkingPoints] = useState(0);
    const [redTeamWorkingPoints, setRedTeamWorkingPoints] = useState(0);

    const addWhitePoint = () => {
        setWhiteTeamWorkingPoints(whiteTeamWorkingPoints+1)
    }
    const subtractWhitePoint = () => {
        setWhiteTeamWorkingPoints(whiteTeamWorkingPoints-1)
    }
    const addRedPoint = () => {
        setRedTeamWorkingPoints(redTeamWorkingPoints+1)
    }
    const subtractRedPoint = () => {
        setRedTeamWorkingPoints(redTeamWorkingPoints-1)
    }

    const submitClickHandler = () => {
        props.submitRoundHandler(whiteTeamWorkingPoints, redTeamWorkingPoints);
        setWhiteTeamWorkingPoints(0);
        setRedTeamWorkingPoints(0);
    }

    return (
        <div className={styles.main}>
            <div className={styles["white-team-container"]}>
                <div className={styles["point-buttons"]}>
                    <button onClick={addWhitePoint}>+</button>
                    <span>{whiteTeamWorkingPoints}</span>
                    <button onClick={subtractWhitePoint}>-</button>
                </div>
                <h2>WHITE TEAM</h2>
            </div>
            <div className={styles["red-team-container"]}>
                <div className={styles["point-buttons"]}>
                    <button onClick={addRedPoint}>+</button>
                    <span>{redTeamWorkingPoints}</span>
                    <button onClick={subtractRedPoint}>-</button>
                </div>
                <h2>RED TEAM</h2>
            </div>
            <button className={styles["submit-round-button"]} onClick={submitClickHandler}>submit points</button>
        </div>
    )
}

export default Main;