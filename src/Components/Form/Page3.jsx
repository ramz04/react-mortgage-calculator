import { TextField, Typography } from "@mui/material"

export default function Page3() {
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
    </div>
  )
}
