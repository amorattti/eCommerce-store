import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../../auth';
import { getListOrders } from '../apiAdmin';
import Layout from '../../hoc/Layout'
import * as S from './style'

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
    <Layout>
      <div>
        <h2>Orders list</h2>
        <div>
          <S.TableStyled>
            <S.THeadStyled>
              <S.TRStyled>
                <S.THStyled>Date</S.THStyled>
                <S.THStyled>Order ID</S.THStyled>
                <S.THStyled>Status</S.THStyled>
                <S.THStyled>Delivery Address</S.THStyled>
                <S.THStyled>Amount</S.THStyled>
                <S.THStyled></S.THStyled>
              </S.TRStyled>
            </S.THeadStyled>
            <S.TBodyStyled>
              <S.TRStyled>
                <S.TDstyled>1976-04-19</S.TDstyled>
                <S.TDstyled>23412ds</S.TDstyled>
                <S.TDstyled>in proccess</S.TDstyled>
                <S.TDstyled>Potok Górny 23-423 Szyszków</S.TDstyled>
                <S.TDstyled>32$</S.TDstyled>
                <S.TDstyled><a href='#'>Details order</a></S.TDstyled>
              </S.TRStyled>
              {/* DROPDOWN COLLAPSE */}
      
             
           
              {/* DROPDOWN COLLAPSE  END*/}


              <S.TRStyled>
                <S.TDstyled>1976-04-19</S.TDstyled>
                <S.TDstyled>23412ds</S.TDstyled>
                <S.TDstyled>in proccess</S.TDstyled>
                <S.TDstyled>Potok Górny 23-423 Szyszków</S.TDstyled>
                <S.TDstyled>32$</S.TDstyled>
                <S.TDstyled><a href='#'>Details order</a></S.TDstyled>
              </S.TRStyled>






            </S.TBodyStyled>
          </S.TableStyled>

        </div>
      </div>
    </Layout>
  )
}

export default Orders
