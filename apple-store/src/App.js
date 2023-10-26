import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import ProductDetails from './ProductDetails';
import Bag from './Bag'; 
import { BagProvider } from './BagContext'; 
import Checkout from './Checkout';
import ChangeUserInfo from './ChangeUserInfo';
import ChangePaymentInfo from './ChangePaymentInfo';
import OrderSuccess from './OrderSuccess';

function App() {
  return (
    <BagProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Bag" element={<Bag/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/ChangeUserInfo" element={<ChangeUserInfo/>}/>
        <Route path="/ChangePaymentInfo" element={<ChangePaymentInfo/>}/>
        <Route path="/OrderSuccess" element={<OrderSuccess/>}/>
        </Routes>
      </Router>
    </BagProvider>
  );
}

export default App;
