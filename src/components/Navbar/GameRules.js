import React from 'react';
import Backdrop from '../UI/Backdrop';

import styles from './GameRules.module.css';

const GameRules = props => {
    return (
        <Backdrop>
            <div className={styles.rules}>
                <h3>Game Rules</h3>
                <p>1. Stand on the opposite board to your partner</p>
                <p>2. Throw your bag (underhand) at the opposite board. Alternate throws with the player next to you.</p>
                <p>3. 1 POINT for each bag that lands on top of the board. 3 POINTS for each bag that is tossed through or knocked into the hole.</p>
                <p>4. Tally points after all (8) bags have been thrown per inning by using the cancellation method. TOTAL = YOUR POINTS - OPPONENT'S POINTS</p>
                <p>5. The game is over when a Player or Team reaches (or exceeds) 21 POINTS.</p>
                <button onClick={props.closeRules}>x</button>
            </div>
        </Backdrop>
    )
}

export default GameRules;