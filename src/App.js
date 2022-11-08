import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

import styles from "./App.module.css";

function App() {

  const [whiteRoundScore, seWhiteRoundScore] = useState(0);
  const [redRoundScore, setRedRoundScore] = useState(0);
  const [whiteMatchScore, setWhiteMatchScore] = useState(0);
  const [redMatchScore, setRedMatchScore] = useState(0);

  return (
    <div className={styles.main}>
      <Navbar />
      <Main />
      <Footer whiteRoundScore={whiteRoundScore} redRoundScore={redRoundScore} whiteMatchScore={whiteMatchScore} redMatchScore={redMatchScore} />
    </div>
  );
}

export default App;
