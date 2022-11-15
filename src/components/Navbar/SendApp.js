import React , { useState } from 'react';
import Backdrop from '../UI/Backdrop';

import styles from './SendApp.module.css'

const webAddress = 'https://codingdatum.github.io/cornhole-counter/';

const SendApp = props => {

    const [email, setEmail] = useState("");

    const emailInputHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const submitEmail = () => {
        window.open('mailto:' + email +'?subject="Cornhole Counter"&body=' + webAddress);
    }

    return(
        <Backdrop>
            <div className={styles.container}>
                <button className={styles.close} onClick={props.closeSendApp}>x</button>
                <div className={styles["input-container"]}>
                    <h3>Enter email to send this App</h3>
                    <input type="text" placeholder="Click here to enter email" onChange={emailInputHandler}></input>
                    <button onClick={submitEmail}>send</button>
                </div>
            </div>
        </Backdrop>
    )
}

export default SendApp;