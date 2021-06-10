import axios from "axios";

export const getMethod = async () => {
  console.log("GET-----");
  return await axios.get("http://localhost:8080/post/list");
};
