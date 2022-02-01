import React from 'react';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseCart,
  getTotalAmount,
  removeFromCart,
} from '../redux/cartSlice';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-2 md:mt-36 container p-8 md:p-0 md:py-16 shadow-lg rounded-2xl border-2 mx-auto mb-44'>
        <div className='p-8 md:p-16'>
          <h3 className='font-bold text-xl md:text-3xl tracking-wide text-dark-primary'>
            Your Cart
          </h3>
          {cart.cartItems?.map((product, index) => (
            <div className='flex justify-between items-center'>
              <div className='h-16 w-16 rounded-xl'>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className='img-contain img-fluid'
                />
              </div>
              <div className='col col-lg-auto'>
                <h6 className='name'>Cake</h6>
              </div>
              <div className='flex justify-around'>
                <button onClick={() => handleDecreaseCart(product)}>
                  <AiOutlineMinus size={32} />
                </button>
                <input
                  type='text'
                  value={product.cartQty}
                  readOnly
                  className='text-center'
                />
                <button onClick={() => handleAddToCart(product)}>
                  <AiOutlinePlus size={32} />
                </button>
              </div>
              <button>
                <AiOutlineDelete
                  onClick={() => handleRemoveFromCart(product)}
                  size={32}
                />
              </button>
              <hr />
            </div>
          ))}
        </div>
        <div className='bg-dark-primary text-white p-8 h-full'>
          <h5 className='font-bold text-xl md:text-3xl tracking-wide'>
            Summary Order
          </h5>
          <div className='subtotal'>
            <p>Subtotal</p>
            <span>Rp. {cart.cartTotalAmount}</span>
          </div>
          <div className='shipping'>
            <p>Shipping</p>
            <span>0</span>
          </div>
          <div className='tax'>
            <p>Tax</p>
            <span>10%</span>
          </div>
          <hr />
          <div className='mb-12'>
            <p>Total Pay</p>
            <span>Rp. {cart.total}</span>
          </div>
          <button className='bg-yellow-primary transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-secondary  text-dark-primary  rounded-full py-3 px-12  font-bold'>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
