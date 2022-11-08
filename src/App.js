import React, { useState , useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

import styles from "./App.module.css";

function App() {

  const [whiteRoundScore, setWhiteRoundScore] = useState(0);
  const [redRoundScore, setRedRoundScore] = useState(0);
  const [whiteMatchScore, setWhiteMatchScore] = useState(0);
  const [redMatchScore, setRedMatchScore] = useState(0);

  const submitRoundHandler = (whiteScore, redScore) => {
    if(whiteScore === redScore){
      return
    }
    if(whiteScore>redScore){
      let whitePointsEarned = whiteScore-redScore;
      setWhiteRoundScore(whiteRoundScore+whitePointsEarned)
    }
    if(redScore>whiteScore){
      let redPointsEarned = redScore-whiteScore;
      setRedRoundScore(redRoundScore + redPointsEarned)
    }
  }

  useEffect(() => {
    if(whiteRoundScore >= 21){
      setWhiteMatchScore(whiteMatchScore + 1)
      setWhiteRoundScore(0);
      setRedRoundScore(0);
    }
    if(redRoundScore >= 21){
      setRedMatchScore(redMatchScore + 1)
      setWhiteRoundScore(0);
      setRedRoundScore(0);
    }
  },[whiteRoundScore, redRoundScore, whiteMatchScore, redMatchScore])

  return (
    <div className={styles.main}>
      <Navbar />
      <Main submitRoundHandler={submitRoundHandler}/>
      <Footer whiteRoundScore={whiteRoundScore} redRoundScore={redRoundScore} whiteMatchScore={whiteMatchScore} redMatchScore={redMatchScore} />
    </div>
  );
}

export default App;
