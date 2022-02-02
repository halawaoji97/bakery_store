import React from 'react';
import { useNavigate } from 'react-router-dom';
import NumberFormat from '../utils/numberFormat';

const CheckoutInformation = ({
  handleCheckout,
  customerInformatin,
  onChange,
}) => {
  const navigate = useNavigate();
  const handlePayment = (e) => {
    e.preventDefault();
    navigate('/payment', { data: customerInformatin });
  };
  console.log(customerInformatin);
  return (
    <section className='container mx-auto font-quicksand tracking-wide'>
      <h3 className='font-bold text-3xl md:text-4xl text-dark-primary text-center mt-20 md:mt-40'>
        Checkout Information
      </h3>
      <p className='text-dark-secondary text-center'>
        Please fill the form below
      </p>

      <div className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-3 mt-8 md:mt-16 container shadow-lg rounded-2xl border-2 mb-44'>
        <form className='max-w-xl col-span-2 m-4 p-10'>
          <div className=''>
            <label className='block text-sm text-gray-00' htmlFor='fullName'>
              Full Name
            </label>
            <input
              className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
              id='fullName'
              name='fullName'
              type='text'
              required
              placeholder='Your Full Name'
              aria-label='Full Name'
              onChange={onChange}
            />
          </div>
          <div className='mt-2'>
            <label className='block text-sm text-gray-600' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full px-5  py-4 text-gray-700 bg-gray-200 rounded'
              id='email'
              name='email'
              type='email'
              required
              placeholder='Your Email'
              aria-label='Email'
              onChange={onChange}
            />
          </div>
          <div className='mt-2'>
            <label className=' block text-sm text-gray-600' htmlFor='street'>
              Street
            </label>
            <input
              className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
              id='street'
              name='street'
              type='text'
              required=''
              placeholder='Street'
              aria-label='Street'
              onChange={onChange}
            />
          </div>
          <div className='mt-2'>
            <label className=' text-sm block text-gray-600' htmlFor='city'>
              City
            </label>
            <input
              className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
              id='city'
              name='city'
              type='text'
              required
              placeholder='City'
              aria-label='City'
              onChange={onChange}
            />
          </div>
          <div className='inline-block mt-2 w-1/2 pr-1'>
            <label className=' block text-sm text-gray-600' htmlFor='country'>
              Country
            </label>
            <input
              className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
              id='country'
              name='country'
              type='text'
              required
              placeholder='Country'
              aria-label='Country'
              onChange={onChange}
            />
          </div>
          <div className='inline-block mt-2 -mx-1 pl-1 w-1/2'>
            <label className=' block text-sm text-gray-600' htmlFor='zip'>
              Zip
            </label>
            <input
              className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
              id='zipCode'
              name='zipCode'
              type='text'
              required
              placeholder='Zip Code'
              aria-label='Zip Code'
              onChange={onChange}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='phone'
              className='text-sm text-gray-600 dark:text-gray-400'
            >
              Phone Number
            </label>
            <input
              type='text'
              onChange={onChange}
              name='phone'
              id='phone'
              placeholder='+1 (555) 1234-567'
              required
              className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
            >
              Your Message
            </label>

            <textarea
              rows='5'
              onChange={onChange}
              name='addressNote'
              id='addressNote'
              placeholder='Your Message'
              className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
              required
            ></textarea>
          </div>
          <div className='mt-4'>
            <button
              className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
              type='submit'
            >
              $3.00
            </button>
          </div>

          <div>
            <button className='mt-16 font-medium text-dark-primary hover:font-semibold hover:underline w-1/2 p-2'>
              Continue shopping
            </button>
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
            onClick={handlePayment}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInformation;
