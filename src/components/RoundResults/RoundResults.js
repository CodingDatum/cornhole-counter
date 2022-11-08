import React from 'react';
import Backdrop from '../UI/Backdrop';

import styles from './RoundResults.module.css'

const RoundResults = props => {
    return(
        <Backdrop>
            <div className={styles["round-results"]}>
                <p>Way to go {props.winner}!</p>
                <button onClick={props.closeResults}>close</button>
            </div>
        </Backdrop>
    )
}

export default RoundResults;