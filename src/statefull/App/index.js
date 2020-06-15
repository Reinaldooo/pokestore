import React from "react";

//
import "./styles.scss";
import Routes from "../../routes";
import TopBar from "../TopBar";
import Footer from "../../stateless/Footer";
import Drawer from "../../stateless/Drawer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes />
      <Footer />
      <Drawer/>
    </div>
  );
}

export default App;
