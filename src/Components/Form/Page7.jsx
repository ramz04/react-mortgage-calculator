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

export default function Page7() {
  return (
    <div>
      {/* Office use only (Customer Consultant) */}
      <Typography variant="h6" color="primary" gutterBottom>
        Office use only (Customer Consultant)
      </Typography>
      <Typography variant="subtitle1" style={{ marginTop: "5px" }} gutterBottom>
        <strong>Information checklist</strong>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="caption"
            style={{ marginTop: "10px" }}
            gutterBottom
          >
            Proof:
          </Typography>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Identity document</FormLabel>
              <RadioGroup
                row
                aria-label="Identity document"
                name="Identity document"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Employment</FormLabel>
              <RadioGroup row aria-label="Employment" name="Employment">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Income (most recent payslip)
              </FormLabel>
              <RadioGroup
                row
                aria-label="Income (most recent payslip)"
                name="Income (most recent payslip)"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Address (most recent utility statement)
              </FormLabel>
              <RadioGroup
                row
                aria-label="Address (most recent utility statement)"
                name="Address (most recent utility statement)"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="caption"
            style={{ marginTop: "10px" }}
            gutterBottom
          >
            Checks of:
          </Typography>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
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
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Six months’ account statements (new customers)
              </FormLabel>
              <RadioGroup
                row
                aria-label="Six months’ account statements
(new customers)"
                name="Six months’ account statements
(new customers)"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
                <FormControlLabel value="N/A" control={<Radio />} label="N/A" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Customer profile updated</FormLabel>
              <RadioGroup
                row
                aria-label="Customer profile updated"
                name="Customer profile updated"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
                <FormControlLabel value="N/A" control={<Radio />} label="N/A" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item fullWidth style={{ marginTop: "10px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">KYC</FormLabel>
              <RadioGroup row aria-label="KYC" name="KYC">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      {/* Office use only (Customer Consultant) */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        Branch
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Customer segment"
            variant="standard"
            fullWidth
            name="Customer segment"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Business introducer"
            variant="standard"
            fullWidth
            name="Business introducer"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Market segment"
            variant="standard"
            fullWidth
            name="Market segment"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch name/Identifier"
            variant="standard"
            fullWidth
            name="Branch name/Identifier"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="If current account held, please state type"
            variant="standard"
            fullWidth
            name="If current account held, please state type"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Stanbic Bank Ghana Ltd contact"
            variant="standard"
            fullWidth
            name="Stanbic Bank Ghana Ltd contact"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Comments"
            variant="standard"
            fullWidth
            name="Comments"
          />
        </Grid>
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
          <FormControl component="fieldset">
            <FormLabel component="legend">Scheme application</FormLabel>
            <RadioGroup
              row
              aria-label="Scheme application"
              name="Scheme application"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Scheme name"
            variant="standard"
            fullWidth
            name="Scheme name"
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
      {/* Office use only (Account Analyst) */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        Office use only (Account Analyst)
      </Typography>
      <Typography variant="subtitle1" style={{ marginTop: "5px" }} gutterBottom>
        <strong>Credit bureau details</strong>
      </Typography>
      <Grid item xs={6}>
        <TextField
          label="Bureau name"
          variant="standard"
          fullWidth
          name="Bureau name"
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} style={{ marginTop: "5px" }}>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Scheme application</FormLabel>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="Match found"
                  control={<Checkbox />}
                  label="Match found"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Match Not found"
                  control={<Checkbox />}
                  label="Match Not found"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Not available"
                  control={<Checkbox />}
                  label="Not available"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Bureau score"
              variant="standard"
              name="Bureau score"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "5px" }}>
        <Grid item xs={6}>
          <TextField
            label="Worst months past due"
            variant="standard"
            fullWidth
            name="Worst months past due"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Worst status"
            variant="standard"
            fullWidth
            name="Worst status"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Total number of enquires in 12 months"
            variant="standard"
            fullWidth
            name="Total number of enquires in 12 months"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Total number of judgments or handovers in 24 months"
            variant="standard"
            type="number"
            fullWidth
            name="Total number of judgments or handovers in 24 months"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Value of judgments or handovers"
            variant="standard"
            fullWidth
            name="Value of judgments or handovers"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Number of other payment profiles"
            variant="standard"
            fullWidth
            name="Number of other payment profiles"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Balance of other payment profiles"
            variant="standard"
            type="number"
            fullWidth
            name="Balance of other payment profiles"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Total instalment on other payment profiles"
            variant="standard"
            type="number"
            fullWidth
            name="Total instalment on other payment profiles"
          />
        </Grid>
      </Grid>
      {/* Transaction account details */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        Transaction account details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Account found</FormLabel>
            <RadioGroup row aria-label="Account found" name="Account found">
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Risk grade</FormLabel>
            <RadioGroup row aria-label="Risk grade" name="Risk grade">
              <FormControlLabel value="A" control={<Radio />} label="A" />
              <FormControlLabel value="B" control={<Radio />} label="B" />
              <FormControlLabel value="C" control={<Radio />} label="C" />
              <FormControlLabel value="D" control={<Radio />} label="D" />
              <FormControlLabel value="E" control={<Radio />} label="E" />
              <FormControlLabel value="F" control={<Radio />} label="F" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Account type</FormLabel>
            <RadioGroup row aria-label="Account type" name="Account type">
              <FormControlLabel
                value="Cheque account"
                control={<Radio />}
                label="Cheque account"
              />
              <FormControlLabel
                value="Transact plus"
                control={<Radio />}
                label="Transact plus"
              />
              <FormControlLabel
                value="Savings"
                control={<Radio />}
                label="Savings"
              />
              <FormControlLabel
                value="Transmission"
                control={<Radio />}
                label="Transmission"
              />
              <FormControlLabel
                value="Investment"
                control={<Radio />}
                label="Investment"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="Not given"
                control={<Radio />}
                label="Not given"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Number of R/Ds in last six months"
            variant="standard"
            type="number"
            fullWidth
            name="Number of R/Ds in last six months"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Number of days in excess prior month"
            variant="standard"
            type="number"
            fullWidth
            name="Number of days in excess prior month"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Minimum balance prior month"
            variant="standard"
            type="number"
            fullWidth
            name="Minimum balance prior month"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Maximum balance prior month"
            variant="standard"
            type="number"
            fullWidth
            name="Maximum balance prior month"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Overdraft limit"
            variant="standard"
            type="number"
            fullWidth
            name="Overdraft limit"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Total saving/investment balance(s)"
            variant="standard"
            type="number"
            fullWidth
            name="Total saving/investment balance(s)"
          />
        </Grid>
      </Grid>
      {/* Other loan account details */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        Other loan account details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Number of prior loans"
            variant="standard"
            type="number"
            fullWidth
            name="Number of prior loans"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Outstanding debit balance(s)"
            variant="standard"
            type="number"
            fullWidth
            name="Outstanding debit balance(s)"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Worst days past due"
            variant="standard"
            type="number"
            fullWidth
            name="Worst days past due"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Worst account status"
            variant="standard"
            type="number"
            fullWidth
            name="Worst account status"
          />
        </Grid>
      </Grid>
    </div>
  )
}
