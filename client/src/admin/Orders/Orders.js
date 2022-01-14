import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../../auth'
import { getListOrders } from '../apiAdmin'
import Moment from 'react-moment'
import Layout from '../../hoc/Layout'
import * as S from './style'

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

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


  const { user, token } = isAuthenticated()

  const listOrders = async () => {
    const list = await getListOrders(user._id, token)
    setOrders(list)
  }

  useEffect(() => {
    listOrders()
  }, [])

  console.log(orders, 'Orders')
  console.log('RFRRRR', productsOfOrder)
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
                  <>
                    <S.TRStyled>
                      <S.TDstyled>
                      <Moment format="D MMM YYYY" withTitle>
                        {order.createdAt}
                        </Moment>
                        </S.TDstyled>
                      <S.TDstyled>{order.transaction_id}</S.TDstyled>
                      <S.TDstyled>{order.status}</S.TDstyled>
                      <S.TDstyled>{order.address}</S.TDstyled>
                      <S.TDstyled>{order.amount}$</S.TDstyled>
                      <S.TDstyled>
                        <button onClick={() => openModal(order.products)}>Open Modal</button>
                      </S.TDstyled>
                    </S.TRStyled>
                  </>
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
          <S.CloseButton onClick={closeModal}>close</S.CloseButton>

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
                <S.TRStyled>
                  <S.TDstyled>{order.name}</S.TDstyled>
                  <S.TDstyled>{order.count}</S.TDstyled>
                  <S.TDstyled>{order.price * order.count}$ </S.TDstyled>
                </S.TRStyled>

              ))}
            </S.TBodyStyled>

          </S.TableStyled>
          {/* <S.Summary>
          <span>Total:</span>
          <span>300$</span>
        </S.Summary> */}

        </S.ModalBody>


      </Modal>
    </Layout>
  )
}

export default Orders
