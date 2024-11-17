import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard";
import "./App.css";
import { Pagination } from "@mui/material";
import MultipleSelectCheckmarks from "../../Components/MultipleCheckMarks";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getJobsPending, getJobsSuccess } from "../../redux/slices/jobsSlice";
import {
  getFilterationsPending,
  getFilterationsSuccess,
} from "../../redux/slices/filterationsSlice";

export default function Jobs() {
  const dispatch = useDispatch();
  const {
    loading: jobsLoading,
    error: jobsError,
    jobs,
  } = useSelector((state) => state.jobs);

  const { error: filterationsError, filterations } = useSelector(
    (state) => state.filterations
  );

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  async function jobsApiCall() {
    dispatch(getJobsPending());
    const response = await axios.get(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
    );
    dispatch(getJobsSuccess(response.data.data));
  }
  async function filterationsApiCall() {
    dispatch(getFilterationsPending());
    const response = await axios.get(
      `https://backend-prod.app.hiringmine.com/api/filterations/all`
    );
    console.log(response, "==>> response");
    dispatch(getFilterationsSuccess(response.data.data));
  }

  useEffect(() => {
    jobsApiCall();
    filterationsApiCall();
  }, []);

  return (
    <>
      <button>theme toggle</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: false ? "black" : "white",
        }}
      >
        {filterations.filteration?.map((filter) => (
          <MultipleSelectCheckmarks filter={filter} />
        ))}
      </div>

      <h1>Job Page</h1>
      {jobsLoading ? (
        <h1>loading</h1>
      ) : (
        <div className="jobCardSection">
          {jobs?.map((job) => (
            <JobCard jobData={job} />
          ))}
        </div>
      )}

      <div className="pagination">
        <Pagination
          count={10}
          color="secondary"
          shape="rounded"
          size="large"
          variant="outlined"
          onChange={(event, page) => {
            setPage(page);
          }}
        />
      </div>
    </>
  );
}
