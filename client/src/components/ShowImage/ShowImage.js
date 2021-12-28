import React from 'react'
import { API } from '../../config'
import { StyledImg } from './style'

const ShowImage = ({ item, url, width=`100%`, height="260px" }) => {
  return (
    <>
      <StyledImg width={width} height={height}>
        <img
          src={`${API}/${url}/photo/${item._id}`}
          alt={item.name}
        />
      </StyledImg>
    </>
  )
}

export default ShowImage
