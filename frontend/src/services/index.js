import Axios from "axios";
import { CONFIG } from "../config";

export default function axios(method, url, data) {
  let URL = `${CONFIG.BASE_URL}` + url;

  let config = {}
  if (localStorage.getItem('token')) {
    config = {
      headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    }
  }
  // console.log(config);
  if (method == "POST") {
    return Axios.post(URL, data, config);
  } else if (method == "GET") {
    return Axios.get(URL, config);
  } else if (method == "PUT") {
    return Axios.put(URL, data, config);
  }
}