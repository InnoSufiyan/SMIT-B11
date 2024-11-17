import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getJobFailure,
  getJobPending,
  getJobSuccess,
} from "../../redux/slices/jobSlice";
import axios from "axios";

const JobDetail = () => {
  const dispatch = useDispatch();
  const { sufiyan } = useParams();
  const { loading, error, job } = useSelector((state) => state.job);

  console.log(sufiyan, "==>> sufiyan");

  const fetchJobDetails = async (jobId) => {
    dispatch(getJobPending());

    try {
      const response = await axios.get(
        `https://backend-prod.app.hiringmine.com/api/jobAds/${jobId}`
      );
      console.log(response);
      dispatch(getJobSuccess(response.data.data));
    } catch (error) {
      dispatch(getJobFailure(error.message));
    }
  };

  useEffect(() => {
    fetchJobDetails(sufiyan);
  }, []);
  return <>{loading ? <h1>loading</h1> : <h1>{job.designation}</h1>}</>;
};

export default JobDetail;
