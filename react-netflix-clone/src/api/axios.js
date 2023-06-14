import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "50bda7b34f8d8f1969dfd455cf267ad3",
    language: "ko-KR",
  },
});

export default instance;
