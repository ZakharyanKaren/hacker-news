const getNewsApi = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b44f15187709443083e270f6e8665bcb";

export async function fetchNews() {
  return fetch(getNewsApi).then(res => {console.log(res); return res.json()});
}
 