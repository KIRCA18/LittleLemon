import BookingForm from "../components/BookingForm"

const Booking = ({ availableTimes, dispatchAvailableTimes }) => {
  return (
    <div className="wrapper-404">
      <div className="booking">
        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
        />
      </div>
    </div>
  )
}

export default Booking
