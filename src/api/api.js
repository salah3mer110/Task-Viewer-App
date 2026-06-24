import axios from "axios";

const apiKey = import.meta.env.API_KEY;
const apiUrl = import.meta.env.PROJECT_URL;
export default axios.create({
  baseURL: apiUrl,
  headers: {
    apikey: apiKey,
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    prefer: "return=representation",
  },
});
