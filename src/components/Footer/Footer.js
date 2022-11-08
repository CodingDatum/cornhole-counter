import React from 'react';
import Score from './Score';

import styles from './Footer.module.css'

const Footer = props => {
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["stats"]}>
                <Score score={props.whiteRoundScore} />
                <Score score={props.whiteMatchScore} />
            </div>
            <div className={styles["stat-title"]}>
                <span>GAME SCORE</span>
                <span>MATCH SCORE</span>
            </div>
            <div className={styles["stats"]}>
                <Score score={props.redRoundScore} />
                <Score score={props.redMatchScore} />
            </div>
        </div>
    )
};

export default Footer