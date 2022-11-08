import React from 'react';

import styles from './Footer.module.css'

const Footer = props => {
    return(
        <div className={styles["footer-container"]}>
            <button className={styles["submit-round-button"]}>submit points</button>
            <div className={styles["stats"]}>
                <span>0</span>
                <span>0</span>
            </div>
            <div className={styles["stat-title"]}>
                <span>ROUND SCORE</span>
                <span>MATCH SCORE</span>
            </div>
            <div className={styles["stats"]}>
                <span>0</span>
                <span>0</span>
            </div>
        </div>
    )
};

export default Footer