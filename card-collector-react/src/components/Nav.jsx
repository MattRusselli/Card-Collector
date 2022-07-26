import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <div>
        <Link to="/collections">Collections</Link>
        <Link to="/sets">Sets</Link>
      </div>
    </nav>
  )
}

export default Nav
