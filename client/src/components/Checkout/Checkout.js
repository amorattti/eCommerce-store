import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../auth/index'
import { getBraintreeToken, processPayment } from '../../core/apiCore'
import Button from '../Button'
import DropIn from "braintree-web-drop-in-react";
import Alert from '../Alert'

const Checkout = ({ products }) => {
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: '',
    address: '',
    instance: {}
  })

  const userId = isAuthenticated() && isAuthenticated().user._id
  const userToken = isAuthenticated() && isAuthenticated().token

  const getTokenClient = async (userId, userToken) => {
    try {
      const { clientToken } = await getBraintreeToken(userId, userToken)
      setData({ ...data, clientToken: clientToken })
    } catch (error) {
      setData({ ...data, error: error })
    }
  }

  useEffect(() => {
    getTokenClient(userId, userToken)
  }, [])

  const getTotal = (products) => {
    return products.reduce((currentValue, nextValue) => {
      const result = currentValue + nextValue.count * nextValue.price
      return ParseFloat(result, 2) // parse float with two decimal places
    }, 0)
  }


  const ParseFloat = (str, val) => {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str);
  }

  console.log('data State:  checkout component', data)

  const showDropIn = () => {
    if (!data.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <DropIn
            options={{ authorization: data.clientToken }}
            onInstance={(instance) => (data.instance = instance)}
          />
          <button onClick={buy}>Pay</button>
        </div>
      );
    }
  }

  const buy = async () => {
    const { nonce } = await data.instance.requestPaymentMethod();

    const paymentData = {
      paymentMethodNonce: nonce,
      amount: getTotal(products)
    }

    const response = await processPayment(userId, userToken, paymentData)
    setData({ ...data, success: response.success })
    /*--Task for later: add alert related to success response--*/
    // empty cart
    // create order
    console.log(response, 'paymant Data')
  }

  const showSuccess = () => (
    <Alert value={data.success} theme="success">
       Thanks! your payment was successful
    </Alert>
  )

  return (
    <div>
      <h5>Total: {getTotal(products)}$</h5>
      {showSuccess()}
      {isAuthenticated() ? (<div> {showDropIn()} </div>) : (
        <Link to="/signin">
          <Button>Sign in to checkout</Button>
        </Link>
      )}
      <hr />
    </div>
  )
}

export default Checkout
