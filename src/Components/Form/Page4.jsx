/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import {
  Container,
  Typography,
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material"

const listItemStyle = {
  marginBottom: "8px",
}

export default function Page4({
  witness,
  authorizedSignatory,
  handleChangeWitness,
  handleChangeAuthorizedSignatory,
}) {
  return (
    <div>
      {/*Credit Reference Bureau Consent clause */}
      <Typography variant="h6" color="primary" gutterBottom>
        Credit Reference Bureau Consent clause
      </Typography>
      <Typography variant="body1" paragraph>
        By submitting an application for credit facilities, you agree to be
        bound by the following requirements relating to the submission of
        information to the Credit Reference Bureau and the issue of a financial
        card whether or not the application for credit facilities is approved;
      </Typography>

      <Typography variant="h6" paragraph>
        <strong>Definitions</strong>
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>“Credit Reference Bureau”</strong> means all registered credit
        reference bureaus being utilized by the Bank from time-to-time;
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>“Customer Credit Information”</strong> means information
        concerning:
        <ol type="i">
          <li style={listItemStyle}>
            your credit history, including applications for credit, credit
            agreements to which you are or have been a party, pattern of payment
            or default under any such credit agreements, incidence of
            enforcement actions with respect to any such credit agreement, the
            circumstances of termination of any such credit agreement;
          </li>
          <li style={listItemStyle}>
            your financial history, including your past and current income,
            assets and liabilities and other matters with respect to your income
            and financial means;
          </li>
          <li style={listItemStyle}>
            your education, employment, career, professional or business
            history, including the circumstances of termination of any
            employment, career, professional or business relationship; or
          </li>
          <li>
            your identity, including your name, date of birth, identity number,
            marital status and family relationships, past and current addresses
            and other contact details and related matters.
          </li>
        </ol>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>“Data”</strong> means the raw factual information furnished by
        us to the Credit Reference Bureau including, but not limited to, credit
        applications, credit agreements, payment history or patterns or Customer
        Credit Information collected and arranged by the Credit Reference Bureau
        and its employees and processed by the Credit Reference Bureau’s
        computer systems which are stored in the database.
      </Typography>

      <Typography variant="h6" paragraph>
        <strong>Consent to disclosure of confidential information</strong>
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>You hereby</strong>
        <ol type="a">
          <li style={listItemStyle}>
            irrevocably consent to us collecting, receiving, compiling and
            retaining any Customer Credit Information about you for purposes of:
            <ol type="i">
              <li style={listItemStyle}>
                assisting us to perform our statutory of your creditworthiness;
                and
              </li>
              <li style={listItemStyle}>
                deciding whether or not to grant you credit; and
              </li>
              <li style={listItemStyle}>
                monitoring your credit profile should we grant you credit; and
              </li>
              <li>
                filing our Customer Credit Information with the Credit Reference
                Bureau.
              </li>
            </ol>
          </li>
          <li style={listItemStyle}>
            consent to the receipt, sharing, provision and exchange of data with
            Credit Reference Bureau and with other licensed financial
            institutions and microfinance deposit-taking institutions through
            the Credit Reference Bureau provided that you reserve the right to
            lodge a complaint with the Credit Reference Bureau or to challenge
            any Customer Credit Information held by the Credit Reference Bureau
            in your respect;
          </li>
          <li style={listItemStyle}>
            acknowledge that the Customer Credit Information obtained may
            include positive or negative information regarding your payment
            record;
          </li>
          <li style={listItemStyle}>
            acknowledge that the Credit Reference Bureau is authorised to
            collect negative information on the background and credit history
            relating to any non-performing obligations you may have;
          </li>
          <li>
            consent to the collection, recording, retention and submission of
            all data relating to your economic, financial and commercial
            obligations in order to determine your overall debt exposure and
            ability to pay.
          </li>
        </ol>
      </Typography>
      <Grid container spacing={2}>
        {/* Authorized Signatory */}
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="secondary">
            1 Authorized Signatory
          </Typography>
          <TextField
            label="Signature"
            variant="standard"
            fullWidth
            name="Signature"
            value={authorizedSignatory.signature}
            onChange={(e) =>
              handleChangeAuthorizedSignatory("signature", e.target.value)
            }
          />
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            name="name"
            value={authorizedSignatory.name}
            onChange={(e) =>
              handleChangeAuthorizedSignatory("name", e.target.value)
            }
          />
          <TextField
            label="Designation"
            variant="standard"
            fullWidth
            name="designation"
            value={authorizedSignatory.designation}
            onChange={(e) =>
              handleChangeAuthorizedSignatory("designation", e.target.value)
            }
          />
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="date"
            value={authorizedSignatory.date}
            onChange={(e) =>
              handleChangeAuthorizedSignatory("date", e.target.value)
            }
          />
        </Grid>

        {/* Witness */}
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="secondary">
            1 Witness
          </Typography>
          <TextField
            label="Signature"
            variant="standard"
            fullWidth
            name="signature"
            value={witness.signature}
            onChange={(e) => handleChangeWitness("signature", e.target.value)}
          />
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            name="name"
            value={witness.name}
            onChange={(e) => handleChangeWitness("name", e.target.value)}
          />
          <TextField
            label="Designation"
            variant="standard"
            fullWidth
            value={witness.signature}
            name="designation"
            onChange={(e) => handleChangeWitness("designation", e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="date"
            value={witness.date}
            onChange={(e) => handleChangeWitness("date", e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  )
}
