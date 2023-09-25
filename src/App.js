import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import AddProduct from './Components/Products/AddProduct';
import AllProducts from './Components/Products/AllProducts';
import ProductDetail from './Components/Products/ProductDetail';
import AllUser from './Components/User/AllUser';
import UserDetail from './Components/User/UserDetail';


function App() {
 
  return (
    <Fragment>
       <>
      <Router>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

          {/* Product Cornner */}
          <Route path="/add-products" element={<AddProduct/>} />
          <Route path="/products" element={<AllProducts/>} />
          <Route exact path="/product/:id" element={<ProductDetail/>} />

          {/* User Conner  */}
          <Route exact path="/user" element={<AllUser/>} />
          <Route exact path="/user/:id" element={<UserDetail/>} />






          
        </Routes>
        <Toaster/>
      </Router>
    </>
    </Fragment>
  );
}

export default App;
