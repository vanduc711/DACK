
import { useLocation } from "react-router-dom";
import Routers from './components/Routes';
import Header from './components/layouts/DefaultLayout/Header';
import Footer from './components/layouts/DefaultLayout/Footer';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProductsItemSucces } from "./redux/productsSlice";
import { getAllProducts } from "./redux/apiRequest";

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  // component sẽ được mouse khi ứng dụng chạy
  useEffect(()=> {
    getAllProducts(dispatch);
  },[dispatch(addProductsItemSucces())])

  return (
    <div className="App">
      {/* Default Header */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Header/>}
      {/* Content */}
      <Routers/>
      {/* Default Footer */}
      {location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/addBooks' && location.pathname !== '/manageBooks' && <Footer/>}
    </div>
  );
}

export default App;
