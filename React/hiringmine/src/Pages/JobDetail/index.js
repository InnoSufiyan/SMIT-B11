import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { JobsContext } from "../../App";

const JobDetail = () => {
  const { jobsByCountry } = useContext(JobsContext);
  const rajTushal = useParams();
  const { meriJobId } = useParams();
  const [loader, setLoader] = useState();
  const [job, setJob] = useState({});

  const fetchJobDetails = (jobId) => {
    setLoader(true);
    fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/${jobId}`)
      .then((res) => res.json())
      .then((res) => {
        setJob(res.data);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchJobDetails(meriJobId);
  }, []);

  return <h1>{job.designation}</h1>;
};

export default JobDetail;
