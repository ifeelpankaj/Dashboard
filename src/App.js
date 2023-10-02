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
import Orders from './Components/Orders/Orders';
import ProcessOrder from './Components/Orders/ProcessOrder';
import Media from './Components/Media/Media';


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
          
          {/* Order Conner */}
          <Route exact path="/orders" element={<Orders/>} />
          <Route exact path="/order/:id" element={<ProcessOrder/>} />

          {/* Media Conner */}
          <Route exact path="/media" element={<Media/>} />








          
        </Routes>
        <Toaster/>
      </Router>
    </>
    </Fragment>
  );
}

export default App;
