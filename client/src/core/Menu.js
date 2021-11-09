import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from '../hoc/withRouter'

const isActive = (location, path) => {
  if (location.pathname === path) {
    return { color: '#fc7c41' }
  } else {
    return { color: '#ffffff' }
  }
}

const Menu = (props) => {
  return (
    <div>
      <ul className="nav tab-pane bg-dark p-2">
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
