import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobReducer);

  console.log(jobs, "===>> jobs from store");
  const fetchJobs = async () => {
    const jobs = await axios.get(
      "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=4&pageNo=1&keyWord=&category=&isPending=false"
    );
    console.log(jobs, "==>> jobs");
    dispatch(addJobs(jobs.data));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <h2>Jobs Number {jobs.count}</h2>
    </>
  );
};
