import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsPending, getJobsSuccess } from "../redux/slices/jobsSlice";
import {
  getCategoriesPending,
  getCategoriesSuccess,
} from "../redux/slices/categoriesSlice";

function Home() {
  const dispatch = useDispatch();
  const {
    categories,
    error: categoryError,
    loading: categoryLoader,
  } = useSelector((state) => state.categories);

  const {
    jobs,
    error: jobsError,
    loading: jobsLoader,
  } = useSelector((state) => state.jobs);

  console.log(jobsLoader, "==>> jobsLoader");

  const [keyword, setKeyword] = useState("");
  const [categoryShow, setCategoryShow] = useState(8);
  const isDarkTheme = false;

  async function jobsApiCall() {
    dispatch(getJobsPending());
    const response = await axios.get(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
    );
    console.log(response, "==>> response");
    dispatch(getJobsSuccess(response.data.data));
  }
  async function categoriesApiCall() {
    dispatch(getCategoriesPending());
    const response = await axios.get(
      `https://backend-prod.app.hiringmine.com/api/categories/all`
    );
    console.log(response, "==>> response");
    dispatch(getCategoriesSuccess(response.data.data));
  }

  useEffect(() => {
    jobsApiCall();
    categoriesApiCall();
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
        <button>theme toggle</button>
        <h1 className="alignCenter">HiringMine</h1>
        <div>
          <input
            placeholder="search jobs"
            type="text"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
        <h3 className="alignCenter">Categories</h3>
        <div className="categories">
          {categoryLoader ? (
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
          {jobsLoader ? (
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
