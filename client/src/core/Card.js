import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'

const Card = ({ product }) => {
  return (
    <div>
      <div className="card-">
        
        <div className="card-b">
          <ShowImage url="product" item={product}/>
      
          <p>{product.price}</p>
          {/* <Link to="/">
            <button>View Product</button>
          </Link>
          <button>Add to card</button> */}
        </div>
      </div>
    </div>
  )
}

export default Card
