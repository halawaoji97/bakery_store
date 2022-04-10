import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutInformation from '../components/CheckoutInformation'

const Checkout = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const cartItemsInLocalStorage = {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    cartTotalQty: 0,
    cartTotalAmount: 0
  }

  const cartTotalQty = cartItemsInLocalStorage.cartItems.reduce(
    (acc, item) => acc + item.cartQty,
    0
  )
  const cartTotalAmount = cartItemsInLocalStorage.cartItems.reduce(
    (acc, item) => acc + item.cartQty * item.price,
    0
  )

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
    cartTotalQty: cartTotalQty
  })

  const handleCheckout = async () => {
    try {
      setCustomerInformation({ ...customerInformation })
      const order = await {
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
        zipCode: customerInformation.zipCode
      }

      navigate('/payment', {
        state: {
          order
        }
      })
    } catch (error) {
      setError(error)
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setCustomerInformation({
      ...customerInformation,
      [name]: value
    })
  }

  // const steps = {
  //   checkoutInformation: {
  //     title: 'Checkout Information',
  //     description: 'Please fill up the blank fields below',
  //     content: (
  //       <CheckoutInformation
  //         data={customerInformation}
  //         onChange={onChange}
  //         nextStep={(nextStep) => handleCheckout(nextStep)}
  //       />
  //     )
  //   },

  //   payment: {
  //     title: 'Payment',
  //     description: 'Kindly follow the instructions below',
  //     content: (
  //       <Payment
  //         data={customerInformation}
  //         onChange={onChange}
  //         handleCheckout={handleCheckout}
  //         prevStep={() => {
  //           navigate(`/cart`)
  //         }}
  //       />
  //     )
  //   },
  //   completed: {
  //     title: 'Yay! Completed',
  //     description: null,
  //     content: <Completed />
  //   }
  // }

  return (
    <>
      <CheckoutInformation
        data={customerInformation}
        onChange={onChange}
        handleCheckout={handleCheckout}
        error={error}
      />
      {/* <Stepper steps={steps} initialStep='checkoutInformation'>
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
              nextStep={nextStep}
              current={currentStep}
            />
          </>
        )}
      </Stepper> */}
    </>
  )
}

export default Checkout
