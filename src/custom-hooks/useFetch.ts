import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

export default function useFetch(
  query: string,
  endpoint: string,
  options: string
) {
  const [data, setData] = useState(null);
  const url = `${endpoint}${query}${options}`;

  useEffect(() => {
    const fetchData = async () => {
 
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error("Axios Error:", axiosError.message);
      }
    };

    fetchData();
  }, [url]);

  return { data };
}
