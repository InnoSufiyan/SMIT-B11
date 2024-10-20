import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard";
import Navbar from "../../Components/Navbar";
import "./App.css";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import MultipleSelectCheckmarks from "../../Components/MultipleCheckMarks";
import useDataFetch from "../../CustomHooks/useDataFetch";

export default function Jobs() {
  const [loader, setLoader] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const [{ data: jobs } = {}, jobError] = useDataFetch(
    `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`
  );

  const [{ data: filterations } = {}, filterationsError] = useDataFetch(
    `https://backend-prod.app.hiringmine.com/api/filterations/all`
  );

  console.log(filterations, "==>>filterations");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {filterations?.filteration?.map((filter) => (
          <MultipleSelectCheckmarks filter={filter} />
        ))}
      </div>

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
            setPage(page);
          }}
        />
      </div>
    </>
  );
}
