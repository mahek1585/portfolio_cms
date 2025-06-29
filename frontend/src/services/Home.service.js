import axios from "axios";
import { skillsUrl, worksUrl } from "../utils/urls";
console.log("Calling skills API:", skillsUrl);

const getSkillList = async () => {
  return axios.get(skillsUrl);
};

const getWorkList = async () => {
  return axios.get(worksUrl);
};

const HomeService = {
  getSkillList,
  getWorkList,
};

export default HomeService;
