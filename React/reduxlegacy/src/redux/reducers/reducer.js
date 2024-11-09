import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer";
import { bikeReducer } from "./bikeReducer";
import { jobReducer } from "./jobReducer";
import { mobileReducer } from "./mobileReducer";

export const rootReducer = combineReducers({
  jobReducer: jobReducer,
  mobileReducer: mobileReducer,
  bikeReducer: bikeReducer,
  bankReducer: bankReducer,
});
