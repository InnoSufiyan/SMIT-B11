import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

const jobsSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    getCategoriesPending: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      state.error = "";
    },
    getCategoriesFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = jobsSlice;

export const {
  getCategoriesPending,
  getCategoriesSuccess,
  getCategoriesFailure,
} = actions;

export default reducer;
