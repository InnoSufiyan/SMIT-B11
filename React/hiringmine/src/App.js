import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Jobs from "./Pages/Jobs/Jobs.js";
import ResponsiveAppBar from "./Components/Navbar.js";
import About from "./Pages/About.js";

export default function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobsearch" element={<Jobs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
