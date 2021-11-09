import PropTypes from "prop-types"
import React from 'react'

const Layout = ({
  title = 'Title',
  description = 'description',
  className,
  children
}) => {
  return (
    <div>
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Layout


