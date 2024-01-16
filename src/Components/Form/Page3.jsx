/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TextField, Typography, Grid } from "@mui/material"

export default function Page3({
  employerEndorsement,
  handleChangeEmployerEndorsement,
  customerDeclarationsAndAcceptance,
  handleChangeCustomerDeclarations,
  handleChangeDebitAuthorization,
  handleChangeLoanProtectionBenefit,
  debitAuthorization,
  loanProtectionBenefit,
}) {
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
          style={{ width: "150px" }}
          name="rate"
          value={loanProtectionBenefit.rate}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("rate", e.target.value)
          }
        />
        {"   "}
        and forms part of the monthly loan repayment.
      </Typography>
      <Typography variant="body1" paragraph>
        First premium is GHS {"   "}
        <TextField
          variant="standard"
          size="small"
          style={{ width: "500px" }}
          name="firstPremium"
          value={loanProtectionBenefit.firstPremium}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("firstPremium", e.target.value)
          }
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
          style={{ width: "150px" }}
          name="oneOffRate"
          value={loanProtectionBenefit.oneOffRate}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("oneOffRate", e.target.value)
          }
        />
        {"   "}% would be deducted upfront from the approved loan amount.
      </Typography>
      <Typography variant="body1" paragraph>
        First premium is GHS {"   "}
        <TextField
          variant="standard"
          size="small"
          style={{ width: "500px" }}
          name="firstPremium2"
          value={loanProtectionBenefit.firstPremium2}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("firstPremium2", e.target.value)
          }
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
            name="value"
            value={loanProtectionBenefit.value}
            onChange={(e) =>
              handleChangeLoanProtectionBenefit("value", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Type"
            variant="standard"
            fullWidth
            name="type"
            value={loanProtectionBenefit.type}
            onChange={(e) =>
              handleChangeLoanProtectionBenefit("type", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Details"
            variant="standard"
            fullWidth
            name="details"
            value={loanProtectionBenefit.details}
            onChange={(e) =>
              handleChangeLoanProtectionBenefit("details", e.target.value)
            }
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
          name="name"
          style={{ width: "93%" }}
          value={loanProtectionBenefit.name}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("name", e.target.value)
          }
        />
        {"      "} hereby
      </Typography>
      <Typography variant="body1" paragraph>
        authorise Stanbic Bank Ghana Ltd to debit my account number {"   "}
        <TextField
          variant="standard"
          size="small"
          name="accountNumber"
          style={{ width: "60%" }}
          value={loanProtectionBenefit.accountNumber}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("accountNumber", e.target.value)
          }
        />
      </Typography>
      <Typography variant="body1" paragraph>
        Stanbic Bank Ghana Ltd {"   "}
        <TextField
          variant="standard"
          size="small"
          name="branch"
          value={loanProtectionBenefit.branch}
          onChange={(e) =>
            handleChangeLoanProtectionBenefit("branch", e.target.value)
          }
          style={{ width: "350px" }}
        />
        {"   "}
        branch, with the repayment amount of the loan amount finally approved by
        the bank, until the debt is fully repaid.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            label="Customer name"
            variant="standard"
            fullWidth
            name="customerName"
            value={loanProtectionBenefit.customerName}
            onChange={(e) =>
              handleChangeLoanProtectionBenefit("customerName", e.target.value)
            }
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Signature"
            variant="standard"
            fullWidth
            name="Signature"
            value={loanProtectionBenefit.signature}
            onChange={(e) =>
              handleChangeLoanProtectionBenefit("signature", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Date"
            value={loanProtectionBenefit.date}
            onChange={(e) =>
              handleChangeLoanProtectionBenefit("date", e.target.value)
            }
          />
        </Grid>
      </Grid>
      {/* Debit authorisation (Direct payroll deduction customer) - where applicable */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Debit authorisation (Direct payroll deduction customer) - where
        applicable
      </Typography>
      <Typography variant="body1" paragraph>
        I {"   "}
        <TextField
          variant="standard"
          size="small"
          name="name"
          style={{ width: "93%" }}
          value={debitAuthorization.name}
          onChange={(e) =>
            handleChangeDebitAuthorization("name", e.target.value)
          }
        />
        {"      "} hereby
      </Typography>
      <Typography variant="body1" paragraph>
        authorise my employer to deduct the monthly repayments for this facility
        if approved, direct from my salary and paid to Stanbic Bank Ghana
        Limited towards the repayment of my loan facility until the debt is
        fully paid.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            label="Customer name"
            variant="standard"
            fullWidth
            name="customerName"
            value={debitAuthorization.customerName}
            onChange={(e) =>
              handleChangeDebitAuthorization("customerName", e.target.value)
            }
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Signature"
            variant="standard"
            fullWidth
            name="Signature"
            value={debitAuthorization.signature}
            onChange={(e) =>
              handleChangeDebitAuthorization("signature", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Date"
            value={debitAuthorization.date}
            onChange={(e) =>
              handleChangeDebitAuthorization("date", e.target.value)
            }
          />
        </Grid>
      </Grid>
      {/* Customer declaration and acceptance */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Customer declaration and acceptance
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        I confirm that the details provided above and in any attached documents
        are a true reflection of my personal, employment and other details. In
        addition to accepting this loan offer, I agree that the loan will be
        fully repayable if I move my account to another bank or if my employment
        with current employer
        {"   "}
        <TextField
          variant="standard"
          size="small"
          name="currentEmployment"
          value={customerDeclarationsAndAcceptance.currentEmployment}
          onChange={(e) =>
            handleChangeCustomerDeclarations(
              "currentEmployment",
              e.target.value
            )
          }
          style={{ width: "40%" }}
        />
        {"   "}ceases. I further confirm that the general terms and conditions
        have been explained to me, and I agree to be bound by them, and that I
        am able to afford the repayments arising from the loan obligation. I
        also confirm that a copy of the facility terms and conditions have also
        been given to me.
      </Typography>
      <Typography variant="caption" gutterBottom>
        Signatures
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Customer"
            variant="standard"
            fullWidth
            name="Customer"
            value={customerDeclarationsAndAcceptance.customer}
            onChange={(e) =>
              handleChangeCustomerDeclarations("customer", e.target.value)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Date"
            value={customerDeclarationsAndAcceptance.date}
            onChange={(e) =>
              handleChangeCustomerDeclarations("date", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Customer consultant/Personal Solution
consultant on behalf of Stanbic Bank Ghana Ltd"
            variant="standard"
            fullWidth
            name="Customer consultant/Personal Solution
consultant on behalf of Stanbic Bank Ghana Ltd"
            value={customerDeclarationsAndAcceptance.consultant}
            onChange={(e) =>
              handleChangeCustomerDeclarations("consultant", e.target.value)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Date"
            value={customerDeclarationsAndAcceptance.date2}
            onChange={(e) =>
              handleChangeCustomerDeclarations("date2", e.target.value)
            }
          />
        </Grid>
      </Grid>
      {/* Employer Endorsement */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Employer Endorsement (Where applicable)
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        In consideration of Stanbic Bank Ghana Limited granting a loan to
        {"   "}
        <TextField
          variant="standard"
          size="small"
          name="name"
          style={{ width: "58%" }}
          value={employerEndorsement.name}
          onChange={(e) =>
            handleChangeEmployerEndorsement("name", e.target.value)
          }
        />
        {"   "}
        an employee of
        {"   "}
        <TextField
          variant="standard"
          size="small"
          name="companyName"
          value={employerEndorsement.companyName}
          onChange={(e) =>
            handleChangeEmployerEndorsement("companyName", e.target.value)
          }
          style={{ width: "74%" }}
        />
        {"   "}
        (full name of company). We confirm that all workplace information
        provided by the application on this application is correct.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Endorsed by"
            variant="standard"
            fullWidth
            name="Endorsed by"
            value={employerEndorsement.endorsedBy}
            onChange={(e) =>
              handleChangeEmployerEndorsement("endorsedBy", e.target.value)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Official title"
            variant="standard"
            fullWidth
            name="Official title"
            value={employerEndorsement.officialTitle}
            onChange={(e) =>
              handleChangeEmployerEndorsement("officialTitle", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Signature"
            variant="standard"
            fullWidth
            name="Signature"
            value={employerEndorsement.signature}
            onChange={(e) =>
              handleChangeEmployerEndorsement("signature", e.target.value)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="Date"
            value={employerEndorsement.date}
            onChange={(e) =>
              handleChangeEmployerEndorsement("date", e.target.value)
            }
          />
        </Grid>
      </Grid>
    </div>
  )
}
