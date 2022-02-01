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
    <section className='container mx-auto font-quicksand tracking-wide'>
      <h3 className='font-bold text-3xl md:text-4xl text-dark-primary text-center mt-20 md:mt-40'>
        Your Cart
      </h3>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-3 mt-8 md:mt-16 container shadow-lg rounded-2xl border-2 mb-44'>
        <div className='p-8 col-span-2'>
          {cart.cartItems?.map((product, index) => (
            <div className='flex justify-between items-center mt-6' key={index}>
              <div className='h-16 w-16 rounded-full border-2 border-grey-secondary flex place-content-center'>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className='object-contain rounded-full p-1 h-full w-full'
                />
              </div>
              <div className='w-24 flex justify-between items-center'>
                <h6 className='font-semibold text-dark-primary'>
                  {product.name}
                </h6>
              </div>

              <div className='flex justify-between w-24 border-grey-secondary  h-10'>
                <button
                  onClick={() => handleDecreaseCart(product)}
                  className='bg-grey-secondary text-dark-primary rounded-lg'
                >
                  <AiOutlineMinus size={24} />
                </button>
                <input
                  type='text'
                  value={product.cartQty}
                  readOnly
                  className='text-center w-8'
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className='bg-grey-secondary text-dark-primary rounded-lg'
                >
                  <AiOutlinePlus size={24} />
                </button>
              </div>
              <button>
                <AiOutlineDelete
                  onClick={() => handleRemoveFromCart(product)}
                  className='hover:text-red-velvet'
                  size={24}
                />
              </button>
              <div className='w-24'>Rp. {product.cartQty * product.price}</div>
              <hr />
            </div>
          ))}
        </div>
        <div className='bg-dark-primary text-white p-8 h-full rounded-2xl'>
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
          <button className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-semibold'>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
