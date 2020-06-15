import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import "./styles.scss";
import Routes from "../../routes";
import TopBar from "../TopBar";
import Cart from "../Cart";
import { setProductsFetchLoading, setProductsFetchSuccess } from "../../actions"
import { fakeApi } from "../../services/fakeApi"
import { createSlug } from "../../services/utils"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProductsFetchLoading())
    setTimeout(() => {
      // Create unique ids for products, since a real API would have them
      fakeApi.forEach((product) => {
        product["id"] = createSlug(product.name)+"-"+product.code_color
      })
      fakeApi.sort((a,b) => b.discount_percentage > a.discount_percentage)
      dispatch(setProductsFetchSuccess(fakeApi))
    }, 1000);
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
