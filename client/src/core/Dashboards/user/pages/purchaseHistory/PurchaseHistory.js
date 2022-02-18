import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../../../../../auth'

import {
  MainCard, CardHeader,
  ListGroup, ListGroupItem,
  DetailsProducts, Photo, HeadSection, BodySection, DetailProduct,
  DetailInfo, Count, Name
} from './style'
import { fetchPurchaseHistory } from '../../../../apiCore'
import ShowImage from '../../../../../components/ShowImage'
import Moment from 'react-moment';


const PurchaseHistory = () => {
  const [history, setHistory] = useState([])

  const { user: { _id, name, email, role }, token } = isAuthenticated()

  const initHistory = async () => {
    const historyOrders = await fetchPurchaseHistory(_id, token)
    setHistory(historyOrders)
  }

  useEffect(() => {
    initHistory()
  }, [])

  return (
    <MainCard>
      <CardHeader>
        My shopping
      </CardHeader>
      <ListGroup>

        {history && history.map((order) => (
          <ListGroupItem key={order._id}>
            <HeadSection>
              <span>Status: {order.status}</span>
              <span>
                <Moment format="YYYY/MM/DD">
                  {order.createdAt}
                </Moment>
              </span>
            </HeadSection>
            <BodySection>
              {order.products.map((product) => (
                <DetailProduct key={product._id}>
                  <Photo>
                    <ShowImage height='100%' width='100%' item={product} />
                  </Photo>
                  <DetailInfo>
                    <div>
                      <Name to={`/product/${product._id}`}>
                        {product.name}
                      </Name>
                    </div>
                    <Count>
                      <div>
                        <span>{product.count} × ${product.price}</span>
                      </div>
                      <div>
                        <span>${product.price}</span>
                      </div>
                    </Count>
                  </DetailInfo>

                </DetailProduct>

              ))}
              <DetailsProducts>
                {/* <span>Address:
                  <p>
                    {order.address}
                  </p>
                </span> */}
                <span>Total amount</span>
                <span> {order.amount}$</span>
              </DetailsProducts>
            </BodySection>
          </ListGroupItem>
        ))}

      </ListGroup>
    </MainCard>
  )
}
export default PurchaseHistory