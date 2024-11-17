import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import Dashboard from "./Pages/Dashboard.js";
import SuspendedUsers from "./Pages/SuspendedUsers.js";
import InactivePosts from "./Pages/InactivePosts.js";
import Jobs from "./Pages/Jobs/Jobs.js";
import ResponsiveAppBar from "./Components/Navbar.js";
import About from "./Pages/About.js";
import JobDetail from "./Pages/JobDetail/index.js";
import NotFoundPage from "./Pages/NotFoundPage.js";
import PrivateRoutes from "./Components/PrivateRoutes/index.js";
import { createContext, useReducer } from "react";
// import AuthenticateRoutes from "./Components/AuthenticateRoutes/index.js";

export const HiringMineContext = createContext();
export const JobsContext = createContext();
export const PeoplesContext = createContext();
export const CompaniesContext = createContext();

const initialValue = {
  isLoggedIn: false,
  isDarkTheme: false,
  currentUser: null,
  filterations: [],
  jobs: [],
  peoples: [],
  categories: [],
};

const jobsValue = {
  jobs: [],
  countriesJobs: [],
  citiesJobs: [],
};
const peoplesValue = {
  peoples: [],
  suspendedPeoples: [],
  blacklisted: [],
};

const companiesValue = {
  paidCompanies: [],
  unPaidCompanies: [],
  companies: [],
};

const reducer = (state, action) => {
  console.log(state, "==>>> state");
  console.log(action, "==>>> action");
  switch (action.type) {
    case "Jobs Data":
      var myState = { ...state };
      myState.jobs = action.payload;
      return myState;
      break;
    case "themeHandle":
      var myState = { ...state };
      myState.isDarkTheme = !myState.isDarkTheme;
      return myState;
      break;

    default:
      return state;
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [jobsState, jobsDispatch] = useReducer(jobsReducer, jobsValue);
  const [peopleState, peopleDispatch] = useReducer(peopleReducer, peoplesValue);
  const [companiesState, companiesDispatch] = useReducer(
    companiesReducer,
    companiesValue
  );

  return (
    <BrowserRouter>
      <HiringMineContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <JobsContext.Provider
          value={{
            jobsState,
            jobsDispatch,
          }}
        >
          <PeoplesContext.Provider
            value={{
              peopleState,
              peopleDispatch,
            }}
          >
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/jobsearch" element={<Jobs />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/jobDetail/salman/aqib/:tanzeel/:meriJobId"
                element={<JobDetail />}
              />

              {/* <Route element= {<AuthenticateRoutes />}> */}

              {/* <Route path="people" element={<PeoplePage />} /> */}
              {/* <Route path="profile" element={<Profile />} /> */}

              <Route path="/admin" element={<PrivateRoutes />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="suspendedUsers" element={<SuspendedUsers />} />
                <Route path="inactiveposts" element={<InactivePosts />} />
              </Route>
              {/* </Route> */}

              <Route path=":notFound" element={<NotFoundPage />} />
            </Routes>
          </PeoplesContext.Provider>
        </JobsContext.Provider>
      </HiringMineContext.Provider>
    </BrowserRouter>
  );
}
