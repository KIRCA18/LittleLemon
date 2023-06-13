import { render, screen, fireEvent, renderHook } from "@testing-library/react"
import App from "./App"
import BookingForm from "./components/BookingForm"
import { useReducer } from "react"
import { act } from "react-dom/test-utils"
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("reducer test", () => {
  function timeReducer(state, action) {
    console.log("timeReducer")
    switch (action.type) {
      case "change_date": {
        //ask for available times
        console.log("change_date")
        return ["13:00"]
      }
    }
  }

  const { result } = renderHook(() =>
    useReducer(timeReducer, [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ])
  )
  act(() => result.current[1]({ type: "change_date" }))

  expect(result.current[0]).toEqual(["13:00"])
})


test("writing and reading local storage", () => {
  localStorage.setItem("reservations", "hello")
  expect(localStorage.getItem("reservations")).toEqual("hello")
})