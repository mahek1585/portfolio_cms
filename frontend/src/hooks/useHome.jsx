import React, { useEffect, useState } from "react";
import HomeService from "../services/Home.service";

const useHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skillList, setSkillList] = useState([]);
  const [workList, setWorkList] = useState([]);
  setIsLoading;

  useEffect(() => {
    Promise.all([HomeService.getSkillList(), HomeService.getWorkList()])
      .then(([skillRes, workRes]) => {
          console.log("Skill API full response:", skillRes);
          console.log("Skill List data:", skillRes.data); 
        // setSkillList(skillRes.data.data);
        setSkillList(skillRes.data);  
        setWorkList(workRes.data.data);
      })
      .catch((err) => {
        console.error("❌ API error:", err?.response?.data || err.message || err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { skillList, workList, isLoading };
};

export default useHome;




