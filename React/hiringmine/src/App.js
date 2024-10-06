import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [categoryShow, setCategoryShow] = useState(8);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);

  const getcategoriesApiCall = () => {
    setLoader2(true);
    fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
      .then((res) => res.json())
      .then((res) => {
        console.log("===>>categories ka data aagaya");
        setCategories(res.data);
      });
    setLoader2(false);
  };

  const getJobsApiCall = () => {
    setLoader(true);
    fetch(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("===>> jobs ka data aagaya");
        setJobs(res.data);
        setLoader(false);
      });
  };

  console.log(1111111111111);

  useEffect(() => {
    console.log("===>> useEffect k ander hun");
    getcategoriesApiCall();
  }, []);

  useEffect(() => {
    console.log("===>> useEffect2 k ander hun");
    getJobsApiCall();
  }, []);

  console.log(2222222222222);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="alignCenter">HiringMine</h1>
      <div>
        <input
          placeholder="search jobs"
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (keyword) getJobsApiCall();
          }}
        >
          Search
        </button>
      </div>
      <h3 className="alignCenter">Categories</h3>
      <div className="categories">
        {loader2 ? (
          <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" />
        ) : (
          categories.slice(0, categoryShow).map((category) => (
            <div className="card">
              <p>{category.name}</p>
              <p>{category.postCounts}</p>
            </div>
          ))
        )}
      </div>
      <div>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setCategoryShow(categoryShow + 4)}
        >
          Show More
        </button>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setCategoryShow(categoryShow - 4)}
        >
          Show Less
        </button>
      </div>

      <h3 className="alignCenter">Jobs</h3>
      <div className="categories">
        {loader ? (
          <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" />
        ) : (
          jobs.map((job) => (
            <div className="card">
              <p className="alignCenter">{job.designation}</p>
              <p className="alignCenter">{job.companyName}</p>
              <p className="alignCenter">{job.applyEmail || job.applyPhone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
