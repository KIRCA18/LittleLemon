import { useParams } from "react-router-dom"

const ConfirmedBooking = () => {
  const { date, time, guests, occasion } = useParams()
  return (
    <div className="wrapper-404">
      <div
        style={{ background: "white", padding: "20px", borderRadius: "16px" }}
      >
        <h1>Booking Confirmed ✅</h1>
        <br />
        <h3>Booking Information</h3>
        <p>
          <br />
          <b>Date:</b> {date}
          <br />
          <b>Time:</b> {time}
          <br />
          <b>Number Of Guests:</b> {guests}
          <br />
          <b>Occasion:</b> {occasion}
        </p>
      </div>
    </div>
  )
}

export default ConfirmedBooking
