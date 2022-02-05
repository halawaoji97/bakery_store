import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Payment from './components/Payment.js';
import Checkout from './pages/Checkout';
import Order from './components/Order';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer bodyClassName='text-sm' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<DetailProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
