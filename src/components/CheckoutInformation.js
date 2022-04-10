import React from 'react'
import { Link } from 'react-router-dom'
import NumberFormat from '../utils/numberFormat'

const CheckoutInformation = ({ handleCheckout, nextStep, data, onChange }) => {
  console.log(data)
  console.log(nextStep)
  const tax = 0.02
  const shipping = 10000
  const totalPayment =
    data.cartTotalAmount * tax + data.cartTotalAmount + shipping

  return (
    <section className='container mx-auto font-quicksand tracking-wide'>
      <div className=''>
        <form
          className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-3 mt-8 md:mt-16 container shadow-lg rounded-2xl border-2 mb-44'
          method='post'
        >
          <div className='max-w-xl col-span-2 p-8'>
            <div className=''>
              <label
                className='block font-medium text-dark-primary'
                htmlFor='fullName'
              >
                Full Name
              </label>
              <input
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
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
              <label
                className='block font-medium text-dark-primary'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
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
              <label
                className='block font-medium text-dark-primary'
                htmlFor='street'
              >
                Street
              </label>
              <input
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
                id='street'
                name='street'
                type='text'
                required
                placeholder='Street'
                aria-label='Street'
                onChange={onChange}
              />
            </div>
            <div className='mt-2'>
              <label
                className='block font-medium text-dark-primary'
                htmlFor='city'
              >
                City
              </label>
              <input
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
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
              <label
                className='block font-medium text-dark-primary'
                htmlFor='country'
              >
                Country
              </label>
              <input
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
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
              <label
                className='block font-medium text-dark-primary'
                htmlFor='zip'
              >
                Zip
              </label>
              <input
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
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
                htmlFor='phoneNumber'
                className='block font-medium text-dark-primary'
              >
                Phone Number
              </label>
              <input
                type='text'
                onChange={onChange}
                name='phoneNumber'
                id='phoneNumber'
                placeholder='+1 (555) 1234-567'
                required
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='addressNote'
                className='block font-medium text-dark-primary'
              >
                Your Address Note
              </label>
              <input
                type='text'
                onChange={onChange}
                name='addressNote'
                id='addressNote'
                placeholder='...'
                required
                className='w-full px-5 font-medium py-3 text-dark-secondary bg-gray-200 rounded-lg my-2'
              />
            </div>
          </div>
          <div
            className='bg-dark-primary font-normal text-white p-8 md:h-full rounded-2xl flex flex-col justify-evenly'
            style={{ maxHeight: 600 }}
          >
            <h5 className='font-bold text-xl md:text-3xl mb-2'>
              Summary Order
            </h5>
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
            <div className='flex h-44 justify-around flex-col'>
              <button
                className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-semibold'
                onClick={() => handleCheckout()}
              >
                Choose Payment
              </button>
              <Link
                className='hover:bg-cta-bg transition-all ease-in duration-0 hover:duration-500 bg-gray-300  text-dark-primary rounded-full text-center py-3 px-12  font-bold'
                to='/cart'
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CheckoutInformation
