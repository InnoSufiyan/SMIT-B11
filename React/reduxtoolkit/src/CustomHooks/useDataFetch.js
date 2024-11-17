import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const apiCall = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return [data, error];
};

export default useDataFetch;
