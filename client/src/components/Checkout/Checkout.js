import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../auth/index'
import { createOrder, getBraintreeToken, processPayment } from '../../core/apiCore'
import { removeItemsCart, getCart } from '../../core/cartHelper'
import Button from '../Button'
import DropIn from "braintree-web-drop-in-react";
import Alert from '../Alert'
import { ButtonPay } from './style'
import Loading from '../Loading'
import { useForm } from "react-hook-form";

import * as S from './style'

const Checkout = ({ products, setItems }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: false,
    address: '',
    instance: {}
  })

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log((data))
    buy(data)
  }

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
    getCart()

  }, [])

  const getTotal = (products) => {
    return products.reduce((currentValue, nextValue) => {
      let result = currentValue + nextValue.count * nextValue.price
      // parse float with two decimal places
      return ParseFloat(result, 2)
    }, 0)
  }

  const ParseFloat = (str, val) => {
    str = Number.isInteger(str) ? str.toFixed(2) : str
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str);
  }

  const buy = async (addressData) => {
    const { nonce } = await data.instance.requestPaymentMethod()

    const { address, city, first_name, last_name, zip } = addressData
    const template = `${first_name} ${last_name} ${address} ${city} ${zip}`

    setLoading(true)

    const paymentData = {
      paymentMethodNonce: nonce,
      amount: getTotal(products)
    }

    const response = await processPayment(userId, userToken, paymentData)
    const createOrderData = {
      products: products,
      transaction_id: response.transaction.id,
      amount: response.transaction.amount,
      address: template
    }

    await createOrder(userId, userToken, createOrderData)

    setData({ ...data, success: response.success })

    if (response.success) {
      removeItemsCart(() => console.log('Transaction Successful'))
      setItems([])
      setLoading(false)
    }
  }

  const showSuccess = () => (
    <Alert value={data.success} theme="success">
      Thanks! your payment was successful
    </Alert>
  )

  const AddresForm = () => (
    <S.AddresForm>
      <h5>Address</h5>
      <form>
        <S.itemForm>
          <input {...register("first_name", { required: true })} placeholder='first name*' />
          <span style={{ color: 'red' }}> {errors.first_name?.type === 'required' && "first name is required"}</span>
        </S.itemForm>
        <S.itemForm>
          <input {...register("last_name", { required: true })} placeholder='last name*' />
          <span style={{ color: 'red' }}> {errors.last_name?.type === 'required' && "last name is required"}</span>
        </S.itemForm>
        <S.itemForm>
          <input {...register("city", { required: true })} placeholder='city*' />
          <span style={{ color: 'red' }}> {errors.city?.type === 'required' && "city is required"}</span>
        </S.itemForm>
        <S.itemForm>
          <input {...register("zip")} placeholder='zip' />
        </S.itemForm>
        <S.itemForm>
          <input {...register("address", { required: true })} placeholder='address*' />
          <span style={{ color: 'red' }}> {errors.address?.type === 'required' && "address is required"}</span>
        </S.itemForm>
      </form>
    </S.AddresForm>
  )

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
          {AddresForm()}
          <DropIn
            options={{
              authorization: data.clientToken,
              paypal: {
                flow: 'vault'
              }
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
          <ButtonPay onClick={handleSubmit(onSubmit)}>Pay</ButtonPay>
        </div>
      )
    }
  }
  
  return (
    <>
      {showSuccess()}
      {getCart() && (
        <S.Summary>
          <h5>Summary</h5>
          <S.Total>
            <div><span>Products</span><span>${`${getTotal(products)}`}</span></div>
            <div><span>Shipping</span><span>Free</span></div>
            <div><span>Total:</span> ${getTotal(products)}</div>
          </S.Total>

          {isAuthenticated() ? (<div> {showDropIn()} </div>) : (
            <Link to="/signin">
              <Button>Sign in to checkout</Button>
            </Link>
          )}
          {loading && <Loading />}
        </S.Summary>
      )}
    </>
  )
}

export default Checkout
