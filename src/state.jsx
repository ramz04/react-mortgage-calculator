import { create } from "zustand"

const useFormStore = create((set) => ({
  personalInformation: {
    title: "",
    firstName: "",
    surName: "",
    dateOfBirth: "",
    gender: "",
    identificationType: "",
    idNumber: "",
    teleHome: "",
    teleWork: "",
    mobilePhone: "",
  },
  currentResidentialAddress: {
    addressLine1: "",
    addressLine2: "",
    nameOfCommunity: "",
    nearestLandmark: "",
    city: "",
    livingAtAddressSince: "",
    residentialType: "",
    pleaseSpecify: "",
    postalAddress: "",
    postalTown: "",
    usingPostalAddressSince: "",
  },
  maritalStatusAndDependents: {
    maritalStatus: "single",
    howMarried: "",
    spouse: "",
    children: "",
    other: "",
    spouseTitle: "",
    spouseFirstName: "",
    spouseSurname: "",
    spouseMobileNumber: "",
  },
  referee1: {
    title: "",
    firstName: "",
    surname: "",
    relationship: "",
    mobileNumber: "",
    dateOfBirth: "",

    addressLine1: "",
    addressLine2: "",
    nameOfCommunity: "",
    nearestLandmark: "",
    city: "",
    livingAtAddressSince: "",
  },
  referee2: {
    title: "",
    firstName: "",
    surName: "",
    relationship: "",
    mobileNumber: "",
    dateOfBirth: "",

    addressLine1: "",
    addressLine2: "",
    nameOfCommunity: "",
    nearestLandmark: "",
    city: "",
    livingAtAddressSince: "",
  },
  employmentDetails: {
    employmentType: "",

    name: "",
    industrySector: "",
    address: "",
    telephone: "",
    townCity: "",

    employmentDate: "",
    contractExpiryDate: "",
    ssnitNumber: "",
    telephoneNumber: "",
    highestEducation: "",
    occupation: "",
    designation: "",
    grossMonthlySalary: "",
    netMonthlySalary: "",
    staffNumber: "",

    previousEmployer: "",
  },
  mainAccountDetails: {
    type: "",
    pleaseSpecify: "",

    heldInTheNameOf: "",
    salaryAccount: "",
    bankOrFinancialInstitution: "",
    branchName: "",
    dateOpened: null,
    accountNumber: "",
    branchCode: "",
  },
  financialInformation: {
    rentMortgagePayment: "",
    vehicleFinancePayment: "",
    otherVerifiableMonthlyIncome: "",
    guaranteedBonus: "",
    otherMonthlyCommitments: "",
  },
  unsecuredLoans: {
    total: "",
    beenDeclaredInsolent: "",
    date: "",
    areYouAGuarantor: "",
    details: "",
  },
  loanApplicationsDetails: {
    amount: "",

    type: "",
    pleaseSSpecify: "",

    interestRate: "",
    score: "",

    baseRateMin: "",
    baseRateMax: "",

    MarginMin: "",
    MarginMax: "",

    repaymentMethod: "",

    months: "",
    repaymentAmount: "",

    loanProtectionCover: "",
    acceptLesserOffer: "",
    minAmount: "",
    signature: "",
  },
  loanProtectionBenefit: {
    rate: "",
    firstPremium: "",
    oneOffRate: "",
    firstPremium2L: "",
    value: "",
    type: "",
    details: "",
    name: "",
    accountNumber: "",
    branch: "",
    customerName: "",
    signature: "",
    date: "",
  },
  debitAuthorization: {
    name: "",
    customerName: "",
    signature: "",
    date: "",
  },
  customerDeclarationsAndAcceptance: {
    currentEmployment: "",
    customer: "",
    date: "",
    consultant: "",
    date2: "",
  },
  employerEndorsement: {
    name: "",
    companyName: "",
    endorsedBy: "",
    officialTitle: "",
    date: "",
  },
  authorizedSignatory: {
    signature: "",
    name: "",
    designation: "",
    date: "",
  },
  witness: {
    signature: "",
    name: "",
    designation: "",
    date: "",
  },
  acceptanceOfTermsAndCondition: {
    applicantName: "",
    signature: "",
    date: "",
  },
  handleChangeLoanProtectionBenefit: (name, value) =>
    set((state) => ({
      loanProtectionBenefit: {
        ...state.loanProtectionBenefit,
        [name]: value,
      },
    })),
  handleChangeDebitAuthorization: (name, value) =>
    set((state) => ({
      debitAuthorization: {
        ...state.debitAuthorization,
        [name]: value,
      },
    })),
  handleChangeCustomerDeclarationsAndAcceptance: (name, value) =>
    set((state) => ({
      customerDeclarationsAndAcceptance: {
        ...state.customerDeclarationsAndAcceptance,
        [name]: value,
      },
    })),
  handleChangeEmployerEndorsement: (name, value) =>
    set((state) => ({
      employerEndorsement: {
        ...state.employerEndorsement,
        [name]: value,
      },
    })),
  handleChangeAuthorizedSignatory: (name, value) =>
    set((state) => ({
      authorizedSignatory: {
        ...state.authorizedSignatory,
        [name]: value,
      },
    })),
  handleChangeWitness: (name, value) =>
    set((state) => ({
      witness: {
        ...state.witness,
        [name]: value,
      },
    })),
  handleChangeAcceptanceOfTermsAndCondition: (name, value) =>
    set((state) => ({
      acceptanceOfTermsAndCondition: {
        ...state.acceptanceOfTermsAndCondition,
        [name]: value,
      },
    })),
  handleChangeLoanApplicationDetails: (name, value) =>
    set((state) => ({
      loanApplicationsDetails: {
        ...state.loanApplicationsDetails,
        [name]: value,
      },
    })),
  handleChangeUnsecuredLoans: (name, value) =>
    set((state) => ({
      unsecuredLoans: {
        ...state.unsecuredLoans,
        [name]: value,
      },
    })),

  handleChangePersonalInformation: (name, value) =>
    set((state) => ({
      personalInformation: {
        ...state.personalInformation,
        [name]: value,
      },
    })),
  handleChangeResidentialAddress: (name, value) =>
    set((state) => ({
      currentResidentialAddress: {
        ...state.currentResidentialAddress,
        [name]: value,
      },
    })),
  handleChangeMaritalStatus: (name, value) =>
    set((state) => ({
      maritalStatusAndDependents: {
        ...state.maritalStatusAndDependents,
        [name]: value,
      },
    })),
  handleChangeReferee1: (name, value) =>
    set((state) => ({
      referee1: {
        ...state.referee1,
        [name]: value,
      },
    })),
  handleChangeReferee2: (name, value) =>
    set((state) => ({
      referee2: {
        ...state.referee2,
        [name]: value,
      },
    })),
  handleChangeEmploymentDetails: (name, value) =>
    set((state) => ({
      employmentDetails: { ...state.employmentDetails, [name]: value },
    })),
  handleChangeMainAccountDetails: (name, value) =>
    set((state) => ({
      mainAccountDetails: {
        ...state.mainAccountDetails,
        [name]: value,
      },
    })),
  handleChangeFinancialInformation: (name, value) =>
    set((state) => ({
      financialInformation: {
        ...state.financialInformation,
        [name]: value,
      },
    })),
}))

export default useFormStore
