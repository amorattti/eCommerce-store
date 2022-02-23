import React from 'react'
import { useState } from 'react'
import { API } from '../../config'
import { StyledImg } from './style'

const ShowImage = ({ item, url = "product", width = `100%`, height = "260px" }) => {
  const changeAlt = () => {
    return !item.name ? 'Photo not found' : ''
  }

  return (
    <>
      <StyledImg width={width} height={height}>
        <img
          src={`${API}/${url}/photo/${item._id}`}
          alt={changeAlt() }
        />
      </StyledImg>
    </>
  )
}

export default ShowImage
