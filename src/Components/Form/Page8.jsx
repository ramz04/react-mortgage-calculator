/* eslint-disable no-unused-vars */
import React from "react"
import {
  TextField,
  Typography,
  Grid,
  Radio,
  RadioGroup,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material"

export default function Page8() {
  return (
    <div>
      {/* Office use only [(Account Analyst) (continued)] */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        Office use only [(Account Analyst) (continued)]
      </Typography>
      <Typography variant="subtitle1" style={{ marginTop: "5px" }} gutterBottom>
        <strong>Verification checklist</strong>
      </Typography>
      <Grid container spacing={2} style={{ marginTop: "5px" }}>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Proof of identity</FormLabel>
            <RadioGroup
              row
              aria-label="Proof of identity"
              name="Proof of identity"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Proof of income</FormLabel>
            <RadioGroup row aria-label="Proof of income" name="Proof of income">
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Proof of residential address
            </FormLabel>
            <RadioGroup
              row
              aria-label="Proof of residential address"
              name="Proof of residential address"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Other credit agreements/facilities
            </FormLabel>
            <RadioGroup
              row
              aria-label="Other credit agreements/facilities"
              name="Other credit agreements/facilities"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Existing account(s) conducted satisfactorily
            </FormLabel>
            <RadioGroup
              row
              aria-label="Existing account(s) conducted satisfactorily"
              name="Existing account(s) conducted satisfactorily"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Six months’ bank account statements (for new customer)
            </FormLabel>
            <RadioGroup
              row
              aria-label="Six months’ bank account statements (for new customer)"
              name="Six months’ bank account statements (for new customer)"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Proof of employment</FormLabel>
            <RadioGroup
              row
              aria-label="Proof of employment"
              name="Proof of employment"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Terms and conditions initialled by customer
            </FormLabel>
            <RadioGroup
              row
              aria-label="Terms and conditions initialled by customer"
              name="Terms and conditions initialled by customer"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Other loan account status</FormLabel>
            <RadioGroup
              row
              aria-label="Other loan account status"
              name="Other loan account status"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Salary</FormLabel>
            <RadioGroup row aria-label="Salary" name="Salary">
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Copy of marriage certificate
            </FormLabel>
            <RadioGroup
              row
              aria-label="Copy of marriage certificate"
              name="Copy of marriage certificates"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Consent letter (where settlement account is jointly operated)
            </FormLabel>
            <RadioGroup
              row
              aria-label="Consent letter (where settlement account is
jointly operated)"
              name="Consent letter (where settlement account is
jointly operated)"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reason"
            variant="standard"
            fullWidth
            name="Reason"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Staff name"
            variant="standard"
            fullWidth
            name="Staff name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Staff number"
            variant="standard"
            fullWidth
            name="Staff number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Signature" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
      </Grid>
      {/* Credit Evaluation Manager */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        Credit Evaluation Manager
      </Typography>
    </div>
  )
}
