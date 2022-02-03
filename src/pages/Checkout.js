import React, { useEffect, useState } from 'react';
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
import NumberFormat from '../utils/numberFormat';

const Checkout = () => {
  const navigate = useNavigate();
  const [customerInformation, setCustomerInformation] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    bankFrom: '',
    accountHolder: '',
    street: '',
    city: new Date(),
    country: '',
    zipCode: '',
    addressNote: '',
  });

  const handleCheckout = (e) => {
    setCustomerInformation({ ...customerInformation });
    e.preventDefault();
    navigate('/payment');
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
      content: <Payment data={customerInformation} onChange={onChange} />,
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
            <MainContent data={steps} current={currentStep} />

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

            {currentStep === 'payment' && (
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
                      onClick={nextStep}
                    >
                      Make Order
                    </button>
                  )}
              </Controller>
            )}
            {currentStep === 'completed' && (
              <Controller>
                <Link to='/'>Back to Home</Link>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

export default Checkout;
