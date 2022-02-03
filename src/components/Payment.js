import React from 'react';
import NumberFormat from '../utils/numberFormat';

const Payment = ({ handleCheckout, data, onChange }) => {
  console.log(data);
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
            <span>{NumberFormat(6000)}</span>
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
                  Delivery <span className='text-sm'>(shipping Rp. 10000)</span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className='flex justify-between items-center'>
            <p>Total Pay</p>
            <span>{NumberFormat(6000)}</span>
          </div>
          <button
            className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary hover:text-white text-dark-secondary rounded-full py-3 mt-10 justify-self-end px-12 font-semibold'
            onClick={handleCheckout}
          >
            Make Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
