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

function Page2({
  Referee2,
  handleChangeReferee2,
  employeeDetails,
  handleChangeEmploymentDetails,
}) {
  return (
    <div>
      {/* Referee 2 */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Referee 2 (Not Family member)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            name="title"
            value={Referee2.title}
            onChange={(e) => handleChangeReferee2("title", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="First name"
            variant="standard"
            fullWidth
            name="FirstName"
            value={Referee2.firstName}
            onChange={(e) => handleChangeReferee2("firstName", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Surname"
            variant="standard"
            fullWidth
            name="Surname"
            value={Referee2.surName}
            onChange={(e) => handleChangeReferee2("surName", e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Relationship"
            variant="standard"
            fullWidth
            name="Relationship"
            value={Referee2.relationship}
            onChange={(e) =>
              handleChangeReferee2("relationship", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Mobile number"
            variant="standard"
            fullWidth
            name="Mobile number"
            value={Referee2.mobileNumber}
            onChange={(e) =>
              handleChangeReferee2("mobileNumber", e.target.value)
            }
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
            value={Referee2.dateOfBirth}
            onChange={(e) =>
              handleChangeReferee2("dateOfBirth", e.target.value)
            }
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
                value={Referee2.residentialAddress.addressLine1}
                onChange={(e) =>
                  handleChangeReferee2(
                    "residentialAddress.addressLine1",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Street name"
                variant="standard"
                fullWidth
                name="addressLine2"
                value={Referee2.residentialAddress.addressLine2}
                onChange={(e) =>
                  handleChangeReferee2(
                    "residentialAddress.addressLine2",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Name of community"
                variant="standard"
                fullWidth
                name="addressLine2"
                value={Referee2.residentialAddress.nameOfCommunity}
                onChange={(e) =>
                  handleChangeReferee2(
                    "residentialAddress.nameOfCommunity",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Nearest landmark"
                variant="standard"
                fullWidth
                name="Nearestlandmark"
                value={Referee2.residentialAddress.nearestLandmark}
                onChange={(e) =>
                  handleChangeReferee2(
                    "residentialAddress.nearestLandmark",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Town/city"
                variant="standard"
                fullWidth
                name="city"
                value={Referee2.residentialAddress.city}
                onChange={(e) =>
                  handleChangeReferee2(
                    "residentialAddress.city",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Living at address since"
                variant="standard"
                type="date"
                name="livingAtAddressSince"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={Referee2.residentialAddress.livingAtAddressSince}
                onChange={(e) =>
                  handleChangeReferee2(
                    "residentialAddress.livingAtAddressSince",
                    e.target.value
                  )
                }
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
            value={employeeDetails.employmentType}
            onChange={(e) =>
              handleChangeEmploymentDetails("employmentType", e.target.value)
            }
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
            name="employerName"
            value={employeeDetails.employer.name}
            onChange={(e) =>
              handleChangeEmploymentDetails("employer.name", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Industry/sector"
            variant="standard"
            fullWidth
            name="industrySector"
            value={employeeDetails.employer.industrySector}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employer.industrySector",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="standard"
            fullWidth
            name="address"
            value={employeeDetails.employer.address}
            onChange={(e) =>
              handleChangeEmploymentDetails("employer.address", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Employer telephone"
            variant="standard"
            type="number"
            fullWidth
            name="employerTelephone"
            value={employeeDetails.employer.telephone}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employer.telephone",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Town/city"
            variant="standard"
            fullWidth
            value={employeeDetails.employer.townCity}
            onChange={(e) =>
              handleChangeEmploymentDetails("employer.townCity", e.target.value)
            }
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
            value={employeeDetails.employee.employmentDate}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.employmentDate",
                e.target.value
              )
            }
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
            value={employeeDetails.employee.contractExpiryDate}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.contractExpiryDate",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="SSNIT number"
            type="number"
            variant="standard"
            fullWidth
            name="SSNIT number"
            value={employeeDetails.employee.ssnitNumber}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.ssnitNumber",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Telephone number"
            type="number"
            variant="standard"
            fullWidth
            name="Telephone number"
            value={employeeDetails.employee.telephoneNumber}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.telephoneNumber",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Highest level of education"
            variant="standard"
            fullWidth
            name="Highest level of education"
            value={employeeDetails.employee.highestEducation}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.highestEducation",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Occupation"
            variant="standard"
            fullWidth
            name="Occupation"
            value={employeeDetails.employee.occupation}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.occupation",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Designation"
            variant="standard"
            fullWidth
            name="Designation"
            value={employeeDetails.employee.designation}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.designation",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Gross monthly salary"
            type="number"
            variant="standard"
            fullWidth
            name="Gross monthly salary"
            value={employeeDetails.employee.grossMonthlySalary}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.grossMonthlySalary",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Net monthly salary"
            type="number"
            variant="standard"
            fullWidth
            name="Net monthly salary"
            value={employeeDetails.employee.netMonthlySalary}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.netMonthlySalary",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Staff number"
            type="number"
            variant="standard"
            fullWidth
            name="Staff number"
            value={employeeDetails.employee.staffNumber}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "employee.staffNumber",
                e.target.value
              )
            }
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
              <RadioGroup row aria-label="accountType" name="accountType">
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
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset" style={{ marginTop: "16px" }}>
              <FormLabel component="legend">
                Transactional account/Salary account
              </FormLabel>
              <RadioGroup row aria-label="SalaryAccount" name="salaryAccount">
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch name"
            variant="standard"
            fullWidth
            name="Branch name"
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Account number"
            variant="standard"
            type="number"
            fullWidth
            name="Account number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch code"
            variant="standard"
            type="number"
            fullWidth
            name="Branch code"
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Vehicle finance payment"
            variant="standard"
            fullWidth
            name="Vehicle finance payment"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other verifiable monthly income"
            variant="standard"
            fullWidth
            name="Other verifiable monthly income"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other debt payments"
            variant="standard"
            fullWidth
            name="Other debt payments"
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other monthly commitments"
            variant="standard"
            fullWidth
            name="Other monthly commitments"
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
          <TextField label="Total" variant="standard" fullWidth name="Total" />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: "15px" }}>
        <Grid item xs={6}>
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel component="legend">
              Have you been declared insolvent in the last ten years?
            </FormLabel>
            <RadioGroup row aria-label="insolent" name="insolent">
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
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: "15px" }}>
        <Grid item xs={6}>
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel component="legend">
              Are you a guarantor/surety for anybody or anything else?
            </FormLabel>
            <RadioGroup row aria-label="guarantor" name="guarantor">
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
          />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Loan Type</FormLabel>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <RadioGroup row aria-label="loanType" name="loanType">
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
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel component="legend">Interest rate</FormLabel>
            <RadioGroup row aria-label="interestRate" name="interestRate">
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
          <TextField label="Score" variant="standard" fullWidth name="Score" />
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1} alignItems="center">
            <Typography variant="subtitle1" gutterBottom>
              Base rate
            </Typography>
            <Grid item xs={2}>
              <TextField variant="standard" fullWidth name="min" />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField variant="standard" fullWidth name="max" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1} alignItems="center">
            <Typography variant="subtitle1" gutterBottom>
              Margin
            </Typography>
            <Grid item xs={2}>
              <TextField variant="standard" fullWidth name="min" />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField variant="standard" fullWidth name="max" />
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Repayment amount (As per attached repayment schedule)."
                variant="standard"
                type="number"
                fullWidth
                name="Repayment amount"
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
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Signature"
                variant="standard"
                type="number"
                fullWidth
                name="Signature"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page2
