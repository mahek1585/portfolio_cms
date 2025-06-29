import axios from "axios";
import { queriesUrl } from "../utils/urls";

const add = async (data) => {
  return axios.post(queriesUrl, data);
};

const QueryService = {
  add,
};

export default QueryService;
