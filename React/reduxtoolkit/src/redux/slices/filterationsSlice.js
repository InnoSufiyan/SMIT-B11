import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterations: [],
  error: null,
  loading: false,
};

const filterationsSlice = createSlice({
  name: "filterations",
  initialState,
  reducers: {
    getFilterationsPending: (state) => {
      state.loading = true;
    },
    getFilterationsSuccess: (state, { payload }) => {
      state.loading = false;
      state.filterations = payload;
    },
    getFilterationsFailure: (state) => {
      state.loading = true;
    },
  },
});

const { actions, reducer } = filterationsSlice;

export const {
  getFilterationsPending,
  getFilterationsSuccess,
  getFilterationsFailure,
} = actions;

export default reducer;
