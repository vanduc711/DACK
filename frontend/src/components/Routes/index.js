import { Routes, Route } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks';
import Carts from '../Pages/Carts/Carts';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ManageBooks from '../Pages/ManageBooks';
import Products from '../Pages/Products/Products';
import ProductsItems from '../Pages/ProductsItem/ProductsItem';
import Register from '../Pages/Register/Register';
import UpdateBook from '../Pages/UpdateBook';
import CreateProduct from '../CreateProduct';

function Routers() {
    return (
      <div className='WrapBody'>
       {/*chứa các routes  */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addBooks' element={<AddBooks/>} />
            <Route path='/manageBooks' element={<ManageBooks/>} />
            <Route path='/UpdateBook/:id' element={<UpdateBook/>} />
            <Route path='/sanpham' element={<Products/>} />
            <Route path='/sanpham/:id' element={<ProductsItems/>} />
            <Route path='/carts' element={<Carts/>} />
            <Route path='/lienhe' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path={'/create-product'} element={<CreateProduct />}></Route>
        </Routes>
      </div>
    );
  }

  export default Routers;