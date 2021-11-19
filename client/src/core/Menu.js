// import React from 'react'
// import { Link } from 'react-router-dom'
// import { withRouter } from '../hoc/withRouter'

// const isActive = (location, path) => {
//   if (location.pathname === path) {
//     // return { color: '#fc7c41', fontSize: '1.5em' }
//     return { color: '#2f8bfd', fontSize: '1.5em', fontWeight: '500' }
//   } else {
//     return { color: 'black', fontSize: '1.5em', fontWeight: '500'  }
//   }
// }

// const Menu = (props) => {
//   return (
//     <div>
//       <ul className="nav tab-pane p-2">
//         <li className="nav-item">
//           <Link
//             style={isActive(props.location, '/')}
//             className="nav-link "
//             to={`/`}
//           >Home</Link>
//         </li>
//         {/* <li className="nav-item">
//           <Link
//             style={isActive(props.location, '/signin')}
//             className="nav-link"
//             to={`/signin`}
//           >Sign in</Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             style={isActive(props.location, '/signup')}
//             className="nav-link"
//             to={`/signup`}
//           >Sign up</Link>
//         </li> */}
//       </ul>
//     </div>
//   )
// }

// export default withRouter(Menu)
