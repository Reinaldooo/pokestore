import React from "react";

//
import "./styles.scss";
import Routes from "../../routes";
import TopBar from "../TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes />
      {/* Footer */}
    </div>
  );
}

export default App;
