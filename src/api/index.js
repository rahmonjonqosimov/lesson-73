import axios from "axios";
const mainUrl = axios.create({
  baseURL: "https://66361b78415f4e1a5e264a7b.mockapi.io/api/nextjs",
});
export default mainUrl;
