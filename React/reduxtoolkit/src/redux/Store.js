import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./slices/jobsSlice.js";
import categoriesSlice from "./slices/categoriesSlice.js";
import jobSlice from "./slices/jobSlice.js";
import filterationsSlice from "./slices/filterationsSlice.js";

export const store = configureStore(
  {
    reducer: {
      job: jobSlice,
      jobs: jobsSlice,
      categories: categoriesSlice,
      filterations: filterationsSlice,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
