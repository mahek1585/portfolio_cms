import React, { useState } from "react";
import QueryService from "../services/Query.service";
import { toast } from "react-toastify";

const useQueries = () => {
  const [loading, setLoading] = useState(false);
  const submitQuery = async (queryData) => {
    setLoading(true);
    QueryService.add(queryData)
      .then((res) => {
        console.log(res);
        toast.success(`Hi ${queryData.name}, message sent 😉`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err?.response?.data?.message ||
            err?.message ||
            err?.response?.message ||
            "Something went wrong, try later"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { submitQuery, loading };
};

export default useQueries;
