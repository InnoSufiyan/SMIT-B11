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
import AuthenticateRoutes from "./Components/AuthenticateRoutes/index.js";

export default function App() {
  return (
    <BrowserRouter>
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

        <Route element= {<AuthenticateRoutes />}>

        <Route path="people" element={<PeoplePage />} />
        <Route path="profile" element={<Profile />} />

          <Route path="/admin" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="suspendedUsers" element={<SuspendedUsers />} />
            <Route path="inactiveposts" element={<InactivePosts />} />
          </Route>
        </Route>

        <Route path=":notFound" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
