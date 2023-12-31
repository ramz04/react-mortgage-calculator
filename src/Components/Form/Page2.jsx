/* eslint-disable react/prop-types */
import { Typography, TextField, Grid } from "@mui/material"

function Page2({ formData, handleChange }) {
  return (
    <div>
      {/* Referee 1 */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Referee 1 (Not Family member)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            name="title"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="First name"
            variant="standard"
            fullWidth
            name="FirstName"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Surname"
            variant="standard"
            fullWidth
            name="Surname"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Relationship"
            variant="standard"
            fullWidth
            name="Relationship"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Mobile number"
            variant="standard"
            fullWidth
            name="Mobile number"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Date of birth"
            variant="standard"
            fullWidth
            InputLabelProps={{ shrink: true }}
            type="date"
            name="Date of birth"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Residential address
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <TextField
                label="House Number"
                variant="standard"
                fullWidth
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Street name"
                variant="standard"
                fullWidth
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Name of community"
                variant="standard"
                fullWidth
                name="addressLine2"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Nearest landmark"
                variant="standard"
                fullWidth
                name="Nearestlandmark"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Town/city"
                variant="standard"
                fullWidth
                name="city"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Living at address since"
                variant="standard"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page2
