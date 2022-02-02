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
import NumberFormat from '../utils/numberFormat';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const navigate = useNavigate();

  const onBackClickToHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const checkoutInformation = (e) => {
    e.preventDefault();
    navigate('/checkout');
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

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

  const tax = 0.02;
  const subTotal = cart.cartTotalAmount;
  const grandTotal = cart.cartTotalAmount * tax + subTotal;

  return (
    <section className='container mx-auto font-quicksand tracking-wide'>
      <h3 className='font-bold text-3xl md:text-4xl text-dark-primary text-center mt-20 md:mt-40'>
        Your Cart
      </h3>
      {cart.cartItems.length === 0 ? (
        <div style={{ minHeight: 500 }} className='text-center'>
          <p className='text-dark-secondary font-medium'>
            Opssss,,, Your cart is currently empty
          </p>
          <button
            onClick={onBackClickToHome}
            className='hover:bg-cta-bg transition-all ease-in duration-0 hover:duration-500 bg-gray-300  text-dark-primary rounded-full py-3 px-12  font-bold my-8'
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <p className='text-dark-secondary text-center'>
            Make sure your order is paid in full
          </p>
          <div className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-3 mt-8 md:mt-16 container shadow-lg rounded-2xl border-2 mb-44'>
            <div className='p-8 col-span-2 flex  flex-col'>
              {cart.cartItems?.map((product, index) => (
                <div
                  className='flex justify-between items-center mt-6'
                  key={index}
                >
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
                  <div className='w-24'>
                    {NumberFormat(product.cartQty * product.price)}
                  </div>
                  <hr />
                </div>
              ))}
              <button
                onClick={onBackClickToHome}
                className='mt-16 font-medium text-dark-primary hover:font-semibold hover:underline w-1/4 p-2'
              >
                Continue shopping
              </button>
            </div>
            <div
              className='bg-dark-primary font-normal text-white p-8 h-full rounded-2xl flex flex-col justify-evenly'
              style={{ minHeight: 400 }}
            >
              <h5 className='font-bold text-xl md:text-3xl mb-2'>
                Summary Order
              </h5>
              <div className='flex justify-between items-center'>
                <p>Subtotal</p>
                <span>{NumberFormat(cart.cartTotalAmount)}</span>
              </div>
              <div className='flex justify-between items-center'>
                <p>Shipping</p>
                <span>0</span>
              </div>
              <div className='flex justify-between items-center'>
                <p>Tax</p>
                <span>2%</span>
              </div>
              <div className='flex justify-start my-4'>
                <div>
                  Choose delivery
                  <div className='form-check'>
                    <input
                      className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white bg-gradient-to-r checked:bg-red-velvet focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                      type='radio'
                      name='shippingOption'
                      id='pickup'
                    />
                    <label
                      className='form-check-label inline-block text-white'
                      htmlFor='pickup'
                    >
                      Pickup <span className='text-sm'>(shipping free)</span>
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white bg-gradient-to-r checked:bg-red-velvet focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                      type='radio'
                      name='shippingOption'
                      id='delivery'
                    />
                    <label
                      className='form-check-label text-white inline-block '
                      htmlFor='delivery'
                    >
                      Delivery{' '}
                      <span className='text-sm'>(shipping Rp. 10000)</span>
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className='flex justify-between items-center'>
                <p>Total Pay</p>
                <span>{NumberFormat(grandTotal)}</span>
              </div>
              <button
                className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary hover:text-white text-dark-secondary rounded-full py-3 mt-10 justify-self-end px-12 font-semibold'
                onClick={checkoutInformation}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCart;
