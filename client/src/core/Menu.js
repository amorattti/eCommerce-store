import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from '../hoc/withRouter'

const isActive = (location, path) => {
  if (location.pathname === path) {
    return { color: '#e58900' }
  } else {
    return { color: '#ffffff' }
  }
}

const Menu = (props) => {
  console.log(props)
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link
            style={isActive(props.location, '/')}
            className="nav-link "
            to={`/`}
          >Home</Link>
        </li>
        <li className="nav-item">
          <Link
            style={isActive(props.location, '/signin')}
            className="nav-link"
            to={`/signin`}
          >Sign in</Link>
        </li>
        <li className="nav-item">
          <Link
            style={isActive(props.location, '/signup')}
            className="nav-link"
            to={`/signup`}
          >Sign up</Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Menu)
