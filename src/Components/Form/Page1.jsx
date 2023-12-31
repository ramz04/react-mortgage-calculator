/* eslint-disable react/prop-types */
import {
  Typography,
  TextField,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material"

function Page1({ formData, handleChange, handleMaritalStatusChange }) {
  return (
    <div>
      {/* Personal Information */}
      <Typography variant="h6" color="primary" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            name="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="First name"
            variant="standard"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Surname"
            variant="standard"
            fullWidth
            name="Surname"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date of Birth"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              {/* Add more gender options if needed */}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="caption" gutterBottom>
              Personal Identification
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={9}>
                <RadioGroup
                  row
                  aria-label="identificationType"
                  name="identificationType"
                  value={formData.identificationType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="nhis"
                    control={<Radio />}
                    label="NHIS"
                  />
                  <FormControlLabel
                    value="driversLicense"
                    control={<Radio />}
                    label="Driver's License"
                  />
                  <FormControlLabel
                    value="passport"
                    control={<Radio />}
                    label="Passport"
                  />
                  <FormControlLabel
                    value="ghanaCard"
                    control={<Radio />}
                    label="Ghana Card"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="ID number"
                  variant="standard"
                  fullWidth
                  name="idNumber"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Telephone (country code - area code - phone number, e.g. +233 303
            8000)
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                label="Telephone(Home)"
                variant="standard"
                fullWidth
                name="teleHome"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Telephone(Work)"
                variant="standard"
                fullWidth
                name="teleWork"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Mobile number"
                variant="standard"
                fullWidth
                name="mobilePhone"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Current Residential Address */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Current Residential Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="House Number"
            variant="standard"
            fullWidth
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Street name"
            variant="standard"
            fullWidth
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name of community"
            variant="standard"
            fullWidth
            name="addressLine2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Nearest landmark"
            variant="standard"
            fullWidth
            name="Nearestlandmark"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Town/city"
            variant="standard"
            fullWidth
            name="city"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Living at address since"
            variant="standard"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="caption" gutterBottom>
              Residential Status
            </Typography>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <RadioGroup
                  row
                  aria-label="residentialType"
                  name="residentialType"
                  value={formData.residentialType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Rent"
                    control={<Radio />}
                    label="Rent"
                  />
                  <FormControlLabel
                    value="Own (mortgage)"
                    control={<Radio />}
                    label="Own (mortgage)"
                  />
                  <FormControlLabel
                    value="Own (not mortgage)"
                    control={<Radio />}
                    label="Own (not mortgage)"
                  />
                  <FormControlLabel
                    value="Living with parents"
                    control={<Radio />}
                    label="Living with parents"
                  />
                  <FormControlLabel
                    value="Employer provided"
                    control={<Radio />}
                    label="Employer provided"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="please specify"
                  variant="standard"
                  fullWidth
                  name="pleaseSpecify"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Postal address"
            variant="standard"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Town/city"
            variant="standard"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Using postal address since"
            variant="standard"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      {/* Marital Status and Dependents */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Marital Status and Dependents
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleMaritalStatusChange}
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="Single"
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
              />
              <FormControlLabel
                value="divorced"
                control={<Radio />}
                label="Divorced"
              />
              <FormControlLabel
                value="widowed"
                control={<Radio />}
                label="Widowed"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="caption" gutterBottom>
              How married
            </Typography>
            <RadioGroup
              row
              aria-label="residentialType"
              name="residentialType"
              value={formData.residentialType}
              onChange={handleChange}
            >
              <FormControlLabel
                value="CustomaryMarriage"
                control={<Radio />}
                label="Customary Marriage"
              />
              <FormControlLabel
                value="Ordinance"
                control={<Radio />}
                label="Ordinance"
              />
              <FormControlLabel
                value="Islamic"
                control={<Radio />}
                label="Islamic"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Number of dependants
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Spouse"
                variant="standard"
                type="number"
                fullWidth
                name="Spouse"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Children"
                variant="standard"
                type="number"
                fullWidth
                name="Children"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Other"
                variant="standard"
                type="number"
                fullWidth
                name="Other"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Spouse’s details (if applicable)
          </Typography>
          <Grid container spacing={2}>
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
            <Grid item xs={12}>
              <TextField
                label="Mobile number"
                variant="standard"
                fullWidth
                name="mobile number"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Referee 1 */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Referee 1 (Family member)
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

export default Page1
