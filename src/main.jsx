/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import SignInPage from "./Clerk/routes/SignInPage.jsx"
import SignUpPage from "./Clerk/routes/SignUpPage.jsx"
import App from "./App.jsx"
import "./index.css"
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"
import Apply from "./Apply.jsx"
import ErrorPage from "./error-page.jsx"
import ConfirmationPage from "./Confirmation.jsx"
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react"
import Admin from "./Admin/Admin.jsx"

const router = createBrowserRouter([
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
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

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ClerkWithRoutes = () => {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <App />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/sign-in/*"
          element={
            <SignIn redirectUrl={"/apply"} routing="path" path="/sign-in" />
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <SignUp redirectUrl={"/apply"} routing="path" path="/sign-up" />
          }
        />
        <Route
          path="/apply"
          element={
            <>
              <SignedIn>
                <Apply />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </ClerkProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
