import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from '..'
import Button from '../Button'

const NotFound404 = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <h1>Page not found</h1>
      <p>The link you followed may be broken, or the page may have been removed</p>
      <Button onClick={() => navigate('../', {replace: true})}>
        go back
      </Button>

    </Wrapper>
  )
}

export default NotFound404
