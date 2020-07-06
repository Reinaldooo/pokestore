import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import "./styles.scss";
import Main from "../../statefull/Main"
import TopBar from "../TopBar";
import Cart from "../Cart";
import Wishlist from "../Wishlist";
import { productsFetch } from "../../actions"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch])

  return (
    <div className="App">
      <TopBar />
      <Main />
      <Wishlist/>
      <Cart/>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
