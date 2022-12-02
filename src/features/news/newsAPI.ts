// const getNewsApi = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bf3250e5fe4444cdaea8e021c2317fa4";

export async function fetchNews() {
  return fetch(getNewsApi).then(res => {console.log(res); return res.json()});
}
 