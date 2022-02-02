import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutInformation from '../components/CheckoutInformation';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from '../element/Stepper';
import NumberFormat from '../utils/numberFormat';

// import BookingInformation from '../../components/Checkout/BookingInformation';
// import Payment from '../../components/Checkout/Payment';
// import Completed from '../../components/Checkout/Completed';

const Checkout = () => {
  const navigate = useNavigate();
  const [customerInformatin, setCustomerInformatin] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    bankFrom: '',
    street: '',
    city: new Date(),
    country: '',
    zipCode: '',
    addressNote: '',
  });

  const handleCheckout = (e) => {
    setCustomerInformatin({ ...customerInformatin });
    e.preventDefault();
    navigate('/payment');
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCustomerInformatin({
      ...customerInformatin,
      [name]: value,
    });
  };

  console.log(customerInformatin);

  return (
    <>
      <CheckoutInformation
        onChange={onChange}
        handleCheckout={handleCheckout}
        customerInformatin={customerInformatin}
        setCustomerInformatin={setCustomerInformatin}
      />
    </>
  );
};

export default Checkout;
