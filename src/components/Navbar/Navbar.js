import React, { useState } from "react";

import styles from "./Navbar.module.css";

const Navbar = props => {

    const [navcolState, setNavcolState] = useState("closed")

    const hamburgerClickHandler = () => {
        // this will only apply to clicking the hamburger, so will only open the overlay for now...
        setNavcolState("open")
    }

    const xClickHandler = () =>{
        setNavcolState("closed")
    }

    return (
        <React.Fragment>
            <div className={styles.navbar}>
                <h1>Cornhole</h1>
                {navcolState === "closed" &&
                    <div className={styles.hamburger} onClick={hamburgerClickHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
                {navcolState === "open" &&
                    <div className={styles.x} onClick={xClickHandler}>X</div>
                }
            </div>
            {navcolState === "open" && 
                <div className={styles["navcol-container"]}>
                    <div className={styles["navcol-backdrop"]}></div>
                    <div className={styles.navcol}>
                        <ul>
                            <li>PRIDE SPORTS</li>
                            <li>GAME RULES</li>
                            <li>FAQ's</li>
                            <li>&copy;</li>
                        </ul>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Navbar;