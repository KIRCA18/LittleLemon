import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="wrapper-404">
      <div>
        <h1 style={{ fontSize: "125px", fontFamily: "Karla" }}>404</h1>
        <br />
        <h3 style={{ fontSize: "25px", fontFamily: "Karla" }}>
          PAGE NOT FOUND...
        </h3>
        <br />
        <Link
          to="/"
          className="call-to-action"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontSize: "22px",
            fontWeight: "800",
            fontFamily: "Karla",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
