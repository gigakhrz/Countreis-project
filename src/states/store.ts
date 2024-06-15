import { create } from "zustand";

// types for states and satstates
type stateStore = {
  //states
  darkMode: boolean;

  //setStates
  setDarkMode: (mode: boolean) => void;
};

export const useRestCountriesStore = create<stateStore>((set) => ({
  // states
  darkMode: false,

  //setStates
  setDarkMode: (mode: boolean) => {
    set({ darkMode: mode });
  },
}));
