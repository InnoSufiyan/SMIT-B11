import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  job: {},
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    getJobPending: (state) => {
      state.loading = true;
    },
    getJobSuccess: (state, { payload }) => {
      state.job = payload;
      state.loading = false;
      state.error = "";
    },
    getJobFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = jobSlice;

export const { getJobPending, getJobSuccess, getJobFailure } = actions;

export default reducer;
