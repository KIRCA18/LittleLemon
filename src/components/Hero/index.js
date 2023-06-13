import { Link } from "react-router-dom"
import image from "../../img/restauranfood.jpg"
const Hero = () => {
  return (
    <section className="wrapper">
      <div className="flex content space-between center-row hero">
        <div className="full-background"></div>
        <div className="flex column" style={{ gap: "20px" }}>
          <span>
            <h1 className="display-title" style={{ color: "#F4CE14" }}>
              Little Lemon
            </h1>
            <h2 className="subtitle" style={{ color: "black" }}>
              Chicago
            </h2>
          </span>
          <p style={{ maxWidth: "40ch" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link
            to="/booking"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="call-to-action card-title"
          >
            Reserve a Table
          </Link>
        </div>
        <img className="hero-image" src={image} />
      </div>
    </section>
  )
}

export default Hero
