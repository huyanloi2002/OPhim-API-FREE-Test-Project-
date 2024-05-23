import axios from "axios";

export const getApiUrl = async (url) => {
  console.log(url);
  const res = await axios.get(`${url}`);

  return res;
};
