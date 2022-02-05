import React from 'react';
import NumberFormat from '../utils/numberFormat';

const Payment = ({ handleCheckout, prevStep, data, onChange }) => {
  const tax = 0.02;
  const shipping = 10000;
  const totalPayment =
    data.cartTotalAmount * tax + data.cartTotalAmount + shipping;

  return (
    <section className='container mx-auto font-quicksand tracking-wide'>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-3 mt-8 md:mt-16 container shadow-lg rounded-2xl border-2 mb-44'>
        <form className='max-w-xl col-span-2  p-10'>
          <div className=''>
            <label
              className='block font-medium text-dark-primary'
              htmlFor='fullName'
            >
              Bank From
            </label>
            <input
              className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
              id='bankFrom'
              name='bankFrom'
              type='text'
              required
              placeholder='bankFrom'
              aria-label='bankFrom'
              onChange={onChange}
            />
          </div>
          <div className='mt-2'>
            <label
              className='block font-medium text-dark-primary'
              htmlFor='accountHolder'
            >
              Account Holder
            </label>
            <input
              className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
              id='accountHolder'
              name='accountHolder'
              type='email'
              required
              placeholder='accountHolder'
              aria-label='accountHolder'
              onChange={onChange}
            />
          </div>
        </form>

        <div
          className='bg-dark-primary font-normal text-white p-8 h-full rounded-2xl flex flex-col justify-evenly'
          style={{ minHeight: 400 }}
        >
          <h5 className='font-bold text-xl md:text-3xl mb-2'>Summary Order</h5>
          <div className='flex justify-between items-center'>
            <p>Subtotal</p>
            <span>{NumberFormat(data.cartTotalAmount)}</span>
          </div>
          <div className='flex justify-between items-center'>
            <p>Shipping</p>
            <span>{NumberFormat(shipping)}</span>
          </div>
          <div className='flex justify-between items-center'>
            <p>Tax</p>
            <span>2%</span>
          </div>
          <hr />
          <div className='flex justify-between items-center'>
            <p>Total Pay</p>
            <span>{NumberFormat(totalPayment)}</span>
          </div>
          <button
            className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary hover:text-white text-dark-secondary rounded-full py-3 mt-10 justify-self-end px-12 font-semibold'
            onClick={handleCheckout}
          >
            Make Order
          </button>
          <button
            className='hover:bg-cta-bg transition-all ease-in duration-0 hover:duration-500 bg-gray-300  text-dark-primary rounded-full py-3 px-12 mt-3  font-bold'
            onClick={prevStep}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
