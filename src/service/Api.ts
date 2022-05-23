import axios from "axios";

const checkConnection = () => {
  return axios.get("https://google.com/");
};

export default {
  checkConnection,
} as const;
