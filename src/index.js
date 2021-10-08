import React from "react";
import ReactDOM from "react-dom";

import Test from "./Test";

import styles from "./index.scss";

function App() {
  return (
    <div id="App" className={styles.title}>
      <Test></Test>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
