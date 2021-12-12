import React from 'react'
import { API } from '../../config'

const ShowImage = ({ item, url }) => {
  return (
    <>
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        style={{width: '100%', height:'260px'}}
      />
    </>
  )
}

export default ShowImage
