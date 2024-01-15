import Navbar from "./Components/Navbar"
import useThemeStore from "./context"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme } from "@mui/material/styles"
import useMultiForm from "./hooks/useMultiForm"
import { Stack } from "@mui/material"
import {
  Container,
  Paper,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material"
import Page1 from "./Components/Form/Page1"
import Page2 from "./Components/Form/Page2"
import Page3 from "./Components/Form/Page3"
import Page4 from "./Components/Form/Page4"
import Page5 from "./Components/Form/Page5"
import Page6 from "./Components/Form/Page6"
import Page7 from "./Components/Form/Page7"
import Page8 from "./Components/Form/Page8"
import useFormStore from "./state"

const MyPaper = styled(Paper)({
  marginTop: (theme) => theme.spacing(3),
  padding: (theme) => theme.spacing(3),
  boxShadow: "none", // Remove box shadow
  border: "none", // Remove border
  background: "none",
})

const Apply = () => {
  const { darkMode, toggleDarkMode } = useThemeStore()

  const { currentIndex, goBackwards, goForwards, isFirstStep, isLastStep } =
    useMultiForm(8)

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

  const {
    personalInformation,
    currentResidentialAddress,
    maritalStatusAndDependents,
    mainAccountDetails,
    referee1,
    referee2,
    employmentDetails,
    financialInformation,
    handleChangeFinancialInformation,
    handleChangePersonalInformation,
    handleChangeResidentialAddress,
    handleChangeMaritalStatus,
    handleChangeReferee1,
    handleChangeReferee2,
    handleChangeEmploymentDetail,
    handleChangeMainAccountDetails,
    unsecuredLoans,
    handleChangeUnsecuredLoans,
    loanApplicationsDetails,
    handleChangeLoanApplicationDetails,
    handleChangeAcceptanceOfTermsAndCondition,
    handleChangeWitness,
    handleChangeAuthorizedSignatory,
    handleChangeEmployerEndorsement,
    handleChangeCustomerDeclarationsAndAcceptance,
    handleChangeDebitAuthorization,
    handleChangeLoanProtectionBenefit,
    acceptanceOfTermsAndCondition,
    witness,
    authorizedSignatory,
    employerEndorsement,
    customerDeclarationsAndAcceptance,
    debitAuthorization,
    loanProtectionBenefit,
  } = useFormStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add logic to submit the form data (e.g., send to server)
    console.log("Form data submitted:", {
      personalInformation,
      currentResidentialAddress,
      maritalStatusAndDependents,
      referee1,
      referee2,
      unsecuredLoans,
      employmentDetails,
      mainAccountDetails,
      financialInformation,
      loanApplicationsDetails,
      acceptanceOfTermsAndCondition,
      witness,
      authorizedSignatory,
      employerEndorsement,
      customerDeclarationsAndAcceptance,
      debitAuthorization,
      loanProtectionBenefit,
    })
    goForwards()
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Stack direction="row" justifyContent="center" mt={2}>
          <Typography variant="h2">Apply for a loan</Typography>
        </Stack>

        <Container maxWidth="lg" style={{ marginBlock: "10px" }}>
          <MyPaper>
            <form onSubmit={handleSubmit}>
              {currentIndex === 0 && (
                <Page1
                  personalInformation={personalInformation}
                  currentResidentialAddress={currentResidentialAddress}
                  MaritalStatus={maritalStatusAndDependents}
                  Referee1={referee1}
                  handleChangePersonalInformation={
                    handleChangePersonalInformation
                  }
                  handleChangeResidentialAddress={
                    handleChangeResidentialAddress
                  }
                  handleChangeMaritalStatus={handleChangeMaritalStatus}
                  handleChangeReferee1={handleChangeReferee1}
                />
              )}
              {currentIndex === 1 && (
                <Page2
                  Referee2={referee2}
                  handleChangeReferee2={handleChangeReferee2}
                  employeeDetails={employmentDetails}
                  handleChangeEmploymentDetail={handleChangeEmploymentDetail}
                  handleChangeMainAccountDetails={
                    handleChangeMainAccountDetails
                  }
                  mainAccountDetails={mainAccountDetails}
                  financialInformation={financialInformation}
                  handleChangeFinancialInformation={
                    handleChangeFinancialInformation
                  }
                  unsecuredLoans={unsecuredLoans}
                  handleChangeUnsecuredLoans={handleChangeUnsecuredLoans}
                  loanApplicationsDetails={loanApplicationsDetails}
                  handleChangeLoanApplicationDetails={
                    handleChangeLoanApplicationDetails
                  }
                />
              )}
              {currentIndex === 2 && (
                <Page3
                  handleChangeLoanProtectionBenefit={
                    handleChangeLoanProtectionBenefit
                  }
                  loanProtectionBenefit={loanProtectionBenefit}
                  handleChangeDebitAuthorization={
                    handleChangeDebitAuthorization
                  }
                  debitAuthorization={debitAuthorization}
                  handleChangeCustomerDeclarations={
                    handleChangeCustomerDeclarationsAndAcceptance
                  }
                  customerDeclarationsAndAcceptance={
                    customerDeclarationsAndAcceptance
                  }
                  handleChangeEmployerEndorsement={
                    handleChangeEmployerEndorsement
                  }
                  employerEndorsement={employerEndorsement}
                />
              )}
              {currentIndex === 3 && (
                <Page4
                  handleChangeAuthorizedSignatory={
                    handleChangeAuthorizedSignatory
                  }
                  handleChangeWitness={handleChangeWitness}
                  authorizedSignatory={authorizedSignatory}
                  witness={witness}
                />
              )}
              {currentIndex === 4 && <Page5 />}
              {currentIndex === 5 && (
                <Page6
                  acceptanceOfTermsAndCondition={acceptanceOfTermsAndCondition}
                  handleChangeAcceptanceOfTermsAndCondition={
                    handleChangeAcceptanceOfTermsAndCondition
                  }
                />
              )}
              {currentIndex === 6 && <Page7 />}
              {currentIndex === 7 && <Page8 />}
              {/* Submit Button */}
              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  bg: "white",
                }}
              >
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "start",
                    pt: 4,
                  }}
                >
                  {!isFirstStep && (
                    <Button
                      onClick={goBackwards}
                      type="button"
                      variant="outlined"
                    >
                      Go Back
                    </Button>
                  )}
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "end",
                    pt: 4,
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ bg: "Marineblue", color: "Magnolia" }}
                  >
                    {isLastStep ? "Confirm" : "Next Step"}
                  </Button>
                </Box>
              </Box>
            </form>
          </MyPaper>
        </Container>
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default Apply
