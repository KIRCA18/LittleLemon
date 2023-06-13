//Components
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//Images
import footer_image from "./img/restaurant chef B.jpg"
//CSS
import "./App.css"
import "./Typography.css"
import Header from "./components/Header"
import Booking from "./pages/Booking"
import { useReducer, useState } from "react"
import { fetchAPI } from "./api/api"
import ConfirmedBooking from "./pages/ConfirmedBooking"
import PageNotFound from "./pages/PageNotFound"
const router = (availableTimes, dispatchAvailableTimes) => {
  return createBrowserRouter([
    {
      element: <Header className="header-primary" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/booking",
          element: (
            <Booking
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
            />
          ),
        },
        {
          path: "/confirmedBooking/:date/:time/:guests/:occasion",
          element: <ConfirmedBooking />
        }, {
          path: "*",
          element: <PageNotFound />
        }
      ],
    },
  ])
}

function timeReducer(state, action) {
  switch (action.type) {
    case "change_date": {
      const apiresult = fetchAPI(action.date)
      console.log(apiresult)
      return apiresult
    }
  }
}

//TODO: Develop the components based on the figma
function App() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(timeReducer, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ])
  return (
    <RouterProvider router={router(availableTimes, dispatchAvailableTimes)} />
  )
}

export default App
