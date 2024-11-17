import { createSlice } from "@reduxjs/toolkit";

const jobInitialState = {
  loading: false,
  jobs: [],
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: jobInitialState,
  reducers: {
    getJobsPending: (state) => {
      state.loading = true;
    },
    getJobsSuccess: (state, { payload }) => {
      state.jobs = payload;
      state.loading = false;
      state.error = "";
    },
    getJobsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = jobsSlice;

export const { getJobsPending, getJobsSuccess, getJobsFailure } = actions;

export default reducer;

