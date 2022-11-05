import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
