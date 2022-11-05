import React from 'react';

import styles from './Main.module.css';

const Main = props => {
    return (
        <div className={styles.main}>
            <div className={styles["white-team-container"]}>
                <h3>points</h3>
                <div className={styles["point-buttons"]}>
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
                <h2>White Team</h2>
            </div>
            <div className={styles["red-team-container"]}>
                <h3>points</h3>
                <div className={styles["point-buttons"]}>
                    <button>+</button>
                    <span>2</span>
                    <button>-</button>
                </div>
                <h2>Red Team</h2>
            </div>
        </div>
    )
}

export default Main;