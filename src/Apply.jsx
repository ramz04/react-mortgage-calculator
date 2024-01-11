import { useState } from "react"
import Navbar from "./Components/Navbar"
import useThemeStore from "./context"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme } from "@mui/material/styles"
import useMultiForm from "./hooks/useMultiForm"
import { Stack } from "@mui/material"
import {
  Container,
  Paper,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material"
import Page1 from "./Components/Form/Page1"
import Page2 from "./Components/Form/Page2"
import Page3 from "./Components/Form/Page3"
import Page4 from "./Components/Form/Page4"
import Page5 from "./Components/Form/Page5"
import Page6 from "./Components/Form/Page6"
import Page7 from "./Components/Form/Page7"
import Page8 from "./Components/Form/Page8"

const MyPaper = styled(Paper)({
  marginTop: (theme) => theme.spacing(3),
  padding: (theme) => theme.spacing(3),
  boxShadow: "none", // Remove box shadow
  border: "none", // Remove border
  background: "none",
})

const initialValues = {
  // Personal Information
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",

  // Current Residential Address
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",

  // Marital Status and Dependents
  maritalStatus: "single",
  dependants: "",

  // Referee 1
  referee1Name: "",
  referee1PhoneNumber: "",

  // Referee 2
  referee2Name: "",
  referee2PhoneNumber: "",
}

const Apply = () => {
  const { darkMode, toggleDarkMode } = useThemeStore()

  const { currentIndex, goBackwards, goForwards, isFirstStep, isLastStep } =
    useMultiForm(10)

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

  const [formData, setFormData] = useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleMaritalStatusChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      maritalStatus: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add logic to submit the form data (e.g., send to server)
    console.log("Form data submitted:", formData)
    goForwards()
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Stack direction="row" justifyContent="center" mt={2}>
          <Typography variant="h2">Apply for a loan</Typography>
        </Stack>

        <Container maxWidth="lg" style={{ marginBlock: "10px" }}>
          <MyPaper>
            <form onSubmit={handleSubmit}>
              {currentIndex === 0 && (
                <Page1
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 1 && (
                <Page2
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 2 && (
                <Page3
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 3 && (
                <Page4
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 4 && (
                <Page5
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 5 && (
                <Page6
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 6 && (
                <Page7
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {currentIndex === 7 && (
                <Page8
                  formData={formData}
                  handleMaritalStatusChange={handleMaritalStatusChange}
                  handleChange={handleChange}
                />
              )}
              {/* Submit Button */}
              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  bg: "white",
                }}
              >
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "start",
                    pt: 4,
                  }}
                >
                  {!isFirstStep && (
                    <Button
                      onClick={goBackwards}
                      type="button"
                      variant="outlined"
                    >
                      Go Back
                    </Button>
                  )}
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "end",
                    pt: 4,
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ bg: "Marineblue", color: "Magnolia" }}
                  >
                    {isLastStep ? "Confirm" : "Next Step"}
                  </Button>
                </Box>
              </Box>
            </form>
          </MyPaper>
        </Container>
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default Apply
