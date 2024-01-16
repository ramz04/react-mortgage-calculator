import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Apply from "./Apply.jsx"
import ErrorPage from "./error-page.jsx"
import ConfirmationPage from "./Confirmation.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apply",
    element: <Apply />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
