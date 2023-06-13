import { Outlet } from "react-router-dom"

import Logo from "../../img/Logo.svg"
import Nav from "../Nav"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="fixed-wrapper shadow">
        <header className="content header-primary">
          <img src={Logo} />
          <Nav className="navigation navigation-primary">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reservations"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/order-online"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </Nav>
        </header>
      </div>
      <Outlet />
    </>
  )
}

export default Header
