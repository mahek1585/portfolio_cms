import axios from "axios";
import { profileUrl } from "../utils/urls";

const getProfile = () => {
    return axios.get(profileUrl);
} 

const ProfileService = {
  getProfile,
};

export default ProfileService;