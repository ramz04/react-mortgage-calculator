/* eslint-disable no-unused-vars */
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

function Page1({
  personalInformation,
  currentResidentialAddress,
  MaritalStatus,
  Referee1,
  handleChangePersonalInformation,
  handleChangeResidentialAddress,
  handleChangeMaritalStatus,
  handleChangeReferee1,
}) {
  return (
    <div>
      {/* Personal Information */}
      <Typography variant="h6" color="primary" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            name="title"
            value={personalInformation.title}
            onChange={(e) =>
              handleChangePersonalInformation("title", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="First name"
            variant="standard"
            fullWidth
            name="firstName"
            value={personalInformation.firstName}
            onChange={(e) =>
              handleChangePersonalInformation("firstName", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Surname"
            variant="standard"
            fullWidth
            name="surName"
            value={personalInformation.surName}
            onChange={(e) =>
              handleChangePersonalInformation("surName", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date of Birth"
            type="date"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="dateOfBirth"
            value={personalInformation.dateOfBirth}
            onChange={(e) =>
              handleChangePersonalInformation("dateOfBirth", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={personalInformation.gender}
              onChange={(e) =>
                handleChangePersonalInformation("gender", e.target.value)
              }
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="caption" gutterBottom>
              Personal Identification
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={9}>
                <RadioGroup
                  row
                  aria-label="identificationType"
                  name="identificationType"
                  value={personalInformation.identificationType}
                  onChange={(e) =>
                    handleChangePersonalInformation(
                      "identificationType",
                      e.target.value
                    )
                  }
                >
                  <FormControlLabel
                    value="nhis"
                    control={<Radio />}
                    label="NHIS"
                  />
                  <FormControlLabel
                    value="driversLicense"
                    control={<Radio />}
                    label="Driver's License"
                  />
                  <FormControlLabel
                    value="passport"
                    control={<Radio />}
                    label="Passport"
                  />
                  <FormControlLabel
                    value="ghanaCard"
                    control={<Radio />}
                    label="Ghana Card"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="ID number"
                  variant="standard"
                  fullWidth
                  name="idNumber"
                  value={personalInformation.idNumber}
                  onChange={(e) =>
                    handleChangePersonalInformation("idNumber", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Telephone (country code - area code - phone number, e.g. +233 303
            8000)
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                label="Telephone(Home)"
                variant="standard"
                fullWidth
                name="teleHome"
                value={personalInformation.teleHome}
                onChange={(e) =>
                  handleChangePersonalInformation("teleHome", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Telephone(Work)"
                variant="standard"
                fullWidth
                name="teleWork"
                value={personalInformation.teleWork}
                onChange={(e) =>
                  handleChangePersonalInformation("teleWork", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Mobile number"
                variant="standard"
                fullWidth
                name="mobilePhone"
                value={personalInformation.mobilePhone}
                onChange={(e) =>
                  handleChangePersonalInformation("mobilePhone", e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Current Residential Address */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Current Residential Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="House Number"
            variant="standard"
            fullWidth
            name="addressLine1"
            value={currentResidentialAddress.addressLine1}
            onChange={(e) =>
              handleChangeResidentialAddress("addressLine1", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Street name"
            variant="standard"
            fullWidth
            name="addressLine2"
            value={currentResidentialAddress.addressLine2}
            onChange={(e) =>
              handleChangeResidentialAddress("addressLine2", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name of community"
            variant="standard"
            fullWidth
            name="nameOfCommunity"
            value={currentResidentialAddress.nameOfCommunity}
            onChange={(e) =>
              handleChangeResidentialAddress("nameOfCommunity", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Nearest landmark"
            variant="standard"
            fullWidth
            name="NearestLandmark"
            value={currentResidentialAddress.nearestLandmark}
            onChange={(e) =>
              handleChangeResidentialAddress("nearestLandmark", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Town/city"
            variant="standard"
            fullWidth
            name="city"
            value={currentResidentialAddress.city}
            onChange={(e) =>
              handleChangeResidentialAddress("city", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Living at address since"
            variant="standard"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="livingAtAddressSince"
            value={currentResidentialAddress.livingAtAddressSince}
            onChange={(e) =>
              handleChangeResidentialAddress(
                "livingAtAddressSince",
                e.target.value
              )
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="caption" gutterBottom>
              Residential Status
            </Typography>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <RadioGroup
                  row
                  aria-label="residentialType"
                  name="residentialType"
                  value={currentResidentialAddress.residentialType}
                  onChange={(e) =>
                    handleChangeResidentialAddress(
                      "residentialType",
                      e.target.value
                    )
                  }
                >
                  <FormControlLabel
                    value="Rent"
                    control={<Radio />}
                    label="Rent"
                  />
                  <FormControlLabel
                    value="Own (mortgage)"
                    control={<Radio />}
                    label="Own (mortgage)"
                  />
                  <FormControlLabel
                    value="Own (not mortgage)"
                    control={<Radio />}
                    label="Own (not mortgage)"
                  />
                  <FormControlLabel
                    value="Living with parents"
                    control={<Radio />}
                    label="Living with parents"
                  />
                  <FormControlLabel
                    value="Employer provided"
                    control={<Radio />}
                    label="Employer provided"
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
                  value={currentResidentialAddress.pleaseSpecify}
                  onChange={(e) =>
                    handleChangeResidentialAddress(
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
          <TextField
            label="Postal address"
            variant="standard"
            fullWidth
            name="postalAddress"
            value={currentResidentialAddress.postalAddress}
            onChange={(e) =>
              handleChangeResidentialAddress("postalAddress", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label=" Postal Town"
            variant="standard"
            fullWidth
            name="postalTown"
            value={currentResidentialAddress.postalTown}
            onChange={(e) =>
              handleChangeResidentialAddress(" postalTown", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Using postal address since"
            variant="standard"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            name="usingPostalAddressSince"
            value={currentResidentialAddress.usingPostalAddressSince}
            onChange={(e) =>
              handleChangeResidentialAddress(
                "usingPostalAddressSince",
                e.target.value
              )
            }
          />
        </Grid>
      </Grid>

      {/* Marital Status and Dependents */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Marital Status and Dependents
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="maritalStatus"
              name="maritalStatus"
              value={MaritalStatus.maritalStatus}
              onChange={(e) =>
                handleChangeMaritalStatus("maritalStatus", e.target.value)
              }
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="Single"
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
              />
              <FormControlLabel
                value="divorced"
                control={<Radio />}
                label="Divorced"
              />
              <FormControlLabel
                value="widowed"
                control={<Radio />}
                label="Widowed"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="caption" gutterBottom>
              How married
            </Typography>
            <RadioGroup
              row
              aria-label="howMarried"
              name="howMarried"
              value={MaritalStatus.howMarried}
              onChange={(e) =>
                handleChangeMaritalStatus("howMarried", e.target.value)
              }
            >
              <FormControlLabel
                value="CustomaryMarriage"
                control={<Radio />}
                label="Customary Marriage"
              />
              <FormControlLabel
                value="Ordinance"
                control={<Radio />}
                label="Ordinance"
              />
              <FormControlLabel
                value="Islamic"
                control={<Radio />}
                label="Islamic"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Number of dependents
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Spouse"
                variant="standard"
                type="number"
                fullWidth
                name="Spouse"
                value={MaritalStatus.spouse}
                onChange={(e) =>
                  handleChangeMaritalStatus(
                    "numberOfDependants.spouse",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Children"
                variant="standard"
                type="number"
                fullWidth
                name="Children"
                value={MaritalStatus.children}
                onChange={(e) =>
                  handleChangeMaritalStatus(
                    "numberOfDependants.children",
                    e.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Other"
                variant="standard"
                type="number"
                fullWidth
                name="Other"
                value={MaritalStatus.other}
                onChange={(e) =>
                  handleChangeMaritalStatus(
                    "numberOfDependants.other",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            Spouse’s details (if applicable)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Title"
                variant="standard"
                fullWidth
                name="spouseTitle"
                value={MaritalStatus.spouseTitle}
                onChange={(e) =>
                  handleChangeMaritalStatus("spouseTitle", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="First name"
                variant="standard"
                fullWidth
                name="FirstName"
                value={MaritalStatus.spouseFirstName}
                onChange={(e) =>
                  handleChangeMaritalStatus("spouseFirstName", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Surname"
                variant="standard"
                fullWidth
                name="spouseSurname"
                value={MaritalStatus.spouseSurname}
                onChange={(e) =>
                  handleChangeMaritalStatus("spouseSurname", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mobile number"
                variant="standard"
                fullWidth
                name="spouseMobileNumber"
                value={MaritalStatus.spouseMobileNumber}
                onChange={(e) =>
                  handleChangeMaritalStatus(
                    "spouseMobileNumber",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Referee 1 */}
      <Typography
        variant="h6"
        color="primary"
        style={{ marginTop: "40px" }}
        gutterBottom
      >
        Referee 1 (Family member)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            name="title"
            value={Referee1.title}
            onChange={(e) => handleChangeReferee1("title", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="First name"
            variant="standard"
            fullWidth
            name="FirstName"
            value={Referee1.firstName}
            onChange={(e) => handleChangeReferee1("firstName", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Surname"
            variant="standard"
            fullWidth
            name="Surname"
            value={Referee1.surname}
            onChange={(e) => handleChangeReferee1("surname", e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Relationship"
            variant="standard"
            fullWidth
            name="Relationship"
            value={Referee1.relationship}
            onChange={(e) =>
              handleChangeReferee1("relationship", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Mobile number"
            variant="standard"
            fullWidth
            name="Mobile number"
            value={Referee1.mobileNumber}
            onChange={(e) =>
              handleChangeReferee1("mobileNumber", e.target.value)
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
            value={Referee1.dateOfBirth}
            onChange={(e) =>
              handleChangeReferee1("dateOfBirth", e.target.value)
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
                value={Referee1.addressLine1}
                onChange={(e) =>
                  handleChangeReferee1("addressLine1", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Street name"
                variant="standard"
                fullWidth
                name="addressLine2"
                value={Referee1.addressLine2}
                onChange={(e) =>
                  handleChangeReferee1("addressLine2", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Name of community"
                variant="standard"
                fullWidth
                name="nameOfCommunity"
                value={Referee1.nameOfCommunity}
                onChange={(e) =>
                  handleChangeReferee1("nameOfCommunity", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Nearest landmark"
                variant="standard"
                fullWidth
                name="Nearestlandmark"
                value={Referee1.nearestLandmark}
                onChange={(e) =>
                  handleChangeReferee1("nearestLandmark", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Town/city"
                variant="standard"
                fullWidth
                name="city"
                value={Referee1.city}
                onChange={(e) => handleChangeReferee1("city", e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Living at address since"
                variant="standard"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                name="livingAtAddressSince"
                value={Referee1.livingAtAddressSince}
                onChange={(e) =>
                  handleChangeReferee1("livingAtAddressSince", e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page1
