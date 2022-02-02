import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer bodyClassName='text-sm' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<DetailProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
