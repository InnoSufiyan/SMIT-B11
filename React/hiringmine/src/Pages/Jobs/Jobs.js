import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard";
import Navbar from "../../Components/Navbar";
import "./App.css";
import { Pagination } from "@mui/material";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loader, setLoader] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  console.log("===>> huwa huwa rerender");

  const getJobsApiCall = () => {
    setLoader(true);
    fetch(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=${page}&keyWord=${keyword}&category=`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("===>> jobs ka data aagaya");
        setJobs(res.data);
        setLoader(false);
      });
  };

  useEffect(() => {
    console.log("===>> useEffect2 k ander hun");
    getJobsApiCall();
    return () => {
      console.log("UseEffect 1 mar raha");
    };
  }, [page]);

  return (
    <>
      <h1>Job Page</h1>
      <div className="jobCardSection">
        {jobs?.map((job) => (
          <JobCard jobData={job} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          count={10}
          color="secondary"
          shape="rounded"
          size="large"
          variant="outlined"
          onChange={(event, page) => {
            console.log(event, "==>> event");
            console.log(page, "==>> page");
            setPage(page);
          }}
        />
      </div>
    </>
  );
}
