import React from 'react';
import Backdrop from '../UI/Backdrop';

import styles from './GameRules.module.css';

const GameRules = props => {
    return (
        <Backdrop>
            <div className={styles.rules}>
                <p>Game Rules</p>
                <button onClick={props.closeRules}>close</button>
            </div>
        </Backdrop>
    )
}

export default GameRules;