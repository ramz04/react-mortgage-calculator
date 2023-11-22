/* eslint-disable no-unused-vars */
// themeStore.js
import { create } from "zustand"

const useThemeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))

export default useThemeStore
