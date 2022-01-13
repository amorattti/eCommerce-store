import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth';
import { getListOrders } from './apiAdmin';

const Orders = () => {
  const [orders, setOrders] = useState([])

  const { user, token } = isAuthenticated()

  const listOrders = async () => {
    const list = await getListOrders(user._id, token)
    setOrders(list)
  }

  useEffect(() => {
    listOrders()
  }, [])

  console.log(orders, 'Orders')
  return (
    <div>
      HI
    </div>
  )
}

export default Orders
