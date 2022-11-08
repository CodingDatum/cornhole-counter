import React from 'react';

import styles from './Footer.module.css'

const Footer = props => {
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["stats"]}>
                <span>{props.whiteRoundScore}</span>
                <span>{props.whiteMatchScore}</span>
            </div>
            <div className={styles["stat-title"]}>
                <span>ROUND SCORE</span>
                <span>MATCH SCORE</span>
            </div>
            <div className={styles["stats"]}>
                <span>{props.redRoundScore}</span>
                <span>{props.redMatchScore}</span>
            </div>
        </div>
    )
};

export default Footer