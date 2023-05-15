//Components
import Header from "./components/Header"
import Nav from "./components/Nav"

//Images
import Logo from "./img/Logo.svg"
import footer_image from "./img/restaurant chef B.jpg"
//CSS
import "./App.css"

function App() {
  return (
    <>
      <Header className="header-primary">
        <img src={Logo} />
        <Nav className="navigation navigation-primary">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </Nav>
      </Header>
      {/* <Main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </Main> */}
      {/* <Footer> */}
      <footer className="footer">
        <img src={footer_image}/>
        <Nav className="navigation">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </Nav>
        <Nav className="navigation">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
          </ul>
        </Nav>
        <Nav className="navigation">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
          </ul>
        </Nav>
      </footer>
      {/* </Footer> */}
    </>
  )
}

export default App
