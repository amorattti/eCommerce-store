import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../auth/index'
import Button from '../Button'

const Checkout = ({ products }) => {

  const totalSum = () => {
    return products.reduce((currentValue, nextValue) => {
      console.log(currentValue)
      return currentValue + nextValue.count * nextValue.price
    }, 0)
  }
  console.log(isAuthenticated() )

  return (
    <div>
      <h5>Total: {totalSum()}$</h5>

      {isAuthenticated() ? (<Button>checkout</Button>) : (
        <Link to="/signin">
          <Button>Sign in to checkout</Button>
        </Link>
      )}
      <hr />
    </div>
  )
}

export default Checkout
