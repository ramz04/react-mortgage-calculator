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

function Page2({ formData, handleChange }) {
  return (
    <div>
      {/* Referee 2 */}
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
      {/* Employment Details */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Employment details
      </Typography>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Types of employment</FormLabel>
          <RadioGroup
            row
            aria-label="employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Permanent"
              control={<Radio />}
              label="Permanent"
            />
            <FormControlLabel
              value="Private practice"
              control={<Radio />}
              label="Private practice"
            />
            <FormControlLabel
              value="Self-employed"
              control={<Radio />}
              label="Self-employed"
            />
            <FormControlLabel
              value="Contract"
              control={<Radio />}
              label="Contract"
            />
            <FormControlLabel
              value="Part-time"
              control={<Radio />}
              label="Part-time"
            />
            <FormControlLabel
              value="Pensioner"
              control={<Radio />}
              label="Pensioner"
            />
            <FormControlLabel
              value="Student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="Unemployed"
              control={<Radio />}
              label="Unemployed"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Typography variant="caption" style={{ marginTop: "5px" }} gutterBottom>
        Employer
      </Typography>
      <Grid container spacing={1} style={{ marginBottom: "15px" }}>
        <Grid item xs={6}>
          <TextField
            label="Employer's name"
            variant="standard"
            fullWidth
            value={formData.employerName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Industry/sector"
            variant="standard"
            fullWidth
            value={formData.IndustrySector}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="standard"
            fullWidth
            value={formData.Address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Employer telephone"
            variant="standard"
            type="number"
            fullWidth
            value={formData.EmployerTelephone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Town/city"
            variant="standard"
            fullWidth
            value={formData.TownCity}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Typography variant="caption" gutterBottom>
        Employee
      </Typography>
      <Grid container spacing={1} style={{ marginBottom: "15px" }}>
        <Grid item xs={4}>
          <TextField
            label="Employment date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Employment date"
            value={formData.EmploymentDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Contract expiry date
(if applicable)"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Contract expiry date
(if applicable)"
            value={formData.ContractExpiryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="SSNIT number"
            type="number"
            variant="standard"
            fullWidth
            name="SSNIT number"
            value={formData.SSNITnumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Telephone number"
            type="number"
            variant="standard"
            fullWidth
            name="Telephone number"
            value={formData.telephoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Highest level of education"
            variant="standard"
            fullWidth
            name="Highest level of education"
            value={formData.educationLevel}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Occupation"
            variant="standard"
            fullWidth
            name="Occupation"
            value={formData.Occupation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Designation"
            variant="standard"
            fullWidth
            name="Designation"
            value={formData.Designation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Gross monthly salary"
            type="number"
            variant="standard"
            fullWidth
            name="Gross monthly salary"
            value={formData.GrossMonthlySalary}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Net monthly salary"
            type="number"
            variant="standard"
            fullWidth
            name="Net monthly salary"
            value={formData.NetMonthlySalary}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Staff number"
            type="number"
            variant="standard"
            fullWidth
            name="Staff number"
            value={formData.StaffNumber}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Typography variant="caption" gutterBottom>
        Previous employer (if less than 12 months with current employer)
      </Typography>
      <Grid item xs={12}>
        <TextField
          label="Period Employed"
          variant="standard"
          fullWidth
          name="employmentPeriod"
          value={formData.employmentPeriod}
          onChange={handleChange}
          placeholder="Start Date - End Date"
          helperText="Enter the period in the format 'Start Date - End Date'"
        />
      </Grid>
      {/* Main banking account details */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Main banking account details
      </Typography>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Account Type</FormLabel>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <RadioGroup
                row
                aria-label="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Cheque/Current"
                  control={<Radio />}
                  label="Cheque/Current"
                />
                <FormControlLabel
                  value="Savings"
                  control={<Radio />}
                  label="Savings"
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
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              label="Held in the name of"
              variant="standard"
              fullWidth
              name="heldInTheNameOf"
              value={formData.heldInTheNameOf}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset" style={{ marginTop: "16px" }}>
              <FormLabel component="legend">
                Transactional account/Salary account
              </FormLabel>
              <RadioGroup
                row
                aria-label="SalaryAccount"
                name="salaryAccount"
                value={formData.salaryAccount}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label="Bank or financial institution"
            variant="standard"
            fullWidth
            name="Bank or financial institution"
            value={formData.Bank}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch name"
            variant="standard"
            fullWidth
            name="Branch name"
            value={formData.BranchName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date opened [bank use]"
            variant="standard"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Date opened [bank use]"
            value={formData.DateOpened}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Account number"
            variant="standard"
            type="number"
            fullWidth
            name="Account number"
            value={formData.AccountNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch code"
            variant="standard"
            type="number"
            fullWidth
            name="Branch code"
            value={formData.BranchCode}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {/* Main banking account details */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Financial information (if applicable)
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label="Rent/mortgage payment"
            variant="standard"
            fullWidth
            name="Rent/mortgage payment"
            value={formData.RentMortgagePayment}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Vehicle finance payment"
            variant="standard"
            fullWidth
            name="Vehicle finance payment"
            value={formData.VehicleFinancePayment}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other verifiable monthly income"
            variant="standard"
            fullWidth
            name="Other verifiable monthly income"
            value={formData.OtherVerifiableMonthlyIncome}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other debt payments"
            variant="standard"
            fullWidth
            name="Other debt payments"
            value={formData.OtherDebtPayments}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Guaranteed bonus/13th cheque
(if applicable)"
            variant="standard"
            fullWidth
            name="Guaranteed bonus/13th cheque
(if applicable)"
            value={formData.GuaranteedBonus}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other monthly commitments"
            variant="standard"
            fullWidth
            name="Other monthly commitments"
            value={formData.monthlyCommitments}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {/* Existing unsecured loans and other credit facilities */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Existing unsecured loans and other credit facilities
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label="Total"
            variant="standard"
            fullWidth
            name="Total"
            value={formData.total}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: "15px" }}>
        <Grid item xs={6}>
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel component="legend">
              Have you been declared insolvent in the last ten years?
            </FormLabel>
            <RadioGroup
              row
              aria-label="insolent"
              name="insolent"
              value={formData.insolent}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="If yes, rehabilitation date"
            type="date"
            variant="standard"
            fullWidth
            InputLabelProps={{ shrink: true }}
            name="If yes, rehabilitation date"
            value={formData.rehabilitationDate}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: "15px" }}>
        <Grid item xs={6}>
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel component="legend">
              Are you a guarantor/surety for anybody or anything else?
            </FormLabel>
            <RadioGroup
              row
              aria-label="guarantor"
              name="guarantor"
              value={formData.guarantor}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="If yes, please give
details of guarantee"
            variant="standard"
            fullWidth
            name="If yes, please give
details of guarantee"
            value={formData.isGuarantor}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {/* Loan application details */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Loan application details (To be completed in the presence of Stanbic
        Officer)
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label="Loan amount applied for"
            variant="standard"
            type="number"
            fullWidth
            name="Loan amount applied for"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Loan Type</FormLabel>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <RadioGroup
                row
                aria-label="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Fixed term loan"
                  control={<Radio />}
                  label="Fixed term loan"
                />
                <FormControlLabel
                  value="Revolving term loan"
                  control={<Radio />}
                  label="Revolving term loan"
                />
                <FormControlLabel
                  value="Consumer Finance Term Loan"
                  control={<Radio />}
                  label="Consumer Finance Term Loan"
                />
                <FormControlLabel
                  value="EMS Non-guaranteed"
                  control={<Radio />}
                  label="EMS Non-guaranteed"
                />
                <FormControlLabel
                  value="EMS Guaranteed"
                  control={<Radio />}
                  label="EMS Guaranteed"
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
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel component="legend">Interest rate</FormLabel>
            <RadioGroup
              row
              aria-label="interestRate"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Fixed"
                control={<Radio />}
                label="Fixed"
              />
              <FormControlLabel
                value="Variable"
                control={<Radio />}
                label="Variable"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Score"
            variant="standard"
            fullWidth
            name="Score"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1} alignItems="center">
            <Typography variant="subtitle1" gutterBottom>
              Base rate
            </Typography>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="min"
                value={formData.minRate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="max"
                value={formData.maxRate}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1} alignItems="center">
            <Typography variant="subtitle1" gutterBottom>
              Margin
            </Typography>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="min"
                value={formData.min}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="max"
                value={formData.max}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Repayment method</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  aria-label="Repayment method"
                  name="Repayment method"
                  value={formData.RepaymentMethod}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Direct payroll deduction"
                    control={<Radio />}
                    label="Direct payroll deduction"
                  />
                  <FormControlLabel
                    value="Direct debit"
                    control={<Radio />}
                    label="Direct debit"
                  />
                  <FormControlLabel
                    value="Direct deposit"
                    control={<Radio />}
                    label="Direct deposit"
                  />
                  <FormControlLabel
                    value="Standing order"
                    control={<Radio />}
                    label="Standing order"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Typography variant="h6" align="center">
              Term of loan
            </Typography>
            <Grid item xs={3}>
              <TextField
                label="Months"
                variant="standard"
                type="number"
                fullWidth
                name="Months"
                value={formData.months}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Repayment amount (As per attached repayment schedule)."
                variant="standard"
                type="number"
                fullWidth
                name="Repayment amount"
                value={formData.RepaymentAmount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            style={{ marginTop: "5px" }}
            alignItems="center"
          >
            <FormLabel component="legend">Loan protection cover</FormLabel>
            <RadioGroup
              row
              aria-label="LoanProtectionCover"
              name="LoanProtectionCover"
              value={formData.LoanProtectionCover}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl
                component="fieldset"
                style={{ marginTop: "5px" }}
                alignItems="center"
              >
                <FormLabel component="legend">Accept lesser offer</FormLabel>
                <RadioGroup
                  row
                  aria-label="AcceptLesserOffer"
                  name="AcceptLesserOffer"
                  value={formData.AcceptLesserOffer}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Minimum amount"
                variant="standard"
                type="number"
                fullWidth
                name="Minimum amount"
                value={formData.MinimumAmount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Signature"
                variant="standard"
                type="number"
                fullWidth
                name="Signature"
                value={formData.Signature}
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
