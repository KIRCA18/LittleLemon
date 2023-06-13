import { useEffect, useState } from "react"
import { submitAPI } from "../../api/api"

import { Link, useNavigate } from "react-router-dom"
const BookingForm = ({ availableTimes, dispatchAvailableTimes }) => {
  const navigate = useNavigate()

  const [bookingInfo, setBookingInfo] = useState({
    date: new Date(),
    time: "",
    guests: 4,
    occasion: "Birthday",
  })

  useEffect(() => {
    dispatchAvailableTimes({ type: "change_date", date: bookingInfo.date })
    setBookingInfo({ ...bookingInfo, time: availableTimes[0] })
  }, [])

  useEffect(() => {
    dispatchAvailableTimes({ type: "change_date", date: bookingInfo.date })
    setBookingInfo({ ...bookingInfo, time: availableTimes[0] })
  }, [bookingInfo.date])

  return (
    <>
      <form
        style={{ display: "grid", gap: "16px" }}
        onSubmit={(e) => {
          e.preventDefault()
          const success = submitAPI(bookingInfo)
          if (success) {
            const prevReservations =
              JSON.parse(localStorage.getItem("reservations")) || []
            prevReservations.push(bookingInfo)
            localStorage.setItem(
              "reservations",
              JSON.stringify(prevReservations)
            )
            navigate(
              `/confirmedBooking/${bookingInfo.date
                .toISOString()
                .substring(0, 10)}/${bookingInfo.time}/${bookingInfo.guests}/${
                bookingInfo.occasion
              }`
            )
          }
        }}
      >
        <h2 style={{ textAlign: "center" }}>Table reservation</h2>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            defaultValue={bookingInfo.date.toISOString().substring(0, 10)}
            min={new Date().toISOString().substring(0, 10)}
            type="date"
            id="res-date"
            required={true}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, date: new Date(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <br />
          <select
            value={bookingInfo.time}
            id="res-time"
            required={true}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, time: e.target.value })
            }
          >
            {availableTimes &&
              availableTimes.map((value) => (
                <option key={value}>{value}</option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            value={bookingInfo.guests}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required={true}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, guests: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            value={bookingInfo.occasion}
            id="occasion"
            required={true}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, occasion: e.target.value })
            }
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="flex" style={{gap: "20px"}}>
          <Link
            to="/"
            className="call-to-action card-title"
            style={{
              backgroundColor: "white",
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              border: "1px solid #495e57"
            }}
          >
            Cancel
          </Link>
          <input
            style={{ flex: "1", fontWeight: "500" }}
            className="call-to-action card-title"
            type="submit"
            value="Make Your Reservation"
          />
        </div>
      </form>
    </>
  )
}

export default BookingForm
