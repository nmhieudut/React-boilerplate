import { Link } from 'react-router-dom'
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="flex items-center">
      <Link to="#" className="header-logo mr-24">
        Logo
      </Link>
      <div className="flex justify-center items-center ml-auto">
        <Link className="menu-item" to="/home">
          Home
        </Link>
        <Link className="menu-item ml-20" to="/">
          Blog
        </Link>
        <Link className="menu-item ml-20" to="/">
          Docs
        </Link>
        <Link className="menu-item ml-20" to="/">
          Contact
        </Link>
      </div>
      <div className="auth-menu">
        <Link className="btn btn-transparent" to="#">
          Log In
        </Link>
        <Link className="btn btn-primary" to="#">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
