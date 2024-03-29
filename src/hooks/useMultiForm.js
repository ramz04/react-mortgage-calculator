import { useState } from "react"

const useMultiForm = (formSteps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goBackwards = () => {
    if (currentIndex === 0) return
    setCurrentIndex((prev) => prev - 1)
  }

  const goForwards = () => {
    if (currentIndex === formSteps - 1) return

    setCurrentIndex((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // go to section
  const goToSection = (item) => {
    setCurrentIndex(item)
  }

  return {
    currentIndex,
    goForwards,
    goBackwards,
    goToSection,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps - 2,
    isConfirmation: currentIndex === formSteps - 1,
  }
}

export default useMultiForm
