import axios from "axios";

export const newsRequest = async () => {
  return axios
    .get(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2913888cef8846b6ac15e7747f30d28f"
    )
    .then((res) => {
      console.log(res.data.articles);
    });
};
