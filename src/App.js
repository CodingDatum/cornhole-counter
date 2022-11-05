import React from "react";
import Navbar from "./components/Navbar/Navbar.js";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
    </div>
  );
}

export default App;
