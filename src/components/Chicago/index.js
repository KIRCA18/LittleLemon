import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import adrian from "../../img/Mario and Adrian A.jpg"
import chef from "../../img/restaurant chef B.jpg"

const Chicago = () => {
  return (
    <div className="wrapper">
      <section className="content flex space-between" style={{ gap: "20px" }}>
        <div style={{ flex: "1" }} className="flex column center">
          <h1 className="display-title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p style={{ textAlign: "justify" }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            flex: "1",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              zIndex: "0",
              width: "70%",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: "10px"
            }}
            src={adrian}
          />
          <img
            style={{
              position: "relative",
              marginTop: "calc(20%)",
              left: "0",
              zIndex: "0",
              width: "70%",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: "10px"
            }}
            src={chef}
            width={"250px"}
          />
        </div>
      </section>
    </div>
  )
}

export default Chicago
