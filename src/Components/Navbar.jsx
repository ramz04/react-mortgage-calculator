/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/system"
import { Stack } from "@mui/system"
import Switch from "@mui/material/Switch"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Bank of React</Typography>
          <Stack>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              color="default"
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
