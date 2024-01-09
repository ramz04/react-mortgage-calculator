/* eslint-disable react/prop-types */
import { TextField, Typography, Grid } from "@mui/material"

export default function Page3({ formData, handleChange }) {
  return (
    <div>
      {/* Loan protection benefit - Stanbic Transactional account holder (official use) */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Loan protection benefit - Stanbic Transactional account holder (official
        use)
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Loan protection cover is included as part of the monthly repayments and
        covers the outstanding balance in the event of permanent disability or
        death of the borrower.
      </Typography>
      <Typography variant="body1" paragraph>
        Premium charged is at a rate of{"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "150px" }}
        />
        {"   "}
        and forms part of the monthly loan repayment.
      </Typography>
      <Typography variant="body1" paragraph>
        First premium is GHS {"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "500px" }}
        />
      </Typography>
      {/* Loan protection benefit - Direct payroll deduction customer (official use) */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Loan protection benefit - Direct payroll deduction customer (official
        use)
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This loan facility has an inherent Loan Protection insurance which
        covers the outstanding balance in the event of permanent disability and
        death of the borrower.
      </Typography>
      z
      <Typography variant="body1" paragraph>
        A one-off premium of{"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "150px" }}
        />
        {"   "}% would be deducted upfront from the approved loan amount.
      </Typography>
      <Typography variant="body1" paragraph>
        First premium is GHS {"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "500px" }}
        />
      </Typography>
      <Typography variant="subtitle1" color="secondary" gutterBottom>
        NB: The premium quoted above may vary depending on the final loan amount
        approved by our Central Credit Office.
      </Typography>
      {/* Security offered */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Security offered
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Value"
            variant="standard"
            fullWidth
            name="Value"
            value={formData.Value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Type"
            variant="standard"
            fullWidth
            name="Type"
            value={formData.Type}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Details"
            variant="standard"
            fullWidth
            name="Details"
            value={formData.Details}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {/* Debit authorisation (Stanbic Transactional account holder) - where applicable */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Debit authorisation (Stanbic Transactional account holder) - where
        applicable
      </Typography>
      <Typography variant="body1" paragraph>
        I {"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "94%" }}
        />
        {"      "} hereby
      </Typography>
      <Typography variant="body1" paragraph>
        authorise Stanbic Bank Ghana Ltd to debit my account number {"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "60%" }}
        />
      </Typography>
      <Typography variant="body1" paragraph>
        Stanbic Bank Ghana Ltd {"   "}
        <TextField
          variant="standard"
          size="small"
          value={FormData.premiumRate}
          onChange={FormData.handlePremiumRateChange}
          style={{ width: "350px" }}
        />
        branch, with the repayment amount of the loan amount finally approved by
        the bank, until the debt is fully repaid.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Value"
            variant="standard"
            fullWidth
            name="Value"
            value={formData.Value}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  )
}
