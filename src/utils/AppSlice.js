import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showButtons: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    openMenu: (state) => {
      state.isMenuOpen = true;
    },

    openButtonList: (state) => {
      state.showButtons = true;
    },

    closeButtonList: (state) => {
      state.showButtons = false;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  closeButtonList,
  openButtonList,
} = AppSlice.actions;
export default AppSlice.reducer;
