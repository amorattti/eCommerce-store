import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '..'
import Button from '../Button'

const NotFoundContainer = styled.div`
  margin-top: 80px;
  text-align: center;

  h1 {
    font-size: 4rem;
  }
`
const NotFound404 = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <NotFoundContainer>
        <h1>404</h1>
        <h5> OOPS! Page not found</h5>
        <p>The link you followed may be broken, or the page may have been removed</p>
        <Button onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </NotFoundContainer>
    </Wrapper>
  )
}

export default NotFound404
