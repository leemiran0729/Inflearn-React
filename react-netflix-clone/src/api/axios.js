import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

export default instance;
