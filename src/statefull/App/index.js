import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import "./styles.scss";
import Routes from "../../routes";
import TopBar from "../TopBar";
import Cart from "../Cart";
import { setProductsFetchSuccess, setProductsFetchError } from "../../actions"
import { createSlug } from "../../services/utils"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then((data) => data.json())
    .then((data) => {
      // Create some unique id for the products since a real API
      // would have it
      data.forEach((product) => {
        product["id"] = createSlug(product.name)+"-"+product.code_color
      })
      dispatch(setProductsFetchSuccess(data))
    })
    .catch((error) => dispatch(setProductsFetchError(error)))

  }, [dispatch])

  return (
    <div className="App">
      <TopBar />
      <Routes />
      <Cart/>
      {/* <Wishlist/> */}
      {/* <Search/> */}
      <ToastContainer />
    </div>
  );
}

export default App;
