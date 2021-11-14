import PropTypes from "prop-types"
import React from 'react'
import styled from "styled-components"

const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px 0;

  h2 {
   font-size: 1.5em;
  }
`

const Layout = ({
  title = '',
  description = '',
  className,
  children
}) => {
  return (
    <>
      <Jumbotron position>
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </Jumbotron>
      <div className={className}>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Layout


