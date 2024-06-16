import { create } from "zustand";
import countriesType from "../../type";

// types for states and satstates
type stateStore = {
  //states
  darkMode: boolean;
  countriesInfo: countriesType[];
  //setStates
  setDarkMode: (mode: boolean) => void;
  setCountriesInfo: (info: countriesType[]) => void;
};

export const useRestCountriesStore = create<stateStore>((set) => ({
  // states
  darkMode: false,
  countriesInfo: [],

  //setStates
  setDarkMode: (mode: boolean) => {
    set({ darkMode: mode });
  },
  setCountriesInfo: (info: countriesType[]) => {
    set({ countriesInfo: info });
  },
}));
