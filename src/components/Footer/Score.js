import React, { useEffect , useState } from 'react';

import styles from './Score.module.css';

const Score = props => {

    const [workingStyle, setWorkingStyle] = useState("");

    useEffect(()=>{
        setWorkingStyle("score");
        setTimeout(() => {
            setWorkingStyle("")
        }, 1000)
    },[props.score])

    return (
        <span className={styles[workingStyle]}>{props.score}</span>
    )
}

export default Score;