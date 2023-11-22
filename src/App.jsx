/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import Navbar from "./Components/Navbar"
import Result from "./Components/Result"
import SliderSelect from "./Components/SliderSelect"
import TenureSelect from "./Components/TenureSelect"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import useThemeStore from "./context"

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  })

  const { darkMode, toggleDarkMode } = useThemeStore()

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} />
              <TenureSelect data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
