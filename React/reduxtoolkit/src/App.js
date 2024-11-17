import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import ResponsiveAppBar from "./Components/Navbar.js";
import NotFoundPage from "./Pages/NotFoundPage.js";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";
import Jobs from "./Pages/Jobs/Jobs.js";
import JobDetail from "./Pages/JobDetail/index.js";
// import AuthenticateRoutes from "./Components/AuthenticateRoutes/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobsearch" element={<Jobs />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/jobDetail/:sufiyan" element={<JobDetail />} />

          {/* <Route path=":notFound" element={<NotFoundPage />} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
