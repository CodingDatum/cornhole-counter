import React from 'react';

import styles from './Footer.module.css'

const Footer = props => {
    return(
        <div className={styles["footer-container"]}>
            <button className={styles["submit-round-button"]}>submit points</button>
            <div>White Team Stats</div>
            <div>Title of Stat</div>
            <div>Red Team Stats</div>
        </div>
    )
};

export default Footer