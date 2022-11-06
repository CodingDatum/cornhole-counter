import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
