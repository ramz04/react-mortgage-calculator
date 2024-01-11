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
    residentialStatus: {
      type: "",
      pleaseSpecify: "",
    },
    postalAddress: "",
    postalTown: "",
    usingPostalAddressSince: "",
  },
  maritalStatusAndDependents: {
    maritalStatus: "single",
    howMarried: "",
    numberOfDependants: {
      spouse: 0,
      children: 0,
      other: 0,
    },
    spouseDetails: {
      title: "",
      firstName: "",
      surname: "",
      mobileNumber: "",
    },
  },
  referee1: {
    title: "",
    firstName: "",
    surname: "",
    relationship: "",
    mobileNumber: "",
    dateOfBirth: "",
    residentialAddress: {
      addressLine1: "",
      addressLine2: "",
      nameOfCommunity: "",
      nearestLandmark: "",
      city: "",
      livingAtAddressSince: "",
    },
  },
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
}))

export default useFormStore
