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
  financialInformation,
  handleChangeFinancialInformation,
  handleChangeEmploymentDetails,
  handleChangeMainAccountDetails,
  mainAccountDetails,
  handleChangeUnsecuredLoans,
  unsecuredLoans,
  loanApplicationsDetails,
  handleChangeLoanApplicationDetails,
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
                value={Referee2.addressLine1}
                onChange={(e) =>
                  handleChangeReferee2("addressLine1", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Street name"
                variant="standard"
                fullWidth
                name="addressLine2"
                value={Referee2.addressLine2}
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
                value={Referee2.nameOfCommunity}
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
                value={Referee2.nearestLandmark}
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
                value={Referee2.city}
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
                value={Referee2.livingAtAddressSince}
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
            value={employeeDetails.name}
            onChange={(e) =>
              handleChangeEmploymentDetails("name", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Industry/sector"
            variant="standard"
            fullWidth
            name="industrySector"
            value={employeeDetails.industrySector}
            onChange={(e) =>
              handleChangeEmploymentDetails("industrySector", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="standard"
            fullWidth
            name="address"
            value={employeeDetails.address}
            onChange={(e) =>
              handleChangeEmploymentDetails("address", e.target.value)
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
            value={employeeDetails.telephone}
            onChange={(e) =>
              handleChangeEmploymentDetails("telephone", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Town/city"
            variant="standard"
            fullWidth
            value={employeeDetails.townCity}
            onChange={(e) =>
              handleChangeEmploymentDetails("townCity", e.target.value)
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
            value={employeeDetails.employmentDate}
            onChange={(e) =>
              handleChangeEmploymentDetails("employmentDate", e.target.value)
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
            value={employeeDetails.contractExpiryDate}
            onChange={(e) =>
              handleChangeEmploymentDetails(
                "contractExpiryDate",
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
            value={employeeDetails.ssnitNumber}
            onChange={(e) =>
              handleChangeEmploymentDetails("ssnitNumber", e.target.value)
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
            value={employeeDetails.telephoneNumber}
            onChange={(e) =>
              handleChangeEmploymentDetails("telephoneNumber", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Highest level of education"
            variant="standard"
            fullWidth
            name="Highest level of education"
            value={employeeDetails.highestEducation}
            onChange={(e) =>
              handleChangeEmploymentDetails("highestEducation", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Occupation"
            variant="standard"
            fullWidth
            name="Occupation"
            value={employeeDetails.occupation}
            onChange={(e) =>
              handleChangeEmploymentDetails("occupation", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Designation"
            variant="standard"
            fullWidth
            name="Designation"
            value={employeeDetails.designation}
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
            value={employeeDetails.grossMonthlySalary}
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
            value={employeeDetails.netMonthlySalary}
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
            value={employeeDetails.staffNumber}
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
          value={employeeDetails.previousEmployer}
          onChange={(e) =>
            handleChangeEmploymentDetails("previousEmployer", e.target.value)
          }
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
                value={mainAccountDetails.type}
                onChange={(e) =>
                  handleChangeMainAccountDetails("type", e.target.value)
                }
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
                value={mainAccountDetails.pleaseSpecify}
                onChange={(e) =>
                  handleChangeMainAccountDetails(
                    "pleaseSpecify",
                    e.target.value
                  )
                }
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
              value={mainAccountDetails.heldInTheNameOf}
              onChange={(e) =>
                handleChangeMainAccountDetails(
                  "heldInTheNameOf",
                  e.target.value
                )
              }
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
                value={mainAccountDetails.salaryAccount}
                onChange={(e) =>
                  handleChangeMainAccountDetails(
                    "salaryAccount",
                    e.target.value
                  )
                }
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                  name="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                  name="No"
                />
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
            value={mainAccountDetails.bankOrFinancialInstitution}
            onChange={(e) =>
              handleChangeMainAccountDetails(
                "bankOrFinancialInstitution",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch name"
            variant="standard"
            fullWidth
            name="Branch name"
            value={mainAccountDetails.branchName}
            onChange={(e) =>
              handleChangeMainAccountDetails("branchName", e.target.value)
            }
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
            value={mainAccountDetails.dateOpened}
            onChange={(e) =>
              handleChangeMainAccountDetails("dateOpened", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Account number"
            variant="standard"
            type="number"
            fullWidth
            name="Account number"
            value={mainAccountDetails.accountNumber}
            onChange={(e) =>
              handleChangeMainAccountDetails("accountNumber", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Branch code"
            variant="standard"
            type="number"
            fullWidth
            name="Branch code"
            value={mainAccountDetails.branchCode}
            onChange={(e) =>
              handleChangeMainAccountDetails("branchCode", e.target.value)
            }
          />
        </Grid>
      </Grid>
      {/* Financial information */}
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
            value={financialInformation.rentMortgagePayment}
            onChange={(e) =>
              handleChangeFinancialInformation(
                "rentMortgagePayment",
                e.target.value
              )
            }
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
            value={financialInformation.vehicleFinancePayment}
            onChange={(e) =>
              handleChangeFinancialInformation(
                "vehicleFinancePayment",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other verifiable monthly income"
            variant="standard"
            fullWidth
            name="Other verifiable monthly income"
            value={financialInformation.otherVerifiableMonthlyIncome}
            onChange={(e) =>
              handleChangeFinancialInformation(
                "otherVerifiableMonthlyIncome",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other debt payments"
            variant="standard"
            fullWidth
            name="Other debt payments"
            value={financialInformation.otherMonthlyCommitments}
            onChange={(e) =>
              handleChangeFinancialInformation(
                "otherMonthlyCommitments",
                e.target.value
              )
            }
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
            value={financialInformation.guaranteedBonus}
            onChange={(e) =>
              handleChangeFinancialInformation(
                "guaranteedBonus",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Other monthly commitments"
            variant="standard"
            fullWidth
            name="Other monthly commitments"
            value={financialInformation.otherMonthlyCommitments}
            onChange={(e) =>
              handleChangeFinancialInformation(
                "otherMonthlyCommitments",
                e.target.value
              )
            }
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
            value={unsecuredLoans.total}
            onChange={(e) =>
              handleChangeUnsecuredLoans("total", e.target.value)
            }
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
              name="beenDeclaredInsolent"
              value={unsecuredLoans.beenDeclaredInsolent}
              onChange={(e) =>
                handleChangeUnsecuredLoans(
                  "beenDeclaredInsolent",
                  e.target.value
                )
              }
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
            value={unsecuredLoans.date}
            onChange={(e) => handleChangeUnsecuredLoans("date", e.target.value)}
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
              value={unsecuredLoans.areYouAGuarantor}
              onChange={(e) =>
                handleChangeUnsecuredLoans("areYouAGuarantor", e.target.value)
              }
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
            value={unsecuredLoans.details}
            onChange={(e) =>
              handleChangeUnsecuredLoans("details", e.target.value)
            }
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
            value={loanApplicationsDetails.amount}
            onChange={(e) =>
              handleChangeLoanApplicationDetails("amount", e.target.value)
            }
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
                value={loanApplicationsDetails.type}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails("type", e.target.value)
                }
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
                value={loanApplicationsDetails.pleaseSpecify}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "loanType.pleaseSpecify",
                    e.target.value
                  )
                }
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
              value={loanApplicationsDetails.interestRate}
              onChange={(e) =>
                handleChangeLoanApplicationDetails(
                  "interestRate",
                  e.target.value
                )
              }
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
            value={loanApplicationsDetails.score}
            onChange={(e) =>
              handleChangeLoanApplicationDetails("score", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1}>
            <Typography variant="subtitle1" gutterBottom>
              Base rate
            </Typography>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="min"
                value={loanApplicationsDetails.baseRateMin}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "baseRateMin",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">-</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="max"
                value={loanApplicationsDetails.baseRateMax}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "baseRateMax",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={1}>
            <Typography variant="subtitle1" gutterBottom>
              Margin
            </Typography>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="min"
                value={loanApplicationsDetails.MarginMin}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "MarginMin",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">-</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="standard"
                fullWidth
                name="max"
                value={loanApplicationsDetails.MarginMax}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "MarginMax",
                    e.target.value
                  )
                }
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
                  value={loanApplicationsDetails.repaymentMethod}
                  onChange={(e) =>
                    handleChangeLoanApplicationDetails(
                      "repaymentMethod",
                      e.target.value
                    )
                  }
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
          <Grid container spacing={2}>
            <Typography variant="h6">Term of loan</Typography>
            <Grid item xs={3}>
              <TextField
                label="Months"
                variant="standard"
                type="number"
                fullWidth
                name="Months"
                value={loanApplicationsDetails.months}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails("months", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Repayment amount (As per attached repayment schedule)."
                variant="standard"
                type="number"
                fullWidth
                name="Repayment amount"
                value={loanApplicationsDetails.repaymentAmount}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "repaymentAmount",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" style={{ marginTop: "5px" }}>
            <FormLabel component="legend">Loan protection cover</FormLabel>
            <RadioGroup
              row
              aria-label="LoanProtectionCover"
              name="LoanProtectionCover"
              value={loanApplicationsDetails.loanProtectionCover}
              onChange={(e) =>
                handleChangeLoanApplicationDetails(
                  "loanProtectionCover",
                  e.target.value
                )
              }
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl component="fieldset" style={{ marginTop: "5px" }}>
                <FormLabel component="legend">Accept lesser offer</FormLabel>
                <RadioGroup
                  row
                  aria-label="AcceptLesserOffer"
                  name="AcceptLesserOffer"
                  value={loanApplicationsDetails.acceptLesserOffer}
                  onChange={(e) =>
                    handleChangeLoanApplicationDetails(
                      "acceptLesserOffer",
                      e.target.value
                    )
                  }
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
                value={loanApplicationsDetails.minAmount}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "minAmount",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Signature"
                variant="standard"
                type="number"
                fullWidth
                name="Signature"
                value={loanApplicationsDetails.signature}
                onChange={(e) =>
                  handleChangeLoanApplicationDetails(
                    "signature",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page2
