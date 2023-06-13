//Components
import Chicago from "../components/Chicago"
import CustomersSay from "../components/CustomersSay"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Specials from "../components/Specials"

//Images
import Logo from "../img/Logo.svg"
import footer_image from "../img/restaurant chef B.jpg"
//Routing
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
      <div className="wrapper">
        <footer className="footer content">
          <img src={footer_image} />
          <Nav className="navigation">
            <h3 className="section-title">
              Doormat
              <br /> Navigation
            </h3>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </Nav>
          <Nav className="navigation">
            <h3 className="section-title">Contact</h3>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </Nav>
          <Nav className="navigation">
            <h3 className="section-title">Social Media Links</h3>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </Nav>
        </footer>
      </div>
    </>
  )
}
export default Home
