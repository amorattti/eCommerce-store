import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../../auth'
import { fetchOrdersStatus, getListOrders } from '../apiAdmin'
import Moment from 'react-moment'
import Layout from '../../hoc/Layout'
import * as S from './style'
import Select from 'react-select'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '360px'

  },
};

Modal.setAppElement('#root');

const Orders = () => {
  let subtitle;
  const [orders, setOrders] = useState([])
  const [productsOfOrder, setProductsOfOrder] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ordersStatus, setOrderStatus] = useState([])

  const { user, token } = isAuthenticated()

  const listOrders = async () => {
    const list = await getListOrders(user._id, token)
    setOrders(list)
  }

  const getStatusOrders = async () => {
    const statusArray = await fetchOrdersStatus(user._id, token)
    // create template for react-select
    const newStatusArray = []

    if (statusArray.length > 0) {
      statusArray.forEach((status) => {
        let obj = {}
        obj.value = status
        obj.label = status
        newStatusArray.push(obj)
      })
    }
    setOrderStatus(newStatusArray)
  }

  console.log(ordersStatus, 'newStatusArray')

  useEffect(() => {
    getStatusOrders()
    listOrders()
  }, [])

  const handleSelectChange = (e, id) => {
    console.log('e, id', e, id)
  }

  /*--modal ---*/
  const openModal = (productss) => {
    setIsOpen(true);
    setProductsOfOrder(productss)
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#000000';
  }

  const closeModal = () => {
    setIsOpen(false);
    setProductsOfOrder([])
  }
  /*-----*/

  return (
    <Layout>
      <div>
        <h2>Orders list</h2>
        <div>
          <S.TableStyled>
            <S.THeadStyled>
              <S.TRStyled>
                <S.THStyled>Date</S.THStyled>
                <S.THStyled>Transaction ID</S.THStyled>
                <S.THStyled>Status</S.THStyled>
                <S.THStyled>Delivery Address</S.THStyled>
                <S.THStyled>Amount</S.THStyled>
                <S.THStyled></S.THStyled>
              </S.TRStyled>
            </S.THeadStyled>
            <S.TBodyStyled>
              {orders.length > 0 && orders.map((order) => {
                return (
                  <S.TRStyled key={order._id}>
                    <S.TDstyled>
                      <Moment format="YYYY-MM-DD HH:mm" withTitle>
                        {order.createdAt}
                      </Moment>
                    </S.TDstyled>
                    <S.TDstyled>{order.transaction_id}</S.TDstyled>
                    <S.TDstyled>
                      <Select
                        options={ordersStatus}
                        onChange={value => handleSelectChange(value, order._id)}
                        defaultValue={{ label: order.status, value: order.status }}
                      />
                    </S.TDstyled>
                    <S.TDstyled>{order.address}</S.TDstyled>
                    <S.TDstyled>{order.amount}$</S.TDstyled>
                    <S.TDstyled>
                      <S.ButtonDetails onClick={() => openModal(order.products)}>Details</S.ButtonDetails>
                    </S.TDstyled>
                  </S.TRStyled>
                )
              })}
            </S.TBodyStyled>
          </S.TableStyled>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.ModalBody>
          <h5 ref={(_subtitle) => (subtitle = _subtitle)}>Products list</h5>
          <S.CloseButton onClick={closeModal} />

          <S.TableStyled >
            <S.THeadStyled>
              <S.TRStyled>
                <S.THStyled>Name</S.THStyled>
                <S.THStyled>Count</S.THStyled>
                <S.THStyled>Price</S.THStyled>
              </S.TRStyled>
            </S.THeadStyled>
            <S.TBodyStyled>
              {productsOfOrder.length > 0 && productsOfOrder.map(order => (
                <S.TRStyled key={order._id}>
                  <S.TDstyled>{order.name}</S.TDstyled>
                  <S.TDstyled>{order.count}</S.TDstyled>
                  <S.TDstyled>{order.price * order.count}$ </S.TDstyled>
                </S.TRStyled>

              ))}
            </S.TBodyStyled>
          </S.TableStyled>
        </S.ModalBody>
      </Modal>
      
    </Layout >
  )
}

export default Orders
