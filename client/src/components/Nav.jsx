import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <header>
        <ul>
          <li className="navlinks">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navlinks">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
    </nav>
  )
}

export default Nav
