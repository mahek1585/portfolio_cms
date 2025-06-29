import axios from "axios"
import { linksUrl } from "../utils/urls";

const getLinks = async() => {
    return axios.get(linksUrl);
}

const LinksService = {
    getLinks,
}

export default LinksService;