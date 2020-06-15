import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
//
import "./styles.scss";
import Routes from "../../routes";
import TopBar from "../TopBar";
import Drawer from "../../stateless/Drawer";
import { setProductsFetchLoading, setPRoductsFetchSuccess } from "../../actions"
import { fakeApi } from "../../services/fakeApi"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProductsFetchLoading())
    setTimeout(() => {
      dispatch(setPRoductsFetchSuccess(fakeApi))
    }, 1000);
  }, [dispatch])

  return (
    <div className="App">
      <TopBar />
      <Routes />
      <Drawer/>
    </div>
  );
}

export default App;
