import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutInformation from '../components/CheckoutInformation';
import Completed from '../components/Completed';
import Payment from '../components/Payment';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from '../element/Stepper';
import { createOrder, postOrder } from '../redux/orderAction';
import { addTodo, addTodoAsync } from '../redux/orderSlice';
import { useCreateOrderQuery } from '../redux/productsApi';
import NumberFormat from '../utils/numberFormat';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItemsInLocalStorage = {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
  };

  const cartTotalQty = cartItemsInLocalStorage.cartItems.reduce(
    (acc, item) => acc + item.cartQty,
    0
  );
  const cartTotalAmount = cartItemsInLocalStorage.cartItems.reduce(
    (acc, item) => acc + item.cartQty * item.price,
    0
  );

  const [customerInformation, setCustomerInformation] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    bankFrom: '',
    accountHolder: '',
    street: '',
    city: '',
    country: '',
    zipCode: '',
    addressNote: '',
    deliveryOn: new Date(),
    orderOn: new Date(),
    cartItems: cartItemsInLocalStorage.cartItems,
    cartTotalAmount: cartTotalAmount,
    cartTotalQty: cartTotalQty,
  });

  const handleCheckout = (e) => {
    e.preventDefault();
    setCustomerInformation({ ...customerInformation });
    const order = {
      fullName: customerInformation.fullName,
      email: customerInformation.email,
      addressNote: customerInformation.addressNote,
      deliveryOn: customerInformation.deliveryOn,
      orderOn: customerInformation.orderOn,
      cartItems: customerInformation.cartItems,
      cartTotalAmount: customerInformation.cartTotalAmount,
      cartTotalQty: customerInformation.cartTotalQty,
      phoneNumber: customerInformation.phoneNumber,
      bankFrom: customerInformation.bankFrom,
      accountHolder: customerInformation.accountHolder,
      street: customerInformation.street,
      city: customerInformation.city,
      country: customerInformation.country,
      zipCode: customerInformation.zipCode,
    };
    console.log(order);

    axios
      .post('http://localhost:5000/api/v1/member/order-page', order)
      .then((res) => {
        console.log(res);
      });
    // dispatch(createOrder(order));
    // dispatch(postOrderAsync(order));
    // postOrderAsync(order);
    navigate('/completed');
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCustomerInformation({
      ...customerInformation,
      [name]: value,
    });
  };

  console.log(customerInformation);

  const steps = {
    checkoutInformation: {
      title: 'Checkout Information',
      description: 'Please fill up the blank fields below',
      content: (
        <CheckoutInformation data={customerInformation} onChange={onChange} />
      ),
    },

    payment: {
      title: 'Payment',
      description: 'Kindly follow the instructions below',
      content: (
        <Payment
          data={customerInformation}
          onChange={onChange}
          handleCheckout={handleCheckout}
          prevStep={() => {
            navigate(`/cart`);
          }}
        />
      ),
    },
    completed: {
      title: 'Yay! Completed',
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      <Stepper steps={steps} initialStep='checkoutInformation'>
        {(prevStep, nextStep, currentStep, steps) => (
          <>
            <Numbering
              data={steps}
              current={currentStep}
              style={{ marginBottom: 50 }}
            />

            <Meta data={steps} current={currentStep} />
            <MainContent
              data={steps}
              prevStep={prevStep}
              current={currentStep}
            />

            {currentStep === 'checkoutInformation' && (
              <Controller>
                <Link
                  className='hover:bg-cta-bg transition-all ease-in duration-0 hover:duration-500 bg-gray-300  text-dark-primary rounded-full py-3 px-12  font-bold'
                  to={`/detail}`}
                >
                  Continue Shopping
                </Link>
                {customerInformation.fullName !== '' &&
                  customerInformation.email !== '' &&
                  customerInformation.street !== '' &&
                  customerInformation.city !== '' &&
                  customerInformation.country !== '' &&
                  customerInformation.zipCode !== '' &&
                  customerInformation.phoneNumber !== '' &&
                  customerInformation.addressNote !== '' && (
                    <button
                      className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-semibold'
                      onClick={nextStep}
                    >
                      Choose Payment
                    </button>
                  )}
              </Controller>
            )}

            {/* {currentStep === 'payment' && (
              <Controller>
                <button
                  className='hover:bg-cta-bg transition-all ease-in duration-0 hover:duration-500 bg-gray-300  text-dark-primary rounded-full py-3 px-12  font-bold'
                  onClick={prevStep}
                >
                  Back
                </button>
                {customerInformation.bankFrom !== '' &&
                  customerInformation.accountHolder !== '' && (
                    <button
                      className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-semibold'
                      // onClick={() => handleCheckout({ ...customerInformation })}
                    >
                      Make Order
                    </button>
                  )}
              </Controller>
            )} */}
            {currentStep === 'completed' && (
              <Controller>
                <Link to='/' className='text-center'>
                  Back to Home
                </Link>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

export default Checkout;
