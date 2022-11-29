const getNewsApi = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2913888cef8846b6ac15e7747f30d28f";

export async function fetchNews() {
  return fetch(getNewsApi).then(res => res.json());
}
