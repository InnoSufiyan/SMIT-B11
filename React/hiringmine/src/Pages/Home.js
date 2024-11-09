import axios from "axios";
import { HiringMineContext } from "../App";
import Navbar from "../Components/Navbar";
import useDataFetch from "../CustomHooks/useDataFetch";
import "./App.css";
import { useContext, useEffect, useRef, useState } from "react";

function Home() {
  const { state, dispatch } = useContext(HiringMineContext);
  console.log(state);
  const { isDarkTheme, jobs, categories } = state;
  const [keyword, setKeyword] = useState("");
  const [categoryShow, setCategoryShow] = useState(8);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);

  async function jobsApiCall() {
    const response = await axios.get(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
    );
    console.log(response, "==>> response");
    dispatch({
      type: "Jobs Data",
      payload: response.data.data,
    });
  }

  // const [{ data: categories } = {}, categoriesError] = useDataFetch(
  //   `https://backend-prod.app.hiringmine.com/api/categories/all`
  // );
  // const [{ data: jobs } = {}, jobError] = useDataFetch(
  //   `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
  // );

  // const getJobsApiCall = () => {
  //   setLoader(true);
  //   fetch(
  //     `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setJobs(res.data);
  //       setLoader(false);
  //     });
  // };

  useEffect(() => {
    jobsApiCall();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: isDarkTheme ? "black" : "white",
        }}
      >
        <button
          onClick={() =>
            dispatch({
              type: "themeHandle",
            })
          }
        >
          theme toggle
        </button>
        <h1 className="alignCenter">HiringMine</h1>
        <div>
          <input
            placeholder="search jobs"
            type="text"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          {/* <button
            onClick={() => {
              if (keyword) getJobsApiCall();
            }}
          >
            Search
          </button> */}
        </div>
        <h3 className="alignCenter">Categories</h3>
        <div className="categories">
          {loader2 ? (
            <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" />
          ) : (
            categories?.slice(0, categoryShow).map((category) => (
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
            jobs?.map((job, index) => (
              <div className="card" key={index}>
                <p className="alignCenter">{job.designation}</p>
                <p className="alignCenter">{job.companyName}</p>
                <p className="alignCenter">
                  {job.applyEmail || job.applyPhone}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
